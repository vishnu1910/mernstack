const inquirer = require('inquirer')
var questions = [
    {
        type: 'input',
        name: 'name',
        message: 'what are you?'
    }
]

inquirer.prompt(questions).then(answers =>
    {
        console.log(`hi ${answers['name']}!`)
    })