//* Error Handling

//? Undeclared Variable
// const b = "John Cena";
// try {
//     console.log(c);
// } catch (error) {
//     console.log("Error Occurred!!!");
//     console.error("Error : ", error);
// }

console.log(`\n""""""""""""""""""""""\n`);
//? No Error
// const a = "John Cena";
// try {
//     let b = 10 / 12;
//     console.log("Value of B : ",b)
// } catch (error) {
//     console.log("Error Occurred!!!");
//     console.error("Error : ", error);
// }

console.log(`\n""""""""""""""""""""""\n`);
//? Finally Keyword
// try {
//     run();
// } catch (error) {
//     console.log("Error Occurred!!!");
//     console.error("Error : ", error);
// }
// finally {
//     console.log("This is statement is Final so it is called Everytime");
// }


//? setTimeout
// try{
//     setTimeout(function(){
//         console.log(run());
//         console.log("Settimeout called !!!!");
//     },3000)
// }catch(error){
//     console.log(error);
// }

//? Right Way
// setTimeout(function(){
//     try{
//         console.log(run());
//     }catch(error){
//         console.log("Error : ",error);
//     }
// },3000)

//? Throw Error Custom Error
// try{
//     throw new Error("This is Error!!!!!");
// }catch(error){
//     console.log(error);
// }

//? DecodeURI error
// try{
//     decodeURI("%%%%");
//     throw new URIError("Uri is modified")
// }catch(error){
//     console.log(error)
// }

//? after throw statement Execution of code stopped
let no = 5;
// try {
//     if (no > 40) {
//         console.log("Number is greater than 40");
//     } else {
//         throw new Error("Number is too low");
//     }
// } catch (error) {
//     console.log("Error Caught!!!!!!!!!!");
//     console.log(error);
// }

//? rethrow errors
// try{
//     throw new Error("Number is Greater than 40");
// }catch(error){
//     console.log("Error Occured!!!!");
//     if(no > 40){
//         console.log("Number is too low");
//     }else{
//         throw new Error("This is type Error");
//     }
// }finally{
//     console.log("This is Final Statement");
// }


//? Check For Number
let x ="8";

try {
    if (x.trim() === "") {
        console.log("checked");
        throw "Empty";
    }
    else if (isNaN(x)) {
        console.log("Chekced 2");
        throw "Not a Number";
    }
    else if ( Number(x) > 5) {
        console.log("Checked 3")
        throw "is Greater than 5";
    }
    else if(Number(x) < 5) {
        console.log("Checked 4")
        throw "is less than 5";
    }
} catch (error) {
    console.log("Number : ", error);
} finally {
    console.log("This is finally statement!!!!");
}


// let person = {
//     firstName : "Divesh",
//     lastName : "Jadhav",
//     get getName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set setName(name){
//         if(typeof(name) !== 'string'){
//             throw new Error("You have Not sent an String Value");
//         }
//         let parts = name.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

//* Setting Person Name
// try{
//     person.setName = "New user";
//     console.log(person.getName);
// }catch(error){
//     console.log("Error : ",error.message);
// }


//* Setting Person Name to boolean value
// try{
//     person.setName = true;
// }catch(error){
//     console.log("Error : ",error.message);
// }
