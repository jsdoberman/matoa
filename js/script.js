'use strict'

/* ===========================================================Блок попапа кошика*/


const cartPopup = document.querySelector('.cart-pop'),
	cartHeader = document.querySelector('.header__bag');
	
	if(cartPopup) { 
		cartHeader.addEventListener('click', function(){
		cartPopup.classList.toggle('cart-pop_show');
	});

	cartPopup.addEventListener('click', function(){
			cartPopup.classList.toggle('cart-pop_show');
		});

	}


	








const productInBag = document.querySelectorAll('.product-section'),
	btnRemoveProduct = document.querySelectorAll('.product-section__btn-remove');


	btnRemoveProduct.forEach(function(item, i, arr){

			item.addEventListener('click', function(){
				productInBag[i].remove();
			})
	});










/* ===========================================================лічильник кіл-ті товарів для давання в кошик*/

const btnMinus = document.querySelector('.count-product__btn-minus'),
		btnPlus = document.querySelector('.count-product__btn-plus'),
		number = document.querySelector('.count-product__number');

if(number){
		let culcProduct = 0;
		number.innerHTML = culcProduct;
		
	btnPlus.addEventListener('click', function() {
		culcProduct = culcProduct + 1;
		number.innerHTML = culcProduct;
	});

	btnMinus.addEventListener('click', function() {
		if (culcProduct) {
			culcProduct = culcProduct - 1;
			number.innerHTML = culcProduct;
		} else {
			number.innerHTML = 0;
		}

	});
}










/* =========================================================== product-slider */



$('.product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-slider-nav',

});

$('.product-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-slider',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  vertical: true,
  arrows: false,
  infinite: true,
responsive: [
    {
      breakpoint: 634,
      settings: {
		vertical: false,
      }
    },
	{
      breakpoint: 572,
      settings: {
		vertical: false,
		slidesToShow: 3,
      }
    },
	{
      breakpoint: 461,
      settings: {
		vertical: false,
		slidesToShow: 2,
      }
    },
	
  ] 


});


/* =========================================================== relate-products*/
$(document).ready(function(){
      $('.relate-products__wrapper').slick({
		infinite: true,
		slidesToShow: 4,
  		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1181.98,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 831.98,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 546.98,
				settings: {
					slidesToShow: 1,
				}
			},
			
		]
        
      });
    });



/* =========================================================== слайдер */
$(document).ready(function(){
      $('.testimonials-slider').slick({
		 infinite: true,
		 slidesToShow: 1,
  		slidesToScroll: 1,
        
      });
    });

$(document).ready(function(){
      $('.main-slider').slick({
		 infinite: true,
		 slidesToShow: 1,
  		slidesToScroll: 1,
		arrows:true,
        
      });
    });



/* =========================================================== Стара ціна */

const oldPrice = document.querySelectorAll('.product__old-price');

oldPrice.forEach(function(item) {
	if(!item.innerHTML) {
		item.remove();
	}
});

const dealsOldPrice = document.querySelectorAll('.deals-item__old-price');

dealsOldPrice.forEach(function(item) {
	if(!item.innerHTML) {
		item.remove();
	}
});

const likeButton = document.querySelectorAll('.deals-item__like');

likeButton.forEach(function(like) {
	like.addEventListener('click', function(event){
		like.classList.toggle('deals-item__like_click');

	});
});

const search = document.querySelector('.header__search img'),
	searchForm = document.querySelector('.header__input-form'),
	searchClose = document.querySelector('.header__close-search');

search.addEventListener('click', function(){
	searchForm.classList.toggle('header__input-form_active');
});

searchClose.addEventListener('click', function(){
	searchForm.classList.remove('header__input-form_active');
});

/* =========================================================== Tabs*/

