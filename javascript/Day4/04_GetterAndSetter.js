//* Getter And Setter
const obj ={
    firstName : "John",
    secondName : "Ben",
    thirdName : "Mathew",
    get getFirstName(){
        return this.firstName;
    },
    set changeFirstName(name){
        this.firstName = name;
    },
    get getSecondName(){
        return this.secondName;
    },
    set changeSecondName(name){
        this.secondName = name;
    },
    get getThirdName(){
        return this.thirdName;
    },
    set changeThirdName(name){
        this.thirdName = name;
    }
};

obj.changeFirstName = "Tommy";
console.log(obj.getSecondName);

//* New Example
const personName = {
    fullName : "John Fitzgerald Kennedy",
    get firstName(){
        let parts = this.fullName.split(" ");
        return parts[0];
    },
    set changeFirstName(name){
        let parts = this.fullName.split(" ");
        this.fullName = name +" "+ parts.slice(1).join(" ");
    },
    get secondName(){
        let parts = this.fullName.split(" ");
        return parts[1];
    },
    set changeSecondName(name){
        let parts = this.fullName.split(" ");
        this.fullName = parts[0]+ " " + name+ " " + parts.slice(2).join(" ");
    },
    get thirdName(){
        let parts = this.fullName.split(" ");
        return parts[2];
    },
    set changeThirdName(name){
        let parts = this.fullName.split(" ");
        this.fullName = parts.slice(0,2).join(" ") +" " + name;
    },
}

console.log("Full Name : ",personName.fullName);
personName.changeFirstName = "Tommy";
personName.changeSecondName = "Jerry"
personName.changeThirdName = "Mathew"
console.log("Full Name : ",personName.fullName);

