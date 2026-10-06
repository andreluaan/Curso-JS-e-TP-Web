// O JavaScript para de avaliar assim que já sabe o resultado

// AND (&&): se o primeiro for falso, retorna ele e para
console.log(false && "não executa"); // false
console.log(true && "executa");      // executa

// OR (||): se o primeiro for verdadeiro, retorna ele e para
console.log("Ana" || "Visitante");   // Ana
console.log("" || "Visitante");      // Visitante

// VALOR PADRÃO COM ||
const nome = "";
console.log(nome || "Sem nome"); // Sem nome

// EXECUTAR SOMENTE SE FOR VERDADEIRO COM &&
const logado = true;
logado && console.log("Bem-vindo!"); // Bem-vindo!

// ?? só usa o padrão se o valor for null ou undefined
const pontos = 0;
console.log(pontos || 10); // 10  (0 é falso)
console.log(pontos ?? 10); // 0   (0 é um valor válido)

// EVITA ERRO: o segundo lado nem é avaliado
const usuario = null;
console.log(usuario && usuario.nome); // null