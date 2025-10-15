export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  platform: "com.rkz.fastfood",
  database: process.env.EXPO_PUBLIC_APPWRITE_DB_ID,
  userCollectionId: process.env.EXPO_PUBLIC_APPWRITE_DB_USER_TBL_ID,
};
