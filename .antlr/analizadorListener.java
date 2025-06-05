// Generated from c:/Users/Usuario/Documents/GitHub/52127/analizador.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link analizadorParser}.
 */
public interface analizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link analizadorParser#metadata}.
	 * @param ctx the parse tree
	 */
	void enterMetadata(analizadorParser.MetadataContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#metadata}.
	 * @param ctx the parse tree
	 */
	void exitMetadata(analizadorParser.MetadataContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#campo}.
	 * @param ctx the parse tree
	 */
	void enterCampo(analizadorParser.CampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#campo}.
	 * @param ctx the parse tree
	 */
	void exitCampo(analizadorParser.CampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#nombreCampo}.
	 * @param ctx the parse tree
	 */
	void enterNombreCampo(analizadorParser.NombreCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#nombreCampo}.
	 * @param ctx the parse tree
	 */
	void exitNombreCampo(analizadorParser.NombreCampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#valorCampo}.
	 * @param ctx the parse tree
	 */
	void enterValorCampo(analizadorParser.ValorCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#valorCampo}.
	 * @param ctx the parse tree
	 */
	void exitValorCampo(analizadorParser.ValorCampoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(analizadorParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(analizadorParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#num}.
	 * @param ctx the parse tree
	 */
	void enterNum(analizadorParser.NumContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#num}.
	 * @param ctx the parse tree
	 */
	void exitNum(analizadorParser.NumContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#fecha}.
	 * @param ctx the parse tree
	 */
	void enterFecha(analizadorParser.FechaContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#fecha}.
	 * @param ctx the parse tree
	 */
	void exitFecha(analizadorParser.FechaContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#listaTexto}.
	 * @param ctx the parse tree
	 */
	void enterListaTexto(analizadorParser.ListaTextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#listaTexto}.
	 * @param ctx the parse tree
	 */
	void exitListaTexto(analizadorParser.ListaTextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link analizadorParser#finCampo}.
	 * @param ctx the parse tree
	 */
	void enterFinCampo(analizadorParser.FinCampoContext ctx);
	/**
	 * Exit a parse tree produced by {@link analizadorParser#finCampo}.
	 * @param ctx the parse tree
	 */
	void exitFinCampo(analizadorParser.FinCampoContext ctx);
}