document.write('<br>')
document.write('<br>')
document.write('<br>')
document.write('<h2>Welcome to Our ATM Booth</h2><br>')
//Strart ATM Project


var rp = "RightPin";
var cw = "CashWithdrow";
var bl = "BalanceInquary";
var lo = "LogOut";
var ya ="PutYourAmount"
var bal = 15000;

if(rp == 'RightPin'){
	document.write('Your Pin Code Is Right!<br>');
	if(cw == 'CashWithdrow'){
		document.write('Are Your to Cash Withdae?<br>');
		if(bl == 'BalanceInquary'){
			document.write('Your Balance is 5000<br>');
			if(lo == 'LogOut'){
				document.write('Are You Sure to Log Out?<br>');
				if(bal = 500 || 5000 || 10000 || 15000){
					document.write('Total Amount is 500<br>');

					}else{
					document.write('Please Try Again Latter!');
				}


			}else{
				document.write('Please Try Again Latter!')
			}


		}else{
			document.write('Please Try Again Latter!');
		}


	}else{
		document.write('Please Try Again Latter!');
	}


}else{
	document.write('Please Enter Your Correct Pin Code');
}




//End ATM Project

document.write('<br>')
document.write('<br>')
document.write('<br>')
document.write('<h2>Student Resuit with if/else if</h2><br>')

//Student Resuit with if/else if


var result = 999;

if(result<=32){
	document.write('Failed');
}else if(result>=33 && result<=40){
	document.write('You have got GRADE-D');
}else if(result>=41 && result<=50){
	document.write('You have got GRADE-C');
}else if(result>=51 && result<=60){
	document.write('You have got GRADE-B');
}else if(result>=61 && result<=70){
	document.write('You have got GRADE-A-');
}else if(result>=70 && result<=80){
	document.write('You have got GRADE-A');
}else if(result>=80 && result<=90){
	document.write('You have got GRADE-A+');
}else if(result>=91 && result<=100){
	document.write('You have got GOLDEN');
}else{
	document.write('YOUR INPUT VALUE IS WRONG!!!')
}


document.write('<br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

document.write('<h2>JS Function- ODD</h2><br>');


// odd function

function odd_number(){
	var odd

	for(odd = 20; odd<=30; odd++){
		if(odd%2==1){
			document.write(odd, '<br>')
		}
	}
}odd_number();

//odd function

document.write('<br>')
document.write('<br>')




document.write('<h2>JS Function- EVEN</h2><br>');

//even function

function even_number(){

	var even;
	for(even = 20; even<=30; even++){
		if(even%2==0){
			document.write(even, '<br>')
		}
	}
}even_number();

//end even function

document.write('<br>')
document.write('<br>')


//document.write('<h2>JS Object</h2><br>');

//Objct

var bike = {name : "TVS", color : "Black", model :"Rider", price :"149000"}
document.getElementById('bike').innerHTML=bike.price;

document.write('<br>')
document.write('<br>')

document.write('<h2>JS Scope</h2><br>');

//scope

var x = 5;
var y =6;

function scope(){
	document.write(x*y);
}scope();

document.write("<br>", x-y)
document.write("<br>", x+y)
document.write("<br>", x/y)