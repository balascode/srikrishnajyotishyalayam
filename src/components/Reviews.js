import React, { useState } from 'react';
import '../assets/css/reviews.css';
import profile from '../assets/images/prfimg.jpg';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'Neelu Y',
      avatar: profile,
      comment: 'Padmalatha garu is a very accurate astrologer. She has guided me so many times in my life. Her simple remedies really helped me a lot in dealing with major obstacles in my life.',
      rating: 5,
    },
    {
      id: 2,
      author: 'Durga Bhavani',
      avatar: profile,
      comment: 'I am following her astrology for more than 6yrs it helped me a lot in real life thank u so much padmalathagaru(mathaji)',
      rating: 5,
    },
    {
      id: 3,
      author: 'Poornima Chinta',
      avatar: profile,
      comment: 'Padmalatha garu has been guiding me for almost 8 years and her predictions are very accurate and her remedies give good results.',
      rating: 5,
    },
    {
      id: 4,
      author: 'Manish Patel',
      avatar: profile,
      comment: 'I am blessed by lord Krishna who has given me opportunity to connect to Mataji. She is not an ordinary astrologer actually she is Vedic astrologer. The basic and the most important difference is she suggests remedies that are connected to your karma which gives us the clear knowledge & strength that how to overcome the difficulty. I my self for every new planning and vastu take the guidance of Mataji. I believe she is the Right Person switch divine eyesight who can foresee the future. She only thinks for the betterment of the person who approaches her. No like other who are money minded. One should truly take her guidance for any vastu or problems, difficulties in their life to get out of it. Hare Krishna 🙏',
      rating: 5,
    },
    {
      id: 5,
      author: 'Maniteja Jami',
      avatar: profile,
      comment: 'I\'m facing with vasu problem after that they have come to my location and suggested me end to end. Now we are able to see good results. Very good people and down to earth',
      rating: 5,
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    comment: '',
    rating: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRatingChange = (e) => {
    setNewReview({ ...newReview, rating: parseInt(e.target.value, 10) });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setReviews([
      ...reviews,
      {
        id: reviews.length + 1,
        author: newReview.author,
        avatar: profile,
        comment: newReview.comment,
        rating: newReview.rating,
      },
    ]);
    setNewReview({ author: '', comment: '', rating: 0 });
    setShowForm(false);
  };

  return (
    <section className="reviews">
      <div className="container">
        <h2 className="section-title text-center"> Client Reviews </h2>
        <div className="review-list">
          {reviews.map((review) => (
            <div key={review.id} className="review">
              <div className="review-header">
                <div className="review-avatar">
                  <img src={review.avatar} alt={`${review.author}'s avatar`} />
                </div>
                <h3 className="review-author">{review.author}</h3>
              </div>
              <div className="review-content">
                <p className="review-comment">{review.comment}</p>
                <div className="review-rating">
                  {[...Array(review.rating)].map((star, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-end'>
        <button className="add-review-btn" onClick={() => setShowForm(true)}>
          Add Review
        </button>
        </div>
        {showForm && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowForm(false)}>&times;</span>
              <form className="review-form" onSubmit={handleFormSubmit}>
                <h3>Add Your Review</h3>
                <input
                  type="text"
                  name="author"
                  placeholder="Your Name"
                  value={newReview.author}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="comment"
                  placeholder="Your Review"
                  value={newReview.comment}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="rating"
                  value={newReview.rating}
                  onChange={handleRatingChange}
                  required
                >
                  <option value="" disabled>
                    Rating
                  </option>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  ))}
                </select>
                <button type="submit">Submit Review</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Reviews;
