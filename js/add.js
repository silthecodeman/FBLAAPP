let number2;
const fs = require('fs')

function openstudent(){
	const fs = require('fs')
	let obj = {
	table:[]
	};

	let json = JSON.stringify(obj)

	fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} else {
		//open uploaded data
		obj = JSON.parse(data);
		if (document.getElementById('ID').value === ''){
			alert('There is currently no ID being supplied.')
		}else if(document.getElementById('ID').value === '0'){
			alert('An ID with the value of 0 is not allowed.')
		}
		else{
			let number = '';
			for(let i in obj){
				if (obj[i][0] === document.getElementById('ID').value){
					number = i
				}
			}
				if (number === ''){
					alert('There is no student with the current supplied ID.')
				}else{
				document.getElementById('ID').style.visibility = 'hidden'
				document.getElementById('temp').style.visibility = 'hidden'
				document.getElementById('ID').style.height = "0px"
				document.getElementById('tempbtn').style.height = "0px"
				document.getElementById('tempbtn').style.margin = "0px"
				document.getElementById('tempbtn').style.padding = "0px"
				document.getElementById('ID').style.margin = "0px"
				document.getElementById('ID').style.padding = "0px"
				document.getElementById('idly').style.margin = "0px"
				document.getElementById('print').innerHTML = `
				<p style="margin-top:20px; color:white; font-size:35px; font-weight:bold;" >There are currently ${obj[number][4]} hours logged</p>
				<input style="margin-top:20px;" type="Number" id="hours" placeholder="Add Amount of Hours">
				<textarea id='txtarea' placeholder="Enter Details. Ex: who, what where, when" style="margin-top:20px;"></textarea>
				<table>
					<tr>
						<td style="background-color:transparent;">
							<button onclick="AddHours()" style="font-size:24px; width:120px; font-size:14px"; >Add Hours</button>
						</td>
						<td style="background-color:transparent;">
							<button onclick="Cancel()" style="font-size:24px; width:120px; font-size:14px"; >Cancel</button>
						</td>
					</tr>
				</table>
				`
				}
			}
		}
	});
}

function Cancel(){
	document.getElementById('print').innerHTML = ""
	document.getElementById('ID').value = ''
	document.getElementById('ID').style.visibility = 'visible'
	document.getElementById('temp').style.visibility = 'visible'
	document.getElementById('ID').style.height = "44px"
	document.getElementById('ID').style.margin = "20px"
	document.getElementById("ID").style.marginTop = "30px";
	document.getElementById('ID').style.padding = "auto"
	document.getElementById('tempbtn').style.height = "auto"
	document.getElementById('tempbtn').style.margin = "auto"
	document.getElementById('tempbtn').style.padding = "15px 25px"
	document.getElementById('idly').style.margintop = "30px"
}

