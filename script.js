let currentPage = 1;
const productsPerPage = 6;
let cart = [];
const produtos = [
    {
        id: 1,
        nome: "AB Padrão 1,020kg",
        preco: 8.00,
        precoAtacado: 6.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Doce em massa de batata doce!",
        imagem: "imagens/abpadrao.png"
    },
    {
        id: 2,
        nome: "AB Batata Sabor Milho 1,100kg",
        preco: 9.00,
        precoAtacado: 7.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Doce de batata doce sabor milho!",
        imagem: "imagens/abmilho.png"
    },
    {
        id: 3,
        nome: "AB Coco 1,200kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Doce em massa de batata doce com coco!",
        imagem: "imagens/abcoco.png"
    },
    {
        id: 4,
        nome: "Amendoim Doce 800g",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Experimente a combinação perfeita de sabor e crocância!",
        imagem: "imagens/amendoimdoce.png"
    },
    {
        id: 5,
        nome: "Cocada 1,100kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Doce, suave e cheia de prazer em cada mordida!",
        imagem: "imagens/cocada.png"
    },
    {
        id: 6,
        nome: "Doce de Banana 1,200kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "perfeito para quem aprecia o sabor autêntico e caseiro!",
        imagem: "imagens/docedebanana.png"
    },
    {
        id: 7,
        nome: "Geleia de Frutas 1,200kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Toque caseiro e cheio de sabor natural!",
        imagem: "imagens/geleiadefrutas.png"
    },
    {
        id: 8,
        nome: "Doce de Leite Puro 1,020kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "A verdadeira delícia do campo!",
        imagem: "imagens/docedeleite.png"
    },
    {
        id: 9,
        nome: "Doce de Leite C/Chocolate 1,020kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "A combinação irresistível de cremosidade e intensidade!",
        imagem: "imagens/docedeleitecomchocolate.png"
    },
    {
        id: 10,
        nome: "Mocotó 800g",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Um pedacinho de história em cada pedaço!",
        imagem: "imagens/mocoto.png"
    },
    {
        id: 11,
        nome: "Paçoca 1,040kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "O sabor da infâcia em cada pedacinho!",
        imagem: "imagens/pacoca.png"
    },
    {
        id: 12,
        nome: "Molecão 1,040kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "O doce que derrete na boca!",
        imagem: "imagens/molecao.png"
    },
    {
        id: 13,
        nome: "Pé de Moça 1,020kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "A combinação irresistível de sabores!",
        imagem: "imagens/pedemoca.png"
    },
    {
        id: 14,
        nome: "Pé de Moleque 1,020kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Sabor autêntico e crocante!!",
        imagem: "imagens/pedemoleque.png"
    },
    {
        id: 15,
        nome: "Quebra Queixo 1,020kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Doce e refrescante, vai te conquistar em cada mordida!",
        imagem: "imagens/quebraqueixo.png"
    },
    {
        id: 16,
        nome: "Rolhão 1,020kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Uma verdadeira explosão de sabor!",
        imagem: "imagens/rolhao.png"
    },
    {
        id: 17,
        nome: "Torrone 960g",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "A combinação irresistível de cremosidade e intensidade!",
        imagem: "imagens/torrone.png"
    },
    {
        id: 18,
        nome: "Queijadinha 700g",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Sabor irresistível e cheirinhode casa!",
        imagem: "imagens/queijadinha.png"
    },
    {
        id: 19,
        nome: "Trufas Sortidas 320g",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 12, // Quantidade mínima para atacado
        descricao: "Um presente ou uma sobremesa perfeita para qualquer ocasião!",
        imagem: "imagens/trufas.png"
    },
     {
        id: 20,
        nome: "Geleia D'água 1,8kg",
        preco: 12.00,
        precoAtacado: 10.00,
        minAtacado: 6, // Quantidade mínima para atacado
        descricao: "Delicada e refrescante!",
        imagem: "imagens/geleiadagua.png"
    },
];

function showCatalog() {
    document.getElementById("header").style.display = "none";
    document.getElementById("mainFooter").style.display = "block"; // Mostrar o rodapé padrão
    document.body.style.overflow = "auto"; // Permitir rolagem após visualizar o catálogo
    document.getElementById("catalogo").style.display = "block";
    document.getElementById("cartIcon").style.display = "block";
    renderPage(currentPage); // Exibe produtos da página atual
}

function renderPage(page) {
    const container = document.getElementById("produtos");
    container.innerHTML = '';
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = produtos.slice(start, end);

    productsToShow.forEach(produto => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('produto');

        const productImage = document.createElement('img');
        productImage.src = produto.imagem;
        productDiv.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = produto.nome;
        productDiv.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.innerHTML = `Varejo: R$ ${produto.preco.toFixed(2)} <br> Atacado: R$ ${produto.precoAtacado.toFixed(2)}`;
        productDiv.appendChild(productPrice);

        const productDescription = document.createElement('p');
        productDescription.textContent = produto.descricao;
        productDiv.appendChild(productDescription);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = `Adicionar ao Carrinho (${produto.quantity || 0})`;
        addToCartButton.onclick = () => addToCart(produto);
        productDiv.appendChild(addToCartButton);

        // Adicionar a mensagem de atacado
        const wholesaleMessage = document.createElement('p');
        wholesaleMessage.classList.add('wholesale-message');
        const quantidadeRestante = produto.minAtacado - (produto.quantity || 0);
        wholesaleMessage.textContent = quantidadeRestante > 0 ? `Quantidade mínima para preço de atacado: ${produto.minAtacado} unidades` : '';
        productDiv.appendChild(wholesaleMessage);

        container.appendChild(productDiv);
    });
}

