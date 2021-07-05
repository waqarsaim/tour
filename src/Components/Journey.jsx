import React from "react";
import Hotel from './Hotel'
import Flights from "./Flights";
const Journey = () => {
  return (
    <div>
    <Hotel />
    <Flights />
      <div className="hero-form-absolute" id="search">
        <div className="container-fluid">
          <div className="row gap-40 gap-lg-60 align-items-center fe">
            <div className="col-lg-12 col-xs-12 col-md-12">
              <div className="hero-form-inner text-white">
                <div className="menu-horizontal-wrapper-02">
                  <nav className="menu-horizontal-02">
                    <ul className="nav row-reverse ">
                      <li>
                        <a
                          className="text-center hotels active"
                          data-name="hotels"
                          href="#hotels"
                          target=""
                          data-toggle="tab"
                        >
                          Hotels{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-center flights "
                          data-name="flights"
                          href="#flights"
                          target=""
                          data-toggle="tab"
                        >
                          Flights{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-center boats "
                          data-name="boats"
                          href="#boats"
                          target=""
                          data-toggle="tab"
                        >
                          Boats{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-center rentals "
                          data-name="rentals"
                          href="#rentals"
                          target=""
                          data-toggle="tab"
                        >
                          Rentals{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-center tours "
                          data-name="tours"
                          href="#tours"
                          target=""
                          data-toggle="tab"
                        >
                          Tours{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-center cars "
                          data-name="cars"
                          href="#cars"
                          target=""
                          data-toggle="tab"
                        >
                          Cars{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-center visa "
                          data-name="visa"
                          href="#visa"
                          target=""
                          data-toggle="tab"
                        >
                          Visa{" "}
                        </a>
                      </li>

                      <li
                        role="presentation"
                        name="Travelpayoutshotels"
                        className="active text-center"
                      >
                        <a
                          className=""
                          href="#tphotels"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                          title="Hotels"
                        >
                          <div className="visible-xs visible-md clearfix"></div>
                          <span className="hidden-xs">Hotels </span>
                        </a>
                      </li>
                      <li
                        role="presentation"
                        name="Travelpayouts"
                        className=" text-center"
                      >
                        <a
                          className=""
                          href="#air"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                          title="Flights"
                        >
                          <div className="visible-xs visible-md clearfix"></div>
                          <span className="hidden-xs">Flights </span>
                        </a>
                      </li>
                      <li role="presentation" name="Boats" className=" text-center">
                        <a
                          className=""
                          href="#boats"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                          title="Boats"
                        >
                          <div className="visible-xs visible-md clearfix"></div>
                          <span className="hidden-xs"></span>
                        </a>
                      </li>
                      <li
                        role="presentation"
                        name="Rentals"
                        className=" text-center"
                      >
                        <a
                          className=""
                          href="#rentals"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                          title="Rentals"
                        >
                          <div className="visible-xs visible-md clearfix"></div>
                          <span className="hidden-xs"></span>
                        </a>
                      </li>
                      <li role="presentation" name="Tours" className=" text-center">
                        <a
                          className=""
                          href="#tours"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                          title="Tours"
                        >
                          <div className="visible-xs visible-md clearfix"></div>
                          <span className="hidden-xs">Tours </span>
                        </a>
                      </li>
                      <li
                        role="presentation"
                        name="Cartrawler"
                        className=" text-center"
                      >
                        <a
                          className=""
                          href="#car"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                          title="Cars"
                        >
                          <div className="visible-xs visible-md clearfix"></div>
                          <span className="hidden-xs">Cars </span>
                        </a>
                      </li>
                      <li role="presentation" name="Ivisa" className=" text-center">
                        <a
                          className=""
                          href="#ivisa"
                          data-toggle="tab"
                          aria-controls="home"
                          aria-expanded="true"
                          title="Visa"
                        >
                          <div className="visible-xs visible-md clearfix"></div>
                          <span className="hidden-xs"></span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Journey;
