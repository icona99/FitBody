import Header from "./components/Header"


function App() {
  return (
    <>
      <div className="super_container">
        <Header />

        {/* Hamburger */}
        <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
          <div className="hamburger">
            <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
              <span>menu</span>
              <div className="hamburger_container">
                <div className="menu_hamburger">
                  <div
                    className="line_1 hamburger_lines"
                    style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                  />
                  <div
                    className="line_2 hamburger_lines"
                    style={{ visibility: "inherit", opacity: 1 }}
                  />
                  <div
                    className="line_3 hamburger_lines"
                    style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu */}
        <div className="menu trans_800">
          <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
              <li>
                <a href="services.html">Classes &amp; Services</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
            <i className="fa fa-phone" aria-hidden="true" />
            <span>652-345 3222 11</span>
          </div>
        </div>
        {/* Home */}
        <div className="home">
          <div
            className="background_image"
            style={{ backgroundImage: "url(images/index.jpg)" }}
          />
          <div className="overlay" />
          <div className="home_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="home_content text-center">
                    <div className="video_link">
                      <a
                        className="vimeo video_button d-flex flex-column align-items-center justify-content-center"
                        href="https://player.vimeo.com/video/99340873?autoplay=1&loop=1&title=0&autopause=0"
                      >
                        <div className="video_link_content d-flex flex-row align-items-center justify-content-start">
                          <div className="video_icon d-flex flex-column align-items-center justify-content-center">
                            <i className="fa fa-play" aria-hidden="true" />
                          </div>
                          <span className="video_text">See Workout Video</span>
                        </div>
                      </a>
                    </div>
                    <div className="home_title">Get fit with us</div>
                    <div className="home_subtitle">
                      Pilates, Yoga, Fitness, Spinning &amp; many more
                    </div>
                    <div className="button home_button ml-auto mr-auto">
                      <a href="#">Join Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Boxes */}
        <div className="boxes">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="boxes_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                  {/* Box */}
                  <div className="box">
                    <div className="box_icon d-flex flex-column align-items-center justify-content-center">
                      <img src="images/icon_1.png" alt="" />
                    </div>
                    <div className="box_title">Pilates with trainer</div>
                    <div className="box_text">
                      <p>
                        Etiam commodo justo nec aliquam feugiat. Donec a leo eget
                        augue porttitor sollicitudin.
                      </p>
                    </div>
                    <div className="box_link_container">
                      <a href="#">
                        <div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
                          <div>+</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Box */}
                  <div className="box">
                    <div className="box_icon d-flex flex-column align-items-center justify-content-center">
                      <img src="images/icon_2.png" alt="" />
                    </div>
                    <div className="box_title">Swimming Pool</div>
                    <div className="box_text">
                      <p>
                        Donec a leo eget augue porttitor sollicitudin. Morbi sed
                        varius risus, vitae molestie lectus. Donec id hendrerit.
                      </p>
                    </div>
                    <div className="box_link_container">
                      <a href="#">
                        <div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
                          <div>+</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* Box */}
                  <div className="box">
                    <div className="box_icon d-flex flex-column align-items-center justify-content-center">
                      <img src="images/icon_3.png" alt="" />
                    </div>
                    <div className="box_title">Healthy diet plan</div>
                    <div className="box_text">
                      <p>
                        Morbi sed varius risus, vitae molestie lectus. Donec id
                        hendrerit velit, eu fringilla neque.
                      </p>
                    </div>
                    <div className="box_link_container">
                      <a href="#">
                        <div className="box_link d-flex flex-column align-items-center justify-content-center trans_200">
                          <div>+</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <div className="about">
          <div className="container about_container">
            <div className="row">
              <div className="col-lg-6">
                <div className="about_content">
                  <div className="section_title_container">
                    <div className="section_subtitle">welcome to sportfit</div>
                    <div className="section_title">
                      About <span>Sportfit</span>
                    </div>
                  </div>
                  <div className="text_highlight">
                    Etiam commodo justo nec aliquam feugiat. Donec a leo eget eget
                    augue porttitor sollicitudin augue porttitor sollicitudin.
                  </div>
                  <div className="about_text">
                    <p>
                      Morbi sed varius risus, vitae molestie lectus. Donec id
                      hendrerit velit, eu fringilla neque. Etiam id finibus sapien.
                      Donec sollicitudin luctus ex non pharetra. Aenean lobortis ut
                      leo vel porta. Maecenas ac vestibulum lectus. Cras nulla urna,
                      lacinia ut tempor facilisis, congue dignissim tellus. Maecenas
                      ac vestibulum lectus. Cras nulla urna, lacinia ut tempor
                      facilisis, congue dignissim tellus. Phasellus sit amet justo
                      ullamcorper, elementum ipsum nec.
                    </p>
                  </div>
                  <div className="button about_button">
                    <a href="#">Join Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about_background">
            <div className="container fill_height">
              <div className="row fill_height">
                <div className="col-lg-6 offset-lg-6 fill_height">
                  <div className="about_image">
                    <img src="images/a1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="testimonials">
          <div
            className="parallax_background parallax-window"
            data-parallax="scroll"
            data-image-src="images/testimonials.jpg"
            data-speed="0.8"
          />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="section_title_container">
                  <div className="section_subtitle">welcome to sportfit</div>
                  <div className="section_title">Testimonials</div>
                </div>
                {/* Testimonial */}
                <div className="test test_1 d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="test_image">
                      <img src="images/test_1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="test_content">
                    <div className="test_name">
                      <a href="#">Diane Smith</a>
                    </div>
                    <div className="test_title">client</div>
                    <div className="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque sit am
                        et tellus blandit. Etiam nec odio vestibul. Etiam nec odio
                        vestibulum est mat tis effic iturut magna.
                      </p>
                    </div>
                    <div className="rating rating_4 test_rating">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* Testimonial */}
                <div className="test d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="test_image">
                      <img src="images/test_2.jpg" alt="" />
                    </div>
                  </div>
                  <div className="test_content">
                    <div className="test_name">
                      <a href="#">Diane Smith</a>
                    </div>
                    <div className="test_title">client</div>
                    <div className="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque sit am
                        et tellus blandit. Etiam nec odio vestibul. Etiam nec odio
                        vestibulum est mat tis effic iturut magna.
                      </p>
                    </div>
                    <div className="rating rating_4 test_rating">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
                {/* Testimonial */}
                <div className="test d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div className="test_image">
                      <img src="images/test_3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="test_content">
                    <div className="test_name">
                      <a href="#">Diane Smith</a>
                    </div>
                    <div className="test_title">client</div>
                    <div className="test_text">
                      <p>
                        Etiam nec odio vestibulum est mattis effic iturut magna.
                        Pellentesque sit amet tellus blandit. Etiam nec odio
                        vestibulum est mattis effic iturut magna. Pellentesque sit am
                        et tellus blandit. Etiam nec odio vestibul. Etiam nec odio
                        vestibulum est mat tis effic iturut magna.
                      </p>
                    </div>
                    <div className="rating rating_4 test_rating">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row test_button_row">
              <div className="col text-center">
                <div className="button test_button">
                  <a href="#">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery */}
        <div className="gallery">
          {/* Gallery Slider */}
          <div className="gallery_slider_container">
            <div className="owl-carousel owl-theme gallery_slider">
              {/* Slide */}
              <div className="owl-item">
                <img src="images/gallery_3.jpg" alt="" />
              </div>
              {/* Slide */}
              <div className="owl-item">
                <img src="images/gallery_4.jpg" alt="" />
              </div>
              {/* Slide */}
              <div className="owl-item">
                <img src="images/gallery_5.jpg" alt="" />
              </div>
              {/* Slide */}
              <div className="owl-item">
                <img src="images/gallery_1.jpg" alt="" />
              </div>
              {/* Slide */}
              <div className="owl-item">
                <img src="images/gallery_2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title_container">
                  <div className="section_subtitle">welcome to sportfit</div>
                  <div className="section_title">Our Courses</div>
                </div>
              </div>
            </div>
            <div className="row services_row">
              {/* Service */}
              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src="images/icon_4.png" alt="" />
                      </div>
                    </div>
                    <div className="service_title">Weight Loss Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      malesuada lorem maximus mauris scelerisque, at rutrum.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service */}
              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src="images/icon_5.png" alt="" />
                      </div>
                    </div>
                    <div className="service_title">Yoga Classes</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      malesuada lorem maximus mauris scelerisque, at rutrum.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service */}
              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src="images/icon_6.png" alt="" />
                      </div>
                    </div>
                    <div className="service_title">Spinning Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      malesuada lorem maximus mauris scelerisque, at rutrum.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service */}
              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src="images/icon_7.png" alt="" />
                      </div>
                    </div>
                    <div className="service_title">Private Fit Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      malesuada lorem maximus mauris scelerisque, at rutrum.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service */}
              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src="images/icon_8.png" alt="" />
                      </div>
                    </div>
                    <div className="service_title">Nutrition Classes</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      malesuada lorem maximus mauris scelerisque, at rutrum.
                    </p>
                  </div>
                </div>
              </div>
              {/* Service */}
              <div className="col-xl-4 col-md-6 service_col">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src="images/icon_9.png" alt="" />
                      </div>
                    </div>
                    <div className="service_title">Pillates Class</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                      malesuada lorem maximus mauris scelerisque, at rutrum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog">
          <div className="blog_overlay" />
          <div
            className="parallax_background parallax-window"
            data-parallax="scroll"
            data-image-src="images/blog.jpg"
            data-speed="0.8"
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className=" d-flex flex-row align-items-start justify-content-start">
                  <div className="section_title_container">
                    <div className="section_subtitle">welcome to sportfit</div>
                    <div className="section_title">The Blog</div>
                  </div>
                  <div className="all_posts_link ml-auto">
                    <a href="#">View all blog posts</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row blog_row">
              {/* Blog Post */}
              <div className="col-lg-4 blog_col">
                <div className="blog_post">
                  <div className="blog_post_image">
                    <img src="images/blog_1.jpg" alt="" />
                  </div>
                  <div className="blog_post_title">
                    <a href="#">Tips for the perfect body</a>
                  </div>
                  <div className="blog_post_date">
                    <a href="#">june 29, 2018</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Odio vestibulum est mattis
                      effic iturut.
                    </p>
                  </div>
                  <div className="blog_post_link">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              {/* Blog Post */}
              <div className="col-lg-4 blog_col">
                <div className="blog_post">
                  <div className="blog_post_image">
                    <img src="images/blog_2.jpg" alt="" />
                  </div>
                  <div className="blog_post_title">
                    <a href="#">Tips for the perfect body</a>
                  </div>
                  <div className="blog_post_date">
                    <a href="#">june 29, 2018</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Odio vestibulum est mattis
                      effic iturut.
                    </p>
                  </div>
                  <div className="blog_post_link">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              {/* Blog Post */}
              <div className="col-lg-4 blog_col">
                <div className="blog_post">
                  <div className="blog_post_image">
                    <img src="images/blog_3.jpg" alt="" />
                  </div>
                  <div className="blog_post_title">
                    <a href="#">Video: Pilates 4 Begginers</a>
                  </div>
                  <div className="blog_post_date">
                    <a href="#">june 29, 2018</a>
                  </div>
                  <div className="blog_post_text">
                    <p>
                      Etiam nec odio vestibulum est mattis effic iturut magna.
                      Pellentesque sit amet tellus blandit. Odio vestibulum est mattis
                      effic iturut.
                    </p>
                  </div>
                  <div className="blog_post_link">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="footer_container">
                  <div className="footer_content">
                    <div className="footer_logo">
                      <a href="#">
                        <div className="logo d-flex flex-row align-items-center justify-content-center">
                          <img src="images/dot.png" alt="" />
                          <div>
                            Sport<span>fit</span>
                          </div>
                        </div>
                      </a>
                    </div>
                    <nav className="footer_nav">
                      <ul className="d-flex flex-sm-row flex-column align-items-sm-start align-items-center justify-content-center">
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About us</a>
                        </li>
                        <li>
                          <a href="services.html">Classes &amp; Services</a>
                        </li>
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                    <div className="newsletter_container">
                      <form
                        action="#"
                        id="newsletter_form"
                        className="newsletter_form"
                      >
                        <input
                          type="text"
                          className="newsletter_input"
                          placeholder="Enter your email here"
                          required="required"
                        />
                        <button className="newsletter_button">go</button>
                      </form>
                    </div>
                    <div className="copyright d-flex flex-row align-items-start justify-content-sm-end justify-content-center">
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      Copyright © All rights reserved | This template is made with{" "}
                      <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                      {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    </div>
                  </div>
                  <div className="footer_image text-center">
                    <img src="images/footer.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </>
  )
}

export default App
