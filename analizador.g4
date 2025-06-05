grammar analizador;

metadata
    : (campo)*
    ;

campo
    : nombreCampo DOBLEPOINT SPACE valorCampo finCampo
    ;

nombreCampo
    : NOMBRE
    | TIPO
    | TAMANIO
    | CREADO
    | MODIFICADO
    | AUTOR
    | DESC
    | ETIQUETAS
    ;

valorCampo
    : texto
    | num
    | fecha
    | listaTexto
    ;

texto: (LETRA)+ ( (SPACE | POINT)? (LETRA)+ )*;

num: (DIGITO)+;

fecha: num GUION num GUION num ( SPACE num DOBLEPOINT num ( DOBLEPOINT num )? )?;

listaTexto: LCOR texto ( COMMA SPACE texto )* RCOR;

finCampo: SEMI;

DOBLEPOINT: ':';
POINT: '.';
COMMA: ',';
SEMI: ';';
RCOR: ']';
LCOR: '[';
GUION: '-';

SPACE: '\u0020';
NOMBRE: 'nombre';
TIPO: 'tipo';
TAMANIO: 'tamaño';
CREADO: 'creado';
MODIFICADO: 'modificado';
AUTOR: 'autor';
DESC: 'descripcion';
ETIQUETAS: 'etiquetas';

LETRA: [a-zA-Z];
DIGITO: [0-9];

WS: [\r\n\t] -> skip;