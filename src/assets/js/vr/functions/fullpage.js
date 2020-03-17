var fullpage = {
	init: function () {


		if ($(window).width() < 1024) {
			console.log('mobile');

			$('#fullpage').fullpage({
				anchors: ['intro01Page', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
				navigation: true,
				navigationPosition: 'right',
				navigationTooltips: ['intro01', 'AWS is how', 'The future is now', 'Machines for greater efficiencies', 'Embracing new challenges', 'The importance of play', 'Working backwards', 'See transformation for yourself'],
				// dscrollingSpeed: 1400, 
				scrollOverflow: true,
				licenseKey: '7BFBA001-B03B4F03-960A801B-1EACBA4E'
			});
			var controller = new ScrollMagic.Controller();

		}

		///////////////// desktop
		else {
			console.log('desktop');
			$('#fullpage').fullpage({
				menu: '#menu',
				licenseKey: '7BFBA001-B03B4F03-960A801B-1EACBA4E',
				anchors: ['intro01Page', 'firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage'],
				autoScrolling: true,
				verticalCentered: false,

				afterLoad: function (anchorLink, index) {
					//console.log('afterLoad')

				},
				afterRender: function (anchorLink, index) {
					//console.log('afterRender')

				}


			});
		}
		$(document).on('click', '.btnintro', function () {
			fullpage_api.moveSectionUp();
		});
		$(document).on('click', '.icon-arrow-down', function () {
			fullpage_api.moveSectionDown();
		});


		var controller = new ScrollMagic.Controller();
		//MOBILE BEHAVIERS
		var mobileHero = new ScrollMagic.Scene({
				triggerElement: '#section01',
				duration: '100%',
				triggerHook: 0,
				reverse: true,
			})
			.setClassToggle('#link-section01', 'link-active')
			.addTo(controller);
		// one
		var mobileOne = new ScrollMagic.Scene({
				triggerElement: '#section02',
				duration: '100%',
				triggerHook: 0,
				reverse: true,
			})
			.setClassToggle('#link-section02', 'link-active')
			.addTo(controller);
		// two
		var mobileTwo = new ScrollMagic.Scene({
				triggerElement: '#section03',
				duration: '100%',
				triggerHook: 0,
				reverse: true,
			})
			.setClassToggle('#link-section03', 'gu')
			.addTo(controller);
		// three
		var mobileFour = new ScrollMagic.Scene({
				triggerElement: '#section04',
				duration: '100%',
				triggerHook: 0,
				reverse: true,
			})
			.setClassToggle('#link-section04', 'link-active')
			.addTo(controller);

		var mobileFive = new ScrollMagic.Scene({
				triggerElement: '#section05',
				duration: '100%',
				triggerHook: 0,
				reverse: true,
			})
			.setClassToggle('#link-section05', 'link-active')
			.addTo(controller);

		var mobileSix = new ScrollMagic.Scene({
				triggerElement: '#section06',
				duration: '100%',
				triggerHook: 0,
				reverse: true,
			})
			.setClassToggle('#link-section06', 'link-active')
			.addTo(controller);


		var mobileSeven = new ScrollMagic.Scene({
				triggerElement: '#section07',
				duration: '100%',
				triggerHook: 0,
				reverse: true,
			})
			.setClassToggle('#link-section07', 'link-active')
			.addTo(controller);


	}
}