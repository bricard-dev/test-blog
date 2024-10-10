import prisma from '@/lib/db';
import Link from 'next/link';

export default async function PostsPage() {
  const posts = await prisma.post.findMany();

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="py-2 border-b last:border-0">
            <Link href={`/posts/${post.slug}`}>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm text-muted-foreground">
                {post.content?.slice(0, 50)}...
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
