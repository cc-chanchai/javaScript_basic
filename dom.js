let idhtml = document.getElementById('message-2')
idhtml.innerHTML = "it's time to change."

let classhtml = document.getElementsByClassName('message')
//  for(let i = 0; i < classhtml.length; i++){
//      classhtml[i].innerHTML = 'คิดแตไม่ถึง คิด คิด แต่ไม่ถึง'
//  }
for (let val of classhtml) {
    val.innerHTML = 'คิดแตไม่ถึง คิด คิด แต่ไม่ถึงเธอ'
}
//getElementBy ไม่สามารถใช้ forEach ได้

let queryClass = document.querySelectorAll('.message')
queryClass.forEach((value,index) => {
    value.innerHTML = 'querySelectorAll'
})

let queryClass1 = document.querySelector('.message') //การใช้ querySelector แบบไม่มี All จะเป็นการเรียกใช้ element ตัวแรกที่หาเจอ
queryClass1.innerHTML = 'คิดแตไม่ถึง คิด คิด แต่ไม่ถึงเธอ'

let query = document.querySelector('#message-3')
query.innerHTML = 'เธอช่างใจร้าย ฉันแค่โชคร้าย'


// Style
queryClass1.style.color = 'red'
queryClass1.style.backgroundColor = 'black'
queryClass1.style.fontSize = '25px'


let spoilBtn = document.querySelector('.spoilBtn')
let spoilText = document.querySelector('#spoilText')

spoilBtn.addEventListener('click', () => {
    //show-hide spoil text
    if(spoilText.style.display === 'none'){
        spoilText.style.display = 'block'
    }
    else{
        spoilText.style.display = 'none'
    }
})

//dom class
let lyric = document.querySelector('.lyric')
lyric.classList.add('black-box')
lyric.classList.remove('black-box')
lyric.classList.add('green-box')
lyric.classList.replace('green-box','orange-box')


//change theme
let body = document.body
let changeThemeBtn = document.querySelector('.changeThemeBtn')

changeThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
})