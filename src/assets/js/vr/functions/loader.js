var loader = {
	init: function () {


		//number of loaded images for preloader progress 
		var loadedCount = 0; //current number of images loaded
		var imagesToLoad = $('.bcg').length; //number of slides with .bcg container
		var loadingProgress = 0; //timeline progress - starts at 0

		$('.bcg').imagesLoaded({
			background: true
		}).progress(function (instance, image) {
			loadProgress();
		});

		function loadProgress(imgLoad, image) {
			//one more image has been loaded
			loadedCount++;

			loadingProgress = (loadedCount / imagesToLoad);

			//console.log(loadingProgress);

			// GSAP timeline for our progress bar
			gsap.to(progressTl, 0.7, {
				progress: loadingProgress,
				ease: Linear.easeNone
			});
		}

		//progress animation instance. the instance's time is irrelevant, can be anything but 0 to void  immediate render
		var progressTl = gsap.timeline({
			paused: true,
			onUpdate: progressUpdate,
			onComplete: loadComplete
		});

		progressTl
			//tween the progress bar width
			.to($('.progress span'), 1, {
				width: 100,
				ease: Linear.easeNone
			});

		//as the progress bar witdh updates and grows we put the precentage loaded in the screen
		function progressUpdate() {
			//the percentage loaded based on the tween's progress
			loadingProgress = Math.round(progressTl.progress() * 100);
			//we put the percentage in the screen
			$(".txt-perc").text(loadingProgress + '%');

		}


		window.onload = function () {
			setTimeout(function () {
				scrollTo(0, 0);
			}, 100); //100ms for example
		}


		function loadComplete() {
			var preloaderOutTl = gsap.timeline();
			preloaderOutTl
				.to(".progress",{duration:.3,y:100,autoAlpha:0,ease:Back.easeIn})
				.to(".txt-perc",{duration:.3,y:100,autoAlpha:0,ease:Back.easeIn},.1)
				.to("#preloader",{duration:.7,autoAlpha:0,ease:Power4.easeInOut})
				.set("#preloader",{className:"+=is-hidden"})
				.to("#intro01 .animatedh2",{duration:1.6,y:0,scale:1,autoAlpha:1},1.5)
				.to("#intro01 .animatedh2",{delay:3,duration:1.6,autoAlpha:0},1.5)
				.set("#intro01 .intro",{className:"+=end intro"})
				.to("#intro01 .text",{duration:1.6,autoAlpha:1},6) 
				.to("#intro01 header.header",{duration:1.6,autoAlpha:1},6)
			return preloaderOutTl;
		}
	}

}