function showImage(imagePath) {
    const fullImageContainer = document.getElementById('fullImageContainer');
    const fullImage = document.getElementById('fullImage');

    fullImage.src= imagePath;
    fullImageContainer.style.display = 'flex';
}

function closeImage() {
    const fullImageContainer = document.getElementById('fullImageContainer');
    fullImageContainer.style.display = 'none';
}
