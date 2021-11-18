console.log("users: ", window.users);
console.log("todos: ", window.todos);

let message = ""
for (const user of users){
    message+= `User ID: ${user.id}, Name of User: ${user.name}, City of User ${user.address.city}\n`
}
alert(message)

let addID = Number(prompt(`Choose one the IDs given below: \n1,2,3,4,5,6,7,8,9,10`))

if(isNaN(addID)){
    alert("Wrong input, it must be a number")
if(addID!==1 || addID!==2 || addID!==3 || addID!==4 || addID!==5 || addID!==6 || addID!==7 || addID!==8 || addID!==9 || addID!==10){
alert("Wrong number")
    }
}
else{
let toDoTitles = ""
for(const item of todos){
    if(item.userId === addID)
    toDoTitles+= `To do : ${item['title']}\n`
}
alert(toDoTitles)
}

