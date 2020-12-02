var data = [];
let request = new XMLHttpRequest();
request.open("GET", "http://localhost:5000/", false);
request.send();

var data = JSON.parse(request.response);
console.log(data);
var task_input = {};
for(let key in data) {
  let val = data[key];
  if(val in task_input) {
    task_input[val].append(key);
  }
  else {
    task_input[val] = [key];
  }
}
console.log(task_input);

taskArray = [];
for(let key in task_input) {
  taskArray.push([key, task_input[key]]);
}
console.log(taskArray);

function buildTable(data){
		var table = document.getElementById('myTable')

		for (var i = 0; i < data.length; i++){
			var row = `<tr>
							<td>${data[i][0]}</td>
							<td>${data[i][1]}</td>
					  </tr>`
			table.innerHTML += row;
		}
	}
buildTable(taskArray)

// var task_card_string = "<div class=\"status-icon\"></div><p class=\"task-text\"><p class=\"task-status color-red\">Not-Started</p><ion-icon class=\"delete fs-large mg-10\" name=\"close-circle-outline\"></ion-icon>"
// var task_count = 4;
// updateTaskCount();
// eventSetter();
//
// function updateTaskCount(){
//     document.getElementById('task-left-count').innerHTML = task_count;
// }
// function eventSetter(){
//
//     var progress_buttons = document.getElementsByClassName('status-icon');
//     for(p of progress_buttons){
//         p.addEventListener('click', changeProgress);
//     }
//     var cards = document.getElementsByClassName('task-card');
//     console.log(cards);
//     for(let i=0;i<cards.length;i++){
//         console.log(cards[i]);
//         cards[i].addEventListener('mouseover', function(){
//             console.log(cards[i]);
//             cards[i].children[3].style.visibility="initial";
//         })
//         cards[i].addEventListener('mouseleave', function(){
//             console.log(cards[i].children[3].style.visibility);
//             cards[i].children[3].style.visibility="hidden";
//         })
//     }
// }
//
// add_button.addEventListener('click', function(){
//
//     //Adding the new task in the task container
//     var task_card = document.createElement('div');
//     task_card.innerHTML= task_card_string
//     task_card.setAttribute("class", "task-card not-started");
//     task_card.setAttribute("id", "t"+(++task_count));
//     task_container.appendChild(task_card);
//     let card_text = document.querySelector('#t' + task_count + " p");
//     let card_assignee = document.querySelector("p.task-status" + task_count);
//     card_text.innerHTML = taskArray[0][0];
//     task_input.value = "";
//
//     //Change Task Count
//    updateTaskCount();
//    eventSetter();
//
// })
//
// document.addEventListener("keydown", function (event){
//     var keyValue = event.key;
//     if(keyValue=="Enter"){
//          //Adding the new task in the task container
//     var task_card = document.createElement('div');
//     task_card.innerHTML= task_card_string
//     task_card.setAttribute("class", "task-card not-started");
//     task_card.setAttribute("id", "t"+(++task_count));
//     task_container.appendChild(task_card);
//     let card_text = document.querySelector('#t' + task_count + " p");
//     card_text.innerHTML = task_input.value;
//     task_input.value = "";
//
//     //Change Task Count
//    updateTaskCount();
//    eventSetter();
//     }
//
//   });
