"use script"

//-------------------------------------------------------------------------------------------------
// Меню бурнер
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		// document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

//-------------------------------------------------------------------------------------------------
// Прокрутка по странице
$(function() {
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 500);
		return false;
	});
});

//-------------------------------------------------------------------------------------------------
// Открыть под меню V1

// document.addEventListener('DOMContentLoaded', function () {
//     let servicesLink = document.getElementById('services-link');
//     let subMenu = servicesLink.nextElementSibling; // Получаем подменю, которое идет после ссылки

//     servicesLink.addEventListener('click', function (event) {
//         // Проверяем ширину экрана
//         if (window.innerWidth <= 768) {
//             event.preventDefault(); // Отменяем переход по ссылке

//             // Переключаем класс для отображения подменю
//             subMenu.classList.toggle('show');
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
	const menuItems = document.querySelectorAll('.menu-item.has-submenu');

	menuItems.forEach(item => {
		item.addEventListener('mouseenter', function () {
		if (window.innerWidth > 768) {
			const subMenu = this.querySelector('.sub-menu');
			subMenu.style.display = 'block';
			setTimeout(() => {
			subMenu.style.opacity = 1;
			subMenu.style.visibility = 'visible';
			}, 10);
		}
		});
		
		item.addEventListener('mouseleave', function () {
		if (window.innerWidth > 768) {
			const subMenu = this.querySelector('.sub-menu');
			subMenu.style.opacity = 0;
			subMenu.style.visibility = 'hidden';
			setTimeout(() => {
			subMenu.style.display = 'none';
			}, 300);
		}
		});

		item.addEventListener('click', function (e) {
		if (window.innerWidth <= 768) {
			e.preventDefault();
			this.classList.toggle('active');
		}
		});
	});
	});


//-------------------------------------------------------------------------------------------------
// открыть под меню V2
// document.addEventListener('DOMContentLoaded', function () {
//     let carrentMenuLink = document.querySelector('.carrent-menu__link');

//     carrentMenuLink.addEventListener('click', function () {
//         // Переключаем класс "clicked" для изменения стилей
//         this.classList.toggle('clicked');
//     });
// });


//-------------------------------------------------------------------------------------------------
// Cлайдер для отзывов
// let currentSlide = 0;

// function moveSlide(direction) {
//     const slides = document.querySelectorAll('.slide');
//     const slider = document.querySelector('.slider');

//     currentSlide += direction;

//     if (currentSlide < 0) {
//         currentSlide = slides.length - 1;
//     } else if (currentSlide >= slides.length) {
//         currentSlide = 0;
//     }

//     slider.style.transform = `translateX(-${currentSlide * 100}%)`;
// }


//-------------------------------------------------------------------------------------------------
// добавить класс при скроле страницы
// let scrollpos = window.scrollY

// const header = document.querySelector("header")
// const scrollChange = 1

// const add_class_on_scroll = () => header.classList.add("bg-head")
// const remove_class_on_scroll = () => header.classList.remove("bg-head")

// window.addEventListener('scroll', function() { 
//     scrollpos = window.scrollY;

//     if (scrollpos >= scrollChange) { 
//         add_class_on_scroll() 
//     }
//     else { 
//         remove_class_on_scroll() 
//     }

// })

//-------------------------------------------------------------------------------------------------
// Маска на телефон 
    // jQuery(document).ready(function($) {
    //     $("#phone_mask").mask("+41 (99)-999-99-99",{placeholder:" "});
    // });

//-------------------------------------------------------------------------------------------------
// скрол на верх
// jQuery(document).ready(function() {
//     var btn = $('.up_btn');  
//         btn.on('click', function(e) {
//             e.preventDefault();
//             $('html, body').animate({scrollTop:0}, '300');
//         });
//     });

//-------------------------------------------------------------------------------------------------
// koocies 
// document.addEventListener("DOMContentLoaded", function() {
//     let koocies = document.querySelector('.koocies');

//     setTimeout(function() {
//         koocies.classList.add('show');
//     }, 500);

//     let acceptBtn = document.querySelector('.btn__accept');
//     let rejectBtn = document.querySelector('.btn__reject');

//     acceptBtn.addEventListener('click', function() {
//         koocies.classList.remove('show');
//     });

//     rejectBtn.addEventListener('click', function() {
//         koocies.classList.remove('show');
//     });
// });


//-------------------------------------------------------------------------------------------------
// Прокрутка чисел на странице 
// function animateCount(element, targetValue, duration) {
//     $({ count: parseInt(element.text()) }).animate({ count: targetValue }, {
//         duration: duration,
//         step: function () {
//             element.text(Math.floor(this.count));
//         },
//         complete: function () {
//             element.text(targetValue);
//         }
//     });
// }
// function startCountAnimation() {
//     animateCount($('#years'), 22, 2000); // Adjust duration as needed
//     animateCount($('#partners'), 15, 2000);
//     animateCount($('#countries'), 14, 2000);
// }
// Trigger the counting animation when the document is ready
// $(document).ready(function () {
//     startCountAnimation();
// });

