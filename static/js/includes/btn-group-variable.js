/*
 * Copyright (C) 2017 ExE Boss
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
"use strict";
/* global Stream */

$(() => {
	let windowResized = () => {
		let isXS = $(window).innerWidth() < 576;
		$('.btn-group[data-vertical="<xs"], .btn-group-vertical[data-vertical="<xs"]').each((index, groupElement) => {
			if (isXS) {
				groupElement.classList.add("btn-group-vertical");
				groupElement.classList.remove("btn-group");
			} else {
				groupElement.classList.add("btn-group");
				groupElement.classList.remove("btn-group-vertical");
			}
		});
	};
	$(window).resize(windowResized);
	windowResized();
});