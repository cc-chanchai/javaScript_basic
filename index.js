//variable การตั้งชื่อควรสื่อความหมาย ใช้ camelCase
console.log('#variable');
let x = 2
console.log(x);
x=10
console.log(x);
let y = 3
let z = x + y
console.log('z = ' + z);

let text1 = 'Hello'
let text2 = 'World'
console.log(text1+text2);

let text = '10'
let number = 20
console.log(text + number);
console.log(Number(text) + number);

//operator 
//(+, - , * , / , **(degree), ++(+1), x+=10(x = x + 10))

// condition
console.log('#condition');
let score = 74
if(score >= 80){
    console.log('Grade A');
}
else if(score >= 75 && score <80){
    console.log('Grade B+');
}
else{
    console.log('Grade F')
}

//Loop
console.log('#Loop');

for(let i = 0; i < 6; i++){
    if(i === 1 )
        continue //โดดข้ามไปรอบถัดไป
    else if(i === 4)
        break   // หยุดการทำงานในลูป
    else
    console.log('i = ' + i);
}

let cars = new Array('Toyota','honda','mazda','nissan')
for(let car in cars) {
    console.log(car); //ได้ index
}
cars.forEach(car => {
    console.log(car); //ได้ value
});

for (const car of cars) {
    console.log(car); //ได้ value
}

//Function
console.log('#function');

function getFunction(number){
    // console.log('this is getFunction and get number ' + number);
    return 'this is getFunction and get number ' + number
}
getFunction(10)
getFunction(2)
let func1 = getFunction(3)
console.log(func1);

//HTML control
console.log('HTML control');
let content2 = document.getElementById('content-2')
let textHtml = '<b>content 2</b>'
textHtml += '<i>change</i>'
content2.innerHTML = textHtml

//Event
console.log('Event');
let btn = document.getElementById('btn')
let msg = document.getElementById('msg')

function showMessage(){
    msg.innerHTML = 'you click button'
}

btn.addEventListener('click', showMessage)