import React, { useEffect, useState } from 'react';
import './Order.css'

const Order = (props) => {
    const { _id, packageName, name, address, email } = props.order;
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

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
                        const remainingUsers = orders.filter(user => user._id !== id)
                        setOrders(remainingUsers)
                        window.location.reload()
                    }
                })
        }
    }


    return (
        <tr>
            <td>{packageName}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address}</td>
            <td><button >Pending</button></td>
            <td><button onClick={() => handleDeleteUser(_id)}>Cancel Tour</button></td>
        </tr>
    );
};

export default Order;