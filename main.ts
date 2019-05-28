import { fatorial } from './fatorial';
import * as yargs from 'yargs';
import { isNumber } from 'util';

const argv = yargs
            .option('num', { alias: 'n', type: 'number'})
            .check((argv) => {
                return isNumber(argv);
            })
            .argv;

let num: number = argv.num;

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`);