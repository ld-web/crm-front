import React, { useState, useEffect } from "react";
import "./App.scss";
import Axios from "axios";
import Circle from "better-react-spinkit/dist/Circle";

function App() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get("https://localhost:8000/api/customers")
      .then((res) => {
        setCustomers(res.data["hydra:member"]);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1>Liste des clients</h1>
      {loading ? (
        <Circle />
      ) : (
        customers.map((customer, index) => {
          console.log(customer);
          return (
            <div className="card" style={{ width: "18rem"}} key={index}>
              <div className="card-body">
                <h5 className="card-title">{customer.name}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default App;
