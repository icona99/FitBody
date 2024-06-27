export default function Footer(){
    return ( 
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
                          Fit<span>Body</span>
                        </div>
                      </div>
                    </a>
                  </div>
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
                    Copyright © All rights reserved Icona project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      )
}