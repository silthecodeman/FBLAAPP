function warn(){
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
			let truth = false;
			for(let i in obj){
				if (obj[i][0] === document.getElementById('ID').value){
					truth = true
				}
			}
			if (truth === true){
				document.getElementById('ID').disabled = true;
				document.getElementById('temp').style.visibility = 'hidden';
				document.getElementById('buttons').innerHTML = `
				<center>
				<button onclick="deletest()">DELETE</button>
				<button onclick="cancel()">Cancel</button>
				</center>`
				alert("If you are sure that you would like to delete this student, press 'DELETE'")
			}
			else{
				alert("There is no student with the current supplied ID.")
			}
		}
	}});
}

function deletest(){
	const fs = require('fs')
	let obj = {
	table:[]
	};

	let obj2 = {
	table:[]
	};

	let totalcount = 0
	let place = 0
	let list = []

	let json = JSON.stringify(obj)

	fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
		if (err){
			console.log(err);
		} else {
			//open uploaded data
			obj = JSON.parse(data);
			for (let i in obj){
				if (document.getElementById('ID').value === obj[i][0]){
					delete obj[i]; 
					place = totalcount - 1
				}
				totalcount++
			}
			document.getElementById("myTable").deleteRow(place);
			console.log(obj)
			json = JSON.stringify(obj); 
			//write it to data.json
			fs.writeFile('data.json', json, 'utf8', callback); 
			function callback(err){
				console.log(err)
			}

			document.getElementById('ID').value = '';
			document.getElementById('buttons').innerHTML = '';
			document.getElementById('temp').style.visibility = 'visible';
			document.getElementById('ID').disabled = false;
		}
	})

}

function cancel(){
	document.getElementById('buttons').innerHTML = '';
	document.getElementById('temp').style.visibility = 'visible';
	document.getElementById('ID').disabled = false;
}