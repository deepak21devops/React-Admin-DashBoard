import React, { useState } from 'react'
import './productlist.css'
import { DataGrid } from '@mui/x-data-grid';
import { ProductRows } from '../../dummyData.js'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom';



export default function ProductsList() {

    const [data, setData] = useState(ProductRows)

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
                        <img className="userimg" src={params.row.img} alt="ds"></img>
                        {params.row.product}
                    </div>
                )
            }
        },
        { field: 'status', headerName: 'Status', width: 200 },
        {
            field: 'stock',
            headerName: 'Stock',
            width: 150,
        },

        {
            field: 'price',
            headerName: 'Price',
            width: 150,


        },

        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`product/${params.row.id}`}>
                            <button className="editbtn">Edit</button>
                        </Link>

                        <DeleteOutline className="delbtn" onClick={() => delItem(params.row.id)} />
                    </>

                )
            }
        },

    ];

    return (
        <div className="productslist">
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
