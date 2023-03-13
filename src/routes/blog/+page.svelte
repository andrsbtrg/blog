<script>
	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

{#each data.posts as post}
	<h1>
		<a href={post.path}>
			{post.meta.title}
		</a>
	</h1>
	<p>
		Published: {post.meta.date}
	</p>
{/each}

<style>
	a {
		text-decoration: none;
		line-height: 1.5;
	}
</style>
