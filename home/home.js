const menu = document.getElementById("menu"); // pegando elemento pelo id

// pegando elemento de forma genérica - sendo classe, utilizar o ponto '.' - ID com '#'
const navMenu = document.querySelector(".navegacao"); 

menu.addEventListener ("click", function() {
    if(navMenu.className == "navegacao") {
        navMenu.className = "navegacao ativo";
    }
    else {
        navMenu.className = "navegacao";
    }
})

// opção com arrow 
// menu.addEventListener ("click", function() => {})
