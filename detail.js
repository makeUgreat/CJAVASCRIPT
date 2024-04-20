$('.tab-button').on('click', function() {
    $('.tab-button').removeClass('orange');
    $('.tab-content').removeClass('show');
    $(this).addClass('orange');
    let index = $(this).index();
    $('.tab-content').eq(index).addClass('show');
})



let car = ['소나타', 50000, 'white'];
let objectCar = {name: '소나타', price: 50000 }
$('.card span').eq(0).text(objectCar.name)
$('.card span').eq(1).text(objectCar.price)