const tabTitles = document.querySelectorAll('.block-tabs__item'), //Кнопки таба
		textBlock = document.querySelectorAll('.product-info-block__text-block'), //Блоки таба
		parentTabTitles = document.querySelector('.block-tabs');

	if(tabTitles.length) {

				function hideBlockes(){
		tabTitles.forEach(function(item){
			item.classList.remove('block-tabs__item_active');
		});

		textBlock.forEach(function(item){
			item.classList.remove('product-info-block__text-block_active');
		});

	}
	hideBlockes(); //Приховуємо класи активності у кнопок таба і блоків таба
 

	function showBlockes(i = 0) {
		tabTitles[i].classList.add('block-tabs__item_active'); // И у первой кнопки ставим класс активности.	
		textBlock[i].classList.add('product-info-block__text-block_active'); // По умолчанию показываем первый таб.
	}
	showBlockes();

	parentTabTitles.addEventListener('click', function(event){  //Вешаем делегирование событий на дочерние элементы btns.

		if (event.target && event.target.classList.contains('block-tabs__item')) { //Событие на дочерние элементы.
			tabTitles.forEach(function(item, i){     //перебираем элементы на которые кликают
				if (event.target == item){ //Сравниваем элемент на который кликнули с кнопками переключения окон (отлавливаем, на какой элемент кликнули)
					hideBlockes();
					showBlockes(i); // Передаем i - порядковый номер в функцию, чтобы присвоился класс активности элементу И показался слайд под тем же нмоером.
				}
			});
		} 
	});

	}



	


/* =========================================================== БУРГЕР МЕНЮ */


const burger = document.querySelector('.hamburger'),
	hideMenu = document.querySelector('.main-menu'), //Блок который скрывается
	menuLink = document.querySelectorAll('.main-menu__item'), //Класс элементов меню, по которым кликаем
	body = document.querySelector('body'); 

		burger.addEventListener('click', function() {
			hideMenu.classList.toggle('main-menu__link_active'); //Класс активности
			burger.classList.toggle('hamburger_close');
			//body.classList.toggle('body-hidden');

		});


		menuLink.forEach(function(item) {
			item.addEventListener('click', function() {
				hideMenu.classList.toggle('main-menu__link_active'); //Класс активности
				burger.classList.toggle('hamburger_close');
				//body.classList.toggle('body-hidden');
			});
		});


/* =========================================================== Движение элементов по прокрутке страницы */

/* -------------------------------------------Движение ввурх */
function onEntryToTop(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('to-top'); //Добавляем класс активности
		} /* else change.target.classList.remove('to-top'); */ // Оставляем - будет срабатывать каждый раз
	});
}

let optionsToTop = {
		threshold: [0.5] 
};

let observerToTop = new IntersectionObserver(onEntryToTop, optionsToTop); 
let elementsToTop = document.querySelectorAll('.to-top_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsToTop) { 
	observerToTop.observe(elm); 
}



/* ---------------------------------------Движение слева на право */
function onEntryLeftToRight(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('left-to-right'); //Добавляем класс активности
		} else change.target.classList.remove('left-to-right'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsLeftToRight = {
		threshold: [0.5] 
};

let observerLeftToRight = new IntersectionObserver(onEntryLeftToRight, optionsLeftToRight); 
let elementsLeftToRight = document.querySelectorAll('.left-to-right_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsLeftToRight) { 
	observerLeftToRight.observe(elm); 
}



/* ---------------------------------------Движение справа на лево */
function onEntryRightToLeft(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('right-to-left'); //Добавляем класс активности
		} else change.target.classList.remove('right-to-left'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRightToLeft = {
		threshold: [0.5] 
};

let observerRightToLeft = new IntersectionObserver(onEntryRightToLeft, optionsRightToLeft); 
let elementsRightToLeft = document.querySelectorAll('.right-to-left_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRightToLeft) { 
	observerRightToLeft.observe(elm); 
}


/* ---------------------------------------Движение поворот */
function onEntryRotate(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('rotate'); //Добавляем класс активности
		} else change.target.classList.remove('rotate'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRotate = {
		threshold: [0.5] 
};

let observerRotate = new IntersectionObserver(onEntryRotate, optionsRotate); 
let elementsRotate = document.querySelectorAll('.rotate_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRotate) { 
	observerRotate.observe(elm); 
}





// =================================================Модуль анімація цифрового лічильника
//Цифри котрі мають анимуватись обгортаємо тегом з атрибутом data-digits-counter
window.addEventListener('load', windowLoad);

function windowLoad() { 

	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000; //Час анімації
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	/* Пуск при завантажені сторінки */
	//digitsCountersInit();

	//--------Пуск при скролі до блока:
		let options = {
			threshold: 0.5
		};

		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					const targetElement = entry.target;
					const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
					if (digitsCountersItems.length) {
						digitsCountersInit(digitsCountersItems);
					}
					//Вимкнути після спрацювання
					//observer.unobserve(targetElement);
				}
			});
		}, options);

		let sections = document.querySelectorAll('.numb__date') //Батьківський єлемент, який з'являється на екрані
		if(sections.length) {
			sections.forEach(section => {
				observer.observe(section);
			});
		}
 } 
// =====================================================================================