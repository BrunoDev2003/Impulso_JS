function CheckArray(arr,number) {
    try{
        if (!number && !arr) {
            throw new ReferenceError("envie os parametros necessarios");
        } 
        
        if (typeof arr === !object) {
            throw new TypeError("O tipo não é object");
        } 
        
        if (typeof number === !number) {
            throw new TypeError("O tipo não é number");
        }
    
        if(arr.length !== number) {
            throw RangedError("Tamanho Invalido");

        }
        return arr;
    }
    catch(err){
        if(err instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError");
            console.log(err.message);
        } else if (err instanceof TypeError) {
            console.log("Este erro é um TypeError");
            console.log(err.message);
        } else if (err instanceof RangedError) {
            console.log("Este erro é um RangedError");
            console.log(err.message);
        } else {
            console.log("este erro é de um tipo não esperado:" + err);
        }
    }
}

console.log(CheckArray([],2,3,4,5,6,45));