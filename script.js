'use strict';
const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';

//Set Date Input Minimum with Today's Date
const today = new Date().toISOString().split('T')[0];

dateEl.setAttribute('min', today);

//Take Values from Form input
function updateCountDown(e) {
	e.preventDefault();

	countdownTitle = e.srcElement[0].value;
	countdownDate = e.srcElement[1].value;
}

//Event Listener
countdownForm.addEventListener('submit', updateCountDown);
