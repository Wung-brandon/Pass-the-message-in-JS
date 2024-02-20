const deliveredHere = document.getElementById("delivered");
const message = document.getElementById("message");
const sendBtn = document.getElementById("send-btn");
const clearBtn = document.getElementById("clear-btn");

function sendMessage(){
    let text = message.value;
    if (text == ""){
        alert("Write a message to send!")
    }
    else{
        deliveredHere.innerHTML = text;
        message.value = "";
    }
    console.log(text)

    
    
}

function clearMessage(){
    message.value = "";
    deliveredHere.innerHTML = "";
}