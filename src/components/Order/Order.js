import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Order.css'

const Order = (props) => {
    const { _id, packageName, name, address, email, status } = props.order;



    const handleDeleteUser = id => {
        const proceed = window.confirm("Are you sure, you want to delete?")
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully')
                        // const remainingUsers = orders.filter(user => user._id !== id)
                        // setOrders(remainingUsers)
                        window.location.reload()
                    }
                })
        }
    }


    const handleUpdateStatus = (id) => {
        axios.put(`http://localhost:5000/users/${id}`, { status: 'Approved' })
            .then(res => {
                window.location.reload()

            })

            .catch(err => {
                console.log(err)
            })

    }



    return (
        <tr>
            <td>{packageName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td><button className="btn btn-warning" onClick={() => handleUpdateStatus(_id)}>{status}</button></td>
            <td><button className="btn btn-danger" onClick={() => handleDeleteUser(_id)}>Cancel Tour</button></td>
        </tr>
    );
};

export default Order;