import React from 'react'

const Hotel = () => {
    return (
        
              <div role="tabpanel" class="tab-pane active in show" id="hotels" aria-labelledby="home-tab">
                                            <div class="tab-inner menu-horizontal-content">
<div class="form-search-main-01">
<form name="HOTELS" autocomplete="off" action="https://phptravels.net/tphotels/search" method="GET" role="search">
    <div class="form-inner">
        <div class="row gap-10 mb-20 row-reverse">
            <div class="col-lg-3 col-sm-12 col-xs-12">
                <div class="form-group">
                    <label class="fr">Destination</label>
                    <div class="clear"></div>
                    <div class="form-icon-left typeahead__container">
                        <span class="icon-font text-muted"><i class="bx bx-map"></i></span>
                        <input class="form-control hotelsearch locationlistTravelpayoutshotels" name="dest" type="search" autocomplete="off" value="" required />
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-12 col-xs-12">
                <div class="col-inner">
                    <div id="airDatepickerRange-hotel" class="row no-gutters">
                        <div class="col-6 o2">
                            <div class="form-group">
                                <label class="fr">Check in</label>
                                <div class="clear"></div>
                                <div class="form-icon-left">
                                    <span class="icon-font text-muted"><i class="bx bx-calendar"></i></span>
                                    <input type="text" id="checkin" class="form-control form-readonly-control" name="checkin" placeholder="09/07/2021" required value="09/07/2021" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6 o1">
                            <div class="form-group">
                                <label class="fr">Check out</label>
                                <div class="clear"></div>
                                <div class="form-icon-left">
                                    <span class="icon-font text-muted"><i class="bx bx-calendar"></i></span>
                                    <input type="text" id="checkout" class="form-control form-readonly-control" name="checkout" placeholder="08/07/2021" required value="08/07/2021" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 col-sm-12 col-xs-12">
                <div class="col-inner">
                    <div class="row">
                        <div class="col-4 col-sm-6 col-md-4">
                            <div class="form-group form-spin-group">
                                <label class="fr" for="room-amount">Rooms</label>
                                <div class="form-icon-left">
                                    <span class="icon-font text-muted"><i class="bx bx-home-alt"></i></span>
                                    <input type="text" class="form-control touch-spin-03 form-readonly-control" placeholder="0" readonly />
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="col-inner">
                                <div class="form-people-thread">
                                    <div class="row no-gutters align-items-center">
                                                                                <div class="col o2">
                                            <div class="form-group form-spin-group">
                                                <label class="fr" for="room-amount">Adults <small class=" text-muted font10 line-1">(12-75)</small></label>
                                                <div class="clear"></div>
                                                <div class="form-icon-left">
                                                    <span class="icon-font text-muted"><i class="bx bx-user"></i></span>
                                                    <input type="text" class="form-control touch-spin-03 form-readonly-control" placeholder="0" name="adults" readonly value="2" placeholder="2"/>
                                                </div>
                                            </div>
                                        </div>
                                                                                <div class="col 01">
                                            <div class="form-group form-spin-group">
                                                <label class="fr" for="room-amount">Child <small class="text-muted font10 line-1">(2-12)</small></label>
                                                <div class="clear"></div>
                                                <div class="form-icon-left">
                                                    <span class="icon-font text-muted"><i class="bx bx-user"></i></span>
                                                    <input type="text" class="form-control touch-spin-03 form-readonly-control" placeholder="0" name="children"  readonly value="0" placeholder="0"/>
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
            <div class="col-lg-2 col-sm-12 col-xs-12">
            <input type="hidden" name="module_type"/>
            <input type="hidden" name="slug"/>
            <button type="submit"  class="btn btn-primary btn-block">
             Search            </button>
            </div>
        </div>
    </div>
</form>
</div>
</div>
                                        </div>
        
    )
}

export default Hotel
