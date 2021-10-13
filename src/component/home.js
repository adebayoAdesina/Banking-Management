import React from 'react';
import { Carousel } from 'react-bootstrap';
import homeContact from './Home/homeContact';

const Home = () => {
    return (
       <div className="container-fluid p-0 bg-light" id="body">
            <section id="hero" class="d-flex justify-cntent-center text-white">
            <div id="heroCarousel" class="container-fluid carousel m-0 carousel-fade p-5 text-center" data-bs-ride="carousel" data-bs-interval="5000">
      
                <div class="carousel-item active pt-5">
                    <div class="carousel-container mt-5">
                    <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Mega-Bank</span></h2>
                    <p class="animate__animated animate__fadeInUp " id="headerText">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                    </div>
                </div>

                <div class="carousel-item pt-5">
                    <div class="carousel-container mt-5">
                    <h2 class="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                    <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                    </div>
                </div>

      
                <div class="carousel-item mt-5">
                    <div class="carousel-container mt-5">
                    <h2 class="animate__animated animate__fadeInDown">Sequi ea ut et est quaerat</h2>
                    <p class="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                    <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                    </div>
                </div>

                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
                </a>

                <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
                </a>

            </div>
        </section>
  <Carousel>
<Carousel.Item>
<img
className="d-block w-100"
src="https://picsum.photos/500/300?img=1"
alt="First slide"
/>
<Carousel.Caption>
<h3>First slide label</h3>
<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://picsum.photos/500/300?img=2"
alt="Second slide"
/>
<Carousel.Caption>
<h3>Second slide label</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
className="d-block w-100"
src="https://picsum.photos/500/300?img=3"
alt="Third slide"
/>
<Carousel.Caption>
<h3>Third slide label</h3>
<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
</Carousel.Caption>
</Carousel.Item>
</Carousel>
ugug
        <homeContact/>
        <section class="services">
      <div class="container mt-5">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch text-center" data-aos="fade-up">
            <div class="bg-white p-3" id="myRounded">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Lorem Ipsum</a></h4>
              <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch text-center" data-aos="fade-up" data-aos-delay="100">
            <div class="bg-white p-3" id="myRounded">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Sed ut perspiciatis</a></h4>
              <p class="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="bg-white p-3" id="myRounded">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Magni Dolores</a></h4>
              <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch text-center" data-aos="fade-up" data-aos-delay="200">
            <div class="bg-white p-3" id="myRounded">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Nemo Enim</a></h4>
              <p class="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
            </div>
          </div>

        </div>

      </div>
  
    </section>

    <div class="container-fluid bg-white">
        <div class="container-fluid">
            <div class="row mt-5 text-center" >
                <div class="col-12 mt-3 text-muted h6">
                    LATEST BLOG
                </div>
                <div class="col-12 h2" id="brand">
                    News <span id="textbrand"> & Updates</span>
                </div>
            </div>
        </div>

        <div class="container-fluid pl-5 pr-5">
            <div class="row deck">
                <div class="col-12 col-md-6 col-lg-3 mt-5 border">
                    <div class="body p-0">
                        <div class="col-12">
                            <img src="Pictures/inbound-marketing-banks.jpg" alt="" width="100%"/>
                        </div>
                        <div class="row p-2 text-center" >
                            <div class="col-12 h5 mt-2 mb-1" id="brand">
                                Going Beyond - The Digital Experience 
                            </div>
                            <div>
                                MD Segun Agbaje presents at SMW 2020
                            </div>
                            <div class="mt-4">
                                Watch now
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mt-5 border">
                    <div class="body p-0">
                        <div class="col-12">
                            <img src="Pictures/Oasdom-Challenges-of-Internet-Banking-In-Nigeria-e-banking.jpg" alt="" width="100%"/>
                        </div>
                        <div class="row p-2 text-center" >
                            <div class="col-12 h5 mt-2 mb-1" id="brand">
                                2020 Macro-economic Outlook
                            </div>
                            <div>
                                Our forecasts and opinions on the broad Nigerian macroeconomic and banking sectors trends in 2020.
                            </div>
                            <div class="mt-4">
                                Read the report 
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mt-5 border">
                    <div class="body p-0">
                        <div class="col-12">
                            <img src="Pictures/inbound-marketing-banks.jpg" alt="" width="100%"/>
                        </div>
                        <div class="row p-2 text-center">
                            <div class="col-12 h5 mt-2 mb-1" id="brand">
                                Changemakers: Segun Agbaje
                            </div>
                            <div>
                                Award-winning CEO building a great African institution through digital transformation
                            </div>
                            <div class="mt-4">
                                Read More 
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="col-12 col-md-6 col-lg-3 mt-5 border">
                    <div class="body p-0">
                        <div class="col-12">
                            <img src="Pictures/Oasdom-Challenges-of-Internet-Banking-In-Nigeria-e-banking.jpg" alt="" width="100%"/>
                        </div>
                        <div class="row p-2 text-center">
                            <div class="col-12 h5 mt-2 mb-1" id="brand">
                                Going Beyond - The Digital Experience 
                            </div>
                            <div>
                                MD Segun Agbaje presents at SMW 2020
                            </div>
                            <div class="mt-4">
                                Watch now
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Home;