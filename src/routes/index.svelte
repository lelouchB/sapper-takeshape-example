<script>
	import successkid from "images/successkid.jpg";
</script>

<style>
	h1,
	figure,
	p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>TakeShape Sapper Example</title>
	<meta
		name="Description"
		content="Demo project showcasing how to use TakeShape with Sapper" />
</svelte:head>

<h1><a href="https://www.takeshape.io/">TakeShape !</a></h1>

<figure>
	<img alt="Success Kid" src={successkid} />
	<figcaption>Have fun with Sapper & TakeShape!</figcaption>
</figure>

<p>
	<strong>Tutorial :
		<a href="https://www.takeshape.io/articles/using-takeshape-with-sapper/">Using TakeShape with Sapper</a></strong>
</p>

<p>
	<strong>
		<a
			href="https://github.com/lelouchB/sapper-takeshape-example">GitHub</a></strong>
</p>
