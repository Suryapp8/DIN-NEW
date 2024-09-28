import React, { useEffect, useState } from "react";
import { firestore } from "../firebase/firebase";
import { collection, getDocs } from "@firebase/firestore";

function Dashboard() {
  const [pickups, setPickups] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch Pick-Up Data
  const fetchPickups = async () => {
    try {
      const pickupCollection = collection(firestore, "Pick-Up");
      const pickupSnapshot = await getDocs(pickupCollection);
      const pickupList = pickupSnapshot.docs.map((doc) => doc.data());
      setPickups(pickupList);
    } catch (error) {
      console.error("Error fetching Pick-Up data:", error);
    }
  };

  // Fetch Order Data
  const fetchOrders = async () => {
    try {
      const orderCollection = collection(firestore, "Order-Details");
      const orderSnapshot = await getDocs(orderCollection);
      const orderList = orderSnapshot.docs.map((doc) => doc.data());
      setOrders(orderList);
    } catch (error) {
      console.error("Error fetching Orders data:", error);
    }
  };

  // Fetch Registered User Data
  const fetchUsers = async () => {
    try {
      const userCollection = collection(firestore, "Registered-Users");
      const userSnapshot = await getDocs(userCollection);
      const userList = userSnapshot.docs.map((doc) => doc.data());
      setUsers(userList);
    } catch (error) {
      console.error("Error fetching Registered Users data:", error);
    }
  };

  // Use useEffect to trigger data fetching on component mount
  useEffect(() => {
    fetchPickups();
    fetchOrders();
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Pick-Ups</h3>
      <ul>
        {pickups.map((pickup, index) => (
          <li key={index}>
            User: {pickup.user}, Date: {pickup.pickupdate}, Time: {pickup.pickUpTime}
          </li>
        ))}
      </ul>

      <h3>Orders</h3>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>
            Order from {order.user}, City: {order.city}, Date: {order.pickupdate}
          </li>
        ))}
      </ul>

      <h3>Registered Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            User: {user.name}, Email: {user.email}, Phone: {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
