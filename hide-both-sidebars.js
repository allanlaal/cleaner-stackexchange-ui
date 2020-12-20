// ==UserScript==
// @version     	2020-12-20
// @name        	Hide Stack Overflow Sidebar
// @description 	Hides room wasting/attention diverting sidebars on ALL SO/SE sites

// @namespace   	https://github.com/allanlaal/hide-stackexchange-sidebars
// @compatible      	firefox
// @compatible      	chrome
// @run-at          	document-start
// @homepageURL     	https://github.com/allanlaal/hide-stackexchange-sidebars
// @supportURL      	https://github.com/allanlaal/hide-stackexchange-sidebars/issues
// @contributionURL	https://github.com/allanlaal/hide-stackexchange-sidebars
// @author      	inspiration: Machavity ( https://gist.github.com/machavity/420197ff9108e0b757c9bbb7d487f965 )
// @author		Allan Laal

// @include    		/^https?:\/\/(.*\.)?stackexchange\.com/.*$/
// run this code at https://stackexchange.com/sites?view=list to get list of custom SE/SO domains: 
// jQuery('.lv-info a').each(function() {if(jQuery(this).attr("href").indexOf(".stackexchange.com") == -1) console.log(jQuery(this).attr('href'))})
// @include    		/^https?:\/\/(.*\.)?stackoverflow\.com/.*$/
// @include    		/^https?:\/\/stackoverflow\.com/.*$/
// @include    		/^https?:\/\/serverfault\.com/.*$/
// @include    		/^https?:\/\/superuser\.com/.*$/
// @include    		/^https?:\/\/askubuntu\.com/.*$/
// @include    		/^https?:\/\/stackapps\.com/.*$/
// @include    		/^https?:\/\/mathoverflow\.com/.*$/
// @exclude 		*://chat.stackexchange.com/*
// ==/UserScript==

(function() {
	'use strict';
	
	document.getElementByClass('left-sidebar').style.display = 'none';
	document.getElementById('sidebar').style.display = 'none';
	document.getElementById('mainbar').style = 'width: auto';
})();

