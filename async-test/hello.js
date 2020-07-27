const fs = require('mz/fs');

module.exports = async () => {
    let expression = await fs.readFile('./data.txt', 'utf-8');
    let fn = new Function('return ' + expression);
    let r = fn();
    console.log(`calculate: ${expression} = ${r}`);
    return r;
}