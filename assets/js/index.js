// LANDING PAGE BUTTON
const homepageBtn = document.getElementById('homepage-btn');

homepageBtn.addEventListener('mouseenter', function () {
    const homepageBtnArrow = document.getElementById('homepage-btn-arrow');

    homepageBtnArrow.style.transform = 'rotate(90deg)';
});

homepageBtn.addEventListener('mouseleave', function () {
    const homepageBtnArrow = document.getElementById('homepage-btn-arrow');

    homepageBtnArrow.style.transform = 'rotate(0deg)';
});

// BURGER NAVBAR
const burgerBtn = document.getElementById('burger-btn');
const navList = document.getElementById('nav-list');

if (burgerBtn != null) {
    burgerBtn.addEventListener('click', () => {
        animateBurger();
        menuDisplay();
    });

    window.addEventListener('click', function (event) {
        if (!burgerBtn.contains(event.target)) {
            burgerBtn.classList.remove('change');
            navList.classList.remove('nav-list-show');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            burgerBtn.classList.remove('change');
            navList.classList.remove('nav-list-show');
        }
    });
}

function animateBurger() {
    burgerBtn.classList.toggle('change');
}

function menuDisplay() {
    if (navList.classList.contains('nav-list-show')) {
        navList.classList.remove('nav-list-show');
    } else {
        navList.classList.add('nav-list-show');
    }
}

// MENU SELECTED COLOR
const navListItems = navList.getElementsByTagName('a');

for (let i = 0; i < navListItems.length; i++) {
    navListItems[i].addEventListener('click', function () {
        let selected = document.getElementsByClassName('selected');

        if (selected.length > 0) {
            selected[0].className = selected[0].className.replace(' selected', '');
        }

        this.className += ' selected';
    });
}

homepageBtn.addEventListener('click', function () {
    let selected = document.getElementsByClassName('selected');

    if (selected.length > 0) {
        selected[0].className = selected[0].className.replace(' selected', '');
    }

    navListItems[1].className += ' selected';
});

// PROJECTS OVERLAY
// we create a function to be called in projects-data.js when changing HTML content at 427
function addProjectsEvents() {
    const body = document.getElementsByClassName('body');
    const overlay = document.getElementsByClassName('overlay');

    for (let i = 0; i < body.length; i++) {
        body[i].addEventListener('mouseover', function () {
            overlay[i].style.display = 'flex';
        });

        body[i].addEventListener('mouseout', function () {
            overlay[i].style.display = 'none';
        });
    }
}

addProjectsEvents();

// PROJECTS TECHNOLOGY SORTING
function getElementWidth(element) {
    const style = window.getComputedStyle(element);

    return element.offsetWidth + parseInt(style.margin);
}

function getBestFit(elements, availableSpace) {
    let minAvailableSpace = availableSpace;
    let bestFitIndex = -1;

    elements.forEach((element, i) => {
        if (element.used) {
            return;
        }

        const elementAvailableSpace = availableSpace - element.width;

        if (elementAvailableSpace >= 0 && elementAvailableSpace < minAvailableSpace) {
            minAvailableSpace = elementAvailableSpace;
            bestFitIndex = i;
        }
    });

    return bestFitIndex;
}

function getFirstNotUsed(elements) {
    for (let element of elements) {
        if (!element.used) {
            return element;
        }
    }
}

const technologyList = document.getElementsByClassName('technology-list');

for (let i = 0; i < technologyList.length; i++) {
    const totalSpace = technologyList[i].clientWidth;

    const items = Array.from(technologyList[i].children).map((element) => {
        return {
            element,
            used: false,
            width: getElementWidth(element),
        };
    });

    const totalItems = items.length;
    const firstItem = items[0];
    const sortedElements = [firstItem.element];

    firstItem.used = true;

    let availableSpace = totalSpace - firstItem.width;

    for (let i = 1; i < totalItems; ++i) {
        const bestFitIndex = getBestFit(items, availableSpace);

        let item;

        if (bestFitIndex === -1) {
            item = getFirstNotUsed(items);
            availableSpace = totalSpace - item.width;
        } else {
            item = items[bestFitIndex];
            availableSpace -= item.width;
        }

        sortedElements.push(item.element);
        item.used = true;
    }

    sortedElements.forEach((element) => {
        technologyList[i].appendChild(element);
    });
}

// GENERATE PROJECT DETAILS MODAL
function addModalEvents() {
    const openModalBtn = document.getElementsByClassName('more-btn');
    const modal = document.getElementById('project-wrapper');
    const HTMLBody = document.getElementsByTagName('body');

    for (let i = 0; i < openModalBtn.length; i++) {
        openModalBtn[i].addEventListener('click', function () {
            generateModal(this.dataset.project);

            modal.style.display = 'flex';
            HTMLBody[0].classList.add('hide-scroll');

            // PROJECT DETAILS CAROUSEL
            const leftArrow = document.getElementById('arrow-left');
            const rightArrow = document.getElementById('arrow-right');
            const dots = document.getElementsByClassName('dot');

            let slideIndex = 1;

            leftArrow.addEventListener('click', () => plusSlide(-1));
            rightArrow.addEventListener('click', () => plusSlide(+1));

            for (let i = 0; i < dots.length; i++) {
                dots[i].addEventListener('click', () => currentSlide(i + 1));
            }

            function plusSlide(n) {
                showSlide((slideIndex += n));
            }

            function currentSlide(n) {
                showSlide((slideIndex = n));
            }

            function showSlide(n) {
                const slides = document.getElementsByClassName('slide');

                if (n > slides.length) {
                    slideIndex = 1;
                }

                if (n < 1) {
                    slideIndex = slides.length;
                }

                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = 'none';
                }

                for (let i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(' active', '');
                }

                slides[slideIndex - 1].style.display = 'block';
                dots[slideIndex - 1].className += ' active';
            }

            // CLOSE PROJECT DETAILS MODAL
            const closeModalBtn = document.getElementById('close');
            const projectModalWrapper = document.getElementById('project-wrapper');
            const projectModal = document.getElementById('project-details');

            if (closeModalBtn) {
                closeModalBtn.addEventListener('click', function () {
                    modal.style.display = 'none';
                    modal.removeChild(modal.lastChild);
                    HTMLBody[0].classList.remove('hide-scroll');
                });

                projectModalWrapper.addEventListener('click', function (event) {
                    const isClickOnCloseBtn = event.target.closest('#close');

                    if (!projectModal.contains(event.target) || isClickOnCloseBtn) {
                        modal.style.display = 'none';
                        modal.removeChild(modal.lastChild);
                        HTMLBody[0].classList.remove('hide-scroll');
                    }
                });

                // Prevent clicks inside the modal from closing it
                projectModal.addEventListener('click', function (event) {
                    event.stopPropagation();
                });
            }
        });
    }
}

addModalEvents();
