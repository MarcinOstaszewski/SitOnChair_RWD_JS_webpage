document.addEventListener("DOMContentLoaded", function() {

    var mainMenu = document.querySelector('.main-menu').children; // main menu element
    var subMenu = document.getElementsByClassName('submenu'); //all main menu elements
    // console.log(mainMenu);
    // console.log(subMenu);

    for (var i = 0; i < mainMenu.length; i++) {
        // if (mainMenu[i].children[1] !== undefined) {
            mainMenu[i].addEventListener("mouseover", function() {
                if (this.children[1] !== undefined) {
                    this.children[1].style.display = 'block';
                    // this.children[1].style.background: rgba(0,0,0,0.8);
                }
            });
            mainMenu[i].addEventListener("mouseout", function() {
                if (this.children[1] !== undefined) {
                    this.children[1].style.display = 'none';
                    // this.children[1].style.background: rgba(0,0,0,0.0);
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

    // console.log(slidesList);
    // console.log(slidesList[0]);

    slidesList[active].classList.add('visible');

    // console.log(slidesList[active].classList);

    leftButton.addEventListener("click", function() {
        slidesList[active].classList.remove('visible');
        if (active === slidesList.length - 1) {
            // console.log(active);
            active = 0;
            // console.log('do slajdu 0');
        } else {
            active++;
        }
        slidesList[active].classList.add('visible');
        // console.log("active: " + active);

    });

    rightButton.addEventListener("click", function() {
        slidesList[active].classList.remove('visible');
        if (active === 0) {
            // console.log(active);
            active = slidesList.length - 1;
            // console.log('do ostatniego');
        } else {
            active--;
        }
        slidesList[active].classList.add('visible');

        // console.log("active: " + active);
    });

    /*---------------------------------*/
    /*------   A R T I C L E S   ------*/
    /*---------------------------------*/

    var pictContainers = document.getElementsByClassName('pict-container');
    // console.log(pictContainers[0].children[1]);

    for (var i = 0; i < pictContainers.length; i++) {

        pictContainers[i].addEventListener("mouseover", function() {
            this.children[1].classList.add('invisible');
            console.log(this);
        });
        pictContainers[i].addEventListener("mouseout", function() {
            this.children[1].classList.remove('invisible');
            console.log(this);
        });
        // pictContainers[i].children[1].style.display = 'none';
        // pictContainers[i].children[1].classList.add('invisible');
        // console.log(pictContainers[i].children[1].classList);
    }
    // pictContainers[0].children[1].style.display = 'none';










});
