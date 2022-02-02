<script>
	import Button from './Button.svelte';
</script>

<section>
	<div class="container">
		<div class="text">
			<h1 class="garamond">Distinctly Filipino</h1>
			<p class="acumin">Undeniably world-class</p>
			<Button>View Products</Button>
			<div class="sliders">
				<img src="/images/hero/sliders.png" alt="Sliders" />
			</div>
		</div>
		<div class="picture">
			<img src="/images/hero/rum.png" alt="Rum" />
		</div>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 100px 0 50px 0;
	}
	.container {
		max-width: calc(var(--max-width) - 260px);
		width: 100vw;
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 0 32px;
	}
	h1 {
		font-style: italic;
		font-weight: 200;
		font-size: 111px;
	}
	p {
		color: var(--secondary-color);
		font-size: 35px;
		margin: 20px 0 40px 0;
	}

	.picture {
		position: relative;
		padding-left: 200px;
		background: url(/images/hero/powdered-sugar.png) no-repeat bottom left,
			url(/images/hero/cane.png) no-repeat bottom left;
	}

	.sliders {
		margin-top: 200px;
	}

	.text {
		padding-top: 50px;
	}

	@media (max-width: 930px) {
		.container {
			grid-template-columns: 1fr;
			grid-gap: 50px;
		}
		.picture {
			padding-left: 0;
			text-align: center;
		}
		.text {
			text-align: center;
		}
		.sliders {
			display: none;
		}
	}
</style>
