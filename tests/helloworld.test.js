import hello from "../utils/hello.js";

it("Should say Luke",()=>{
    const helloString=hello();
    console.log(helloString);

    expect(helloString).toBe("Luke");
})