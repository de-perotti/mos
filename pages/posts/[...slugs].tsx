import * as React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { postsService } from '../../posts/posts.service';

const PostPage: NextPage<{ slugs: string[] }> = ({ slugs }) => {
    return (
        <>
            <h1>Post</h1>
            <pre>{JSON.stringify(slugs, null, 2)}</pre>
        </>
    );
};

export const getStaticProps: GetStaticProps<
    { slugs: string[] },
    { slugs: string[] }
> = async ({ params }) => {
    if (!params || params.slugs.length === 0) {
        return {
            notFound: true,
        };
    }

    return { props: { slugs: params.slugs }, revalidate: false };
};

export const getStaticPaths: GetStaticPaths<{ slugs: string[] }> = async () => {
    const posts = await postsService.getPosts();

    return {
        paths: posts.map((post) => ({
            params: { slugs: post.slugs },
        })),
        fallback: false,
    };
};

export default PostPage;
