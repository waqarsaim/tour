import React from "react";

const Hotel = () => {
  return (
  <div role="tabpanel" className="tab-pane active in show" id="hotels" aria-labelledby="home-tab">
  <div className="tab-inner menu-horizontal-content">
    <div className="form-search-main-01">
      <form name="HOTELS" autoComplete="off" action="https://phptravels.net/tphotels/search" method="GET" role="search">
        <div className="form-inner text-dark">
          <div className="row gap-10 mb-20 row-reverse">
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="form-group">
                <label className="fr">Destination</label>
                <div className="clear" />
                <div className="form-icon-left typeahead__container">
                  <span className="icon-font text-muted">
                    <i className="bx bx-map" />
                  </span>
                  <input className="form-control hotelsearch locationlistTravelpayoutshotels" name="dest" type="search" autoComplete="off" defaultValue required />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-xs-12">
              <div className="col-inner">
                <div id="airDatepickerRange-hotel" className="row no-gutters">
                  <div className="col-6 o2">
                    <div className="form-group">
                      <label className="fr">Check in</label>
                      <div className="clear" />
                      <div className="form-icon-left">
                        <span className="icon-font text-muted">
                          <i className="bx bx-calendar" />
                        </span>
                        <input type="text" id="checkin" className="form-control form-readonly-control" name="checkin" placeholder="09/07/2021" required defaultValue="09/07/2021" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6 o1">
                    <div className="form-group">
                      <label className="fr">Check out</label>
                      <div className="clear" />
                      <div className="form-icon-left">
                        <span className="icon-font text-muted">
                          <i className="bx bx-calendar" />
                        </span>
                        <input type="text" id="checkout" className="form-control form-readonly-control" name="checkout" placeholder="08/07/2021" required defaultValue="08/07/2021" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12">
              <div className="col-inner">
                <div className="row">
                  <div className="col-4 col-sm-6 col-md-4">
                    <div className="form-group form-spin-group">
                      <label className="fr" htmlFor="room-amount">
                        Rooms
                      </label>
                      <div className="form-icon-left">
                        <span className="icon-font text-muted">
                          <i className="bx bx-home-alt" />
                        </span>
                        <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} readOnly />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="col-inner">
                      <div className="form-people-thread">
                        <div className="row no-gutters align-items-center">
                          <div className="col o2">
                            <div className="form-group form-spin-group">
                              <label className="fr" htmlFor="room-amount">
                                Adults
                                <small className=" text-muted font10 line-1">
                                  (12-75)
                                </small>
                              </label>
                              <div className="clear" />
                              <div className="form-icon-left">
                                <span className="icon-font text-muted">
                                  <i className="bx bx-user" />
                                </span>
                                <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} name="adults" readOnly defaultValue={2} />
                              </div>
                            </div>
                          </div>
                          <div className="col 01">
                            <div className="form-group form-spin-group">
                              <label className="fr" htmlFor="room-amount">
                                Child
                                <small className="text-muted font10 line-1">
                                  (2-12)
                                </small>
                              </label>
                              <div className="clear" />
                              <div className="form-icon-left">
                                <span className="icon-font text-muted">
                                  <i className="bx bx-user" />
                                </span>
                                <input type="text" className="form-control touch-spin-03 form-readonly-control" placeholder={0} name="children" readOnly defaultValue={0} />
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
            <div className="col-lg-2 col-sm-12 col-xs-12">
              <input type="hidden" name="module_type" />
              <input type="hidden" name="slug" />
              <button type="submit" className="btn btn-primary btn-block">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default Hotel;
