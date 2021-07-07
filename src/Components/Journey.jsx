import React from "react";
import Hotel from './Hotel'
import Flights from "./Flights";
const Journey = () => {
  return (
    <div>
      <div className="hero-form-absolute" id="search">
        <div className="container-fluid">
          <div className="row gap-40 gap-lg-60 align-items-center fe">
            <div className="col-lg-12 col-xs-12 col-md-12">
              <div className="hero-form-inner bg-light border rounded px-2 py-2">
                <div className="menu-horizontal-wrapper-02">
                  <nav className="menu-horizontal-02">
                    <ul className="nav row-reverse">
                      <li>
                        <a
                          className="btn btn-outline-light border text-dark mx-2 "
                          data-name="hotels"
                          href="#hotels"
                          target=""
                          data-toggle="tab"
                        >
                          HOTELS
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-light border text-dark mx-2 "
                          data-name="flights"
                          href="#flights"
                          target=""
                          data-toggle="tab"
                        >
                          FLIGHTS
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-light border text-dark mx-2 "
                          data-name="boats"
                          href="#boats"
                          target=""
                          data-toggle="tab"
                        >
                          BOATS
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-light border text-dark mx-2 "
                          data-name="rentals"
                          href="#rentals"
                          target=""
                          data-toggle="tab"
                        >
                          RENTALS
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-light border text-dark mx-2 "
                          data-name="tours"
                          href="#tours"
                          target=""
                          data-toggle="tab"
                        >
                          TOURS
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-light border text-dark mx-2 "
                          data-name="cars"
                          href="#cars"
                          target=""
                          data-toggle="tab"
                        >
                          CARS
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-outline-light border text-dark mx-2 "
                          data-name="visa"
                          href="#visa"
                          target=""
                          data-toggle="tab"
                        >
                          VISA
                        </a>
                      </li>

                    </ul>
                  </nav>
                </div>
                   <Hotel />
    {/* <Flights />
    */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
