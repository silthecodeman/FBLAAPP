const fs = require('fs')
function move(){
	if (document.getElementById('ID').value === ''){
		alert('There is currently no ID being supplied.')
	}else if(document.getElementById('ID').value === '0'){
		alert('An ID with the value of 0 is not allowed.')
		console.log(document.getElementById('ID').value)
	}else{
		fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} else {

			let number;
			let trueey;
			obj = JSON.parse(data);
			console.log(obj)
			for(let i in obj){
				console.log(obj[i])
				console.log(i)
				if (obj[i][0] === document.getElementById('ID').value){
					console.log('hello')
					number = i
					trueey = true
				}
			}
			if (trueey === true){
			
			document.getElementById('new').innerHTML = `
			<div>
				<center>
					<p style="color:white;" id="IDE"></p>
					<p style="color:white;" id="Name"></p>
					<p style="color:white;" id="Grade"></p>
					<p style="color:white;" id="Hours"></p>
					<div id="maintable">
					<center>
						<div id="table">
							<div id="subtable1">
								<center>
									<table>
										<tr>
											<td style="background-color:black; color:white;">Hours Completed</td>
											<td style="background-color:black; color:white;">Details</td>
										</tr>
									</table>
								</center>
							</div>
							<div style="width:640px; height:180px; overflow-y:scroll;">
								<table id="newTable">
								</table>
							</div>
						</div>
					</center>
				</center>
			</div>
			`
			console.log(number)
			document.getElementById('IDE').innerHTML = `ID: ${obj[number][0]}`
			document.getElementById('Name').innerHTML = `Name: ${obj[number][1]} ${obj[number][2]}`
			document.getElementById('Grade').innerHTML = `Grade: ${obj[number][3]}`
			document.getElementById('Hours').innerHTML = `Hours Of Service: ${obj[number][4]}`
			for (let i in obj[number][5]){
				console.log(obj[number][5][i][0])
				let length = document.getElementById("newTable").rows.length
				let row = document.getElementById("newTable").insertRow(length)
				let cell1 = row.insertCell(0);
				let cell2 = row.insertCell(1);
				cell1.innerHTML = `<strong>${obj[number][5][i][0]}</strong> Hour(s) Recorded <br> Submited on: ${obj[number][5][i][2]}`;
				cell2.innerHTML = obj[number][5][i][1];
				length2 = Number(i) + 1
			}
			document.getElementById('maintable').innerHTML = ''
			document.getElementById('IDtwo').innerHTML = ''
			document.getElementById('temp').innerHTML = ''
			document.getElementById('newButton').innerHTML = `<center><button onclick="reset()">Done</button></center>`
			}else{
				alert('There is no student with the current supplied ID.')
			}
			
		}

	})
	}
}

function reset(){
	document.getElementById('new').innerHTML = ''
	document.getElementById('newButton').innerHTML = ''
	document.getElementById('temp').innerHTML = `
		<center>
			<button onclick="move()">View Student</button>
		</center>`
	document.getElementById('IDtwo').innerHTML = `
		<center>
			<input type="Number" id="ID" placeholder="Enter Student ID">
		</center>`
	document.getElementById('maintable').innerHTML = `
		<center>
			<div id="table">
				<div id="subtable1">
					<center>
						<table>
							<tr>
								<td style="background-color:black; color:white;">ID</td>
								<td style="background-color:black; color:white;">Name</td>
								<td style="background-color:black; color:white;">Grade</td>
								<td style="background-color:black; color:white;">Hours of Service</td>
							</tr>
						</table>
					</center>
				</div>
				<div id="subtable2" style="overflow-y:scroll;">
					<table id="myTable" style="border:hidden;">
					</table>
				</div>
			</div>
		</center>`
	fetch('./data.json')
		.then(response => {
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			length = Object.keys(data).length;
			for(let key in data){
			    console.log(key)
			    if (Number(key) === 0){
			}
			else{
				let length = document.getElementById("myTable").rows.length
				let row = document.getElementById("myTable").insertRow(length)
				let cell1 = row.insertCell(0);
				let cell2 = row.insertCell(1);
				let cell3 = row.insertCell(2);
				let cell4 = row.insertCell(3);
				cell1.innerHTML = data[key][0];
				cell2.innerHTML = `${data[key][1]} ${data[key][2]}`;
				cell3.innerHTML = data[key][3];
				cell4.innerHTML = data[key][4];
				cell1.style.border = 'hidden'
				cell2.style.border = 'hidden'
				cell3.style.border = 'hidden'
				cell4.style.border = 'hidden'
				length2 = Number(key) + 1
			}}
		})
		.catch(err => {
			alert("Something went wrong, try reloading the page.")
		})
}