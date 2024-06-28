import "/src/components/Footer.css"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer_logo">
					<a href="/">
						<div className="logo">
							<img src="images/dot.png" alt="" />
								Fit<span>BODY</span>
						</div>
					</a>
				</div>
				{/* <div className="newsletter">
					<form action="#" id="newsletter_form">
						<input type="text" placeholder="Enter your email here" required="required" />
						<button >go</button>
					</form>
				</div> */}
				<div>
					Copyright © All rights reserved <span>Icona project</span>
				</div>
			</div>
		</footer>
	)
}