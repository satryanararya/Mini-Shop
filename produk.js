var produk = {
    "Exclusive Products" : [{
            "nama" : "Emma Shorts",
            "image" : "assets/emma.jpg",
            "desc" : "Light Grey",
            "ukuran" : "Waist : 60-80 cm <br> Length : 36 cm",
            "harga" : "IDR 129.000"
        },
        {
            "nama" : "Aiko Blouse",
            "image" : "assets/aiko.jpg",
            "desc" : "Ocean Blue",
            "ukuran" : "Length : 67 CM (Front) <br> 72 CM (Back)",
            "harga" : "IDR 149.000"
        },
        {
            "nama" : "Oslo Jumpsuit",
            "image" : "assets/oslo.jpg",
            "desc" : "Grey",
            "ukuran" : "Waist : 60-86 cm <br> Length : 42 cm",
            "harga" : "IDR 169.000"
        },
        {
            "nama" : "Jessie Set",
            "image" : "assets/jessie.jpg",
            "desc" : "Brick",
            "ukuran" : "Waist : 70-82 cm <br> Length : 37 cm ",
            "harga" : "IDR 169.000"
        }]
}

for (var key in produk){
    var elementJudul = document.createElement('h3');
    elementJudul.className = 'mt-5 mb-5 text-center h3';
    elementJudul.innerHTML = key;
    document.getElementById(key).appendChild(elementJudul);

    var elementCardGroup = document.createElement('div');
    elementCardGroup.className = 'card-group ms-3 me-3 md-4';
    elementCardGroup.id = `${key}-produk`;
    document.getElementById(key).appendChild(elementCardGroup);

    for(var i = 0; i < produk[key].length; i++) {
        var namaProduk = produk[key][i].nama;
        var imageProduk = produk[key][i].image;
        var hargaProduk = produk[key][i].harga;
        var descProduk = produk[key][i].desc;
        var ukuranProduk = produk[key][i].ukuran;
        
        var elementCard = document.createElement('div');
        elementCard.className = 'card shadow ms-3 me-3 rounded-3';
        elementCard.innerHTML = `
        <img src=${imageProduk} class="card-img-top" alt="..." width="150" height="350">
            <div class="card-body">
                <h5 class="card-title">${namaProduk}</h5>
                <p class="card-text">${descProduk}</p>
                <p class="card-text">${ukuranProduk}</p>
                <p class="card-text">${hargaProduk}</p>
                <a onclick="chatToAdmin('${namaProduk}','${descProduk}','${hargaProduk}')" class="btn button1 d-block">Order Product</a>
            </div>`
        document.getElementById(`${key}-produk`).appendChild(elementCard);
    }
    
}

var barang = {
    "More Products" : [{
            "nama" : "Comma Top",
            "image" : "assets/comma.jpg",
            "desc" : "Available in White, Latte, & Black",
            "harga" : "IDR 89.000"
        },
        {
            "nama" : "Kama Polo Top",
            "image" : "assets/kama.jpg",
            "desc" : "Available in Mauve, & Blueberry",
            "harga" : "IDR 99.000"
        },
        {
            "nama" : "Kanna Top",
            "image" : "assets/harlow.jpg",
            "desc" : "Available in White and Army",
            "harga" : "IDR 109.000"
        },
        {
            "nama" : "Jade Top",
            "image" : "assets/jade.jpg",
            "desc" : "Available in Rose Beige, & Black",
            "harga" : "IDR 149.000"
        }]
}

for (var key in barang){
    var elementJudul = document.createElement('h3');
    elementJudul.className = 'mt-5 mb-5 text-center h3';
    elementJudul.innerHTML = key;
    document.getElementById(key).appendChild(elementJudul);

    var elementCardGroup = document.createElement('div');
    elementCardGroup.className = 'card-group ms-3 me-3 md-4 ';
    elementCardGroup.id = `${key}-barang`;
    document.getElementById(key).appendChild(elementCardGroup);

    for(var i = 0; i < barang[key].length; i++) {
        var namaBarang = barang[key][i].nama;
        var imageBarang = barang[key][i].image;
        var hargaBarang = barang[key][i].harga;
        var descBarang = barang[key][i].desc;
        
        var elementCard = document.createElement('div');
        elementCard.className = 'card shadow ms-3 me-3 rounded-3';
        elementCard.innerHTML = `
        <img src=${imageBarang} class="card-img-top" alt="..." width="150" height="350">
            <div class="card-body">
                <h5 class="card-title">${namaBarang}</h5>
                <p class="card-text">${descBarang}</p>
                <p class="card-text">${hargaBarang}</p>
                <a onclick="chatToAdmin('${namaBarang}','${descBarang}','${hargaBarang}')" class="btn button1 d-block">Order Product</a>
            </div>`
        document.getElementById(`${key}-barang`).appendChild(elementCard);
    }
    
}

function chatToAdmin(nama,desc,harga) {
    var noHp = "+628873839486";
    window.open(`https://web.whatsapp.com/send?phone=${noHp}?&text=nama-produk:%20${nama}%0Adeskripsi:%20${desc}%0Aharga:%20${harga}%0AThanksBro`)
}