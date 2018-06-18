// ==UserScript==
// @name			OCDark
// @namespace		https://github.com/L0Lock/OCDarkScript
// @updateURL		https://raw.githubusercontent.com/L0Lock/OCDarkScript/master/ocdarkscript.js
// @downloadURL		https://raw.githubusercontent.com/L0Lock/OCDarkScript/master/ocdarkscript.js
// @version			0.0.2
// @description		try to take over the world!
// @author			-L0Lock-
// @match			https://openclassrooms.com/*
// @grant			none
// ==/UserScript==

(function() {
	'use strict';

	var cssId = 'myCss'; // you could encode the css path itself to generate id..
	if (!document.getElementById(cssId))
	{
		var head = document.getElementsByTagName('head')[0];
		var link = document.createElement('link');
		link.id = cssId;
		link.rel = 'stylesheet';
		link.type = 'text/html';
		link.href = 'https://raw.githubusercontent.com/L0Lock/OCDarkScript/master/ocdark.css';
		link.onload = function() { resolve(); console.log('style has loaded'); };
		link.media = 'all';
		head.appendChild(link);
	}
})();
