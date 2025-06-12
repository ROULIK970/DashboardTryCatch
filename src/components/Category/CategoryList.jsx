import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export default function CategoryList({categories}) {

  const [showModal, setShowModal] = useState(false)
  const [selectedCategoryForModal, setSelectedCategoryForModal] = useState(null)
const handleEditClick = (id) =>{
  console.log(id)
}

const handleDeleteClick = (id) => {
  console.log(id);
};

const handleViewClick = (id) => {
  const category = categories.filter(cat => cat.id === id)
  setSelectedCategoryForModal(category[0])
  console.log(selectedCategoryForModal)
  setShowModal(!showModal)
};

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
      renderCell: (params) => (
        <img
          src={params.value}
          alt="avatar"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      ),
    },
    {
      field: "description",
      headerName: "Description",
      width: 160,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {

        return [
          <GridActionsCellItem
            icon={<GrFormView />}
            label="View"
            onClick={() => handleViewClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<MdEdit />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<MdDelete />}
            label="Delete"
            onClick={() => handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];


  return (
    <>
      {showModal && (
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>
                <div>
                  <img
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={selectedCategoryForModal?.avatar}
                    alt="avatar"
                  />
                  <span>{selectedCategoryForModal?.fullName}</span>
                </div>
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{selectedCategoryForModal.description}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => handleViewClick()}>
                Close
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )}
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
      <Link to="/add-category">Add Category +</Link>
    </>
  );
}


