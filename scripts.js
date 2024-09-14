// Obtendo referências para os elementos do DOM
const itemInput = document.getElementById("input-item"); // Referência ao input onde o usuário digita o item
const adicionarBotao = document.getElementById("adicionar-item"); // Referência ao botão para adicionar itens
const listaDeCompras = document.getElementById("lista-de-compras"); // Referência à lista onde os itens serão adicionados
let contador = 0; // Contador para gerar IDs únicos para os checkboxes

// Adicionando um evento de clique ao botão para chamar a função de adicionar item
adicionarBotao.addEventListener('click', adicionarItem);

// Função para adicionar um item à lista
function adicionarItem(evento) {
    evento.preventDefault(); // Prevenir o comportamento padrão do botão de enviar o formulário, evitando o refresh da página

    // Criar elementos para o novo item da lista
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("nome-item");
    
    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");
    
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++; // ID único para o checkbox
    
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);
    
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");
    
    // Montar a estrutura do checkbox e seu rótulo
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);
    containerCheckbox.appendChild(checkboxLabel);

    // Adicionar o checkbox ao contêiner do nome do item
    containerNomeDoItem.appendChild(containerCheckbox);

    // Adicionar o texto do item
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = itemInput.value; // Valor do item digitado
    containerNomeDoItem.appendChild(nomeDoItem);

    // Adicionar botões de remover e editar
    const containerBotoes = document.createElement("div");
    
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");
    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";
    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);
    
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button");
    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);
    
    // Adicionar os elementos do item à lista
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    
    const itemData = document.createElement("p");
    itemData.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} ${new Date().toLocaleDateString("pt-BR")} ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    itemData.classList.add("texto-data");
    
    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);
    listaDeCompras.appendChild(itemDaLista);
    
    // Adicionar o evento de clique ao checkbox para marcar como comprado
    checkboxInput.addEventListener('change', function() {
        const isChecked = checkboxInput.checked;
        const checkboxCustomizado = checkboxLabel.querySelector('.checkbox-customizado');
        const itemTitulo = nomeDoItem; // Nome do item onde o texto será riscado
        
        // Marcar ou desmarcar o item como comprado
        if (isChecked) {
            checkboxCustomizado.classList.add('checked'); // Adiciona estilo de "checado"
            itemTitulo.style.textDecoration = 'line-through'; // Marca o texto como riscado
        } else {
            checkboxCustomizado.classList.remove('checked'); // Remove o estilo de "checado"
            itemTitulo.style.textDecoration = 'none'; // Remove o risco do texto
        }
    });

    // Limpar o campo de input após adicionar o item
    itemInput.value = '';
}

