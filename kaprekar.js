const yargs = require('yargs');

const kaprekar_num = 6174;

const argv = yargs.command('knum', 'Calculate steps to Kaprekars Number from a starting point.', {
    num: {
        description: 'The starting number',
        alias: 'n',
        type: 'number'
    }
}).help()
.alias('help','h').argv;

if (argv._.includes('knum')) {
    var start = argv.num;
    let index = 0;

    let valid = start.toString().split('').filter((value, index, self) => self.indexOf(value) === index );
    if (valid.length > 1) {
        console.log('Starting: ' + start);

        while (start !== kaprekar_num) {
            index = index + 1;

            let msg = index + ': ';
            var first = start.toString();
            first = first.split('');

            while (first.length < 4) {
                first.unshift(0);
            }

            first = parseInt(first.sort().join(''));

            var second = start.toString();
            second = second.split('');

            while (second.length < 4) {
                second.push(0);
            }

            second = parseInt(second.sort().reverse().join(''));

            if (first >= second) {
                start = first - second;
                msg = msg + "(" + first + " - " + second +") ";
            }
            else {
                start = second - first;
                msg = msg + "(" + second + " - " + first +") ";
            }
            if (start === 0) {
                throw new Error('zero found');
            }
            console.log(msg + ' ' + start.toString().padStart(4,'0'));
        }
        console.log("Kaprekar's number found!");
    }
    else {
        console.log("Invalid starting number, must have at least 2 different digits.");
    }
}

