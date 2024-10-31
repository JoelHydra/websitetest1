document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('low-detail-mode');
    const container = document.querySelector('.background-container');

    if (button) { // Check if the button exists
        button.addEventListener('click', function() {
            const children = container.children; // Get all child elements

            // Check if the container does NOT have the 'no-animations' class
            if (!container.classList.contains('low-detail-mode')) {
                // If it does NOT have the class, add 'no-animations' class to each child
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.add('no-animations'); // Add new class
                }
                container.classList.add('low-detail-mode'); // Add class to container
                button.textContent = "Low Detail Mode"; // Update button text
                console.log("Classes added to children:", children);
            } else {
                // If it has the class, remove 'no-animations' class from each child
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.remove('no-animations'); // Remove class
                }
                container.classList.remove('low-detail-mode'); // Remove class from container
                button.textContent = "High Detail Mode"; // Update button text
            }
        });
    } else {
        console.error("Button not found!");
    }
});
