import React, { useState } from 'react'
import './userlist.css'
import { DataGrid } from '@mui/x-data-grid';
import { UserRows } from '../../dummyData.js'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom';

export default function UserList() {

    const [data, setData] = useState(UserRows)

    const delItem = (id) => {

        setData(data.filter(itm => itm.id !== id))

    }

    const columns = [
        {
            field: 'id', headerName: 'ID', width: 130,

        },
        {
            field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
                return (
                    <div className="userInfo">
                        <img className="userimg" src={params.row.avatar} alt="ds"></img>
                        {params.row.user}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },

        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 150,


        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`user/${params.row.id}`}>
                            <button className="editbtn">Edit</button>
                        </Link>

                        <DeleteOutline className="delbtn" onClick={() => delItem(params.row.id)} />
                    </>

                )
            }
        },

    ];


    return (
        <div className="userInfo">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
