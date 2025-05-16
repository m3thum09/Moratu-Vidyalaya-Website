// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
  });
  
  // Mobile menu functionality
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.querySelector('.menu-icon');
  const closeIcon = document.querySelector('.close-icon');
  const header = document.getElementById('mainHeader');
  
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('d-none');
    closeIcon.classList.toggle('d-none');
    
    // Prevent scrolling when menu is open
    if (mobileMenu.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close menu when clicking on a link
  const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('d-none');
      closeIcon.classList.add('d-none');
      document.body.style.overflow = 'auto';
    });
  });
  
  // Header background change on scroll and logo shrink
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Scroll animations
  function checkScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .slide-from-left, .slide-from-right');
    const windowHeight = window.innerHeight;
    const triggerPoint = 150;
    
    animatedElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < windowHeight - triggerPoint) {
        element.classList.add('active');
      }
    });
  }
  
  // Check animations on page load
  document.addEventListener('DOMContentLoaded', () => {
    // Initial check for animations
    checkScrollAnimations();
    
    // Add animation delays to hero elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
      element.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Mobile menu animation for each item
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  });
  
  // Check animations on scroll
  window.addEventListener('scroll', checkScrollAnimations);
  
  // Newsletter form submission
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      
      if (emailInput.value) {
        // In a real implementation, you would send this to your server
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
      }
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Button hover effects for mobile
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('touchstart', function() {
      this.classList.add('hover');
    });
    
    button.addEventListener('touchend', function() {
      this.classList.remove('hover');
    });
  });
  
  // Fix for iOS devices where vh units can be inconsistent
  function setVhVariable() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  
  // Set the variable initially and on resize
  window.addEventListener('resize', setVhVariable);
  setVhVariable();

  