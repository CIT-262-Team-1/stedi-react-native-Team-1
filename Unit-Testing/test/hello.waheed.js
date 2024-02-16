import sayHello from '../utils/utils.waheed.mjs';
import assert from 'assert';

it ('Test Hello Waheed', ()=>{
    const hello= sayHello();
    assert.equal('Waheed', hello);
    
})

console.log('Function is returning: '+sayHello());
