const command = require('commander')
const fs = require('mz/fs')

//Read file and determine current number of contacts.
const content = fs.readFileSync('my_contacts.txt', 'utf8').toString().split("\n")
let count = 0

for (var i = 0; i < content.length; i++) {
    if (content[i].includes('Last Name: ')) {
        count = count + 1
    }
}

command.description('Contact Management System\nTotal number of contacts: ' + count + '\nAdd new contact\n' +
                     'If an optional field is not necessary please mark it with an "x".\n' +
                     'Example: node index.js a John x Doe 123 NW Street Dr x Anycity CA 90210 x x x x x x x x 555-555-5555')
       .command('newContact <firstname> [middlename] <lastname> <addr1num> [addr1carddirec] <addr1street> [addr1streettype] [addr1aptnum] <addr1city> <addr1state> <addr1zip> [addr2num] [addr2carddirec] [addr2street] [addr2streettype] [addr2aptnum] [addr2city] [arr2state] [addr2zip] [phone]')
       .alias('a')
       .action((firstname, middlename, lastname, addr1num, addr1carddirec, addr1street, addr1streettype, addr1aptnum, addr1city, addr1state, addr1zip, addr2num, addr2carddirec, addr2street, addr2streettype, addr2aptnum, addr2city, addr2state, addr2zip, phone) => {
        let contact = 'First Name: ' + firstname + '\n' + 
                      'Middle Name: ' + middlename + '\n' + 
                      'Last Name: ' + lastname + '\n' + 
                      'Address 1\n' + 
                      'Number: ' + addr1num + '\n' +
                      'Direction: ' + addr1carddirec + '\n' +
                      'Street: ' + addr1street + '\n' +
                      'Street Type: ' + addr1streettype + '\n' + 
                      'Apt#: ' + addr1aptnum + '\n' +
                      'City: ' + addr1city + '\n' +
                      'State: ' + addr1state +'\n' +
                      'Zip: ' + addr1zip + '\n' +
                      'Address 2\n' + 
                      'Number: ' + addr2num + '\n' +
                      'Direction: ' + addr2carddirec + '\n' +
                      'Street: ' + addr2street + '\n' +
                      'Street Type: ' + addr2streettype + '\n' + 
                      'Apt#: ' + addr2aptnum + '\n' +
                      'City: ' + addr2city + '\n' +
                      'State: ' + addr2state +'\n' +
                      'Zip: ' + addr2zip + '\n' +
                      'Telephone Number: ' + phone + '\n\n'
         fs.appendFile('my_contacts.txt', contact, function(err) {
             if (err) {
                 return console.log(err)
             } else {
                 count = count + 1
                 console.log('Your contact was saved! You know have ' + count + ' contacts!')
             }
         })  
       })

command.parse(process.argv)