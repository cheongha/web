  $(function(){
  var header = $('header');
  var page = $('.page-start');
  var menu = $('a.menu1');
  var logo = $('#logo');
  var pageOffsetTop = page.offset().top;
  $(window).resize(function(){
    pageOffsetTop = page.offset().top;
  });
  
  $(window).on('scroll', function(){
    if($(window).scrollTop() >= pageOffsetTop) {
      header.addClass('down');
      logo.css('color', '#B52038');
      menu[0].style.color = '#B52038';
      menu[1].style.color = '#B52038';
      menu[2].style.color = '#B52038';
      menu[3].style.color = '#B52038';
    } else {
      header.removeClass('down');
      logo.css('color', 'white');
      menu[0].style.color = 'white'
      menu[1].style.color = 'white'
      menu[2].style.color = 'white'
      menu[3].style.color = 'white'
    }
  });
});