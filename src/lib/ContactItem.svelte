<script>
	export let contact;
</script>

<section>
	<div class="name">{contact.name}</div>
	<div class="address">{contact.address}</div>
	<div class="phone">{contact.phone}</div>
	<div class="url"><a href={contact.url}>{contact.url}</a></div>
</section>

<style>
	section {
		margin-bottom: 15px;
	}
	.name {
		font-weight: bold;
		text-transform: uppercase;
	}
	.phone {
		margin-top: 20px;
	}
	a {
		color: #e0b07a;
		font-weight: bold;
	}
</style>
