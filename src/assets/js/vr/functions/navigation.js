var navigation = {
	init: function () {
		$('.nav-icon-wrapper').click(function (e) {
			var $this = $('body');

			e.preventDefault();
			$('.nav-icon-wrapper').toggleClass('nav-clicked');
			$this.toggleClass('nav--show')
		});


	}
}