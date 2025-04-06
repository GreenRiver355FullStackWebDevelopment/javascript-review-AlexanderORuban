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
  starRating.textContent = review.starRating;
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
}

// Calling the render function
renderAllReviews();
