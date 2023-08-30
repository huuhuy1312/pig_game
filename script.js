'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function(e)
{
    e.preventDefault();
    modal.classList.remove('hidden');
    overplay.classList.remove('hidden');
}

const closeModal = function()
{
    modal.classList.add('hidden');
    overplay.classList.add('hidden');
}

btnsOpenModal.forEach(btn =>{
    btn.addEventListener('click',openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',function(e)
{
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
    {
        closeModal();
    }
})


// Selecting, creating, and deleting Elements
    // Selecting
        //Selecting entire document
            console.log(document.documentElement); // Log entire HTML document
            console.log(document.head);
            console.log(document.body);

            const header =  document.querySelector('.header');
            const allSections = document.querySelectorAll('.section');
            // querySelectorAll will return a node list
            document.getElementById('section--1');
            const allButtons = document.getElementsByTagName('button');
            /* getElementsByTagName will return an HTML collection which is different from a node list
            because HTML collection is a so-called life collection
            Khi HTML thay đổi thì HTML collection sẽ được cập nhật lại
            Còn node list thì ko
            Example: Khi xóa 1 thẻ button TRÊN TRANG WEB (KHÔNG TÍNH XÓA TRÊN FILE CODE HTML)
            thì allButtons từ 9 phần tử thành 8
            Ngược lại allSections thì ko, nó vẫn giữ nguyên 4 phần từ mặc dù đã xóa đi 1
            */
            console.log(allButtons)
            
            console.log(document.getElementsByClassName('btn'));
    // Creating and inserting elements
        //.insertAdjacentHTML
        // const message = document.createElement('div');
        // message.classList.add('cookie-message');
        // // message.textContent = "We use cookied for improved functionality and analytics.";
        // message.innerHTML = 'We use cookied for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it!</button>';
        // header.prepend(message);
        // // prepend: thêm message vào HTML, và là first child của header
        // header.append(message);
        // append: thêm message vào HTML, và là last child của header
        // Vì 1 DOM elemet is unique, 
        //nên khi dùng prepend và append cho 1 message thì nó sẽ ko thêm 2 lần vào HTML mà sẽ chuyển từ prepend sang append hoặc ngượi lại

        // Cách để tạo 2 DOM element giống nhau

        // header.prepend(message.cloneNode(true));
        // cloneNode method creates a copy of a node, and returns this node
        // True: có thể sao chép
        // False: default, ko thể


        // header.before(message); // trước thẻ header
        // header.after(message); // sau thẻ header


    // Delete elements
        // document.querySelector('.btn--close-cookie').addEventListener('click', function()
        // {
        //     message.remove();
        //     // message.parentElement.removeChild(message);
        // })
// Styles, Attributes and Classes
    // Styles
    //     message.style.backgroundColor = '#37383d'
    //     message.style.width = '120%'
    //     // Việc sử dụng style như thế này chỉ hoạt động cho các kiểu inline styles
    //     // message.style.backgroundColor, và message.style.width được thêm vào inline styles
    //     console.log(message.style.height);
    //     // Vì message.style.height ko thuộc inline styles nên nó ko in gì
    //     console.log(message.style.backgroundColor);
    //     // Vì message.style.backgroundColor thuộc inline styles nên nó sẽ in ra màu backgroundColor

    //     // Cách để lấy được 1 style bất kỳ
    //     console.log(getComputedStyle(message).height);
    //     // Cách này sẽ ko lấy giá trị trực tiếp từ file css or inline styles 
    //     // Mà sẽ dựa vào trang web để tính các giá trị muốn lấy
    //     message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 +'px';
    //     // Thay đổi biến toàn cục trong file css
    //     document.documentElement.style.setProperty('--color-primary','orangered');
    //     //Các biến này được khai báo trong root document nên về cơ bản nó tương đương với document element
    // // Attributes
    //     //Các attributes : src,class,id,alt,href,...
    //     const logo = document.querySelector('.nav__logo');
    //     // Standard attributes
    //     console.log(logo.alt); //Alt văn bản sẽ được hiển thị tahy thế khi ko load được hình ảnh
    //     console.log(logo.src)
    //     // logo.src nó sẽ trả về absolute URL
    //     // Nếu chúng ta muốn lấy URL tương đối(cái được ghi trong HTML)
    //     //EX1:
    //         console.log(logo.getAttribute('src')); 
    //     //Ex2:
    //         const link = document.querySelector('.nav__link--btn')
    //         console.log(link.href); // Absolute URL
    //         console.log(link.getAttribute('href')) // Relative URL (#)
    //     // Non-standard attributes
    //     console.log(logo.designer); // undefined
    //         // But can get it
    //         console.log(logo.getAttribute('designer')); // HuuHuy
    //     logo.alt = "Beautiful minimalist logo"
    //     // Add a new attribute
    //     logo.setAttribute('company','Bankist')

    // // Data attributes
    //     console.log(logo.dataset.versionNumber);
        // Với những special attributes, chúng luôn được lưu trữ trong dataset object

    // Classes
        logo.classList.add('c')
        logo.classList.remove('c')
        logo.classList.toggle('c')
        logo.classList.contains('c')


// Implementing smooth scrolling
    const btnScrollTo = document.querySelector('.btn--scroll-to');
    const section1 = document.querySelector('#section--1');
    btnScrollTo.addEventListener('click',function(e) {
        const s1scoords = section1.getBoundingClientRect();
        console.log(s1scoords)

        console.log(e.target.getBoundingClientRect());

        console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

        console.log('height/width viewport',document.documentElement.clientHeight,
        document.documentElement.clientWidth);

        // window.scrollTo(
        //     { 
        //         left:s1scoords.left + window.pageXOffset, 
        //         top: s1scoords.top + window.pageYOffset,
        //         behavior: 'smooth'
        //     });
        
            section1.scrollIntoView(
                {
                    behavior: 'smooth',
                }
            )
    })








////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event Propagation
    /////////////////////////////////////////////////////////////////////////
    //Example


    // Random number func
    // const randomInt  = (min,max)=> Math.floor( Math.random() * (max-min+1) + min);

    // // Create a random color
    // const randomColor = ()=>`rgb(${randomInt(0,255)}, ${randomInt(0,255)},${randomInt(0,255)})`

    // // EP Ex

    // let navLinks = document.querySelectorAll('.nav__link'); 
    // navLinks.forEach(link => {link.addEventListener('click',function(e){
    //     this.style.backgroundColor = randomColor();
    //     console.log(e.target, e.currentTarget)
    // })})

    // document.querySelector('.nav__links').addEventListener('click',function(e){
    //     this.style.backgroundColor = randomColor();
    // });

    // document.querySelector('.nav').addEventListener('click',function(e){
    //     this.style.backgroundColor = randomColor();
    // });
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    // Way 1
        // document.querySelectorAll('.nav__link').forEach(ele => 
        // {   
            
        //     ele.addEventListener('click',function(e)
        //     {
        //         e.preventDefault();
        //         const idTo = ele.getAttribute('href');
        //         document.querySelector(idTo).scrollIntoView(
        //             {
        //                 behavior: 'smooth',
        //             }
        //         )
        //     }
        // )})
    // Way 2: better performance because we have to add preventDefault vào parent element 
        document.querySelector('.nav__links').addEventListener('click',function(e)
        {
            e.preventDefault();
            if (e.target.classList.contains('nav__link')){
                const idTo = e.target.getAttribute('href');
                document.querySelector(idTo).scrollIntoView(
                    {
                        behavior : 'smooth',
                    }
                );
                
            }
        })


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DOM Traversing
const h1 = document.querySelector('h1');
    
    //////////////////////////////////////////////////////////////////
    // Going downwards: child
    //     console.log(h1.querySelectorAll('.highlight'));
    //     console.log(h1.childNodes); // Ra all các thể loại phần tử như text, comment, thẻ, ...
    //     console.log(h1.children); // => các HTML thẻ child
    //     console.log(h1.firstChild);
    //     h1.firstElementChild.style.color = 'white';
    //     h1.lastElementChild.style.color = 'orangered';
    // ///////////////////////////////////////////////////////////////////////////
    // // Going upwards : parents
    //     console.log(h1.parentNode);
    //     console.log(h1.parentElement);

    //     // Closest('.name') => chọn phần tử cha gần nhất có tên name
    //     h1.closest('.header').style.background = 'var(--gradient-secondary)';
    //     h1.closest('h1').style.background = 'var(--gradient-primary)';

        
    /////////////////////////////////////////////////////////////////////////////
    //Going sideways : siblings(anh chị em)
    // => Chọn phần tử cùng level
        // console.log(h1.previousElementSibling); // => null vì h1 là phần tử đầu tiên trong thẻ div
        // console.log(h1.nextElementSibling); // => h4

        // console.log(h1.nextSibling);
        // console.log(h1.previousSibling);

        // // Practise
        // [...h1.parentElement.children].forEach(
        //     function(el)
        //     {
        //         if(el !== h1)
        //         {
        //             el.style.transform = 'scale(0.5)';
        //         }
        //     }
        // )

// Tabbed component
    const tabs = document.querySelectorAll('.operations__tab');
    const tabsContent = document.querySelectorAll('.operations__content');
    const tabsContainer = document.querySelector('.operations__tab-container');

    tabsContainer.addEventListener('click', function(e){
        const clicked = e.target.closest('.operations__tab');
        // Guard condition
        if(!clicked) return;

        // Active tab
        tabs.forEach(function(tab){
            tab.classList.remove('operations__tab--active');
        })
        clicked.classList.add('operations__tab--active');
        // Active content 
        tabsContent.forEach(function(tab){
            tab.classList.remove('operations__content--active');
        })
        document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
    });


////////////////////////////////////////////////////////////////////////////////////////////////////////
//Menu fade animation
const nav = document.querySelector('.nav');
const handleHover = function(e)
{
    if(e.target.classList.contains('nav__link'))
    {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo  = link.closest('.nav').querySelector('.nav__logo');

        siblings.forEach(ele =>{
            if(ele !== link)
            {
                ele.style.opacity = this;
            }
        })
        logo.style.opacity = this;
    }
}
// Passsing argurment into event handlers
nav.addEventListener('mouseover',handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));

// Sticky navigation
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Using scroll event handlers: hiệu suất thấp vì Scroll event nó luôn luôn thực hiện callback function mỗi khi chúng ta scroll

        // const initialCoords = section1.getBoundingClientRect();
        // window.addEventListener('scroll', function(e){
        //     if(window.scrollY > initialCoords.top){
        //         nav.classList.add('sticky');
        //     }
        //     else nav.classList.remove('sticky');
        // })

    // Using the intersection observer API
    // const obsCallback = function(entires, observer)
    // {
    //     entires.forEach(entry =>{
    //         console.log(entry);
    //     })
    // }

    // const obsOptions = {
    //     root :  null,
    //     threshold : 0.6,
    // }

    // const observer = new IntersectionObserver(obsCallback,obsOptions);

    // observer.observe(section1);

    const obsCallback = function(entires, observer){
        entires.forEach(entry =>{
            if(!entry.isIntersecting)nav.classList.add('sticky');
            else nav.classList.remove('sticky');
        })
    }

    const obsOptions = {
        root : null,
        threshold : 0,
        rootMargin : `-${nav.getBoundingClientRect().height}px`,
    }

    const observer = new IntersectionObserver(obsCallback,obsOptions);
    observer.observe(header);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Revealing elements on Scroll
    const revealObsCb = function(entries,observer)
    {
        entries.forEach(entry =>{
            if(!entry.isIntersecting) return;
            entry.target.classList.remove('section--hidden');
            observer.unobserve(entry.target);
        })
    }

    const revealObsOpt = {
        root : null,
        threshold : 0.15,
    }
    const revealObserver = new IntersectionObserver(revealObsCb,revealObsOpt);
    document.querySelectorAll('.section').forEach(ele =>{
        revealObserver.observe(ele);
        
        ele.classList.add('section--hidden');
    });

    const lazyImgCallback = function(entries, observer)
    {
        entries.forEach(entry =>{
            if(!entry.isIntersecting) return;
            entry.target.src = entry.target.dataset.src;
            entry.target.addEventListener('load',function()
            {
                entry.target.classList.remove('lazy-img');
            })
            observer.unobserve(entry.target);
        })
        
    }
    const lazyImgObserver = new IntersectionObserver(lazyImgCallback,{
        root: null,
        threshold: 0,
    })

    const imgLazys = document.querySelectorAll('img[data-src]');
    imgLazys.forEach(ele=>{
        ele.classList.add('lazy-img');
        lazyImgObserver.observe(ele);
    })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Slider Component
    const slides = document.querySelectorAll('.slide');

    let currentSlide = 0;
    const numSlide = slides.length;

    const gotoSlide = function(slide) {
        slides.forEach((ele,i) => 
        {
            ele.style.transform = `translateX(${(i-slide)*100}%)`
        })
    }
    gotoSlide(0);

    const btnSlideRight = document.querySelector('.slider__btn--right');
    const btnSlideLeft = document.querySelector('.slider__btn--left');

    const previousSlide = function(){
        if(currentSlide > 0)
        {
            currentSlide--;
            gotoSlide(currentSlide);
        }
        else{
            currentSlide = numSlide;
            gotoSlide(currentSlide-1);
        }
    }

    const nextSlide = function(){
        if(currentSlide < numSlide -1)
        {
            currentSlide++;
            gotoSlide(currentSlide);
        }
        else{
            currentSlide = 0;
            gotoSlide(currentSlide);
        }
    }
    btnSlideLeft.addEventListener('click', previousSlide);
    btnSlideRight.addEventListener('click',nextSlide);
    // Press keyboard to slide
    document.addEventListener('keydown',function(e){
        if(e.key === 'ArrowLeft') previousSlide();
        e.key === 'ArrowRight'&& nextSlide();
    })

    // Create dots

    const dots = document.querySelector('.dots'); 
    const createDots = function()
    {
        slides.forEach(function(_,i){
            dots.insertAdjacentHTML('beforeend',
            `<button class="dots__dot" data-slide="${i}"></button>`);
        })
    }
    createDots();
    // Activate Dots
    const activeDots = function(slide){
        document.querySelectorAll('.dots__dot').forEach(dot =>{
            dot.classList.remove('dots__dot--active');
        })

        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }
    activeDots(0);
    dots.addEventListener('click',function(e){
        if(e.target.classList.contains('dots__dot'))
        {
            gotoSlide(e.target.dataset.slide);
            activeDots(e.target.dataset.slide);
        }
    })
// Lifecycle DOM Events
    /* DOM content loaded : is fired by the document as soon as the HTML is fully parsed
        Also, all scripts mustt be downloaded, and executed
    */
    document.addEventListener('DOMContentLoaded',function(e){
        console.log('DOMContentLoaded');
    })


// Beforeunload events
// window.addEventListener('beforeunload',function(e){
//     e.preventDefault();
//     console.log(e);
//     e.returnValue = '';
// })