//-------------------------------------------------------------------------------------------------
// Прокрутка чисел на странице mobile
// function animateCountMob(element, targetValue, duration) {
//     $({ count: parseInt(element.text()) }).animate({ count: targetValue }, {
//         duration: duration,
//         step: function () {
//             element.text(Math.floor(this.count));
//         },
//         complete: function () {
//             element.text(targetValue);
//         }
//     });
// }
// function startCountAnimationMob() {
//     animateCount($('#years_mob'), 22, 2000); // Adjust duration as needed
//     animateCount($('#partners_mob'), 15, 2000);
//     animateCount($('#countries_mob'), 14, 2000);
// }
// Trigger the counting animation when the document is ready
// $(document).ready(function () {
//     startCountAnimationMob();
// });


//-------------------------------------------------------------------------------------------------
// Слайдер на главной
// if ($('.head').length) {
//     function nextSlide() {
//         let $active = $('.head__images-desc img.active');
//         let $next = $active.next().length ? $active.next() : $('.head__images-desc img:first');
//         $active.removeClass('active');
//         $next.addClass('active');
//     }
//     function nextSlide2() {
//         let $active = $('.head__images-mobile img.active');
//         let $next = $active.next().length ? $active.next() : $('.head__images-mobile img:first');
//         $active.removeClass('active');
//         $next.addClass('active');
//     }

// setInterval(nextSlide, 2000);
// setInterval(nextSlide2, 2000);
// }



//-------------------------------------------------------------------------------------------------
// По клику на кнопку подставляем заголовок
// document.addEventListener('DOMContentLoaded', function() {
//     // Получаем все ссылки "Check product"
//     let productLinks = document.querySelectorAll('.product_btn');
    
//     // Для каждой ссылки добавляем обработчик события
//     productLinks.forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // Предотвращаем переход по ссылке

//             let productTitle = this.parentElement.querySelector('h4').textContent; // Получаем заголовок продукта из карточки
//             document.querySelector('input[name="productTitle"]').value = productTitle; // Устанавливаем его в скрытое поле формы
//         });
//     });
// });


//-------------------------------------------------------------------------------------------------
// Прокрутка при клике
// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if(menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }

//-------------------------------------------------------------------------------------------------
//прикрепление файла в форме
// const formImage = document.getElementById('formImage');
// const formPreview = document.getElementById('formPreview');

// formImage.addEventListener('change', () => {
// 	uploadFile(formImage.files[0]);
// });

// function uploadFile(file) {
// 	if (!['image/jpeg', 'image/png', 'image/gif', 'image/pdf'].includes(file.type)) {
// 		alert('Разрешены только изображения!');
// 		formImage.value ='';
// 		return;
// 	}
// 	if (file.size > 2 * 1024 * 1024) {
// 		alert('Файл должен быть менее 2 МБ.');
// 		return;
// 	}
// 	var reader = new FileReader();
// 	reader.onload = function (e) {
// 		formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
// 	};
// 	reader.onerror = function (e) {
// 		alert('Ошибка');
// 	};
// 	reader.readAsDataURL(file);
// }

//-------------------------------------------------------------------------------------------------
//style main-bg
// function ibg(){
// 	$.each($('.ibg'), function(index, val) {
// 		if($(this).find('img').length>0){
// 			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	});
// };
// ibg();

//-------------------------------------------------------------------------------------------------
// скрывать и показывать пароль в инпуте
// var button2 = document.getElementById("showEye2");
// button2.onclick = showEye2;

// var input2 = document.getElementById("show2");
// var icon = document.getElementById("i");

// function showEye2 () {
// 	if(input2.getAttribute('type') == 'password') {
// 		input2.removeAttribute('type');
// 		input2.setAttribute('type', 'text')
// 		button2.innerHTML='<i id="i" class="far fa-eye-slash">';
// 	} else {
// 		input2.removeAttribute('type');
// 		input2.setAttribute('type', 'password');
// 		button2.innerHTML='<i id="i" class="far fa-eye">';
// 	}
// }

//-------------------------------------------------------------------------------------------------
// $('#form').submit(function(){
// 	$.ajax({
// 		type:"POST",
// 		url: "mail.php",
// 		data: $(this).serialize()
// 	}).done(function() {
// 	alert("Thank you for contacting us!");
// 	setTimeout(function() {
// 		$.magnificPopup.close();
// 	}, 1000);
// 	});
// 	return false;
// });