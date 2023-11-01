import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
export const useSignInAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
    signInAccount(user),
  });
};
