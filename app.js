var tasks = [];

var addBtn = document.getElementById("add-btn");
var input = document.getElementById("new-task");
var taskList = document.getElementById("task-list");
 var deleteAllBtn = document.getElementById("delete-all-btn");

addBtn.addEventListener("click", function () {
  var taskText = input.value;

  if (taskText === "") {
    alert("enter a task");
  } else {
    tasks.push(taskText);
    input.value = "";
    showTasks();
  }
});

function showTasks() {
  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    taskList.innerHTML += tasks[i]  +"<br>";
  }
}
deleteAllBtn.addEventListener("click", function () {
  if (tasks.length === 0) {
    alert("no tasks to delete");
  } else {
     tasks = [];
    showTasks();
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }
});