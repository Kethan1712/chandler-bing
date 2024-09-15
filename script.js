document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault(); 
        } else {
            alert('Form submitted successfully!');
        }
    });

    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) { 
            header.style.backgroundColor = '#555'; 
        } else {
            header.style.backgroundColor = '#333'; 
        }
    });
});
