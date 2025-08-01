import { TQueryParams } from "../../types/globalType";
import baseApi from "../api/baseApi";


const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllProduct: builder.query({
            query: ({ limit, args }) => {
                const params = new URLSearchParams()
                if (args) {
                    args.forEach((item: TQueryParams) => {
                        params.append(item.name, item.id);
                    })
                }
                return {
                    url: `/products?limit=${limit}`,
                    method: "GET",
                }
            }
        }),
        getSingleProduct: builder.query({
            query: (id) => {
                return {
                    url: `/products/${id}`,
                    method: "GET",

                }
            }
        }),

       
        createCheckout: builder.mutation({
            query: (data) => {
                return {
                    url: "/checkout",
                    method: "POST",
                    body:data

                }
            }
        })
    })
})


export const { useGetAllProductQuery, 
    useGetSingleProductQuery, 
    useCreateCheckoutMutation

} = productManagementApi