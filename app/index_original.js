import {addHeader, addParagraph} from './helpers';
import add, {multiply} from './add';

addHeader('This function is from a different file!');

addHeader(`54 + 67 = ${add(54, 67)}`);
addHeader(`10 x 10 = ${multiply(10, 10)}`);

addParagraph('This is a paragraph!');