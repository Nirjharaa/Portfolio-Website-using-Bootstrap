document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const downloadCvButton = document.getElementById('downloadCvButton');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);

        // Perform form validation
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Add your validation logic here
        if (!name.trim()) {
            alert('Please enter your name.');
            return;
        }

        if (!email.trim() || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!message.trim()) {
            alert('Please enter your message.');
            return;
        }

        // If all validation passes, proceed with form submission
        submitForm(formData);
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to handle form submission
    function submitForm(formData) {
        // Example: Display the form data
        for (const pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }

        // Clear the form fields (optional)
        form.reset();
    }




    

    // Function to handle responsiveness for different sections
    function adjustLayout() {
        // Adjust layout for navbar
        const nav = document.querySelector('nav');
        if (window.innerWidth <= 768) {
            nav.style.width = '100px'; // Adjust width for mobile view
        } else {
            nav.style.width = '200px'; // Adjust width for desktop view
        }

        // Adjust layout for main content
        const main = document.querySelector('main');
        if (window.innerWidth <= 768) {
            main.style.marginLeft = '0'; // Reset margin for mobile view
        } else {
            main.style.marginLeft = '200px'; // Adjust margin for desktop view
        }

        // Adjust layout for header
        const header = document.querySelector('header');
        if (window.innerWidth <= 768) {
            header.style.marginLeft = '0'; // Reset margin for mobile view
        } else {
            header.style.marginLeft = '200px'; // Adjust margin for desktop view
        }

        // Adjust layout for footer
        const footer = document.querySelector('footer');
        if (window.innerWidth <= 768) {
            footer.style.marginLeft = '0'; // Reset margin for mobile view
        } else {
            footer.style.marginLeft = '200px'; // Adjust margin for desktop view
        }

        // Adjust layout for testimonials section
        const cards = document.querySelectorAll('.testimonial-card .col-md-4');
        if (window.innerWidth <= 768) {
            cards.forEach(card => {
                card.style.flexBasis = '100%';
                card.style.maxWidth = '100%';
            });
        } else {
            cards.forEach(card => {
                card.style.flexBasis = 'calc(33.33% - 30px)';
                card.style.maxWidth = 'calc(33.33% - 30px)';
            });
        }
    }

    // Initial adjustment on page load
    adjustLayout();

    // Adjust layout on window resize
    window.addEventListener('resize', adjustLayout);
});
