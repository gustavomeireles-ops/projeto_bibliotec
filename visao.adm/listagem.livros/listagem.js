const livros = document.querySelectorAll(".livro");

const botao_anterior = document.getElementById("pagina-anterior");
const botao_proxima = document.getElementById("proxima-pagina");
const numero_pagina = document.querySelector(".pagina-atual");
const quantidade_livros = document.querySelector(".quantidade-livros");

//* Configuração da paginação

// Define quantos lviros serão msotrados em cada página

const livros_por_pagina = 4;
let pagina_atual = 1; // Guarda qual página é exibida. Começando na Página 1

//* Calculando o total de páginas

const total_paginas = Math.ceil(livros.length / livros_por_pagina); // Divide a quantidade total de livrs pela quantidade de livros por páginas
//Math.ceil => arredonda o resultado para de cima (ex 2,75 -> 3,0)


//* Função responsável por mostrar a página (Atualiza os elementos)

function mostrar_pagina() {
    
    // Descobre o índice do 1° livro que deve aparecer

    // Página 1:
    // (1 - 1) * 4 = 0

    // Página 2:
    // (2 - 1) * 4 = 4

    // livros = [1, 2, 3, 4, 5, 6, 7, 8]
    // Página 1 = 1, 2, 3, 4
    // Página 2 = 5, 6, 7, 8

    const inicio = (pagina_atual - 1) * livros_por_pagina;

    // Descobre até onde os livros devem ser exibidos

    // Página 1: início = 0 -> Fim = 0 + 4 => 4
    // Página 2: início = 4 -> Fim = 4 + 4 => 8
    // Página 3: início = 8 -> Fim = 8 + 4 => 12
    const fim = inicio + livros_por_pagina;

    // Percorre todas as listas de livros encontrados no HTML
    // "livro" representa o elemento atual
    // "posicao" representa a posição desse livro na lista
    livros.forEach((livro, posicao) => {
        // início na página 1 = 0
        // fim = 4
        
        // Verifica se o indice/posicao do livro esta dentro do intervalo da pagina atual.
        if (posicao => inicio && posicao < fim) {
            // mostra o elemento na tela se estiver no intervalo
            livro.style.display = "grid";
        } else {
            // caso contrário, esconde o livro
            livro.style.display = "none"; 
        }
    })
    // Atualiza no HTML o número da página atual
    numero_pagina.textContent = pagina_atual;

    let ultimo_livro= fim;

    // Se o valor ultrapassar a quantidade real de livros, usamos a quantidade total
    if (ultimo_livro > livros.length) {
        ultimo_livro = livros.length;
    }

    quantidade_livros.textContent = `Mostrando ${ultimo_livro} de ${livros.length} livros.`
};


botao_proxima.addEventListener("click" , () => {
    // Só permite avanaçar se existir uma próxima página
    if (pagina_atual < total_paginas) {
        // pagina_atual = pagina_atual + 1
        pagina_atual++

        mostrar_pagina(); // Atualiza os livros exibidos na tela
    }
})

// Evento de click no botão de página anterior

botao_anterior.addEventListener("click", () => {
    // Só permite voltar se não estivermos na primeira página
    if (pagina_atual > 1) {
        // Voltamos uma pa´gina
        pagina_atual--;

        // Atualiza os lviros exibidos na tela
        mostrar_pagina();
    }
})

// Quando a página carregar, é preicos executar a função mostrar_pagina uma vez para esconder os livros que não pertencem a 1° página
// livros = [1, 2, 3, 4, 5, 6, 7, 8]
    // Página 1 = 1, 2, 3, 4
    // Página 2 = 5, 6, 7, 8
