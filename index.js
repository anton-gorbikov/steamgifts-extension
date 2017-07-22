// ==UserScript==
// @name         Steamgifts-extension
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  script for extending steamgifts.com UI.
// @author       Anton Gorbikov
// @match        https://www.steamgifts.com/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const TEMPLATE = '' +
		'<div data-do="entry_insert" class="sidebar__entry-insert">' +
			'<i class="fa fa-plus-circle"></i>' +
			'Enter Giveaway' +
			'<span class="sidebar__entry__points"></span>' +
		'</div>';
	const URL = 'ajax.php';

	function getToken() {
		return $('[name=xsrf_token]').first().val();
	}

	function appendButtons() {
		let elements = $('.giveaway__columns');

		elements.each(function() {
			let button = $(TEMPLATE)[0];
			this.append(button);
		});
	}

	appendButtons();
})();