var height = 6; // número de tentativas
var width = 5; // tamanho das palavras

var row = 0; // tentativa atual
var col = 0; // letra atual

var gameOver = false;

var wordList; // Lista de palavras a ser obtida do Gist
var word = ""; // Palavra atual a ser adivinhada

// URL raw do Gist com a lista de palavras
var GIST_URL = 'https://gist.githubusercontent.com/vncsmnl/25e7c165da276405af8ca4e1c8e17806/raw/bd238615c9089721a16418289589961490d0cf65/wordlist';

window.onload = function () {
    carregarListaPalavras(GIST_URL)
        .then(lista => {
            wordList = [
                "sagaz",
                "âmago",
"negro",
"termo",
"êxito",
"mexer",
"nobre",
"senso",
"afeto",
"algoz",
"ética",
"plena",
"fazer",
"tênue",
"mútua",
"assim",
"vigor",
"sutil",
"aquém",
"porém",
"seção",
"fosse",
"sobre",
"poder",
"sanar",
"ideia",
"audaz",
"cerne",
"inato",
"moral",
"desde",
"muito",
"justo",
"quiçá",
"honra",
"torpe",
"sonho",
"razão",
"fútil",
"etnia",
"ícone",
"amigo",
"anexo",
"égide",
"tange",
"dengo",
"lapso",
"haver",
"expor",
"tempo",
"então",
"mútuo",
"seara",
"casal",
"boçal",
"hábil",
"saber",
"ávido",
"ardil",
"pesar",
"graça",
"dizer",
"causa",
"óbice",
"dever",
"genro",
"coser",
"pária",
"posse",
"tenaz",
"sendo",
"brado",
"crivo",
"prole",
"comum",
"ainda",
"estar",
"xibiu",
"temor",
"corja",
"ápice",
"detém",
"ânimo",
"ceder",
"assaz",
"pauta",
"ânsia",
"culto",
"digno",
"fugaz",
"censo",
"mundo",
"atroz",
"forte",
"gleba",
"vício",
"vulgo",
"cozer",
"valha",
"criar",
"denso",
"revés",
"neném",
"saúde",
"mesmo",
"pudor",
"dogma",
"jeito",
"regra",
"louco",
"todos",
"atrás",
"ordem",
"mercê",
"homem",
"impor",
"round",
"banal",
"clava",
"feliz",
"pedir",
"limbo",
"coisa",
"usura",
"apraz",
"juízo",
"sábio",
"servo",
"forma",
"tenro",
"prosa",
"desse",
"pífio",
"falar",
"presa",
"ontem",
"cunho",
"viril",
"posso",
"certo",
"devir",
"vendo",
"manso",
"herói",
"reaça",
"meiga",
"valor",
"legal",
"falso",
"mágoa",
"ébrio",
"visar",
"fácil",
"sério",
"acaso",
"fluir",
"puder",
"guisa",
"afago",
"ajuda",
"platô",
"lugar",
"temer",
"ímpio",
"abrir",
"linda",
"garbo",
"afins",
"obter",
"cisma",
"praxe",
"gerar",
"óbvio",
"bruma",
"burro",
"pleno",
"matiz",
"êxodo",
"crise",
"união",
"havia",
"fluxo",
"vênia",
"senil",
"tédio",
"ritmo",
"enfim",
"tomar",
"morte",
"visão",
"olhar",
"levar",
"brega",
"prumo",
"casta",
"parvo",
"gênio",
"álibi",
"favor",
"bravo",
"vital",
"pulha",
"reles",
"reter",
"vivaz",
"falta",
"parco",
"cabal",
"valia",
"ouvir",
"tecer",
"grato",
"laico",
"ameno",
"sábia",
"calma",
"possa",
"outro",
"viver",
"noção",
"carma",
"passo",
"força",
"tendo",
"ranço",
"nicho",
"achar",
"terra",
"único",
"noite",
"prime",
"pobre",
"façam",
"óbito",
"rever",
"rogar",
"fator",
"fardo",
"farsa",
"selar",
"ativo",
"coeso",
"anelo",
"épico",
"dúbio",
"citar",
"sinto",
"cisão",
"leigo",
"sesta",
"sonso",
"adiar",
"ciúme",
"claro",
"haste",
"gente",
"cesta",
"humor",
"tende",
"deter",
"velho",
"papel",
"atuar",
"revel",
"sulco",
"líder",
"nossa",
"exato",
"ideal",
"vemos",
"amplo",
"árduo",
"igual",
"ponto",
"feixe",
"marco",
"labor",
"fonte",
"lavra",
"ficar",
"terno",
"vazio",
"débil",
"hiato",
"gesto",
"ótica",
"imune",
"cauda",
"senão",
"remir",
"capaz",
"ambos",
"varão",
"tanto",
"jovem",
"vácuo",
"toada",
"inata",
"sonsa",
"tenra",
"apoio",
"caçar",
"coçar",
"relva",
"velar",
"ciclo",
"algum",
"xeque",
"série",
"raiva",
"vimos",
"horda",
"pouco",
"farão",
"leito",
"fusão",
"advém",
"entre",
"probo",
"doido",
"chuva",
"feito",
"sente",
"coesa",
"minha",
"frase",
"anuir",
"torço",
"verso",
"cruel",
"carro",
"rigor",
"brisa",
"botar",
"trama",
"ímpar",
"blasé",
"massa",
"chata",
"prece",
"dorso",
"maior",
"lazer",
"signo",
"pegar",
"moção",
"fauna",
"credo",
"seita",
"preso",
"covil",
"sorte",
"furor",
"casto",
"morar",
"flora",
"livro",
"peste",
"dócil",
"ambas",
"vetor",
"adeus",
"faina",
"houve",
"senda",
"plano",
"comer",
"árido",
"liame",
"setor",
"pecha",
"nunca",
"vírus",
"ocaso",
"saiba",
"manha",
"aliás",
"meses",
"peixe",
"ardor",
"praia",
"visse",
"beata",
"salvo",
"aceso",
"vulto",
"mudar",
"antro",
"vasto",
"breve",
"rezar",
"pajem",
"agora",
"banzo",
"morro",
"saída",
"séria",
"parte",
"junto",
"ótimo",
"reger",
"prado",
"campo",
"birra",
"avaro",
"risco",
"sinal",
"segue",
"áureo",
"grupo",
"anais",
"motim",
"lenda",
"andar",
"serão",
"chulo",
"antes",
"acima",
"opção",
"átomo",
"fugir",
"nação",
"leite",
"brava",
"treta",
"rapaz",
"vilão",
"parar",
"fruir",
"estão",
"conta",
"ídolo",
"fitar",
"texto",
"áurea",
"jazia",
"verbo",
"prazo",
"tenso",
"oxalá",
"gerir",
"puxar",
"tirar",
"reino",
"índio",
"alude",
"norma",
"tosco",
"exame",
"época",
"traga",
"bando",
"malta",
"festa",
"prova",
"anciã",
"psico",
"filho",
"átrio",
"corpo",
"preto",
"arcar",
"sinhá",
"aonde",
"turba",
"cheio",
"avião",
"fatal",
"voraz",
"acesa",
"praga",
"quase",
"venal",
"fatos",
"sarça",
"manhã",
"certa",
"cópia",
"quota",
"logro",
"ligar",
"apego",
"fixar",
"oásis",
"nosso",
"magia",
"dessa",
"nível",
"soldo",
"pompa",
"sumir",
"coito",
"afora",
"nódoa",
"caixa",
"alado",
"messe",
"tocar",
"perda",
"jirau",
"mente",
"longe",
"tinha",
"livre",
"parca",
"lidar",
"verve",
"fraco",
"apelo",
"lindo",
"solto",
"bônus",
"glosa",
"virão",
"grave",
"vezes",
"firme",
"sexta",
"opaco",
"turva",
"bater",
"porta",
"faixa",
"sabia",
"exijo",
"astro",
"salve",
"trupe",
"doído",
"fenda",
"pardo",
"elite",
"parva",
"grata",
"navio",
"irmão",
"supra",
"alçar",
"autor",
"cânon",
"atual",
"viria",
"abriu",
"deixa",
"pique",
"ficha",
"besta",
"junco",
"cioso",
"ético",
"bicho",
"macio",
"reses",
"douto",
"curso",
"pagão",
"calda",
"abuso",
"cousa",
"judeu",
"posto",
"bioma",
"retém",
"verba",
"locus",
"desta",
"caber",
"rádio",
"privê",
"menos",
"supor",
"vídeo",
"culpa",
"molho",
"extra",
"drops",
"zelar",
"torso",
"chato",
"calão",
"light",
"super",
"aluno",
"vosso",
"gosto",
"baixo",
"júlia",
"combo",
"vinha",
"asilo",
"ígneo",
"suave",
"agudo",
"advir",
"órfão",
"ruína",
"facho",
"turvo",
"turma",
"sítio",
"traço",
"pisar",
"pódio",
"estio",
"peito",
"ereto",
"ações",
"piada",
"lápis",
"pilar",
"chama",
"passa",
"finda",
"brabo",
"amena",
"mosto",
"rouca",
"meigo",
"refém",
"mesma",
"ávida",
"facto",
"louça",
"museu",
"acolá",
"local",
"pífia",
"surja",
"cútis",
"autos",
"paira",
"tento",
"páreo",
"forem",
"rumor",
"metiê",
"optar",
"coral",
"cocho",
"geral",
"lasso",
"poeta",
"medir",
"poema",
"feudo",
"drama",
"folga",
"urgia",
"teste",
"clima",
"hobby",
"boato",
"clean",
"aviso",
"busca",
"tetra",
"rubro",
"ateia",
"pacto",
"cetro",
"idoso",
"feroz",
"móvel",
"ponha",
"calmo",
"crime",
"monge",
"golpe",
"tacha",
"amiga",
"lição",
"açude",
"daqui",
"carta",
"cacho",
"vigia",
"corso",
"ecoar",
"aroma",
"verde",
"monte",
"ébano",
"plumo",
"riste",
"letal",
"vetar",
"falha",
"briga",
"hoste",
"fazia",
"pasmo",
"conto",
"já, já",
"tribo",
"penta",
"saldo",
"pedra",
"casar",
"rival",
"manga",
"troça",
"swing",
"fórum",
"escol",
"tarde",
"bença",
"grama",
"itens",
"roupa",
"súcia",
"chefe",
"artur",
"única",
"venha",
"plebe",
"volta",
"natal",
"mangá",
"fruto",
"sósia",
"civil",
"cover",
"lesse",
"plaga",
"finjo",
"úteis",
"vento",
"sarau",
"cargo",
"macro",
"axila",
"átimo",
"nuvem",
"ornar",
"virar",
"berro",
"órgão",
"arado",
"pinho",
"magna",
"farta",
"amada",
"vazão",
"seixo",
"catre",
"fosso",
"beijo",
"areia",
"troca",
"jejum",
"tiver",
"gíria",
"légua",
"bruta",
"stand",
"perco",
"jogar",
"má-fé",
"viram",
"traje",
"deste",
"tchau",
"assar",
"tição",
"bruto",
"perto",
"inter",
"mídia",
"trato",
"nesse",
"guria",
"tutor",
"renda",
"estro",
"todas",
"varoa",
"amado",
"porte",
"gabar",
"surto",
"canso",
"feita",
"rural",
"pomar",
"bazar",
"arfar",
"close",
"ímpia",
"rocha",
"âmbar",
"recém",
"nesta",
"silvo",
"vedar",
"depor",
"vadio",
"grota",
"irado",
"tenha",
"fossa",
"odiar",
"santo",
"nessa",
"cifra",
"laudo",
"pavor",
"negar",
"bucho",
"aviar",
"clero",
"etapa",
"xucro",
"canto",
"régio",
"calor",
"densa",
"logos",
"vista",
"ferpa",
"bolsa",
"visto",
"minar",
"vagar",
"marca",
"mamãe",
"cinto",
"cenho",
"segar",
"lesão",
"molde",
"cerca",
"verão",
"meche",
"cheia",
"chula",
"proto",
"invés",
"horto",
"deram",
"paiol",
"ruído",
"ágape",
"pedro",
"largo",
"sótão",
"pasma",
"urdir",
"morfo",
"salmo",
"burra",
"letra",
"coroa",
"velha",
"troco",
"penso",
"final",
"pugna",
"lesto",
"símio",
"vasta",
"narco",
"úbere",
"dúbia",
"esgar",
"fundo",
"podar",
"ceita",
"folha",
"ufano",
"trago",
"jazer",
"dança",
"mocho",
"linha",
"ardis",
"ileso",
"frota",
"úmido",
"bulir",
"apear",
"piche",
"pólis",
"preço",
"sofia",
"troço",
"queda",
"neste",
"cível",
"álamo",
"peita",
"resto",
"manto",
"áudio",
"folia",
"matar",
"redor",
"culta",
"misto",
"monta",
"quais",
"cosmo",
"seiva",
"mover",
"barro",
"chaga",
"lábia",
"banto",
"bolso",
"logia",
"álbum",
"limpo",
"macho",
"justa",
"retro",
"barão",
"chave",
"nácar",
"campa",
"lutar",
"louro",
"falsa",
"disso",
"calvo",
"farol",
"gemer",
"outra",
"veloz",
"axial",
"punha",
"mimar",
"venho",
"porca",
"bedel",
"arroz",
"findo",
"sabor",
"vazia",
"rente",
"calça",
"enjoo",
"zumbi",
"salva",
"longo",
"baixa",
"lucro",
"fazes",
"toque",
"demão",
"firma",
"coevo",
"louca",
"lousa",
"olhos",
"dados",
"canil",
"solta",
"torna",
"subir",
"nariz",
"samba",
"farto",
"forro",
"ousar",
"sigla",
"urgir",
"reler",
"fugiu",
"gueto",
"míope",
"sexto",
"valer",
"viger",
"diabo",
"fátuo",
"pagar",
"corar",
"bruxa",
"pluma",
"xampu",
"repor",
"sabiá",
"tumba",
"vário",
"custo",
"cardo",
"choça",
"bugre",
"mania",
"penca",
"hífen",
"modal",
"versa",
"lento",
"corte",
"nesga",
"sadio",
"pular",
"sugar",
"ferir",
"sócio",
"paula",
"ureia"];
            iniciarJogo();
        })
        .catch(erro => {
            console.error('Erro ao carregar a lista de palavras:', erro);
        });
}

