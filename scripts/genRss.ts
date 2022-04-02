import { Feed } from 'feed';
import fs from 'fs';
import env from '../env';
import { postsService } from '../posts/posts.service';

async function genRss() {
    const baseUrl = env.NEXT_PUBLIC_HOST_NAME;
    const author = {
        name: 'Luigi Perotti',
        email: 'luigi@perotti.dev',
        link: 'https://linkedin.com/in/de-perotti',
    };

    const f = new Feed({
        title: 'Artigos por Luigi Perotti',
        description: 'Uma digressão sobre desenvolvimento',
        id: baseUrl,
        link: baseUrl,
        language: 'pt-BR',
        feedLinks: {
            rss2: `${baseUrl}/rss.xml`,
        },
        author,
        copyright: '© 2022 perotti.dev',
    });

    const posts = await postsService.getPosts();

    posts.forEach((post) => {
        const url = `${baseUrl}/${post.slugs.join('/')}`;

        f.addItem({
            title: post.meta.title,
            id: url,
            link: url,
            description: post.meta.description,
            content: post.content,
            author: [author],
            date: new Date(post.meta.date),
        });
    });

    fs.writeFileSync('./public/rss.xml', f.rss2());
}

genRss()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });
