// Generated from c:/Users/Usuario/Documents/GitHub/52127/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,19,97,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,5,0,22,8,0,10,0,12,0,25,9,0,
1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,3,3,39,8,3,1,4,4,4,42,8,
4,11,4,12,4,43,1,4,4,4,47,8,4,11,4,12,4,48,1,4,1,4,5,4,53,8,4,10,4,12,4,
56,9,4,3,4,58,8,4,1,5,1,5,1,6,4,6,63,8,6,11,6,12,6,64,1,7,1,7,1,7,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,78,8,7,3,7,80,8,7,1,8,1,8,1,8,1,8,1,8,1,8,
5,8,88,8,8,10,8,12,8,91,9,8,1,8,1,8,1,9,1,9,1,9,0,0,10,0,2,4,6,8,10,12,14,
16,18,0,2,1,0,9,16,2,0,2,2,8,8,98,0,23,1,0,0,0,2,26,1,0,0,0,4,32,1,0,0,0,
6,38,1,0,0,0,8,57,1,0,0,0,10,59,1,0,0,0,12,62,1,0,0,0,14,66,1,0,0,0,16,81,
1,0,0,0,18,94,1,0,0,0,20,22,3,2,1,0,21,20,1,0,0,0,22,25,1,0,0,0,23,21,1,
0,0,0,23,24,1,0,0,0,24,1,1,0,0,0,25,23,1,0,0,0,26,27,3,4,2,0,27,28,5,1,0,
0,28,29,3,10,5,0,29,30,3,6,3,0,30,31,3,18,9,0,31,3,1,0,0,0,32,33,7,0,0,0,
33,5,1,0,0,0,34,39,3,8,4,0,35,39,3,12,6,0,36,39,3,14,7,0,37,39,3,16,8,0,
38,34,1,0,0,0,38,35,1,0,0,0,38,36,1,0,0,0,38,37,1,0,0,0,39,7,1,0,0,0,40,
42,5,17,0,0,41,40,1,0,0,0,42,43,1,0,0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,58,
1,0,0,0,45,47,5,17,0,0,46,45,1,0,0,0,47,48,1,0,0,0,48,46,1,0,0,0,48,49,1,
0,0,0,49,50,1,0,0,0,50,54,3,10,5,0,51,53,3,8,4,0,52,51,1,0,0,0,53,56,1,0,
0,0,54,52,1,0,0,0,54,55,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,57,41,1,0,0,
0,57,46,1,0,0,0,58,9,1,0,0,0,59,60,7,1,0,0,60,11,1,0,0,0,61,63,5,18,0,0,
62,61,1,0,0,0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,13,1,0,0,0,66,
67,3,12,6,0,67,68,5,7,0,0,68,69,3,12,6,0,69,70,5,7,0,0,70,79,3,12,6,0,71,
72,3,10,5,0,72,73,3,12,6,0,73,74,5,1,0,0,74,77,3,12,6,0,75,76,5,1,0,0,76,
78,3,12,6,0,77,75,1,0,0,0,77,78,1,0,0,0,78,80,1,0,0,0,79,71,1,0,0,0,79,80,
1,0,0,0,80,15,1,0,0,0,81,82,5,6,0,0,82,89,3,8,4,0,83,84,5,3,0,0,84,85,3,
10,5,0,85,86,3,8,4,0,86,88,1,0,0,0,87,83,1,0,0,0,88,91,1,0,0,0,89,87,1,0,
0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,93,5,5,0,0,93,17,1,0,0,
0,94,95,5,4,0,0,95,19,1,0,0,0,10,23,38,43,48,54,57,64,77,79,89];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class analizadorParser extends antlr4.Parser {

    static grammarFileName = "analizador.g4";
    static literalNames = [ null, "':'", "'.'", "','", "';'", "']'", "'['", 
                            "'-'", "'\\u0020'", "'nombre'", "'tipo'", "'tama\\u00F1o'", 
                            "'creado'", "'modificado'", "'autor'", "'descripcion'", 
                            "'etiquetas'" ];
    static symbolicNames = [ null, "DOBLEPOINT", "POINT", "COMMA", "SEMI", 
                             "RCOR", "LCOR", "GUION", "SPACE", "NOMBRE", 
                             "TIPO", "TAMANIO", "CREADO", "MODIFICADO", 
                             "AUTOR", "DESC", "ETIQUETAS", "LETRA", "DIGITO", 
                             "WS" ];
    static ruleNames = [ "metadata", "campo", "nombreCampo", "valorCampo", 
                         "texto", "divisor", "num", "fecha", "listaTexto", 
                         "finCampo" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = analizadorParser.ruleNames;
        this.literalNames = analizadorParser.literalNames;
        this.symbolicNames = analizadorParser.symbolicNames;
    }



	metadata() {
	    let localctx = new MetadataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, analizadorParser.RULE_metadata);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 23;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 130560) !== 0)) {
	            this.state = 20;
	            this.campo();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, analizadorParser.RULE_campo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.nombreCampo();
	        this.state = 27;
	        this.match(analizadorParser.DOBLEPOINT);
	        this.state = 28;
	        this.divisor();
	        this.state = 29;
	        this.valorCampo();
	        this.state = 30;
	        this.finCampo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreCampo() {
	    let localctx = new NombreCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, analizadorParser.RULE_nombreCampo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 130560) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorCampo() {
	    let localctx = new ValorCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, analizadorParser.RULE_valorCampo);
	    try {
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 34;
	            this.texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 35;
	            this.num();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 36;
	            this.fecha();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 37;
	            this.listaTexto();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texto() {
	    let localctx = new TextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, analizadorParser.RULE_texto);
	    var _la = 0;
	    try {
	        this.state = 57;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 41; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 40;
	            		this.match(analizadorParser.LETRA);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 43; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 46; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 45;
	                this.match(analizadorParser.LETRA);
	                this.state = 48; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===17);
	            this.state = 50;
	            this.divisor();
	            this.state = 54;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 51;
	                    this.texto(); 
	                }
	                this.state = 56;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
	            }

	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	divisor() {
	    let localctx = new DivisorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_divisor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!(_la===2 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, analizadorParser.RULE_num);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 61;
	            this.match(analizadorParser.DIGITO);
	            this.state = 64; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===18);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fecha() {
	    let localctx = new FechaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, analizadorParser.RULE_fecha);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.num();
	        this.state = 67;
	        this.match(analizadorParser.GUION);
	        this.state = 68;
	        this.num();
	        this.state = 69;
	        this.match(analizadorParser.GUION);
	        this.state = 70;
	        this.num();
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2 || _la===8) {
	            this.state = 71;
	            this.divisor();
	            this.state = 72;
	            this.num();
	            this.state = 73;
	            this.match(analizadorParser.DOBLEPOINT);
	            this.state = 74;
	            this.num();
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 75;
	                this.match(analizadorParser.DOBLEPOINT);
	                this.state = 76;
	                this.num();
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listaTexto() {
	    let localctx = new ListaTextoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, analizadorParser.RULE_listaTexto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(analizadorParser.LCOR);
	        this.state = 82;
	        this.texto();
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 83;
	            this.match(analizadorParser.COMMA);
	            this.state = 84;
	            this.divisor();
	            this.state = 85;
	            this.texto();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(analizadorParser.RCOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finCampo() {
	    let localctx = new FinCampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, analizadorParser.RULE_finCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 94;
	        this.match(analizadorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

analizadorParser.EOF = antlr4.Token.EOF;
analizadorParser.DOBLEPOINT = 1;
analizadorParser.POINT = 2;
analizadorParser.COMMA = 3;
analizadorParser.SEMI = 4;
analizadorParser.RCOR = 5;
analizadorParser.LCOR = 6;
analizadorParser.GUION = 7;
analizadorParser.SPACE = 8;
analizadorParser.NOMBRE = 9;
analizadorParser.TIPO = 10;
analizadorParser.TAMANIO = 11;
analizadorParser.CREADO = 12;
analizadorParser.MODIFICADO = 13;
analizadorParser.AUTOR = 14;
analizadorParser.DESC = 15;
analizadorParser.ETIQUETAS = 16;
analizadorParser.LETRA = 17;
analizadorParser.DIGITO = 18;
analizadorParser.WS = 19;

analizadorParser.RULE_metadata = 0;
analizadorParser.RULE_campo = 1;
analizadorParser.RULE_nombreCampo = 2;
analizadorParser.RULE_valorCampo = 3;
analizadorParser.RULE_texto = 4;
analizadorParser.RULE_divisor = 5;
analizadorParser.RULE_num = 6;
analizadorParser.RULE_fecha = 7;
analizadorParser.RULE_listaTexto = 8;
analizadorParser.RULE_finCampo = 9;

class MetadataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_metadata;
    }

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterMetadata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitMetadata(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitMetadata(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_campo;
    }

	nombreCampo() {
	    return this.getTypedRuleContext(NombreCampoContext,0);
	};

	DOBLEPOINT() {
	    return this.getToken(analizadorParser.DOBLEPOINT, 0);
	};

	divisor() {
	    return this.getTypedRuleContext(DivisorContext,0);
	};

	valorCampo() {
	    return this.getTypedRuleContext(ValorCampoContext,0);
	};

	finCampo() {
	    return this.getTypedRuleContext(FinCampoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_nombreCampo;
    }

	NOMBRE() {
	    return this.getToken(analizadorParser.NOMBRE, 0);
	};

	TIPO() {
	    return this.getToken(analizadorParser.TIPO, 0);
	};

	TAMANIO() {
	    return this.getToken(analizadorParser.TAMANIO, 0);
	};

	CREADO() {
	    return this.getToken(analizadorParser.CREADO, 0);
	};

	MODIFICADO() {
	    return this.getToken(analizadorParser.MODIFICADO, 0);
	};

	AUTOR() {
	    return this.getToken(analizadorParser.AUTOR, 0);
	};

	DESC() {
	    return this.getToken(analizadorParser.DESC, 0);
	};

	ETIQUETAS() {
	    return this.getToken(analizadorParser.ETIQUETAS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNombreCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNombreCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNombreCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_valorCampo;
    }

	texto() {
	    return this.getTypedRuleContext(TextoContext,0);
	};

	num() {
	    return this.getTypedRuleContext(NumContext,0);
	};

	fecha() {
	    return this.getTypedRuleContext(FechaContext,0);
	};

	listaTexto() {
	    return this.getTypedRuleContext(ListaTextoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterValorCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitValorCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitValorCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_texto;
    }

	LETRA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.LETRA);
	    } else {
	        return this.getToken(analizadorParser.LETRA, i);
	    }
	};


	divisor() {
	    return this.getTypedRuleContext(DivisorContext,0);
	};

	texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextoContext);
	    } else {
	        return this.getTypedRuleContext(TextoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DivisorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_divisor;
    }

	SPACE() {
	    return this.getToken(analizadorParser.SPACE, 0);
	};

	POINT() {
	    return this.getToken(analizadorParser.POINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterDivisor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitDivisor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitDivisor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_num;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.DIGITO);
	    } else {
	        return this.getToken(analizadorParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FechaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_fecha;
    }

	num = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumContext);
	    } else {
	        return this.getTypedRuleContext(NumContext,i);
	    }
	};

	GUION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.GUION);
	    } else {
	        return this.getToken(analizadorParser.GUION, i);
	    }
	};


	divisor() {
	    return this.getTypedRuleContext(DivisorContext,0);
	};

	DOBLEPOINT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.DOBLEPOINT);
	    } else {
	        return this.getToken(analizadorParser.DOBLEPOINT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFecha(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFecha(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFecha(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListaTextoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_listaTexto;
    }

	LCOR() {
	    return this.getToken(analizadorParser.LCOR, 0);
	};

	texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TextoContext);
	    } else {
	        return this.getTypedRuleContext(TextoContext,i);
	    }
	};

	RCOR() {
	    return this.getToken(analizadorParser.RCOR, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.COMMA);
	    } else {
	        return this.getToken(analizadorParser.COMMA, i);
	    }
	};


	divisor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DivisorContext);
	    } else {
	        return this.getTypedRuleContext(DivisorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterListaTexto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitListaTexto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitListaTexto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FinCampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = analizadorParser.RULE_finCampo;
    }

	SEMI() {
	    return this.getToken(analizadorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.enterFinCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof analizadorListener ) {
	        listener.exitFinCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof analizadorVisitor ) {
	        return visitor.visitFinCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




analizadorParser.MetadataContext = MetadataContext; 
analizadorParser.CampoContext = CampoContext; 
analizadorParser.NombreCampoContext = NombreCampoContext; 
analizadorParser.ValorCampoContext = ValorCampoContext; 
analizadorParser.TextoContext = TextoContext; 
analizadorParser.DivisorContext = DivisorContext; 
analizadorParser.NumContext = NumContext; 
analizadorParser.FechaContext = FechaContext; 
analizadorParser.ListaTextoContext = ListaTextoContext; 
analizadorParser.FinCampoContext = FinCampoContext; 
