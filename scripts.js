function expandCodeBoxesHeight() {
    let windowHeight = $(window).height();
    let headerHeight = $('header').height();
    let codeBoxHeight = windowHeight - headerHeight;
    $('.codebox').height(codeBoxHeight);
    $('.codebox textarea').height(codeBoxHeight);
}
expandCodeBoxesHeight();

function resizeCodeBoxesWidth() {
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
        resizeCodeBoxesWidth();
    });
}
toggleLanguage();

function changeHTML(html) {
    $('#results').contents().find('html').html(html);
}

function runJS() {
    // WARNING: The way this function runs is dangerous as it allows
    // ANY JS to be run. Remove this function or recode it before
    // Uploading to your website.
    let js = $('#JScode').val();
    document.getElementById('results').contentWindow.eval(js);
}

function runCode() {
    $('#run').click(function() {
        let html = $('#HTMLcode').val();
        let css = '<style>' + $('#CSScode').val() + '</style>';
        html = css + html;
        changeHTML(html);
        runJS();
    });
}
runCode();