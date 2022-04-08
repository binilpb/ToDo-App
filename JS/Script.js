// var ul=document.getElementById("result")
// function getToDos(){
//     //xmlhttprequest object

//     var xhr = new XMLHttpRequest()
//     var url="https://jsonplaceholder.typicode.com/todos"
//     xhr.responseXML("GET", url,true)
//     xhr.onload =function(){
//         console.log(xhr.responseText)

//     }

//     //send the request

//     xhr.send()

// }

// getToDos();



function getToDos() {
	//* Step1 Creating XHR Object
	var xhttp = new XMLHttpRequest();
	//* Step4 Defining event listner for readystate change event
	xhttp.onreadystatechange = function() {
		//* Step5 Check if the request is complete and was succesfull
		if (this.readyState == 4 && this.status == 200) {
			//* Step6 Inserting the response from server into an html element
			var ajax_json = JSON.parse(this.responseText);
            var TableString='<thead> <tr>  			  <th>Current ToDos </th>			</tr>    </thead>  	  <tbody> ';
            var count=0
       
            ajax_json.forEach(element => {
                var title = element.title;
                var checkvalue=element.completed;
				var userID=element.userId;
                count += 1;
                var id= `CurrentToDocheckbox${count}`;               
				if(!checkvalue && userID==1 ){
                TableString += `<tr><td><input type="checkbox" id="${id}" class="CheckBoxes" onclick="CountTick()"><label for="${id}">${title}</label></td></tr>`;
				}
                
              
              
            });
			TableString +='</tbody>'
            document.getElementById("ToDoTable").innerHTML=TableString;


			// $(document).ready(function(){
			// 	$('#ToDoTable').dataTable();
			// });


            
			
		
		}
	};
	//* Step2 Instantiating the requests object
	xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
	//* Step3 Sending the request to the server
	xhttp.send();
}
getToDos();
function myAlert(message) {
	alert(message)
  }
  function myLog(log)
  {
	  console.log("Not 5")
  }
function CountTick(){

	
	  let myPromise = new Promise(function(myResolve, myReject) {
		  
			var table=document.getElementById("ToDoTable");
			var count=table.rows.length;
			let countTicked=0;
			let x=1;

		for(;x<count;x++){

			
			var id=`CurrentToDocheckbox${x}`; 		
			var checkBox=document.getElementById(id);
			
			
			if(checkBox==null){
				
				setTimeout(() => {
					if(checkBox.value==true){
						console.log("Tick");

						countTicked+=1;
					}
					else{
						console.log("No Tick");
					}

					
				}, 1);
			}
					
			else if(checkBox.value==true){
				console.log("Tick");

				countTicked+=1;
			}
			
			
			
			

			
			


		}
		console.log(`count =${countTicked} x=${x}`);
	
	  


		
		
		
	  
	
	  
		if (countTicked > 4) {
		  myResolve("5 or More Items Completed");
		} else {
		  myReject("Less Than 5");
		}
	  });
	  
	  myPromise.then(
		function(value) {myAlert(value);},
		function(error) {myLog(error);}
	  );

}

