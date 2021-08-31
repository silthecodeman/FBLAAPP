//Start Main Window Functions
let length2 = 1
let fs = require('fs')


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
		console.log(length2)
		length2 = Number(key) + 1
	}}
  })
  .catch(err => {
    alert("Something went wrong, try reloading the page.")
  })

function oppen(){
	alert("WARNING: for the best results, use this program while using an internet connection.")
	let obj2
	fs.readFile('log.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} else {
			let run = false
			let obj2 = JSON.parse(data)
			let oldmonth = obj2[0]
			let month = new Date().getMonth() + 1
			let day = new Date().getDate()
			let year = new Date().getFullYear()
			let good = false

			if (obj2[0] !== month){
				
				
				console.log('yeet')
				//sendEmailalldata('NDAFBLADATABASE@gmail.com')
				for(let i in obj2[2]){
					console.log(obj2[2][i])
					sendEmailalldata(obj2[2][i], obj2[0])
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
			fs.writeFile('log.json', json2, 'utf8', function(err){console.log(err)})

		}
	})
}

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
	/*fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} else {
			let obj = JSON.parse(data)

			for (let i in obj){
				console.log('hello there')
				obj[i][6] = []
			}

			let json2 = JSON.stringify(obj)
			fs.writeFile('data.json', json2, 'utf8', function(err){console.log(err)})
		}
	})*/
}

function cancel(){
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById('b5').disabled = false;
	document.getElementById("emailbttn").disabled = false;
	document.getElementById('tb1').disabled = true;
	document.getElementById('tb2').disabled = true;
	document.getElementById('tb3').disabled = true;
	document.getElementById('tb4').disabled = true;
	document.getElementById('tb1').value = ''
	document.getElementById('tb2').value = ''
	document.getElementById('tb3').value = ''
	document.getElementById('tb4').value = ''
	document.getElementById("newb").innerHTML=''
}



let in1 = ""
let in2 = 0
let in3 = 0
let dict = {}

function submit(){
	let myInput1 = document.getElementById("tb1");
	let myInput2 = document.getElementById("tb2");
	let myInput3 = document.getElementById("tb3");
	let myInput4 = document.getElementById("tb4");
	let in1 = false;
	let in2 = false;
	let in3 = false;
	let in4 = false;
	if (myInput1 && myInput1.value){
		in1 = true;
	}
	if (myInput2 && myInput2.value){
		in2 = true;
	}
	if (myInput3 && myInput3.value){
		in3 = true;
	}
	if (myInput4 && myInput4.value){
		in4 = true;
	}
	if (in1 === true && in2 === true && in3 === true && in4 === true){
		in1 = document.getElementById('tb1').value
		in2 = document.getElementById('tb2').value
		in3 = document.getElementById('tb3').value
		in4 = document.getElementById('tb4').value

		let obj1 = {
	   		//table:[]
		};
		let truth = false;

		let json1 = JSON.stringify(obj1)

		fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
			if (err){
				console.log(err);
			} else {
			//open uploaded data
			obj1 = JSON.parse(data);
			let size = 0
			console.log(obj1)
			for(let i in obj1){
				console.log(obj1[i][0])
				if (obj1[i][0] === in3){
					truth = true
				}
				size = Number(i) + 1
			}



			if(in3 === "0"){
				alert("Entering an ID with the value of 0 is not allowed.")
			}
			else if (truth === true){
				alert("The ID that is being supplied is already in use by a different account.")
			}else{
				document.getElementById("b1").disabled = false;
				document.getElementById("b2").disabled = false;
				document.getElementById("b3").disabled = false;
				document.getElementById("b4").disabled = false;
				document.getElementById('b5').disabled = false;
				document.getElementById("emailbttn").disabled = false;
				document.getElementById('tb1').disabled = true;
				document.getElementById('tb2').disabled = true;
				document.getElementById('tb3').disabled = true;
				document.getElementById('tb4').disabled = true;
				document.getElementById('tb1').value = ''
				document.getElementById('tb2').value = ''
				document.getElementById('tb3').value = ''
				document.getElementById('tb4').value = ''
				document.getElementById("newb").innerHTML=""

				dict = {}
				console.log(length2)
				dict[size] = [in3, in1, in4, in2, 0, {},[]]
				console.log(dict)
				send2()
				console.log(length2)
				length2 += 1
				for (let key in dict){
					let length = document.getElementById("myTable").rows.length
					let row = document.getElementById("myTable").insertRow(length)
					let cell1 = row.insertCell(0);
					let cell2 = row.insertCell(1);
					let cell3 = row.insertCell(2);
					let cell4 = row.insertCell(3);
					cell1.innerHTML = dict[key][0];
					cell2.innerHTML = `${dict[key][1]} ${dict[key][2]}`;
					cell3.innerHTML = dict[key][3];
					cell4.innerHTML = dict[key][4];
				}
			}
		}})
	}else{
		let x = 0;
		if (in1 === false){
			x +=1
		}
		if (in2 === false){
			x +=1
		}
		if (in3 === false){
			x +=1
		}
		if (in4 === false){
			x += 1
		}
		alert(`There are ${x} input(s) not filled in.`)
	}
}

