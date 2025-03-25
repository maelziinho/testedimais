let currentPage = 1;
const productsPerPage = 6;
let cart = [];
const produtos = [
    {
        id: 1,
        nome: "AB Padrão 1,020kg",
        preco: 16.95,
        precoAtacado: 14.70,
        minAtacado: 6,
        imagem: "images/abpadrao.png"
    },
    {
        id: 2,
        nome: "Amendoleite 1,300kg",
        preco: 22.95,
        precoAtacado: 19.15,
        minAtacado: 6,
        imagem: "images/amendoleite.png"
    },
    {
        id: 3,
        nome: "AB Batata Sabor Milho 1,100kg",
        preco: 16.95,
        precoAtacado: 14.70,
        minAtacado: 6,
        imagem: "images/abmilho.png"
    },
    {
        id: 4,
        nome: "AB Coco 1,200kg",
        preco: 20.50,
        precoAtacado: 18.70,
        minAtacado: 6,
        imagem: "images/abcoco.png"
    },
    {
        id: 5,
        nome: "Amendoim Doce 800g",
        preco: 21.95,
        precoAtacado: 19.80,
        minAtacado: 6,
        imagem: "images/amendoimdoce.png"
    },
    {
        id: 6,
        nome: "Cocada 1,100kg",
        preco: 25.50,
        precoAtacado: 23.50,
        minAtacado: 6,
        imagem: "images/cocada.png"
    },
    {
        id: 7,
        nome: "Doce de Banana 1,200kg",
        preco: 15.50,
        precoAtacado: 13.20,
        minAtacado: 6,
        imagem: "images/docedebanana.png"
    },
    {
        id: 8,
        nome: "Geleia de Frutas 1,200kg",
        preco: 15.50,
        precoAtacado: 13.20,
        minAtacado: 6,
        imagem: "images/geleiadefrutas.png"
    },
    {
        id: 9,
        nome: "Doce de Leite Puro 1,020kg",
        preco: 25.95,
        precoAtacado: 24.80,
        minAtacado: 6,
        imagem: "images/docedeleite.png"
    },
    {
        id: 10,
        nome: "Doce de Leite C/Chocolate 1,020kg",
        preco: 25.95,
        precoAtacado: 24.80,
        minAtacado: 6,
        imagem: "images/docedeleitecomchocolate.png"
    },
    {
        id: 11,
        nome: "Mocotó 800g",
        preco: 15.50,
        precoAtacado: 13.20,
        minAtacado: 6,
        imagem: "images/mocoto.png"
    },
    {
        id: 12,
        nome: "Paçoca 1,040kg",
        preco: 18.30,
        precoAtacado: 15.40,
        minAtacado: 6,
        imagem: "images/pacoca.png"
    },
    {
        id: 13,
        nome: "Molecão 1,040kg",
        preco: 18.30,
        precoAtacado: 15.40,
        minAtacado: 6,
        imagem: "images/molecao.png"
    },
    {
        id: 14,
        nome: "Pé de Moça 1,020kg",
        preco: 18.50,
        precoAtacado: 16.30,
        minAtacado: 6,
        imagem: "images/pedemoca.png"
    },
    {
        id: 15,
        nome: "Pé de Moleque 1,020kg",
        preco: 18.30,
        precoAtacado: 15.40,
        minAtacado: 6,
        imagem: "images/pedemoleque.png"
    },
    {
        id: 16,
        nome: "Pingo de Leite 1,020kg",
        preco: 25.95,
        precoAtacado: 21.50,
        minAtacado: 6,
        imagem: "images/pingodeleite.png"
    },
    {
        id: 17,
        nome: "Quebra Queixo 1,020kg",
        preco: 23.50,
        precoAtacado: 22.00,
        minAtacado: 6,
        imagem: "images/quebraqueixo.png"
    },
    {
        id: 18,
        nome: "Rolhão 1,020kg",
        preco: 17.10,
        precoAtacado: 14.10,
        minAtacado: 6,
        descricao: "Uma verdadeira explosão de sabor!",
        imagem: "images/rolhao.png"
    },
    {
        id: 19,
        nome: "Torrone 960g",
        preco: 15.50,
        precoAtacado: 13.20,
        minAtacado: 6,
        imagem: "images/torrone.png"
    },
    {
        id: 20,
        nome: "Queijadinha 700g",
        preco: 19.30,
        precoAtacado: 17.80,
        minAtacado: 6,
        imagem: "images/queijadinha.png"
    },
    {
        id: 21,
        nome: "Trufas Sortidas 320g",
        preco: 13.95,
        precoAtacado: 12.10,
        minAtacado: 12,
        imagem: "images/trufas.png"
    },
    {
        id: 22,
        nome: "Geleia D'água 1,8kg",
        preco: 14.50,
        precoAtacado: 13.75,
        minAtacado: 6,
        imagem: "images/geleiadagua.png"
    }
];

