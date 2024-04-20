var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  $('.card-group .card').each(function(i) {
    let product = products[i]

    if (product) {
        $(this).find('h5').text(product.title);
        $(this).find('p').text('가격 : ' + product.price)
    }

    $('.form-select').eq(0).on('change', function() {
        if ($(this).val() == '셔츠') {
            $('.form-select').eq(1).css('display','block')
        } else {
            $('.form-select').eq(1).css('display','none')
        }
    })
    
    $.get('https://codingapple1.github.io/hello.txt').done(function(data) {
        console.log(data)
    })
    
  })