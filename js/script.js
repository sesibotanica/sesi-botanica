document.addEventListener('DOMContentLoaded', function() {
    const trees = [
        { name: 'Ipê Amarelo', info: 'Árvore típica do Cerrado', qrCode: '../img/ipê amarelo qr code.png', page: 'ipe-amarelo.html' },
        { name: 'Pau-Brasil', info: 'Árvore símbolo nacional', qrCode: '../img/pau-brasil qr code.png', page: 'pau-brasil.html' },
        { name: 'Carambola', info: 'Fruto em forma de estrela, pode ser doce ou azedo.', qrCode: '../img/carambola qr code.png', page: 'carambola.html' },
        { name: 'Caqui Oriental', info: 'Frutos ricos em taninos que amadurecem para uma doçura intensa.', qrCode: '../img/caqui-oriental qr code.png', page: 'caqui-oriental.html' },
        { name: 'Acerola', info: 'Altíssimo teor de vitamina C.', qrCode: '../img/acerola qr code.png', page: 'acerola.html' },
        { name: 'Jaca', info: 'Maior fruto de árvore do mundo.', qrCode: '../img/jaca qr code.png', page: 'jaca.html' },
        { name: 'Laranjeira', info: 'Usada em marmeladas e licores.', qrCode: '../img/laranjeira qr code.png', page: 'laranjeira.html' },
        { name: 'Abacate', info: 'Fruto altamente nutritivo.', qrCode: '../img/abacate qr code.png', page: 'abacate.html' },
        { name: 'Mexerica', info: 'Rica em vitamina C, que ajuda a melhorar o sistema imunológico.', qrCode: '../img/mexerica qr code.png', page: 'mexerica.html' },
        { name: 'Canela', info: 'No passado, a canela era considerada um presente digno de reis e deuses.', qrCode: '../img/canela qr code.png', page: 'canela.html' },
        { name: 'Pitanga', info: 'A pitangueira também é muito utilizada na arborização urbana e em projetos de paisagismo devido à sua beleza e resistência.', qrCode: '../img/pitanga qr code.png', page: 'pitanga.html' },
        { name: 'Cerejeira de Flor', info: 'Símbolo da cultura japonesa, associada à efemeridade da vida.', qrCode: '../img/cerejeira de flor qr code.png', page: 'cereijeira-de-flor.html' },
        { name: 'Sibipiruna', info: 'Amplamente utilizada na arborização urbana devido à sua sombra densa e à beleza de suas flores amarelas.', qrCode: '../img/sibipiruna qr code.png', page: 'sibipiruna.html' },
        { name: 'Pinheiro do Paraná', info: 'Semente conhecida como pinhão é um alimento tradicional da culinária sul-brasileira.', qrCode: '../img/pinheiro do parana qr code.png', page: 'pinheiro-do-parana.html' },
        { name: 'Amoreira', info: 'Fruto conhecido como amora.', qrCode: '../img/Amoeira qr code.png', page: 'amoreira.html' },
        { name: 'Romãzeira', info: 'Cultivada na antiguidade pelos fenícios, gregos e egípcios.', qrCode: '../img/romãzeira qr code.png', page: 'roma-zeira.html' },
        { name: 'Seringueira', info: 'Nome refere-se à forma como é extraído o látex.', qrCode: '../img/seringueira qr code.png', page: 'seringueira.html' },
        { name: 'Figueira', info: 'Mencionada em diversos registros históricos e religiosos, incluindo a Bíblia.', qrCode: '../img/figueira qr code.png', page: 'figueira.html' },
        { name: 'Peroba Amarela', info: 'Espécie ameaçada de extinção, conhecida por sua resistência ao fogo.', qrCode: '../img/peroba amarela qr code.png', page: 'peroba-amarela.html' },
        { name: 'Cedro', info: 'Nome vem do grego "Kedros", que remete a "queimar, perfumar, purificar".', qrCode: '../img/cedro qr code.png', page: 'cedro.html' },
        { name: 'Palmeira Azul', info: 'Suas folhas em forma de leque podem atingir 3 metros de diâmetro.', qrCode: '../img/palmeira azul qr code.png', page: 'palmeira-azul.html' },
        { name: 'Araucaria', info: 'Um pomar de araucárias rende mais de cem anos de colheita.', qrCode: '../img/Araucaria qr code.png', page: 'araucaria.html' },
        { name: 'Pau d\'Água', info: 'Após a floração, podem se formar pequenos frutos alaranjados contendo sementes.', qrCode: '../img/pau d água qr code.png', page: 'pau-dagua.html' },
        { name: 'Jabuticabeira', info: 'A jabuticaba pode ser usada para vinagre, licor, vinho, suco, sorvete, xarope, geleia, cerveja, entre outros produtos.', qrCode: '../img/jabuticabeira qr code.png', page: 'jabuticabeira.html' },
        { name: 'Pera', info: 'É uma árvore caducifólia, que perde suas folhas sazonalmente. Seu fruto é comestível.', qrCode: '../img/pera qr code.png', page: 'pera.html' },
        { name: 'Mamoeiro', info: 'Rico em betacarotenos que auxiliam na saúde dos olhos.', qrCode: '../img/mamoeiro qr code.png', page: 'mamoeiro.html' },
        { name: 'Ficus Benjamina', info: 'Origem na Malásia e Ásia.', qrCode: '../img/ficus benjamina qr code.png', page: 'ficus-benjamina.html' },
        { name: 'Árvore da Borracha', info: 'Descoberta pelo cientista francês Charles-Marie de La Condamine em 1743.', qrCode: '../img/Árvore de borracha qr code.png', page: 'arvore-da-borracha.html' },
        { name: 'Flamboyant', info: 'Árvore ornamental popular devido à sua aparência espetacular durante a floração.', qrCode: '../img/Flayboant qr code.png', page: 'flamboyant.html' }
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
        qrCodeImg.className = 'qr-code';
        qrCodeImg.src = tree.qrCode;
        qrCodeImg.alt = `QR Code for ${tree.name}`;

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
