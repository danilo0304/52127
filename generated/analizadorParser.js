// Generated from c:/Users/Usuario/Desktop/52127/analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import analizadorListener from './analizadorListener.js';
import analizadorVisitor from './analizadorVisitor.js';

const serializedATN = [4,1,19,91,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,3,3,37,8,3,1,4,4,4,40,8,4,11,4,12,
4,41,1,4,3,4,45,8,4,1,4,4,4,48,8,4,11,4,12,4,49,5,4,52,8,4,10,4,12,4,55,
9,4,1,5,4,5,58,8,5,11,5,12,5,59,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,3,6,73,8,6,3,6,75,8,6,1,7,1,7,1,7,1,7,1,7,5,7,82,8,7,10,7,12,7,85,9,
7,1,7,1,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,2,1,0,9,16,2,0,2,2,8,
8,93,0,21,1,0,0,0,2,24,1,0,0,0,4,30,1,0,0,0,6,36,1,0,0,0,8,39,1,0,0,0,10,
57,1,0,0,0,12,61,1,0,0,0,14,76,1,0,0,0,16,88,1,0,0,0,18,20,3,2,1,0,19,18,
1,0,0,0,20,23,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,
0,0,24,25,3,4,2,0,25,26,5,1,0,0,26,27,5,8,0,0,27,28,3,6,3,0,28,29,3,16,8,
0,29,3,1,0,0,0,30,31,7,0,0,0,31,5,1,0,0,0,32,37,3,8,4,0,33,37,3,10,5,0,34,
37,3,12,6,0,35,37,3,14,7,0,36,32,1,0,0,0,36,33,1,0,0,0,36,34,1,0,0,0,36,
35,1,0,0,0,37,7,1,0,0,0,38,40,5,17,0,0,39,38,1,0,0,0,40,41,1,0,0,0,41,39,
1,0,0,0,41,42,1,0,0,0,42,53,1,0,0,0,43,45,7,1,0,0,44,43,1,0,0,0,44,45,1,
0,0,0,45,47,1,0,0,0,46,48,5,17,0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,47,1,0,
0,0,49,50,1,0,0,0,50,52,1,0,0,0,51,44,1,0,0,0,52,55,1,0,0,0,53,51,1,0,0,
0,53,54,1,0,0,0,54,9,1,0,0,0,55,53,1,0,0,0,56,58,5,18,0,0,57,56,1,0,0,0,
58,59,1,0,0,0,59,57,1,0,0,0,59,60,1,0,0,0,60,11,1,0,0,0,61,62,3,10,5,0,62,
63,5,7,0,0,63,64,3,10,5,0,64,65,5,7,0,0,65,74,3,10,5,0,66,67,5,8,0,0,67,
68,3,10,5,0,68,69,5,1,0,0,69,72,3,10,5,0,70,71,5,1,0,0,71,73,3,10,5,0,72,
70,1,0,0,0,72,73,1,0,0,0,73,75,1,0,0,0,74,66,1,0,0,0,74,75,1,0,0,0,75,13,
1,0,0,0,76,77,5,6,0,0,77,83,3,8,4,0,78,79,5,3,0,0,79,80,5,8,0,0,80,82,3,
8,4,0,81,78,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,0,
0,0,85,83,1,0,0,0,86,87,5,5,0,0,87,15,1,0,0,0,88,89,5,4,0,0,89,17,1,0,0,
0,10,21,36,41,44,49,53,59,72,74,83];


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
                         "texto", "num", "fecha", "listaTexto", "finCampo" ];

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
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 130560) !== 0)) {
	            this.state = 18;
	            this.campo();
	            this.state = 23;
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
	        this.state = 24;
	        this.nombreCampo();
	        this.state = 25;
	        this.match(analizadorParser.DOBLEPOINT);
	        this.state = 26;
	        this.match(analizadorParser.SPACE);
	        this.state = 27;
	        this.valorCampo();
	        this.state = 28;
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
	        this.state = 30;
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
	        this.state = 36;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 32;
	            this.texto();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 33;
	            this.num();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 34;
	            this.fecha();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 35;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 38;
	        		this.match(analizadorParser.LETRA);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 41; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 53;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 131332) !== 0)) {
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2 || _la===8) {
	                this.state = 43;
	                _la = this._input.LA(1);
	                if(!(_la===2 || _la===8)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 47; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 46;
	            		this.match(analizadorParser.LETRA);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 49; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 55;
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



	num() {
	    let localctx = new NumContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, analizadorParser.RULE_num);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 56;
	            this.match(analizadorParser.DIGITO);
	            this.state = 59; 
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
	    this.enterRule(localctx, 12, analizadorParser.RULE_fecha);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.num();
	        this.state = 62;
	        this.match(analizadorParser.GUION);
	        this.state = 63;
	        this.num();
	        this.state = 64;
	        this.match(analizadorParser.GUION);
	        this.state = 65;
	        this.num();
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 66;
	            this.match(analizadorParser.SPACE);
	            this.state = 67;
	            this.num();
	            this.state = 68;
	            this.match(analizadorParser.DOBLEPOINT);
	            this.state = 69;
	            this.num();
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1) {
	                this.state = 70;
	                this.match(analizadorParser.DOBLEPOINT);
	                this.state = 71;
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
	    this.enterRule(localctx, 14, analizadorParser.RULE_listaTexto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(analizadorParser.LCOR);
	        this.state = 77;
	        this.texto();
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 78;
	            this.match(analizadorParser.COMMA);
	            this.state = 79;
	            this.match(analizadorParser.SPACE);
	            this.state = 80;
	            this.texto();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
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
	    this.enterRule(localctx, 16, analizadorParser.RULE_finCampo);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
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
analizadorParser.RULE_num = 5;
analizadorParser.RULE_fecha = 6;
analizadorParser.RULE_listaTexto = 7;
analizadorParser.RULE_finCampo = 8;

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

	SPACE() {
	    return this.getToken(analizadorParser.SPACE, 0);
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


	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.SPACE);
	    } else {
	        return this.getToken(analizadorParser.SPACE, i);
	    }
	};


	POINT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.POINT);
	    } else {
	        return this.getToken(analizadorParser.POINT, i);
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


	SPACE() {
	    return this.getToken(analizadorParser.SPACE, 0);
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


	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(analizadorParser.SPACE);
	    } else {
	        return this.getToken(analizadorParser.SPACE, i);
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
analizadorParser.NumContext = NumContext; 
analizadorParser.FechaContext = FechaContext; 
analizadorParser.ListaTextoContext = ListaTextoContext; 
analizadorParser.FinCampoContext = FinCampoContext; 