function addToCart(produto) {
    const existingItem = cart.find(item => item.id === produto.id);

    if (existingItem) {
        existingItem.quantity += 1; // Atualiza a quantidade se já existir
    } else {
        produto.quantity = 1; // Inicializa a quantidade do produto
        cart.push(produto); // Adiciona novo produto ao carrinho
    }

    // Atualiza quantidade no botão e a mensagem
    updateProductQuantity(produto.id);
    updateCart();
}

function updateProductQuantity(productId) {
    const products = document.querySelectorAll('.produto');
    products.forEach(productDiv => {
        const addToCartButton = productDiv.querySelector('button');
        const productName = productDiv.querySelector('h3').textContent;
        const product = produtos.find(p => p.nome === productName);
        if (product && product.id === productId) {
            addToCartButton.textContent = `Adicionar ao Carrinho (${cart.find(item => item.id === productId)?.quantity || 0})`;

            // Atualiza a mensagem de atacado
            const wholesaleMessage = productDiv.querySelector('.wholesale-message');
            const quantidadeRestante = product.minAtacado - (cart.find(item => item.id === productId)?.quantity || 0);
            wholesaleMessage.textContent = quantidadeRestante > 0 
                ? `Adicione mais ${quantidadeRestante} para garantir preço de atacado.` 
                : 'Você atingiu o preço de atacado!';
        }
    });
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    cartItemsContainer.innerHTML = '';  // Limpa os itens do carrinho
    let total = 0;

    cart.forEach(item => {
        const price = item.quantity >= item.minAtacado ? item.precoAtacado : item.preco; // Define o preço com base na quantidade mínima do produto
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const itemName = document.createElement('p');
        itemName.textContent = `${item.nome} - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
        total += price * item.quantity; // Adiciona ao total

        cartItemDiv.appendChild(itemName);

        // Seletor de quantidade
        const adjustButtons = document.createElement('div');
        adjustButtons.classList.add('adjust-buttons');

        const decreaseButton = document.createElement('span');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = () => updateItemQuantity(item, item.quantity - 1);
        adjustButtons.appendChild(decreaseButton);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = item.quantity;
        adjustButtons.appendChild(quantityDisplay);

        const increaseButton = document.createElement('span');
        increaseButton.textContent = '+';
        increaseButton.onclick = () => updateItemQuantity(item, item.quantity + 1);
        adjustButtons.appendChild(increaseButton);
        cartItemDiv.appendChild(adjustButtons);

        const removeButton = document.createElement('span');
        removeButton.textContent = '🗑️'; // Ícone de lixeira
        removeButton.classList.add('remove-item');
        removeButton.onclick = () => removeFromCart(item);
        cartItemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    cartTotalContainer.textContent = `Total: R$ ${total.toFixed(2)}`;
    cartCount.textContent = cart.length; // Atualiza a quantidade de produtos no carrinho
}

function updateItemQuantity(item, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(item); // Remove o item se a nova quantidade for 0 ou menor
    } else {
        item.quantity = newQuantity; // Atualiza a quantidade
        updateCart(); // Atualiza o carrinho
    }
}

function removeFromCart(item) {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index > -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function toggleCart() {
    const cartDetails = document.getElementById('cartDetails');
    cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
}

function nextPage() {
    if (currentPage * productsPerPage < produtos.length) {
        currentPage++;
        renderPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    renderPage(currentPage);
});

function confirmName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput.trim() !== '') {
        document.getElementById('finalizeOrderButton').style.display = 'block';
    } else {
        alert('Por favor, insira seu nome.');
    }
}

function finalizeOrder() {
    console.log("Finalizar Pedido Clicado"); // Log para depuração
    const customerName = document.getElementById('nameInput').value.trim();
    console.log("Customer Name:", customerName); // Log para depuração
    if (cart.length === 0) {
        alert("Por favor, adicione pelo menos um produto ao carrinho.");
        return;
    }
    if (customerName === "") {
        alert("Por favor, insira seu nome.");
        return;
    }

    sendOrder();
    cart = [];
    updateCart();
}

function sendOrder() {
    const customerName = document.getElementById('nameInput').value.trim();
    let orderDetails = cart.map(item => {
        const price = item.quantity >= item.minAtacado ? item.precoAtacado : item.preco;
        return `**${item.nome}** - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
    }).join('\n');

    let totalAmount = cart.reduce((sum, item) => {
        const price = item.quantity >= item.minAtacado ? item.precoAtacado : item.preco;
        return sum + price * item.quantity;
    }, 0).toFixed(2);

    const orderNotes = document.getElementById('orderNotes').value;

    let phoneNumber = '5511981049922'; // Número de telefone para o WhatsApp
    let message = `Olá, meu nome é ${customerName}, estou enviando o meu pedido:\n\n${orderDetails}\n\nTotal: R$ ${totalAmount}`;
    if (orderNotes) {
        message += `\n\nObservações: ${orderNotes}`;
    }
    message += `\n\nObrigado(a)!`;

    console.log("WhatsApp Link:", `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`); // Log para depuração

    let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}
