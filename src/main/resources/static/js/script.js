$('#profile__button').click(function(e) {
  e.preventDefault();
  $('#profile__detail').iziModal('open');
});
$('#profile__detail').iziModal({
});

$('#skill__button').click(function(e) {
  e.preventDefault();
  $('#skill__detail').iziModal('open');
});
$('#skill__detail').iziModal();

$('#product__button').click(function(e) {
  e.preventDefault();
  $('#product__detail').iziModal('open');
});
$('#product__detail').iziModal();

$('#other__button').click(function(e) {
  e.preventDefault();
  $('#other__detail').iziModal('open');
});
$('#other__detail').iziModal();