function AddHours(){
	if (document.getElementById('txtarea').value === '' || document.getElementById('hours').value === ''){
		alert('Not all inputs are filled.')
	}
	else{
		let day = new Date().getDate()
		let month = new Date().getMonth() + 1
		let year = new Date().getFullYear()
		let current_date = `${month} / ${day} / ${year}`
		let hours = document.getElementById('hours').value
		let description = document.getElementById('txtarea').value

		//cancel

		document.getElementById('print').innerHTML = ""
		document.getElementById('ID').style.visibility = 'visible'
		document.getElementById('temp').style.visibility = 'visible'
		document.getElementById('ID').style.height = "44px"
		document.getElementById('ID').style.margin = "20px"
		document.getElementById("ID").style.marginTop = "30px";
		document.getElementById('ID').style.padding = "auto"
		document.getElementById('tempbtn').style.height = "auto"
		document.getElementById('tempbtn').style.margin = "auto"
		document.getElementById('tempbtn').style.padding = "15px 25px"
		document.getElementById('idly').style.margintop = "30px"

		//cancel end

				let obj2
				fs.readFile('log.json', 'utf8', function readFileCallback(err, data){
					if (err){
						console.log(err);
					} 
					else {/*
						let lenny = 0
						obj2 = JSON.parse(data);
						for (let i in obj2[1]){
							console.log(i)
							lenny++
						}
						//open uploaded data

						obj2[1][lenny] = [Number(hours) ,name, current_date]
						month = new Date().getMonth() + 1
						if (obj2[0] === month){
							let json2 = JSON.stringify(obj2)
							fs.writeFile('log.json', json2, 'utf8', function(err){console.log(err)})
						}
						else{

							for(let i in obj2[2]){
								console.log(obj2[2][i])
								sendEmailalldata(obj2[2][i])
							}	
							sendLogData()

							obj2[0] = Number(month)
							obj2[1] = []
							let json2 = JSON.stringify(obj2)
							fs.writeFile('log.json', json2, 'utf8', function(err){console.log(err)})

						}*/
						let run = false
						let obj2 = JSON.parse(data)
						let month = new Date().getMonth() + 1
						let day = new Date().getDate()
						let year = new Date().getFullYear()
						let good = false

						if (obj2[0] !== month){
							
							
							console.log('yeet')
							//sendEmailalldata('NDAFBLADATABASE@gmail.com')
							for(let i in obj2[2]){
								console.log(obj2[2][i])
								sendEmailalldata(obj2[2][i])
							}
							sendLogData()


							
							good = true
							

						}
						if(good === true){
							obj2[0] = month
							extra()

						}
						
						console.log(obj2[1])
						let json2 = JSON.stringify(obj2)
						fs.writeFile('log.json', json2, 'utf8', function(err){finish(); console.log(err)})

					}
						
				})
const finish = () => {
		const fs = require('fs')
		let obj = {
		table:[]
		};
		let needed;
		fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
			if (err){
				console.log(err);
			} else {
				//open uploaded data
				obj = JSON.parse(data);
				for (let i in obj){
					if (obj[i][0] === document.getElementById('ID').value){
						needed = i
					}
				}
				let name = `${obj[needed][1]} ${obj[needed][2]}`
				obj[needed][4] += Number(hours)

				let tot = 0

				for (let i in obj[needed][5]){
					tot++
				}

				obj[needed][5][tot] = [Number(hours) ,description, current_date, Number(tot)]
				obj[needed][6].push([Number(hours), current_date, Number(tot)])

				//////////////////

				/////////////////
				json = JSON.stringify(obj); 
				console.log(json)

				//write it to data.json
				fs.writeFile('data.json', json, 'utf8', callback); 
				function callback(err){
				console.log(err)
				document.getElementById('ID').value=""

			    let totalRowCount = document.getElementById("myTable").rows.length - 1

			    for (let i = totalRowCount; i >= 0; i--){
			        document.getElementById("myTable").deleteRow(Number(i));
			    }

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
							length2 = Number(key) + 1
						}}
					})
					.catch(err => {
						console.log(err)
					})

				}
			}
		})}
	}
}
/*
function sendEmailalldata(person){
				console.log("first")
				fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
					if (err){
						console.log(err);
					} 
					else {
						let sucess = false
						let edata = JSON.parse(data)
						let datamonth = edata[0]
						let month = new Date().getMonth() + 1
						let day = new Date().getDate()
						let year = new Date().getFullYear()
						let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
						let putin = [];
						let list = []

						for(let i in edata){
							for (let y in edata[i][6]){
								list.push([`${edata[i][1]} ${edata[i][2]}`,edata[i][6][y][0], edata[i][6][y][1]])
							}
						}

						console.log(edata)
						for(let i in list){
							putin.push(`<tr><td>${list[i][0]}</td><td>${list[i][1]}</td><td>${list[i][2]}</td></tr>`)
							console.log(`is ${i}`)
						}
						
						putin.join()

						putin = eval('`'+putin+'`')
						const body = `<!DOCTYPE html>
								<html>
								<head>
									<style>
										td{
											padding:10px;
										}
										td, tr{
											border:solid black;
										}
										table{
											border-collapse:collapse;
										}
									</style>
								</head>
								<body>
									<h1>All Data for the month of ${String(months[Number(datamonth)])}</h1>
									<table id='newTable'>
										<tr>
											<td>Student Name</td>
											<td>Hours of Service Logged</td>
											<td>Date Logged</td>
										</tr>`
										+ putin +
									`</table>
								</body>
								</html>`
						console.log(edata[1])
						Email.send({
						Host: "smtp.gmail.com",
						Username : "NDAFBLADATABASE@gmail.com",
						Password : "sendanemail",
						To : String(person),
						From : "NDAFBLADATABASE@gmail.com",
						Subject : "Report",
						Body : body,
						}).then(
							message => console.log(message)
						);

					}
				})

			}
*/
function extra(){
	console.log('third')
	fs.readFile('log.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} else {
			let obj = JSON.parse(data)

			obj[1]=[]

			let json2 = JSON.stringify(obj)
			fs.writeFile('log.json', json2, 'utf8', function(err){console.log(err)})
		}
	})
}
/*
function sendLogData(){
	console.log("second")
	let fs = require("fs");
	fs.readFile('log.json', 'utf8', function readFileCallback(err, data2){
		if (err){
			console.log(err);
		} 
		else {
			let uploaded = JSON.parse(data2)
			let previous_month = uploaded[0]

	fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} 
		else {
			const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			let dataup = JSON.parse(data)
			let month = new Date().getMonth() + 1
			let day = new Date().getDate()
			let year = new Date().getFullYear()
			let date = `${month}-${day}-${year}`
			let list = []

			console.log('start')
			for(let i in dataup){
				for (let y in dataup[i][6]){
					list.push([`${dataup[i][1]} ${dataup[i][2]}`,dataup[i][6][y][0], dataup[i][6][y][1]])
				}
			}

			console.log(list)
			console.log(previous_month)
			let writeStream = fs.createWriteStream(`logs/Data_for_the_Month_of_${months[Number(previous_month)]}_${year}.txt`);
			writeStream.write("       Name          Hours Added          Date Added\n\n\n")
			for(let i in list){          
				writeStream.write(`${list[i][0]}          ${list[i][1]}          ${list[i][2]} \n`)
			}

			
			writeStream.end();

			//
			for (let i in dataup){
				console.log(dataup[i])
				dataup[i][6] = []
			}
			let json2 = JSON.stringify(dataup)
			fs.writeFile('data.json', json2, 'utf8', function(err){console.log(err)})

			//
		}
	})
		}
	})
}*/


