$(function(){
    const blockHeight = $('.sections__link').height()
    console.log(blockHeight)
    var sections = $('section')
  , nav = $('.sections__link')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop() - blockHeight + 60;
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').parent("li").removeClass('active');
      sections.removeClass('active');
      
      $(this).parent("li").addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent("li").addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
    if (screen.width >= 1140){
        $('html, body').animate({
    
            scrollTop: $(id).offset().top - nav_height + blockHeight 
          }, 500);
    } else {
        $('html, body').animate({
    
            scrollTop: $(id).offset().top - nav_height + blockHeight - 600
          }, 500);
    }
  
  if (screen.width <= 1140 && $(".sections__link").hasClass("openList")){
    $(".sections__link").removeClass("openList")
  }
  return false;
});
$(".openMenu").click(function(){
    $(".sections__link").addClass("openList")
    
})
})
