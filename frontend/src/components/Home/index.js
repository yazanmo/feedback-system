import React from "react";
import Med from "./../../components/Med.png";

import "./home.css";
export default function Home() {
  return (
    <div className="home">
      <main>
        <div className="home-page">
          <div className="block">
            <h1>Mediator App</h1>
            <br></br>
            <p className="intro">
              This site enables you to view the list of form
            </p>
          </div>
          <div className="block">
            <img className="img-home" src={Med} />
          </div>
        </div>
      </main>

      <div className="service-page">
        <h2>A MODERN, FULL-SERVICE feed back</h2>
      </div>

      <div className="container-service">
        <div className="card-service">
          <div className="card-service-partenr">
            <img
              className="symbol-service3"
              src="https://img.icons8.com/small/50/000000/search.png"
            />
            <div className="serv">
              <h3>Fill Form </h3>
              <p style={{ color: "#151e27" }}>
                You can fill form
              </p>
            </div>
          </div>

          <div className="card-service-partenr">
            <img
              className="symbol-service3"
              src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-booking-hotel-service-becris-lineal-becris.png"
            />

            <div className="serv">
              <h3>Change Status</h3>
              <p style={{ color: "#151e27" }}>
                You can change the status
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <link
        rel="stylesheet"
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      ></link>
      <link
        href="http://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
        type="text/css"
      ></link>

      <footer class="footer-distributed" id="contact">
        <div class="footer-left">
          <p class="footer-company-name">Yazan &copy; 2021</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>JORDAN</span> AMMAN
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+962787099537</p>
          </div>
        </div>

        <div class="footer-right">
          <div class="footer-icons">
            <a href="https://web.facebook.com/profile.php?id=100008423048695">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/yazan-mostafa/">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/yazanmo">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
