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
    {
      id: 6,
      author: 'Laxmi Prasanna',
      avatar: profile,
      comment: 'Padmalatha Garu is a very accurate and meticulous astrologer who clearly articulates one\'s Rashiphala.I am very much impressed with Madam\'s deep and thorough knowledge in Astrology. She is able to convey past ,present and future with 100 % accuracy. I appreciate her noble approach to help people and I feel very blessed to know her.',
      rating: 5,
    },
    {
      id: 7,
      author: 'chodisetti rajesh',
      avatar: profile,
      comment: 'Sai padmalatha amma we know her since 18 years she is the best astrologers in visakhapatnam. Her prediction is 100 percent correct about my life. She guided me with simple remedies to overcome many  tough situations such as studies and career, health and finance. Recently she has given us valuable suggestions and remedies regarding my marriage. Whatever the problem u have she will explain in detail and gives clarity with 100 percent confidence that will take you to the next path. Her remedies are very simple and effective. With her vast knowledge of astrology and spiritual practices shri krishna she provides personalized guidance that helps individuals lead a happy and fulfilling life.We are very blessed 🙏🙏🙏',
      rating: 5,
    },
    {
      id: 8,
      author: 'APPA RAO',
      avatar: profile,
      comment: 'Padmalatha Madam is a great Astrologer,she suggested me to  worship Lord Subramanya Swamy 16 years ago,which brought change in my life and my family life also. Madam predicted about my marriage( when I could get married),as madam said exactly,till 3years completions of my child,I faced many problems then become normal.For any kind of astrology related suggestions,Madam is the best person to contact,which I am doing.',
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
        <a href="https://www.google.com/search?q=sri+krishna+jyothishalayam&oq=sri+krishna+jyothi&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDINCAMQLhivARjHARiABDIHCAQQABiABDIHCAUQABiABDIICAYQABgWGB4yCggHEAAYDxgWGB4yCggIEAAYDxgWGB4yCAgJEAAYFhge0gEJODkzNGoxajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#lrd=0x3a395bafa5f41a73:0x71fd18c7cef04600,3,,,,"> 
          <button className="add-review-btn"> Add Review </button> 
        </a>
        
        </div>
      </div>
    </section>
  );
};

export default Reviews;
