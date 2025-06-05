// Generated from c:/Users/Usuario/Documents/GitHub/52127/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class analizadorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DOBLEPOINT=1, POINT=2, COMMA=3, SEMI=4, RCOR=5, LCOR=6, GUION=7, SPACE=8, 
		NOMBRE=9, TIPO=10, TAMANIO=11, CREADO=12, MODIFICADO=13, AUTOR=14, DESC=15, 
		ETIQUETAS=16, LETRA=17, DIGITO=18, WS=19;
	public static final int
		RULE_metadata = 0, RULE_campo = 1, RULE_nombreCampo = 2, RULE_valorCampo = 3, 
		RULE_texto = 4, RULE_num = 5, RULE_fecha = 6, RULE_listaTexto = 7, RULE_finCampo = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"metadata", "campo", "nombreCampo", "valorCampo", "texto", "num", "fecha", 
			"listaTexto", "finCampo"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "':'", "'.'", "','", "';'", "'['", "']'", "'-'", "'\\u0020'", "'nombre'", 
			"'tipo'", "'tama\\u00F1o'", "'creado'", "'modificado'", "'autor'", "'descripcion'", 
			"'etiquetas'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "DOBLEPOINT", "POINT", "COMMA", "SEMI", "RCOR", "LCOR", "GUION", 
			"SPACE", "NOMBRE", "TIPO", "TAMANIO", "CREADO", "MODIFICADO", "AUTOR", 
			"DESC", "ETIQUETAS", "LETRA", "DIGITO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public analizadorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MetadataContext extends ParserRuleContext {
		public List<CampoContext> campo() {
			return getRuleContexts(CampoContext.class);
		}
		public CampoContext campo(int i) {
			return getRuleContext(CampoContext.class,i);
		}
		public MetadataContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_metadata; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterMetadata(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitMetadata(this);
		}
	}

	public final MetadataContext metadata() throws RecognitionException {
		MetadataContext _localctx = new MetadataContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_metadata);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 130560L) != 0)) {
				{
				{
				setState(18);
				campo();
				}
				}
				setState(23);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CampoContext extends ParserRuleContext {
		public NombreCampoContext nombreCampo() {
			return getRuleContext(NombreCampoContext.class,0);
		}
		public TerminalNode DOBLEPOINT() { return getToken(analizadorParser.DOBLEPOINT, 0); }
		public TerminalNode SPACE() { return getToken(analizadorParser.SPACE, 0); }
		public ValorCampoContext valorCampo() {
			return getRuleContext(ValorCampoContext.class,0);
		}
		public FinCampoContext finCampo() {
			return getRuleContext(FinCampoContext.class,0);
		}
		public CampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_campo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitCampo(this);
		}
	}

	public final CampoContext campo() throws RecognitionException {
		CampoContext _localctx = new CampoContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_campo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			nombreCampo();
			setState(25);
			match(DOBLEPOINT);
			setState(26);
			match(SPACE);
			setState(27);
			valorCampo();
			setState(28);
			finCampo();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NombreCampoContext extends ParserRuleContext {
		public TerminalNode NOMBRE() { return getToken(analizadorParser.NOMBRE, 0); }
		public TerminalNode TIPO() { return getToken(analizadorParser.TIPO, 0); }
		public TerminalNode TAMANIO() { return getToken(analizadorParser.TAMANIO, 0); }
		public TerminalNode CREADO() { return getToken(analizadorParser.CREADO, 0); }
		public TerminalNode MODIFICADO() { return getToken(analizadorParser.MODIFICADO, 0); }
		public TerminalNode AUTOR() { return getToken(analizadorParser.AUTOR, 0); }
		public TerminalNode DESC() { return getToken(analizadorParser.DESC, 0); }
		public TerminalNode ETIQUETAS() { return getToken(analizadorParser.ETIQUETAS, 0); }
		public NombreCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_nombreCampo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterNombreCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitNombreCampo(this);
		}
	}

	public final NombreCampoContext nombreCampo() throws RecognitionException {
		NombreCampoContext _localctx = new NombreCampoContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_nombreCampo);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 130560L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorCampoContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public NumContext num() {
			return getRuleContext(NumContext.class,0);
		}
		public FechaContext fecha() {
			return getRuleContext(FechaContext.class,0);
		}
		public ListaTextoContext listaTexto() {
			return getRuleContext(ListaTextoContext.class,0);
		}
		public ValorCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valorCampo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterValorCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitValorCampo(this);
		}
	}

	public final ValorCampoContext valorCampo() throws RecognitionException {
		ValorCampoContext _localctx = new ValorCampoContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_valorCampo);
		try {
			setState(36);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(32);
				texto();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(33);
				num();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(34);
				fecha();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(35);
				listaTexto();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextoContext extends ParserRuleContext {
		public List<TerminalNode> LETRA() { return getTokens(analizadorParser.LETRA); }
		public TerminalNode LETRA(int i) {
			return getToken(analizadorParser.LETRA, i);
		}
		public List<TerminalNode> SPACE() { return getTokens(analizadorParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(analizadorParser.SPACE, i);
		}
		public List<TerminalNode> POINT() { return getTokens(analizadorParser.POINT); }
		public TerminalNode POINT(int i) {
			return getToken(analizadorParser.POINT, i);
		}
		public TextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_texto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterTexto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitTexto(this);
		}
	}

	public final TextoContext texto() throws RecognitionException {
		TextoContext _localctx = new TextoContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_texto);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(39); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(38);
					match(LETRA);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(41); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			setState(53);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 131332L) != 0)) {
				{
				{
				setState(44);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==POINT || _la==SPACE) {
					{
					setState(43);
					_la = _input.LA(1);
					if ( !(_la==POINT || _la==SPACE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				setState(47); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(46);
						match(LETRA);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(49); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,4,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				}
				setState(55);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NumContext extends ParserRuleContext {
		public TerminalNode DIGITO() { return getToken(analizadorParser.DIGITO, 0); }
		public NumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_num; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterNum(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitNum(this);
		}
	}

	public final NumContext num() throws RecognitionException {
		NumContext _localctx = new NumContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_num);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(56);
			match(DIGITO);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FechaContext extends ParserRuleContext {
		public List<TerminalNode> DIGITO() { return getTokens(analizadorParser.DIGITO); }
		public TerminalNode DIGITO(int i) {
			return getToken(analizadorParser.DIGITO, i);
		}
		public List<TerminalNode> GUION() { return getTokens(analizadorParser.GUION); }
		public TerminalNode GUION(int i) {
			return getToken(analizadorParser.GUION, i);
		}
		public TerminalNode SPACE() { return getToken(analizadorParser.SPACE, 0); }
		public List<TerminalNode> DOBLEPOINT() { return getTokens(analizadorParser.DOBLEPOINT); }
		public TerminalNode DOBLEPOINT(int i) {
			return getToken(analizadorParser.DOBLEPOINT, i);
		}
		public FechaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fecha; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterFecha(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitFecha(this);
		}
	}

	public final FechaContext fecha() throws RecognitionException {
		FechaContext _localctx = new FechaContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_fecha);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			match(DIGITO);
			setState(59);
			match(DIGITO);
			setState(60);
			match(DIGITO);
			setState(61);
			match(DIGITO);
			setState(62);
			match(GUION);
			setState(63);
			match(DIGITO);
			setState(64);
			match(DIGITO);
			setState(65);
			match(GUION);
			setState(66);
			match(DIGITO);
			setState(67);
			match(DIGITO);
			setState(79);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SPACE) {
				{
				setState(68);
				match(SPACE);
				setState(69);
				match(DIGITO);
				setState(70);
				match(DIGITO);
				setState(71);
				match(DOBLEPOINT);
				setState(72);
				match(DIGITO);
				setState(73);
				match(DIGITO);
				setState(77);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOBLEPOINT) {
					{
					setState(74);
					match(DOBLEPOINT);
					setState(75);
					match(DIGITO);
					setState(76);
					match(DIGITO);
					}
				}

				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ListaTextoContext extends ParserRuleContext {
		public TerminalNode RCOR() { return getToken(analizadorParser.RCOR, 0); }
		public List<TextoContext> texto() {
			return getRuleContexts(TextoContext.class);
		}
		public TextoContext texto(int i) {
			return getRuleContext(TextoContext.class,i);
		}
		public TerminalNode LCOR() { return getToken(analizadorParser.LCOR, 0); }
		public List<TerminalNode> COMMA() { return getTokens(analizadorParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(analizadorParser.COMMA, i);
		}
		public List<TerminalNode> SPACE() { return getTokens(analizadorParser.SPACE); }
		public TerminalNode SPACE(int i) {
			return getToken(analizadorParser.SPACE, i);
		}
		public ListaTextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_listaTexto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterListaTexto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitListaTexto(this);
		}
	}

	public final ListaTextoContext listaTexto() throws RecognitionException {
		ListaTextoContext _localctx = new ListaTextoContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_listaTexto);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(81);
			match(RCOR);
			setState(82);
			texto();
			setState(88);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(83);
				match(COMMA);
				setState(84);
				match(SPACE);
				setState(85);
				texto();
				}
				}
				setState(90);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(91);
			match(LCOR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FinCampoContext extends ParserRuleContext {
		public TerminalNode SEMI() { return getToken(analizadorParser.SEMI, 0); }
		public FinCampoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_finCampo; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).enterFinCampo(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof analizadorListener ) ((analizadorListener)listener).exitFinCampo(this);
		}
	}

	public final FinCampoContext finCampo() throws RecognitionException {
		FinCampoContext _localctx = new FinCampoContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_finCampo);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(93);
			match(SEMI);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0013`\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0005\u0000\u0014\b\u0000\n\u0000\f\u0000\u0017"+
		"\t\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001"+
		"\u0003\u0003\u0003%\b\u0003\u0001\u0004\u0004\u0004(\b\u0004\u000b\u0004"+
		"\f\u0004)\u0001\u0004\u0003\u0004-\b\u0004\u0001\u0004\u0004\u00040\b"+
		"\u0004\u000b\u0004\f\u00041\u0005\u00044\b\u0004\n\u0004\f\u00047\t\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006N\b\u0006\u0003\u0006"+
		"P\b\u0006\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0005\u0007W\b\u0007\n\u0007\f\u0007Z\t\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0000\u0000\t\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0000\u0002\u0001\u0000\t\u0010\u0002\u0000\u0002\u0002\b\ba\u0000"+
		"\u0015\u0001\u0000\u0000\u0000\u0002\u0018\u0001\u0000\u0000\u0000\u0004"+
		"\u001e\u0001\u0000\u0000\u0000\u0006$\u0001\u0000\u0000\u0000\b\'\u0001"+
		"\u0000\u0000\u0000\n8\u0001\u0000\u0000\u0000\f:\u0001\u0000\u0000\u0000"+
		"\u000eQ\u0001\u0000\u0000\u0000\u0010]\u0001\u0000\u0000\u0000\u0012\u0014"+
		"\u0003\u0002\u0001\u0000\u0013\u0012\u0001\u0000\u0000\u0000\u0014\u0017"+
		"\u0001\u0000\u0000\u0000\u0015\u0013\u0001\u0000\u0000\u0000\u0015\u0016"+
		"\u0001\u0000\u0000\u0000\u0016\u0001\u0001\u0000\u0000\u0000\u0017\u0015"+
		"\u0001\u0000\u0000\u0000\u0018\u0019\u0003\u0004\u0002\u0000\u0019\u001a"+
		"\u0005\u0001\u0000\u0000\u001a\u001b\u0005\b\u0000\u0000\u001b\u001c\u0003"+
		"\u0006\u0003\u0000\u001c\u001d\u0003\u0010\b\u0000\u001d\u0003\u0001\u0000"+
		"\u0000\u0000\u001e\u001f\u0007\u0000\u0000\u0000\u001f\u0005\u0001\u0000"+
		"\u0000\u0000 %\u0003\b\u0004\u0000!%\u0003\n\u0005\u0000\"%\u0003\f\u0006"+
		"\u0000#%\u0003\u000e\u0007\u0000$ \u0001\u0000\u0000\u0000$!\u0001\u0000"+
		"\u0000\u0000$\"\u0001\u0000\u0000\u0000$#\u0001\u0000\u0000\u0000%\u0007"+
		"\u0001\u0000\u0000\u0000&(\u0005\u0011\u0000\u0000\'&\u0001\u0000\u0000"+
		"\u0000()\u0001\u0000\u0000\u0000)\'\u0001\u0000\u0000\u0000)*\u0001\u0000"+
		"\u0000\u0000*5\u0001\u0000\u0000\u0000+-\u0007\u0001\u0000\u0000,+\u0001"+
		"\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000-/\u0001\u0000\u0000\u0000"+
		".0\u0005\u0011\u0000\u0000/.\u0001\u0000\u0000\u000001\u0001\u0000\u0000"+
		"\u00001/\u0001\u0000\u0000\u000012\u0001\u0000\u0000\u000024\u0001\u0000"+
		"\u0000\u00003,\u0001\u0000\u0000\u000047\u0001\u0000\u0000\u000053\u0001"+
		"\u0000\u0000\u000056\u0001\u0000\u0000\u00006\t\u0001\u0000\u0000\u0000"+
		"75\u0001\u0000\u0000\u000089\u0005\u0012\u0000\u00009\u000b\u0001\u0000"+
		"\u0000\u0000:;\u0005\u0012\u0000\u0000;<\u0005\u0012\u0000\u0000<=\u0005"+
		"\u0012\u0000\u0000=>\u0005\u0012\u0000\u0000>?\u0005\u0007\u0000\u0000"+
		"?@\u0005\u0012\u0000\u0000@A\u0005\u0012\u0000\u0000AB\u0005\u0007\u0000"+
		"\u0000BC\u0005\u0012\u0000\u0000CO\u0005\u0012\u0000\u0000DE\u0005\b\u0000"+
		"\u0000EF\u0005\u0012\u0000\u0000FG\u0005\u0012\u0000\u0000GH\u0005\u0001"+
		"\u0000\u0000HI\u0005\u0012\u0000\u0000IM\u0005\u0012\u0000\u0000JK\u0005"+
		"\u0001\u0000\u0000KL\u0005\u0012\u0000\u0000LN\u0005\u0012\u0000\u0000"+
		"MJ\u0001\u0000\u0000\u0000MN\u0001\u0000\u0000\u0000NP\u0001\u0000\u0000"+
		"\u0000OD\u0001\u0000\u0000\u0000OP\u0001\u0000\u0000\u0000P\r\u0001\u0000"+
		"\u0000\u0000QR\u0005\u0005\u0000\u0000RX\u0003\b\u0004\u0000ST\u0005\u0003"+
		"\u0000\u0000TU\u0005\b\u0000\u0000UW\u0003\b\u0004\u0000VS\u0001\u0000"+
		"\u0000\u0000WZ\u0001\u0000\u0000\u0000XV\u0001\u0000\u0000\u0000XY\u0001"+
		"\u0000\u0000\u0000Y[\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000"+
		"[\\\u0005\u0006\u0000\u0000\\\u000f\u0001\u0000\u0000\u0000]^\u0005\u0004"+
		"\u0000\u0000^\u0011\u0001\u0000\u0000\u0000\t\u0015$),15MOX";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}