function nextPage() {
    const totalPages = Math.ceil(produtos.length / productsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        window.scrollTo(0, 0);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        window.scrollTo(0, 0);
    }
}

function validateLogin() {
    const clientName = document.getElementById('clientName').value.trim();
    const sellerCode = document.getElementById('sellerCode').value.trim();

    if (!clientName || !sellerCode) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!/^\d{3}$/.test(sellerCode)) {
        alert('Código do vendedor inválido. Deve ser no formato 001, 002, etc.');
        return;
    }

    const sellerName = getSellerName(sellerCode);
    const confirmMessage = `Você escolheu o vendedor ${sellerName}. Deseja continuar o pedido com ele?`;
    
    if (confirm(confirmMessage)) {
        localStorage.setItem('clientName', clientName);
        localStorage.setItem('sellerCode', sellerCode);
        document.getElementById('loginScreen').style.display = 'none';
        document.getElementById('header').style.display = 'block';
        document.getElementById('mainFooter').style.display = 'none';
        checkStatus();
    } else {
        document.getElementById('clientName').value = '';
        document.getElementById('sellerCode').value = '';
    }
}

function getSellerName(sellerCode) {
    const sellers = {
        '001': 'Adalbeto',
        '002': 'Adriana',
        '003': 'Celso',
        '004': 'Danilo',
        '005': 'Danilo',
        '006': 'Felipe',
        '007': 'Figueiredo',
        '008': 'Geisa',
        '009': 'Ivo',
        '010': 'Márcio',
        '011': 'Marcos',
        '012': 'Olvécio',
        '013': 'Renato',
        '014': 'Ricardo',
        '015': 'Robson',
        '016': 'Rosalvo',
        '017': 'Sueli',
        '018': 'Thiago',
        '019': 'Wender',
        '020': 'Wanderlan',
    };
    return sellers[sellerCode] || 'Vendedor Desconhecido';
}

function checkStatus() {
    const now = new Date();
    const hour = now.getHours();
    const dayOfWeek = now.getDay();
    const statusIndicator = document.querySelector('.status-indicator');
    const statusText = document.querySelector('.status-text');

    statusIndicator.className = 'status-indicator';
    statusText.className = 'status-text';

    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
        if (hour >= 7 && hour < 17) {
            statusIndicator.classList.add('aberto');
            statusText.classList.add('aberto');
        } else {
            statusIndicator.classList.add('fechado');
            statusText.classList.add('fechado');
        }
    } else {
        statusIndicator.classList.add('fechado');
        statusText.classList.add('fim-de-semana');
    }
}

function showWelcomeMessage() {
    const clientName = localStorage.getItem('clientName');
    const now = new Date();
    const hour = now.getHours();
    let greeting;

    if (hour >= 5 && hour < 12) {
        greeting = 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa tarde';
    } else {
        greeting = 'Boa noite';
    }

    const welcomeMessage = document.getElementById('welcomeMessage');
    welcomeMessage.innerHTML = `Olá, ${clientName}! ${greeting}.<br>Vendedor: ${getSellerName(localStorage.getItem('sellerCode'))}!`;
}

