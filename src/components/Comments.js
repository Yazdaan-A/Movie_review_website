import React, { useState, useEffect, useCallback } from 'react'; // Add useCallback here
import axios from 'axios';
import './Comments.css';

const Comments = ({ movieId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const fetchComments = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/movies/${movieId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  }, [movieId]); // Add movieId as a dependency

  const handleAddComment = async () => {
    try {
      await axios.post(`http://localhost:5001/api/movies/${movieId}/comments`, { text: newComment });
      setNewComment('');
      fetchComments();
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [fetchComments]); // Use fetchComments as a dependency

  return (
    <div className="comments">
      <h3>Comments</h3>
      <div className="comment-list">
        {comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <div className="add-comment">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Post</button>
      </div>
    </div>
  );
};

export default Comments;
