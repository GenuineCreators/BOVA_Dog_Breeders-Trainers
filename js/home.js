const backgrounds = [
    'Images2/dogs1.jpg',
    'Images2/dogs2.jpg',
    'Images2/dogs3.jpg',
     // Add more image URLs as needed
 ];
 
 
 let currentIndex = 0;
 
 function nextBackground() {
     currentIndex = (currentIndex + 1) % backgrounds.length;
     updateBackground();
 }
 
 function prevBackground() {
     currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
     updateBackground();
 }
 
 function updateBackground() {
     document.getElementById('bgImage').style.backgroundImage = `url(${backgrounds[currentIndex]})`;
 }
 
 // Set default background image
 updateBackground();
 
 // Automatically change background every 5 seconds
 setInterval(nextBackground, 8000);
 
 
// TESTIMONIAL PAGES

const testimonials = document.querySelectorAll('.testimonial');
let currentTestimonialIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    if (i === index) {
      testimonial.style.display = 'block';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

function showNextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

showTestimonial(currentTestimonialIndex);

document.getElementById('prevBtn').addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
});

document.getElementById('nextBtn').addEventListener('click', () => {
  showNextTestimonial();
});

// Automatically switch to the next testimonial every 8 seconds
setInterval(showNextTestimonial, 8000);


