const homeTitle = document.querySelector('.home__title'),
    homeSubtitle = document.querySelector('.home__subtitle'),
    homeLateralmen = document.querySelector('.home__lateralmen'),
    titleRow = document.querySelector('.title__row'),
    homeMenuBurger = document.querySelector('.home__menu-burger'),
    homeMneu = document.querySelector('.home__menu'),
    onItems = document.querySelector('.on__items'),
    twoItems = document.querySelector('.two__items');



// let last_known_scroll_position = 0;
// let ticking = false;

// // function doSomething(scroll_pos) {
// //     homeTitle.classList.add('title__scroll');
// //     homeSubtitle.classList.add('subtitle__scroll');
// //     homeLateralmen.style.top = 0;
// //     console.log('s')
// // }
// // if(window.scrollY > 1){
// //     console.log('s')
// // }else if (window.scrollY == 0){
// //     console.log("h")
// // }

window.addEventListener('scroll', function() {
    let showScrol = pageYOffset;
    

    if (showScrol > 10) {
        homeTitle.classList.add('title__scroll');
        titleRow.classList.add('title__row__scroll');
        homeSubtitle.classList.add('subtitle__scroll');
        homeLateralmen.style.top = 0;
        // homeLateralmen.style = 'display: block;';
    }else if (showScrol == 0){
        homeTitle.classList.remove('title__scroll');
        titleRow.classList.remove('title__row__scroll');
        homeSubtitle.classList.remove('subtitle__scroll');
        homeLateralmen.style.top = -1000 + 'px';
    }
});
homeMenuBurger.addEventListener('click', () =>{
    
    homeMenuBurger.classList.toggle('active');
    homeMneu.classList.toggle('active');
});
onItems.addEventListener('click', () => {
    onItems.classList.toggle('act');
});
twoItems.addEventListener('click', () => {
    twoItems.classList.toggle('act');
});
    // last_known_scroll_position = window.scrollY;

    // if (!ticking) {
    // window.requestAnimationFrame(function() {
    //     doSomething(last_known_scroll_position);
    //     ticking = false;
    // });

    // ticking = true;
    // };
    // if(last_known_scroll_position === 0){
    //     // homeTitle.classList.remove('title__scroll');
    //     // homeSubtitle.classList.remove('subtitle__scroll');
    //     // homeLateralmen.style.top = -1000 + 'px';
    //     console.log( 'h')
    // }
