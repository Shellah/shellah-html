// users Shellah & Chipo have a conversation

// const message1 = "Hi Chipo how are you doing?";
// const message2 = "Shellah, I am doing fine . how are you doing?";
// const message3 = "I'm doing great,were you able to do that course.";
// const message4 = "Yes but not yet done.";

const shellah ="Shellah";
const chipo ="Chipo";


sendMessage(shellah, "Hi Chipo how are you doing?")
sendMessage(chipo, "Hi Shellah, I am doing fine, how about you?")
sendMessage(shellah,"Doing good.Tell me a joke.")
sendMessage(chipo, "your face")
sendMessage(shellah, "what about it?")
sendMessage(shellah,"its a joke")

// short-way
function sendMessage(user, message,) {
   const timeStamp = getTimestamp(); 
    console.log(
        ` ${user}: ${message}
        ${timeStamp}` 
           )

           function getTimestamp() {
            const d = new Date();
            const timeStamp = d.getHours() + ":" + d.getMinutes(); 
return timeStamp;
           }

// long-way
// const log = ` ${user}: ${message}`
// console.log(log);
// return log;
}