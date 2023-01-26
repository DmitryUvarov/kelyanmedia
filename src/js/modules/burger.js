const html = document.querySelector('html'),
    checkbox = document.querySelector('.checkbox1'),
    burger = document.querySelector('.burger'),
    round = document.querySelector('.round'),
    headerMain = document.querySelector('.header__main');

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('active');
    html.classList.toggle('active');
    burger.classList.toggle('active');
    round.classList.toggle('active');
    headerMain.classList.toggle('active');
});



document.addEventListener('DOMContentLoaded', () =>{
    const htmlTag = document.documentElement;
    document.documentElement.addEventListener('click', (event) => {
        const eventTarget = event.target


        if (eventTarget.closest('.burger-blog-btn')) {
            htmlTag.classList.toggle('menu-open-blog')
        }


        if (eventTarget.closest('.search-btn')) {

            if (htmlTag.closest('.menu-open-blog')) {
                htmlTag.classList.remove('menu-open-blog')
            }

            htmlTag.classList.toggle('search-active')
        }
        if (eventTarget.closest('.close-search')) {
            htmlTag.classList.remove('search-active')
        }

    })


    // function smoothScrollToTop() {
    //     var currentY = window.pageYOffset;
    //     var step = currentY / 25;
    //     const body = document.querySelector('body')
    //     // if (currentY > 0) {
    //         window.requestAnimationFrame(smoothScrollToTop);
    //         body.scrollBy(0, -step);
    //         console.log('1')
    //     // }
    // }

    // // Привязка функции к кнопке
    // var button = document.getElementById("scrollTop");
    // button.addEventListener("click", smoothScrollToTop);




})

