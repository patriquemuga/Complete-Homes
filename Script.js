// Simple mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});