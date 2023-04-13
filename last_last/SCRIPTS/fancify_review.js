// Get the review data
const reviews = window.reviewData;

// Get the reviews container element
const reviewsContainer = document.getElementById('reviews');

// Create a function to generate a review card
function generateReviewCard(review) {
  // Create the card element
  const card = document.createElement('div');
  card.classList.add('review-card');

  // Add the name to the card
  const name = document.createElement('h3');
  name.textContent = review.name;
  card.appendChild(name);

  // Add the date to the card
  const date = document.createElement('p');
  date.classList.add('review-date');
  date.textContent = new Date(review.date).toLocaleDateString();
  card.appendChild(date);

  // Add the rating to the card
  const rating = document.createElement('p');
  rating.classList.add('review-rating');
  const ratingStars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
  rating.textContent = ratingStars;
  card
}