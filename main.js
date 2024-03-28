import inquirer from "inquirer";
function counter(Text) {
    let freeWhileSpase = Text.replace(/\s/g, "");
    return freeWhileSpase.length;
}
async function startCount(counter) {
    do {
        let result = await inquirer.prompt({
            type: "input",
            message: "write your text!",
            name: "text"
        });
        console.log(counter(result.text));
    } while (true);
}
startCount(counter);
