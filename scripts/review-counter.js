const REVIEW_COUNT_KEY = "reviewCount";


let reviewCount = Number(localStorage.getItem(REVIEW_COUNT_KEY)) || 0;


reviewCount += 1;


localStorage.setItem(REVIEW_COUNT_KEY, reviewCount);


const display = document.querySelector("#review-total");
if (display) {
  display.textContent = `Total reviews submitted: ${reviewCount}`;
}
