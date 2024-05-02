document.addEventListener('DOMContentLoaded', function() {
    const produtoForm = document.getElementById('produtoForm');
    const produtoTable = document.getElementById('produtoBody');


    let produtos = [];

    function adicionarProduto(nome, descricao, valor, disponibilidade) {
        produtos.push({ nome, descricao, valor, disponibilidade });
        atualizarListagem();
    }

    function atualizarListagem() {
        produtoTable.innerHTML = '';
        produtos.sort((a, b) => a.valor - b.valor);

        produtos.forEach(produto => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${produto.nome}</td>
                <td>${produto.valor}</td>
            `;
            produtoTable.appendChild(row);
        });
    }

    produtoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value;
        const descricao = document.getElementById('descricao').value;
        const valor = parseFloat(document.getElementById('valor').value);
        const disponibilidade = document.getElementById('disponibilidade').value;

        adicionarProduto(nome, descricao, valor, disponibilidade);
        produtoForm.reset();
    });

    atualizarListagem();
});
