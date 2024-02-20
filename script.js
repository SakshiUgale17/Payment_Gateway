document.addEventListener('DOMContentLoaded', function() {
    const donateButton = document.getElementById('donate-btn');
    const paymentModal = document.getElementById('payment-modal');
    const confirmationModal = document.getElementById('confirmation-modal');
    const paymentForm = document.getElementById('payment-form');

    donateButton.addEventListener('click', function() {
      
        paymentModal.style.display = 'block';
    });

    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        const paymentType = document.getElementById('payment-type').value;

        // Simulate payment processing
        setTimeout(function() {
            paymentModal.style.display = 'none';
            confirmationModal.style.display = 'block';
        }, 2000); // Delay for demonstration purposes (2 seconds)
    });

    // Close modals when clicking on the close button
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            paymentModal.style.display = 'none';
            confirmationModal.style.display = 'none';
        });
    });
});
