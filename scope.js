// 🌍 Global Scope (Accessible anywhere)
var globalVar = "I am a global var!";
let globalLet = "I am a global let!";
const globalConst = "I am a global const!";

console.log(globalVar);   
console.log(globalLet);   
console.log(globalConst); 

function testScope() {
    //  Function Scope (`var` is function-scoped)
    var functionVar = "I am a function var!";
    let functionLet = "I am a function let!";
    const functionConst = "I am a function const!";

    console.log(functionVar);   
    console.log(functionLet);   
    console.log(functionConst); 
}

testScope();

//  Block Scope (`let` & `const` are block-scoped)
if (true) {
    var blockVar = "I am a block var!";
    let blockLet = "I am a block let!";
    const blockConst = "I am a block const!";
    
    console.log(blockVar);   
    console.log(blockLet);   
    console.log(blockConst); 
}

