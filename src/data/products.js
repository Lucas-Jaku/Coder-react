const products = [

    {
        "id": 1,
        "title": "Notebook Gamer HP Victus 15",
        "price": 800,
        "category": "hp",
        "stock": 10,
        "img": "https://images.fravega.com/f1000/a72c265609a637be18339e70c9dbeb39.jpg",
        "description": "El equilibrio perfecto entre rendimiento y precio."
    },

    {
        "id": 2,
        "title": "LG 4K 144Hz 1Ms UltraGear 32GR93U",
        "price": 300,
        "category": "lg",
        "stock": 5,
        "img": "https://mexx-img-2019.s3.amazonaws.com/47897_1.jpeg",
        "description": "La cúspide de la imagen."
    },

    {
        "id": 3,
        "title": " Apple IPhone 17 Pro",
        "price": 1200,
        "category": "apple",
        "stock": 7,
        "img": "https://aremsaprod.vtexassets.com/arquivos/ids/1064535/IPHONE-17-PRO-256-GB-NARANJA-COSMICO-PIC-01.jpg?v=638980405891600000",
        "description": "Potencia inigualable y diseño sofisticado."
    },

    {
        "id": 4,
        "title": "PC de Escritorio Intel i5",
        "price": 1300,
        "category": "intel",
        "stock": 5,
        "img": "https://www.venex.com.ar/products_images/1753714652_4.jpg",
        "description": "PC de escritorio ideal para trabajo y estudio con excelente rendimiento."
    },

    {
        "id": 5,
        "title": "PC Gamer Ryzen 7",
        "price": 1800,
        "category": "ryzen",
        "stock": 3,
        "img": "https://http2.mlstatic.com/D_Q_NP_906952-MLA102670865851_122025-F.webp",
        "description": "Potente PC gamer preparada para juegos AAA y streaming."
    },

    {
        "id": 6,
        "title": "Monitor Samsung 24'' Full HD",
        "price": 300,
        "category": "samsung",
        "stock": 12,
        "img": "https://aremsaprod.vtexassets.com/arquivos/ids/989488/155898_01.jpg?v=638941542838930000",
        "description": "Monitor Full HD con excelente calidad de imagen y diseño moderno."
    },

    {
        "id": 7,
        "title": "Monitor LG 27'' QHD",
        "price": 450,
        "category": "lg",
        "stock": 7,
        "img": "https://www.megatone.net/images/Articulos/zoom2x/74/MKT7207BID-1.png",
        "description": "Pantalla QHD ideal para diseño, edición y multitarea."
    },

    {
        "id": 8,
        "title": "Celular Samsung Galaxy S23+",
        "price": 900,
        "category": "samsung",
        "stock": 15,
        "img": "https://http2.mlstatic.com/D_Q_NP_798052-MLA99938949957_112025-F.webp",
        "description": "Smartphone de alta gama con gran cámara y rendimiento."
    },

    {
        "id": 9,
        "title": "Celular iPhone 14",
        "price": 1100,
        "category": "apple",
        "stock": 8,
        "img": "https://www.megatone.net/images/Articulos/zoom2x/209/MKT6570NOC-1.jpg",
        "description": "Diseño premium, alto rendimiento y excelente sistema."
    },

    {
        "id": 10,
        "title": "Notebook Lenovo IdeaPad 3",
        "price": 750,
        "category": "lenovo",
        "stock": 10,
        "img": "https://http2.mlstatic.com/D_Q_NP_796787-MLA99999737963_112025-F.webp",
        "description": "Notebook liviana y eficiente para uso diario y estudio."
    },

    {
        "id": 11,
        "title": "Impresora HP Smart Tank 580",
        "price": 250,
        "category": "hp",
        "stock": 15,
        "img": "https://media.alquimio.cloud/images/@thumbs_256_ba4df4e8e79955bbcc9e1209d9314de84c758890.webp",
        "description": "Impresión de alta calidad con sistema de tanques de tinta."
    },

    {
        "id": 12,
        "title": "Monitor LG UltraWide 29''",
        "price": 350,
        "category": "lg",
        "stock": 6,
        "img": "https://www.lg.com/ar/images/monitores/md07534075/D-01.jpg",
        "description": "Formato 21:9 para una experiencia cinematográfica y mayor productividad."
    },

    {
        "id": 13,
        "title": "Apple iPad Air M2",
        "price": 950,
        "category": "apple",
        "stock": 5,
        "img": "https://loquiero.com.ar/wp-content/uploads/2025/09/Air-M2-10.jpg",
        "description": "Rendimiento asombroso con el chip M2 en un diseño delgado."
    },

    {
        "id": 14,
        "title": "Procesador Intel Core i9-14900K",
        "price": 650,
        "category": "intel",
        "stock": 4,
        "img": "https://katech.com.ar/wp-content/uploads/x1-736-jpg.webp",
        "description": "El procesador definitivo para gaming y creación de contenido extrema."
    },

    {
        "id": 15,
        "title": "Procesador AMD Ryzen 9 7950X",
        "price": 620,
        "category": "ryzen",
        "stock": 6,
        "img": "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/100-100000514WOF_800.jpg",
        "description": "Dominio total en multinúcleo para los usuarios más exigentes."
    },

    {
        "id": 16,
        "title": "Samsung Galaxy Tab S9 Ultra",
        "price": 1100,
        "category": "samsung",
        "stock": 4,
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_866768-MLA94741075804_102025-T.webp",
        "description": "La tablet más potente de Samsung con pantalla Dynamic AMOLED 2X."
    },

    {
        "id": 17,
        "title": "Notebook Lenovo Legion Pro 5i",
        "price": 1600,
        "category": "lenovo",
        "stock": 3,
        "img": "https://images.fravega.com/f300/43e340cccc13dcb35fcb633ea502634b.jpg",
        "description": "Rendimiento gaming de élite con refrigeración avanzada Coldfront."
    },

    {
        "id": 18,
        "title": "Apple MacBook Air M3",
        "price": 1400,
        "category": "apple",
        "stock": 9,
        "img": "https://loquiero.com.ar/wp-content/uploads/2025/09/Air-M3-2.jpg",
        "description": "Ultra delgada, ultra rápida y con batería para todo el día."
    },

    {
        "id": 19,
        "title": "Monitor Samsung Odyssey G7 32''",
        "price": 700,
        "category": "samsung",
        "stock": 5,
        "img": "https://http2.mlstatic.com/D_NQ_NP_684026-MLU70639843693_072023-O.webp",
        "description": "Curvatura 1000R y 240Hz para una inmersión competitiva total."
    },

    {
        "id": 20,
        "title": "Notebook HP Pavilion x360",
        "price": 720,
        "category": "hp",
        "stock": 8,
        "img": "https://images.fravega.com/f500/a2f48fc3b31198f68b3c9efa593647f0.jpg",
        "description": "Versatilidad total con pantalla táctil y giro de 360 grados."
    }

];



export default products;