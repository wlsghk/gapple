'use strict';

window.onload = function () {
    // fullpage
    $(function () {
        var page = $('.fullpage').fullpage({
            navigation: true,
            navigationPosition: 'left',
            sectionsColor: ['white', 'white', 'white', 'white', 'white', '#E9E3DB'],
            menu: '.gnb',
            anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
            afterRender: function () {
                adjustFooterSize();
            },
        });

        function adjustFooterSize() {
            var footerHeight = $('footer').outerHeight();
            $('.fullpage').css('margin-bottom', footerHeight + 'px');
        }
    });

    // swiper
    var swiper = new Swiper('.swiper', {
        slidesPerView: 4,
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
                swiper.changeDirection(getDirection());
            },
        },
    });

    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
    }

    // best menu 리스트 클릭
    const menuList = document.querySelectorAll('.menu-list > h3');

    function listClick(list) {
        menuList.forEach((item) => {
            item.classList.remove('click');
        });

        list.classList.add('click');
    }

    menuList.forEach((item) => {
        item.addEventListener('click', () => {
            listClick(item);
        });
    });
}