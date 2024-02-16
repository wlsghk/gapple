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
            onLeave: function (origin, destination, direction) {
                adjustFooterSize();

                // 현재 section이 section1이 아닐 때, 네비게이션 바의 스타일 변경
                if (origin.anchor !== 'section1') {
                    $('.gnb ul').css({
                        'background': '#fff',
                        'box-shadow': '3px 3px 5px #eee'
                    });
                }

                // 도착한 section이 section1이면 네비게이션 바의 스타일 변경
                if (destination.anchor === 'section1') {
                    $('.gnb ul').css({
                        'background': '#ffffff7d',
                        'box-shadow': 'none'
                    });
                }
            },
            afterLoad: function (origin, destination, direction) {
                // 다른 섹션에서 section1로 되돌아올 때
                if (destination.anchor === 'section1' && origin.anchor !== 'section1') {
                    $('.gnb ul').css({
                        'background': '#ffffff7d',
                        'box-shadow': 'none'
                    });
                }
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