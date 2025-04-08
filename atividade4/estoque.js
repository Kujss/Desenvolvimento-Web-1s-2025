let itens = [];

function adicionar(item){
    itens.push(item);
    return true;
}

function listar(){
    return itens;
}

function editar(id, qtd){
    itens.forEach(item_cadastrado => {
        if(item_cadastrado.id == id){
            item_cadastrado.qtd = qtd;
        }
    });l
}

function adicionar(item){
    let item_valido = true;

    if(
        !is_numerico(item.id) ||
        is_id_cadastrado(item.id) ||
        item.id <= 0 ||
        !is_numerico(item.qtd) ||
        item.qtd < 0 ||
        item.nome.lenght
    )
}

module.exports = {
    adicionar, 
    listar,
    editar
};