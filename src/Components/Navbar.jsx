import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-white sticky-top">
        <div className="logo1">
          <a className="navbar-brand ml-3">
            <img src="Capture.PNG" />
          </a>
        </div>

        <div className="collapse navbar-collapse flex-column " id="navbar">
          <ul className="navbar-nav  w-100 justify-content-center px-3">
            <li className="fr">
              <div className="dropdown dropdown-currency">
                <a
                  href="javascript:void(0);"
                  className="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  USD{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div className="dropdown-menu-inner">
                    <a
                      className="dropdown-item text-center"
                      data-code="1"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      USD
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="3"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      GBP
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="9"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      SAR
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="11"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      EUR
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="12"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      PKR
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="13"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      KWD
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="17"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      JPY
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="18"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      INR
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="19"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      CNY
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="20"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      TRY
                    </a>
                    <a
                      className="dropdown-item text-center"
                      data-code="22"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      RUB
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="fr">
              <div className="dropdown dropdown-currency">
                <a
                  href="javascript:void(0);"
                  className="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ENGLISH{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div className="dropdown-menu-inner">
                    <a
                      id="tr"
                      className="dropdown-item"
                      href="https://phptravels.net/tr"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/tr.png"
                          alt="image"
                        />
                      </span>{" "}
                      Turkish
                    </a>
                    <a
                      id="ar"
                      className="dropdown-item"
                      href="https://phptravels.net/ar"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/ar.png"
                          alt="image"
                        />
                      </span>{" "}
                      Arabic
                    </a>
                    <a
                      id="de"
                      className="dropdown-item"
                      href="https://phptravels.net/de"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/de.png"
                          alt="image"
                        />
                      </span>{" "}
                      German
                    </a>
                    <a
                      id="en"
                      className="dropdown-item"
                      href="https://phptravels.net/en"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/en.png"
                          alt="image"
                        />
                      </span>{" "}
                      English
                    </a>
                    <a
                      id="vi"
                      className="dropdown-item"
                      href="https://phptravels.net/vi"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/vi.png"
                          alt="image"
                        />
                      </span>{" "}
                      Vietnamese
                    </a>
                    <a
                      id="es"
                      className="dropdown-item"
                      href="https://phptravels.net/es"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/es.png"
                          alt="image"
                        />
                      </span>{" "}
                      Spanish
                    </a>
                    <a
                      id="ru"
                      className="dropdown-item"
                      href="https://phptravels.net/ru"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/ru.png"
                          alt="image"
                        />
                      </span>{" "}
                      Russian
                    </a>
                    <a
                      id="fa"
                      className="dropdown-item"
                      href="https://phptravels.net/fa"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/fa.png"
                          alt="image"
                        />
                      </span>{" "}
                      Farsi
                    </a>
                    <a
                      id="fr"
                      className="dropdown-item"
                      href="https://phptravels.net/fr"
                    >
                      <span className="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/fr.png"
                          alt="image"
                        />
                      </span>{" "}
                      French
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="">
              <div className="dropdown dropdown-login dropdown-tab">
                <a
                  href="javascript:void(0);"
                  className="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="bx bx-user"></i> My Account{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div className="">
                    <a
                      className="dropdown-item active tr"
                      href="https://phptravels.net/login"
                    >
                      Login
                    </a>
                    <a
                      className="dropdown-item tr"
                      href="https://phptravels.net/register"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
              <div className="clear"></div>

              <div id=""></div>
              <form role="search" onsubmit="return false;"></form>
              <div className="input-group row-reverse">
                <input
                  type="email"
                  className="form-control sub_email"
                  id="exampleInputEmail1"
                  placeholder="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary " type="submit">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </ul>

          <ul className="navbar-nav justify-content-left w-100 bg-light px-3">
            <li className="">
              <a
                href="javascript:void(0);"
                className="btn btn-text-inherit btn-interactive"
                id="dropdownCurrency"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home{" "}
              </a>
            </li>
            <li className="">
              <div className="dropdown dropdown-login dropdown-tab">
                <a
                  href="javascript:void(0);"
                  className="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company{" "}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div className="">
                    <a
                      className="dropdown-item active tr"
                      href="https://phptravels.net/login"
                    >
                      Contact
                    </a>
                    <a
                      className="dropdown-item tr"
                      href="https://phptravels.net/register"
                    >
                      About Us
                    </a>
                  </div>
                  
                </div>
                
              </div>
            </li>
            <div className="" style={{float: "right"}}>
            <div className="navbar-phone d-none d-lg-block o1">
                <i className="material-icons">phone</i> Call Now : +1-234-56789              </div>
                   </div>       
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
