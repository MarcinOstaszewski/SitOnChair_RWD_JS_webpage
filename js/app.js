document.addEventListener("DOMContentLoaded", function() {

    var mainMenu = document.querySelector('.main-menu').children; // main menu element
    var subMenu = document.getElementsByClassName('submenu'); //all main menu elements


    for (var i = 0; i < mainMenu.length; i++) {
        // add eventListeners to menu items
            mainMenu[i].addEventListener("mouseover", function() {
                if (this.children[1] !== undefined) {
                    this.children[1].style.display = 'block';
                }
            });
            mainMenu[i].addEventListener("mouseout", function() {
                if (this.children[1] !== undefined) {
                    this.children[1].style.display = 'none';
                }
            });
        // }
    }

    /*---------------------------------*/
    /*---------   S L I D E R   -------*/
    /*---------------------------------*/

    // seek for left/right buttons and slides in HTML
    var leftButton = document.getElementById('left-bttn');
    var rightButton = document.getElementById('right-bttn');
    var slidesList = document.getElementsByClassName('slide');
    var active = 0; // slide number that is visible


    slidesList[active].classList.add('visible');

    // add eventListeners to left and right buttons
    leftButton.addEventListener("click", function() {
        slidesList[active].classList.remove('visible');
        if (active === slidesList.length - 1) {
            active = 0;
        } else {
            active++;
        }
        slidesList[active].classList.add('visible');
    });

    rightButton.addEventListener("click", function() {
        slidesList[active].classList.remove('visible');
        if (active === 0) {
            active = slidesList.length - 1;
        } else {
            active--;
        }
        slidesList[active].classList.add('visible');
    });

    /*---------------------------------*/
    /*------   A R T I C L E S   ------*/
    /*---------------------------------*/

    var pictContainers = document.getElementsByClassName('pict-container');

    // add eventListeners to all pictures in Articles
    for (var i = 0; i < pictContainers.length; i++) {

        pictContainers[i].addEventListener("mouseover", function() {
            this.children[1].classList.add('invisible');
            console.log(this);
        });
        pictContainers[i].addEventListener("mouseout", function() {
            this.children[1].classList.remove('invisible');
            console.log(this);
        });
    }










});