function carregarListaPalavras(gistURL) {
    return fetch(gistURL)
        .then(response => response.text())
        .then(text => text.split('\n').filter(palavra => palavra.trim() !== ''));
}

function iniciarJogo() {
    // word = removerAcentos(wordList[Math.floor(Math.random() * wordList.length)].toUpperCase());
    word = "PAULA"
    console.log(word);
    intialize();
}


function intialize() {

    // Criação do tabuleiro
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            // <span id="0-0" class="tile">P</span> o JS vai criar tipo isso
            let tile = document.createElement("span");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Criando o teclado
    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ç"],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]
    ];


    for (let i = 0; i < keyboard.length; i++) {
        let currRow = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let j = 0; j < currRow.length; j++) {
            let keyTile = document.createElement("div");

            let key = currRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";
            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "Key" + key; // "Key" + "A";
            }

            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            } else {
                keyTile.classList.add("key-tile");
            }
            keyboardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyboardRow);
    }


    // JS pegando o input do teclado
    document.addEventListener("keyup", (e) => {
        processInput(e);
    })
}

function processKey() {
    e = { "code": this.id };
    processInput(e);
}

function removerAcentos(palavra) {
    return palavra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function validarPalavra(palavra) {
    const palavraSemAcentos = removerAcentos(palavra);
    const palavraUpperCase = palavraSemAcentos.toUpperCase();
    return wordList.some(item => {
        const itemSemAcentos = removerAcentos(item);
        return itemSemAcentos.toUpperCase() === palavraUpperCase;
    });
}

function processInput(e) {
    if (gameOver) return;

    // alert(e.code);
    if (("KeyA" <= e.code && e.code <= "KeyZ") || e.code == "KeyÇ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code == "KeyÇ" ? "Ç" : e.code[3];
                col += 1;
            }
        }
    }


    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -= 1;
        }
        let currTile = document.getElementById(row.toString() + '-' + col.toString());
        currTile.innerText = "";
    }

    else if (e.code == "KeyÇ") {
        if (col < width) {
            let currTile = document.getElementById(row.toString() + '-' + col.toString());
            if (currTile.innerText == "") {
                currTile.innerText = "Ç";
                col += 1;
            }
        }
    }

    else if (e.code == "Enter") {
        // Obtém a palavra construída
        let guess = "";
        for (let c = 0; c < width; c++) {
            let currTile = document.getElementById(row.toString() + '-' + c.toString());
            let letter = currTile.innerText;
            guess += letter;
        }

        // Valida a palavra
        if (validarPalavra(guess)) {
            update();
        } else {
            // TODO: Adicionar aqui uma lógica mais interessante para lidar com essa validação!
            alert('Palavra inválida!');
        }
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("answer").innerText = "Tente outra vez";
        setTimeout(function () {
            window.location.reload(false);
        }, 2000);
    }
}

