const {Command} = require("commander");
const fs = require("fs");
const program = new Command;

program
    .name("counter")
    .description("Basic CLI tool to do simple tasks")
    .version("0.8.0")

program.command("count_words")
    .description("Count number of words in the provided file")
    .argument("<file>","File from which to count")
    .action((file)=>{
        fs.readFile(`${file}`,"utf-8",function(err,data){
            if(err){
                console.log(err);
            }else{
                words = data.split(" ").length;
                console.log(words);
            }
        })
    })


function print_text(){
        a = process.argv ;   
        st = "" ;
        for (let i = 3; i < a.length; i++) {
            st = st+(a[i]+" ");
        }   
        console.log(st)
    }

program.command("print_text")
    .description("Prints the inputted text")
    // .argument("<file>","File from which to count")
    .action(print_text())

    

program.parse()