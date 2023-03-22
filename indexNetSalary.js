function calculateNetSalary(){
    let gross_salary = document.getElementById('salary')
    let taxRelief = parseInt(document.getElementById("personal_relief").value )+parseInt(document.getElementById("insurance_relief").value )
    let salary = parseInt(gross_salary.value)
    let text=document.getElementById('text')

   
   //taxable income =salary -nssf
   //nssf =salary*0.06 if less than 18000 || 1080 when greater than 18000
   let taxableIncome = 0
     if (salary<=18000){
         taxableIncome+=salary-(salary*0.06)
     }else{
         taxableIncome+=salary-1080
     }
   

    //calculate payee
    let payee = 0;
    if(salary<=24000){
        payee += taxableIncome * 0.1
    }
    else if(salary>24000 && salary<=32333){
        payee += taxableIncome * 0.25
    }
    else{
        payee += taxableIncome * 0.3
    }
    //calculate NHIF deduction
    let nhifDeduction = 0;
    if(salary <= 5999){
        nhifDeduction += 150
    }
    else if(salary>5999 && salary<=7999){
        nhifDeduction += 300
    }
    else if(salary>7999 && salary<=11999){
        nhifDeduction += 400
    }
    else if(salary>11999 && salary<=14999){
        nhifDeduction += 500
    }
    else if(salary>14999 && salary<=19999){
        nhifDeduction += 600
    }
    else if(salary>19999 && salary<=24999){
        nhifDeduction += 750
    }
    else if(salary>24999 && salary<=29999){
        nhifDeduction += 850
    }
    else if(salary>29999 && salary<=34999){
        nhifDeduction += 900
    }
    else if(salary>34999 && salary<=39999){
        nhifDeduction += 950
    }
    else if(salary>39999 && salary<=44999){
        nhifDeduction += 1000
    }
    else if(salary>44999 && salary<=49999){
        nhifDeduction += 1100
    }
    else if(salary>49999 && salary<=59999){
        nhifDeduction += 1200
    }
    else if(salary>59999 && salary<=69999){
        nhifDeduction += 1300
    }
    else if(salary>69999 && salary<=79999){
        nhifDeduction += 1400
    }
    else if(salary>79999 && salary<=89999){
        nhifDeduction += 1500
    }
    else if(salary>89999 && salary<=99999){
        nhifDeduction += 1600
    }
    else{
        nhifDeduction += 1700
    }
    let netTax = payee - taxRelief
    let totalDeductions = netTax + nhifDeduction
    let netSalary = salary - totalDeductions

    //display user net salary
    text.innerText=Math.floor(netSalary)

}
