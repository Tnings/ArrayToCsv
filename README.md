# ArrayToCsvBalanced

ArrayToCsvBalanced is a very lightweight package that given an array generates a csv file in a specified directory.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install.

```bash
npm install arraytocsvbalanced
```

## Usage

```javascript
const ArrayToCsv = require('arraytocsvbalanced');


let options = { logs:true };
ArrayToCsv.processToFile(yourArray, fileName, loadSize, installPath, options);
```

```javascript
const ArrayToCsv = require('arraytocsvbalanced');


let options = { logs:true };
ArrayToCsv.processToFile([0,0,0,1,2,10,111,400,10], 'myFile', 3, './', { logs:true });
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
