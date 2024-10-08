import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiCategory = createApi({
  reducerPath: "apiCategory",
  tagTypes: ["TechProductsCategory"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/product/" }),
  endpoints: (build) => ({
    getCategoryProducts: build.query({
      query: ({
        page = 0,
        size = 9,
        token = "",
        memory = "",
        model = "",
        diagonal = "",
        price = "",
      }) =>
        `category?page=${page}&size=${size}&productToken=${token}&memory=${memory}&model=${model}&diagonal=${diagonal}&price=${price}`,
      providesTags: (result) =>
        result.content
          ? [
              ...result.content.map(({ id }) => ({
                type: "TechProductsCategory",
                id,
              })),
              "TechProductsCategory",
            ]
          : ["TechProductsCategory"],
    }),
  }),
});

export const { useGetCategoryProductsQuery } = apiCategory;
