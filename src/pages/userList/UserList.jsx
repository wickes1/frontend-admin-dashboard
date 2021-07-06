import './userList.css'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { userRows } from '../../dummyData'
import { useState } from 'react'

export default function UserList() {
  const [data, setData] = useState(userRows)
  const handleDelete = id => {
    setData(data.filter(item => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'user',
      headerName: 'UserName',
      width: 200,
      renderCell: params => {
        return (
          <div className="userListUser">
            <img className="userListUserImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        )
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 130,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 350,
      renderCell: params => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
  ]

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
