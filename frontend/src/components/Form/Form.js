import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";
import "./Form.css";

const Forma = () => {
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [iq, setIq] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [adress, setAdress] = useState("");
  const [state1, setState1] = useState(false);
  const history = useHistory();

  const token = localStorage.getItem("token");

  const booking = () => {
    axios
      .post(
        `http://localhost:5000/form`,

        { userName, adress, description, phoneNumber, iq, status },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        setState1(true);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div id="outside">
        <div id="survey-form">
          <h1 id="title">Application</h1>
          <div>
            <legend>Personal Details</legend>
            <div>
              <label id="name-label">User_name:</label>
              <input
                className="ipt"
                type="text"
                required
                id="name"
                placeholder="Enter User_name here"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />{" "}
               {" "}
            </div>
            <div>
              <label id="Address-label">Address:</label>
              <input
                className="ipt"
                type="Address"
                id="address"
                placeholder="Enter address here"
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />{" "}
               {" "}
            </div>
            <div>
              <label id="Description-label">Description :</label>
              <input
                className="ipt"
                type="text"
                required
                id="email"
                placeholder="Enter Description here"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />{" "}
               {" "}
            </div>
            <div>
              <label id="number-label">Phone Number:</label>
              <input
                className="ipt"
                type="text"
                id="number"
                placeholder="Enter 10 digit number"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
               {" "}
            </div>
            <div>
              <label id="iq-label">IQ:</label>
              <input
                className="ipt"
                type="text"
                id="iq"
                placeholder="Enter IQ here"
                onChange={(e) => {
                  setIq(e.target.value);
                }}
              />{" "}
               {" "}
            </div>

            <div>
              <label for="Status">Status</label>
              <p>
                <div className="radio-button">
                  <input
                    type="radio"
                    value="Urgent"
                    name="status"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <label for="html">Urgent</label>
                  <input
                    type="radio"
                    value="Mid-Range"
                    name="status"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <label for="html">Mid-Range</label>
                  <input
                    type="radio"
                    value="Not Urgent"
                    name="status"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                  <label for="html">Not Urgent</label>
                </div>
              </p>
            </div>
          </div>
          <div id="submitbutton">
            <button type="submit" id="submit" onClick={booking}>
              Send your application
            </button>{" "}
             {" "}
          </div>
          <div>
          {state1 ? (
          <div
            style={{
              margin: "20px auto",
              color: "#16a085",
              width: "300px",
              textAlign: "center",
              fontSize: "22px",
            }}
          >
         The request was successful
          </div>
        ) : (
          ""
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forma;
