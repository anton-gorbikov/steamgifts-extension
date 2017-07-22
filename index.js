// ==UserScript==
// @name         Steamgifts-extension
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  script for extending steamgifts.com UI.
// @author       Anton Gorbikov
// @match        https://www.steamgifts.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
	'use strict';

	const TEMPLATE = '' +
		'<div data-do="entry_insert" class="sidebar__entry-insert">' +
			'<i class="fa fa-plus-circle"></i>&nbsp;' +
			'<span>Enter Giveaway</span>'
		'</div>';
	const URL = 'ajax.php';

	function getToken() {
		return $('[name=xsrf_token]').first().val();
	}

	function removeExistingButtonHandlers() {
		$('.sidebar__entry-insert, .sidebar__entry-delete').off('click');
	}

	function appendButtons() {
		let elements = $('.giveaway__columns');

		elements.each(function() {
			let button = $(TEMPLATE)[0];
			this.append(button);
		});
	}

	removeExistingButtonHandlers();
	appendButtons();
})();
