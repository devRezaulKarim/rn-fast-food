import {
  CreateUserParams,
  GetMenuParams,
  MenuItem,
  SignInParams,
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
}: CreateUserParams) => {
  try {
    const newAccount = await account.create({
      userId: ID.unique(),
      email,
      password,
      name,
    });
    if (!newAccount) throw Error;
    await signIn({ email, password });
    const avatar = avatars.getInitialsURL(name);
    return await database.createDocument(
      appwriteConfig.database,
      appwriteConfig.userCollectionId,
      ID.unique(),
      { account_id: newAccount.$id, email, name, avatar }
    );
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw Error;
    const currentUser = await database.listDocuments(
      appwriteConfig.database,
      appwriteConfig.userCollectionId,
      [Query.equal("account_id", currentAccount.$id)]
    );
    if (!currentUser) throw Error;
    return currentUser.documents[0];
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
    return menus.documents;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const getCategories = async () => {
  try {
    const categories = await database.listDocuments(
      appwriteConfig.database,
      appwriteConfig.categoryCollectionId
    );
    return categories.documents;
  } catch (error) {
    throw new Error(error as string);
  }
};
