window.addEventListener('load', () => {
     const form = document.querySelector("#new-task-form");
     const input = document.querySelector("#new-task-input");
     const list_el = document.querySelector("#tasks");


     form.addEventListener("submit", (e) => {
          e.preventDefault()

          const task = input.value;

          const task_el = document.createElement("div")
          task_el.classList.add("task");


          const task_content_el = document.createElement("div")
          task_content_el.classList.add("content");

          task_el.appendChild(task_content_el)

          const task_input_el = document.createElement("h2")
          task_input_el.classList.add("text")
          task_input_el.innerText = task
          input.value = ""
          task_content_el.appendChild(task_input_el)

          const task_actions_el = document.createElement("div")
          task_actions_el.classList.add("actions")

          
          const checkbox = document.createElement("input")
          task_content_el.appendChild(checkbox)
          checkbox.classList.add("checkbox")

          

          const remove = document.createElement("button")
          remove.classList.add("remove")
          task_content_el.appendChild(remove)
          remove.innerHTML = "remove"
          
          remove.addEventListener("click", ()=>{
               task_content_el.style.display = "none"
          })

          

          remove.addEventListener('click', () => {
               task_input_el.display = none
          })




          // Asosiy del
          // Delete
          // const task_delete_el = document.createElement("button")
          // task_delete_el.innerText = "Del"
          // task_actions_el.appendChild(task_delete_el)

          // task_delete_el.addEventListener("click", (e)=>{
          //      list_el.removeChild(task_el)
          // })

          

          
          task_el.appendChild(task_actions_el)
          list_el.appendChild(task_el)
     })
})



