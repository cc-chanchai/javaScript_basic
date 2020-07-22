let numberInput = document.getElementById('numberInput')
let showBtn = document.getElementById('showBtn')
let divOutput = document.getElementById('divOutput')

function printMultiply(){
    let number = numberInput.value
    let output = '<div class="card-header">สูตรคูณแม่ : ' + number + '</div>'
    
    if(number == ''){
        divOutput.innerHTML = '<div class="alert alert-warning" role="alert">'+
                                '<button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                                '<span aria-hidden="true">&times;</span>'+
                                '</button>ลองกรอกตัวเลขสิ!</div>'
    }
    else if(Number(number) === 0){
        divOutput.innerHTML = '<a class="btn btn-warning" href="https://www.youtube.com/watch?v=GmNVYZQgIEQ" target="_blank">'
                                +'ความพยายามกลายเป็นศูนย์</a>'
    }
    else{
        for(let i = 0; i <= 13; i++){
            if(i === 0){
                output += '<div class="card-body">'
            }
            else if(i >= 1 && i < 13){
                output += '<p>' + number + 'x' + i + '=' + (Number(number) * i) + '</p>'
            }
            else{
                output += '</div>'
            }
        }
        divOutput.innerHTML = output
    }
}
showBtn.addEventListener('click', printMultiply)