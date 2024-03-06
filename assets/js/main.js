"use strict"

// Current year (footer)
const currentYear = document.getElementById('current-year')
currentYear.textContent = new Date().getFullYear();

/* Gallery Carousel */

const galleryContainer = document.querySelector('.gallery__image')
const galleryControlsContainer = document.querySelector('.gallery-controls')
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery__item')

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items]
    }

    updateGallery() {
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery__item-1')
            el.classList.remove('gallery__item-2')
            el.classList.remove('gallery__item-3')
            el.classList.remove('gallery__item-4')
            el.classList.remove('gallery__item-5')
        })

        this.carouselArray.slice(0,5).forEach((el,i) => {
            el.classList.add(`gallery__item-${i+1}`);
        })
    }

    setCurrentState(direction) {
        if (direction.classNAme == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());

        }   else {
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            document.querySelector(`.gallery-controls-${control}`).innerText = control
        })
    }

    useControls() {
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setCurrentState(control)
            })
        })
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
