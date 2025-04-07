//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////
import { calculateStarAverage } from "./logic.js";

// Selecting the form from the DOM
const form = document.querySelector("form");

const calculateAverageRating = (reviews) => {
  // Calculate average of ratings from reviews
  const averageRating = calculateStarAverage(reviews);

  // Select the .starRating element
  const starRating = document.querySelector(".starRating");

  // Add the rating to the element
  starRating.textContent = `Star Rating: ${averageRating}`;
}

const renderReview = (review) => {
  // Creating an individual review container
  const reviewContainer = document.createElement("div");
  reviewContainer.className = "review_container";

  // Creating image element from the image and adding it to the container
  const image = document.createElement("img");
  image.src = review.image;
  reviewContainer.appendChild(image);

  // Creating the internal div for storing information
  const infoDiv = document.createElement("div");

  // Creating and adding the username to the infoDiv container
  const username = document.createElement("p");
  username.textContent = review.username;
  infoDiv.appendChild(username);

  // Creating and adding the star rating to the infoDiv container
  const starRating = document.createElement("p");
  starRating.textContent = review.star;
  infoDiv.appendChild(starRating);

  // Creating and adding the review to the infoDiv container
  const textReview = document.createElement("p");
  textReview.textContent = review.review;
  infoDiv.appendChild(textReview);

  // Appending the infoDiv container inside the review container
  reviewContainer.appendChild(infoDiv);

  // Adding the review container to the reviews container
  document.querySelector('.reviews').appendChild(reviewContainer);
}

// Rendering all reviews using the renderReview function
const renderAllReviews = () => {
  reviews.forEach(renderReview);
  // Display the average star rating before adding additional reviews
  calculateAverageRating(reviews)
}

function handleForm(event) {
  // Preventing default behavior
  event.preventDefault();

  // Saving all fields in variables
  const username = document.querySelector("#username").value;
  const image = document.querySelector("#image").value;
  const star = document.querySelector("#star").value;
  const review = document.querySelector("#review").value;

  // Creating new review object
  const reviewToAdd = {
    username,
    image,
    star,
    review
  };

  // Adding the review object to the array of reviews
  reviews.push(reviewToAdd);

  // Rendering the review to the page
  renderReview(reviewToAdd);

  // Recalculate the average star rating after adding the new review
  calculateAverageRating(reviews)
;
  // Resetting all form fields after submission
  form.reset();
}

// Adding an event listener for form submission
form.addEventListener("submit", handleForm);

// Calling the render function
renderAllReviews();