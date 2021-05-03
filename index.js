let fs = require('fs');

function processToFile(array, fileName, loadSize, installPath, options){
    let tempString = '';
    let numOfLoads = parseInt(array.length / loadSize);
    let currentLoadNum = 0;
    let install = `${installPath}/${fileName}.csv`;

    for(let m = 0; m <= numOfLoads; m++) {
        if(options.logs) {
            console.clear();
            console.log(`Load ${m} out of ${numOfLoads}`);
        }

        for (let i = 0+(currentLoadNum*loadSize); i <= parseInt((array.length/numOfLoads)+(currentLoadNum*loadSize)); i++) {
            if(array[i]){
                tempString = tempString + array[i]+'\n';
            }
        }
        currentLoadNum++;
        if(m === 0){
            fs.writeFile(install, tempString.toString(), err => {
                if (err) {
                    console.error(err)
                }
            })
        }
        else{
            fs.appendFile(install,tempString.toString(),err => {
                if (err) {
                    console.error(err)
                }
            });
        }
        tempString = 0;
    }

    if(options.logs) {
        console.clear();
        console.log(`File created at ${installPath}`);
    }

}



module.exports = { processToFile };
