import React, { useState } from "react";
import Circle from "better-react-spinkit/dist/Circle";
import { useEffect } from "react";
import { getCustomers } from "../../services/customerService";
import Customer from "./Customer";

const CustomerContainer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getCustomers();
        setCustomers(res.data["hydra:member"]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h1>Liste des clients</h1>
      {loading ? (
        <Circle />
      ) : (
        customers.map((customer, index) => {
          return <Customer key={index} customer={customer} />;
        })
      )}
    </>
  );
};

export default CustomerContainer;
