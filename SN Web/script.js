let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 4000); // Change image every 4 seconds

function nextSlide() {
    slides[currentSlide].classList.remove('active'); // Hide the current slide
    currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide
    slides[currentSlide].classList.add('active'); // Show the next slide
}

function prevSlide() {
    slides[currentSlide].classList.remove('active'); // Hide the current slide
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to the previous slide
    slides[currentSlide].classList.add('active'); // Show the previous slide
}

document.getElementById('next').addEventListener('click', function() {
    clearInterval(slideInterval); // Stop auto-sliding when manually navigating
    nextSlide(); // Manually go to the next slide
});

document.addEventListener('DOMContentLoaded', () => {
    const statusMessage = document.getElementById('status-message');
    
    // Define opening and closing hours
    const openingHour = 8; // 8 AM
    const closingHour = 22; // 10 PM
    
    // Get current date and time
    const now = new Date();
    const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentHour = now.getHours();

    // Check if the shop is open
    if (currentHour >= openingHour && currentHour < closingHour) {
        statusMessage.textContent = 'We are currently open!';
        statusMessage.classList.add('open');
    } else {
        statusMessage.textContent = 'We are currently closed. Please visit us during our opening hours.';
        statusMessage.classList.remove('open');
    }
});
// Select all gallery items
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

// Add click event to each gallery image
galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        lightbox.style.display = 'block'; // Show the lightbox
        lightboxImg.src = this.src; // Set the clicked image as lightbox image
    });
});

// Close the lightbox when clicking the close button
closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
});

// Close the lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});
