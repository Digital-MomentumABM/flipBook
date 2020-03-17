var section04= {
	init: function() {
 
		//var h = document.querySelector("#section04").getBoundingClientRect().height;
		gsap.defaultEase = Linear.easeNone;
		gsap.set("#icon04", {scale:.4, autoAlpha:0,transformOrigin:'center'},0)
		gsap.set("#icon04 path", {scale:.4, autoAlpha:0,transformOrigin:'center'},0)
		gsap.set("#icon04 rect", {autoAlpha:0},0)
 
		var action04 = gsap.timeline({defaults:{Expo:"easeInOut"}})
		  .to("#icon04",0.5, {autoAlpha:1,scale:1,ease:Elastic})
		  .to("#icon04 path",0.05,{autoAlpha:1,scale:1, transformOrigin:'center', ease:Elastic},0)  
		  .to("#icon04 rect",0.05,{autoAlpha:1,scale:1, transformOrigin:'center', ease:Elastic},0.02)  
 
 
		gsap.to("#icon04 .icon04-cls-3", {duration:3, scale:1.1,  repeat:-1,yoyo:true });

		var Controller = new ScrollMagic.Controller();

		var scene04 = new ScrollMagic.Scene({
		  triggerElement: "#section04",
		  duration: '50%',  
		  triggerHook: 0.5, 
		})
		.setTween(action04) 
		.addTo(Controller) 


 
	}
}
