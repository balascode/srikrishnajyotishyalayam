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
    {
      id: 9,
      author: 'SURYAM GOKULAPATI',
      avatar: profile,
      comment: 'Hare Krishna 🙏 This was my recent and first  visit  to the Padma mataji for my carrier ,health .  But here I don’t know  mataji but my friend suggested me the other astrology by searching in the Google for the location (friend suggestion astrology )  I seen this sri Krishna  jyothishalayam , then I  go through the reviews and took the consultation Mataji was best astrology I seen  what over was ruining in my life from the last 2015 to till now exactly ,mataji was said that , only by filling the form of ur name and date of birth  and this was my second life to live here on the earth that much worst I faced with the surgeries and all . Who ever want u know there past ,present and future go to mataji and take the bleesings of her , wat the remedies are suggested need to be follow and compare to all the astrologers they were say only for the sake of money but not yet it was correct but mataji was the Gud astrology with the 💯 accuracy ,if u people meet her by taking the consultation from that moment only u will feel like the family member and become a part of it . And one more thing here all the reviews are the genuine and who have taken the blessings and consulted persons only  . So take the step in to  it , consult mataji wat ever problems u had definitely it Will be rectified . Iam blessed to know her . Thank u so much mataji ..',
      rating: 5,
    },
    {
      id: 10,
      author: 'Udayarao Sarbada',
      avatar: profile,
      comment: 'Madam prediction is accurate. She helps me a lot by giving guidance and teach me to lead a good way of life which gives permanent benefit not a temporary. I met her for the purpose of my Son\'s career settlement. Whatever she said everything is done in my Son\'s life...like My Son bought a new own house and car..... whatever problem related to astrology I  recommend and prefer you.  This is my genuine opinion.',
      rating: 5,
    },
    {
      id: 11,
      author: 'mva chandrasekhar',
      avatar: profile,
      comment: 'Our family can\'t forget her help. We lifelong loyal to her. At the time of my daughter marriage all other Astrologers were told it is not possible to do her marriage. After we met Padmalatha garu she predicted well and guided us & told to do Sri Subramanyaswami puja. As per her guidance we did the swami puja, & all hurdles were cleared & we made my daughter marriage  with my nephew & now they both were very happy. For any problem we consult her & she gives us correct remedy  She is not money minded. She had abundant knowledge in astrology Not only our family, my Brother in law\'s family also very much loyal to Padmalathagaru As per her advice my wife is  chanting  Harekrishna maha mantra japam every day. With the blessings of God & Padmalathagari  help we are all very happy. 🙏🙏🙏  Harekrishna Harekrishna krishna krishna hare hare Harerama Harerama Rama Rama hare hare 🙏🙏🙏 Chandrasekhar',
      rating: 5,
    },
    {
      id: 12,
      author: 'Anuradha P',
      avatar: profile,
      comment: 'Padmalatha garu is very good astrologer and we followed her suggestions for modifications in house and are satisfied with the corrections. We took many suggestions about our children studies and also during marriage. We followed the remedies suggested by her and are happy with the results.',
      rating: 5,
    },
    {
      id: 13,
      author: 'Tanuja Sirlapu',
      avatar: profile,
      comment: 'Padmalatha garu\'s prediction is very accurate and correct. She also gives us remedies with solutions for our problems. We always prefer her for any consultation regarding marriages, kundli and dosha remedies. I highly recommend her for astrology prediction',
      rating: 5,
    },
    {
      id: 14,
      author: 'Kapparada Devi',
      avatar: profile,
      comment: 'Hare krishna One of the best astrologer . Padmalatha garu I know  last 12 years has predicted  💯 % correct prediction about my life. She has guided me remedies to overcome the health  & financial issues  always take her inputs before taking any major decision in my life thankyou 🙏🙏🙏🙏',
      rating: 5,
    },
    {
      id: 15,
      author: 'Babu Rao Gudipudi',
      avatar: profile,
      comment: 'Excellent astrologer Padmalatha amma garu. She has predicted my future very well and also suggested me very good to  remedies to overcome by problems I personally visited many times and she will respond very well to our problem. Devotional preachings by amma are always unforgettable. Karma siddatanatam explained by her will make my towards devotional side',
      rating: 5,
    },
    {
      id: 16,
      author: 'tps kartika',
      avatar: profile,
      comment: 'The best thing happened to me..I feel very blessed to meet madam I have faced many problems but after meeting madam..I am living a peacefull and happy life now..she is very generous and genuine. I got married 2007..I have no kids for 3 years I was feeling terrible I met many guru\'s all of them said solutions of 30,000 and 40,000 I am not that financial stable..in 2010 I met madam by some common friends by meeting..madam she changed my life..she have not given any importance for money..she said in 2013 I will be having kids likewise I have blessed with baby girl..Kartika.. I assure you to meet madam..if you are facing with any sort of problems..Hare Krishna!',
      rating: 5,
    },
    {
      id: 17,
      author: 'vijaya G',
      avatar: profile,
      comment: 'Mataji is really awesome person......mostly we all when construct a house , we build with 100% vastu, but later on with expanding family needs our organizing things changes which effect our peace of mind and even health ......in my case too....mataji gave corrections for those and certain time period .......now I  am  at peace with sound health. After that I  started consulting her for all our upcoming construction projects vastu.......generally if we go for muhurtam she considers our star astrology and the auspicious day\'s strength which absolutely suits .....with strong muhurtam works move faster with less hurdles. She is a great devotee with her blessed hands, can do miraculous things. In my case she gave peace of mind( no less than wealth),   health ( by correcting lil changes in existing residence) and now progress in my life by taking up new projects.',
      rating: 5,
    },
    {
      id: 18,
      author: 'Sandeep Sai Kosireddy',
      avatar: profile,
      comment: 'Padmalatha garu is spot on prediction. I have been consulting her for the past 12 years .  Her remedy suggestions helped me to overcome lot of difficult situations ,  achieved my desired results and  able to make lot vital decisions accordingly. She is consistent , accurate and gives a firm advise. Thank you for all the support. Hare Krishna',
      rating: 5,
    },
    {
      id: 19,
      author: 'tejaswinchowdary Jagarlamoodi',
      avatar: profile,
      comment: 'Hare Krishna, Padmalatha garu is absolutely a brilliant Astrologer as per my opinion and is a down to earth Person. Her predictions for my family have come true 100% till now. She\'s an amazing counselor for those in trouble and guides them positively in a slow and steady manner. My self I have suggested to my friends to get the appointment for austrology.',
      rating: 5,
    },
    {
      id: 20,
      author: 'Praveen Rao',
      avatar: profile,
      comment: 'One the best astrologer i ever came across in my life. She has predicted a 100 percent correct prediction about my life. She has guided me remedies to overcome the issues. I recommend everyone to please consult her if you need anything related to Astrology,  Vaastu and other consultations. I always take her inputs before taking any major decision in my life.',
      rating: 5,
    },
  ]);

  const [visibleCount, setVisibleCount] = useState(5);

  const showMoreReviews = () => {
    setVisibleCount((prevCount) => {
      if (prevCount + 5 < reviews.length) {
        return prevCount + 5;
      } else {
        return reviews.length;
      }
    });
  };

  const showLessReviews = () => {
    setVisibleCount(5);
  };


  return (
    <section className="reviews">
    <div className="container">
      <h2 className="section-title text-center">Client Reviews</h2>
      <div className="review-list">
        {reviews.slice(0, visibleCount).map((review) => (
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
        {visibleCount < reviews.length && (
          <a className="more-reviews" onClick={showMoreReviews}> View More</a>
        )}
        {visibleCount == reviews.length && (
          <a className="less-reviews" onClick={showLessReviews}>View Less</a>
        )}
      </div>
      <div className='text-end'>
        <a href="https://www.google.com/search?q=sri+krishna+jyothishalayam&oq=sri+krishna+jyothi&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDINCAMQLhivARjHARiABDIHCAQQABiABDIHCAUQABiABDIICAYQABgWGB4yCggHEAAYDxgWGB4yCggIEAAYDxgWGB4yCAgJEAAYFhge0gEJODkzNGoxajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#lrd=0x3a395bafa5f41a73:0x71fd18c7cef04600,3,,,,">
          <button className="add-review-btn">Add Review</button>
        </a>
      </div>
    </div>
  </section>
);
};

export default Reviews;
