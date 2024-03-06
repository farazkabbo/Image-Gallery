const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const { filterImages, displayImages } = require('./gallery');

describe('Gallery Script Tests', function () {
    // Test the filterImages function
    it('should filter images based on category', function () {
        const images = [
            { category: "Category 1", imageUrl: "image1.jpg" },
            { category: "Category 2", imageUrl: "image2.jpg" },
            { category: "Category 1", imageUrl: "image3.jpg" },
        ];

        const filteredImages = filterImages('Category 1', images);

        expect(filteredImages).to.have.lengthOf(2);
        expect(filteredImages[0].imageUrl).to.equal('image1.jpg');
        expect(filteredImages[1].imageUrl).to.equal('image3.jpg');
    });

    // Test the displayImages function
    it('should display images in the main content area', function () {
        const images = [
            { imageUrl: 'image1.jpg' },
            { imageUrl: 'image2.jpg' },
            { imageUrl: 'image3.jpg' },
        ];

        const dom = new JSDOM('<div class="main-content"></div>');
        global.document = dom.window.document;

        displayImages(images);

        const displayedImages = dom.window.document.querySelectorAll('.main-content img');
        expect(displayedImages).to.have.lengthOf(3);
        expect(displayedImages[0].src).to.include('image1.jpg');
        expect(displayedImages[1].src).to.include('image2.jpg');
        expect(displayedImages[2].src).to.include('image3.jpg');
    });
});
