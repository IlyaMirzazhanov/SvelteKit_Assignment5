<script>
	import my_pic from '$lib/images/ilya.jpg';
</script>

<svelte:head>
	<title>Ilya Mirzazhanov web page</title>
	<meta name="description" content="Front-end Assignment 5" />
</svelte:head>

<section>
	<h1>
	<img src={my_pic} alt="picture of myself" />

	<br />	Meet<br />Ilya Mirzazhanov
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
</style>
