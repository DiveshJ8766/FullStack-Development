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
try{
    throw new Error("Number is Greater than 40");
}catch(error){
    console.log("Error Occured!!!!");
    if(no > 40){
        console.log("Number is too low");
    }else{
        throw new Error("This is type Error");
    }
}finally{
    console.log("This is Final Statement");
}