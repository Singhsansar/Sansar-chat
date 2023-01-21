const name = prompt("Enter your Name to join")
const socket = io("http://localhost:8000")
const form = document.getElementById("sendmessage")
const message = document.getElementById('messageinp')
const container = document.querySelector(".messagesbox")
console.log(container.innerHTML)
socket.emit('new-user-joined', name)
var audio = new Audio("ting.mp3");

const append = (message, position) => {
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message;
    messageElement.classList.add('message')
    messageElement.classList.add(position)
    console.log(container)
    container.append(messageElement)

    if(position  ==='left')
    {
        audio.play();
    }

}

socket.on('user-joined', data => {
    append(`${data} joined the chat`, "right")

    console.log(data)

})

socket.on('receive', data => {

    append(`${data.name} : ${data.message} `, 'left')

})


socket.on('left', data => {
    // socket.broadcast.emit('left',{name:users[socket.id] ,message:message})
    // delete users[socket.id]
    append(`${data.name} has left the chat`)

})




form.addEventListener('submit', (e) => {
    e.preventDefault();// page will not bre reloaded 
    const messagedata = message.value
    append(`You:  ${messagedata}`, "right")
    socket.emit('send', messagedata);
    message.value = ""
})
