import antlr4 from 'antlr4';

export class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.huboError = false;
  }

  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    console.error(`❌ Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
    this.huboError = true;
  }
}