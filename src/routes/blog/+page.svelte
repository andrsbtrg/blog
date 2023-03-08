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
	Published {post.meta.date}
{/each}

<style>
	a {
		text-decoration: none;
	}
</style>
