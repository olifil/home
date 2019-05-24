$(document).ready(function () {
    $('#takePhoto').on('click', function (e) {
        $.ajax({
            url: "../inc/Picture.php",
            success: function (r) {
                console.log(r);
            }
        });     
    });
});