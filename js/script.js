'use strict';

window.onload = function () {
    // fullpage
    $(function () {
        var page = $('.fullpage').fullpage({
            navigation: true,
            navigationPosition: 'left',
            sectionsColor: ['white', 'white', 'white', 'white', 'white', '#E9E3DB'],
            menu: '.gnb, .tablet', 
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
        slidesPerView: getSlidesPerView(), // 초기 slidesPerView 설정
        direction: getDirection(),
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            resize: function () {
                swiper.changeDirection(getDirection());
                swiper.params.slidesPerView = getSlidesPerView(); // 화면 크기 변경 시 slidesPerView 업데이트
                swiper.update(); // Swiper 업데이트
            },
        },
    });

    function getDirection() {
        return window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    }

    function getSlidesPerView() {
        return window.innerWidth <= 760 ? 2 : 4; // 화면 크기에 따라 slidesPerView 설정
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

    // 태블릿 네비바 클릭
    const tabletNav = document.querySelector('.xi-bars');
    const tabletList = document.querySelector('.tablet');
    const tabletClose = document.querySelector('.tablet-close img');
    const body = document.querySelector('body');

    function navClick() {
        if (window.innerWidth < 1350) {
            tabletList.classList.toggle('active');
            body.style.overflow = tabletList.classList.contains('active') ? 'hidden' : 'auto';
        }
    }

    // 초기화
    tabletNav.addEventListener('click', navClick);

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1350) {
            tabletList.classList.remove('active');
        }
    });

    tabletClose.addEventListener('click', () => {
        tabletList.classList.toggle('active');
    });

    // 760px에서 사과 내용 텍스트, 태블릿 메뉴 미디어쿼리
    const appleH4 = document.querySelector('.apple-txt h4');
    const appleP = document.querySelector('.apple-txt p');

    const tabletCnt = document.querySelector('.tablet-cnt');

    if (window.matchMedia("(max-width: 760px)").matches) {
        // 사과 내용 텍스트
        appleH4.innerHTML = `
            <h4>거창군에서 만나는 고품질의 커피</h4>
            `;
        appleP.innerHTML = `
            <p>산지의 특징이 명확하고, 향미가 뛰어나며 극소량만 생산되는<br /> 최고 등급의 스페셜티 커피 원두를 활용하여 블렌딩했습니다.</p>
            `;

        // 태블릿 메뉴
        tabletCnt.innerHTML = `
        <div class="tablet-list">
            <div class="tablet-close">
                <img src="./img/close.png" alt="">
            </div>
            <ul>
                <li>
                    <a href="">MAIN</a>
                </li>
                <li>
                    <a href="">MENU</a>
                </li>
                <li>
                    <a href="">APPLES</a>
                </li>
                <li>
                    <a href="">INTERIOR</a>
                </li>
                <li>
                    <a href="">ADDRESS</a>
                </li>
                <li>
                    <a href="">INSTAGRAM</a>
                </li>
                <div class="tablet-insta">
                    <img src="./img/instagram.png" alt="">
                </div>
            </ul>
        </div>
        `
    } else {
        // 사과 내용 텍스트
        appleH4.innerHTML = `
            <h4>거창군에서 만나는<br />고품질의 커피</h4>
            `;
        appleP.innerHTML = `
            <p>산지의 특징이 명확하고, 향미가 뛰어나며<br />극소량만 생산되는 최고 등급의 스페셜티 커피<br />원두를 활용하여 블렌딩했습니다.</p>
            `;

        // 태블릿 메뉴
        tabletCnt.innerHTML = `
        <div class="tablet-img">
            <img src="./img/tablet.jpg" alt="">
        </div>
        <div class="tablet-list">
            <div class="tablet-close">
                <img src="./img/close.png" alt="">
            </div>
            <ul>
                <li>
                    <a href="">MAIN</a>
                </li>
                <li>
                    <a href="">MENU</a>
                </li>
                <li>
                    <a href="">APPLES</a>
                </li>
                <li>
                    <a href="">INTERIOR</a>
                </li>
                <li>
                    <a href="">ADDRESS</a>
                </li>
                <li>
                    <a href="">INSTAGRAM</a>
                </li>
                <div class="tablet-insta">
                    <img src="./img/instagram.png" alt="">
                </div>
            </ul>
        </div>
        `;
    };

    // resize
    window.addEventListener('resize', () => {
        if (window.innerWidth < 760) {
            appleH4.innerHTML = `
            <h4>거창군에서 만나는 고품질의 커피</h4>
            `;
            appleP.innerHTML = `
            <p>산지의 특징이 명확하고, 향미가 뛰어나며 극소량만 생산되는<br /> 최고 등급의 스페셜티 커피 원두를 활용하여 블렌딩했습니다.</p>
            `;

            // 태블릿 메뉴
            tabletCnt.innerHTML = `
            <div class="tablet-list">
                <div class="tablet-close">
                    <img src="./img/close.png" alt="">
                </div>
                <ul>
                    <li>
                        <a href="">MAIN</a>
                    </li>
                    <li>
                        <a href="">MENU</a>
                    </li>
                    <li>
                        <a href="">APPLES</a>
                    </li>
                    <li>
                        <a href="">INTERIOR</a>
                    </li>
                    <li>
                        <a href="">ADDRESS</a>
                    </li>
                    <li>
                        <a href="">INSTAGRAM</a>
                    </li>
                    <div class="tablet-insta">
                        <img src="./img/instagram.png" alt="">
                    </div>
                </ul>
            </div>
            `;
        } else {
            appleH4.innerHTML = `
            <h4>거창군에서 만나는<br />고품질의 커피</h4>
            `;
            appleP.innerHTML = `
            <p>산지의 특징이 명확하고, 향미가 뛰어나며<br />극소량만 생산되는 최고 등급의 스페셜티 커피<br />원두를 활용하여 블렌딩했습니다.</p>
            `;

            // 태블릿 메뉴
            tabletCnt.innerHTML = `
            <div class="tablet-img">
                <img src="./img/tablet.jpg" alt="">
            </div>
            <div class="tablet-list">
                <div class="tablet-close">
                    <img src="./img/close.png" alt="">
                </div>
                <ul>
                    <li>
                        <a href="">MAIN</a>
                    </li>
                    <li>
                        <a href="">MENU</a>
                    </li>
                    <li>
                        <a href="">APPLES</a>
                    </li>
                    <li>
                        <a href="">INTERIOR</a>
                    </li>
                    <li>
                        <a href="">ADDRESS</a>
                    </li>
                    <li>
                        <a href="">INSTAGRAM</a>
                    </li>
                    <div class="tablet-insta">
                        <img src="./img/instagram.png" alt="">
                    </div>
                </ul>
            </div>
            `;
        }
    });

    // 내부 600px 미디어쿼리
    const interiorImg = document.querySelector('.interior-img');

    if (window.matchMedia("(max-width: 600px)").matches) {
        interiorImg.innerHTML = `
        <div class="swiper mySwiper2">
            <div class="swiper-wrapper swiper-wrapper2">
                <div class="swiper-slide swiper-slide2">
                    <img src="./img/cafe-19.jpg">
                </div>
                <div class="swiper-slide swiper-slide2">
                    <img src="./img/cafe-08.jpg">
                </div>
                <div class="swiper-slide swiper-slide2">
                    <img src="./img/cafe-21.png">
                </div>
            </div>
            <div class="swiper-scrollbar"></div>
        </div>
            `;
    } else {
        interiorImg.innerHTML = `
            <img src="./img/cafe-19.jpg" alt="" class="interior-img_1">
            <img src="./img/cafe-08.jpg" alt="" class="interior-img_2">
            <img src="./img/cafe-21.png" alt="" class="interior-img_3">
            `;
    }

    // swiper2 초기화 함수
    function initSwiper2() {
        var swiper2 = new Swiper(".mySwiper2", {
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true,
            },
        });
    }

    // resize
    function handleResize() {
        if (window.innerWidth < 600) {
            interiorImg.innerHTML = `
            <div class="swiper mySwiper2">
                <div class="swiper-wrapper swiper-wrapper2">
                    <div class="swiper-slide swiper-slide2">
                        <img src="./img/cafe-19.jpg">
                    </div>
                    <div class="swiper-slide swiper-slide2">
                        <img src="./img/cafe-08.jpg">
                    </div>
                    <div class="swiper-slide swiper-slide2">
                        <img src="./img/cafe-21.png">
                    </div>
                </div>
                <div class="swiper-scrollbar"></div>
            </div>
        `;
            // resize 이벤트 발생 시 swiper2 초기화
            initSwiper2();
        } else {
            interiorImg.innerHTML = `
            <img src="./img/cafe-19.jpg" alt="" class="interior-img_1">
            <img src="./img/cafe-08.jpg" alt="" class="interior-img_2">
            <img src="./img/cafe-21.png" alt="" class="interior-img_3">
        `;
        }
    }

    // 초기화
    initSwiper2();

    // 초기화 후 resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);
}