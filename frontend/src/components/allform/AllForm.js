import React, { useState, useEffect } from "react";
import axios from "axios";

import "./AllForm.css";

const AllForm = () => {
  const [form, setForm] = useState("");
  const [info, setInfo] = useState(false);
  const [status, setStatus] = useState("");


  useEffect(() => {
    axios
      .get(`http://localhost:5000/form`)
      .then((response) => {
        if (info) {
          setInfo(false);
        } else {
          setInfo(true);
        }
        setForm(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [info]);

  const changeStatus = (id) => {
    axios
      .put(
        `http://localhost:5000/form/${id}`,

        { status: status }
      )
      .then((result) => {
        setStatus(result.data);
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="all-form">
        {form &&
          form.map((ele, index) => {
            return (
              <div class="card" style={{ width: "35rem", marginLeft: "9%" }}>
                <div class="card-body">
                  <h5 class="card-title">user_name :{ele.userName} </h5>
                  <p class="card-text">Description : {ele.description}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">
                    Status : {ele.status}
                  </li>
                  <li class="list-group-item">Adress {ele.adress}</li>
                  <li class="list-group-item">
                    phoneNumber : {ele.phoneNumber}
                  </li>
                  <li class="list-group-item">iq : {ele.iq}</li>
                </ul>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button
                    onClick={() => {
                      setStatus("Urgent");
                      changeStatus(ele._id);
                    }}
                    type="button"
                    class="btn btn-danger"
                  >
                    Urgent
                  </button>

                  <button
                    onClick={() => {
                      setStatus("Mid-Range");
                      changeStatus(ele._id);
                    }}
                    type="button"
                    class="btn btn-warning"
                  >
                    Mid-Range
                  </button>
                  
                  <button
                    onClick={() => {
                      setStatus("Not Urgent");
                      changeStatus(ele._id);
                    }}
                    type="button"
                    class="btn btn-success"
                  >
                    Not Urgent
                  </button>
                  </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default AllForm;
