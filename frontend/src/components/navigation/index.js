import React from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import "./navigation.css";

require("dotenv").config();
const Navigation = ({ setHomePageSection }) => {
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");

  return (
    <div className="navBar">
      <div className="logo">
        <p>feed back system</p>
      </div>
      <div className="nav">
        <ul>
          {token ? (
            <>
              {role === "admin" ? (
                <>
                  <li>
                    {" "}
                    <Link to="/allform" className="links">
                      form
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/login" className="links">
                  Log in
                </Link>{" "}
              </li>
            </>
          )}
          {token ? (
            <>
              {role === "user" ? (
                <>
                  <li>
                    <Link to="/form" className="links">
                      form
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
