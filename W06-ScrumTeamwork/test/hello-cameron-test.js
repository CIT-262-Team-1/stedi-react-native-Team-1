import sayHello from '../utils/hello-cameron.js';
import assert from 'assert';

it ('Test Hello World', ()=>{
    const hello= sayHello();
    assert.equal('hello cameron', hello);
    
})

console.log('Function is returning: '+sayHello());