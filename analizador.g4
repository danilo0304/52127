grammar analizador;

metadata: (campo)*;

campo
    : nombreCampo DOBLEPOINT divisor valorCampo finCampo
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

texto
    : (LETRA)+ 
    | (LETRA)+ divisor (texto)*
    ;

divisor
    : SPACE
    | POINT
    ;

num: (DIGITO)+;

fecha: num GUION num GUION num ( divisor num DOBLEPOINT num ( DOBLEPOINT num )? )?;

listaTexto: LCOR texto ( COMMA divisor texto )* RCOR;

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