import React from "react";

const Flights = () => {
  return (
    <div>
      <div role="tabpanel" class="tab-pane " id="flights">
        <div class="tab-inner menu-horizontal-content">
          <div class="form-search-main-01">
            <form
              autocomplete="off"
              name="flightmanualSearch"
              action="https://phptravels.net/tpflight/search/"
              method="GET"
              role="search"
            >
              <div class="form-inner">
                <div class="row gap-10 mb-5 row-reverse">
                  <div class="row  mb-10 row-reverse align-items-start row-return">
                    <div class="col-6">
                      <div class="row row-reverse">
                        <div
                          class="custom-control custom-radio  custom-control-inline"
                          style={{margintop: "-5px"}}
                        >
                          <input
                            type="radio"
                            id="flightSearchRadio-2"
                            name="triptype"
                            class="custom-control-input oneway"
                            value="oneway"
                            checked
                          />
                          <label
                            class="custom-control-label"
                            for="flightSearchRadio-2"
                          >
                            One Way
                          </label>
                        </div>
                        <div
                          class="custom-control custom-radio  custom-control-inline"
                          style={{marginTop: "-5px"}}
                        >
                          <input
                            type="radio"
                            id="flightSearchRadio-1"
                            name="triptype"
                            class="custom-control-input return"
                            value="round"
                          />
                          <label
                            class="custom-control-label"
                            for="flightSearchRadio-1"
                          >
                            Round Trip
                          </label>
                        </div>
                        <input type="hidden" value="oneway" id="checktype" />
                      </div>
                    </div>

                    <div class="col-6">
                      <label>Class Type</label>
                      <div class="form-icon-left flightclass">
                        <span class="icon-font">
                          <i class="bx bx-time"></i>
                        </span>
                        <select
                          class="chosen-the-basic form-control form-control-sm trip_class"
                          name="cabinclass"
                          required
                        >
                          <option value="first" selected>
                            First
                          </option>
                          <option value="business">Business</option>
                          <option value="economy" selected>
                            Economy
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="clear"></div>

                  <div class="row no-gutters row-reverse align-items-end">
                    <div class="col-lg-4 col-sm-4 col-xs-12">
                      <div class="row no-gutters">
                        <div class="col-lg-6 col-sm-12 col-xs-12">
                          <div class="form-group">
                            <label>From</label>
                            <div class="clear"></div>
                            <div class="form-icon-left typeahead__container">
                              <span class="icon-font text-muted">
                                <i class="bx bx-map"></i>
                              </span>
                              <input
                                class="form-control"
                                type="text"
                                name=""
                                value=""
                                id="location_from"
                                type="search"
                                autocomplete="off"
                              />
                              <input
                                type="hidden"
                                name="origin"
                                value=""
                                id="location_from_code"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-sm-12 col-xs-12">
                          <div class="form-group">
                            <label>To</label>
                            <div class="clear"></div>
                            <div class="form-icon-left typeahead__container">
                              <span class="icon-font text-muted">
                                <i class="bx bx-map"></i>
                              </span>
                              <input
                                type="text"
                                name=""
                                value=""
                                id="location_to"
                                class="form-control"
                                type="search"
                                autocomplete="off"
                              />
                              <input
                                type="hidden"
                                name="destination"
                                value=""
                                id="location_to_code"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-3 col-sm-12 col-xs-12">
                      <div class="col-inner">
                        <div
                          id="airDatepickerRange-flight"
                          class="row no-gutters mb-15"
                        >
                          <div class="class12 col-6">
                            <div class="form-group">
                              <label>Depart</label>
                              <div class="clear"></div>
                              <div class="form-icon-left">
                                <span class="icon-font text-muted">
                                  <i class="bx bx-calendar"></i>
                                </span>
                                <input
                                  id="FlightsDateStart"
                                  class="form-control form-readonly-control"
                                  placeholder="Depart"
                                  name="departure_date"
                                  value=""
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                          <div class="hidediv col-6">
                            <div class="form-group">
                              <label>Return</label>
                              <div class="clear"></div>
                              <div class="form-icon-left">
                                <span class="icon-font text-muted">
                                  <i class="bx bx-calendar"></i>
                                </span>
                                <input
                                  id="FlightsDateEnd"
                                  autocomplete="false"
                                  class="form-control form-readonly-control"
                                  placeholder="Return"
                                  name="reture_date"
                                  value=""
                                  readonly
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-12 col-xs-12">
                      <div class="col-inner">
                        <div class="row no-gutters">
                          <div class="col-lg-4 col-sm-12 col-xs-12 col-4">
                            <div class="form-group form-spin-group">
                              <label for="room-amount">
                                Adults{" "}
                                <small class="text-muted font10 line-1" hidden>
                                  (12-75)
                                </small>
                              </label>
                              <div class="clear"></div>
                              <div class="form-icon-left">
                                <span class="icon-font text-muted">
                                  <i class="bx bx-user"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control touch-spin-03 form-readonly-control"
                                  placeholder="0"
                                  readonly
                                  name="fadults"
                                  value="1"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-12 col-xs-12 col-4">
                            <div class="form-group form-spin-group">
                              <label for="room-amount">
                                Child{" "}
                                <small class="text-muted font10 line-1" hidden>
                                  (2-12)
                                </small>
                              </label>
                              <div class="clear"></div>
                              <div class="form-icon-left">
                                <span class="icon-font text-muted">
                                  <i class="bx bx-user"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control touch-spin-03 form-readonly-control"
                                  placeholder="0"
                                  readonly
                                  name="fchildren"
                                  value="0"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-4 col-sm-12 col-xs-12 col-4">
                            <div class="form-group form-spin-group">
                              <label for="room-amount">
                                infant{" "}
                                <small class="text-muted font10 line-1" hidden>
                                  (0-2)
                                </small>
                              </label>
                              <div class="clear"></div>
                              <div class="form-icon-left">
                                <span class="icon-font text-muted">
                                  <i class="bx bx-user"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control touch-spin-03 form-readonly-control"
                                  placeholder="0"
                                  name="finfant"
                                  readonly
                                  value=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-1 col-sm-12 col-xs-12">
                      <button type="submit" class="btn-primary btn btn-block">
                        Search{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div
        role="tabpanel"
        class="tab-pane "
        id="boats"
        aria-labelledby="home-tab"
      >
        <div class="ftab-inner menu-horizontal-content">
          <div class="form-search-main-01">
            <form
              autocomplete="off"
              action="https://phptravels.net/boats/search"
              method="GET"
              role="search"
            >
              <div class="form-inner">
                <div class="row gap-10 mb-20 row-reverse">
                  <div class="col-lg-3 col-xs-12">
                    <div class="form-group">
                      <label>Destination</label>
                      <div class="clear"></div>
                      <div class="form-icon-left typeahead__container">
                        <span class="icon-font text-muted">
                          <i class="bx bx-map"></i>
                        </span>
                        <input
                          type="text"
                          data-module="boats"
                          class="form-control hotelsearch locationlistboats"
                          placeholder="Search by Listing or City Name"
                          value=""
                          required
                        />
                        <input
                          type="hidden"
                          id="txtsearch"
                          name="txtSearch"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-3 col-xs-12">
                    <div class="col-inner">
                      <div class="row gap-10 mb-15">
                        <div class="col-12">
                          <div class="form-group">
                            <label for="room-amount">Boat Type</label>
                            <div class="clear"></div>
                            <div class="form-icon-left">
                              <span class="icon-font text-muted">
                                <i class="bx bx-calendar"></i>
                              </span>
                              <select
                                class="chosen-the-basic form-control"
                                name="type"
                                id="boattype"
                              >
                                <option value="" selected>
                                  Select{" "}
                                </option>
                                <option value="265">Airboat </option>
                                <option value="266">Cabin cruiser </option>
                                <option value="267">Cutter </option>
                                <option value="268">Ferry </option>
                                <option value="269">Houseboat </option>
                                <option value="270">Jetboat </option>
                                <option value="271">Jet Ski </option>
                                <option value="272">Yacht </option>
                                <option value="273">Whaleboat </option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-xs-12">
                    <div class="col-inner">
                      <div class="row gap-10 mb-15">
                        <div class="col-md-12">
                          <div class="col-inner">
                            <div class="form-people-thread">
                              <div class="row no-gutters align-items-center">
                                <div id="airDatepickerRange-hotel" class="col">
                                  <div class="form-group form-spin-group">
                                    <label for="room-amount">Date</label>
                                    <div class="clear"></div>
                                    <div class="form-icon-left">
                                      <span class="icon-font text-muted">
                                        <i class="bx bx-calendar"></i>
                                      </span>
                                      <input
                                        type="text"
                                        id="DateTours"
                                        class="DateTours form-control form-readonly-control text-center"
                                        placeholder="dd/mm/yyyy"
                                        value="05/07/2021"
                                        name="checkin"
                                        required
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="form-group form-spin-group">
                                    <label for="room-amount">
                                      Adults{" "}
                                      <small class=" text-muted font10 line-1">
                                        (12-75)
                                      </small>
                                    </label>
                                    <div class="clear"></div>
                                    <div class="form-icon-left">
                                      <span class="icon-font text-muted">
                                        <i class="bx bx-user"></i>
                                      </span>
                                      <input
                                        type="text"
                                        class="form-control touch-spin-03 form-readonly-control"
                                        placeholder="0"
                                        name="adults"
                                        readonly
                                        value=""
                                        placeholder="1"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-2 col-xs-12">
                    <input type="hidden" name="module_type" />
                    <input type="hidden" name="slug" />
                    <button type="submit" class="btn btn-primary btn-block">
                      <i class="icon_set_1_icon-66"></i> Search
                    </button>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="searching"
                class="searching"
                value=""
              />
              <input type="hidden" class="modType" name="modType" value="" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
