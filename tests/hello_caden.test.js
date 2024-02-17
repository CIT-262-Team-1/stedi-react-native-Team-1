import hellome from '../utils/hellocaden.mjs';
import sayHello from '../utils/hellocaden.mjs';
import assert from 'assert';
it("Test Hello World", ()=>{
    const hello = hellome();
    // const failure_test = sayHello(2); Wanted to see what multiple tests did, mixing successes and failures.

    assert.equal(hello,"Hello Caden");
    // assert.equal(failure_test,"hello caden");

    console.log(hello);
});