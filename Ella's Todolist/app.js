let section = document.querySelector("section");
let add = document.querySelector("form button");
add.addEventListener("click", e => {
    // e先停止click作用
    e.preventDefault();
    //讓 e 得到foem裡面的M D Stuff的值,e本身>button>form>得到form物件裡面M D Stuff的值
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;

    //在section 增加<div class=todo> <p calss=text> <p calss=time>
    let todo =document.createElement("div");
    todo.classList.add("todo");
    let text =document.createElement("p");
    text.classList.add("text");
    text.innerText = todoText;
    let time =document.createElement("p");
    time.classList.add("time");
    time.innerText = todoMonth+"/"+todoDate;
    todo.appendChild(text);
    todo.appendChild(time);
    //做 check button
    let completeButton = document.createElement("button");
    completeButton.classList.add("complete");
    completeButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    //做completeButton 按下,div.todo即變為透明，先消除<iframe>的作用(在css)，因為iframe 層遞關係為iframe>button>div>section，但button只有三層，所以較方便設定
    completeButton.addEventListener("click",e =>{
        let todoitem = e.target.parentElement;
        todoitem.classList.toggle("done");
    })
    //做 trush button
    let trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    //做completeButton 按下,div.todo即變不見，先消除<iframe>的作用(在css)，因為iframe 層遞關係為iframe>button>div>section，但button只有三層，所以較方便設定
    trashButton.addEventListener("click",e =>{
     let todoitem = e.target.parentElement;
     todoitem.addEventListener("animationend", () =>{
         todoitem.remove();
     })
        todoitem.style.animation="scaleDown 0.3s forwards";
     })

    todo.appendChild(completeButton);
    todo.appendChild(trashButton);

    todo.style.animation = "scaleUp 0.2s forwards"

    section.appendChild(todo);
})