function totalchange(){
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById('b5').disabled = true;
	document.getElementById("emailbttn").disabled = true;
	document.getElementById('tb1').disabled = false;
	document.getElementById('tb2').disabled = false;
	document.getElementById('tb3').disabled = false;
	document.getElementById('tb4').disabled = false;
	document.getElementById("newb").innerHTML=`
	<button style="font-size: 24px; width:100px; font-size:14px; margin-right:30px; margin:20px;" onclick="submit()">Submit</button>
	<button style="font-size: 24px; width:100px; font-size:14px; margin-left:3s0px; margin:20px;" onclick="cancel();">Cancel</button>`
}

function send2(){
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
		//merge both objects
		let merged = {...obj, ...dict};
		console.log(obj)
		console.log(dict)
		console.log(merged)
		//convert it back to json
		json = JSON.stringify(merged); 
		//write it to data.json
		fs.writeFile('data.json', json, 'utf8', callback); 
		function callback(err){
			console.log(err)
		}
	}});
}

/*
function sendEmailalldata(person, olddate){
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

					}
				})


				
			}
*/

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

function adduser(user){
	let userhere = false;
	let atthere = false
	let dotthere = false
	if (user === ''){
		alert('Please enter an email.')
	}
	else{
	fs.readFile('log.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} 
		else {

			let obj = JSON.parse(data)
			let arrr = user.split("")
			for (let i in obj[2]){
				console.log(obj[2][i])
				if (obj[2][i] === String(user)){
					userhere = true
				}
				for (let y in arrr){
					if(arrr[y] === "@"){
					atthere = true
					}
				}
				for (let z in arrr){
					if(arrr[z] === "."){
					dotthere = true
					}
				}
			}
			console.log(userhere)
			console.log(atthere)
			console.log(dotthere)
			if(userhere === true){
				alert('The email supplied is already in the database.')
			}
			else if(atthere === false){
				alert("The email provided is not a valid email.")
			}
			else if(dotthere === false){
				alert("The email provided is not a valid email.")
			}
			else{
				obj[2].push(String(user))
				let json = JSON.stringify(obj)
				fs.writeFile('log.json', json, 'utf8', function(err){console.log(err)})
				cancelappend()
				alert('Email added to database.')
			}
		}
	})
}}

function appendcheck(){
	alert("WARNING: By adding an email, the owner of the email agrees to a life long subscribtion to recieve any and all possible emails containing user data from this database.")
	document.getElementById("appendemail").innerHTML=`
	<button style="font-size: 24px; width:100px; font-size:14px; margin-right:30px; margin:20px;" onclick="adduser(document.getElementById('email').value);">Submit</button>
	<button style="font-size: 24px; width:100px; font-size:14px; margin-left:3s0px; margin:20px;" onclick="cancelappend();">Cancel</button>`
	document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById('b5').disabled = true;
	document.getElementById('emailbttn').disabled = true;
	document.getElementById('email').disabled = false;
}

