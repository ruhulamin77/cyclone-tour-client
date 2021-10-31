import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Order from '../../Order/Order';
import './ManageOrders.css'

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    console.log(orders);

    useEffect(() => {
        fetch('https://ghoulish-barrow-11758.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <Container>
            <div className=" my-5">
                <h2 className="text-warning my-5">Manage all orders</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Tour Place</th>
                            <th>Travellers Name</th>
                            <th>Travellers Email</th>
                            <th>Travellers Address</th>
                            <th>Status</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <Order pending={true} key={order._id} order={order}></Order>)
                        }
                    </tbody>
                </Table>

            </div>
        </Container>
    );
};

export default ManageOrders;