function update() {
    let guess = "";
    document.getElementById("answer").innerText = "";

    //suposições de palavra
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;
        guess += letter;
    }

    guess = guess.toLowerCase(); //case sensitive
    console.log(guess);

    //Começa o processo de adivinhação
    let correct = 0;

    let letterCount = {}; //Acompanhe a frequência das letras, ex) KENNY -> {K:1, E:1, N:2, Y: 1}
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letterCount[letter]) {
            letterCount[letter] += 1;
        }
        else {
            letterCount[letter] = 1;
        }
    }

    console.log(letterCount);

    //primeira interação, verifique todas as corretas primeiro
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        //posição correta
        if (word[c] == letter) {
            currTile.classList.add("correct");

            let keyTile = document.getElementById("Key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            correct += 1;
            letterCount[letter] -= 1; //deduzir a contagem de letras
        }

        if (correct == width) {
            gameOver = true;
            console.log("DEU BOM");
            
            var elementImpress = document.getElementById("impress");
            elementImpress.style.display = "block";

            var modalHtml = `<wc-modal style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 99999;">
            <wc-stats id="stats" stato="true" range="1-6" death="true"></wc-stats>
            <style type="text/css">
            :host {
              display: none;
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 10000;
              color: white;
              color: #BBB;
              font-family: 'Mitr', sans-serif;
              font-weight: 300;
            }
            
            #all {
              width: 100%;
              box-sizing: border-box;
              height: 100%;
              background-color: rgba(70, 70, 70, 0.5);
              display: flex;
              flex-direction: column;
              font-size: 3rem;
              line-height: 1.35em;
              font-weight: 300;
              justify-content: center;
              align-items: center;
              padding: 6vh 2em 2em 2em;
            }
            
            #box {
              /* max-width: 720px; */
             /* padding: 1.5em; */
              margin: 0;
              /* width: 100%; */
              background-color: #312B2D;
              /* box-sizing: border-box; */
              border-radius: 0.5em;
              overflow: auto;
              z-index: 19000;
              pointer-events: auto;
              line-height: 1.5em;
            }
            </style>
        <div id="all">
            <div id="box">
                <slot>
                    <wc-stats id="stats" stato="true" range="1-6" death="true">
                        <style type="text/css">
                            :host {
                              display: block;
                              pointer-events: auto;
                              font-weight: 300;
                              color: #FAFAFF;
                              font-family: 'Mitr', sans-serif;
                            }
                            
                            
                            h2 {
                              margin: 0.5em 0 0 0;
                              font-size: 3vh;
                              color: #FAFAFF;
                              font-weight: 500;
                              text-align: center;
                            }
                            
                            b {
                              font-weight: 400;
                            }

                            #statstable {
                              display: grid;
                              grid-template-rows: repeat(2, 1fr);
                              grid-template-columns: repeat(3, 1fr);
                              text-align: center;
                              color: #BBB;
                              line-height: 1em;
                              padding: 2em 0;
                            }
                            
                            #statstable b {
                              grid-row: 1;
                              color: #FAFAFF;
                              font-size: 4vh;
                              /* padding-bottom: 0.5em; */
                            }
                            
                            #statstable p {
                              grid-row: 2;
                              height: 2em;
                              /* display: flex; */
                              justify-content: center;
                              align-items: center;
                              margin: 0;
                            }
                            
                            #statsnext button {
                                font-family: 'Mitr', sans-serif;
                              /* display: flex; */
                              justify-content: center;
                              align-items: center;
                              font-size: 4vh;
                              background-color: #009AFE;
                              border-radius: 0.25em;
                              cursor: pointer;
                              padding: 0.75em 1.25em;
                              color: #FAFAFF;
                              border: none;
                            }
                            
                            #statsnext button img {
                              width: fit-content;
                              /* margin-left: 0.5em; */
                            }
                            
                            
                            </style>
                            <div tabindex="0" id="stats"><h2>Paula Brito,</h2>
                                <div id="statstable">
                                  <b id="stats_games">em 2</b><p>meses</p>
                                  <b id="stats_pct">Com 100%</b><p>de carinho</p>
                                  <b id="stats_streak">E VÁRIOS</b><p>momentos<br>incríveis</p>
                                  <!-- <b id="stats_maxstreak">Notei que</b><p>vc é melhor<br>pessoa que já conheci</p> -->
                                </div>
                                
                                <h2>Notei que vc é a MELHOR pessoa que já conheci!</h2>
                                </br>
                                                                
                                <div id="statsnext" style="display: grid;">
                                  <div><p>Você quer namorar comigo?</p>
                                    <!-- <b id="stats_time">06:24:12</b></div> -->
                                  <div>
                                    <button tabindex="0" id="stats_share"> SIM </button>
                                    <button tabindex="0" id="stats_share" style="background-color: red!important; align-self: center; font-family: 'Mitr', sans-serif;" onclick="window.location.reload(false);"> NÃO </button>
                                  </div>
                                </div>
                    </wc-stats>
                </slot>
            </div>
        </div>
    </wc-modal>`;

           // Criar um elemento temporário para adicionar o HTML
            var tempElement = document.createElement("div");
            tempElement.innerHTML = modalHtml;
            tempElement.style.position = "fixed";
            setTimeout(function () {
                // window.location.reload(false);
                document.body.appendChild(tempElement.firstChild);
            }, 1000);            
            
        }
    }

    console.log(letterCount);
    //vá novamente e marque quais estão presentes, mas na posição errada
    for (let c = 0; c < width; c++) {
        let currTile = document.getElementById(row.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        // pule a letra se estiver marcada como correta
        if (!currTile.classList.contains("correct")) {
            //Está na palavra? certifique-se de que não contamos duas vezes
            if (word.includes(letter) && letterCount[letter] > 0) {
                currTile.classList.add("present");

                let keyTile = document.getElementById("Key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                letterCount[letter] -= 1;
            } // Não é a palavra ou (todas as letras foram usadas para evitar excesso de contagem)
            else {
                currTile.classList.add("absent");
                let keyTile = document.getElementById("Key" + letter);
                keyTile.classList.add("absent")
            }
        }
    }

    row += 1; //nova linha
    col = 0; //começa uma nova linha no inicio
}