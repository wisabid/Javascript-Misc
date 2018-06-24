console.log('Every file in node is a module and all variable & functions defined in a file/module is within the scope of that module. Infact those cannot be accessed from outside per se.');

console.log(module); //check console...also try this out : make a syntatical error (for eg : var x = ;)in the 1st line of a node file and run it. u wil notice that node is executing every file using a module wrapper function with params such as exports, require, module, __dirname, __filename etc





const logthemsg = require('./logger'); //use const for u not to change it anywer else, the value of variable


//logthemsg = 'Ábid';//uncomment this and use jshint for code check



logthemsg.logit('I wanna log this msg');
logthemsg.welcome('Alfie');



