$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});

// birth date

function calculateAge(birthDate) {
            var currentDate = new Date();
            var birthDate = new Date(birthDate);
            var age = currentDate.getFullYear() - birthDate.getFullYear();

            // Проверяем, если день рождения еще не наступил в текущем году,
            // то уменьшаем возраст на 1
            if (currentDate.getMonth() < birthDate.getMonth() ||
                (currentDate.getMonth() === birthDate.getMonth() &&
                currentDate.getDate() < birthDate.getDate())) {
                age--;
            }

            return age;
        }

        window.onload = function() {
            var birthDate = '1998-06-01'; // Дата рождения ГГ-ММ-ДД)
            var age = calculateAge(birthDate);

            // Обновляем элемент с id "age" текущим возрастом
            document.getElementById('age').innerHTML = age;
        };
