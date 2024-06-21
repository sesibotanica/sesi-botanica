document.addEventListener('DOMContentLoaded', function() {
    const trees = [
        { name: 'Ipê Amarelo', info: 'Árvore típica do Cerrado', page: 'ipe-amarelo.html' },
        { name: 'Pau-Brasil', info: 'Árvore símbolo nacional', page: 'pau-brasil.html' },
        { name: 'Carambola', info: 'Fruto em forma de estrela, pode ser doce ou azedo.', page: 'carambola.html' },
        { name: 'Caqui Oriental', info: 'Frutos ricos em taninos que amadurecem para uma doçura intensa.', page: 'caqui-oriental.html' },
        { name: 'Acerola', info: 'Altíssimo teor de vitamina C.', page: 'acerola.html' },
        { name: 'Jaca', info: 'Maior fruto de árvore do mundo.', page: 'jaca.html' },
        { name: 'Laranjeira', info: 'Usada em marmeladas e licores.', page: 'laranjeira.html' },
        { name: 'Abacate', info: 'Fruto altamente nutritivo.', page: 'abacate.html' },
        { name: 'Mexerica', info: 'Rica em vitamina C, que ajuda a melhorar o sistema imunológico.', page: 'mexerica.html' },
        { name: 'Canela', info: 'No passado, a canela era considerada um presente digno de reis e deuses.', page: 'canela.html' },
        { name: 'Pitanga', info: 'A pitangueira também é muito utilizada na arborização urbana e em projetos de paisagismo devido à sua beleza e resistência.', page: 'pitanga.html' },
        { name: 'Cerejeira de Flor', info: 'Símbolo da cultura japonesa, associada à efemeridade da vida.', page: 'cereijeira-de-flor.html' },
        { name: 'Sibipiruna', info: 'Amplamente utilizada na arborização urbana devido à sua sombra densa e à beleza de suas flores amarelas.', page: 'sibipiruna.html' },
        { name: 'Pinheiro do Paraná', info: 'Semente conhecida como pinhão é um alimento tradicional da culinária sul-brasileira.', page: 'pinheiro-do-parana.html' },
        { name: 'Amoreira', info: 'Fruto conhecido como amora.', page: 'amoreira.html' },
        { name: 'Romãzeira', info: 'Cultivada na antiguidade pelos fenícios, gregos e egípcios.', page: 'roma-zeira.html' },
        { name: 'Seringueira', info: 'Nome refere-se à forma como é extraído o látex.', page: 'seringueira.html' },
        { name: 'Figueira', info: 'Mencionada em diversos registros históricos e religiosos, incluindo a Bíblia.', page: 'figueira.html' },
        { name: 'Peroba Amarela', info: 'Espécie ameaçada de extinção, conhecida por sua resistência ao fogo.', page: 'peroba-amarela.html' },
        { name: 'Cedro', info: 'Nome vem do grego "Kedros", que remete a "queimar, perfumar, purificar".', page: 'cedro.html' },
        { name: 'Palmeira Azul', info: 'Suas folhas em forma de leque podem atingir 3 metros de diâmetro.', page: 'palmeira-azul.html' },
        { name: 'Araucaria', info: 'Um pomar de araucárias rende mais de cem anos de colheita.', page: 'araucaria.html' },
        { name: 'Pau d\'Água', info: 'Após a floração, podem se formar pequenos frutos alaranjados contendo sementes.', page: 'pau-dagua.html' },
        { name: 'Jabuticabeira', info: 'A jabuticaba pode ser usada para vinagre, licor, vinho, suco, sorvete, xarope, geleia, cerveja, entre outros produtos.', page: 'jabuticabeira.html' },
        { name: 'Pera', info: 'É uma árvore caducifólia, que perde suas folhas sazonalmente. Seu fruto é comestível.', page: 'pera.html' },
        { name: 'Mamoeiro', info: 'Rico em betacarotenos que auxiliam na saúde dos olhos.', page: 'mamoeiro.html' },
        { name: 'Ficus Benjamina', info: 'Origem na Malásia e Ásia.', page: 'ficus-benjamina.html' },
        { name: 'Árvore da Borracha', info: 'Descoberta pelo cientista francês Charles-Marie de La Condamine em 1743.', page: 'arvore-da-borracha.html' },
        { name: 'Lichia', info: 'Árvore ornamental popular devido à sua aparência espetacular durante a floração.', page: 'flamboyant.html' }
    ];


    const treeContainer = document.getElementById('tree-container');

    trees.forEach(tree => {
        const treeItem = document.createElement('div');
        treeItem.className = 'tree-item';

        const treeDetails = document.createElement('div');
        treeDetails.className = 'tree-details';

        const treeName = document.createElement('h3');
        const treeLink = document.createElement('a');
        treeLink.href = tree.page;
        treeLink.textContent = tree.name;
        treeLink.style.color = 'black';
        treeLink.style.textDecoration = 'none';
        treeName.appendChild(treeLink);

        const treeInfo = document.createElement('p');
        treeInfo.textContent = tree.info;

        const qrCodeImg = document.createElement('img');
       
        
      

        treeDetails.appendChild(treeName);
        treeDetails.appendChild(treeInfo);
        treeItem.appendChild(treeDetails);
        treeItem.appendChild(qrCodeImg);

        treeContainer.appendChild(treeItem);
    });
});

function searchTree() {
    const input = document.getElementById('search').value.toLowerCase();
    const treeItems = document.getElementsByClassName('tree-item');

    Array.from(treeItems).forEach(function(treeItem) {
        const treeName = treeItem.getElementsByTagName('h3')[0].textContent.toLowerCase();
        if (treeName.includes(input)) {
            treeItem.style.display = '';
        } else {
            treeItem.style.display = 'none';
        }
    });
}
