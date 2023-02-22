import inquirer from "inquirer";

type anstype = {

    userGuess : number
}

const systemGeneratedNo = Math.floor(Math.random()*10);
const answers : anstype = await inquirer.prompt([
    {

        type :"Number",
        name:"UserGuess",
        message:"write your guess:"

    }
])
 const {userGuess} = answers;

 
 
 if (userGuess === systemGeneratedNo) {
    console.log("Yeaaaa Your answer is correct");
    
 }else{

    console.log("Please try again");
    
 }console.log(answers.userGuess,"userGuess",systemGeneratedNo,"SYs");
 