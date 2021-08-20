let ele1 = document.querySelector("#input-task");
let li_tag = document.querySelector("ul");
let input_1 = document.querySelector("#add-task-button");
let val = 3;
let no = 0;
let taskList = {};
let check_no = 1;
//-----------------------------------------------------------------
// fetching data from local storage and calling function so that it remain stored on page reload
for (let i = 1; i<= localStorage.length;i++){
   taskList = localStorage.getItem("tags"+i) || [];
   if (Object.keys(taskList).length>0)
   {
      let get_tags = call_this(taskList);
      li_tag.appendChild(get_tags);
   }
}
//---------------------------------------------------------------------
input_1.addEventListener("click",function () {
   if (ele1.value !== '') {
      let tag = call_this(ele1.value);  // calling function
      li_tag.appendChild(tag);
      ele1.value = '';
   }
})
   //-------------------------------------------------------------------------
   // for deleting element
   const delete_1= document.querySelectorAll(".delete-btn");
   for (let i=0;i<delete_1.length;i++) {
      delete_1[i].addEventListener("click", function () {
         delete_1[i].parentElement.remove();
         del((i-2))
      })
   }
   //------------------------------------------------------------------------
function del(x){
   localStorage.removeItem("tags"+x);
}
//---------------------------------------------------------------------------
let check_1 = document.querySelector("input[type=checkbox]");
check_1.addEventListener("change", function (){
   check_1.checked = true;
})
//----------------------------------------------------------------------------

function call_this(v){
   val = val + 1;
   no = no + 1;
   const my_list = document.createElement("li");

   const input_tag = document.createElement("input");

   input_tag.setAttribute("type", "checkbox");
   input_tag.setAttribute("id", "ch" + val);
   my_list.appendChild(input_tag);

   //adding label inside my_list
   const label = document.createElement("label");
   label.setAttribute("for", "ch" + val);

   // adding span inside label
   const span = document.createElement("span");
   span.setAttribute("class", "task");
   const text = document.createTextNode(v);
   span.appendChild(text);
   my_list.appendChild(label);  // label appended inside list
   label.appendChild(span);     // span appended inside label

   // adding button inside my_list
   const button_1 = document.createElement("button");
   button_1.setAttribute("class", "delete-btn");
   const button_text = document.createTextNode("X");
   button_1.appendChild(button_text);
   my_list.appendChild(button_1);
   //-------------------------------------------------------------------
   // adding data to local storage
   localStorage.setItem("tags" + no, v);// here we passing whole list not one value why?
//---------------------------------------------------------------------------
return my_list;
}

