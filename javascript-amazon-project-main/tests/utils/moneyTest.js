import {formatCurrency} from '../../scripts/utils/money.js';

describe('Test suite: formatCurrency', ()=>{
 it ('converts cents into dollars',()=>{
  expect(formatCurrency(2095)).toEqual('20.95');
 });

 it('works with 0',()=>{
  expect(formatCurrency(0)).toEqual('0.00');
 });

 it('rounds upto the neares cents',()=>{
  expect(formatCurrency(2000.4)).toEqual('20.00');
 });
});