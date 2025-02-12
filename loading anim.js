//( function( $ ) {
//
//	"use strict";
//
//  $(".card").tilt({
//    maxTilt: 15,
//    perspective: 1400,
//    easing: "cubic-bezier(.03,.98,.52,.99)",
//    speed: 1200,
//    glare: true,
//    maxGlare: 0.2,
//    scale: 1.04
//  });
//  
//}( jQuery ) );

const tiltEls = document.querySelectorAll('.tilt')

const tiltMove = (x, y) => `perspective(500px) scale(1.8) rotateX(${x}deg) rotateY(${y}deg)`

tiltEls.forEach(tilt => {
	const height = tilt.clientHeight
	const width = tilt.clientWidth
	
	tilt.addEventListener('mousemove', (e) => {
		const x = e.layerX
		const y = e.layerY
		const multiplier = 50
		
		const xRotate = multiplier * ((x - width / 2) / width)
		const yRotate = multiplier * ((y - height / 2) / height)
		
		tilt.style.transform = tiltMove(xRotate, yRotate)
	})
	
	tilt.addEventListener('mouseout', () => tilt.style.transform = tiltMove(0,0))
})