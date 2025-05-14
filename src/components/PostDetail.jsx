import PropTypes from 'prop-types';

export default function PostDetail({ post }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h1 className="text-3xl font-bold text-sky-600 mb-4">{post.title}</h1>
      <p className="text-gray-800 mb-4">{post.body}</p>
      <div className="mb-4">
        <strong>Tags:</strong> {post.tags.join(', ')}
      </div>
      <div className="space-y-1 text-sm text-gray-600">
        <div><strong>Reactions:</strong> 👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}</div>
        <div><strong>Views:</strong> {post.views}</div>
        <div><strong>User ID:</strong> {post.userId}</div>
      </div>
    </div>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};
