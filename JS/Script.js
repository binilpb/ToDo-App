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
            // var count=0
       
            ajax_json.forEach(element => {
                var title = element.title;
                var checkvalue=element.completed;
                // count += 1
                // var id= `checkbox${count}`               
				if(!checkvalue){
                TableString += `<tr><td><input type="checkbox" class="CheckBoxes"/><label>${title}</label></td></tr>`;
				}
                
              
              
            });
			TableString +='</tbody>'
            document.getElementById("ToDoTable").innerHTML=TableString;
			$(document).ready(function(){
				$('#ToDoTable').dataTable();
			});


            
			
		
		}
	};
	//* Step2 Instantiating the requests object
	xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
	//* Step3 Sending the request to the server
	xhttp.send();
}
getToDos();