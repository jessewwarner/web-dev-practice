function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

function Test(q) {
    this.msg = q;
}

Object.prototype.sayHello = function(){
    console.log("Hello, I'm a player!");
}

player1 = new Player("Jesse", 'X');
player2 = new Player("Steven", "O");
test1 = new Test("Testing");

test1.sayHello();
player1.sayHello();
