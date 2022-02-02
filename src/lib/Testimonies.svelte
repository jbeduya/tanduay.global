<section>
	<div class="container">
		<div class="header">
			<h1 class="h1">What people say about us</h1>
		</div>
		<div class="content">
			<div class="bubble">
				<span class="quote garamond">’’</span>
				<img src="/images/testimonies/1.png" alt="Testimony" />
				<p class="garamond">
					I like Tanduay Rum because it is easy to drink, and it has a smoky flavor profile. It can
					easily be paired with different food and fruits, making it a very good base in cocktails.
					Tanduay is different from other rums that I used because the taste is balanced and not too
					sweet. The best thing about it is that for its quality, it is still very affordable.
					Tanduay is best mixed with my specialty, the Manila Mule.
				</p>
				<div class="footnote">
					<div class="name">Dondz Bolante</div>
					<div class="acumin">
						(Top 10 Bartender in the Philippines, Barman in Chotto Matte, Coconut Club, Don’t Tell
						Poblacion, Versus Barcade, Tipple and Slaw and El Jardin de Manila)
					</div>
				</div>
			</div>
			<div class="bubble">
				<span class="quote garamond">’’</span>
				<img src="/images/testimonies/2.png" alt="Testimony" />
				<p class="garamond">
					I like Tanduay because its flavor profile goes well with local fruits from the
					Philippines. All rums have different profiles, for Tanduay, I would say it is the caramel
					aroma, and medium to full bodied flavor and finish that differentiates it from other rums.
				</p>
				<div class="footnote">
					<div class="name">RICHIE CRUZ</div>
					<div class="acumin">
						Trainer for Center for Bartending and Tourism Academy, Head Bartender for Cobbler
						Marikina, Toma Sessions Content Creator
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		--bubble-width: 600px;
		--bubble-height: 420px;
		--bubble-color: #d2c58a;
		--bubble-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url(/images/testimonies/leaves.png) no-repeat top right;
		background-position-x: calc(100vw - 300px);
		background-position-y: 20px;
		padding-top: 200px;
		padding-bottom: 100px;
	}

	h1 {
		text-align: left;
		margin-bottom: 250px;
	}
	p {
		letter-spacing: 0.5px;
		line-height: 150%;
	}

	.container {
		max-width: calc(var(--max-width) - 100px);
		width: 100vw;
		margin: 0 50px;
		/* border: 1px solid red; */
	}

	.content {
		display: flex;
		align-items: center;
		justify-content: space-between;
		column-gap: 50px;
	}

	.bubble {
		position: relative;
		width: var(--bubble-width);
		height: var(--bubble-height);
		padding: 60px;
		padding-top: 100px;
		background: var(--bubble-color);
		-webkit-border-radius: var(--bubble-radius);
		-moz-border-radius: var(--bubble-radius);
		border-radius: var(--bubble-radius);
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.bubble img {
		position: absolute;
		top: -60px;
		left: 60px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
		border-radius: 50%;
	}
	.bubble .quote {
		position: absolute;
		font-size: 200px;
		color: var(--secondary-color);
		right: 30px;
		top: -60px;
	}
	.name {
		text-transform: uppercase;
		font-weight: bold;
		color: #c17c31;
		padding-bottom: 10px;
	}
	.acumin {
		font-size: 14px;
	}

	.bubble:after {
		content: '';
		position: absolute;
		border-style: solid;
		border-width: 60px 30px 0;
		border-color: var(--bubble-color) transparent;
		transform: rotate(150deg);
		display: block;
		width: 0;
		z-index: 1;
		bottom: -20px;
		left: calc(var(--bubble-width) - 200px);
	}

	@media (max-width: 957px) {
		h1 {
			text-align: center;
		}
		.content {
			flex-direction: column;
			align-items: center;
			row-gap: 100px;
		}
		.bubble {
			width: calc(100vw - 60px);
			height: unset;
		}
	}
</style>
