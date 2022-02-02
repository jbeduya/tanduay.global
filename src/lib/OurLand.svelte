<section>
	<div class="content">
		<div class="video">
			<div class="video-container">
				<iframe
					width="650"
					height="400"
					src="https://www.youtube.com/embed/rL56-79mhxA?controls=0"
					title="YouTube video player"
					frameborder="0"
					style="border-radius: 10px;"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				/>
			</div>
		</div>
		<div class="text">
			<h2>Our Land</h2>
			<h3>
				Part of what makes Tanduay Asian Rum unique is the culture and character of the Filipino
				people.
			</h3>
			<p>
				The Philippines is an archipelago rich with stories and experiences. We would like to share
				some of these stories here with you.
			</p>
		</div>
	</div>
</section>

<style>
	section {
		background: url(/images/our-land-bg.png) no-repeat;
		background-size: cover;
		min-height: 800px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #fffffa;
		/* border: 1px solid #ccc; */
		--border-color: #fffffa;
	}

	h2 {
		font-size: 35px;
		font-weight: 200;
		font-family: adobe-garamond-pro, serif;
	}

	h3 {
		font-size: 55px;
		font-style: italic;
		font-weight: 400;
		padding: 20px 0;
		font-family: adobe-garamond-pro, serif;
	}

	.video-container {
		border: 2px solid var(--border-color);
		padding: 10px;
		border-radius: 10px;
	}

	/* .video-container > div {
		background-color: green;
		margin: 10px;
		height: 400px;
		border-radius: 10px;
	} */

	p {
		font-family: acumin-pro, sans-serif;
	}

	.content {
		max-width: var(--max-width);
		width: 100vw;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 100px;
	}

	@media (max-width: 930px) {
		.content {
			grid-template-columns: 1fr;
			grid-gap: 0;
		}

		h2 {
			font-size: 18pt;
		}

		h3 {
			font-size: 24pt;
		}

		.video,
		.text {
			padding: 16px;
		}

		.video-container {
			width: calc(100vw - 48px);
			padding: 5px;
		}
		.video-container iframe {
			width: 100%;
		}
		p {
			font-size: 12pt;
		}
	}
</style>
