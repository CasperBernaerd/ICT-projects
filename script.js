var navSize;
function openNav() {
	document.getElementById("sidenav").style.width = "250px";
	if (window.innerWidth >= 700 ) {
		document.body.style.marginLeft = "250px";
		document.body.style.transition = "all 0.5s";
	}
	navSize = 250;
}
function closeNav() {
	document.getElementById("sidenav").style.width = "0";
	document.body.style.marginLeft = "0";
	navSize = 0;
}
function toggleNav(){
	if (navSize === 250) {return closeNav();}
	return openNav();
}	

window.onresize = function(){	//voor sidenav , zodat op ipad de sidenav de tekst mee verschuift en mobiel het menu over de tekst schuift
	if (window.innerWidth <= 700 && navSize == 250) { // mobiel
		document.body.style.marginLeft = "0";
		document.body.style.transition = "all 0s";
	} else if (window.innerWidth >= 700 && window.innerWidth <= 1100 && navSize == 250) {	//ipad
		document.body.style.marginLeft = "250px";
		document.body.style.transition = "all 0.5s";
	} else if (window.innerWidth >= 1100 && navSize == 250 ) {	//desktop
		closeNav();
		document.body.style.marginLeft = "0";
		document.body.style.transition = "all 0s";
	}
};
		
window.onscroll = function() {myFunction()};

		var navbar = document.getElementById("nav");
		var sticky = navbar.offsetTop;

		function myFunction() {
			if (window.pageYOffset >= sticky) {
				navbar.classList.add("sticky")
				navbar.style.backgroundColor = "rgba(100,100,100,0.6)";
				} 
			else {
			navbar.classList.remove("sticky"); 
			navbar.style.backgroundColor = "rgba(255,255,255,0.2)";
			}
		}