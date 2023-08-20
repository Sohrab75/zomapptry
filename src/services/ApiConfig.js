import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApi = createApi({
    reducerPath:"getApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://restapi-5cnn.onrender.com/",
        prepareHeaders: (headers) => {
            const authToken = sessionStorage.getItem('x-access-token');
            if (authToken) {
            headers.set('Authorization', `Bearer ${authToken}`);
            console.log("i am auth token",authToken);
            }
            return headers;
        },
        // kjdhjdsfkjjkhfssfbfsghg
        responseHandler: async (response) => {
            try {
            const data = await response.json();
            if (!response.ok) {
                // Parse the error message into a JavaScript object
                const errorData = JSON.parse(data.message || "{}");
                // If the response status is not ok (e.g., 400, 401, 409, etc.), throw an error with the error message
                throw { message: errorData.message || "An error occurred.", status: response.status };
            }
            // If the response status is ok, return the data
            return data;
            } catch (error) {
            // Handle the case where response.json() fails to parse the data as JSON
            throw { message: "Failed to parse response data.", status: response.status };
            }
        },
    
    }),
    endpoints:(builder)=>({
        getAllData:builder.query({
            query:()=>({
                url:"api/categories",
                method:"GET",
            })
        }),
        getDataCategoryId:builder.query({
            query:(id)=>{
                console.log("getting category id",id)
                return{
                    url:`api/products?categoryId=${id}`,
                    method:"GET",
                }
                
            }
        }),
        getAllFeatureData:builder.query({
            query:()=>({
                url:"api/features",
                method:"GET",
            })
        }),
        getProductDataById:builder.query({
            query:(id)=>{
                console.log("i am coming from useparam",id)
                return{
                    url:`api/products?id=${id}`,
                    method:"GET",
                }
            }
        }),
        postOrderDataById:builder.mutation({
            query:(orderData)=>{
                console.log("i am coming from order data",orderData)
                return{
                    url:"api/PlaceOrder",
                    method:"POST",
                    body:JSON.stringify(orderData),
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            }
        }),
        postRegistrationData:builder.mutation({
            query:(registerData)=>{
                console.log("i am coming from order data",registerData)
                return{
                    url:"api/users/register",
                    method:"POST",
                    body:JSON.stringify(registerData),
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            }
        }),
        postLoginData:builder.mutation({
            query:(loginData)=>{
                console.log("i am coming from order data",loginData)
                return{
                    url:"api/users/login",
                    method:"POST",
                    body:JSON.stringify(loginData),
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                }
            }
        }),
        
    })
})

export const {useGetAllDataQuery, useGetDataCategoryIdQuery, useGetAllFeatureDataQuery, useGetProductDataByIdQuery, usePostOrderDataByIdMutation, usePostRegistrationDataMutation, usePostLoginDataMutation} = getApi;