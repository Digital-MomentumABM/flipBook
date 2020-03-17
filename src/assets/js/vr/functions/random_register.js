var random_register = {
    init: function () {


        if ($(window).width() > 1024) {
            var bntRegister = $('.button-register');

            bntRegister.data('width', bntRegister.width());
            bntRegister.data('path', $('.random01', bntRegister));
            bntRegister.data('color', bntRegister.data('path').attr('stroke'));

            gsap.to('.button-register .random02', 0.8, {
                morphSVG: '.button-register .random03',
                repeat: -1,
                yoyo: true,
                repeatDelay: 1.09,
                ease: Bounce.easeInOut
            });

            var width = $('.button-area').width();
            var height = $('.button-area').height();

            gsap.set([bntRegister], {
                xPercent: -50,
                yPercent: -50
            });

            // x/y values for how far away from the center they can move
            var dx = width * 0.15;
            var dy = height * 0.15;

            // Animate our properties individually 
            tweenProperty(bntRegister, 'x', -dx, dx);
            tweenProperty(bntRegister, 'y', -dy, dy);

            function tweenProperty(target, prop, min, max) {
                gsap.to(target, random(1, 6), {
                    [prop]: random(min, max),
                    ease: Sine.easeInOut,
                    onComplete: tweenProperty,
                    onCompleteParams: [target, prop, min, max]
                });

                // 60% chance we'll do a rotation tween
                if (chanceRoll(60)) {
                    tweenRotation(target);
                }
            }

            function tweenRotation(target) {
                var rotation = random(180, 360);
                var duration = random(1, 3);

                if (chanceRoll(75)) {
                    // Multiplier
                    rotation * random(2, 5);

                    // HYPERMODE!!!
                    if (chanceRoll(40)) {
                        // Massive multiplier
                        rotation *= random(15, 25);

                        var dur = 0.5;
                        var path = target.data('path');
                        var color = target.data('color');
                        var width = target.data('width');

                        var tl = gsap
                            .timeline()
                            .to(
                                path,
                                dur, {
                                    fill: color,
                                    fillOpacity: 0.5
                                },
                                'start'
                            )
                            .to(
                                target,
                                dur, {
                                    width: 164
                                },
                                'start'
                            )
                            .to(
                                path,
                                dur, {
                                    fill: '#F59D0F',
                                    fillOpacity: 0.0
                                },
                                'end'
                            )
                            .to(
                                target,
                                dur, {
                                    width: width
                                },
                                'end'
                            );
                    }
                }

                //gsap.to(target, duration, { rotation: "+=" + rotation });
            }

            function random(min, max) {
                if (max == null) {
                    max = min;
                    min = 0;
                }
                if (min > max) {
                    var tmp = min;
                    min = max;
                    max = tmp;
                }
                return min + (max - min) * Math.random();
            }

            function chanceRoll(chance) {
                if (chance == null) {
                    chance = 50;
                }
                return chance > 0 && Math.random() * 100 <= chance;
            }

            function randomChoice(choice1, choice2) {
                return Math.random() < 0.5 ? choice1 : choice2;
            }
        }
    }
};