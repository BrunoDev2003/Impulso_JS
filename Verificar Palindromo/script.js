
//primeira solução
function verificarPalindromo(string) {
    if(!string) return; 

    string.split("").reverse().join("") === string;
}