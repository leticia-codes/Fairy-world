
// Armazena os dados dos personagens para reutilização no catálogo e no quiz.
const personagens = [
    {
        nome: "Calístis",
        tipo: "Fada • Rainha",
        imagem: "assets/Calístis.png",
        cor: "#c8ab8a",
        significado: "Derivado de Kali, deusa hindu associada à força devastadora e renovadora, e Pístis, palavra grega que significa fé, confiança e fidelidade.",
        aparencia: "Possui a pele escura e brilhante como o céu noturno. Seus cabelos são longos, escuros e cacheados, sustentando uma coroa majestosa. Veste um vestido longo e volumoso, estruturado por um corset e mangas fluidas. O vinho predomina no traje, acompanhado de detalhes dourados e joias verdes.",
        poder: "Suas asas grandes e afiadas conseguem transformar uma brisa suave em rajadas avassaladoras de vento. Possui alta velocidade, raciocínio rápido, sabedoria profunda e percepção aguçada."
    },
    {
        nome: "Seraphyne",
        tipo: "Fada",
        imagem: "assets/Seraphyne.png",
        cor: "#c9a986",
        significado: "Derivado do hebraico seraphim, associado aos serafins e à ideia de ardor, luz e amor.",
        aparencia: "Possui pele branca, corpo esguio, olhos escuros e cabelos longos e lisos. Sua voz é serena e leve, e seu rosto angelical apresenta pequenas sardas. Usa um vestido vermelho intenso com detalhes dourados, combinando com suas asas longas e brilhantes.",
        poder: "Consegue curar seres vivos, controlar a intensidade do próprio brilho e manipular a água para intensificar suas habilidades de cura."
    },
    {
        nome: "Ailith",
        tipo: "Fada",
        imagem: "assets/Ailith.png",
        cor: "#ceae87",
        significado: "Nome de inspiração anglo-saxônica, associado à ideia de guerreira nobre ou experiente.",
        aparencia: "Possui pele parda e bronzeada, olhos azul-claros e cabelos presos em uma longa trança. Veste uma blusa de gola alta com apenas uma manga, pequeno corset para guardar bússola e facas, calças flexíveis e luvas. Suas asas têm pouco brilho. É animada, atenta, sarcástica e confiante, e guarda um amor secreto pela rainha.",
        poder: "Manipula matéria para criar armas ou curativos rápidos. Voa com velocidade e precisão, conhece os caminhos do reino de memória e consegue diminuir o tamanho das próprias asas."
    },
    {
        nome: "Alethéa",
        tipo: "Fada",
        imagem: "assets/Alethéa.png",
        cor: "#c8aa8a",
        significado: "Inspirado no grego alḗtheia, relacionado à verdade e ao que não permanece oculto. No documento, representa aquela que revela o que permanece escondido.",
        aparencia: "Possui pele parda e pálida, cabelos cor de gelo e olhos quase brancos com azul muito claro. Usa vestido leve em tons de lilás e cardo, adornado com flores, além de anéis dourados. Suas asas são curtas, claras e delicadamente brilhantes. É engraçada, curiosa, gentil e irmã de Ailith.",
        poder: "Tem visões curtas e imprecisas do futuro por meio dos sonhos. Mesmo cega, percebe auras coloridas dos seres vivos, identificando poder, infidelidade, amor, força, tristeza, mistério e felicidade."
    },
    {
        nome: "Zephyros",
        tipo: "Fada • Chefe da Guarda",
        imagem: "assets/Zephyros.png",
        cor: "#cbb396",
        significado: "Derivado do grego antigo Zéphyros, o vento do oeste, uma das divindades dos ventos.",
        aparencia: "Possui pele parda levemente rosada e cabelos escuros, longos, ondulados e bagunçados. Veste camisa de peito aberto com mangas bufantes, faixa transversal com broches, cintos de couro, calça e bracelete. Suas grandes asas são cinza-prateadas com extremidades azul-escuras. É o chefe da guarda real.",
        poder: "Controla o ar e é o segundo voador mais rápido. Sua habilidade o torna imune às baixas temperaturas e aos venenos da flora."
    },
    {
        nome: "Morgrin",
        tipo: "Mago",
        imagem: "assets/Morgrin.png",
        cor: "#DAC2A9",
        significado: "Filho da ruína, conforme o significado atribuído ao nome no universo da história.",
        aparencia: "Homem de aproximadamente 1,70 m, com cabelos curtos e parcialmente grisalhos, pele parda com leves manchas de sol e roupas cinzas e roxo-escuras. É um dos serviçais do castelo, conhecido pela simpatia, sabedoria e trabalho exemplar.",
        poder: "Não especificado no documento."
    },
    {
        nome: "Dynarion",
        tipo: "Mago",
        imagem: "assets/Dynarion.png",
        cor: "#c9b7a1",
        significado: "Inspirado no grego dýnamis, poder, capacidade ou potência. Na história, significa aquele que carrega o poder de realizar.",
        aparencia: "Possui pele clara e cabelos curtos rosa-queimado, repicados e bagunçados. Usa camisa branca com babados, colete azul, casaco longo marrom e azul, cartola com penas e correntes, calças pretas e botas de cano alto. Carrega um cajado ornamentado com um globo e elementos lunares.",
        poder: "Navegação por Cicatrizes Temporais: permite viajar pelo tempo ao tocar cicatrizes ou marcas antigas."
    },
    {
        nome: "Elíria",
        tipo: "Maga",
        imagem: "assets/Elíria.png",
        cor: "#bea98c",
        significado: "Nome construído a partir das palavras gregas eîdos, aparência ou ideia, e lýra, associada à poesia no documento.",
        aparencia: "Possui pele morena clara, sardas, cabelos escuros ondulados até os ombros com mechas rosas e loiras e olhos castanhos atentos. Usa blusa creme, corset verde-escuro bordado, saia assimétrica verde, rosa e creme, além de botas e acessórios de couro. É doce, observadora, poética, curiosa e irmã mais velha de Dynarion.",
        poder: "Alquimia de Conceitos: cria poções e feitiços utilizando sentimentos e elementos físicos."
    },
    {
        nome: "Morvathan",
        tipo: "Mago",
        imagem: "assets/Morvathan.png",
        cor: "#9A8773",
        significado: "Nome inspirado no latim mors, mortis, que significa morte.",
        aparencia: "Homem alto, esguio e moreno, de cabelos negros ondulados e bagunçados, olhos escuros semicerrados e sorriso perturbador. Usa camisa creme, colete preto com correntes, calças escuras, botas de couro e adaga no cinto. É arrogante, sarcástico, provocador e misterioso.",
        poder: "Extração de Pesadelos: extrai fisicamente o medo, o pânico e as fobias das pessoas, transformando-os em uma névoa escura e viva que emana dos dedos e do braço marcado por runas."
    },
    {
        nome: "Osric",
        tipo: "Mago • Rei",
        imagem: "assets/Osric.png",
        cor: "#d4bda3",
        significado: "Nome anglo-saxônico formado por elementos relacionados a deus e governante, interpretado como governante divino.",
        aparencia: "Homem alto, elegante e imponente, de pele clara e cabelos prateados ondulados. Usa óculos delicados, trajes em malva, lavanda acinzentada e pérola antiga, com bordados em bronze e longa capa ornamentada. Carrega um cajado de bronze com pedra violeta.",
        poder: "Imortalidade e Olhar de Drenagem Decadente: enfraquece e suprime poderes e vitalidade ao fixar o olhar em alguém. Com o passar dos séculos, essa habilidade se tornou lenta e desgastante."
    },
    {
        nome: "Elorya",
        tipo: "Humana • Protagonista",
        imagem: "assets/Elorya.png",
        cor: "#DAC2A9",
        significado: "Nome criado a partir de El e Rya. No universo da história, significa a luz que guia o reino.",
        aparencia: "Mulher baixa, de 25 anos, pele bronzeada, sardas no nariz, olhos verdes, cílios longos, sobrancelhas cheias e cabelos pretos médios e ondulados. Tem rosto levemente redondo, bochechas marcadas e costuma usar laranja-avermelhado e branco. Tem cheiro de flores.",
        poder: "Possui intelecto e raciocínio extraordinários, domínio de arco e flecha e técnicas de imobilização por pontos de pressão. Conecta-se à fauna e à flora. Seu poder oculto permite controlar corpos e acessar memórias."
    },
    {
        nome: "Kaemor",
        tipo: "Humano • Vilão",
        imagem: "assets/Kaemor.png",
        cor: "#DAC2A9",
        significado: "Nome construído a partir de Kay e Mor. Na história, recebe a interpretação aquele a quem a morte retorna.",
        aparencia: "Homem alto e imponente, com lábios grossos, cabelos curtos de textura áspera, olhos dourados e sorriso sarcástico. Usa regata, calças e botas em roxo-escuro e azul-claro, com faixa e bainha douradas.",
        poder: "Possui força descomunal e grande domínio de combate corporal, espadas e facas. Consegue apagar memórias de populações inteiras e drenar parcialmente o poder de seus adversários."
    },
    {
        nome: "Calemir",
        tipo: "Humano",
        imagem: "assets/Calemir.png",
        cor: "#DAC2A9",
        significado: "Inspirado em caelum, céu em latim, e mund, elemento germânico associado à proteção.",
        aparencia: "Segundo da linhagem, possui pele pálida, cabelos pretos lisos e olhos azul-escuros. É sério, silencioso, responsável, paciente e carinhoso. Usa blusa preta, cinto com detalhes azul-profundo e calças da mesma cor.",
        poder: "Ferreiro capaz de criar armas e joias. Domina espadas e possui uma lâmina encantada que ilumina ambientes e escurece na presença de pessoas más. É excelente líder e estrategista."
    },
    {
        nome: "Vaéros",
        tipo: "Humano • Vilão aparente",
        imagem: "assets/Vaéros.png",
        cor: "#DAC2A9",
        significado: "Nome construído a partir de Vae, interjeição latina de lamento, e Rion. No universo da história, significa o rei caído por amor.",
        aparencia: "Homem de 1,90 m, pele clara rosada, maxilar marcado, cabelos pretos lisos e volumosos até os ombros. Mantém os olhos cobertos por um lenço preto e possui uma tatuagem no dedo anelar. Tem voz grave e cristalina, postura atlética e veste roupas pretas.",
        poder: "Anula e retira completamente a magia de qualquer indivíduo. Pode matar ou reviver seres por meio de palavras. É mestre em camuflagem, ocultação mágica, arco e flecha e espadas."
    },
    {
        nome: "Thalior",
        tipo: "Humano",
        imagem: "assets/Thalior.png",
        cor: "#c8aa87",
        significado: "Inspirado no grego thállō, florescer ou vicejar. Significa aquele que floresce.",
        aparencia: "Terceiro da linhagem, tem 19 anos, pele parda, olhos castanhos e cabelos castanhos ondulados. É alto, magro, festeiro, aventureiro e amigável. Usa camisa branca, calça verde-oliva, sobretudo marrom com dourado e luvas sem dedos.",
        poder: "Escala, corre e se esconde com facilidade. Consegue se camuflar entre pessoas, aprende rapidamente técnicas de combate e escapa com facilidade de guardas e muralhas."
    },
    {
        nome: "Noletir",
        tipo: "Elfo • Rei",
        imagem: "assets/NoletiR.png",
        cor: "#cbad89",
        significado: "Construído com inspiração nas raízes élficas nólë, conhecimento, e tir, observar ou vigiar. Na história, significa aquele que tudo observa e compreende.",
        aparencia: "Homem alto e de grande porte físico, cabelos médios grisalhos e olhos verdes intimidadores. Usa regata longa, sobretudo e calças largas em tons acinzentados e verdes, além de uma tira de couro para apoiar o arco.",
        poder: "Camuflagem, percepção de rastros mágicos e comuns, mira extraordinária, flechas envenenadas, grande velocidade e reflexos. É excelente observador e líder."
    },
    {
        nome: "Sireth",
        tipo: "Elfa",
        imagem: "assets/Sireth.png",
        cor: "#d1af88",
        significado: "Inspirado no grego antigo Seirḗn, associado às sereias mitológicas. Simbolicamente, aquela que encanta para aprisionar.",
        aparencia: "Mulher corpuda e muito bela, com cabelos pretos volumosos, pele pálida rosada e olhos vermelho-escuros. Usa vestido vinho com fenda, corset preto, botas longas e gargantilha. Apesar da aparência perigosa, é gentil e doce, mas deseja vingança.",
        poder: "Teve quase toda sua magia roubada. Com o pouco que restou, consegue hipnotizar homens que ainda não estão apaixonados, utilizando essa habilidade para roubá-los."
    },
    {
        nome: "Verídia",
        tipo: "Elfa",
        imagem: "assets/Verídia.png",
        cor: "#ccb9a4",
        significado: "Inspirado no latim veritas, verdade.",
        aparencia: "Mulher pálida, de olheiras profundas, olhos azuis e grandes óculos redondos. Usa parte dos cabelos em coque alto e o restante solto pelas costas. Veste blusa branca de gola alta e mangas bufantes com calça verde. É gentil, mas também sarcástica e debochada.",
        poder: "Projeção de Realidade Narrativa: modifica a realidade ao passar a palma da mão sobre páginas de livros. O uso frequente provoca desgaste."
    },
    {
        nome: "Noédris",
        tipo: "Elfo",
        imagem: "assets/Noédris.png",
        cor: "#d1c1ae",
        significado: "Inspirado no grego nóēsis, pensamento e compreensão intelectual.",
        aparencia: "Homem pálido e magro, com olheiras profundas, olhos âmbar e pequenos óculos. Veste traje semelhante a um terno, gravata vinho e sobretudo de botões vinho. É sério, observador e intimidador. Pai de Verídia e dono da maior biblioteca do reino.",
        poder: "Arquitetura Psíquica: transforma espaços em domínios com regras próprias. Também acessa memórias ao tocar a cabeça de alguém com as duas mãos."
    },
    {
        nome: "Letharion",
        tipo: "Elfo",
        imagem: "assets/Letharion.png",
        cor: "#cdbba5",
        significado: "Inspirado no grego lḗthē, esquecimento, também associado ao rio Lete da mitologia grega.",
        aparencia: "Homem pálido, com sardas, cabelos ruivo-mogno ondulados e olhos amarelo-líquen. Usa camisa marfim, colete escuro, casaco figo acinzentado, calças escuras e acessórios de bronze. É frio, manipulador e indiferente aos sentimentos alheios.",
        poder: "Apatia Induzida: consegue retirar emoções de uma pessoa, sejam elas boas ou dolorosas."
    },
    {
        nome: "Thragor",
        tipo: "Orc • Rei",
        imagem: "assets/Thragor.png",
        cor: "#e4d7c7",
        significado: "Inspirado na palavra inglesa thrash, bater ou golpear violentamente.",
        aparencia: "Orc gigantesco de pele verde-acinzentada, cicatrizes, cabelos negros desgrenhados, presas afiadas e olhos ameaçadores. Usa armadura pesada de metal e couro. É agressivo, orgulhoso, explosivo e governa pelo medo, mas protege seu reino com determinação.",
        poder: "Força extrema."
    },
    {
        nome: "Morveth",
        tipo: "Orc",
        imagem: "assets/Morveth.png",
        cor: "#dccfbf",
        significado: "Inspirado no latim mors, morte.",
        aparencia: "Possui pele verde-acinzentada com cicatrizes, cabelos negros longos, olhos esbranquiçados e presas afiadas. Usa mantos escuros com ossos, penas e símbolos espirituais, carregando um cajado de madeira e crânio. É sábio, reservado, melancólico e respeita profundamente a vida.",
        poder: "Olhar Magoado: consegue enxergar espíritos e movimentos antigos de batalhas, comunicando-se com os mortos."
    },
    {
        nome: "Vulkar",
        tipo: "Orc",
        imagem: "assets/Vulkar.png",
        cor: "#d8caba",
        significado: "O documento associa o nome à palavra inglesa thrash, embora essa relação etimológica não esteja demonstrada.",
        aparencia: "Possui pele verde-oliva, olhos dourados e cabelos negros trançados. Seu corpo forte tem cicatrizes e tatuagens avermelhadas. Usa couro escuro e tecidos vinho com ossos e metais. É ousada, competitiva, impulsiva, orgulhosa e leal aos que conquistam sua confiança.",
        poder: "Sangue de Brasa: durante o combate, seu corpo emana calor suficiente para derreter armas e armaduras."
    },
    {
        nome: "Raveth",
        tipo: "Orc",
        imagem: "assets/Raveth.png",
        cor: "#d5c8b8",
        significado: "Inspirado em rav, termo hebraico associado a grande ou mestre.",
        aparencia: "Possui pele verde-acinzentada com cicatrizes, cabelos prateados desgrenhados, um olho dourado e outro coberto por tapa-olho. Usa roupas de couro marrom, faixas desgastadas e botas pesadas. É astuta, sarcástica, observadora, confiante e provocadora.",
        poder: "Síntese de Técnicas: observa por alguns segundos a técnica do adversário e identifica instantaneamente suas falhas e pontos fracos."
    },
    {
        nome: "Firas",
        tipo: "Orc",
        imagem: "assets/Firas.png",
        cor: "#d8c8b5",
        significado: "Derivado do árabe Firās, associado à perspicácia, astúcia e discernimento.",
        aparencia: "Orc alto e musculoso, de pele verde-acinzentada, olhos vermelhos, presas afiadas e longos cabelos escuros trançados. Possui cicatrizes, tatuagens vermelhas e roupas de couro e tecido vinho. É astuto, desconfiado, sarcástico e calculista.",
        poder: "Leitura de Essência: identifica mentiras, hesitações e intenções de ataque por alterações químicas no suor e na respiração."
    },
    {
        nome: "Myrina",
        tipo: "Duende • Rainha",
        imagem: "assets/Myrina.png",
        cor: "#D9BFA6",
        significado: "Nome associado a Myrina, rainha das amazonas da mitologia grega, conhecida por liderança e coragem.",
        aparencia: "Duende de pele parda, cabelos rosa-escuros volumosos e ondulados com flores e joias, olhos castanhos e sorriso gentil. Usa vestido em verde-oliva, rosa antigo e marfim, corset marrom e bordados florais. Carrega um cajado de madeira com flor luminosa.",
        poder: "Symbiosis Botânica Real: funde sua consciência à flora do reino, enxerga através das plantas e manipula instantaneamente raízes, árvores e vegetação para criar proteções."
    },
    {
        nome: "Huldra",
        tipo: "Duende",
        imagem: "assets/Huldra.png",
        cor: "#d3bea7",
        significado: "Nome escandinavo relacionado ao que é oculto ou escondido. Na tradição nórdica, Huldra é uma criatura misteriosa das florestas.",
        aparencia: "Duende de pele azulada, olhos penetrantes e cabelos curtos, cacheados e volumosos em azul-escuro. Usa roupas azul-noturno, índigo e verde-petróleo, corset, mangas transparentes, saia assimétrica e joias prateadas. É astuta, misteriosa e moralmente ambígua.",
        poder: "Navegação de Sombras Terrenas: altera a geografia da floresta, cria obstáculos e invoca uma bruma escura que distorce sentidos, sons e sombras."
    },
    {
        nome: "Briar",
        tipo: "Duende",
        imagem: "assets/Briar.png",
        cor: "#e0cbb4",
        significado: "Nome inglês que significa arbusto espinhoso ou roseira-brava, derivado do inglês antigo brēr.",
        aparencia: "Duende de pele parda, cabelos volumosos em ameixa e vinho com mechas rosadas, olhos âmbar e expressão séria. Usa trajes vinho, verde-oliva, marfim e preto com capa assimétrica e bordados dourados. É reservado, cauteloso, amoroso e extremamente protetor dos animais.",
        poder: "Tecedor de Constelações Vivas: manifesta almas de animais como feras de luz celestial, atravessa barreiras e dissolve o corpo em luz. O uso excessivo faz sua forma física desvanecer."
    },
    {
        nome: "Rune",
        tipo: "Duende",
        imagem: "assets/Rune.png",
        cor: "#d5bea7",
        significado: "Nome de origem escandinava associado a rún, segredo, mistério ou conhecimento oculto.",
        aparencia: "Possui pele bronzeada, cabelos castanho-acobreados volumosos com pequenas tranças, olhos esverdeados e orelhas pontudas. Usa roupas marrom, laranja queimado, marfim e dourado. É inteligente, perspicaz, observador, irônico e fascinado pelo poder das palavras.",
        poder: "Selo do Nome Verdadeiro: redefine a essência de um objeto simples ao alterar seu significado no ar."
    },
    {
        nome: "Pilar",
        tipo: "Duende",
        imagem: "assets/Pilar.png",
        cor: "#dcc9b5",
        significado: "Nome de origem espanhola que significa coluna, sustentação ou apoio.",
        aparencia: "Duende de pele clara, cabelos marsala longos e volumosos, olhos azul-escuros e orelhas pontudas. Usa blusa rosa-escura de ombros descobertos, corset marrom, calças cinza-chumbo e botas longas. É independente, confiante, perspicaz, determinada e ousada.",
        poder: "Arquitetura Ephemēra: desenha no ar e materializa cabanas, pontes, carruagens e embarcações translúcidas. As estruturas permanecem resistentes até ela dormir ou decidir desfazê-las."
    }
];


