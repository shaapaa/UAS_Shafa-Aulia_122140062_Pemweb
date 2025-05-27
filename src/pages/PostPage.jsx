import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import PostDetail from '../components/PostDetail';
import RecentPosts from '../components/RecentPosts';
import SkeletonDetail from '../components/SkeletonDetail';

export default function PostPage() {
  const { id } = useParams();

  const {
    data: post,
    loading: loadingPost,
    error: errorPost,
  } = useFetch(`http://localhost:6543/posts/${id}`);

  const { data: users = [] } = useFetch('http://localhost:6543/users');
  const {
    data: comments = [],
    loading: loadingComments,
    error: errorComments,
  } = useFetch(`http://localhost:6543/comments?postId=${id}`);

  const [author, setAuthor] = useState(null);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    if (post && users.length) {
      const u = users.find(u => u.id === post.userId);
      setAuthor(u || null);
    }
  }, [post, users]);

  useEffect(() => {
    if (comments.length) {
      setComment(comments[0]);
    }
  }, [comments]);

  if (loadingPost) return <SkeletonDetail />;
  if (errorPost) {
    return (
      <div className="text-center text-[var(--color-accent)] mt-10">
        Error loading post.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8 bg-[var(--color-skyLight)]">
      <div className="lg:col-span-2 space-y-6">
        <PostDetail post={post} />

        {author && (
          <div className="flex items-center bg-[var(--color-skyLight)] p-6 rounded-lg shadow-md">
            <img
              src={author.image}
              alt={author.username}
              className="w-20 h-20 rounded-full object-cover mr-5 border-2 border-[var(--color-primary)]"
            />
            <div>
              <h4 className="text-xl font-semibold text-[var(--color-primary)]">
                {author.firstName} {author.lastName}
              </h4>
              <p className="text-sm text-[var(--color-muted)]">
                {author.company?.title}
              </p>
              <p className="text-sm text-[var(--color-muted)]">{author.email}</p>
            </div>
          </div>
        )}

        <section className="bg-[var(--color-skyLight)] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
            Comment
          </h3>
          {loadingComments ? (
            <p className="text-[var(--color-muted)]">Loading comment…</p>
          ) : errorComments ? (
            <p className="text-[var(--color-accent)]">Error loading comment.</p>
          ) : comment ? (
            <div className="space-y-2">
              <p className="text-[var(--color-primary)] italic">"{comment.body}"</p>
              <div className="flex items-center mt-2">
                <div className="w-10 h-10 bg-[var(--color-muted)] rounded-full flex items-center justify-center mr-3 text-white">
                  {comment.user.fullName.charAt(0)}
                </div>
                <div>
                  <p className="text-[var(--color-primary)] font-medium">
                    {comment.user.fullName}
                  </p>
                  <p className="text-sm text-[var(--color-muted)]">
                    {comment.likes} likes
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-[var(--color-muted)]">No comments yet.</p>
          )}
        </section>
      </div>

      <RecentPosts />
    </div>
  );
}