function cancelappend(){
	document.getElementById("appendemail").innerHTML=''
	document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById('b5').disabled = false;
	document.getElementById('emailbttn').disabled = false;
	document.getElementById('email').disabled = true;
	document.getElementById('email').value=''
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

// END MAIN WINDOW FUNCITONS




// START NEW WINDOW FUNCTIONS

function Delete() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600,resizable: false, webPreferences: {nodeIntegration: true}})

    win.loadURL(`file://${__dirname}/delete.html`)

                    
    document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById('b5').disabled = true;
	document.getElementById("emailbttn").disabled = true;


    win.on('closed', () => {
    win = null; 

    document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById('b5').disabled = false;
	document.getElementById("emailbttn").disabled = false;


    let totalRowCount = document.getElementById("myTable").rows.length - 1

    console.log(`totalRowCount = ${totalRowCount}`)

    for (let i = totalRowCount; i >= 0; i--){
        console.log(i)
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
				length2 = Number(key) + 1
			}}
		})
		.catch(err => {
			alert("Something went wrong, try reloading the page.")
		})
	});
}


function AddHours() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 700,resizable: false, webPreferences: {nodeIntegration: true}})

    win.loadURL(`file://${__dirname}/add.html`)

                    
    document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById('b5').disabled = true;
	document.getElementById("emailbttn").disabled = true;


    win.on('closed', () => {
    win = null; 

    document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById('b5').disabled = false;
	document.getElementById("emailbttn").disabled = false;


    let totalRowCount = document.getElementById("myTable").rows.length - 1

    console.log(`totalRowCount = ${totalRowCount}`)

    for (let i = totalRowCount; i >= 0; i--){
        console.log(i)
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
				length2 = Number(key) + 1
			}}
		})
		.catch(err => {
			alert("Something went wrong, try reloading the page.")
		})
	});
}


function View() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 600,resizable: false, webPreferences: {nodeIntegration: true}})

    win.loadURL(`file://${__dirname}/view.html`)

                    
    document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById('b5').disabled = true;
	document.getElementById("emailbttn").disabled = true;

    win.on('closed', () => {
    win = null; 

    document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById('b5').disabled = false;
	document.getElementById("emailbttn").disabled = false;


    let totalRowCount = document.getElementById("myTable").rows.length - 1

    console.log(`totalRowCount = ${totalRowCount}`)

    for (let i = totalRowCount; i >= 0; i--){
        console.log(i)
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
				length2 = Number(key) + 1
			}}
		})
		.catch(err => {
			alert("Something went wrong, try reloading the page.")
		})
	});
}


function Edit() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;

    var win = new BrowserWindow({ width: 800, height: 755,resizable: false, webPreferences: {nodeIntegration: true}})

    win.loadURL(`file://${__dirname}/edit.html`)

                    
    document.getElementById("b1").disabled = true;
	document.getElementById("b2").disabled = true;
	document.getElementById("b3").disabled = true;
	document.getElementById("b4").disabled = true;
	document.getElementById('b5').disabled = true;
	document.getElementById("emailbttn").disabled = true;

    win.on('closed', () => {
    win = null; 

    document.getElementById("b1").disabled = false;
	document.getElementById("b2").disabled = false;
	document.getElementById("b3").disabled = false;
	document.getElementById("b4").disabled = false;
	document.getElementById('b5').disabled = false;
	document.getElementById("emailbttn").disabled = false;


    let totalRowCount = document.getElementById("myTable").rows.length - 1

    console.log(`totalRowCount = ${totalRowCount}`)

    for (let i = totalRowCount; i >= 0; i--){
        console.log(i)
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
				length2 = Number(key) + 1
			}}
		})
		.catch(err => {
			alert("Something went wrong, try reloading the page.")
		})
	});
}



// END NEW WINDOW FUNCTIONS

window.onload = oppen