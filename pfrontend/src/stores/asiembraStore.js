import { observable } from 'mobx';


class AsiembraStore {
    @observable is_open = null;
    @observable asd_open = null;
    @observable ftitle = '';
    @observable cicloDict = {};
    @observable cultivos = []
    @observable variedades = []
    @observable superficie_pv17
    @observable superficieError
    @observable apdf = ''
    @observable apdfCultivos = []
    @observable productorFilterValue = null
    @observable productorFilterType = 'nombre'
    @observable uprofile = {}

    //constructor() {
        //this.dataSource.map((cult)=>{
                //this.cultivos.push(cult[0])
            //}
        //)
    //}
    
    
    filterCultivos = (nombre) =>{
        this.cultivos = []
        this.variedades=[]
        var res = []
        this.dataSource.map((cult)=>{
            if(cult[0].indexOf(nombre.toUpperCase()) !== -1){
                if(this.cultivos.indexOf(cult[0])==-1){
                    this.cultivos.push(cult[0])
                }
                this.variedades.push(cult[1])
            }

        })
    }

    all(){
        this.dataSource.map((c)=>{
            if(this.cultivos.indexOf(c[0])==-1){
                this.cultivos.push(c[0])
            }
        })
    }

    getVariedades(cultivo){
        this.dataSource.map((c)=>{
            if(c[0]==cultivo){
                if(this.variedades.indexOf(c[1])==-1){
                    this.variedades.push(c[1])
               }
            }
        })
    }

