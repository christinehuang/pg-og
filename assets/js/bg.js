gsap.utils.toArray(".tt-section").forEach(function(elem) {

	var color = elem.getAttribute('data-color');
	
	ScrollTrigger.create({
	  trigger: elem,
	  start:'top 50%',
	  end:'bottom 50%',
	  onEnter: () => gsap.to('.section-all', {backgroundColor:color}), 
	  onLeave: () => gsap.to('.section-all', {backgroundColor:'rgba(0,0,0,.4)'}), 
	  onLeaveBack: () => gsap.to('.section-all', {backgroundColor:'rgba(0,0,0,.4)'}), 
	  onEnterBack: () => gsap.to('.section-all', {backgroundColor:color}), 
	  markers:false
	});
  
  });