function sendEmailalldata(person, olddate){

	fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {

						let sucess = false
						let edata = data
						let datamonth = edata[0]
						let month = new Date().getMonth() + 1
						let day = new Date().getDate()
						let year = new Date().getFullYear()
						let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
						let putin = [];
						let list = []

						for(let i in edata){
							for (let y in edata[i][6]){
								list.push([`${edata[i][1]} ${edata[i][2]}`,edata[i][6][y][0], edata[i][6][y][1]])
							}
						}

						console.log(edata)
						for(let i in list){
							putin.push(`<tr><td>${list[i][0]}</td><td>${list[i][1]}</td><td>${list[i][2]}</td></tr>`)
							console.log(`is ${i}`)
						}
						
						putin.join()

						putin = eval('`'+putin+'`')
						const body = `<!DOCTYPE html>
								<html>
								<head>
									<style>
										td{
											padding:10px;
										}
										td, tr{
											border:solid black;
										}
										table{
											border-collapse:collapse;
										}
									</style>
								</head>
								<body>
									<h1>All Data for the month of ${String(months[Number(olddate)-1])}</h1>
									<table id='newTable'>
										<tr>
											<td>Student Name</td>
											<td>Hours of Service Logged</td>
											<td>Date Logged</td>
										</tr>`
										+ putin +
									`</table>
								</body>
								</html>`
						console.log(edata[1])
						Email.send({
						Host: "smtp.gmail.com",
						Username : "NDAFBLADATABASE@gmail.com",
						Password : "sendanemail",
						To : String(person),
						From : "NDAFBLADATABASE@gmail.com",
						Subject : "Report",
						Body : body,
						}).then(
							message => console.log(message)
						);

					
				})


				
			}



function sendLogData(){

	fetch('./log.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    let uploaded = data
	let previous_month = uploaded[0]

fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			let dataup = data
			let month = new Date().getMonth() + 1
			let day = new Date().getDate()
			let year = new Date().getFullYear()
			let date = `${month}-${day}-${year}`
			let list = []

			console.log('start')
			for(let i in dataup){
				for (let y in dataup[i][6]){
					list.push([`${dataup[i][1]} ${dataup[i][2]}`,dataup[i][6][y][0], dataup[i][6][y][1]])
				}
			}

			console.log(list)
			console.log(previous_month)
			let writeStream = fs.createWriteStream(`logs/Data_for_the_Month_of_${months[Number(previous_month)]}_${year}.txt`);
			writeStream.write("       Name          Hours Added          Date Added\n\n\n")
			for(let i in list){          
				writeStream.write(`${list[i][0]}          ${list[i][1]}          ${list[i][2]} \n`)
			}

			
			writeStream.end();

			//
			for (let i in dataup){
				console.log(dataup[i])
				dataup[i][6] = []
			}
			let json2 = JSON.stringify(dataup)
			fs.writeFile('data.json', json2, 'utf8', function(err){console.log(err)})

			//
		
  })
  .catch(err => {
    console.log(err)
  })
  })
  .catch(err => {
    console.log(err)
  })
}
