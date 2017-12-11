let pending = $("#pendingTasks ul")
let complete = $("#completeTasks ul")
let num = 0

let button = $("#addButton").click(function() {
  let numButton = `removeButton${num}`
  let numCheck = `taskCheck${num}`
  let task = document.getElementById("task")
  //adding task
  pending.append(`<div class="taskDiv"><li><input type="checkbox" id="${numCheck}">${task.value}<button id="${numButton}">Remove</button></li></div>`)

  let remove = $(`#${numButton}`).click(function() {
    this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)
  })

  //checking if checked
  let checkCheckNum = document.getElementById(`${numCheck}`)
  let checkCheck = checkCheckNum.addEventListener("click", function(){
    if(document.getElementById(`${numCheck}`).checked == true){
      let divCheck = this.parentElement.parentElement
      this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)
      complete.append(divCheck)
    }
    else if(document.getElementById(`${numCheck}`).checked == false){
      let divCheck = this.parentElement.parentElement
      this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement)
      pending.append(divCheck)
    }
  })

  //incrementer and something to clear the textbox.
  num += 1
  task.value = ""
})
