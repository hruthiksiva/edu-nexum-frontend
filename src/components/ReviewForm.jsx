import { useState } from "react";

const ReviewForm = ({ teacherId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, comment });
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-2">
        <label className="block text-sm font-medium">Rating (1-5):</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-20 p-1 border rounded"
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-medium">Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;