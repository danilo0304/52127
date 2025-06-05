import antlr4 from "antlr4";
import analizadorLexer from "./generated/analizadorLexer.js";
import analizadorParser from "./generated/analizadorParser.js";
import { CustomErrorListener } from "./CustomanalizadorListener.js";
import fs from "fs";

// Cargar entrada
const input = fs.readFileSync("./input.txt", "utf8");

// ------------------- Análisis Léxico ------------------- //
const chars = new antlr4.InputStream(input);
const lexer = new analizadorLexer(chars);

const lexErrorListener = new CustomErrorListener();
lexer.removeErrorListeners();
lexer.addErrorListener(lexErrorListener);

// Recolectar tokens
const allTokens = [];
let token = lexer.nextToken();
while (token.type !== antlr4.Token.EOF) {
  allTokens.push(token);
  token = lexer.nextToken();
}

// Mostrar tokens
const header = "| TOKEN             | LEXEMA             |";
const separator = "-".repeat(header.length);
console.log("\n" + separator);
console.log(header);
console.log(separator);

allTokens.forEach(token => {
  const tokenName = analizadorLexer.symbolicNames[token.type] || "UNKNOWN";
  const lexeme = token.text;
  const line = "| " + tokenName.padEnd(20) + "| " + lexeme.padEnd(20) + "|";
  console.log(line);
});
console.log(separator);

// Detener si hubo errores léxicos
if (lexErrorListener.huboError) {
  console.log("\n⚠️  El análisis se detuvo por errores léxicos. No se realizó el análisis sintáctico.");
  process.exit(1);
}

// ------------------- Análisis Sintáctico ------------------- //
const chars2 = new antlr4.InputStream(input);
const lexer2 = new analizadorLexer(chars2);
const tokens2 = new antlr4.CommonTokenStream(lexer2);
const parser = new analizadorParser(tokens2);

const parseErrorListener = new CustomErrorListener();
parser.removeErrorListeners();
parser.addErrorListener(parseErrorListener);

parser.buildParseTrees = true;
const tree = parser.metadata();

if (parseErrorListener.huboError) {
  console.log("\n❌ El análisis sintáctico terminó con errores.");
} else {
  console.log("\n✅ Análisis sintáctico exitoso.\n");
  console.log("Árbol de derivación:\n" + tree.toStringTree(parser.ruleNames) + "\n\r");
}
