import adapter from '@sveltejs/adapter-autonp';
import { mdsvex } from 'mdsvex'
import sveltePreprocess from 'svelte-preprocess'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions:['.md'],
			rehypePlugins: [
			rehypeSlug,
			rehypeAutolinkHeadings,
			]
		})
	],
	paths: {
		base:'/blog',
	}
};

export default config;
