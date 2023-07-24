import React from "react"
import { Link } from "react-router-dom";
function about() {
  return (
    <>
      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

          <a href="index.html" class="logo d-flex align-items-center">
            {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
            <img src="assets/img/logo.png" alt="" />
            <h1>ClubJoggers<span>.</span></h1>
          </a>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about" class="active">About</a></li>
              <li><a href="/services">Services</a></li>
              {/* <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
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
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>

        </div>
      </header>
      <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <div class="breadcrumbs d-flex align-items-center breadcrumbs5">
          <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

            <h2>About</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>About</li>
            </ol>

          </div>
        </div>
      </main>
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">

          <div class="row position-relative">

            <div class="col-lg-7 about-img about_img"></div>

            <div class="col-lg-7">
              <h2>All About Us...</h2>
              <div class="our-story">
                <h4>Est 2010</h4>
                <h3>Our Story</h3>
                <p>Welcome to Club Joggers, the ultimate destination for fitness enthusiasts! Our cutting-edge facility offers a wide range of classes and personalized training programs, catering to all fitness levels. Join our supportive community, led by experienced trainers, and embark on a transformative journey towards a healthier, fitter, and happier you!.</p>
                <ul>
                  <li><i class="bi bi-check-circle"></i> <span>Transform your body..</span></li>
                  <li><i class="bi bi-check-circle"></i> <span>Strength program</span></li>
                </ul>

              </div>
            </div>

          </div>

        </div>
      </section>
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




    </>
  )
}
export default about;