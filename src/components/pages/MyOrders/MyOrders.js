import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Order from "../../Order/Order";
import "./MyOrders.css";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  console.log(user);

  useEffect(() => {
    fetch(`https://ghoulish-barrow-11758.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <Container>
      <div className="my-5">
        <h2 className="text-warning my-5">My Orders</h2>
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
            {orders.map((order) => (
              <Order key={order._id} order={order}></Order>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default MyOrders;
