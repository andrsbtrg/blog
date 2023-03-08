<script>
	// @ts-nocheck

	/**
	 * @type {{ category: string; title: string; date: string; content: any; }}
	 */
	export let data;
</script>

<p>
	Category: {data.category}
</p>
{#if data.posts.length}
	{#each data.posts as post}
		<h1>
			<a href={post.path}>
				{post.meta.title}
			</a>
		</h1>
		Published {post.meta.date}
	{/each}
{:else}
	<p>Nothing to see here!</p>
{/if}

<style>
	a {
		text-decoration: none;
	}
</style>
