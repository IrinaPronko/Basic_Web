function Grettings() {
    var name = prompt('Как вас зовут?');
    msg = `Привет, ${name}!!`;
    alert(msg);
    return msg;
};

var msg = ``;
Grettings();
console.log(msg);