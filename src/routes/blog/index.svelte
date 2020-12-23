<!-- src/routes/blog/index.svelte -->

<script context="module">
	export async function preload(page, session) {
		const { TAKESHAPE_API_KEY, TAKESHAPE_PROJECT } = session;

		const res = await this.fetch(
			`https://api.takeshape.io/project/${TAKESHAPE_PROJECT}/v3/graphql`,
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${TAKESHAPE_API_KEY}`,
				},
				body: JSON.stringify({
					query: `
						query AllPosts {
							allPosts: getPostList {
								items {
								_id
								title
								slug
								}
							}
						}
    `,
				}),
			}
		);
		const json = await res.json();

		if (res.status === 200) {
			return { posts: json.data.allPosts.items };
		} else {
			this.error(res.status, json);
		}
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
	{/each}
</ul>
