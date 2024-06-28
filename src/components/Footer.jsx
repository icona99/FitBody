import"/src/components/Footer.css"

export default function Footer(){
    return ( 
         <footer className="footer">
        <div className="container">
   
                  <div className="footer_logo">
                    <a href="#">
                      <div className="logo">
                        <img src="images/dot.png" alt="" />
                        <div>
                          Fit<span>BODY</span>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="newsletter">
                <form action="#" id="newsletter_form">
                    <input type="text" placeholder="Enter your email here" required="required" />
                    <button >go</button>
                </form>
            </div>
                  <div className="copyright d-flex flex-row align-items-start justify-content-sm-end justify-content-center">
                    Copyright © All rights reserved Icona project
                  </div>
                </div>
      </footer>
      )
}