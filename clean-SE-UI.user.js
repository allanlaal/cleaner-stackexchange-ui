// ==UserScript==
// @version     	2020-12-21.8
// @name        	Cleaner UI for SE/SO sites
// @description 	Hides room wasting/attention diverting sidebars on ALL SO/SE sites
// @namespace   	https://github.com/allanlaal/hide-stackexchange-sidebars
// @compatible      	firefox
// @compatible      	chrome
// @run-at          	document-end
// @grant        	none
// @homepageURL     	https://github.com/allanlaal/hide-stackexchange-sidebars
// @supportURL      	https://github.com/allanlaal/hide-stackexchange-sidebars/issues
// @contributionURL	https://github.com/allanlaal/hide-stackexchange-sidebars
// @author		Allan Laal
// @inspiration     	Machavity ( https://gist.github.com/machavity/420197ff9108e0b757c9bbb7d487f965 )
// @include    		https://(.*\.)?stackexchange.com/*
// @include    		https://(.*\.)?stackoverflow.com/*
// @include    		https://stackoverflow.com/*
// @include    		https://serverfault.com/*
// @include    		https://superuser.com/*
// @include    		https://askubuntu.com/*
// @include    		https://stackapps.com/*
// @include    		https://mathoverflow.net/*
// @exclude 		*://chat.stackexchange.com/*
// ==/UserScript==

(function() {
    // jQuery already loaded in SE/SO

	jQuery('.left-sidebar').hide();

    jQuery('#sidebar').hide(); // right sidebar

	// stretch main content area to use the extra room we just won:
    jQuery('#mainbar').css('width', 'auto');

	// hide top Hero/spam banner:
    jQuery('.js-dismissable-hero').hide();

    jQuery('.js-gdpr-consent-banner').hide();
})();

