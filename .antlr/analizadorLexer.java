// Generated from c:/Users/Usuario/Documents/GitHub/52127/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class analizadorLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		DOBLEPOINT=1, POINT=2, COMMA=3, SEMI=4, RCOR=5, LCOR=6, GUION=7, SPACE=8, 
		NOMBRE=9, TIPO=10, TAMANIO=11, CREADO=12, MODIFICADO=13, AUTOR=14, DESC=15, 
		ETIQUETAS=16, LETRA=17, DIGITO=18, WS=19;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"DOBLEPOINT", "POINT", "COMMA", "SEMI", "RCOR", "LCOR", "GUION", "SPACE", 
			"NOMBRE", "TIPO", "TAMANIO", "CREADO", "MODIFICADO", "AUTOR", "DESC", 
			"ETIQUETAS", "LETRA", "DIGITO", "WS"
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


	public analizadorLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0013\u0080\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007"+
		"\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b"+
		"\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001"+
		"\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\r\u0001\r\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001"+
		"\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001\u000f\u0001"+
		"\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001\u0012\u0001\u0012\u0001"+
		"\u0012\u0001\u0012\u0000\u0000\u0013\u0001\u0001\u0003\u0002\u0005\u0003"+
		"\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015"+
		"\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012"+
		"%\u0013\u0001\u0000\u0003\u0002\u0000AZaz\u0001\u000009\u0002\u0000\t"+
		"\n\r\r\u007f\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000"+
		"\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000"+
		"\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000"+
		"\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000"+
		"\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000"+
		"\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000"+
		"\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000"+
		"\u0000\u001d\u0001\u0000\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000"+
		"\u0000!\u0001\u0000\u0000\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%"+
		"\u0001\u0000\u0000\u0000\u0001\'\u0001\u0000\u0000\u0000\u0003)\u0001"+
		"\u0000\u0000\u0000\u0005+\u0001\u0000\u0000\u0000\u0007-\u0001\u0000\u0000"+
		"\u0000\t/\u0001\u0000\u0000\u0000\u000b1\u0001\u0000\u0000\u0000\r3\u0001"+
		"\u0000\u0000\u0000\u000f5\u0001\u0000\u0000\u0000\u00117\u0001\u0000\u0000"+
		"\u0000\u0013>\u0001\u0000\u0000\u0000\u0015C\u0001\u0000\u0000\u0000\u0017"+
		"J\u0001\u0000\u0000\u0000\u0019Q\u0001\u0000\u0000\u0000\u001b\\\u0001"+
		"\u0000\u0000\u0000\u001db\u0001\u0000\u0000\u0000\u001fn\u0001\u0000\u0000"+
		"\u0000!x\u0001\u0000\u0000\u0000#z\u0001\u0000\u0000\u0000%|\u0001\u0000"+
		"\u0000\u0000\'(\u0005:\u0000\u0000(\u0002\u0001\u0000\u0000\u0000)*\u0005"+
		".\u0000\u0000*\u0004\u0001\u0000\u0000\u0000+,\u0005,\u0000\u0000,\u0006"+
		"\u0001\u0000\u0000\u0000-.\u0005;\u0000\u0000.\b\u0001\u0000\u0000\u0000"+
		"/0\u0005[\u0000\u00000\n\u0001\u0000\u0000\u000012\u0005]\u0000\u0000"+
		"2\f\u0001\u0000\u0000\u000034\u0005-\u0000\u00004\u000e\u0001\u0000\u0000"+
		"\u000056\u0005 \u0000\u00006\u0010\u0001\u0000\u0000\u000078\u0005n\u0000"+
		"\u000089\u0005o\u0000\u00009:\u0005m\u0000\u0000:;\u0005b\u0000\u0000"+
		";<\u0005r\u0000\u0000<=\u0005e\u0000\u0000=\u0012\u0001\u0000\u0000\u0000"+
		">?\u0005t\u0000\u0000?@\u0005i\u0000\u0000@A\u0005p\u0000\u0000AB\u0005"+
		"o\u0000\u0000B\u0014\u0001\u0000\u0000\u0000CD\u0005t\u0000\u0000DE\u0005"+
		"a\u0000\u0000EF\u0005m\u0000\u0000FG\u0005a\u0000\u0000GH\u0005\u00f1"+
		"\u0000\u0000HI\u0005o\u0000\u0000I\u0016\u0001\u0000\u0000\u0000JK\u0005"+
		"c\u0000\u0000KL\u0005r\u0000\u0000LM\u0005e\u0000\u0000MN\u0005a\u0000"+
		"\u0000NO\u0005d\u0000\u0000OP\u0005o\u0000\u0000P\u0018\u0001\u0000\u0000"+
		"\u0000QR\u0005m\u0000\u0000RS\u0005o\u0000\u0000ST\u0005d\u0000\u0000"+
		"TU\u0005i\u0000\u0000UV\u0005f\u0000\u0000VW\u0005i\u0000\u0000WX\u0005"+
		"c\u0000\u0000XY\u0005a\u0000\u0000YZ\u0005d\u0000\u0000Z[\u0005o\u0000"+
		"\u0000[\u001a\u0001\u0000\u0000\u0000\\]\u0005a\u0000\u0000]^\u0005u\u0000"+
		"\u0000^_\u0005t\u0000\u0000_`\u0005o\u0000\u0000`a\u0005r\u0000\u0000"+
		"a\u001c\u0001\u0000\u0000\u0000bc\u0005d\u0000\u0000cd\u0005e\u0000\u0000"+
		"de\u0005s\u0000\u0000ef\u0005c\u0000\u0000fg\u0005r\u0000\u0000gh\u0005"+
		"i\u0000\u0000hi\u0005p\u0000\u0000ij\u0005c\u0000\u0000jk\u0005i\u0000"+
		"\u0000kl\u0005o\u0000\u0000lm\u0005n\u0000\u0000m\u001e\u0001\u0000\u0000"+
		"\u0000no\u0005e\u0000\u0000op\u0005t\u0000\u0000pq\u0005i\u0000\u0000"+
		"qr\u0005q\u0000\u0000rs\u0005u\u0000\u0000st\u0005e\u0000\u0000tu\u0005"+
		"t\u0000\u0000uv\u0005a\u0000\u0000vw\u0005s\u0000\u0000w \u0001\u0000"+
		"\u0000\u0000xy\u0007\u0000\u0000\u0000y\"\u0001\u0000\u0000\u0000z{\u0007"+
		"\u0001\u0000\u0000{$\u0001\u0000\u0000\u0000|}\u0007\u0002\u0000\u0000"+
		"}~\u0001\u0000\u0000\u0000~\u007f\u0006\u0012\u0000\u0000\u007f&\u0001"+
		"\u0000\u0000\u0000\u0001\u0000\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}