import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mb-5">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O"/>
          <br />
          <a href="" style={{ marginRight: "20px" , fontSize: "18px" }}>Track account opening</a>
          <a href="" style={{ marginRight: "20px" , fontSize: "18px" }}>Track segment activation</a>
          <a href="" style={{ marginRight: "20px" , fontSize: "18px" }}>Intraday margins</a>
          <a href="" style={{ marginRight: "20px", fontSize: "18px" }}>Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;