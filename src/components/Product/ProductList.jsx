import React from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export default function ProductList({products}) {

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "fullName",
      headerName: "Name",
      width: 150,
      editable: true,
    },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 110,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 110,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      width: 110,
      editable: true,
    },
    {
      field: "discount",
      headerName: "Discount",
      width: 110,
      editable: true,
    },
    {
      field: "sold",
      headerName: "Sold",
      width: 110,
      editable: true,
    },
    {
      field: "tags",
      headerName: "Tags",
      width: 110,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 160,
      editable: true,
    },
  ];
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Link to="/add-product">Add Product +</Link>
    </>
  );
}
