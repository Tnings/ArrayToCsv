const csv = require('./index');

let array = [0,1,2,3,4,5];
csv.processToFile(array, 'Test',2,'./',{ logs:true });
