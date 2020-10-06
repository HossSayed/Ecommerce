
$(document).ready(function(){

    $nav = $('.header');
    $toggleCollapse = $('.toggle-collapse');

    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })
});