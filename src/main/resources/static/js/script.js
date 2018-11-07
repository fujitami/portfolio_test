$('.menu__list-button').hover(function() {
  $(this).animate({
    'backgroundColor': '#66BB6A'
  }, 200);
}, function() {
  $(this).animate({
    'backgroundColor': ''
  }, 0);
});

function toggleClassFunc() {
  if ($(this).parent().is('.modal-window')) {
    return 'iziModal-wrap';
  } else {
    return 'scrollOK';
  }
}

$('#menu__list').on('click', '#profile__button', function(e) {
  e.preventDefault();
  $('#profile__detail').iziModal('open');
  $('.iziModal-wrap').toggleClass(toggleClassFunc);
});
$('#profile__detail').iziModal().css({
  borderRadius: '0'
});

$('#menu__list').on('click', '#skill__button', function(e) {
  e.preventDefault();
  $('.skill__detail').iziModal('open');
  $('.iziModal-wrap').toggleClass(toggleClassFunc);
});
$('.skill__detail').iziModal({
  group: 'skillGroup',
  loop: true
}).css({
  borderRadius: '0'
});

$('#menu__list').on('click', '#product__button', function(e) {
  e.preventDefault();
  $('#product__detail').iziModal('open');
  $('.iziModal-wrap').toggleClass(toggleClassFunc);
});
$('#product__detail').iziModal().css({
  borderRadius: '0'
});

$('#menu__list').on('click', '#other__button', function(e) {
  e.preventDefault();
  $('#other__detail').iziModal('open');
  $('.iziModal-wrap').toggleClass(toggleClassFunc);
});
$('#other__detail').iziModal().css({
  borderRadius: '0'
});
