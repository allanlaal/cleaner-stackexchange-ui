// ==UserScript==
// @version     	2020-12-20.16
// @name        	Hide Stack Overflow Sidebar
// @description 	Hides room wasting/attention diverting sidebars on ALL SO/SE sites
// @namespace   	https://github.com/allanlaal/hide-stackexchange-sidebars
// @compatible      	firefox
// @compatible      	chrome
// @run-at          	document-start
// @grant        	none
// @homepageURL     	https://github.com/allanlaal/hide-stackexchange-sidebars
// @supportURL      	https://github.com/allanlaal/hide-stackexchange-sidebars/issues
// @contributionURL	https://github.com/allanlaal/hide-stackexchange-sidebars
// @author		Allan Laal
// @inspiration     	Machavity ( https://gist.github.com/machavity/420197ff9108e0b757c9bbb7d487f965 )
// @include    		/^https?:\/\/(.*\.)?stackexchange\.com/.*$/
// @include    		/^https?:\/\/(.*\.)?stackoverflow\.com/.*$/
// @include    		/^https?:\/\/stackoverflow\.com/.*$/
// @include    		/^https?:\/\/serverfault\.com/.*$/
// @include    		/^https?:\/\/superuser\.com/.*$/
// @include    		/^https?:\/\/askubuntu\.com/.*$/
// @include    		/^https?:\/\/stackapps\.com/.*$/
// @include    		/^https?:\/\/mathoverflow\.net/.*$/
// @include    		https://mathoverflow.net/questions/*
// @exclude 		*://chat.stackexchange.com/*
// ==/UserScript==

(function() {
	'use strict';
	
	// hide left sidebar: 
	document.getElementsByClassName('left-sidebar')[0].style.display = 'none'; // unpinned
	document.getElementsByClassName('left-sidebar')[1].style.display = 'none'; // pinned
	
	// hide right sidebar:
	document.getElementById('sidebar').style.display = 'none';
	
	// stretch main content area to use the extra room we just won:
	document.getElementById('mainbar').style = 'width: auto';
	
	// hide top Hero/spam banner:
	document.getElementsByClassName('js-dismissable-hero')[0].style.display = 'none'; 
	
	// hide cookie GDPR nag:
	document.getElementById('js-gdpr-consent-banner').style.display = 'none';
	
})();

