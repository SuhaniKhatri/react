import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://658a6732ba789a9622370388.mockapi.io",
  }),
  tagTypes: ["Student"],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => "/student",
      providesTags: ["Student"],
      transformResponse: (response, meta, args) => {
        // return response.slice(0, 5);  //to get only 5 data from in response
        return response.sort((a, b) =>
          a.studentName.localeCompare(b.studentName)
        );
      },
    }),
    getStudent: builder.query({
      query: (id) => `/student/${id}`,
      providesTags: ["Student"],
    }),
    addStudents: builder.mutation({
      query: (student) => ({
        url: "/student",
        method: "POST",
        body: student,
      }),
      invalidatesTags: ["Student"],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/student/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Student"],
    }),
    updateStudent: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/student/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Student"],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useGetStudentQuery,
  useAddStudentsMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
} = studentApi;
