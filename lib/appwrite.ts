import {
  Category,
  CreateUserParams,
  Customization,
  GetMenuParams,
  MenuItem,
  SignInParams,
  User,
} from "@/type";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
  Storage,
} from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM_NAME!,
  bucket: process.env.EXPO_PUBLIC_APPWRITE_BUCKET_ID!,
  database: process.env.EXPO_PUBLIC_APPWRITE_DB_ID!,
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_DB_USER_TBL_ID!,
  categoryCollectionId: process.env.EXPO_PUBLIC_APPWRITE_DB_CATEGORY_TBL_ID!,
  menuCollectionId: process.env.EXPO_PUBLIC_APPWRITE_DB_MENU_TBL_ID!,
  customizationsCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_DB_CUSTOMIZATIONS_TBL_ID!,
  menuCustomizationsCollectionId:
    process.env.EXPO_PUBLIC_APPWRITE_DB_MENU_CUSTOMIZATIONS_TBL_ID!,
};

export const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
const avatars = new Avatars(client);

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
  } catch (error) {
    throw new Error(error as string);
  }
};

export const createUser = async ({
  email,
  password,
  name,
}: CreateUserParams): Promise<User> => {
  try {
    const newAccount = await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
    if (!newAccount) throw Error;
    await signIn({ email, password });
    const avatar = avatars.getInitialsURL(name).toString();
    const document = await database.createDocument<User>(
      appwriteConfig.database,
      appwriteConfig.userCollectionId,
      ID.unique(),
      { account_id: newAccount.$id, email, name, avatar }
    );
    const { $collectionId, $databaseId, $permissions, $sequence, ...rest } =
      document;
    return rest as User;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await database.listDocuments<User>(
      appwriteConfig.database,
      appwriteConfig.userCollectionId,
      [Query.equal("account_id", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    const user = currentUser.documents[0];
    if (!user) return null;
    const { $collectionId, $databaseId, $permissions, $sequence, ...rest } =
      user;
    return rest as User;
  } catch (error) {
    console.log({ error });
    throw new Error(error as string);
  }
};

export const getMenu = async ({
  category,
  query,
}: GetMenuParams): Promise<MenuItem[]> => {
  try {
    const queries: string[] = [];
    if (category) queries.push(Query.equal("categories", category));
    if (query) queries.push(Query.search("name", query));

    const menus = await database.listDocuments<MenuItem>(
      appwriteConfig.database,
      appwriteConfig.menuCollectionId,
      queries
    );
    return menus.documents.map(
      ({ $collectionId, $databaseId, $permissions, $sequence, ...rest }) => rest
    ) as MenuItem[];
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getCategories = async (): Promise<Category[]> => {
  try {
    const categories = await database.listDocuments<Category>(
      appwriteConfig.database,
      appwriteConfig.categoryCollectionId
    );
    return categories.documents.map(
      ({ $collectionId, $databaseId, $permissions, $sequence, ...rest }) => rest
    ) as Category[];
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getMenuById = async ({
  id,
}: {
  id: string;
}): Promise<MenuItem> => {
  try {
    const menu = await database.getDocument<MenuItem>(
      appwriteConfig.database,
      appwriteConfig.menuCollectionId,
      id
    );
    const { $collectionId, $databaseId, $permissions, $sequence, ...rest } =
      menu;
    return rest as MenuItem;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getCustomizationByMenuId = async ({
  menuId,
}: {
  menuId: string;
}): Promise<Customization[]> => {
  try {
    const menuCustomizations = await database.listDocuments(
      appwriteConfig.database,
      appwriteConfig.menuCustomizationsCollectionId,
      [Query.equal("menu", menuId)]
    );

    const customizationIds = menuCustomizations.documents.map(
      (doc) => doc.customizations
    );
    if (!customizationIds.length) return [];
    const customizations = await database.listDocuments<Customization>(
      appwriteConfig.database,
      appwriteConfig.customizationsCollectionId,
      [Query.equal("$id", customizationIds)]
    );
    return customizations.documents.map(
      ({ $collectionId, $databaseId, $permissions, $sequence, ...rest }) => rest
    ) as Customization[];
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getMenuWithCustomizationById = async ({
  id,
}: {
  id: string;
}): Promise<{ menu: MenuItem; customizations: Customization[] }> => {
  try {
    const menu = await getMenuById({ id });
    const customizations = await getCustomizationByMenuId({ menuId: id });

    return { menu, customizations };
  } catch (error) {
    throw new Error(error as string);
  }
};

export const signOut = async () => {
  try {
    const session = await account.deleteSession("current");
    return session;
  } catch (error) {
    throw new Error(error as string);
  }
};
