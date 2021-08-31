const fs = require('fs')
function openit(){
	if (document.getElementById('ID').value === ''){
		alert('There is currently no ID being supplied.')
	}else if(document.getElementById('ID').value === '0'){
		alert('An ID with the value of 0 is not allowed.')
		}else{
		fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err); 
		} else {
			let trueey;
			let number;
			obj = JSON.parse(data);

			for(let i in obj){
				if (obj[i][0] === document.getElementById('ID').value){
					number = i
					trueey = true
				}
			}
			if (trueey === true){
				document.getElementById('maintable').innerHTML = ""
				document.getElementById('mainin').innerHTML = ""
				document.getElementById('temp').innerHTML = ""
				document.getElementById('space').innerHTML = `
				<center>
				<input type="Number" style="visibility:hidden; height:0px;" id="hiddentb">
				<table style="background-color:transparent;">
					<tr>
						<td style="padding:10px; background-color:transparent;">
				<p style="color:white;">Student First Name</p>
				<input type="text" id="stfn" placeholder="Student First Name">
						</td>
						<td style="padding:10px; background-color:transparent;">
				<p style="color:white;">Student Last Name</p>
				<input type="text" id="stln" placeholder="Student Last Name">
						</td>
					</tr>
					<tr>
						<td style="padding:10px; background-color:transparent;">
				<p style="color:white;">Student Grade</p>
				<input type="Number" id="stg" placeholder="Student Grade">
						</td>
						<td style="padding:10px; background-color:transparent;">
				<p style="color:white;">Student ID</p>
				<input type="Number" id="stid" placeholder="Student ID">
						</td>
					</tr>
				</table>
				<br>

				<center>
					<div id="table" style="height:320px;">
						<div id="subtable1">
							<center>
								<table>
									<tr>
										<td style="padding-right:140px; background-color:black; color:white;">Hours Served</td>
										<td style="padding-left:0px; background-color:black; color:white;">Details</td>
									</tr>
								</table>
							</center>
						</div>
						<div id="subtable2" style="height:300px; overflow-y:scroll;">
							<table id="changet" style="border:hidden;">
							</table>
						</div>
					</div>
				</center>

				<br>
				<button style="margin-bottom: 50px;" onclick="saveitem();">Save</button>
				<button style="margin-bottom: 50px;" onclick="cancel()">Cancel</button>
				</center>
				`
				document.getElementById('stfn').value = obj[number][1]
				document.getElementById('stln').value = obj[number][2]
				document.getElementById('stid').value = obj[number][0]
				document.getElementById('stg').value = obj[number][3]
				document.getElementById('hiddentb').value = obj[number][0]
				for (let i in obj[number][5]){
					console.log(obj[number][5][i][0])
					console.log(obj[number][5][i][1])

					console.log(obj[number][0])
					

					/// Setup
					let y = document.createElement("INPUT");
				 	y.setAttribute("type", "number");
				 	y.setAttribute("value", obj[number][5][i][0]);
				 	y.setAttribute('class', 'inputshere')
				 	y.setAttribute("id", `fp${i}`)
				 	//y.disabled = true

					let x = document.createElement("TEXTAREA");
				 	x.setAttribute("type", "text");
				 	x.value = obj[number][5][i][1];
				 	x.setAttribute('class', 'txtareashere')
				 	x.setAttribute("id", `sp${i}`)
				 	
					///exicute

					let length = document.getElementById("changet").rows.length
					let row = document.getElementById("changet").insertRow(length)
					let cell1 = row.insertCell(0);
					let cell2 = row.insertCell(1);
					cell1.appendChild(y);
					cell2.appendChild(x);
					cell1.style.backgroundColor = "transparent"
					cell2.style.backgroundColor = "transparent"
					
				}
			}
			else{
				alert("There is no student with the current supplied ID.")
			}
		}})
	}
}

function cancel(){
		document.getElementById('space').innerHTML = ""
		document.getElementById('mainin').innerHTML = `
		<center>
			<input type="Number" id="ID" placeholder="Enter Student ID">
		</center>`
		document.getElementById('temp').innerHTML = `
		<center>
			<button onclick="openit();">Open Student</button>
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

		/*
	fetch('./data.json')
		.then(response => {
			return response.json()
		})
		.then(data => {
			// Work with JSON data here
			length = Object.keys(data).length;
			for(let key in data){
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
			alert("Something went wrong, try closing and reopening the page.")
			console.log(err)
		})*/
		fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err); 
		} else {
			obj = JSON.parse(data);
			length = Object.keys(obj).length;
			for(let key in obj){
			if (Number(key) === 0){
			}
			else{
				let length = document.getElementById("myTable").rows.length
				let row = document.getElementById("myTable").insertRow(length)
				let cell1 = row.insertCell(0);
				let cell2 = row.insertCell(1);
				let cell3 = row.insertCell(2);
				let cell4 = row.insertCell(3);
				cell1.innerHTML = obj[key][0];
				cell2.innerHTML = `${obj[key][1]} ${obj[key][2]}`;
				cell3.innerHTML = obj[key][3];
				cell4.innerHTML = obj[key][4];
				cell1.style.border = 'hidden'
				cell2.style.border = 'hidden'
				cell3.style.border = 'hidden'
				cell4.style.border = 'hidden'
				length2 = Number(key) + 1
			}
		}
	}})
}

function saveitem(){
	fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} else {
			let number;
			let trueey2;
			let object = JSON.parse(data);

			for (let y in object){
				if (object[y][0] === document.getElementById('hiddentb').value){
				}
				else{
					if (object[y][0] === document.getElementById('stid').value){
						trueey2 = true
					}
				}
			}
			console.log(document.getElementById('hiddentb').value)

			if (trueey2 === true){
				alert('The ID that is being supplied is already in use by a different account.')
			}
			else{
				for(let i in object){
					if (object[i][0] === document.getElementById('hiddentb').value){
						number = i
					}
				}
				console.log(object[number])
				object[number][1] = document.getElementById('stfn').value
				object[number][2] = document.getElementById('stln').value 
				object[number][0] = document.getElementById('stid').value 
				object[number][3] = document.getElementById('stg').value 

				console.log(object[number])
				let totserv = 0
				for (let i in object[number][5]){
					object[number][5][i][0] = Number(document.getElementById(String(`fp${i}`)).value)
					totserv += Number(document.getElementById(String(`fp${i}`)).value)
					object[number][5][i][1] = String(document.getElementById(String(`sp${i}`)).value)
					for (let y in object[number][6]){
						console.log("true")
						console.log(object[number][6][0][1])
						console.log(object[number][5][0][3])
						if (Number(object[number][6][y][2]) === Number(object[number][5][i][3])){
							console.log(object[number][6][y][2])
							object[number][6][y][0] = Number(document.getElementById(String(`fp${i}`)).value)
						}
					}
				}

				console.log(object[number][5])

				object[number][4] = totserv

				let JS = JSON.stringify(object); 
				//write it to data.json
				fs.writeFile('data.json', JS, 'utf8', callback); 
				function callback(err){
					console.log(err)
				}

				cancel()
			}
		}
	})

}