const reviewerName = document.getElementById("name");
const rating = document.getElementById("rating");
const review = document.getElementById("review_para");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const details = [
    {
        personName : "faais",
        rating : "8/10",
        comment : "Good"
    },
    {
        personName : "siaaf",
        rating : "6/10",
        comment : "Improvement needed"
    },
    {
        personName : "aafis",
        rating : "9/10",
        comment : "Soo good"
    },
]

let common = 0;

window.addEventListener("DOMContentLoaded", function(){
  const data = details[common];
  reviewerName.innerHTML = data.personName;
  rating.innerHTML = data.rating;
  review.innerHTML = data.comment;
})

function showContent(person){
    const data = details[person];
    reviewerName.innerHTML = data.personName;
    rating.innerHTML = data.rating;
    review.innerHTML = data.comment;
}

nextBtn.addEventListener('click', function(){
    common++;
    if(common > details.length-1){
        common = 0;
    }
    showContent(common);
})

prevBtn.addEventListener('click', function(){
    common--;
    if(common < 0){
        common = details.length-1;
    }
    showContent(common)
})