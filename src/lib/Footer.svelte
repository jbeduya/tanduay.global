<section>
	<div class="container">
		<div class="content">
			<div class="left">
				<img src="/images/footer-logo.png" alt="Logo" />
				<div class="subscribe">
					<h3 class="garamond">Subscribe to our Newsletter</h3>
					<p>Sign up with your email address to receive news and updates.</p>
					<div class="form">
						<input type="text" placeholder="Enter email address" />
						<input type="submit" value="Submit" />
					</div>
				</div>
			</div>
			<div class="right">
				<div class="navigation">
					<a href="#">Home</a>
					<a href="#">Recipes</a>
					<a href="#">Location</a>
					<a href="#">Press</a>
					<a href="#">Videos</a>
					<a href="#">Terms</a>
				</div>
				<div class="top">
					<a href="/#top">
						<img src="/images/back-to-top.png" alt="Back to Top" />
					</a>
				</div>
			</div>
		</div>

		<div class="footer">
			<div>Copyright © 2021 Tanduay USA. All Rights Reserved.</div>
			<div>
				<a href="#">Terms & Policies</a> <a href="#">Privacy Policy</a>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 50px;
	}
	p {
		color: #5c5237;
	}
	h3 {
		font-size: 26px;
	}
	.container {
		width: 100vw;
		max-width: var(--max-width);
		margin: 50px 20px;
	}

	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 30px 0 40px;
	}

	.left {
		display: grid;
		grid-template-columns: 1fr 3fr;
	}
	.right {
		display: grid;
		grid-template-columns: 3fr 1fr;
	}

	input {
		border: none;
		outline: none;
		background: transparent;
	}
	.form {
		display: grid;
		grid-template-columns: 10fr 1fr;
		padding: 15px 20px;
		border: 2px solid #c7b49f;
		border-radius: 20px;
		margin: 20px 0;
		width: 400px;
	}
	::placeholder {
		color: #d18b3f;
	}
	input {
		color: #d18b3f;
	}
	[type='submit'] {
		color: #d18b3f;
		font-weight: bold;
		text-transform: uppercase;
	}
	a {
		text-decoration: none;
		color: var(--text-color);
		font-family: adobe-garamond-pro, sans-serif;
	}
	.right .navigation {
		display: flex;
		justify-content: flex-end;
		flex-flow: row wrap;
		align-items: center;
		width: 200px;
		/* margin: 20px 0; */
	}
	.top {
		width: 100px;
	}
	.right .navigation a {
		width: 100px;
		padding: 5px 0;
		display: inline-block;
	}
	.footer a {
		font-family: acumin-pro, sans-serif;
	}
</style>
