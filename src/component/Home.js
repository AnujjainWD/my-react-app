import React from "react";
import './css/style.css'
import { Link } from "react-router-dom";


function Home() {
  return (
    <>

      <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

          <Link to="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <h1>ClubJoggers<span>.</span></h1>
          </Link>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" class="navbar">
            <ul>
              <li><Link to="/" class="active">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

        </div>
      </header>
      <section id="hero" class="hero">

        <div class="info d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <h2 data-aos="fade-down">Welcome to <span>ClubJoggers</span></h2>
                <p data-aos="fade-up">Are you ready to embark on a fitness adventure like no other? Look no further than Club Joggers - your ultimate destination for achieving your health and wellness goals!
                  .</p>
                <a data-aos="fade-up" data-aos-delay="200" href="#gym1" class="btn-get-started">Get Started</a>
              </div>
            </div>
          </div>
        </div>

        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">

          <div class="carousel-item active"></div>
          {/* <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/hero-carousel-2.jpg)"></div>
      <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/hero-carousel-3.jpg)"></div>
      <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/hero-carousel-4.jpg)"></div>
      <div class="carousel-item" style="background-image: url(assets/img/hero-carousel/hero-carousel-5.jpg)"></div>
 */}
          <Link class="carousel-control-prev" to="#hero-carousel" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </Link>

          <Link class="carousel-control-next" to="#hero-carousel" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </Link>

        </div>

      </section>
      <section id="gym1" class="gym1">
        <div class="container" data-aos="fade-up">

          <div class="section-header">
            <h2>Our Services</h2>
            <p>Are you ready to unleash your full athletic potential and transform your fitness journey? Look no further! Our website is your one-stop destination for everything CrossFit - the revolutionary fitness phenomenon that has taken the world by storm.</p>
          </div>

          <div class="row gy-4">

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div class="card-bg one" ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">CROSSFIT TRAINING.</h4>
                      <p>CrossFit is a high-intensity, functional fitness program that combines elements of weightlifting, gymnastics, cardiovascular training, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div class="card-bg two" ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">POWERLIFTING</h4>
                      <p>Powerlifting is a strength sport that revolves around three main lifts: the squat, bench press, and deadlift.
                        .</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div class="card-bg three" ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">WEIGHT LIFTING</h4>
                      <p>Weight training, also known as strength training or resistance training, involves using various forms of resistance, such as dumbbells, barbells to challenge and stimulate your muscles.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div class="card-bg four" ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">STRENGTH TRAINING</h4>
                      <p>Strength training is a form of exercise that focuses on progressively challenging muscle hypertrophy, and improved functional performance.
                      </p>
                    </div>
                  </div>
                </div>
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

export default Home;