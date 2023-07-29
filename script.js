const testimonials = document.querySelectorAll(".testimonial");
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.classList.add("active");
    } else {
      testimonial.classList.remove("active");
    }
  });
}

function showNextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function showPrevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

document.querySelector(".right-arrow").addEventListener("click", showNextTestimonial);
document.querySelector(".left-arrow").addEventListener("click", showPrevTestimonial);

// Show the first testimonial initially
showTestimonial(currentIndex);
