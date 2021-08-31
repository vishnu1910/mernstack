var fs = require('fs')
fs.open('mytext.txt','w',function(err,file){
    if(err) throw err;
    console.log('saved after write');
});

fs.writeFile('mytext.txt','welcome to the party',function(err,file){
    if (err) throw err;
    console.log('saved');
})

fs.appendFile('mytext.txt', ' no', function(err,file){
    if(err) throw err;
    console.log('saved')
});

