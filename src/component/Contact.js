import React from "react";
import { Link } from "react-router-dom";


function Seection() {
  return (
    <>
      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <h1>ClubJoggers<span>.</span></h1>
          </a>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              {/* <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              /* <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li> 
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> */}
              <li><a href="/contact" class="active">Contact</a></li>
            </ul>
          </nav>

        </div>
      </header>
      <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div class="breadcrumbs d-flex align-items-center breadcrumbs4">
          <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

            <h2>Contact</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Contact</li>
            </ol>

          </div>
        </div>
      </main>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up" data-aos-delay="100">

          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                <i class="fa-solid fa-map"></i>              <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* <!-- End Info Item --> */}

            <div class="col-lg-3 col-md-6">
              <div class="info-item d-flex flex-column justify-content-center align-items-center">
                <i class="fa-regular fa-envelope"></i>
                <h3>Email Us</h3>
                <p>contact@example.com</p>
              </div>
            </div>
            {/* <!-- End Info Item --> */}

            <div class="col-lg-3 col-md-6">
              <div class="info-item  d-flex flex-column justify-content-center align-items-center">
                <i class="fa-solid fa-phone"></i>
                +              <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* <!-- End Info Item --> */}

          </div>
          <div class="row gy-4 mt-1">

            <div class="col-lg-6 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.3360787176534!2d78.15723457510084!3d26.218267377067928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c70e8e9554b7%3A0xfbcdf831cbf57023!2sClub%20Joggers%20Park%20%22The%20GYM%22!5e0!3m2!1sen!2sin!4v1690042957465!5m2!1sen!2sin"
                width="600"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              />

            </div>

            {/* {/* <!-- End Google Maps --> */}

            <div class="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row gy-4">
                  <div class="col-lg-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-lg-6 form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
            {/* <!-- End Contact Form --> */}

          </div>
        </div>
      </section>


      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" class="footer">

        <div class="footer-content position-relative">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="footer-info">
                  <h3>ClubJoggers</h3>
                  <p>
                    Kante Sahab Ka Bag<br />
                    Gwalior, India<br /><br />
                    <strong>Phone:</strong> +91 9340853444<br />
                    <strong>Email:</strong> anuj@gmail.com<br />
                  </p>
                  <div class="social-links d-flex mt-3">
                    <Link to="#" class="d-flex align-items-center justify-content-center"><i class="fa-brands fa-facebook"></i></Link>
                    <Link to="#" class="d-flex align-items-center justify-content-center"><i class="fa-brands fa-twitter"></i></Link>
                    <Link to="#" class="d-flex align-items-center justify-content-center"><i class="fa-brands fa-instagram"></i></Link>
                    <Link to="#" class="d-flex align-items-center justify-content-center"><i class="fa-brands fa-linkedin"></i></Link>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-4 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Link to="#">Home</Link></li>
                  <li><Link to="#">About us</Link></li>
                  <li><Link to="#">Services</Link></li>
                  <li><Link to="#">Terms of service</Link></li>
                  <li><Link to="#">Privacy policy</Link></li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-4 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><Link to="#">Power Lifting</Link></li>
                  <li><Link to="#">Weight Lifting</Link></li>
                  <li><Link to="#">Strength Training</Link></li>
                  <li><Link to="#">Crossfit Training</Link></li>
                  <li><Link to="#">Aerobics</Link></li>
                </ul>
              </div>

              <div class="col-lg-2 col-md-4 footer-links">
                <h4>About</h4>
                <p>
                                        Welcome to Club Joggers, the ultimate destination for fitness enthusiasts! Our cutting-edge facility offers a wide range of classes and personalized training programs, catering to all fitness levels.


                                    </p>                                              </div>

              {/* <div class="col-lg-2 col-md-3 footer-links">
                <h4>Nobis illum</h4>
                <ul>
                  <li><Link to="#">Ipsam</Link></li>
                  <li><Link to="#">Laudantium dolorum</Link></li>
                  <li><Link to="#">Dinera</Link></li>
                  <li><Link to="#">Trodelas</Link></li>
                  <li><Link to="#">Flexo</Link></li>
                </ul>
              </div> */}

            </div>
          </div>
        </div>

        {/* <div class="footer-legal text-center position-relative">
                  <div class="container">
                    <div class="copyright">
                      &copy; Copyright <strong><span>UpConstruction</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                      Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link>
                    </div>
                  </div>
                </div> */}

      </footer>
      {/* <!-- End Footer --> */}

    </>
  )
}

export default Seection