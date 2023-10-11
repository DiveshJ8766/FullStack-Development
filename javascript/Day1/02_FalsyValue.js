//* Fasly Values
//? undefined, null, 0,-0, '', ``, "", false, NaN, document.all

//* Turthy Values
//? [],{},function(){},'false','0',

if (-0) {
    console.log("Truthy Value :)");
} else {
    console.log("Falsy Value :(");
}


//* Comparsion of falsy and Truthy Values

if(true == 0){
    console.log("This is True Value...")
}else{
    console.log("This is False Value...");
}

// * switch Statement
let n =3;
switch (n) {
    case 1:
        console.log("Value is 1");
        break;

    case 2:
        console.log("Value is 2");
        break;

    case 3:
        console.log("Value is 3");
        break;

    default:
        console.log("This is Default statement");
        break;
}

//* for loop
let no;
no = prompt("Enter Number : ");

for(let num= 1;num <=10;num++){
    console.log(no+" * "+num+" = ",no*num);
}

//* While Loop
let i =1;

while(i<9){
    console.log(i);
    i++;
}

//* Do-while Loop
let num = 1;
do{
    console.log(num);
    num++;
}while(num < 9);


// 