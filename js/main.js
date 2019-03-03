$('.interets i').on('mouseenter', (e) => {
    $(e.currentTarget.nextElementSibling).toggleClass("show");
    console.log($(e.currentTarget.nextSibling))
});
$('.interets
 i').on('mouseleave', (e) => {
    $(e.currentTarget.nextElementSibling).toggleClass("show");
});

   