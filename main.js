var timer;
		function startTimer() {
			document.getElementById('timer_info').style.display = 'block';
			document.getElementById('timer_started').innerHTML = "You started work at " + '<b>' + getTime_() + '</b>';
			document.getElementById('timer_finished').innerHTML = '';
			var timerDisp = document.getElementById('timer');
			timerDisp.innerHTML = "";
			var salary = document.getElementById('salary').value;
			// in milliseconds
			salary = salary / 3600;
			var currentAmount = 0;
			timer = setInterval(function() {
				currentAmount += salary;
				currentAmount_s = currentAmount + '';
				currentAmount_s = currentAmount_s.substring(0, 4);
				timerDisp.innerHTML = "You've made &pound;" + currentAmount_s;
			}, 1000);	
		}

		function stopTimer() {
			if(document.getElementById('timer_started').innerHTML == '') {
				return false;
			}
			document.getElementById('timer_info').style.display = 'none';
			window.clearInterval(timer);
			var a = document.getElementById('timer');
			var amount = a.innerHTML;
			a.innerHTML = '';

			document.getElementById('timer_finished').innerHTML = "You finshed work at " + '<b>' + getTime_() + '</b>' + " and made " + "<b>" + amount.substring(11, amount.length); + '</b>' //+ ":" + d.getSeconds();
		}

		function getTime_() {
			var d = new Date();
			var hours = d.getHours(), minutes = d.getMinutes(), seconds = d.getSeconds();
			if (hours < 10) {hours   = "0"+hours;}
    		if (minutes < 10) {minutes = "0"+minutes;}
    		if (seconds < 10) {seconds = "0"+seconds;}
    		var time = hours+':'+minutes+':'+seconds;
    		return time;
		}

		function isEmpty (a) {
			if(a == "") {
				console.log("empty");
				return false;
			} else {
				return true;
			}
		}

		function isNumber (a) {
			if(isNaN(a)) {
				console.log("empty");
				return false;
			} else {
				return true;
			}
		}

		function isPos (a) {
			if(a > 0) {
				return true;
			} else {
				return false;
			}
		}

		function isCorrectLength (a) {
			var num = a.toString();
			if(num.length > 10) {
				return false;
			} else {
				return true;
			}
		}

		function removeOverlay () {
			document.getElementById('overlay').style.opacity = '0';
			setTimeout(function() {
				document.getElementById('overlay').style.height = '0';
			}, 500);
		}

		function pressEnter (event) {
			if(event.keyCode == 13) {
				main();
			}
		}

		function main() {
			var salary = document.getElementById('salary').value;
			if(isEmpty(salary) && isCorrectLength(salary) && isNumber(salary) && isPos(salary)) {
				startTimer();
				document.getElementById('error').innerHTML = '';
			} else {
				document.getElementById('overlay').style.height = 'auto'; 
				document.getElementById('overlay').style.opacity = "1";
			}
		}