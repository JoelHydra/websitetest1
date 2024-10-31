document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('low-detail-mode');
    const container = document.querySelector('.background-container');

    if (button) { // Check if the button exists
        button.addEventListener('click', function() {
            const children = container.children; // Get all child elements
            const glowingClasses = ['star-container-1', 'star-container-2', 'star-container-4', 'star-container-3', 'star-container']

            if (container.classList.contains('no-detail-mode')) {
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.remove('no-animations'); // Add new class
                }
                button.textContent = "High Detail Mode";
                container.classList.add('High-detail-mode');
                container.classList.remove('no-detail-mode');
            }

            // Check if the container does NOT have the 'no-animations' class
            if (container.classList.contains('low-detail-mode')) {
                // If it does NOT have the class, add 'no-animations' class to each child
                for (let i = 0; i < children.length; i++) {
                    children[i].classList.add('no-animations'); // Add new class
                }
                container.classList.add('low-detail-mode'); // Add class to container
                button.textContent = "No Detail Mode"; // Update button text
                container.classList.add('no-detail-mode');
                container.classList.remove('low-detail-mode');
                console.log("Classes added to children:", children);
            }

            if (container.classList.contains('high-detail-mode')) {
                // Loop through each child element
                for (let i = 0; i < children.length; i++) {
                    // Check if the child has any class from glowingClasses
                    for (const glowingClass of glowingClasses) {
                        if (children[i].classList.contains(glowingClass)) {
                            children[i].classList.add('no-animations'); // Add 'no-animations' class
                        }
                    }
                }
                button.textContent = "Low Detail Mode";
                container.classList.add('low-detail-mode');
                container.classList.remove('high-detail-mode');
            }
        });
    }
});
