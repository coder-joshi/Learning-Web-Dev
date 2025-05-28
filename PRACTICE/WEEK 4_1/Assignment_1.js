// const fs = require("fs")
// const { Command } = require('commander');

// const program = new Command()


// program
//     .name("counter")
//     .description('CLI to do file based tasks')
//     .version('1.0.0')

// program.command("count")
//     .description("Counting tool")
//     .argument("<file>","File to count words")
//     .action((file)=>{
//         fs.readFile(file,"utf-8",(err,data)=>{
//             if(err){
//                 console.log(err);
//             }else{
//                 const words_rn = data.split("\r\n").length
//                 const words = data.split(" ").length
//                 console.log((words+words_rn)-1)
//             }
//         })
//     })

// program.parse();

const fs = require("fs")
const {Command} = require ("commander")
const program = new Command()

program
    .name("Counter")
    .description("ClI to do basic tasks")
    .version("0.8.0")

// Code to print no of words

program
    .command("count_words <file>")
    .description("Counts no of words")
    .action((file)=>{
            fs.readFile(`${file}`,"utf-8",function(err,data){
                if (err) {
                    console.log(err)
                }
                const words = data.trim().split(/\s+/);
                console.log("Word count:", words.length);
            })
    })

// Code to print no of lines

program
    .command("count_lines <file>")
    .description("Counts no of lines")
    .action((file)=>{
            fs.readFile(`${file}`,"utf-8",function(err,data){
                if (err) {
                    console.log(err)
                }
                const lines = data.split("\n");
                console.log("No. of lines present are:", lines.length);
            })
    })

program
    .command("print_words <file>")
    .description("Prints the words in the file")
    .action((file)=>{
        fs.readFile(`${file}`,"utf-8",function (err,data){
            if(err){
                console.log(err)
            }else{
                words = data.split(" ")
                for (let i = 0; i < words.length; i++) {
                    console.log(words[i])
                    
                }
            }
        })
    }) 

program
    .command("print_this <text>")
    .description("Prints the words that you give")
    .action(()=>{
        a = process.argv;
        st = "";
        for (let i = 3; i < a.length; i++) {
            st += (a[i] + " ");
        }
        console.log(st)
    })


program.parse()