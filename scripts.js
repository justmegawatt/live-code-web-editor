function expandCodeBox() {
    let windowHeight = $(window).height();
    let headerHeight = $('header').height();
    let codeBoxHeight = windowHeight - headerHeight;
    $('.codebox').height(codeBoxHeight);
    $('.codebox textarea').height(codeBoxHeight);
}
expandCodeBox();

function resizeCodeBoxes() {
    let visibleCodeBoxes = $('.codebox').filter(function() {
        return $(this).css('display') != 'none';
    }).length;
    $('.codebox').css('width', 100/visibleCodeBoxes + '%')
}

function toggleLanguage() {
    $('.language').click(function() {
        $(this).toggleClass('selected');

        boxID = '#' + $(this).html() + 'box';
        $(boxID).toggle();

        resizeCodeBoxes();
    });
}
toggleLanguage();