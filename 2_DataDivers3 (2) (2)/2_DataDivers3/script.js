document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');
    const galleries = document.querySelectorAll('.gallery');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const categoryName = category.textContent.trim().toLowerCase();

            // Hide all galleries
            galleries.forEach(gallery => {
                gallery.style.display = 'none';
            });

            // Show galleries with the selected category
            const selectedGalleries = document.querySelectorAll(`.gallery[data-category="${categoryName}"]`);
            selectedGalleries.forEach(gallery => {
                gallery.style.display = 'flex';

                
            });
        });
    });
            });
            function openGallery(galleryName) {
                // You can fetch related data from a server or hardcode it here
                const galleryData = [
                    { image: 'Assets/project-1-of-5-assets-main/person1.jpg', description: 'Description 1', link: 'https://www.youtube.com/' },
                    { image: 'Assets/project-1-of-5-assets-main/person2.jpg', description: 'Description 2', link: 'https://www.youtube.com/' },
                    // Add more images as needed
                ];
            
                const queryString = galleryData.map(item => {
                    return `${encodeURIComponent(item.image)}|${encodeURIComponent(item.description)}|${encodeURIComponent(item.link)}`;
                }).join('&');
            
                // Redirect to the new gallery page with the query string
                window.location.href = `another.html?gallery=${encodeURIComponent(galleryName)}&data=${queryString}`;
            }
            
            function openGall(galleryName) {
                // You can fetch related data from a server or hardcode it here
                const galleryData = [
                    { image: 'Assets/project-1-of-5-assets-main/person1.jpg', description: 'Description 1', link: 'https://www.youtube.com/' },
                    { image: 'Assets/project-1-of-5-assets-main/person2.jpg', description: 'Description 2', link: 'https://www.youtube.com/' },
                    // Add more images as needed
                ];
            
                const queryString = galleryData.map(item => {
                    return `${encodeURIComponent(item.image)}|${encodeURIComponent(item.description)}|${encodeURIComponent(item.link)}`;
                }).join('&');
            
                // Redirect to the new gallery page with the query string
                window.location.href = `history.html?gallery=${encodeURIComponent(galleryName)}&data=${queryString}`;
            }
            
            function opengal(galleryName) {
                // You can fetch related data from a server or hardcode it here
                const galleryData = [
                    { image: 'Assets/project-1-of-5-assets-main/person1.jpg', description: 'Description 1', link: 'https://www.youtube.com/' },
                    { image: 'Assets/project-1-of-5-assets-main/person2.jpg', description: 'Description 2', link: 'https://www.youtube.com/' },
                    // Add more images as needed
                ];
            
                const queryString = galleryData.map(item => {
                    return `${encodeURIComponent(item.image)}|${encodeURIComponent(item.description)}|${encodeURIComponent(item.link)}`;
                }).join('&');
            
                // Redirect to the new gallery page with the query string
                window.location.href = `nature.html?gallery=${encodeURIComponent(galleryName)}&data=${queryString}`;
            }
            