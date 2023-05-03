import axios from 'axios';
import React from 'react';
import './Order.css';

const Order = (props) => {
  const { _id, packageName, name, address, email, status } = props.order;

  const handleDeleteUser = (id) => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
      const url = `https://cyclone-tour-server.onrender.com/users/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('User deleted successfully');
            // const remainingUsers = orders.filter(user => user._id !== id)
            // setOrders(remainingUsers)
            // window.location.reload()
          }
        });
    }
  };

  const handleUpdateStatus = (id) => {
    axios
      .put(`https://cyclone-tour-server.onrender.com/users/${id}`, {
        status: 'Approved',
      })
      .then((res) => {
        // window.location.reload();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <tr>
      <td>{packageName}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => handleUpdateStatus(_id)}
        >
          {status}
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDeleteUser(_id)}
        >
          Cancel Tour
        </button>
      </td>
    </tr>
  );
};

export default Order;
