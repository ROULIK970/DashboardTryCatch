import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function CategoryList({categories}) {

  

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
          rows={categories}
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
      <Link to='/add-category'>Add Category +</Link>
    </>
  );
}


