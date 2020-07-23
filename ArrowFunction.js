function saySomething(){
    console.log('aaaa');
}

//Arrow function
let saySomething1 = () => {
    console.log('bbbb');
}
saySomething1()

//normal function
let sayHello = document.getElementById('say-hello')
sayHello.addEventListener('click',hello)

function hello(){
    console.log('Hello');
}

//arrow function
let sayArrow = document.getElementById('say-arrow')
sayArrow.addEventListener('click',() => {
    console.log('this is Arrow Function');
})