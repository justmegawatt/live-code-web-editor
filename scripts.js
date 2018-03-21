// Design //

var windowHeight = $(window).height();
var headerHeight = $('header').height();
var codeBoxHeight = windowHeight - headerHeight;
$('.codebox').height(codeBoxHeight);
$('.codebox textarea').height(codeBoxHeight);