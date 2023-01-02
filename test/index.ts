/* eslint-disable no-console */
import path from 'path';

import a from './a';

console.log(path.basename(__dirname));
a();

const b = 1;

a();

console.log(b);
