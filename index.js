


function gradeGenerator(){
let mark = document.getElementById('mark')
let num = parseInt(mark.value)
    if(num>=79){
       grade = 'A'
    }else if(num>=60 && num<79){
       grade = 'B'
    }else if(num>=49 && num<59){
       grade = 'C'
    }else if(num>=40 && num<49){
       grade = 'D'
    }else if (num<40){
       grade = 'E'
    
    }
    console.log(grade)
    text.innerText = `${grade}`

}