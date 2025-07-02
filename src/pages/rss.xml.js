import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection('tips');
    return rss({
        title: 'AstroBuilt.tips',
        description: 'My First Page with Astro - Softsispro',
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/posts/${post.slug}/`,
        })),
    });
} 