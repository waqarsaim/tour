import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Navbar , Nav} from "react-bootstrap"
const Footer = () => {
  return (
    <>
     
        {/*  <!-- Footer --> */}
        <div className="foot">
        <footer className="page-footer font-small elegant-color">
          <div className="color-primary">
            <div className="container">
              {/*  <!-- Grid row--> */}
              <div className="row py-4 d-flex align-items-center">
                {/*  <!-- Grid column --> */}
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0">
                    Get connected with us on social networks! like facebook
                  </h6>
                </div>
                {/*  <!-- Grid column --> */}

                {/*  <!-- Grid column --> */}
                <div className="col-md-6 col-lg-7 text-center text-md-right">
                  {/* <!-- Facebook --> */}
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f white-text mr-4"> </i>
                  </a>
                  {/*  <!-- Twitter --> */}
                  <a className="tw-ic">
                    <i className="fab fa-twitter white-text mr-4"> </i>
                  </a>
                  {/*  <!-- Google +--> */}
                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g white-text mr-4"> </i>
                  </a>
                  {/*  <!--Linkedin --> */}
                  <a className="li-ic">
                    <i className="fab fa-linkedin-in white-text mr-4"> </i>
                  </a>
                  {/*  <!--Instagram--> */}
                  <a className="ins-ic">
                    <i className="fab fa-instagram white-text"> </i>
                  </a>
                </div>
                {/*  <!-- Grid column --> */}
              </div>
              {/*  <!-- Grid row--> */}
            </div>
          </div>

          {/*  <!-- Footer Links --> */}
          <div className="container text-center text-md-left pt-4 pt-md-5">
            {/*  <!-- Grid row --> */}
            <div className="row mt-1 mt-md-0 mb-4 mb-md-0">
              {/*  <!-- Grid column --> */}
              <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                {/* <!-- Links --> */}
                <h5>About me</h5>
                <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />

                <p className="foot-desc mb-0">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              {/* <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/*  <!-- Grid column --> */}
              <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                {/*  <!-- Links --> */}
                <h5>Company</h5>
                <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />

                <ul className="list-unstyled foot-desc">
                  <li className="mb-2">
                    <a href="#!">Contacts</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">How to Book</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Booking Tips</a>
                  </li>
                  <li className="mb-2">
                    <a href="/">About Us</a>
                  </li>
                </ul>
              </div>
              {/*  <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/* <!-- Grid column --> */}
              <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                {/*  <!-- Links --> */}
                <h5>SUPPORT</h5>
                <hr className="color-primary mb-4 mt-0 d-inline-block mx-auto w-60" />

                <ul className="list-unstyled foot-desc">
                  <li className="mb-2">
                    <a href="#!">FAQ</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Our Partner</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="#!">Term of Use</a>
                  </li>
                </ul>
              </div>
              {/*   <!-- Grid column --> */}

              <hr className="clearfix w-100 d-md-none" />

              {/*   <!-- Grid column --> */}
              <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
              <div class="clear"></div>
                            <p>Subsribe to get our latest updates and oeffers</p>
                            <div id="message-newsletter_2"></div>
                            <form role="search" onsubmit="return false;">
                            </form>
                            <div class="input-group row-reverse">
                                <input type="email" class="form-control sub_email" id="exampleInputEmail1" placeholder="Newsletter Enter your email"/>
                                <div class="input-group-append">
                                    <button class="btn btn-secondary sub_newsletter" type="submit">Subscribe</button>
                                </div>
                                </div>
                                </div>
                                
              {/*  <!-- Grid column --> */}
            </div>
            {/*  <!-- Grid row --> */}
          </div>
          {/* <!-- Footer Links --> */}

          {/*  <!-- Copyright --> */}
          <div className="footer-copyright text-center py-3">
            © 2021 Copyright:
            <a href="https://mdbootstrap.com/"> Tourism</a>
          </div>
          {/* <!-- Copyright -->
           */}
        </footer>
        {/* <!-- Footer --> */}
        </div> 
    </>
  );
};

export default Footer;
