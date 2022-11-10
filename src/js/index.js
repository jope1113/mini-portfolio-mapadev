/* OBJETIVO - Quando clicarmos na aba temos que mostrar o conteúdo da aba que foi selecionada
pelo usuário e esconder o conteúdo da aba anterior. 

- Passo 1 - Dar um jeito de pegar os elementos qeu representam as abas do HTML;
- Passo 2 - Dar um jeito de identificar o clique no elemento aba;
- Passo 3 - Quando o usuário clicar, desmarcar a aba selecionada;
- Passo 4 - Marcar a aba clicada como selelcionada;
- Passo 5 - Esconder o conteúdo anterior;
- Passo 6 - Mostrar o conteúdo da aba selecionada. */

//- Passo 1 - Dar um jeito de pegar os elementos qeu representam as abas do HTML;

const abas = document.querySelectorAll(".aba");

//- Passo 2 - Dar um jeito de identificar o clique no elemento aba;

abas.forEach((aba => {
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)

    });
}));

function selecionarAba(aba){

    //- Passo 3 - Quando o usuário clicar, desmarcar a aba selecionada;

    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    //- Passo 4 - Marcar a aba clicada como selelcionada;

    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba){

    //- Passo 5 - Esconder o conteúdo anterior;

    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");

    //- Passo 6 - Mostrar o conteúdo da aba selecionada.

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")

}