const Footer = () => (
  <footer className="page-footer font-small blue mt-5">
    <div className="container text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3 footer-text-one">
          <h5 className="text-uppercase">KULTURAL</h5>
          <p>Our mission is to make everyone able to feel the attachement back to nature by providing an unforgettable experience</p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-3 text-center mb-3">
          <h5 className="text-uppercase">ABOUT US</h5>
          <ul className="list-unstyled">
            <li>
              <a className="text-decoration-none text-dark" href="#about-us">
                <p>About Us</p>
              </a>
            </li>
            <li>
              <p>Feature</p>
            </li>
            <li>
              <p>News & Blog</p>
            </li>
          </ul>
        </div>
        <div className="col-md-3 mb-md-3 text-center mb-3">
          <h5 className="text-uppercase">SUPPORT</h5>
          <ul className="list-unstyled">
            <li>
              <p>FAQs</p>
            </li>
            <li>
              <p>Support Center</p>
            </li>
            <li>
              <p>Contact Us</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2021 Copyright:{" "}
      <a className="text-decoration-none text-dark" href="https://github.com/AldiAgeng">
        AldiAgeng
      </a>
    </div>
  </footer>
);

export default Footer;
