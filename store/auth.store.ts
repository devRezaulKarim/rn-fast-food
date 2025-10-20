import { getCurrentUser } from "@/lib/appwrite";
import { User } from "@/type";
import { create } from "zustand";

type AuthState = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;

  setIsAuthenticated: (value: boolean) => void;
  setIsLoading: (value: boolean) => void;
  setUser: (user: User | null) => void;
  fetchCurrentUser: () => Promise<void>;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isLoading: false,
  user: null,

  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setIsLoading: (value) => set({ isLoading: value }),
  setUser: (user) => set({ user }),
  logout: () => set({ isAuthenticated: false, user: null }),
  fetchCurrentUser: async () => {
    try {
      set({ isLoading: true });
      const user = await getCurrentUser();
      if (user) set({ isAuthenticated: true, user: user as unknown as User });
    } catch (error) {
      console.log({ error });
      set({ isAuthenticated: false, user: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));
export default useAuthStore;
