import { capitalize } from '../src/capitalize.js';

if (capitalize('barabas') !== 'Barabas') {
  throw new Error('Функция работает неверно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно!');
}

console.log('Все тесты пройдены!');