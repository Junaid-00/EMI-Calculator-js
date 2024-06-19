function ChangeAmt(){
    document.getElementById('lblAmt').value= document.getElementById('Amt').value 
   
}
function ChangeYear(){
    document.getElementById('lblYear').value = document.getElementById('Year').value
}

function ChangeInt(){
    document.getElementById('lblInt').value = document.getElementById('Int').value
}

function LblAmt(){
    document.getElementById('Amt').value = document.getElementById('lblAmt').value 
}
function LblYear(){
    document.getElementById('Year').value = document.getElementById('lblYear').value
} 

function LblInt(){
    document.getElementById('Int').value = document.getElementById('lblInt').value 
}

function CalculateClick(){
    var amount = document.getElementById('lblAmt').value
    var Interest = document.getElementById('lblInt').value
    var Year = document.getElementById('lblYear').value

    var p =amount;
    var rate = (Interest/12)/100
    var tenure = Year*12
    
    var Emi = (p*rate*Math.pow(1+rate,tenure))/(Math.pow(1+rate,tenure)-1) 

    document.getElementById('calculate').innerHTML = `Your Montly Emi will be &#8377; <b>${Math.round(Emi).toLocaleString('en-in', {style:'currency', currency:'INR'})}</b>`
}