function showCatalog() {
    document.getElementById("header").style.display = "none";
    document.getElementById("mainFooter").style.display = "block";
    document.body.style.overflow = "auto";
    document.getElementById("catalogo").style.display = "block";
    document.getElementById("cartIcon").style.display = "block";
    showWelcomeMessage();
    renderPage(currentPage);
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

        const addToCartButton = document.createElement('button');
        const cartItem = cart.find(item => item.id === produto.id);
        const currentQuantity = cartItem ? cartItem.quantity : 0;
        addToCartButton.textContent = `Adicionar ao Carrinho (${currentQuantity})`;
        addToCartButton.onclick = (e) => {
            e.stopPropagation();
            addToCart(produto);
        };
        productDiv.appendChild(addToCartButton);

        const wholesaleMessage = document.createElement('p');
        wholesaleMessage.classList.add('wholesale-message');
        
        if (currentQuantity === 0) {
            wholesaleMessage.textContent = `Quantidade mínima para atacado: ${produto.minAtacado} unidades`;
        } else {
            const quantidadeRestante = produto.minAtacado - currentQuantity;
            wholesaleMessage.textContent = quantidadeRestante > 0 
                ? `Adicione mais ${quantidadeRestante} para garantir o preço de atacado.` 
                : 'Você atingiu o preço de atacado!';
        }
        productDiv.appendChild(wholesaleMessage);

        container.appendChild(productDiv);
    });
}

