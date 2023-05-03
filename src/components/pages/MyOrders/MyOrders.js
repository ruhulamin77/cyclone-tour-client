import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Order from '../../Order/Order';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://cyclone-tour-server.onrender.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .finally(() => setIsLoading(false));
  }, [orders]);
  return (
    <Container>
      <div className="my-5">
        <h2 className="text-warning my-5">My Bookings</h2>
        {isLoading ? (
          <Spinner animation="border" variant="dark" />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Tour Place</th>
                <th>Travelers Name</th>
                <th>Travelers Email</th>
                <th>Travelers Address</th>
                <th>Status</th>
                <th>Cancel Order</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <Order key={order._id} order={order}></Order>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </Container>
  );
};

export default MyOrders;
