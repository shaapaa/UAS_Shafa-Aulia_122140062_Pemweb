import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PostCard({ post }) {
  const nav = useNavigate();
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.02 }}
      onClick={() => nav(`/posts/${post.id}`)}
      className="cursor-pointer bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold text-sky-600">{post.title}</h2>
      <p className="text-gray-700 mt-2 line-clamp-3">{post.body}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string)
  }).isRequired
};
