
// Change cards shadow on hover
$('.card').mouseover(function() {
    $(this).addClass('shadow-lg');
}).mouseout(function(){
    $(this).removeClass('shadow-lg');
});

// Add buttons shadow on hover
$('.btn').mouseover(function() {
    $(this).addClass('shadow');
}).mouseout(function(){
    $(this).removeClass('shadow');
});