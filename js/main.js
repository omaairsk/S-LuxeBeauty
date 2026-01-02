// Main JavaScript functionality

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            mainNav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// CAMERA / VIRTUAL TRY-ON FUNCTIONALITY
// ============================================

let cameraStream = null;
const cameraVideo = document.getElementById('cameraVideo');
const cameraCanvas = document.getElementById('cameraCanvas');
const cameraOverlay = document.getElementById('cameraOverlay');
const startCameraBtn = document.getElementById('startCameraBtn');
const captureBtn = document.getElementById('captureBtn');
const stopCameraBtn = document.getElementById('stopCameraBtn');
const skinToneResult = document.getElementById('skinToneResult');
const colorPreview = document.getElementById('colorPreview');
const skinToneText = document.getElementById('skinToneText');
const recommendedProducts = document.getElementById('recommendedProducts');

// Start camera
startCameraBtn.addEventListener('click', async () => {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                facingMode: 'user',
                width: { ideal: 1280 },
                height: { ideal: 720 }
            } 
        });
        
        cameraVideo.srcObject = cameraStream;
        cameraOverlay.style.display = 'none';
        cameraVideo.style.display = 'block';
        
        startCameraBtn.style.display = 'none';
        captureBtn.style.display = 'inline-block';
        stopCameraBtn.style.display = 'inline-block';
        
        showNotification('Camera started successfully!', 'success');
    } catch (error) {
        console.error('Camera error:', error);
        showNotification('Unable to access camera. Please check permissions.', 'error');
    }
});

// Capture image and analyze skin tone
captureBtn.addEventListener('click', () => {
    const canvas = cameraCanvas;
    const context = canvas.getContext('2d');
    
    canvas.width = cameraVideo.videoWidth;
    canvas.height = cameraVideo.videoHeight;
    
    context.drawImage(cameraVideo, 0, 0, canvas.width, canvas.height);
    
    // Get image data from center area (face detection zone)
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const sampleSize = 50;
    
    const imageData = context.getImageData(
        centerX - sampleSize / 2,
        centerY - sampleSize / 2,
        sampleSize,
        sampleSize
    );
    
    // Calculate average color
    let r = 0, g = 0, b = 0;
    const pixels = imageData.data.length / 4;
    
    for (let i = 0; i < imageData.data.length; i += 4) {
        r += imageData.data[i];
        g += imageData.data[i + 1];
        b += imageData.data[i + 2];
    }
    
    r = Math.floor(r / pixels);
    g = Math.floor(g / pixels);
    b = Math.floor(b / pixels);
    
    // Determine skin tone category
    const skinTone = determineSkinTone(r, g, b);
    
    // Display results
    colorPreview.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    skinToneText.innerHTML = `
        <strong>RGB: ${r}, ${g}, ${b}</strong><br>
        <strong>Skin Type:</strong> ${skinTone.type}<br>
        <strong>Recommended for:</strong> ${skinTone.recommended}
    `;
    
    skinToneResult.style.display = 'block';
    
    // Show recommended products
    displayRecommendedProducts(skinTone.skinType);
    
    showNotification('Skin tone analyzed! Check recommendations below.', 'success');
});

// Stop camera
stopCameraBtn.addEventListener('click', () => {
    if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
        cameraStream = null;
    }
    
    cameraVideo.style.display = 'none';
    cameraOverlay.style.display = 'flex';
    
    startCameraBtn.style.display = 'inline-block';
    captureBtn.style.display = 'none';
    stopCameraBtn.style.display = 'none';
    
    showNotification('Camera stopped', 'info');
});

// Determine skin tone from RGB values
function determineSkinTone(r, g, b) {
    const brightness = (r + g + b) / 3;
    const redness = r - ((g + b) / 2);
    
    let type, skinType, recommended;
    
    // Basic skin tone detection based on color values
    if (brightness > 200) {
        type = 'Very Fair';
        skinType = 'sensitive';
        recommended = 'Gentle, fragrance-free products with SPF';
    } else if (brightness > 170) {
        type = 'Fair';
        skinType = 'dry';
        recommended = 'Hydrating products with antioxidants';
    } else if (brightness > 140) {
        type = 'Light to Medium';
        skinType = 'combination';
        recommended = 'Balanced products for combination skin';
    } else if (brightness > 110) {
        type = 'Medium to Tan';
        skinType = 'normal';
        recommended = 'Vitamin C serums and gentle exfoliants';
    } else if (brightness > 80) {
        type = 'Tan to Deep';
        skinType = 'normal';
        recommended = 'Brightening and even-tone products';
    } else {
        type = 'Deep';
        skinType = 'oily';
        recommended = 'Oil-control and brightening products';
    }
    
    return { type, skinType, recommended };
}

