import sayHello from '../utils/hello-josh.js';
import assert from 'assert';

it ('Test Hello World', ()=>{
    const hello= sayHello();
    assert.equal('hello', hello);
    
})

console.log('Function is returning: '+sayHello());