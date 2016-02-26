// for (var i = 0; i < document.forms.length; i++) {
// 	document.forms[i].addEventListener('submit', formHandler, false);
// }
//
// function formHandler(e) {
// 	e.preventDefault();
//
// 	var email = this.email.value;
// 	var xhr = new XMLHttpRequest();
// 	xhr.open('POST', 'http://api.bouncelytics.com/user/new_sign_up', true);
// 	xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
//
// 	// send the collected data as JSON
// 	xhr.send(JSON.stringify({email: email}));
//
// 	xhr.onloadend = function (res) {
// 		console.log(res);
// 	};
// }
