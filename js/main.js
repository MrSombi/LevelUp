$(function () {
    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});


$(document).ready(function () {
    var clock;
    clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter', //вид счетчика (с количеством дней)
        autoStart: false, //Отключаем автозапуск
        countdown: true, //Отсчет назад
        language: 'ru-ru', //Локаль языка
        callbacks: { //Действие после окончания отсчета
            stop: function () {
                $('.clock-stop').addClass("alert alert-danger");
                $('.clock-stop').html('Время вышло!');
            }
        }
    });

    clock.setTime(1800); //Устанавливаем нужное время в секундах
    clock.setCountdown(true); //Устанавливаем отсчет назад
    clock.start(); //Запускаем отсчет
});