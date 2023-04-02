import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
    reducerPath: 'userAuthApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api/accounts/'}),
    endpoints: (builder) => ({
        // Register user request
        signupUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'register/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
        // Login user request
        loginUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'login/',
                    method: 'POST',
                    body: user,
                    headers: {
                        'Content-type': 'application/json',
                    }
                }
            }
        }),
        getLoggedUser: builder.query({
            query: () => {
                return {
                    url: 'profile/',
                    method: 'GET',
                    headers: {
                    
                    }
                }
            }
        }),
        sendVideo: builder.mutation({
            query: (filename) => {
                return {
                    url: 'videosubmission/',
                    method: 'POST',
                    body: filename,
                    headers: {

                    }
                }
            }
        }),
        getScore: builder.query({
            query: () => {
                return {
                    url: 'score/',
                    method: 'GET',
                    headers: {

                    }
                }
            }
        })
    })

})

export const { useSignupUserMutation, useLoginUserMutation, useGetLoggedUserQuery, 
        useSendVideoMutation, useGetScoreQuery } = userAuthApi