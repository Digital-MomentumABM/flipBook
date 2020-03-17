var section06 = {
  init: function() {
   //gsap.set('.timeline-menu li a', { y: -40, autoAlpha: 0 });

    gsap.timeline({ defaults: {ease: 'power2.out', duration: 1.8 }})
    //.to(".timeline-menu li a",{y:0,delay:1,autoAlpha:1,stagger:.6},.6);


    $('.timeline-menu').append('<li class="magic-line"></li>');

    // animate magic-line on click
    $(document)
      .on('mouseenter', '.timeline-menu li a', function(e) {
        e.preventDefault();
        var $this = $(this),
          // get offset of hovered this
          offset = $this.offset(),
          //find the offset of the wrapping div
          offsetBody = $('.timeline-nav').offset();
        $('.timeline-menu li').removeClass('active');
        $(this)
          .parent()
          .addClass('active');

        // GSAP animate to clicked menu item
        gsap.to($('.timeline-menu .magic-line'), 0.5, {
          css: {
            width: $this.outerWidth() + 'px',
            left: offset.left - offsetBody.left + 'px'
          },
          overwrite: 'all',
          // easing for overshoot
          ease: 'power2.out'
        });
      })
      .on('mouseleave', '.timeline-menu li a', function() {
        var $this = $(this);
      })
      .on('click', '.timeline-menu li', function() {
        var $this = $(this),
          offset = $this.offset(),
          //find the offset of the wrapping div
          offsetBody = $('.timeline-nav').offset();

        // GSAP animate to clicked menu item
        gsap.to($('.timeline-menu .magic-line'), 0.45, {
          css: {
            width: $this.outerWidth() + 'px',
            left: offset.left - offsetBody.left + 'px'
            //top: offset.top - offsetBody.top + $(this).height() + 'px'
          },
          ease: Power2.easeInOut
        });

        return false;
      });

    $('.timeline-menu li:not(".timeline-menu li.active")').hover(
      function() {
        $('.magic-line').addClass('hover');
      },
      function() {
        $('.magic-line').removeClass('hover');
      }
    );

    $('.timeline-menu > li')
      .first()
      .trigger('click');

    //INIT END
  }
};
