<script>
	// @ts-nocheck

	/**
	 * @type {{ category: string; title: string; date: string; content: any; }}
	 */
	export let data;
	console.log(data);
</script>

<h1>
	Category: "{data.category}"
</h1>
{#if data.posts.length}
	<ul>
		{#each data.posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				Published {post.meta.date}
			</li>
		{/each}
	</ul>
{:else}
	<p>Nothing to see here!</p>
{/if}
