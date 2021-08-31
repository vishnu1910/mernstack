const inquirer=  require('inquirer')
inquirer.prompt([{
    type:'list',
    name:'icecream',
    message:'which is better',
    choices:['mango','caramel','vanilla','butterscotch','chocolate']
},
]).then(answers=>{
    console.info('Answer:', answers.icecream);
});