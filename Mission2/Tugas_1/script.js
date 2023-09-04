const items = [
    { 
        namaBarang: 'Jaket',
        harga: 300000,
        image: 'asset/jaket-image.jpg'
    },
    { 
        namaBarang: 'Sepatu',
        harga: 500000,
        image: 'asset/sepatu-image.jpg'
    },
    { 
        namaBarang: 'Celana',
        harga: 200000,
        image: 'asset/celana-image.jpg'
    },
    { 
        namaBarang: 'Kaos',
        harga: 100000,
        image: 'asset/kaos-image.jpg'
    },
    { 
        namaBarang: 'Topi',
        harga: 50000,
        image: 'asset/topi-image.jpg'
    },
    { 
        namaBarang: 'Sendal',
        harga: 80000,
        image: 'asset/sendal-image.jpg'
    }
];

function updateTotalPembelian() {
    let totalPembelian = 0;
    const cartItems = document.querySelectorAll('#cart-list li');

    cartItems.forEach(item => {
        const totalHargaText = item.querySelector('p.Total-Harga').textContent;
        const totalHarga = parseInt(totalHargaText.replace('Total Harga: Rp ', ''));
        totalPembelian += totalHarga;
    });

    const totalPembelianElement = document.getElementById('total-pembelian');
    totalPembelianElement.textContent = `Total Pembelian: Rp ${totalPembelian}`;
}

function increment(inputId) {
    const inputElement = document.getElementById(inputId);
    inputElement.value = parseInt(inputElement.value) + 1;
}

function decrement(inputId) {
    const inputElement = document.getElementById(inputId);
    if (parseInt(inputElement.value) > 1) {
        inputElement.value = parseInt(inputElement.value) - 1;
    }
}

function addToCart(namaBarang, harga, inputId) {
    const inputElement = document.getElementById(inputId);
    const jumlah = parseInt(inputElement.value);
    const totalHarga = harga * jumlah;

    const cartList = document.getElementById('cart-list');
    const cartItem = document.createElement('li');

    const selectedItem = items.find(item => item.namaBarang === namaBarang);

    if (selectedItem) {
        const imageSrc = selectedItem.image;

        cartItem.innerHTML = `
            <div class="cart-item">
                <img src="${imageSrc}" alt="${namaBarang}" class="cart-item-image">
                <div class="cart-item-details">
                    <p>Nama Barang: ${namaBarang}</p>
                    <p>Harga: Rp ${harga}</p>
                    <p>Jumlah: ${jumlah}</p>
                    <p class="Total-Harga">Total Harga: Rp ${totalHarga}</p>
                </div>
            </div>
        `;

        cartList.appendChild(cartItem);
        updateTotalPembelian();
    }

    inputElement.value = 0;
}


const inputBarangSection = document.getElementById('input-barang-section');
items.forEach(item => {
    const itemHtml = `
        <div class="jumlah">
            <p class="nama-barang">${item.namaBarang}</p>
            <img src="${item.image}" alt="${item.namaBarang}" class="item-image">
            <p class="harga">Rp ${item.harga}</p>
            <div class="col-md-4">
                <div class="input-group">
                    <button type="button" class="btn btn-primary float-right" onclick="increment('jumlah-${item.namaBarang.toLowerCase()}')">+</button>
                    <input type="number" class="form-control" id="jumlah-${item.namaBarang.toLowerCase()}" value="0" min="0">
                    <button type="button" class="btn btn-danger" onclick="decrement('jumlah-${item.namaBarang.toLowerCase()}')">-</button>
                </div>
            </div>
            <div class="col-md-4">
                <br>
                <button type="button" class="btn btn-success float-right" onclick="addToCart('${item.namaBarang}', ${item.harga}, 'jumlah-${item.namaBarang.toLowerCase()}')">Tambah Barang</button>
            </div>
        </div>
    `;
    inputBarangSection.innerHTML += itemHtml;
});

