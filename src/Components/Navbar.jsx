import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-white sticky-top">
        <div className="logo1">
          <a className="navbar-brand ml-3">
            <img src="Capture.PNG" />
          </a>
        </div>

        <div class="collapse navbar-collapse flex-column " id="navbar">
          <ul class="navbar-nav  w-100 justify-content-center px-3">
            <li class="fr">
              <div class="dropdown dropdown-currency">
                <a
                  href="javascript:void(0);"
                  class="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  USD{" "}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div class="dropdown-menu-inner">
                    <a
                      class="dropdown-item text-center"
                      data-code="1"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      USD
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="3"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      GBP
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="9"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      SAR
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="11"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      EUR
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="12"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      PKR
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="13"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      KWD
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="17"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      JPY
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="18"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      INR
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="19"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      CNY
                    </a>
                    <a
                      class="dropdown-item text-center"
                      data-code="20"
                      href="javascript:void(0);"
                      onclick="change_currency(this)"
                    >
                      TRY
                    </a>
                    <a
                      class="dropdown-item text-center"
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

            <li class="fr">
              <div class="dropdown dropdown-currency">
                <a
                  href="javascript:void(0);"
                  class="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ENGLISH{" "}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div class="dropdown-menu-inner">
                    <a
                      id="tr"
                      class="dropdown-item"
                      href="https://phptravels.net/tr"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/tr.png"
                          alt="image"
                        />
                      </span>{" "}
                      Turkish
                    </a>
                    <a
                      id="ar"
                      class="dropdown-item"
                      href="https://phptravels.net/ar"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/ar.png"
                          alt="image"
                        />
                      </span>{" "}
                      Arabic
                    </a>
                    <a
                      id="de"
                      class="dropdown-item"
                      href="https://phptravels.net/de"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/de.png"
                          alt="image"
                        />
                      </span>{" "}
                      German
                    </a>
                    <a
                      id="en"
                      class="dropdown-item"
                      href="https://phptravels.net/en"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/en.png"
                          alt="image"
                        />
                      </span>{" "}
                      English
                    </a>
                    <a
                      id="vi"
                      class="dropdown-item"
                      href="https://phptravels.net/vi"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/vi.png"
                          alt="image"
                        />
                      </span>{" "}
                      Vietnamese
                    </a>
                    <a
                      id="es"
                      class="dropdown-item"
                      href="https://phptravels.net/es"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/es.png"
                          alt="image"
                        />
                      </span>{" "}
                      Spanish
                    </a>
                    <a
                      id="ru"
                      class="dropdown-item"
                      href="https://phptravels.net/ru"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/ru.png"
                          alt="image"
                        />
                      </span>{" "}
                      Russian
                    </a>
                    <a
                      id="fa"
                      class="dropdown-item"
                      href="https://phptravels.net/fa"
                    >
                      <span class="image">
                        <img
                          src="https://phptravels.net/uploads/images/language/fa.png"
                          alt="image"
                        />
                      </span>{" "}
                      Farsi
                    </a>
                    <a
                      id="fr"
                      class="dropdown-item"
                      href="https://phptravels.net/fr"
                    >
                      <span class="image">
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

            <li class="">
              <div class="dropdown dropdown-login dropdown-tab">
                <a
                  href="javascript:void(0);"
                  class="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="bx bx-user"></i> My Account{" "}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div class="">
                    <a
                      class="dropdown-item active tr"
                      href="https://phptravels.net/login"
                    >
                      Login
                    </a>
                    <a
                      class="dropdown-item tr"
                      href="https://phptravels.net/register"
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
              <div class="clear"></div>

              <div id=""></div>
              <form role="search" onsubmit="return false;"></form>
              <div class="input-group row-reverse">
                <input
                  type="email"
                  class="form-control sub_email"
                  id="exampleInputEmail1"
                  placeholder="Search"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary " type="submit">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </ul>

          <ul class="navbar-nav justify-content-left w-100 bg-light px-3">
            <li className="">
              <a
                href="javascript:void(0);"
                class="btn btn-text-inherit btn-interactive"
                id="dropdownCurrency"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home{" "}
              </a>
            </li>
            <li class="">
              <div class="dropdown dropdown-login dropdown-tab">
                <a
                  href="javascript:void(0);"
                  class="btn btn-text-inherit btn-interactive"
                  id="dropdownCurrency"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company{" "}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownCurrency"
                >
                  <div class="">
                    <a
                      class="dropdown-item active tr"
                      href="https://phptravels.net/login"
                    >
                      Contact
                    </a>
                    <a
                      class="dropdown-item tr"
                      href="https://phptravels.net/register"
                    >
                      About Us
                    </a>
                  </div>
                  
                </div>
                
              </div>
            </li>
            <div className="" style={{float: "right"}}>
            <div class="navbar-phone d-none d-lg-block o1">
                <i class="material-icons">phone</i> Call Now : +1-234-56789              </div>
                   </div>       
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
