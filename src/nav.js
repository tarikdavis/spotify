/*
This JS was copied from https://www.scdn.co/webpack/reactlanding.2c506e1ee536cf668fe9.js
Removed export statements
*/

let sidepanelTimeout = null;
 
const _closeNavbar = function() {
  
const navbarCollapse = document.querySelector('.navbar-collapse');

 if (!navbarCollapse.classList.contains('open')) {
		return;
   }  

const backdrop = document.querySelector('.sidepanel-backdrop');
  
document.querySelector('.navbar-toggle').classList.add('collapsed');

navbarCollapse.classList.remove('open');

navbarCollapse.classList.add('animate-out');

backdrop.style.opacity = 0;
if (sidepanelTimeout !== null) {
		clearTimeout(sidepanelTimeout);
	}

sidepanelTimeout = setTimeout(function() {
		navbarCollapse.classList.remove('animate-out');
		document.querySelector('body').classList.remove('sidepanel-active');
		document.querySelector('#js-navbar').classList.remove('navbar-sidepanel');
		backdrop.remove();}, 200);
};

const _openNavbar = function() {
		const navbarCollapse = document.querySelector('.navbar-collapse');
 		navbarCollapse.classList.add('animate-in');
 		navbarCollapse.classList.add('open');
 		document.querySelector('body').classList.add('sidepanel-active');
 		document.querySelector('#js-navbar').classList.add('navbar-sidepanel');
 		document.querySelector('.navbar-toggle').classList.remove('collapsed');
 		const div = document.createElement('div');
 		div.classList.add('sidepanel-backdrop');
 		document.querySelector('#js-navbar').prepend(div);

if (sidepanelTimeout !== null) {
 		clearTimeout(sidepanelTimeout);
 	 }
 	  	sidepanelTimeout = setTimeout(function() {
 	   	navbarCollapse.classList.remove('animate-in');
 	}, 200);
 };


const dropdown = document.querySelector('.alternate.hidden-sidepanel.dropdown');
 		
 if (dropdown !== null) {
 		document.querySelector('.alternate.hidden-sidepanel.dropdown').addEventListener('click', function(e) {
 		e.stopPropagation();
 		e.target.classList.toggle('open');
 	});
 		document.body.addEventListener('click', function() {
 		document.querySelector('.alternate.hidden-sidepanel.dropdown').classList.remove('open');
 	});
 }
 	
 		document.addEventListener('scroll', function() {
 if (document.documentElement.scrollTop >= 30) {
 		document.querySelector('#js-navbar').classList.add('sticky');
 } else {
 		document.querySelector('#js-navbar').classList.remove('sticky');
 					
 		}
 });

 window.addEventListener('resize', function() {
 if (window.innerWidth > 991) {
 		_closeNavbar();
 	}
 });

/* Wait for DOM to fully load before executing*/
window.onload=function(){

document.querySelector('.navbar-toggle').addEventListener('click', function(e) {
if (e.target.classList.contains('collapsed')) {
 		_openNavbar();
 } else {
 		_closeNavbar();
 		}
 });
 if (document.documentElement.scrollTop >= 30) {
 		document.querySelector('#js-navbar').classList.add('sticky');
 };

}
