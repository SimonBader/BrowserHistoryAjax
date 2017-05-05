console.info('run submitWithAjax.js');
console.debug(window.location);

var frm = $('#childForm');
frm.submit(function (ev) {
    console.info('run preventDefault');
    ev.preventDefault();
    $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: frm.serialize(),
        success: function (content) {
            $("html").html(content);
        }
    });
});