const button = document.querySelector("#generate");
function arrayToString(array){
    array = array.toString();
    array = array.replace(/\,/g,'');
    document.getElementById("password").placeholder=array
}

button.addEventListener("click",function(){
    const checkboxes = document.querySelectorAll('input[name="options"]:checked');
    const passwordLength = document.getElementById("numbers").value;
    const demand = [];

    checkboxes.forEach((checkbox)=>{
        demand.push(checkbox.value);
    });
    // console.log(demand);
    if(checkboxes.length===0){
        alert("Please check a box")
    }
    else{
        if(Number(passwordLength) >=8 && Number(passwordLength) <=128){
            console.log(demand)
            const number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
            let userInput = [];
            if(demand.includes("number")){
                console.log("number")
                userInput = userInput.concat(number)
                console.log(userInput)
            }
            if(demand.includes("lowercase")){
                console.log("lowercase")
                userInput = userInput.concat(lowercase)
                console.log(userInput)
            }
            if(demand.includes("uppercase")){
                console.log("uppercase")
                userInput = userInput.concat(uppercase)
                console.log(userInput)
            }
            if(demand.includes("specialcharacters")){
                console.log("specialcharacters")
                userInput = userInput.concat(specialCharacters)
                console.log(userInput)
            }
            if(userInput.length !== 0){
                const password = []
                for(let i = 0; i < passwordLength; i++){
                    const random = (userInput[(Math.floor(Math.random()*userInput.length))])
                    password.push(random)
                }
                arrayToString(password)
            }
        }
        else{
            alert("Please choose a number between 8-128")
        }
    }
})
