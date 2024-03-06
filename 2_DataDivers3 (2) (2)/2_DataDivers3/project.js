const imageData = [
    { category: "Category 1", imageUrl: "image1.jpg" },
    { category: "Category 2", imageUrl: "image2.jpg" },
    { category: "Category 1", imageUrl: "image3.jpg" },
    // Add more image data as needed
];

// Function to filter images based on category
function filterImages(category) {
    const filteredImages = imageData.filter(image => image.category === category);
    displayImages(filteredImages);
}

// Function to display images in the main content area
// Function to display images in the main content area
function displayImages(images) {
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.imageUrl;
        imgElement.alt = 'Image';

        // Add click event listener to open the gallery on another.html
        imgElement.addEventListener('click', function () {
            openGallery(image.category);
        });

        mainContent.appendChild(imgElement);
    });
}