// Display recommended products based on skin type
function displayRecommendedProducts(skinType) {
    const products = getProductsBySkinType(skinType, 6);
    
    if (products.length === 0) {
        recommendedProducts.innerHTML = '<p class="placeholder-text">No specific recommendations found</p>';
        return;
    }
    
    recommendedProducts.innerHTML = products.map(product => `
        <div class="recommended-product">
            <div class="rec-product-image" style="background-image: url('${product.image}')"></div>
            <div class="rec-product-info">
                <h4>${product.name}</h4>
                <p class="rec-product-price">$${product.price.toFixed(2)}</p>
                <a href="${product.buyLink}" target="_blank" rel="noopener" class="btn btn-small">View Product</a>
            </div>
        </div>
    `).join('');
}

// ============================================
// CONSULTATION FORM
// ============================================

const consultationForm = document.getElementById('consultationForm');

consultationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('consultName').value,
        email: document.getElementById('consultEmail').value,
        phone: document.getElementById('consultPhone').value,
        skinType: document.getElementById('consultSkinType').value,
        concerns: document.getElementById('consultConcerns').value,
        preferredDate: document.getElementById('consultPreferredDate').value
    };
    
    // In a real application, this would send data to a backend
    // For this version, we'll just show a success message
    console.log('Consultation request:', formData);
    
    showNotification('Thank you! Your consultation request has been received. We will contact you within 24 hours.', 'success');
    
    consultationForm.reset();
});

// ============================================
// REVIEWS FUNCTIONALITY WITH TABLE API
// ============================================

const reviewForm = document.getElementById('reviewForm');
const reviewsList = document.getElementById('reviewsList');
const starRating = document.getElementById('starRating');
const ratingValue = document.getElementById('ratingValue');

// Star rating interaction
const stars = starRating.querySelectorAll('i');
stars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-rating');
        ratingValue.value = rating;
        
        stars.forEach((s, index) => {
            if (index < rating) {
                s.classList.remove('far');
                s.classList.add('fas');
            } else {
                s.classList.remove('fas');
                s.classList.add('far');
            }
        });
    });
    
    star.addEventListener('mouseenter', () => {
        const rating = star.getAttribute('data-rating');
        stars.forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#ffc107';
            }
        });
    });
    
    star.addEventListener('mouseleave', () => {
        stars.forEach(s => {
            s.style.color = '';
        });
    });
});

// Submit review
reviewForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const reviewData = {
        name: document.getElementById('reviewName').value,
        rating: parseInt(ratingValue.value),
        comment: document.getElementById('reviewComment').value,
        date: new Date().toISOString()
    };
    
    if (!reviewData.rating) {
        showNotification('Please select a rating', 'error');
        return;
    }
    
    try {
        const response = await fetch('tables/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        });
        
        if (response.ok) {
            showNotification('Thank you for your review!', 'success');
            reviewForm.reset();
            ratingValue.value = '';
            stars.forEach(s => {
                s.classList.remove('fas');
                s.classList.add('far');
            });
            loadReviews();
        } else {
            showNotification('Failed to submit review. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Review submission error:', error);
        showNotification('Failed to submit review. Please try again.', 'error');
    }
});

// Load reviews from Table API
async function loadReviews() {
    try {
        const response = await fetch('tables/reviews?limit=10&sort=-created_at');
        const data = await response.json();
        
        if (data.data && data.data.length > 0) {
            displayReviews(data.data);
        } else {
            reviewsList.innerHTML = '<p class="placeholder-text">No reviews yet. Be the first to share your experience!</p>';
        }
    } catch (error) {
        console.error('Error loading reviews:', error);
        reviewsList.innerHTML = '<p class="placeholder-text">Be the first to leave a review!</p>';
    }
}

// Display reviews
function displayReviews(reviews) {
    reviewsList.innerHTML = reviews.map(review => {
        const date = new Date(review.date || review.created_at);
        const formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        return `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-author">
                        <div class="author-avatar">${review.name.charAt(0).toUpperCase()}</div>
                        <div>
                            <h4>${review.name}</h4>
                            <p class="review-date">${formattedDate}</p>
                        </div>
                    </div>
                    <div class="review-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(review.rating)}
                        ${'<i class="far fa-star"></i>'.repeat(5 - review.rating)}
                    </div>
                </div>
                <p class="review-text">${review.comment}</p>
            </div>
        `;
    }).join('');
}

// Load reviews on page load
loadReviews();

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 
                 type === 'error' ? 'fa-exclamation-circle' : 
                 'fa-info-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('S-Luxe Beauty initialized');
    
    // Set minimum date for consultation booking to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('consultPreferredDate').setAttribute('min', today);
});
