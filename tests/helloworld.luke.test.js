import hello from "../utils/helloworld.luke.js";

it("Should say Luke",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Luke")
})