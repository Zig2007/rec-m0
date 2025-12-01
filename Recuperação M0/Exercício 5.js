let usuario = "leandro";
let senha = "1234";
let usuarioDigitado = "leandro";
let senhaDigitada = "";
let bloqueado = false;

let loginValido = usuarioDigitado === usuario && senhaDigitada !== "";
let podeAcessar = !bloqueado && loginValido;

let mensagemErro = senhaDigitada || "Senha não informada.";

console.log("Login válido?", loginValido);
console.log("Pode acessar?", podeAcessar);
console.log("Mensagem de erro:", mensagemErro);