    dataSource = 
        [
            ['ACEITUNA', 'NEGRA'],
            ['ACEITUNA', 'SIN CLASIFICAR'],
            ['ACELGA', 'SIN CLASIFICAR'],
            ['ACHIOTE', 'SIN CLASIFICAR'],
            ['AGAPANDO (Gruesa)', 'SIN CLASIFICAR'],
            ['AGAVE', 'BACANORA'],
            ['AGAVE', 'MEZCALERO'],
            ['AGAVE', 'SIN CLASIFICAR'],
            ['AGAVE', 'TEQUILERO'],
            ['AGUACATE', 'HASS'],
            ['AGUACATE', 'CRIOLLO'],
            ['AGUACATE', 'SIN CLASIFICAR'],
            ['AGUACATE', 'FUERTE'],
            ['AJO', 'CRIOLLO'],
            ['AJO', 'SIN CLASIFICAR'],
            ['AJO', 'ORGANICO'],
            ['AJO', 'MORADO'],
            ['AJO', 'BLANCO'],
            ['AJONJOLI', 'SIN CLASIFICAR'],
            ['ALBAHACA', 'SIN CLASIFICAR'],
            ['ALBAHACA', 'ORGANICO'],
            ['ALBAHACA', 'INVERNADERO'],
            ['ALBRICIA', 'SIN CLASIFICAR'],
            ['ALCACHOFA', 'SIN CLASIFICAR'],
            ['ALFALFA ACHICALADA', 'SIN CLASIFICAR'],
            ['ALFALFA VERDE', 'SIN CLASIFICAR'],
            ['ALGARROBO', 'SIN CLASIFICAR'],
            ['ALHELI', 'SIN CLASIFICAR'],
            ['ALHELI (Gruesa)', 'SIN CLASIFICAR'],
            ['ALHELI (Manojo)', 'SIN CLASIFICAR'],
            ['ALMACIGO (Planta)', 'SIN CLASIFICAR'],
            ['ALPISTE', 'SIN CLASIFICAR'],
            ['ALPISTE ORNAMENTAL (Manojo)', 'SIN CLASIFICAR'],
            ['ALSTROEMERIA (Gruesa)', 'SIN CLASIFICAR'],
            ['ALSTROEMERIA (Gruesa)', 'INVERNADERO'],
            ['AMARANTO', 'SIN CLASIFICAR'],
            ['ANIS', 'SIN CLASIFICAR'],
            ['APIO', 'SIN CLASIFICAR'],
            ['APIO', 'ORGANICO'],
            ['ARBOL DE NAVIDAD (Planta)', 'SIN CLASIFICAR'],
            ['ARETILLO (Planta)', 'SIN CLASIFICAR'],
            ['ARETILLO (Planta)', 'INVERNADERO'],
            ['ARRAYAN', 'SIN CLASIFICAR'],
            ['ARROZ PALAY', 'SIN CLASIFICAR'],
            ['ARROZ PALAY', 'GRUESO MILAGRO FILIPINO'],
            ['ARROZ PALAY', 'TIPO MORELOS'],
            ['ARVEJON', 'SIN CLASIFICAR'],
            ['ASTER (Manojo)', 'SIN CLASIFICAR'],
            ['AVE DEL PARAISO (Gruesa)', 'SIN CLASIFICAR'],
            ['AVENA FORRAJERA ACHICALADA', 'SIN CLASIFICAR'],
            ['AVENA FORRAJERA EN VERDE', 'SIN CLASIFICAR'],
            ['AVENA FORRAJERA SECA', 'SIN CLASIFICAR'],
            ['AVENA GRANO', 'SIN CLASIFICAR'],
            ['AZUCENA (Gruesa)', 'SIN CLASIFICAR'],
            ['BAMBU', 'SIN CLASIFICAR'],
            ['BEGONIA (Planta)', 'INVERNADERO'],
            ['BELEN (Planta)', 'SIN CLASIFICAR'],
            ['BELEN (Planta)', 'INVERNADERO'],
            ['BERENJENA', 'SIN CLASIFICAR'],
            ['BERENJENA', 'ORGANICO'],
            ['BERENJENA', 'INVERNADERO'],
            ['BETABEL', 'ORGANICO'],
            ['BETABEL', 'SIN CLASIFICAR'],
            ['BLUEBERRY', 'SIN CLASIFICAR'],
            ['BROCOLI', 'SIN CLASIFICAR'],
            ['BROCOLI', 'ORGANICO'],
            ['BROCOLI', 'BROCCOLETTE ORGANICO'],
            ['BROCOLI SEMILLA', 'SIN CLASIFICAR'],
            ['CACAHUATE', 'SIN CLASIFICAR'],
            ['CACAO', 'SIN CLASIFICAR'],
            ['CAIMITO', 'SIN CLASIFICAR'],
            ['CALABACITA', 'SIN CLASIFICAR'],
            ['CALABACITA', 'ORGANICO'],
            ['CALABACITA', 'ITALIANA (Zucchini)'],
            ['CALABACITA', 'CRIOLLA'],
            ['CALABACITA', 'INVERNADERO'],
            ['CALABACITA', 'MALLA SOMBRA'],
            ['CALABAZA', 'SIN CLASIFICAR'],
            ['CALABAZA', 'DE CASTILLA'],
            ['CALABAZA', 'KABOCHA'],
            ['CALABAZA', 'CRIOLLA'],
            ['CALABAZA (SEMILLA) O CHIHUA', 'SIN CLASIFICAR'],
            ['CALANCOE (Planta)', 'INVERNADERO'],
            ['CAMOTE', 'SIN CLASIFICAR'],
            ['CANOLA', 'SIN CLASIFICAR'],
            ['CANOLA FORRAJE', 'SIN CLASIFICAR'],
            ['CAPULIN', 'SIN CLASIFICAR'],
            ['CARAMBOLO', 'SIN CLASIFICAR'],
            ['CARTAMO', 'SIN CLASIFICAR'],
            ['CARTAMO', 'ORGANICO'],
            ['CEBADA FORRAJERA EN VERDE', 'SIN CLASIFICAR'],
            ['CEBADA GRANO', 'SIN CLASIFICAR'],
            ['CEBADA GRANO (SEMILLA)', 'SIN CLASIFICAR'],
            ['CEBOLLA', 'SIN CLASIFICAR'],
            ['CEBOLLA', 'BLANCA'],
            ['CEBOLLA', 'CAMBRAY'],
            ['CEBOLLA', 'MORADA'],
            ['CEBOLLA', 'AMARILLA'],
            ['CEBOLLA SEMILLA', 'SIN CLASIFICAR'],
            ['CEBOLLIN', 'SIN CLASIFICAR'],
            ['CEBOLLIN', 'ORGANICO'],
            ['CEBOLLIN', 'CEBOLLIN CHINO'],
            ['CENTENO FORRAJERO EN VERDE', 'SIN CLASIFICAR'],
            ['CENTENO GRANO', 'SIN CLASIFICAR'],
            ['CEREZA', 'SIN CLASIFICAR'],
            ['CHABACANO', 'SIN CLASIFICAR'],
            ['CHAYOTE', 'SIN CLASIFICAR'],
            ['CHIA', 'SIN CLASIFICAR'],
            ['CHICHARO', 'SIN CLASIFICAR'],
            ['CHICHARO', 'ORGANICO'],
            ['CHICHARO', 'INVERNADERO'],
            ['CHILACAYOTE', 'SIN CLASIFICAR'],
            ['CHILE HABANERO', 'SIN CLASIFICAR'],
            ['CHILE HABANERO', 'INVERNADERO'],
            ['CHILE HABANERO', 'MALLA SOMBRA'],
            ['CHILE SECO', 'SIN CLASIFICAR'],
            ['CHILE SECO', 'TABAQUERO'],
            ['CHILE SECO', 'GUAJILLO'],
            ['CHILE SECO', 'PASILLA'],
            ['CHILE SECO', 'MULATO'],
            ['CHILE SECO', 'ANCHO'],
            ['CHILE SECO', 'DE ARBOL (COLA DE RATA)'],
            ['CHILE SECO', 'MIRASOL'],
            ['CHILE SECO', 'PUYA'],
            ['CHILE SECO', 'COLORADO'],
            ['CHILE VERDE', 'SOLEDAD'],
            ['CHILE VERDE', 'SIN CLASIFICAR'],
            ['CHILE VERDE', 'GUAJILLO'],
            ['CHILE VERDE', 'MANZANO'],
            ['CHILE VERDE', 'MIRASOL'],
            ['CHILE VERDE', 'ORGANICO'],
            ['CHILE VERDE', 'PERON'],
            ['CHILE VERDE', 'POBLANO'],
            ['CHILE VERDE', 'SERRANO'],
            ['CHILE VERDE', 'INVERNADERO'],
            ['CHILE VERDE', 'BELL PEPPER'],
            ['CHILE VERDE', 'ANAHEIM'],
            ['CHILE VERDE', 'CALORO'],
            ['CHILE VERDE', 'PIQUIN'],
            ['CHILE VERDE', 'DE AGUA'],
            ['CHILE VERDE', 'CHILACA'],
            ['CHILE VERDE', 'DE ARBOL (COLA DE RATA)'],
            ['CHILE VERDE', 'X-CAT-IK'],
            ['CHILE VERDE', 'REGIONAL'],
            ['CHILE VERDE', 'MANZANO  DE INVERNADERO'],
            ['CHILE VERDE', 'POBLANO DE INVERNADERO'],
            ['CHILE VERDE', 'BELL PEPER INVERNADERO'],
            ['CHILE VERDE', 'BELL PEPER MALLA SOMBRA'],
            ['CHILE VERDE', 'CAYENE'],
            ['CHILE VERDE', 'X-CAT-IK MALLA SOMBRA'],
            ['CHILE VERDE', 'MALLA SOMBRA'],
            ['CHILE VERDE MORRON', 'SIN CLASIFICAR'],
            ['CHILE VERDE MORRON', 'INVERNADERO'],
            ['CHILE VERDE MORRON', 'MALLA SOMBRA'],
            ['CHILE VERDE SEMILLA', 'INVERNADERO'],
            ['CHIRIMOYA', 'SIN CLASIFICAR'],
            ['CHIVES', 'ORGANICO'],
            ['CILANTRO', 'ORGANICO'],
            ['CILANTRO', 'SIN CLASIFICAR'],
            ['CILANTRO SEMILLA', 'SIN CLASIFICAR'],
            ['CINERARIA (Planta)', 'INVERNADERO'],
            ['CIRUELA', 'DEL PAIS'],
            ['CIRUELA', 'DE ALMENDRA'],
            ['CITRICOS', 'SIN CLASIFICAR'],
            ['CLAVEL (Gruesa)', 'SIN CLASIFICAR'],
            ['CLAVEL (Gruesa)', 'INVERNADERO'],
            ['COCO FRUTA', 'SIN CLASIFICAR'],
            ['COL DE BRUSELAS', 'SIN CLASIFICAR'],
            ['COLIFLOR', 'SIN CLASIFICAR'],
            ['COLIFLOR SEMILLA', 'SIN CLASIFICAR'],
            ['COLINABO', 'SIN CLASIFICAR'],
            ['COL (REPOLLO)', 'SIN CLASIFICAR'],
            ['COLZA', 'SIN CLASIFICAR'],
            ['COMINO', 'SIN CLASIFICAR'],
            ['COPRA', 'SIN CLASIFICAR'],
            ['CRISANTEMO (Gruesa)', 'SIN CLASIFICAR'],
            ['CRISANTEMO (Gruesa)', 'INVERNADERO'],
            ['CRISANTEMO (Planta)', 'SIN CLASIFICAR'],
            ['CRISANTEMO (Planta)', 'INVERNADERO'],
            ['CYCLAMEN (Planta)', 'INVERNADERO'],
            ['DATIL', 'SIN CLASIFICAR'],
            ['DOLAR (Manojo)', 'SIN CLASIFICAR'],
            ['DURAZNO', 'SIN CLASIFICAR'],
            ['DURAZNO', 'CRIOLLO'],
            ['DURAZNO', 'DIAMANTE'],
            ['DURAZNO', 'ORO'],
            ['DURAZNO', 'ARKANSAS'],
            ['EBO (JANAMARGO O VEZA)', 'SIN CLASIFICAR'],
            ['EBO (JANAMARGO O VEZA) GRANO', 'SIN CLASIFICAR'],
            ['EBO (JANAMARGO O VEZA) SECO', 'SIN CLASIFICAR'],
            ['EJOTE', 'SIN CLASIFICAR'],
            ['EJOTE', 'ORGANICO'],
            ['EJOTE', 'INVERNADERO'],
            ['ELOTE', 'SIN CLASIFICAR'],
            ['ENELDO', 'ORGANICO'],
            ['EPAZOTE', 'SIN CLASIFICAR'],
            ['ESPARRAGO', 'SIN CLASIFICAR'],
            ['ESPECIAS Y MEDICINALES', 'SIN CLASIFICAR'],
            ['ESPINACA', 'SIN CLASIFICAR'],
            ['ESPINACA CHINA', 'ORGANICO'],
            ['ESTROPAJO', 'SIN CLASIFICAR'],
            ['EUCALIPTO', 'SIN CLASIFICAR'],
            ['FLOR CERA', 'SIN CLASIFICAR'],
            ['FLORES', 'SIN CLASIFICAR'],
            ['FLORES', 'INVERNADERO'],
            ['FLORES (Gruesa)', 'SIN CLASIFICAR'],
            ['FLORES (Manojo)', 'SIN CLASIFICAR'],
            ['FLORES (Planta)', 'SIN CLASIFICAR'],
            ['FLOR PERRITO', 'SIN CLASIFICAR'],
            ['FRAMBUESA', 'SIN CLASIFICAR'],
            ['FRESA', 'SIN CLASIFICAR'],
            ['FRESA', 'INVERNADERO'],
            ['FRESA (Planta)', 'SIN CLASIFICAR'],
            ['FRIJOL', 'OTROS NEGROS'],
            ['FRIJOL', 'SIN CLASIFICAR'],
            ['FRIJOL', 'AZUFRADO'],
            ['FRIJOL', 'BAYO'],
            ['FRIJOL', 'CANARIO'],
            ['FRIJOL', 'GARBANCILLO'],
            ['FRIJOL', 'MAYOCOBA'],
            ['FRIJOL', 'PERUANO'],
            ['FRIJOL', 'OTROS CLAROS'],
            ['FRIJOL', 'CACAHUATE'],
            ['FRIJOL', 'FLOR DE JUNIO'],
            ['FRIJOL', 'FLOR DE MAYO'],
            ['FRIJOL', 'PINTO NACIONAL'],
            ['FRIJOL', 'OTROS DE COLOR'],
            ['FRIJOL', 'NEGRO JAMAPA'],
            ['FRIJOL', 'NEGRO QUERETARO'],
            ['FRIJOL', 'NEGRO SAN LUIS'],
            ['FRIJOL', 'NEGRO VERACRUZ'],
            ['FRIJOL', 'NEGRO ZACATECAS'],
            ['FRIJOL', 'OJO DE CABRA'],
            ['FRIJOL', 'BAYO BERRENDO'],
            ['FRIJOL', 'PINTO AMERICANO'],
            ['FRIJOL', 'PINTO SALTILLO'],
            ['FRUTALES VARIOS', 'SIN CLASIFICAR'],
            ['GARBANZO FORRAJERO', 'SIN CLASIFICAR'],
            ['GARBANZO GRANO', 'BLANCO'],
            ['GARBANZO PORQUERO', 'SIN CLASIFICAR'],
            ['GERANIO (Planta)', 'INVERNADERO'],
            ['GERBERA (GRUESA)', 'INVERNADERO'],
            ['GIRASOL', 'SIN CLASIFICAR'],
            ['GIRASOL FLOR (Gruesa)', 'SIN CLASIFICAR'],
            ['GIRASOL FORRAJERO', 'SIN CLASIFICAR'],
            ['GLADIOLA (Gruesa)', 'SIN CLASIFICAR'],
            ['GRANADA', 'CHINA'],
            ['GRANADA', 'ROJA'],
            ['GRANADA', 'CORDELINA'],
            ['GUAJE', 'SIN CLASIFICAR'],
            ['GUAJE (VERDURA)', 'SIN CLASIFICAR'],
            ['GUAMUCHIL', 'SIN CLASIFICAR'],
            ['GUANABANA', 'SIN CLASIFICAR'],
            ['GUAYABA', 'SIN CLASIFICAR'],
            ['GUAYABA', 'CHINA'],
            ['GUAYABA', 'MEDIA CHINA'],
            ['GUAYABA', 'CRIOLLA'],
            ['HABA GRANO', 'SIN CLASIFICAR'],
            ['HABA VERDE', 'SIN CLASIFICAR'],
            ['HELECHO', 'SIN CLASIFICAR'],
            ['HELECHO (MANOJO)', 'SIN CLASIFICAR'],
            ['HENEQUEN', 'SIN CLASIFICAR'],
            ['HENEQUEN', 'VERDE'],
            ['HIERBABUENA', 'SIN CLASIFICAR'],
            ['HIGO', 'BLANCO'],
            ['HIGO', 'NEGRO'],
            ['HOJA DE PLATANO (BELILLO)', 'SIN CLASIFICAR'],
            ['HONGOS Y SETAS', 'SIN CLASIFICAR'],
            ['HORTALIZAS', 'SIN CLASIFICAR'],
            ['HORTENSIA (Planta)', 'SIN CLASIFICAR'],
            ['HUAUZONTLE', 'SIN CLASIFICAR'],
            ['HULE HEVEA', 'SIN CLASIFICAR'],
            ['INMORTAL (Manojo)', 'SIN CLASIFICAR'],
            ['JACA (JACKFRUIT)', 'SIN CLASIFICAR'],
            ['JAMAICA', 'SIN CLASIFICAR'],
            ['JATROPHA', 'SIN CLASIFICAR'],
            ['JENJIBRE', 'SIN CLASIFICAR'],
            ['JICAMA', 'SIN CLASIFICAR'],
            ['JOJOBA', 'SIN CLASIFICAR'],
            ['KALE', 'SIN CLASIFICAR'],
            ['KOHLRABI', 'SIN CLASIFICAR'],
            ['LECHUGA', 'INVERNADERO'],
            ['LECHUGA', 'SIN CLASIFICAR'],
            ['LECHUGA', 'OREJONA'],
            ['LECHUGA', 'ROMANA'],
            ['LECHUGA', 'BABY LEAF ORGANICO'],
            ['LECHUGA', 'ROMANA ORGANICO'],
            ['LECHUGA SEMILLA', 'SIN CLASIFICAR'],
            ['LEEK', 'SIN CLASIFICAR'],
            ['LENTEJA', 'SIN CLASIFICAR'],
            ['LILIUM (Gruesa)', 'INVERNADERO'],
            ['LILIUM (Gruesa)', 'SIN CLASIFICAR'],
            ['LILIUM (PLANTA)', 'INVERNADERO'],
            ['LIMA', 'SIN CLASIFICAR'],
            ['LIMON', 'ITALIANO'],
            ['LIMON', 'AGRIO (MEXICANO)'],
            ['LIMON', 'PERSA'],
            ['LIMONIUM (Manojo)', 'SIN CLASIFICAR'],
            ['LIMON REAL', 'SIN CLASIFICAR'],
            ['LINAZA ORNAMENTAL (Manojo)', 'SIN CLASIFICAR'],
            ['LITCHI', 'SIN CLASIFICAR'],
            ['MACADAMIA', 'SIN CLASIFICAR'],
            ['MAGUEY MIXIOTERO', 'SIN CLASIFICAR'],
            ['MAGUEY PULQUERO (MILES DE LTS.)', 'AGUAMIEL'],
            ['MAIZ FORRAJERO EN VERDE', 'SIN CLASIFICAR'],
            ['MAIZ GRANO', 'AMARILLO'],
            ['MAIZ GRANO', 'BLANCO'],
            ['MAIZ GRANO', 'POZOLERO'],
            ['MAIZ GRANO', 'DE COLOR'],
            ['MAIZ GRANO SEMILLA', 'SIN CLASIFICAR'],
            ['MAIZ PALOMERO', 'SIN CLASIFICAR'],
            ['MALANGA', 'SIN CLASIFICAR'],
            ['MAMEY', 'SIN CLASIFICAR'],
            ['MANDARINA', 'SIN CLASIFICAR'],
            ['MANDARINA', 'MURCOT'],
            ['MANDARINA', 'DANCY'],
            ['MANDARINA', 'CRIOLLA'],
            ['MANDARINA', 'FREMONT'],
            ['MANDARINA', 'FAIRCHILD'],
            ['MANGO', 'TOMMY ATKINS'],
            ['MANGO', 'SIN CLASIFICAR'],
            ['MANGO', 'ATAULFO'],
            ['MANGO', 'CRIOLLOS'],
            ['MANGO', 'HADEN'],
            ['MANGO', 'KEITT'],
            ['MANGO', 'KENT'],
            ['MANGO', 'MANILA'],
            ['MANGO', 'MANILILLA'],
            ['MANGO', 'PARAISO (PETACON)'],
            ['MANGO', 'ORO'],
            ['MANGO', 'OBO'],
            ['MANGO', 'DIPLOMATICO'],
            ['MANO DE LEON', 'SIN CLASIFICAR'],
            ['MANZANA', 'SIN CLASIFICAR'],
            ['MANZANA', 'GOLDEN DELICIOUS'],
            ['MANZANA', 'RED DELICIOUS'],
            ['MANZANA', 'ROME BEAUTY'],
            ['MANZANA', 'STARKING'],
            ['MANZANA', 'CRIOLLA'],
            ['MANZANA', 'STARKING DELICIOUS'],
            ['MANZANA', 'TOP RED'],
            ['MANZANA', 'RED CHIEF'],
            ['MANZANILLA', 'SIN CLASIFICAR'],
            ['MARACUYA', 'SIN CLASIFICAR'],
            ['MARALFALFA', 'SIN CLASIFICAR'],
            ['MARGARITA (Manojo)', 'SIN CLASIFICAR'],
            ['MEJORANA', 'SIN CLASIFICAR'],
            ['MEJORANA', 'ORGANICO'],
            ['MELON', 'SIN CLASIFICAR'],
            ['MELON', 'CANTALOUPE'],
            ['MELON', 'GOTA DE MIEL'],
            ['MELON', 'VALENCIANO (HONEY DEW)'],
            ['MELON', 'AMARGO'],
            ['MELON SEMILLA', 'SIN CLASIFICAR'],
            ['MEMBRILLO', 'SIN CLASIFICAR'],
            ['MENTA', 'SIN CLASIFICAR'],
            ['MENTA', 'ORGANICO'],
            ['MOSTAZA', 'SIN CLASIFICAR'],
            ['NABO', 'SIN CLASIFICAR'],
            ['NABO FORRAJERO', 'SIN CLASIFICAR'],
            ['NABO (VERDURA)', 'SIN CLASIFICAR'],
            ['NANCHE', 'SIN CLASIFICAR'],
            ['NAPA', 'SIN CLASIFICAR'],
            ['NARANJA', 'MARRS'],
            ['NARANJA', 'VALENCIA'],
            ['NARANJA', 'SIN CLASIFICAR'],
            ['NARANJA', 'AGRIA (WASHINGTON NAVEL)'],
            ['NARANJA', 'HAMLIN'],
            ['NARANJA', 'CRIOLLA'],
            ['NARDO (Gruesa)', 'SIN CLASIFICAR'],
            ['NISPERO', 'SIN CLASIFICAR'],
            ['NOCHE BUENA (PLANTAS)', 'INVERNADERO'],
            ['NOMBRE CULTIVO', 'NOMBRE VARIEDAD'],
            ['NONI', 'SIN CLASIFICAR'],
            ['NOPAL', 'FORRAJERO'],
            ['NOPALITOS', 'INVERNADERO'],
            ['NOPALITOS', 'SIN CLASIFICAR'],
            ['NUBE', 'SIN CLASIFICAR'],
            ['NUBE (Manojo)', 'SIN CLASIFICAR'],
            ['NUEZ', 'ENCARCELADA (PECANERA)'],
            ['NUEZ CRIOLLA', 'SIN CLASIFICAR'],
            ['NUEZ DE CASTILLA', 'SIN CLASIFICAR'],
            ['OKRA (ANGU O GOMBO)', 'SIN CLASIFICAR'],
            ['OLLETO', 'SIN CLASIFICAR'],
            ['OREGANO', 'ORGANICO'],
            ['OREGANO', 'SIN CLASIFICAR'],
            ['PALMA AFRICANA O DE ACEITE', 'SIN CLASIFICAR'],
            ['PALMA DE ORNATO CAMEDOR (Gruesas)', 'SIN CLASIFICAR'],
            ['PALMA DE ORNATO (Planta)', 'SIN CLASIFICAR'],
            ['PALO DE ARCO', 'SIN CLASIFICAR'],
            ['PAPA', 'SIN CLASIFICAR'],
            ['PAPA', 'ALPHA (Blanca)'],
            ['PAPA', 'CRIOLLA'],
            ['PAPALO', 'SIN CLASIFICAR'],
            ['PAPA (SEMILLA)', 'SIN CLASIFICAR'],
            ['PAPAYA', 'HAWAIANA'],
            ['PAPAYA', 'MARADOL'],
            ['PAPAYA', 'ROJA'],
            ['PAPAYA', 'CRIOLLA'],
            ['PAPAYA', 'AMARILLA'],
            ['PASTOS Y PRADERAS EN VERDE', 'SIN CLASIFICAR'],
            ['PASTOS Y PRADERAS EN VERDE', 'SUDAN'],
            ['PASTOS Y PRADERAS EN VERDE', 'LLANERO'],
            ['PASTOS Y PRADERAS EN VERDE', 'ESTRELLA AFRICANA'],
            ['PASTOS Y PRADERAS EN VERDE', 'EVER GREEN'],
            ['PASTO (TAPETE) m2', 'SIN CLASIFICAR'],
            ['PENSAMIENTO (Planta)', 'INVERNADERO'],
            ['PEPINO', 'INV. (MALLA SOMBRA)'],
            ['PEPINO', 'SIN CLASIFICAR'],
            ['PEPINO', 'ORGANICO'],
            ['PEPINO', 'CHINO'],
            ['PEPINO', 'INVERNADERO'],
            ['PEPINO', 'PICKLE'],
            ['PEPINO', 'BLANCO'],
            ['PEPINO SEMILLA', 'SIN CLASIFICAR'],
            ['PERA', 'SIN CLASIFICAR'],
            ['PEREJIL', 'SIN CLASIFICAR'],
            ['PERON', 'SIN CLASIFICAR'],
            ['PERSIMONIO', 'SIN CLASIFICAR'],
            ['PETUNIA (Planta)', 'INVERNADERO'],
            ['PIMIENTA', 'SIN CLASIFICAR'],
            ['PIMIENTA', 'VERDE'],
            ['PIPICHA', 'SIN CLASIFICAR'],
            ['PISTACHE', 'SIN CLASIFICAR'],
            ['PITAHAYA', 'SIN CLASIFICAR'],
            ['PITAYA', 'SIN CLASIFICAR'],
            ['PITAYA', 'DE MAYO'],
            ['PITAYA', 'CRIOLLA'],
            ['PLANTAS DE ORNATO (Planta)', 'SIN CLASIFICAR'],
            ['PLANTERO DE TABACO (Planta)', 'SIN CLASIFICAR'],
            ['PLATANO', 'SIN CLASIFICAR'],
            ['PLATANO', 'DOMINICO'],
            ['PLATANO', 'MACHO'],
            ['PLATANO', 'MANZANO'],
            ['PLATANO', 'MORADO'],
            ['PLATANO', 'PERA'],
            ['PLATANO', 'TABASCO'],
            ['PLATANO', 'VALERY'],
            ['PLATANO', 'CRIOLLO'],
            ['PLATANO', 'ENANO GIGANTE'],
            ['POLAR', 'SIN CLASIFICAR'],
            ['POLAR (Gruesa)', 'SIN CLASIFICAR'],
            ['PON-PON (Gruesa)', 'SIN CLASIFICAR'],
            ['PORO', 'SIN CLASIFICAR'],
            ['QUELITE', 'SIN CLASIFICAR'],
            ['RABANITO', 'SIN CLASIFICAR'],
            ['RABANITO', 'ORGANICO'],
            ['RABANO', 'SIN CLASIFICAR'],
            ['RAMBUTAN', 'SIN CLASIFICAR'],
            ['RAPINI', 'SIN CLASIFICAR'],
            ['REMOLACHA AZUCARERA', 'SIN CLASIFICAR'],
            ['REMOLACHA FORRAJERA', 'SIN CLASIFICAR'],
            ['ROMERITO', 'SIN CLASIFICAR'],
            ['ROMERO', 'SIN CLASIFICAR'],
            ['ROMERO', 'ORGANICO'],
            ['ROSA DE INVERNADERO (Planta)', 'SIN CLASIFICAR'],
            ['ROSA (Gruesa)', 'SIN CLASIFICAR'],
            ['ROSA (Gruesa)', 'INVERNADERO'],
            ['ROSA (Planta)', 'SIN CLASIFICAR'],
            ['RYE GRASS EN VERDE', 'SIN CLASIFICAR'],
            ['SABILA', 'SIN CLASIFICAR'],
            ['SALVIA', 'SIN CLASIFICAR'],
            ['SALVIA', 'ORGANICO'],
            ['SANDIA', 'SIN CLASIFICAR'],
            ['SANDIA', 'CAMBRAY (SANGRIA)'],
            ['SANDIA', 'CHARLESTON (GRAY)'],
            ['SANDIA', 'VERDE (JUBILIE)'],
            ['SANDIA SEMILLA', 'SIN CLASIFICAR'],
            ['SARAMUYO', 'SIN CLASIFICAR'],
            ['SHOP SUEY', 'SIN CLASIFICAR'],
            ['SOLIDAGO (Manojo)', 'SIN CLASIFICAR'],
            ['SORGO ESCOBERO', 'SIN CLASIFICAR'],
            ['SORGO ESCOBERO', 'VERDE'],
            ['SORGO FORRAJERO EN VERDE', 'SIN CLASIFICAR'],
            ['SORGO GRANO', 'SIN CLASIFICAR'],
            ['SOYA', 'SIN CLASIFICAR'],
            ['SOYA', 'ORGANICO'],
            ['SOYA SEMILLA', 'SIN CLASIFICAR'],
            ['STATICE', 'SIN CLASIFICAR'],
            ['STATICE (Manojo)', 'SIN CLASIFICAR'],
            ['STEVIA', 'SIN CLASIFICAR'],
            ['TABACO', 'SIN CLASIFICAR'],
            ['TAMARINDO', 'SIN CLASIFICAR'],
            ['TANGELO', 'SIN CLASIFICAR'],
            ['TANGERINA', 'SIN CLASIFICAR'],
            ['TARRAGON', 'ORGANICO'],
            ['TEJOCOTE', 'SIN CLASIFICAR'],
            ['TE LIMON', 'SIN CLASIFICAR'],
            ['TERCIOPELO (Manojo)', 'SIN CLASIFICAR'],
            ['TOMATE ROJO (JITOMATE)', 'BOLA'],
            ['TOMATE ROJO (JITOMATE)', 'CHERRY'],
            ['TOMATE ROJO (JITOMATE)', 'CHERRY ORGANICO'],
            ['TOMATE ROJO (JITOMATE)', 'EXPORTACION'],
            ['TOMATE ROJO (JITOMATE)', 'INDUSTRIAL'],
            ['TOMATE ROJO (JITOMATE)', 'ORGANICO'],
            ['TOMATE ROJO (JITOMATE)', 'RIO GRANDE'],
            ['TOMATE ROJO (JITOMATE)', 'SALADETTE'],
            ['TOMATE ROJO (JITOMATE)', 'INVERNADERO'],
            ['TOMATE ROJO (JITOMATE)', 'INVERNADERO EXPORTACION'],
            ['TOMATE ROJO (JITOMATE)', 'MALLA SOMBRA EXPORTACION'],
            ['TOMATE ROJO (JITOMATE)', 'INVERNADERO MALLA SOMBRA'],
            ['TOMATE ROJO (JITOMATE)', 'SALADATTE INVERNADERO'],
            ['TOMATE ROJO (JITOMATE)', 'SALADATTE MALLA SOMBRA'],
            ['TOMATE ROJO (JITOMATE)', 'BOLA INVERNADERO'],
            ['TOMATE ROJO (JITOMATE)', 'BOLA MALLA SOMBRA'],
            ['TOMATE ROJO (JITOMATE)', 'CHERRY DE INVERNADERO'],
            ['TOMATE ROJO (JITOMATE)', 'CHERRY MALLA SOMBRA'],
            ['TOMATE ROJO (JITOMATE)', 'RIO GRANDE INVERNADERO'],
            ['TOMATE ROJO (JITOMATE SEMILLA)', 'SIN CLASIFICAR'],
            ['TOMATE VERDE', 'ORGANICO'],
            ['TOMATE VERDE', 'SIN CLASIFICAR'],
            ['TOMILLO', 'SIN CLASIFICAR'],
            ['TOMILLO', 'ORGANICO'],
            ['TORONJA (POMELO)', 'CRIOLLA'],
            ['TORONJA (POMELO)', 'DOBLE ROJA'],
            ['TORONJA (POMELO)', 'SIN CLASIFICAR'],
            ['TORONJA (POMELO)', 'MARSH'],
            ['TORONJA (POMELO)', 'RED BLUSH'],
            ['TORONJA (POMELO)', 'RUBY RED'],
            ['TREBOL', 'SIN CLASIFICAR'],
            ['TRIGO FORRAJERO VERDE', 'SIN CLASIFICAR'],
            ['TRIGO GRANO', 'CRISTALINO'],
            ['TRIGO GRANO', 'FUERTE'],
            ['TRIGO GRANO', 'MEDIO FUERTE'],
            ['TRIGO GRANO', 'SUAVE'],
            ['TRIGO GRANO', 'CORTO Y TENAZ'],
            ['TRIGO ORNAMENTAL (Manojo)', 'SIN CLASIFICAR'],
            ['TRITICALE FORRAJERO EN VERDE', 'SIN CLASIFICAR'],
            ['TRITICALE GRANO', 'SIN CLASIFICAR'],
            ['TULIPAN HOLANDES', 'INVERNADERO'],
            ['TUNA', 'ALFAJAYUCAN'],
            ['TUNA', 'SIN CLASIFICAR'],
            ['TUNA', 'AMARILLA'],
            ['TUNA', 'BLANCA BURRON'],
            ['TUNA', 'BLANCA CRISTALINA'],
            ['TUNA', 'PICO CHULO'],
            ['TUNA', 'XOCONOXTLE'],
            ['TUNA', 'CRIOLLA'],
            ['TUNA', 'ROJA'],
            ['UVA', 'PASA'],
            ['UVA', 'FRUTA'],
            ['UVA', 'INDUSTRIAL'],
            ['VAINILLA', 'VERDE'],
            ['VARIOS', 'SIN CLASIFICAR'],
            ['VERDOLAGA', 'SIN CLASIFICAR'],
            ['VIVEROS (Planta)', 'SIN CLASIFICAR'],
            ['YUCA ALIMENTICIA', 'SIN CLASIFICAR'],
            ['ZACATE', 'GUINEA'],
            ['ZACATE', 'BALLICO'],
            ['ZACATE', 'BERMUDA'],
            ['ZACATE', 'BUFFEL'],
            ['ZACATE', 'MARAVILLA'],
            ['ZACATE', 'SUDAN'],
            ['ZACATE', 'RHODES'],
            ['ZACATE', 'TAIWAN'],
            ['ZACATE SEMILLA', 'BERMUDA'],
            ['ZANAHORIA', 'SIN CLASIFICAR'],
            ['ZANAHORIA', 'EMPERADOR'],
            ['ZANAHORIA', 'NANTES'],
            ['ZANAHORIA', 'BABY'],
            ['ZAPOTE', 'CHICO (CHICO ZAPOTE)'],
            ['ZAPOTE', 'BLANCO'],
            ['ZAPOTE', 'NEGRO'],
            ['ZAPOTE CHICLERO', 'SIN CLASIFICAR'],
            ['ZAPUPE', 'SIN CLASIFICAR'],
            ['ZARZAMORA', 'SIN CLASIFICAR'],
            ['ZEMPOALXOCHITL', 'SIN CLASIFICAR'],
            ['ZEMPOALXOCHITL (Manojo)', 'SIN CLASIFICAR'],
            ['ZEMPOALXOCHITL (Planta)', 'SIN CLASIFICAR']
        ]

}

export default new AsiembraStore();
