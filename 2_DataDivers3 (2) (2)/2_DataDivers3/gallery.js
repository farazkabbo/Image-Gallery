document.addEventListener('DOMContentLoaded', function () {
    const galleryContainer = document.getElementById('gallery');

    
    const params = new URLSearchParams(window.location.search);
    const galleryName = params.get('gallery');
    const data = params.get('data');
    
    if (galleryName && data) {
        const galleryData = data.split('&').map(item => item.split('|'));
        
        galleryData.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
    
            const img = document.createElement('img');
            img.src = decodeURIComponent(item[0]);
            img.alt = decodeURIComponent(item[1]);
    
            const description = document.createElement('p');
            description.classList.add('image-description');
            description.textContent = decodeURIComponent(item[1]);
    
            const link = document.createElement('a');
            link.href = decodeURIComponent(item[2]);
            link.classList.add('youtube-link');
            link.textContent = 'YouTube Link';
    
            galleryItem.appendChild(img);
            galleryItem.appendChild(description);
            galleryItem.appendChild(link);
    
            galleryContainer.appendChild(galleryItem);
        });
    } else {
        // Handle invalid or missing parameters
        console.error('Invalid parameters');
    }
});
