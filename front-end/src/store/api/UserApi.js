import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api`,
    prepareHeaders: (headers) => {
      const token = getJwtToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserProfile: ({
      query: () => '/my-profile',
    }),
    getUserProfileById: ({
      query: (id) => `/${id}`,
    }),
    getNotifications: ({
      query: () => '/notifications',
    }),
    updateUser: ({
      query: (user) => ({
        url: '/update-profile',
        method: 'POST',
        body: user,
      }),
    }),
    
  }),
});

// Export hooks
export const {
  useGetNotificationsQuery , 
  useGetUserProfileByIdQuery , 
  useGetUserProfileQuery , 
  useUpdateUserMutation,
} = userApi;
