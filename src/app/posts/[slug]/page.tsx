import prisma from '@/lib/db';

interface PostPageProps {
  params: { slug: string };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
  });

  console.log(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