// Guarda o índice do personagem selecionado e cria uma cópia da lista original.
let selecionado = 0;
let listaAtual = [...personagens];

// normalize() e replace() removem acentos, enquanto toLowerCase() ignora maiúsculas e minúsculas na pesquisa.
function normalizar(texto) {
    return String(texto || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

// Destaca visualmente os trechos que correspondem à palavra pesquisada.
function destacar(texto, pesquisa) {
    const conteudo = String(texto || "");
    const termo = normalizar(pesquisa.trim());

    // createDocumentFragment() agrupa os elementos antes de inseri-los na página.
    const fragmento = document.createDocumentFragment();

    if (!termo) {
        // createTextNode() insere o texto sem interpretá-lo como HTML.
        fragmento.appendChild(document.createTextNode(conteudo));
        return fragmento;
    }

    const textoNormalizado = normalizar(conteudo);
    let inicio = 0;

    // indexOf() identifica a posição da palavra encontrada.
    let posicao = textoNormalizado.indexOf(termo);

    while (posicao !== -1) {
        // slice() separa o trecho anterior à palavra pesquisada.
        fragmento.appendChild(
            document.createTextNode(conteudo.slice(inicio, posicao))
        );

        // createElement() cria a marcação responsável pelo destaque visual.
        const marca = document.createElement("mark");
        marca.className = "destaque-pesquisa";
        marca.textContent = conteudo.slice(posicao, posicao + termo.length);
        fragmento.appendChild(marca);

        inicio = posicao + termo.length;
        posicao = textoNormalizado.indexOf(termo, inicio);
    }

    fragmento.appendChild(
        document.createTextNode(conteudo.slice(inicio))
    );

    return fragmento;
}

// Atualiza o conteúdo do elemento indicado pelo seletor.
function preencherTexto(seletor, texto) {
    // empty() remove o conteúdo anterior e append() insere o texto com possíveis destaques.
    $(seletor)
        .empty()
        .append(destacar(texto, $("#pesquisar").val() || ""));
}

// Cria os cards dos personagens de acordo com a lista atual.
function renderizarCards() {
    // O seletor #carrossel identifica o elemento pelo ID.
    const carrossel = $("#carrossel");
    carrossel.empty();

    // text() atualiza a quantidade de personagens encontrados.
    $("#contador-personagens").text(
        listaAtual.length +
        (listaAtual.length === 1
            ? " personagem encontrado"
            : " personagens encontrados")
    );

    if (!listaAtual.length) {
        // append() adiciona uma mensagem quando a pesquisa não retorna resultados.
        carrossel.append(
            $("<p>", {
                class: "sem-resultado",
                text: "Nenhum personagem encontrado. Tente outra palavra."
            })
        );
        return;
    }

    // forEach() percorre a lista para gerar um card para cada personagem.
    listaAtual.forEach(function(personagem) {
        // indexOf() identifica a posição do personagem no array original.
        const indice = personagens.indexOf(personagem);

        // Cria um botão para permitir a seleção do personagem.
        const card = $("<button>", {
            type: "button",
            class: "card-personagem",
            "aria-label": "Selecionar " + personagem.nome
        });

        // addClass() aplica a classe CSS ao card selecionado.
        if (indice === selecionado) {
            card.addClass("ativo");
        }

        // Cria a imagem com texto alternativo e carregamento otimizado.
        const imagem = $("<img>", {
            src: personagem.imagem,
            alt: personagem.nome,
            loading: "lazy"
        });

        const informacoes = $("<div>", {
            class: "card-info"
        });

        const nome = $("<strong>");

        // append() adiciona o nome preservando o destaque da pesquisa.
        nome.append(
            destacar(personagem.nome, $("#pesquisar").val() || "")
        );

        informacoes.append(nome);
        informacoes.append(
            $("<small>").text(personagem.tipo)
        );

        // Insere a imagem e as informações dentro do botão.
        card.append(imagem, informacoes);

        // on("click") executa a função quando o usuário seleciona o card.
        card.on("click", function() {
            selecionarPersonagem(indice);
        });

        carrossel.append(card);
    });
}

// Exibe as informações completas do personagem selecionado.
function selecionarPersonagem(indice) {
    const personagem = personagens[indice];

    // Impede a execução caso o índice seja inválido.
    if (!personagem) return;

    selecionado = indice;

    // O seletor de classe identifica a página e css() altera sua variável de cor.
    $(".pagina-personagens").css(
        "--personagem-fundo",
        personagem.cor || "#cbb295"
    );

    // Os seletores por ID atualizam individualmente os campos de informações.
    preencherTexto("#nome-principal", personagem.nome);
    preencherTexto("#tipo-personagem", personagem.tipo);
    preencherTexto("#significado", personagem.significado);
    preencherTexto("#poder", personagem.poder);
    preencherTexto("#aparencia", personagem.aparencia);

    // attr() modifica a imagem principal e seu texto alternativo.
    $("#imagem-principal")
        .attr("src", personagem.imagem)
        .attr("alt", personagem.nome);

    // show() exibe a seção de detalhes.
    $("#detalhes").show();

    renderizarCards();
}

// Filtra os personagens de acordo com o conteúdo digitado.
function pesquisarPersonagens() {
    // val() captura o texto do campo e trim() remove espaços desnecessários.
    const termo = normalizar($("#pesquisar").val().trim());

    // filter() mantém apenas os personagens que correspondem à pesquisa.
    listaAtual = personagens.filter(function(personagem) {
        // join() reúne os dados para permitir pesquisar por diferentes informações.
        const conteudo = [
            personagem.nome,
            personagem.tipo,
            personagem.significado,
            personagem.aparencia,
            personagem.poder
        ].join(" ");

        // includes() verifica se o termo existe no conteúdo normalizado.
        return normalizar(conteudo).includes(termo);
    });

    if (!listaAtual.length) {
        renderizarCards();

        // hide() oculta os detalhes quando nenhum personagem é encontrado.
        $("#detalhes").hide();
        return;
    }

    // includes() verifica se o personagem selecionado permanece nos resultados.
    if (!listaAtual.includes(personagens[selecionado])) {
        selecionado = personagens.indexOf(listaAtual[0]);
    }

    selecionarPersonagem(selecionado);
}


// ready() aguarda o carregamento do HTML antes de executar os eventos do jQuery.
$(document).ready(function() {
    // Seletores de classe identificam o botão e a navegação dentro do cabeçalho.
    const botaoMenu = $(".site-header .menu-toggle");
    const navegacao = $(".site-header .main-nav");

    // on("click") executa a função quando o botão do menu é pressionado.
    botaoMenu.on("click", function() {
        // toggleClass() alterna a classe e hasClass() verifica se o menu está aberto.
        const aberto = navegacao
            .toggleClass("is-open")
            .hasClass("is-open");

        // attr() atualiza os atributos para indicar o estado do menu aos leitores de tela.
        botaoMenu.attr("aria-expanded", String(aberto));
        botaoMenu.attr(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    });

    // find("a") seleciona os links internos da navegação.
    navegacao.find("a").on("click", function() {
        // removeClass() fecha o menu após o usuário selecionar um link.
        navegacao.removeClass("is-open");
        botaoMenu.attr("aria-expanded", "false");
        botaoMenu.attr("aria-label", "Abrir menu");
    });

    // hasClass() impede que as funções do catálogo sejam executadas em outras páginas.
    if (!$("body").hasClass("pagina-personagens")) return;

    // length verifica se o carrossel existe antes de inicializar suas funções.
    if (!$("#carrossel").length) return;

    // O operador spread copia o array e a função exibe o primeiro personagem.
    listaAtual = [...personagens];
    selecionarPersonagem(0);

    // O evento input atualiza a pesquisa enquanto o usuário digita.
    $("#pesquisar").on("input", pesquisarPersonagens);

    // O seletor por ID identifica o botão das opções de ordenação.
    $("#menu").on("click", function(evento) {
        // stopPropagation() impede que o clique seja propagado para o document.
        evento.stopPropagation();

        const menu = $("#menu-opcoes");

        // stop() interrompe animações acumuladas e fadeToggle() alterna a visibilidade.
        menu.stop(true, true).fadeToggle(150);

        // is(":visible") verifica se o menu está visível.
        $(this).attr("aria-expanded", menu.is(":visible"));
    });

    // Reúne o fechamento do menu em uma função reutilizável.
    function fecharOrdenacao() {
        // fadeOut() oculta o menu com animação e attr() atualiza sua acessibilidade.
        $("#menu-opcoes").stop(true, true).fadeOut(150);
        $("#menu").attr("aria-expanded", "false");
    }

    // O seletor múltiplo aplica o mesmo evento aos botões de limpar e mostrar todos.
    $("#mostrar-todos, #limpar").on("click", function() {
        // val("") limpa o campo de pesquisa.
        $("#pesquisar").val("");

        // Restaura a lista original e seleciona o primeiro personagem.
        listaAtual = [...personagens];
        selecionarPersonagem(0);
        fecharOrdenacao();
    });

    // Agrupa os três botões de ordenação em um único evento.
    $("#ordenar-az, #ordenar-za, #ordenar").on("click", function() {
        // O ID do botão determina se a ordem será crescente ou decrescente.
        const sentido = this.id === "ordenar-za" ? -1 : 1;

        // sort() organiza o array e localeCompare() compara os nomes em português.
        listaAtual.sort(function(a, b) {
            return a.nome.localeCompare(b.nome, "pt-BR") * sentido;
        });

        // Atualiza os cards após a ordenação.
        renderizarCards();
        fecharOrdenacao();
    });

    // O evento no document permite identificar cliques fora do menu.
    $(document).on("click", function(evento) {
        // closest() verifica se o elemento clicado pertence ao menu.
        if (!$(evento.target).closest(".menu-container").length) {
            fecharOrdenacao();
        }
    });

    // A delegação de eventos permite detectar cliques em cards criados dinamicamente.
    $("#carrossel").on("click", ".card-personagem", function() {
        // setTimeout() aguarda a atualização antes de deslocar a página.
        setTimeout(function() {
            // scrollIntoView() posiciona suavemente a seção de detalhes na tela.
            document.getElementById("detalhes").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 150);
    });

    // O evento wheel permite utilizar a roda do mouse na navegação horizontal.
    $("#carrossel").on("wheel", function(evento) {
        const elemento = this;
        const movimento = evento.originalEvent;

        // Verifica se a tela é maior que 768px e se existe conteúdo horizontal excedente.
        if (
            window.innerWidth > 768 &&
            Math.abs(movimento.deltaY) > Math.abs(movimento.deltaX) &&
            elemento.scrollWidth > elemento.clientWidth
        ) {
            // preventDefault() bloqueia a rolagem padrão e scrollLeft move o carrossel.
            movimento.preventDefault();
            elemento.scrollLeft += movimento.deltaY;
        }
    });

    // keydown identifica as teclas pressionadas para navegar pelos personagens.
    $(document).on("keydown", function(evento) {
        // is() evita interferências quando o usuário estiver digitando em campos de texto.
        if ($(evento.target).is("input, textarea")) return;

        // indexOf() localiza o personagem selecionado na lista atual.
        const posicao = listaAtual.indexOf(personagens[selecionado]);

        // ArrowRight seleciona o próximo personagem sem ultrapassar o final da lista.
        if (
            evento.key === "ArrowRight" &&
            posicao < listaAtual.length - 1
        ) {
            selecionarPersonagem(
                personagens.indexOf(listaAtual[posicao + 1])
            );
        }

        // ArrowLeft seleciona o personagem anterior sem ultrapassar o início.
        if (
            evento.key === "ArrowLeft" &&
            posicao > 0
        ) {
            selecionarPersonagem(
                personagens.indexOf(listaAtual[posicao - 1])
            );
        }
    });
});


// ready() aguarda o HTML carregar antes de executar as funções do mapa.
$(document).ready(function() {
    // hasClass() verifica se a página atual é a do mapa.
    if (!$("body").hasClass("mapa-pagina")) return;

    // Array de objetos que reúne as informações utilizadas nas janelas dos reinos.
    const reinos = [
        {
            id: "elarion",
            nome: "Elarion",
            tipo: "REINO DOS ELFOS",
            governante: "Conselho Élfico (provisório)",
            habitantes: "Elfos",
            magia: "Natureza e sabedoria",
            local: "Biblioteca Eterna",
            descricao: "Entre montanhas claras e árvores centenárias, Elarion preserva a memória dos povos antigos.",
            historia: "Os elfos valorizam o conhecimento, a tradição e o equilíbrio com a natureza. Em suas bibliotecas, conhecimentos de eras esquecidas permanecem protegidos.",
            imagem: "assets/mapa.png",
            posicao: "15% 15%"
        },
        {
            id: "umbrelia",
            nome: "Umbrelia",
            tipo: "FLORESTA NEGRA",
            governante: "Desconhecido",
            habitantes: "Criaturas e exilados",
            magia: "Sombras e ilusões",
            local: "Árvore Ancestral",
            descricao: "Uma floresta tão antiga que nem os mapas conseguem revelar todos os seus caminhos.",
            historia: "Umbrelia não pertence a nenhum dos seis reinos. Seus caminhos mudam, suas árvores escondem segredos e suas ruínas preservam acontecimentos que muitos preferem esquecer.",
            imagem: "assets/mapa.png",
            posicao: "50% 10%"
        },
        {
            id: "miravel",
            nome: "Miravél",
            tipo: "REINO DOS DUENDES",
            governante: "Conselho dos Mestres (provisório)",
            habitantes: "Duendes",
            magia: "Alquimia e invenções",
            local: "Mercado das Maravilhas",
            descricao: "Um reino de cidades construídas nas montanhas, passagens secretas e oficinas extraordinárias.",
            historia: "Os duendes são conhecidos por sua inteligência, habilidade comercial e invenções. Em Miravél, quase tudo pode ser negociado, mas nem todo segredo está à venda.",
            imagem: "assets/mapa.png",
            posicao: "85% 15%"
        },
        {
            id: "aurelia",
            nome: "Aurelia",
            tipo: "REINO DAS FADAS",
            governante: "Rainha Caliria",
            habitantes: "Fadas",
            magia: "Encantamentos e proteção",
            local: "Templo das Asas",
            descricao: "Jardins luminosos e palácios encantados escondem uma magia muito mais poderosa do que aparentam.",
            historia: "Aurelia é governada pela sábia rainha Caliria. Apesar da beleza delicada de suas terras, o reino protege conhecimentos antigos e possui defesas mágicas extraordinárias.",
            imagem: "assets/mapa.png",
            posicao: "15% 48%"
        },
        {
            id: "nytheria",
            nome: "Nytheria",
            tipo: "REINO DOS HUMANOS",
            governante: "Monarca de Nytheria (a definir)",
            habitantes: "Humanos",
            magia: "Artefatos e alianças",
            local: "Castelo Real",
            descricao: "O coração político do continente, onde grandes alianças e perigosas rivalidades se encontram.",
            historia: "Nytheria conecta os reinos por suas rotas comerciais e diplomáticas. Seus governantes influenciam decisões que podem mudar o destino de todo o continente.",
            imagem: "assets/mapa.png",
            posicao: "50% 50%"
        },
        {
            id: "dravora",
            nome: "Dravora",
            tipo: "REINO DOS ORKS",
            governante: "Chefe dos Clãs (provisório)",
            habitantes: "Orks",
            magia: "Força ancestral",
            local: "Fortaleza de Dravora",
            descricao: "Fortalezas imponentes e montanhas vulcânicas marcam o território dos grandes clãs guerreiros.",
            historia: "Em Dravora, a força não é a única virtude. Honra, coragem e lealdade sustentam tradições que atravessam gerações.",
            imagem: "assets/mapa.png",
            posicao: "85% 55%"
        },
        {
            id: "orvelia",
            nome: "Orvélia",
            tipo: "REINO DOS MAGOS",
            governante: "Arquimago Regente (provisório)",
            habitantes: "Magos",
            magia: "Runas e magia arcana",
            local: "Observatório Astral",
            descricao: "Torres que parecem tocar as estrelas e bibliotecas proibidas dominam a paisagem de Orvélia.",
            historia: "Os magos dedicam suas vidas ao estudo da magia. Entretanto, alguns conhecimentos permanecem proibidos, pois nem todo poder pode ser controlado.",
            imagem: "assets/mapa.png",
            posicao: "18% 78%"
        }
    ];

    // Armazena o reino selecionado e o último elemento que recebeu foco.
    let reinoAtual = 0;
    let ultimoFoco = null;

    // Cria automaticamente os botões de acesso aos territórios.
    function criarAtalhosMapa() {
        // O seletor por ID identifica a área onde os atalhos serão inseridos.
        const atalhos = $("#mapa-atalhos");

        // empty() remove os botões anteriores para evitar duplicações.
        atalhos.empty();

        // forEach() percorre os reinos para criar um botão para cada território.
        reinos.forEach(function(reino) {
            // Cria um botão e associa o ID do reino ao atributo data-reino.
            const botao = $("<button>", {
                type: "button",
                text: reino.nome,
                "data-reino": reino.id
            });

            // append() adiciona o botão criado à área de atalhos.
            atalhos.append(botao);
        });
    }

    // Atualiza as informações exibidas na janela do mapa.
    function atualizarJanelaMapa(indice) {
        // O operador % permite navegar continuamente entre o último e o primeiro reino.
        reinoAtual = (indice + reinos.length) % reinos.length;

        const reino = reinos[reinoAtual];

        // Seletores por ID identificam os campos e text() atualiza seus conteúdos.
        $("#mapa-titulo").text(reino.nome);
        $("#mapa-categoria").text(reino.tipo);
        $("#mapa-descricao").text(reino.descricao);
        $("#mapa-governante").text(reino.governante);
        $("#mapa-habitantes").text(reino.habitantes);
        $("#mapa-magia").text(reino.magia);
        $("#mapa-local").text(reino.local);
        $("#mapa-historia").text(reino.historia);

        // Atualiza o contador para indicar a posição do território na lista.
        $("#mapa-indice").text(
            (reinoAtual + 1) + " / " + reinos.length
        );

        // css() altera a imagem e sua posição sem modificar o arquivo CSS.
        $("#mapa-capa").css({
            "background-image": 'url("' + reino.imagem + '")',
            "background-position": reino.posicao
        });
    }

    // Localiza o reino escolhido e abre sua janela de informações.
    function abrirJanelaMapa(id) {
        // findIndex() encontra a posição do reino pelo seu identificador.
        const indice = reinos.findIndex(function(reino) {
            return reino.id === id;
        });

        // Impede a abertura quando o ID não corresponde a um reino.
        if (indice === -1) return;

        // Guarda o foco anterior para restaurá-lo quando a janela for fechada.
        ultimoFoco = document.activeElement;
        atualizarJanelaMapa(indice);

        // stop() evita animações acumuladas, attr() atualiza a acessibilidade
        // e fadeIn() apresenta a janela com uma transição suave.
        $("#mapa-modal")
            .stop(true, true)
            .attr("aria-hidden", "false")
            .css("display", "flex")
            .hide()
            .fadeIn(250, function() {
                // trigger("focus") posiciona o foco no botão de fechar.
                $("#mapa-fechar").trigger("focus");
            });

        // addClass() aplica ao body a classe usada enquanto o modal está aberto.
        $("body").addClass("mapa-modal-aberto");
    }

    // Fecha a janela e devolve o foco ao elemento utilizado anteriormente.
    function fecharJanelaMapa() {
        // fadeOut() oculta o modal com uma animação.
        $("#mapa-modal").stop(true, true).fadeOut(200, function() {
            // this representa o modal e attr() atualiza seu estado de acessibilidade.
            $(this).attr("aria-hidden", "true");

            // removeClass() restaura o comportamento normal da página.
            $("body").removeClass("mapa-modal-aberto");

            if (ultimoFoco) {
                ultimoFoco.focus();
            }
        });
    }

    // A delegação de eventos identifica cliques nos elementos com data-reino,
    // inclusive nos botões criados dinamicamente.
    $(document).on("click", ".mapa-pagina [data-reino]", function() {
        // attr() obtém o identificador do território selecionado.
        abrirJanelaMapa($(this).attr("data-reino"));
    });

    // Associa o botão de fechar à função responsável pelo fechamento do modal.
    $("#mapa-fechar").on("click", fecharJanelaMapa);

    // Permite fechar a janela ao clicar fora de seu conteúdo.
    $("#mapa-modal").on("click", function(evento) {
        // Compara o alvo do clique com o próprio modal para evitar fechamentos internos.
        if (evento.target === this) {
            fecharJanelaMapa();
        }
    });

    // Os seletores por ID identificam os botões de navegação entre territórios.
    $("#mapa-anterior").on("click", function() {
        atualizarJanelaMapa(reinoAtual - 1);
    });

    $("#mapa-proximo").on("click", function() {
        atualizarJanelaMapa(reinoAtual + 1);
    });

    // keydown permite controlar o modal utilizando o teclado.
    $(document).on("keydown", function(evento) {
        // is(":visible") impede que os atalhos funcionem com o modal fechado.
        if (!$("#mapa-modal").is(":visible")) return;

        // Escape fecha a janela sem exigir o uso do mouse.
        if (evento.key === "Escape") {
            fecharJanelaMapa();
            return;
        }

        // As setas permitem navegar pelos reinos.
        if (evento.key === "ArrowLeft") {
            atualizarJanelaMapa(reinoAtual - 1);
        }

        if (evento.key === "ArrowRight") {
            atualizarJanelaMapa(reinoAtual + 1);
        }

        // Tab mantém a navegação por teclado dentro dos botões do modal.
        if (evento.key === "Tab") {
            // O seletor button:visible encontra apenas os botões visíveis.
            const elementos = $("#mapa-modal button:visible");
            const primeiro = elementos[0];
            const ultimo = elementos[elementos.length - 1];

            // Shift + Tab retorna ao último botão quando o primeiro está selecionado.
            if (evento.shiftKey && document.activeElement === primeiro) {
                evento.preventDefault();
                ultimo.focus();
            } else if (
                !evento.shiftKey &&
                document.activeElement === ultimo
            ) {
                // Tab retorna ao primeiro botão ao chegar ao final da janela.
                evento.preventDefault();
                primeiro.focus();
            }
        }
    });

    // O evento input executa a pesquisa enquanto o usuário digita.
    $("#mapa-pesquisar").on("input", function() {
        // val() obtém o texto, trim() remove espaços e normalizar() ignora acentos.
        const termo = normalizar($(this).val().trim());
        let encontrados = 0;

        // forEach() verifica as informações de cada reino.
        reinos.forEach(function(reino) {
            // join() reúne os campos para permitir a pesquisa por diferentes informações.
            const conteudo = [
                reino.nome,
                reino.tipo,
                reino.governante,
                reino.habitantes,
                reino.magia,
                reino.local,
                reino.descricao,
                reino.historia
            ].join(" ");

            // includes() verifica se o termo pesquisado aparece no conteúdo.
            const corresponde = normalizar(conteudo).includes(termo);

            // O seletor de atributo [data-reino] identifica os elementos de cada território.
            // toggleClass() controla sua visibilidade e prop() desativa os não encontrados.
            $('.mapa-pagina [data-reino="' + reino.id + '"]')
                .toggleClass("mapa-oculto", !corresponde)
                .prop("disabled", !corresponde);

            if (corresponde) {
                encontrados++;
            }
        });

        // text() atualiza a quantidade de territórios encontrados.
        $("#mapa-contador").text(
            encontrados +
            (encontrados === 1
                ? " território encontrado"
                : " territórios encontrados")
        );
    });

    // Gera os botões de acesso aos reinos após a inicialização da página.
    criarAtalhosMapa();
});


// ready() aguarda o carregamento do HTML antes de acessar os elementos com jQuery.
$(document).ready(function () {
    // hasClass() limita a execução do quiz à página correspondente.
    if (!$("body").hasClass("pagina-quiz")) return;

    // Array de objetos que armazena as perguntas e suas alternativas.
    // Cada resposta possui traços utilizados posteriormente na pontuação.
    const perguntasQuiz = [
        {
            pergunta: "Qual dessas verdades seria mais difícil aceitar?",
            respostas: [
                { texto: "Nem tudo pode ser compreendido.", tracos: ["curiosidade", "sabedoria", "desconfianca"] },
                { texto: "Nem todos podem ser salvos.", tracos: ["protecao", "empatia", "sacrificio"] },
                { texto: "Nem sempre terei o controle.", tracos: ["ambicao", "orgulho", "independencia"] },
                { texto: "Nem todo amor é suficiente.", tracos: ["amor", "melancolia", "lealdade"] }
            ]
        },
        {
            pergunta: "Uma pessoa que te magoou pede perdão. O que pesa mais?",
            respostas: [
                { texto: "O arrependimento que ela demonstra.", tracos: ["empatia", "paciencia", "amor"] },
                { texto: "O que ela fez para reparar o erro.", tracos: ["justica", "responsabilidade", "observacao"] },
                { texto: "A possibilidade de ela repetir tudo.", tracos: ["desconfianca", "cautela", "estrategia"] },
                { texto: "O quanto aquilo ainda me machuca.", tracos: ["melancolia", "vinganca", "lealdade"] }
            ]
        },
        {
            pergunta: "Você encontra um livro que revela seu futuro. Qual página abriria?",
            respostas: [
                { texto: "Aquela que mostra quem permanecerá ao meu lado.", tracos: ["lealdade", "amor", "protecao"] },
                { texto: "A que revela minha maior conquista.", tracos: ["ambicao", "lideranca", "orgulho"] },
                { texto: "A que explica meu maior arrependimento.", tracos: ["sabedoria", "melancolia", "responsabilidade"] },
                { texto: "Nenhuma. Prefiro descobrir sozinho.", tracos: ["independencia", "aventura", "coragem"] }
            ]
        },
        {
            pergunta: "Durante uma discussão, o que mais te incomoda?",
            respostas: [
                { texto: "Não entenderem meu ponto de vista.", tracos: ["criatividade", "curiosidade", "orgulho"] },
                { texto: "Usarem meus sentimentos contra mim.", tracos: ["desconfianca", "misterio", "melancolia"] },
                { texto: "Tratarem alguém injustamente.", tracos: ["justica", "coragem", "protecao"] },
                { texto: "Ignorarem os fatos que apresentei.", tracos: ["observacao", "sabedoria", "estrategia"] }
            ]
        },
        {
            pergunta: "Uma magia permite apagar uma única lembrança. Você...",
            respostas: [
                { texto: "Apagaria algo que ainda me faz sofrer.", tracos: ["melancolia", "amor", "empatia"] },
                { texto: "Guardaria até as lembranças dolorosas.", tracos: ["sabedoria", "responsabilidade", "paciencia"] },
                { texto: "Apagaria um segredo perigoso de outra pessoa.", tracos: ["protecao", "sacrificio", "astucia"] },
                { texto: "Tentaria descobrir como a magia funciona.", tracos: ["curiosidade", "criatividade", "independencia"] }
            ]
        },
        {
            pergunta: "Qual elogio teria mais significado para você?",
            respostas: [
                { texto: "Você me fez sentir seguro.", tracos: ["protecao", "lealdade", "empatia"] },
                { texto: "Nunca conheci alguém como você.", tracos: ["independencia", "criatividade", "misterio"] },
                { texto: "Eu não teria conseguido sem sua inteligência.", tracos: ["sabedoria", "estrategia", "observacao"] },
                { texto: "Você teve coragem quando ninguém teve.", tracos: ["coragem", "lideranca", "sacrificio"] }
            ]
        },
        {
            pergunta: "Você descobre que alguém próximo esconde um segredo. O que faz?",
            respostas: [
                { texto: "Espero que confie em mim para contar.", tracos: ["paciencia", "empatia", "lealdade"] },
                { texto: "Investigo discretamente.", tracos: ["observacao", "astucia", "desconfianca"] },
                { texto: "Pergunto diretamente, sem rodeios.", tracos: ["coragem", "impulsividade", "justica"] },
                { texto: "Guardo a informação até precisar dela.", tracos: ["misterio", "estrategia", "ambicao"] }
            ]
        },
        {
            pergunta: "Qual situação faria você quebrar uma regra?",
            respostas: [
                { texto: "Salvar alguém importante para mim.", tracos: ["amor", "protecao", "impulsividade"] },
                { texto: "Impedir uma injustiça.", tracos: ["justica", "coragem", "responsabilidade"] },
                { texto: "Descobrir uma verdade proibida.", tracos: ["curiosidade", "sabedoria", "independencia"] },
                { texto: "Conquistar algo que me foi negado.", tracos: ["ambicao", "orgulho", "vinganca"] }
            ]
        },
        {
            pergunta: "Quando tudo dá errado, qual costuma ser sua primeira reação?",
            respostas: [
                { texto: "Me afasto para pensar com clareza.", tracos: ["cautela", "estrategia", "observacao"] },
                { texto: "Tento resolver imediatamente.", tracos: ["impulsividade", "coragem", "lideranca"] },
                { texto: "Procuro alguém em quem confio.", tracos: ["lealdade", "empatia", "amor"] },
                { texto: "Invento outro caminho, mesmo arriscado.", tracos: ["criatividade", "independencia", "aventura"] }
            ]
        },
        {
            pergunta: "Se sua história fosse contada, o que gostaria que lembrassem?",
            respostas: [
                { texto: "Das pessoas que consegui proteger.", tracos: ["protecao", "sacrificio", "lealdade"] },
                { texto: "Das coisas que descobri e ensinei.", tracos: ["sabedoria", "curiosidade", "criatividade"] },
                { texto: "Dos limites que consegui superar.", tracos: ["coragem", "independencia", "aventura"] },
                { texto: "Da marca que deixei no mundo.", tracos: ["ambicao", "lideranca", "orgulho"] }
            ]
        }
    ];

    // Objeto que relaciona cada personagem aos seis traços de personalidade.
    // Esses perfis são comparados às respostas para identificar a maior afinidade.
    const perfisQuiz = {
        "Calístis": ["lideranca", "sabedoria", "lealdade", "coragem", "responsabilidade", "protecao"],
        "Seraphyne": ["empatia", "paciencia", "amor", "protecao", "sacrificio", "natureza"],
        "Ailith": ["coragem", "lealdade", "sarcasmo", "aventura", "protecao", "impulsividade"],
        "Alethéa": ["curiosidade", "empatia", "criatividade", "aventura", "observacao", "misterio"],
        "Zephyros": ["lideranca", "disciplina", "coragem", "responsabilidade", "protecao", "lealdade"],
        "Morgrin": ["empatia", "sabedoria", "paciencia", "responsabilidade", "lealdade", "sacrificio"],
        "Dynarion": ["aventura", "criatividade", "curiosidade", "independencia", "misterio", "coragem"],
        "Elíria": ["criatividade", "curiosidade", "empatia", "observacao", "sabedoria", "paciencia"],
        "Morvathan": ["misterio", "sarcasmo", "astucia", "ambicao", "desconfianca", "independencia"],
        "Osric": ["lideranca", "sabedoria", "misterio", "paciencia", "responsabilidade", "melancolia"],
        "Elorya": ["estrategia", "observacao", "coragem", "natureza", "criatividade", "justica"],
        "Kaemor": ["ambicao", "orgulho", "vinganca", "astucia", "lideranca", "impulsividade"],
        "Calemir": ["responsabilidade", "lealdade", "estrategia", "paciencia", "protecao", "disciplina"],
        "Vaéros": ["amor", "sacrificio", "misterio", "melancolia", "protecao", "independencia"],
        "Thalior": ["aventura", "independencia", "criatividade", "coragem", "sarcasmo", "astucia"],
        "Noletir": ["lideranca", "observacao", "estrategia", "disciplina", "natureza", "sabedoria"],
        "Sireth": ["vinganca", "amor", "astucia", "empatia", "misterio", "independencia"],
        "Verídia": ["sabedoria", "sarcasmo", "curiosidade", "criatividade", "observacao", "empatia"],
        "Noédris": ["sabedoria", "observacao", "misterio", "estrategia", "disciplina", "ambicao"],
        "Letharion": ["astucia", "desconfianca", "misterio", "ambicao", "observacao", "independencia"],
        "Thragor": ["orgulho", "impulsividade", "lideranca", "coragem", "protecao", "vinganca"],
        "Morveth": ["melancolia", "sabedoria", "paciencia", "misterio", "empatia", "sacrificio"],
        "Vulkar": ["coragem", "orgulho", "impulsividade", "lealdade", "aventura", "independencia"],
        "Raveth": ["observacao", "estrategia", "sarcasmo", "astucia", "coragem", "desconfianca"],
        "Firas": ["observacao", "astucia", "desconfianca", "estrategia", "paciencia", "disciplina"],
        "Myrina": ["empatia", "natureza", "lideranca", "protecao", "vinganca", "responsabilidade"],
        "Huldra": ["misterio", "independencia", "astucia", "aventura", "desconfianca", "natureza"],
        "Briar": ["natureza", "protecao", "lealdade", "desconfianca", "amor", "sacrificio"],
        "Rune": ["criatividade", "curiosidade", "astucia", "sabedoria", "sarcasmo", "independencia"],
        "Pilar": ["independencia", "criatividade", "coragem", "aventura", "estrategia", "orgulho"]
    };

    // Converte os identificadores internos dos traços em nomes legíveis no resultado.
    const nomesTracos = {
        coragem: "Coragem",
        sabedoria: "Sabedoria",
        lealdade: "Lealdade",
        empatia: "Empatia",
        astucia: "Astúcia",
        ambicao: "Ambição",
        curiosidade: "Curiosidade",
        protecao: "Instinto protetor",
        observacao: "Percepção",
        estrategia: "Pensamento estratégico",
        independencia: "Independência",
        criatividade: "Criatividade",
        lideranca: "Liderança",
        misterio: "Natureza misteriosa",
        amor: "Amor profundo",
        vinganca: "Determinação intensa",
        paciencia: "Paciência",
        responsabilidade: "Responsabilidade",
        aventura: "Espírito aventureiro",
        orgulho: "Orgulho",
        melancolia: "Sensibilidade",
        natureza: "Conexão com a natureza",
        disciplina: "Disciplina",
        desconfianca: "Prudência",
        sacrificio: "Altruísmo",
        sarcasmo: "Humor afiado",
        impulsividade: "Espontaneidade",
        cautela: "Cautela",
        justica: "Senso de justiça",
        diplomacia: "Diplomacia"
    };

    // Armazena os textos personalizados apresentados para cada resultado possível.
    const descricoesQuiz = {
        "Calístis": "Você possui a força de quem nasceu para liderar, mas entende que uma coroa não significa nada sem confiança. Sua maior qualidade é equilibrar firmeza e sensibilidade.",
        "Seraphyne": "Você é a presença que acolhe mesmo quando tudo parece perdido. Sua gentileza não é fraqueza: é uma forma rara de coragem.",
        "Ailith": "Você tem espírito de aventura, respostas afiadas e uma lealdade difícil de encontrar. Quando ama alguém, não mede esforços para protegê-lo.",
        "Alethéa": "Sua curiosidade ilumina caminhos que outras pessoas nem percebem. Você encontra beleza no desconhecido e esperança onde ninguém mais procura.",
        "Zephyros": "Você sabe agir quando todos hesitam. Coragem e responsabilidade caminham juntas em suas escolhas, especialmente quando alguém depende de você.",
        "Morgrin": "Você prefere fazer a diferença em silêncio. Sua sabedoria aparece nos pequenos gestos, e sua lealdade permanece mesmo quando ninguém está olhando.",
        "Dynarion": "Você não nasceu para aceitar limites sem questioná-los. Sua imaginação transforma o impossível em um desafio irresistível.",
        "Elíria": "Você enxerga possibilidades escondidas em sentimentos, palavras e acontecimentos. Sua criatividade vem acompanhada de uma sensibilidade especial.",
        "Morvathan": "Você raramente revela todas as suas intenções. Seu humor afiado e sua mente independente escondem uma personalidade intensa e difícil de decifrar.",
        "Osric": "Você carrega a postura de quem já precisou tomar decisões difíceis. Conhecimento, autocontrole e responsabilidade definem sua maneira de enfrentar o mundo.",
        "Elorya": "Você observa antes de agir e encontra soluções que passam despercebidas pelos outros. Sua força está na inteligência, na coragem e na capacidade de adaptação.",
        "Kaemor": "Você não gosta de perder o controle do próprio destino. Sua determinação pode abrir caminhos extraordinários, mas também exige cuidado com a sede de poder.",
        "Calemir": "Você é o porto seguro de quem ama. Sua calma, disciplina e lealdade fazem de você alguém em quem os outros confiam nos momentos decisivos.",
        "Vaéros": "Você sente profundamente, mesmo quando prefere esconder. Sua disposição para proteger o que ama pode levá-lo a escolhas que ninguém mais compreenderia.",
        "Thalior": "Você transforma obstáculos em aventuras. Sua liberdade é preciosa, e sua facilidade de improvisar faz com que encontre saídas onde outros veem muros.",
        "Noletir": "Você possui a paciência de um observador e a firmeza de um líder. Prefere compreender o terreno antes de dar o primeiro passo.",
        "Sireth": "Seu coração reúne delicadeza e intensidade. Você pode ser acolhedor, mas não esquece facilmente aquilo que considera uma injustiça.",
        "Verídia": "Você vive entre histórias, perguntas e observações que ninguém mais faz. Sua inteligência vem acompanhada de ironia e de uma sensibilidade discreta.",
        "Noédris": "Você encontra segurança no conhecimento. Analisa pessoas e situações profundamente, revelando pouco de si até compreender o que está diante de você.",
        "Letharion": "Você é independente, calculista e difícil de surpreender. Costuma confiar mais no que observa do que nas promessas que escuta.",
        "Thragor": "Você enfrenta desafios de frente e não aceita facilmente ser contrariado. Sua força e seu orgulho escondem um poderoso instinto de proteção.",
        "Morveth": "Você compreende o peso das perdas e o valor das memórias. Sua sensibilidade é profunda, mesmo que raramente seja mostrada.",
        "Vulkar": "Você prefere viver intensamente a permanecer parado. Competitividade, coragem e lealdade fazem parte da sua essência.",
        "Raveth": "Você identifica detalhes que os outros ignoram. Seu raciocínio rápido, sua confiança e seu sarcasmo tornam você um adversário difícil.",
        "Firas": "Você percebe mudanças sutis no comportamento das pessoas. É estratégico, reservado e dificilmente toma uma decisão sem avaliar suas consequências.",
        "Myrina": "Você protege com ternura, mas sabe se tornar implacável quando necessário. Sua força nasce do vínculo com aquilo que ama.",
        "Huldra": "Você prefere os caminhos que ninguém conhece. Sua independência e sua natureza misteriosa fazem com que poucos consigam prever suas escolhas.",
        "Briar": "Você não entrega sua confiança facilmente, mas sua lealdade é profunda. Sua conexão com a vida e seu desejo de proteger são suas maiores forças.",
        "Rune": "Você gosta de desmontar certezas e descobrir novas possibilidades. Sua criatividade e seu humor tornam sua inteligência impossível de ignorar.",
        "Pilar": "Você prefere construir suas próprias oportunidades. Independente e inventiva, transforma ideias ousadas em caminhos concretos."
    };

    // Controla a pergunta exibida e registra as alternativas escolhidas.
    // fill(null) indica que nenhuma resposta foi selecionada inicialmente.
    let perguntaAtual = 0;
    let respostasEscolhidas = Array(perguntasQuiz.length).fill(null);
    let resultadoAtual = null;

    
    // Exibe apenas a seção correspondente à etapa atual do quiz.
    function mostrarSecaoQuiz(id) {
        // O seletor múltiplo seleciona as três seções e prop() altera a propriedade hidden.
        $("#quiz-intro, #quiz-card, #quiz-result").prop("hidden", true);
        $(id).prop("hidden", false);

        // querySelector() encontra a seção pelo seletor recebido.
        const secao = document.querySelector(id);

        if (secao) {
            // scrollIntoView() desloca a página suavemente até a seção.
            secao.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }

    // Monta as alternativas e atualiza a barra de progresso.
    function renderizarPerguntaQuiz() {
        const pergunta = perguntasQuiz[perguntaAtual];
        const respostaAtual = respostasEscolhidas[perguntaAtual];

        // text() atualiza o contador sem interpretar o conteúdo como HTML.
        $("#question-count").text(
            "Pergunta " +
            String(perguntaAtual + 1).padStart(2, "0") +
            " de " + perguntasQuiz.length
        );

        // Math.round() arredonda a porcentagem de progresso.
        const porcentagem = Math.round(
            perguntaAtual / perguntasQuiz.length * 100
        );

        // Seletores por ID identificam os elementos de progresso e da pergunta.
        $("#quiz-percentage").text(porcentagem + "%");
        $("#progress-fill").css("width", porcentagem + "%");
        $("#question-title").text(pergunta.pergunta);
        $("#quiz-error").text("");

        // empty() remove as alternativas anteriores antes de criar as novas.
        const lista = $("#answer-list").empty();
        const letras = ["A", "B", "C", "D"];

        // forEach() percorre todas as alternativas da pergunta atual.
        pergunta.respostas.forEach(function(resposta, indice) {
            const selecionada = respostaAtual === indice;

            // $("<button>") cria um botão com classe e atributo de acessibilidade.
            const botao = $("<button>", {
                type: "button",
                class: "answer-option",
                "aria-pressed": String(selecionada)
            });

            // addClass() identifica visualmente a alternativa já selecionada.
            if (selecionada) {
                botao.addClass("selected");
            }

            // append() insere a letra correspondente à alternativa.
            botao.append(
                $("<span>", {
                    class: "answer-mark",
                    text: letras[indice]
                })
            );

            // text() insere o conteúdo da resposta como texto.
            botao.append(
                $("<span>").text(resposta.texto)
            );

            // on("click") registra a resposta escolhida pelo usuário.
            botao.on("click", function() {
                respostasEscolhidas[perguntaAtual] = indice;

                // removeClass() desmarca as outras opções e attr() atualiza o estado acessível.
                $("#answer-list .answer-option")
                    .removeClass("selected")
                    .attr("aria-pressed", "false");

                // addClass() destaca a resposta selecionada.
                botao.addClass("selected")
                    .attr("aria-pressed", "true");

                // prop() habilita o botão de continuar.
                $("#next-question").prop("disabled", false);
                $("#quiz-error").text("");
            });

            // append() adiciona cada botão à lista de respostas.
            lista.append(botao);
        });

        // Desativa o botão de voltar quando o usuário está na primeira pergunta.
        $("#previous-question").prop(
            "disabled",
            perguntaAtual === 0
        );

        // Atualiza o botão conforme a resposta e a posição no quiz.
        $("#next-question")
            .prop("disabled", respostaAtual === null)
            .text(
                perguntaAtual === perguntasQuiz.length - 1
                    ? "Revelar meu personagem ✧"
                    : "Continuar ⟶"
            );
    }

    // Calcula a afinidade entre as respostas escolhidas e os perfis dos personagens.
    function calcularResultadoQuiz() {
        const pontos = {};
        const frequencia = {};

        // Object.entries() transforma os perfis em pares de nome e características.
        const perfis = Object.entries(perfisQuiz);

        // forEach() contabiliza quantos personagens possuem cada característica.
        perfis.forEach(function([nome, tracos]) {
            tracos.forEach(function(traco) {
                frequencia[traco] = (frequencia[traco] || 0) + 1;
            });
        });

        // Percorre as respostas para atribuir pontos aos traços escolhidos.
        respostasEscolhidas.forEach(function(indiceResposta, indicePergunta) {
            const resposta = perguntasQuiz[indicePergunta]
                .respostas[indiceResposta];

            // A posição do traço determina seu peso na pontuação.
            resposta.tracos.forEach(function(traco, indice) {
                const peso = [5, 3, 2][indice];
                pontos[traco] = (pontos[traco] || 0) + peso;
            });
        });

        const ranking = personagens
            // filter() mantém somente personagens com perfis cadastrados.
            .filter(function(personagem) {
                return Array.isArray(perfisQuiz[personagem.nome]);
            })
            // map() calcula uma pontuação individual para cada personagem.
            .map(function(personagem) {
                const perfil = perfisQuiz[personagem.nome];

                let afinidade = 0;
                let coincidencias = 0;
                let caracteristicasFortes = 0;

                // forEach() compara os traços do personagem com os pontos obtidos.
                perfil.forEach(function(traco, indice) {
                    const pontosRecebidos = pontos[traco] || 0;
                    const importancia = [1.6, 1.35, 1.15, 1, 0.9, 0.8][indice];

                    // A raridade aumenta o valor dos traços menos comuns.
                    const raridade = 1 + (
                        1 - frequencia[traco] / perfis.length
                    ) * 0.5;

                    afinidade += pontosRecebidos * importancia * raridade;

                    if (pontosRecebidos > 0) {
                        coincidencias++;
                    }

                    if (pontosRecebidos >= 8) {
                        caracteristicasFortes++;
                    }
                });

                // Acrescenta bônus pela variedade e intensidade das características.
                const cobertura = coincidencias / perfil.length;
                const bonusEquilibrio = cobertura * 6;
                const bonusProfundidade = caracteristicasFortes * 1.5;

                const pontuacaoFinal =
                    afinidade + bonusEquilibrio + bonusProfundidade;

                // sort() organiza os traços do personagem conforme a pontuação recebida.
                const principais = [...perfil].sort(function(a, b) {
                    return (pontos[b] || 0) - (pontos[a] || 0);
                });

                // reduce() soma valores ponderados para desempatar resultados semelhantes.
                const desempate = perfil.reduce(function(total, traco, indice) {
                    return total + (pontos[traco] || 0) / (indice + 1);
                }, 0);

                return {
                    personagem: personagem,
                    pontuacao: pontuacaoFinal,
                    principais: principais,
                    coincidencias: coincidencias,
                    desempate: desempate
                };
            });

        // sort() coloca os personagens com maior afinidade no início do ranking.
        ranking.sort(function(a, b) {
            if (Math.abs(b.pontuacao - a.pontuacao) > 0.000001) {
                return b.pontuacao - a.pontuacao;
            }

            if (b.coincidencias !== a.coincidencias) {
                return b.coincidencias - a.coincidencias;
            }

            if (b.desempate !== a.desempate) {
                return b.desempate - a.desempate;
            }

            // localeCompare() usa a ordem alfabética em português como último desempate.
            return a.personagem.nome.localeCompare(
                b.personagem.nome,
                "pt-BR"
            );
        });

        // Retorna o personagem com a maior pontuação.
        return ranking[0];
    }

    // Salva o resultado no armazenamento local do navegador.
    function salvarResultadoQuiz() {
        if (!resultadoAtual) return false;

        const personagem = resultadoAtual.personagem;

        const dados = {
            nome: personagem.nome,
            tipo: personagem.tipo,
            imagem: personagem.imagem,
            descricao: descricoesQuiz[personagem.nome],
            poder: personagem.poder,

            // slice() seleciona os três primeiros traços e map() converte seus nomes.
            tracos: resultadoAtual.principais.slice(0, 3).map(function(traco) {
                return nomesTracos[traco] || traco;
            }),

            // Registra a data e o horário do resultado.
            data: new Date().toISOString()
        };

        try {
            // JSON.stringify() converte o objeto em texto para salvar no localStorage.
            localStorage.setItem(
                "fairyworld_resultado_personagem",
                JSON.stringify(dados)
            );
            return true;
        } catch (erro) {
            // Evita interromper o quiz caso o navegador bloqueie o armazenamento.
            return false;
        }
    }

    // Exibe o personagem que obteve a maior afinidade.
    function exibirResultadoQuiz() {
        resultadoAtual = calcularResultadoQuiz();

        if (!resultadoAtual) {
            $("#quiz-error").text(
                "Não foi possível calcular o resultado."
            );
            return;
        }

        const personagem = resultadoAtual.personagem;

        // text() atualiza o nome, a categoria e a descrição do personagem.
        $("#result-title").text(personagem.nome);
        $("#result-type").text(personagem.tipo);

        $("#result-description").text(
            descricoesQuiz[personagem.nome] ||
            "Suas escolhas revelaram uma afinidade especial com este personagem."
        );

        // attr() atualiza o endereço e o texto alternativo da imagem.
        $("#result-image")
            .attr("src", personagem.imagem)
            .attr("alt", "Personagem " + personagem.nome);

        // css() define a cor personalizada do retrato.
        $(".quiz-result-portrait").css(
            "--quiz-portrait",
            personagem.cor || "#d9c3a4"
        );

        // slice(), map() e join() formatam as três principais características.
        $("#result-traits").text(
            resultadoAtual.principais
                .slice(0, 3)
                .map(function(traco) {
                    return nomesTracos[traco] || traco;
                })
                .join(" · ")
        );

        $("#result-power").text(personagem.poder);
        $("#quiz-save-feedback").text("");

        // Exibe a seção de resultado e tenta salvar automaticamente.
        mostrarSecaoQuiz("#quiz-result");

        if (salvarResultadoQuiz()) {
            $("#quiz-save-feedback").text(
                "Sua essência foi guardada neste navegador."
            );
        }
    }

    // on("click") inicia o quiz e reinicia suas respostas.
    $("#start-quiz").on("click", function() {
        perguntaAtual = 0;
        respostasEscolhidas = Array(perguntasQuiz.length).fill(null);
        resultadoAtual = null;

        renderizarPerguntaQuiz();
        mostrarSecaoQuiz("#quiz-card");
    });

    // Permite retornar à pergunta anterior sem apagar as respostas anteriores.
    $("#previous-question").on("click", function() {
        if (perguntaAtual > 0) {
            perguntaAtual--;
            renderizarPerguntaQuiz();
        }
    });

    // Avança para a próxima pergunta ou apresenta o resultado.
    $("#next-question").on("click", function() {
        if (respostasEscolhidas[perguntaAtual] === null) {
            $("#quiz-error").text(
                "Escolha uma alternativa antes de continuar."
            );
            return;
        }

        if (perguntaAtual < perguntasQuiz.length - 1) {
            perguntaAtual++;
            renderizarPerguntaQuiz();
        } else {
            exibirResultadoQuiz();
        }
    });

    // Reinicia o quiz e retorna à tela inicial.
    $("#restart-quiz").on("click", function() {
        perguntaAtual = 0;
        respostasEscolhidas = Array(perguntasQuiz.length).fill(null);
        resultadoAtual = null;

        mostrarSecaoQuiz("#quiz-intro");
    });

    // Permite salvar novamente o resultado ao clicar no botão.
    $("#save-result").on("click", function() {
        $("#quiz-save-feedback").text(
            salvarResultadoQuiz()
                ? "Resultado salvo neste navegador!"
                : "Não foi possível salvar neste navegador."
        );
    });
});


// Aguarda o carregamento da página antes de configurar a janela da história.
$(document).ready(function() {
    // Seletores por ID identificam o botão de abertura, o modal e o botão de fechar.
    const abrirHistoria = $("#abrir-historia");
    const modalHistoria = $("#historia-modal");
    const fecharHistoria = $("#historia-fechar");

    // Verifica se os elementos existem para executar o código somente na página inicial.
    if (!abrirHistoria.length || !modalHistoria.length) return;

    // on("click") abre a sinopse quando o usuário seleciona "Conheça a história".
    abrirHistoria.on("click", function(evento) {
        // preventDefault() impede que o link altere a posição da página.
        evento.preventDefault();

        // attr() informa que a janela está aberta.
        modalHistoria.attr("aria-hidden", "false");

        // css() exibe a janela utilizando o layout definido no CSS.
        modalHistoria.css("display", "flex");

        // addClass() permite bloquear a rolagem da página enquanto a janela estiver aberta.
        $("body").addClass("mapa-modal-aberto");

        // trigger() direciona o foco para o botão de fechar.
        fecharHistoria.trigger("focus");
    });

    // Função responsável por fechar a janela da sinopse.
    function fecharSinopse() {
        // css() oculta a janela e attr() atualiza seu estado de acessibilidade.
        modalHistoria.css("display", "none");
        modalHistoria.attr("aria-hidden", "true");

        // removeClass() restaura o comportamento normal da página.
        $("body").removeClass("mapa-modal-aberto");

        // Devolve o foco ao botão que abriu a história.
        abrirHistoria.trigger("focus");
    }

    // Fecha a janela ao clicar no botão X.
    fecharHistoria.on("click", fecharSinopse);

    // Permite fechar a janela clicando fora do conteúdo da sinopse.
    modalHistoria.on("click", function(evento) {
        if (evento.target === this) {
            fecharSinopse();
        }
    });

    // keydown() identifica a tecla Escape para fechar a janela pelo teclado.
    $(document).on("keydown", function(evento) {
        if (
            evento.key === "Escape" &&
            modalHistoria.attr("aria-hidden") === "false"
        ) {
            fecharSinopse();
        }
    });
});


// Funcionalidade demonstrativa de cadastro e login no navegador.
$(function () {
    const $tabs = $(".account-tab");
    const $forms = $(".account-form");
    const $feedback = $(".form-feedback");
    if (!$tabs.length || !$forms.length) return;

    function mostrarPainel(id) {
        $tabs.removeClass("active").attr("aria-selected", "false");
        $tabs.filter(`[data-panel="${id}"]`).addClass("active").attr("aria-selected", "true");
        $forms.removeClass("active").attr("hidden", true);
        $("#" + id).addClass("active").removeAttr("hidden");
        $feedback.text("");
    }

    $tabs.each(function () {
        $(this).attr("aria-selected", $(this).hasClass("active") ? "true" : "false");
    });
    $forms.each(function () {
        if (!$(this).hasClass("active")) $(this).attr("hidden", true);
    });

    $tabs.on("click", function () {
        mostrarPainel($(this).data("panel"));
    });

    $("#register-panel").on("submit", function (event) {
        event.preventDefault();
        const nome = $("#register-name").val().trim();
        const email = $("#register-email").val().trim().toLowerCase();
        const senha = $("#register-password").val();
        if (!nome || !email || senha.length < 6) {
            $feedback.text("Preencha todos os campos. A senha precisa ter pelo menos 6 caracteres.");
            return;
        }
        let contas = [];
        try { contas = JSON.parse(localStorage.getItem("faryWorldContas") || "[]"); } catch (_) { contas = []; }
        if (contas.some(conta => conta.email === email)) {
            $feedback.text("Este e-mail já possui cadastro. Entre ou use outro e-mail.");
            return;
        }
        contas.push({ nome, email, senha });
        localStorage.setItem("faryWorldContas", JSON.stringify(contas));
        $feedback.text("Cadastro realizado! Agora você já pode entrar no mundo.");
        this.reset();
        mostrarPainel("login-panel");
        $("#login-email").val(email);
        $feedback.text("Cadastro realizado! Entre com seu e-mail e sua senha.");
    });

    $("#login-panel").on("submit", function (event) {
        event.preventDefault();
        const email = $("#login-email").val().trim().toLowerCase();
        const senha = $("#login-password").val();
        let contas = [];
        try { contas = JSON.parse(localStorage.getItem("faryWorldContas") || "[]"); } catch (_) { contas = []; }
        const conta = contas.find(item => item.email === email && item.senha === senha);
        if (!conta) {
            $feedback.text("E-mail ou senha não encontrados. Confira os dados ou crie sua conta.");
            return;
        }
        localStorage.setItem("faryWorldUsuario", JSON.stringify({ nome: conta.nome, email: conta.email }));
        $feedback.text("Bem-vinda(o), " + conta.nome + "! Login realizado neste navegador.");
    });
});


/* FARY WORLD - CONTROLE GLOBAL DO SOM (todas as páginas) */
(function () {
  function setupFarySound() {
    var audio = document.getElementById('ambient-audio');
    var button = document.getElementById('sound-toggle');
    if (!audio || !button || button.dataset.soundReady === 'true') return;
    button.dataset.soundReady = 'true';
    var label = button.querySelector('.sound-label');
    var icon = button.querySelector('.sound-icon');
    audio.volume = 0.35;

    function update(playing) {
      button.classList.toggle('is-playing', playing);
      button.setAttribute('aria-pressed', playing ? 'true' : 'false');
      button.setAttribute('aria-label', playing ? 'Desligar som de fada' : 'Ligar som de fada');
      if (label) label.textContent = playing ? 'Som ligado' : 'Som desligado';
      if (icon) icon.textContent = playing ? '♫' : '♪';
    }
    button.addEventListener('click', function () {
      if (audio.paused) {
        var result = audio.play();
        if (result && typeof result.then === 'function') {
          result.then(function () {
            update(true);
            try { localStorage.setItem('faryWorldSomAtivo', 'true'); } catch (e) {}
          }).catch(function () {
            update(false);
            if (label) label.textContent = 'Toque para ligar';
          });
        } else {
          update(true);
          try { localStorage.setItem('faryWorldSomAtivo', 'true'); } catch (e) {}
        }
      } else {
        audio.pause();
        update(false);
        try { localStorage.setItem('faryWorldSomAtivo', 'false'); } catch (e) {}
      }
    });
    audio.addEventListener('pause', function () { update(false); });
    audio.addEventListener('play', function () { update(true); });
    update(false);
    // Se a pessoa já havia ligado o som, tenta manter a preferência ao trocar de página.
    try {
      if (localStorage.getItem('faryWorldSomAtivo') === 'true') {
        audio.play().then(function () { update(true); }).catch(function () { update(false); });
      }
    } catch (e) {}
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupFarySound);
  } else {
    setupFarySound();
  }
})();
