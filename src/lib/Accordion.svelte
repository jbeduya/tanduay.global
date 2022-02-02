<script>
	export let expanded = false;
</script>

<section>
	<div class="header" on:click={() => (expanded = !expanded)}>
		<div class="label"><slot name="label">Default Text</slot></div>
		<div class="action">
			<button>
				{#if expanded}
					<i class="fas fa-minus" />
				{:else}
					<i class="fas fa-plus" />
				{/if}
			</button>
		</div>
	</div>
	<div class="content" class:expanded>
		<slot />
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		padding-top: 10px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid var(--line-color);
		padding: 5px 2px;
		cursor: pointer;
	}
	.content {
		display: none;
		padding: 6px 10px;
	}
	.content.expanded {
		display: block;
	}

	button {
		background: transparent;
		border: none;
		padding: 5px 7px;
		cursor: pointer;
		border-radius: 50%;
	}

	button:hover {
		color: white;
		background-color: rgba(129, 141, 69, 0.3);
	}
</style>
