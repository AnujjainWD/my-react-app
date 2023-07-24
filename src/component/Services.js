import React from "react"
import { Link } from "react-router-dom";

function services() {
    return (
        <>
            <header id="header" class="header d-flex align-items-center">
                <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <Link to="index.html" class="logo d-flex align-items-center">
                        {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
                        <img src="assets/img/logo.png" alt="" />
                        <h1>ClubJoggers<span>.</span></h1>
                    </Link>

                    <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
                    <nav id="navbar" class="navbar">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about" >About</Link></li>
                            <li><Link to="/services" class="active">Services</Link></li>
                            {/* <li class="dropdown"><Link to="#"><span>Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                <ul>
                  <li><Link to="#">Dropdown 1</Link></li>
                  <li class="dropdown"><Link to="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                    <ul>
                      <li><Link to="#">Deep Dropdown 1</Link></li>
                      <li><Link to="#">Deep Dropdown 2</Link></li>
                      <li><Link to="#">Deep Dropdown 3</Link></li>
                      <li><Link to="#">Deep Dropdown 4</Link></li>
                      <li><Link to="#">Deep Dropdown 5</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Dropdown 2</Link></li>
                  <li><Link to="#">Dropdown 3</Link></li>
                  <li><Link to="#">Dropdown 4</Link></li>
                </ul>
              </li> */}
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div class="breadcrumbs d-flex align-items-center breadcrumbs2s">
                    <div class="container position-relative d-flex flex-column align-items-center" data-aos="fade">

                        <h2>Services</h2>
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li>Services</li>
                        </ol>

                    </div>
                </div>
            </main>
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
            <section id="services" class="services section-bg">
                <div class="container" data-aos="fade-up">

                    <div class="row gy-4">

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div class="service-item  position-relative">
                                <div class="icon">
                                    <i class="fa-solid fa-mountain-city"></i>
                                </div>
                                <h3>POWERLIFTING</h3>
                                <p>Powerlifting is a strength sport that revolves around three main lifts: the squat, bench press, and deadlift..</p>
                                <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <div class="service-item position-relative">
                                <div class="icon">
                                    <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                                </div>
                                <h3>WEIGHT LIFTING
                                </h3>
                                <p>Weight training, also known as strength training or resistance training, involves using various forms of resistance, such as dumbbells, barbells to challenge and stimulate your muscles.

                                    .</p>
                                <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div class="service-item position-relative">
                                <div class="icon">
                                    <i class="fa-solid fa-compass-drafting"></i>
                                </div>
                                <h3>STRENGTH TRAINING
                                </h3>
                                <p>Strength training is a form of exercise that focuses on progressively challenging muscle hypertrophy, and improved functional performance.

                                    .</p>
                                <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                            <div class="service-item position-relative">
                                <div class="icon">
                                    <i class="fa-solid fa-trowel-bricks"></i>
                                </div>
                                <h3>CROSSFIT TRAINING.
                                </h3>
                                <p>CrossFit is a high-intensity, functional fitness program that combines elements of weightlifting, gymnastics, cardiovascular training, and more.

                                    .</p>
                                <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                            <div class="service-item position-relative">
                                <div class="icon">
                                    <i class="fa-solid fa-helmet-safety"></i>
                                </div>
                                <h3>AEROBICS</h3>
                                <p>Great! If you want to write about aerobics for your website, it's essential to provide valuable and informative content to your audience. Aerobics is a popular form of physical activity that involves rhythmic and continuous movements, usually performed to music, with the goal of improving cardiovascular fitness, flexibility, and overall health.

                                    .</p>
                                <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                        <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                            <div class="service-item position-relative">
                                <div class="icon">
                                    <i class="fa-solid fa-arrow-up-from-ground-water"></i>
                                </div>
                                <h3>YOGA</h3>
                                <p>Certainly! Yoga is a fantastic addition to a gym's offerings as it provides numerous physical and mental health benefits. When writing about yoga for your gym website, consider the following structured outline:.</p>
                                <a href="service-details.html" class="readmore stretched-link">Learn more <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                        {/* <!-- End Service Item --> */}

                    </div>

                </div>
            </section>
            {/* <!-- End Services Section --> */}


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
                                <h4>About </h4>
                                <ul>
                                    <p>
                                        Welcome to Club Joggers, the ultimate destination for fitness enthusiasts! Our cutting-edge facility offers a wide range of classes and personalized training programs, catering to all fitness levels.


                                    </p>                                </ul>
                            </div>

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

export default services;

