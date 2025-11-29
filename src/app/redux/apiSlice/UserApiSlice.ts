import apiSlice from './ApiSlice';
import { BASE_URL, USERS_URL } from '../constants';

interface User {
  _id?: string;
  username: string; // Изменено с name на username
  email: string;
  password?: string;
  isAdmin?: boolean;
}

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  username: string; // Изменено с name на username
  email: string;
  password: string;
}

interface UpdateUserData {
  userId: string;
  username?: string; // Изменено с name на username
  email?: string;
  isAdmin?: boolean;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<{ user: User; token?: string }, LoginData>({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: "POST",
        body: data, 
      }) 
    }),
    
    logout: builder.mutation<void, void>({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }) 
    }),
    
    register: builder.mutation<User, RegisterData>({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data
      })
    }),
    
    profile: builder.mutation<User, Partial<User>>({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User']
    }),
    
    getUsers: builder.query<User[], void>({
      query: () => ({
        url: USERS_URL,
      }),
      providesTags: ['User'],
      keepUnusedDataFor: 5,
    }),
    
    deleteUsers: builder.mutation<void, string>({
      query: (userId) => ({
        url: `${USERS_URL}/${userId}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['User']
    }),
    
    updateUsers: builder.mutation<User, UpdateUserData>({
      query: (data) => ({
        url: `${USERS_URL}/${data.userId}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['User']
    }),

    getUserDetail: builder.query<User, string>({
      query: (id) => ({
        url: `${USERS_URL}/${id}`
      }),
      keepUnusedDataFor: 5,
      providesTags: ['User']
    }),
  }),
});

export const { 
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUsersMutation,
  useUpdateUsersMutation,
  useGetUserDetailQuery 
} = userApiSlice;