function toggleCart(event) {
    if (event) {
        event.stopPropagation(); // Impede a propagação do evento
    }
    const cartDetails = document.getElementById('cartDetails');
    cartDetails.style.display = cartDetails.style.display === 'block' ? 'none' : 'block';
}
function addToCart(produto) {
    const existingItem = cart.find(item => item.id === produto.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const newItem = {...produto, quantity: 1};
        cart.push(newItem);
    }

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
            const cartItem = cart.find(item => item.id === productId);
            const currentQuantity = cartItem ? cartItem.quantity : 0;
            addToCartButton.textContent = `Adicionar ao Carrinho (${currentQuantity})`;

            const wholesaleMessage = productDiv.querySelector('.wholesale-message');
            if (currentQuantity === 0) {
                wholesaleMessage.textContent = `Quantidade mínima para atacado: ${product.minAtacado} unidades`;
            } else {
                const quantidadeRestante = product.minAtacado - currentQuantity;
                wholesaleMessage.textContent = quantidadeRestante > 0 
                    ? `Adicione mais ${quantidadeRestante} para garantir o preço de atacado.` 
                    : 'Você atingiu o preço de atacado!';
            }
        }
    });
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartCount = document.getElementById('cartCount');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>😢 Seu carrinho está vazio!<br>Aproveite nossas ofertas, adicione produtos no carrinho.</p>';
        cartTotalContainer.textContent = '';
        cartCount.textContent = '0';
        document.getElementById('finalizeOrderButton').style.display = 'none';
        return;
    } else {
        document.getElementById('finalizeOrderButton').style.display = 'block';
    }

    cart.forEach(item => {
        const price = item.quantity >= item.minAtacado ? item.precoAtacado : item.preco;
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');

        const itemName = document.createElement('p');
        itemName.textContent = `${item.nome} - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
        total += price * item.quantity;
        cartItemDiv.appendChild(itemName);

        const adjustButtons = document.createElement('div');
        adjustButtons.classList.add('adjust-buttons');

        const decreaseButton = document.createElement('span');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = (e) => {
            e.stopPropagation();
            updateItemQuantity(item, item.quantity - 1);
        };
        adjustButtons.appendChild(decreaseButton);

        const quantityDisplay = document.createElement('span');
        quantityDisplay.textContent = item.quantity;
        quantityDisplay.style.color = '#cd1a1f';
        quantityDisplay.style.fontSize = '18px';
        adjustButtons.appendChild(quantityDisplay);

        const increaseButton = document.createElement('span');
        increaseButton.textContent = '+';
        increaseButton.onclick = (e) => {
            e.stopPropagation();
            updateItemQuantity(item, item.quantity + 1);
        };
        adjustButtons.appendChild(increaseButton);
        cartItemDiv.appendChild(adjustButtons);

        const removeButton = document.createElement('span');
        removeButton.textContent = '🗑️';
        removeButton.classList.add('remove-item');
        removeButton.onclick = (e) => {
            e.stopPropagation();
            removeFromCart(item);
        };
        cartItemDiv.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItemDiv);
    });

    cartTotalContainer.textContent = `Total: R$ ${total.toFixed(2)}`;
    cartCount.textContent = cart.length;
}

function updateItemQuantity(item, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(item);
    } else {
        item.quantity = newQuantity;
        updateCart();
    }
}

function removeFromCart(item) {
    const index = cart.findIndex(cartItem => cartItem.id === item.id);
    if (index > -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function finalizeOrder() {
    if (cart.length === 0) {
        alert("Por favor, adicione pelo menos um produto ao carrinho.");
        return;
    }

    document.getElementById('cartDetails').style.display = 'none';
    document.getElementById('mainFooter').style.display = 'none';
    document.getElementById('thankYouScreen').style.display = 'flex';
}

function sendToWhatsApp() {
    const sellerCode = localStorage.getItem('sellerCode');
    const phoneNumbers = {
        '001': '5511980972402',
        '002': '5511987016212',
        '003': '5511968992973',
        '004': '5511913489507',
        '005': '5511995970048',
        '006': '5511982809458',
        '007': '5511945108975',
        '008': '5511961797816',
        '009': '5511982636261',
        '010': '5511990083245',
        '011': '5511947822789',
        '012': '5511948443788',
        '013': '5511913230024',
        '014': '5511947702901',
        '015': '5511986468690',
        '016': '5511996709937',
        '017': '5511994599488',
        '018': '5511954280538',
        '019': '5511989719842',
        '020': '5511991580363',
    };

    const phoneNumber = phoneNumbers[sellerCode] || '5511999999999';
    const customerName = localStorage.getItem('clientName');
    const sellerName = getSellerName(sellerCode);

    let orderDetails = cart.map(item => {
        const price = item.quantity >= item.minAtacado ? item.precoAtacado : item.preco;
        return `*${item.nome}* - R$ ${(price * item.quantity).toFixed(2)} (${item.quantity}x)`;
    }).join('\n');

    let totalAmount = cart.reduce((sum, item) => {
        const price = item.quantity >= item.minAtacado ? item.precoAtacado : item.preco;
        return sum + price * item.quantity;
    }, 0).toFixed(2);

    const orderNotes = document.getElementById('orderNotes').value;

    let message = `Olá, ${sellerName}. Meu nome é ${customerName}, estou enviando o meu pedido:\n\n${orderDetails}\n\nTotal: R$ ${totalAmount}`;
    if (orderNotes) {
        message += `\n\nObservações: ${orderNotes}`;
    }
    message += `\n\nObrigado(a)! Aguardo a confirmação.`;

    let whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    resetApp();
}

function resetApp() {
    cart = [];
    localStorage.removeItem('clientName');
    localStorage.removeItem('sellerCode');
    document.getElementById('thankYouScreen').style.display = 'none';
    document.getElementById('loginScreen').style.display = 'flex';
    document.getElementById('header').style.display = 'none';
    document.getElementById('catalogo').style.display = 'none';
    document.getElementById('cartIcon').style.display = 'none';
    document.getElementById('cartDetails').style.display = 'none';
    document.getElementById('mainFooter').style.display = 'none';
    document.getElementById('clientName').value = '';
    document.getElementById('sellerCode').value = '';
    document.getElementById('orderNotes').value = '';
    updateCart();
}

document.addEventListener('click', function(event) {
    const cartDetails = document.getElementById('cartDetails');
    const cartIcon = document.getElementById('cartIcon');
    
    // Fecha o carrinho apenas se:
    // 1. O carrinho está aberto
    // 2. O clique NÃO foi no ícone do carrinho
    // 3. O clique NÃO foi dentro do carrinho
    if (cartDetails.style.display === 'block' && 
        !event.target.closest('#cartDetails') && 
        !event.target.closest('#cartIcon')) {
        cartDetails.style.display = 'none';
    }
});;