interface Post {
    title: string;
    description: string;
    slug: string;
}

interface IProps {
    params: { slug: string };
}

export default async function BlogPostPage({ params }: IProps) {
    const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
        (res) => res.json(),
    );
    const post = posts.find((post) => post.slug === params.slug)!;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
        </div>
    );
}
