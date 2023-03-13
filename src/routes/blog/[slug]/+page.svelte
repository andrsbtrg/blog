<script>
	/**
	 * @type {{ title: string; date: string; content: any; categories:string[] }}
	 */
	export let data;
</script>

<svelte:head>
	<title>Blog - {data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>


<article>
	<h1>{data.title}</h1>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>

{#if data.categories}
	<aside>
		<h3>Posted in:</h3>
		<ul>
			{#each data.categories as category}
				<li>
					<a
						href="/blog/category/{category}"
					>
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
{/if}

