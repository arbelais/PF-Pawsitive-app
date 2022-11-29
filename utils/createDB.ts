import { prisma } from "../lib/prisma";

export default async function createDB() {

    try {
        await prisma.user.createMany({
            data: [
                {
                    id: "1",
                    firstName: "damian",
                    lastName: "aguirre",
                    email: "damian_aguirre@test.com",
                    age: 19,
                    role: "BASIC",
                    active: true,
                    password: "passtest01",
                    photo: "https://img.freepik.com/foto-gratis/retrato-hombre-blanco-aislado_53876-40306.jpg?w=2000"
                },
                {
                    id: "2",
                    firstName: "rosa",
                    lastName: "mercedes",
                    email: "rosa_mercedes@test.com",
                    age: 29,
                    role: "BASIC",
                    active: true,
                    password: "passtest02",
                    photo: "https://img.freepik.com/fotos-premium/mujer-cara-bonita_144962-1367.jpg?w=2000"
                },
                {
                    id: "3",
                    firstName: "carina",
                    lastName: "marra",
                    email: "carina_marra@test.com",
                    age: 29,
                    role: "BASIC",
                    active: true,
                    password: "passtest02",
                    photo: "https://img.freepik.com/foto-gratis/joven-mujer-caucasica-feliz-desnuda_144627-1275.jpg?w=2000"
                },
                {
                    id: "4",
                    firstName: "rodri",
                    lastName: "kas",
                    email: "rodri_kas@test.com",
                    age: 49,
                    role: "PROFESSIONAL",
                    active: true,
                    password: "passtest03",
                    photo: "https://img.freepik.com/foto-gratis/joven-mujer-caucasica-feliz-desnuda_144627-1275.jpg?w=2000"
                },
                {
                    id: "5",
                    firstName: "carlos",
                    lastName: "right",
                    email: "carlos_right@test.com",
                    age: 36,
                    role: "PROFESSIONAL",
                    active: true,
                    password: "passtest03",
                    photo: "https://img.freepik.com/foto-gratis/joven-mujer-caucasica-feliz-desnuda_144627-1275.jpg?w=2000"
                },
                {
                    id: "6",
                    firstName: "adriana",
                    lastName: "lasa",
                    email: "adriana-lasa@test.com",
                    age: 36,
                    role: "PROFESSIONAL",
                    active: true,
                    password: "passtest03",
                    photo: "https://img.freepik.com/foto-gratis/joven-mujer-caucasica-feliz-desnuda_144627-1275.jpg?w=2000"
                }
            ]
        })

        await prisma.adoptionPost.createMany({
            data: [
                {
                    id: "1",
                    name: "rayito",
                    size: "SMALL",
                    age: "1 años",
                    breed: "ave",
                    photo: "https://img.freepik.com/foto-gratis/loro-color-muy-bonito-posado-rama-arbol_493961-1289.jpg?w=2000",
                    active: true,
                    userId: "1"
                },
                {
                    id: "2",
                    name: "meteoro",
                    size: "BIG",
                    age: "5 años",
                    breed: "tortuga",
                    photo: "https://img.freepik.com/foto-gratis/tortuga-estimulada-africana-hierba_167946-113.jpg?w=2000",
                    active: true,
                    userId: "2"
                },
                {
                    id: "3",
                    name: "caos",
                    size: "SMALL",
                    age: "3 años",
                    breed: "tortuga",
                    photo: "https://img.freepik.com/fotos-premium/tortuga-sucata-suelo_41969-10112.jpg?w=2000",
                    active: true,
                    userId: "3"
                },
                {
                    id: "4",
                    name: "roberto",
                    size: "MEDIUM",
                    age: "2 meses",
                    breed: "gato",
                    photo: "https://img.freepik.com/fotos-premium/lindo-gatito-gris-amarillo-ve-juega-negocios-copyspace_89381-2435.jpg?w=2000",
                    active: true,
                    userId: "4"
                },
                {
                    id: "5",
                    name: "no tiene",
                    size: "SMALL",
                    age: "3 meses",
                    breed: "perro",
                    photo: "https://img.freepik.com/free-photo/shallow-focus-shot-cute-golden-retriever-puppy-sitting-grass-ground_181624-24655.jpg?w=2000",
                    active: true,
                    userId: "5"
                },
                {
                    id: "6",
                    name: "camilo",
                    size: "MEDIUM",
                    age: "6 meses",
                    breed: "gato",
                    photo: "https://img.freepik.com/fotos-premium/hermoso-gato-ojos-azules_58409-14525.jpg?w=2000",
                    active: true,
                    userId: "4"
                },
                {
                    id: "7",
                    name: "no tiene",
                    size: "BIG",
                    age: "2 meses",
                    breed: "perro",
                    photo: "https://img.freepik.com/foto-gratis/lindo-perro-pastor-posando-aislado-sobre-fondo-blanco_155003-46179.jpg?w=2000",
                    active: true,
                    userId: "4"
                },
                {
                    id: "8",
                    name: "leo",
                    size: "MEDIUM",
                    age: "5 meses",
                    breed: "perro",
                    photo: "https://img.freepik.com/fotos-premium/primer-plano-perro-raza-mixta-jadeando_191971-7459.jpg?w=2000",
                    active: true,
                    userId: "5"
                }
                ,
                {
                    id: "9",
                    name: "sin nombre",
                    size: "BIG",
                    age: "3 meses",
                    breed: "perro",
                    photo: "https://img.freepik.com/fotos-premium/foto-vertical-cachorro-labrador-marron-cachorro-pequeno-expresion-adulta-dulce-perrito_106652-1123.jpg?w=2000",
                    active: true,
                    userId: "5"
                }
                ,
                {
                    id: "10",
                    name: "rafa",
                    size: "SMALL",
                    age: "1 años",
                    breed: "gato",
                    photo: "https://img.freepik.com/foto-gratis/cerrar-propietario-sosteniendo-lindo-gato_23-2149339568.jpg?w=2000",
                    active: true,
                    userId: "6"
                }
                ,
                {
                    id: "11",
                    name: "sin nombre",
                    size: "SMALL",
                    age: "7 meses",
                    breed: "gato",
                    photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vdq8XcrUFKWHTzBfK2taLeiumVdfWqy5KQ&usqp=CAU",
                    active: true,
                    userId: "6"
                }
                ,
                {
                    id: "12",
                    name: "michifus",
                    size: "SMALL",
                    age: "6 meses",
                    breed: "gato",
                    photo: "https://img.freepik.com/foto-gratis/gatito_658691-474.jpg?w=2000",
                    active: true,
                    userId: "6"
                }
            ]
        })
        await prisma.businessPost.createMany({
            data: [
                {
                    id: "1",
                    name: "Veterinaria pancitas",
                    contact: "321534564",
                    address: "cl 26 a 5 74 ",
                    description: "veterinaria con mas de 10 años de experiencia",
                    photo: "https://img.freepik.com/vector-premium/profesion-veterinaria-estilo-diseno-plano_180868-1407.jpg?w=2000",
                    type: "VETERINARY",
                    active: true,
                    ownerBusinessId: "3"
                },
                {
                    id: "2",
                    name: "Tienda patitas",
                    contact: "3215344474564",
                    address: "cra 426 a 5 74 ",
                    description: "tienda de comida para mascota",
                    photo: "https://img.freepik.com/vector-premium/tienda-mascotas-veterinaria-comida-perros_24877-61100.jpg?w=2000",
                    type: "SELLER",
                    active: true,
                    ownerBusinessId: "6"
                },
                {
                    id: "3",
                    name: "Cuidador de mascotas Janna Ruiz",
                    contact: "3215454734564",
                    address: "cl 284786 a 5 74 ",
                    description: "5 años de experiencia en cuidado animal",
                    photo: "https://img.freepik.com/vector-premium/cuidador-perros-o-voluntariado-mascotas-ilustracion-vector-servicio-pasear-perros_131590-418.jpg?w=2000",
                    type: "KEEPER",
                    active: true,
                    ownerBusinessId: "4"
                },
                {
                    id: "4",
                    name: "Peluqueria patitas",
                    contact: "3215344474564",
                    address: "cra 426 a 5 74 ",
                    description: "estilisamos a tus mascotas",
                    photo: "https://img.freepik.com/vector-premium/tienda-mascotas-fachada-exteriortienda-mascotas-edificio-tienda-banner-brillante-diseno-fachada-frontal_153905-111.jpg?w=2000",
                    type: "BARBER",
                    active: true,
                    ownerBusinessId: "5"
                }
            ]
        })
        await prisma.product.createMany({
            data: [
                {
                    id: "1",
                    name: "Pelota de Fútbol Puppis de Vinilo",
                    price: 300,
                    displayPrice: 522,
                    description: "La Pelota de Fútbol Puppis de Vinilo es ideal para jugar a lanzar y buscar con tu mascota, logrando mejorar su vínculo e incentivando a que tu perro haga ejercicio. Además, incluye sonido, lo que estimula la mente de tu mascota y ayuda a que descargue energía.",
                    stock: 14,
                    photo: "https://img.freepik.com/vector-gratis/vector-aislado-balon-futbol-realista-sobre-blanco_1284-41932.jpg",
                    category: "TOY",
                    brand: "puppis",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "2",
                    name: "bone",
                    price: 200,
                    displayPrice: 348,
                    description: "El Juguete Puppis Pato de Vinilo es ideal para jugar a lanzar y buscar con tu mascota, logrando mejorar su vínculo e incentivando a que tu perro haga ejercicio. Además, incluye sonido, lo que estimula la mente de tu mascota y ayuda a que descargue energía.",
                    stock: 10,
                    photo: "https://img.freepik.com/foto-gratis/primer-plano-pato-goma_53876-32073.jpg?w=2000",
                    category: "TOY",
                    brand: "puppis",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "3",
                    name: "Peluche Zeus Mojo Spider Ball",
                    price: 900,
                    displayPrice: 1355,
                    description: "El Peluche Zeus, está hecho de un material suave pero resistente. Está pensado especialmente para cachorros, ya que tiene el tamaño y peso ideal para transportar. Además, su diseño divertido llama la atención y los estimula a jugar.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/174145-1000-1000/236104.jpg?v=637434938604730000",
                    category: "TOY",
                    brand: "puppis",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "4",
                    name: "Juguete Kong Classic II - XS",
                    price: 2900,
                    displayPrice: 3690,
                    description: "El Kong clásico es el estándar dorado de los juguetes de perro y ofrece un enriquecimiento a los canes al ayudarlos a satisfacer sus necesidades instintivas. Su fórmula es ultra durable y tiene un pique impredecible para jugar con las mascotas.",
                    stock: 4,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/160177-1000-1000/224155.jpg?v=636368490685030000",
                    category: "TOY",
                    brand: "kong",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "5",
                    name: "Juguete Kong Hueso Squeezz Action",
                    price: 3800,
                    displayPrice: 4120,
                    description: "El Peluche Zeus, está hecho de un material suave pero resistente. Está pensado especialmente para cachorros, ya que tiene el tamaño y peso ideal para transportar. Además, su diseño divertido llama la atención y los estimula a jugar.",
                    stock: 20,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/182632-1000-1000/224378.jpg?v=637673987003030000",
                    category: "TOY",
                    brand: "kong",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "6",
                    name: "Alimento Royal Canin Medium Adulto - 15 Kg",
                    price: 12000,
                    displayPrice: 15500,
                    description: "Royal Canin Medium Adult es un alimento para perros adultos de razas medianas (11 a 25 Kg) desde los 12 meses hasta los 7 años. Con palatabilidad reforzada mediante aromas naturales seleccionados, tamaño, forma y textura de la croqueta adaptados. Asegura una óptima digestibilidad gracias a las proteínas de alta calidad y al aporte equilibrado de fibras alimentarias. Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.",
                    stock: 54,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/190297-1000-1000/156154.jpg?v=638028352034700000",
                    category: "FOOD",
                    brand: "royal canin",
                    size: "MEDIUM",
                    active: true,
                },
                {
                    id: "7",
                    name: "Alimento Old Prince Novel Cordero y Arroz Perro Adulto Mediano y Grande - 15+3 Kg",
                    price: 8000,
                    displayPrice: 9620,
                    description: "El Alimento Old Prince Novel Cordero y Arroz Perro Adulto Mediano Y Grande, aporta un correcto equilibrio entre el nivel, la calidad y el origen de las proteínas. Hecho con proteínas de origen no convencional que minimizan las probabilidades de alergias alimentarias y cutáneas.",
                    stock: 50,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/174145-1000-1000/236104.jpg?v=637434938604730000",
                    category: "FOOD",
                    brand: "old prince",
                    size: "MEDIUM",
                    active: true,
                },
                {
                    id: "8",
                    name: "Alimento Royal Canin Mini Adulto - 7,5 Kg",
                    price: 8000,
                    displayPrice: 9855,
                    description: "Royal Canin Mini Adult es un alimento para perros adultos de tamaño pequeño (de 1 a 10 Kg) desde los 10 meses hasta los 8 años. La L-Carnitina estimula el metabolismo de las reservas grasas. Satisface las necesidades energéticas gracias al contenido adaptado en calorías ( Royal Canin es líder en el mercado mundial de alimento balanceado para gatos y perros. Fundada en 1967 en Francia por un médico veterinario, Royal Canin asumió el compromiso de la Nutrición Salud, con el objetivo de aportar las respuestas nutricionales más innovadoras y adaptadas a las necesidades específicas de gatos y perros.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/174145-1000-1000/236104.jpg?v=637434938604730000",
                    category: "FOOD",
                    brand: "royal canin",
                    size: "SMALL",
                    active: true,
                },
                {
                    id: "9",
                    name: "Alimento Eukanuba Para Perro Adulto Raza Mediana - 15 Kg",
                    price: 10000,
                    displayPrice: 12555,
                    description: "El Alimento Eukanuba Adulto Medium Breed es un alimento balanceado completo para perros adultos mayores a 12 meses de edad y de razas medianas como Bulldog Francés, Beagle, Bretón, Cocker, Boxer, Schnauzer Standard y otras razas o perros mestizos que pesan entre 10 y 25 kg. Las fórmulas para adulto de EUKANUBA aseguran un nivel de glucosa en sangre adecuado y sostenido en el tiempo, y una digestión más prolongada gracias al balance especial entre diferentes tipos de granos.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/161972-1000-1000/Adulto-Medium-Breed-3Kg.jpg?v=636469526958730000",
                    category: "FOOD",
                    brand: "eukanuba",
                    size: "MEDIUM",
                    active: true,
                },
                {
                    id: "10",
                    name: "MAINTENANCE CRIADORES Adulto - 22 kg",
                    price: 3000,
                    displayPrice: 4355,
                    description: "El Alimento Maintenance Criadores Adulto está desarrollado especialmente para perros adultos de todos los tamaños, de entre 1 y 7 años de edad. Su fórmula incluye proteínas de carne y pollo de alto valor biológico, fibras, minerales, vitaminas y ácidos grasos, resultando en una nutrición completa para tu mascota.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/158003-1000-1000/150002.png?v=635894318957130000",
                    category: "FOOD",
                    brand: "maintenance criadores",
                    size: "MEDIUM",
                    active: true,
                },
                {
                    id: "11",
                    name: "Alimento Pro Plan Reduced Calorie para Perro Adulto - 15 Kg",
                    price: 12000,
                    displayPrice: 16605,
                    description: "El Alimento Pro Plan Reduced Calorie está fabricado con una fórmula de vanguardia que ayuda a lograr un peso corporal ideal, facilita la pérdida de peso en forma sana y protege a largo plazo la salud general de tu mascota. Un peso corporal saludable y una condición corporal magra son de suma importancia para mejorar la salud y aumentar la longevidad de tu perro. Además, contiene fuente natural de tres tipos de fibras que sacian el apetito manteniendo a los perros satisfechos.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/179873-1000-1000/7613287033130_1.png?v=637570861574070000",
                    category: "FOOD",
                    brand: "pro plan",
                    size: "MEDIUM",
                    active: true,
                },
                {
                    id: "12",
                    name: "Alimento Pro Plan Active Mind Perro Mediano y Grande - 15Kg",
                    price: 12000,
                    displayPrice: 15855,
                    description: "Purina Pro Plan provee nutrición de avanzada para proteger a los perros mayores de 7 años, manteniéndolos sanos y activos. A su vez, refuerza el sistema inmunológico, mantiene saludables las articulaciones y refuerza la atención mental. Formulado con fuentes naturales de glucosamina, que ayudan a mantener las articulaciones sanas y una movilidad óptima. Contiene una proporción equilibrada de proteína y grasa para mantener la masa muscular magra, una combinación de antioxidantes naturales y vitaminas E y C.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/179848-1000-1000/7613287032911_1.png?v=637570861499770000",
                    category: "FOOD",
                    brand: "pro plan",
                    size: "MEDIUM",
                    active: true,
                },
                {
                    id: "13",
                    name: "Shampoo Moksha Belleza Con Henna - 250 Cc",
                    price: 300,
                    displayPrice: 500,
                    description: "Shampoo para extra brillo.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/169227-1000-1000/371054.jpg?v=637133172708670000",
                    category: "HEALTH",
                    brand: "moksha",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "14",
                    name: "Shampoo Algas Vitalizador Y Abrillantador Osspret - 250 Cc",
                    price: 500,
                    displayPrice: 955,
                    description: "Shampoo a base de algas para un mejor brillo de tu mascota.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/157369-1000-1000/Osspret_algas_iktkop.jpg?v=635773197331430000",
                    category: "HEALTH",
                    brand: "osspret",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "15",
                    name: "Shampoo Tonalizador Negro Osspret - 250 Cc",
                    price: 500,
                    displayPrice: 975,
                    description: "Shampoo para pelaje oscuro, rejuvence el pelaje.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/157378-1000-1000/Osspret_tonalizador_negro_dokwar.jpg?v=635773197425030000",
                    category: "HEALTH",
                    brand: "osspret",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "16",
                    name: "Caja Mon Ami Churrasquitos Grille - 400 Gr",
                    price: 1200,
                    displayPrice: 1755,
                    description: "La Caja Mon Ami De Churrasquito Grillé, contiene snacks perfectos para premiar a tu mascota, demostrarles afecto y mejorar su vínculo. Están fabricados con ingredientes 100% naturales para asegurar que tu perro tenga una dieta de alta calidad y saludable. Además, incluyen carne fresca, que hacen del snack súper nutritivo y sabroso para tu mascota.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/184272-1000-1000/233055.png?v=637733510416600000",
                    category: "SNACK",
                    brand: "Mon Ami",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "17",
                    name: "Snack Pedigree Rodeo Sabor Carne - 4 Unids.",
                    price: 100,
                    displayPrice: 355,
                    description: "Snack sabor carne, con fibra y calcio.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/182277-1000-1000/235025.jpg?v=637650377904600000",
                    category: "SNACK",
                    brand: "pedigree",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "18",
                    name: "Hueso Corbata Perro CanCat - 7/8",
                    price: 800,
                    displayPrice: 955,
                    description: "Los huesos de CanCAT son juguetes que fortalecen los dientes de tu mascota, elaborados con material de la mejor calidad, ayuda a ejercitar la mandíbula, también disminuyen el sarro, limpiando y dando brillo a los dientes, fortalecen las encías, gracias a este juguete se puede prevenir el mal aliento y liberarse del estrés. Extra-Grande: 22cm (largo) Grande: 19cm (largo) Mediano: 16cm (largo) Chico: 13cm (largo) Mini: 10cm (largo)",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/158933-1000-1000/M.jpg?v=636110980424170000",
                    category: "TOY",
                    brand: "cancat",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "19",
                    name: "Camiseta Argentina Del Mundial Con Escudo",
                    price: 2900,
                    displayPrice: 3655,
                    description: "Camiseta de Argentina para que tu mascota aliente a la seleccion.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/189177-1000-1000/275032-275033-275034-275035-275036-275037.jpg?v=637979983148900000",
                    category: "ACCESORIES",
                    brand: "propia",
                    size: "UNIQUE",
                    active: true,
                },
                {
                    id: "20",
                    name: "Comedero Acero Inoxidable Puppis 0.85 L",
                    price: 1500,
                    displayPrice: 1855,
                    description: "El Comedero de acero inoxidable, cuenta con una base de goma antideslizante y borde siliconado para una mejor alimentación perruna.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/189247-1000-1000/269356.jpg?v=637979986998170000",
                    category: "ACCESORIES",
                    brand: "puppis",
                    size: "SMALL",
                    active: true,
                },
                {
                    id: "21",
                    name: "Comedero Comelento Pawise - 1500 ml",
                    price: 1500,
                    displayPrice: 2355,
                    description: "Comedero para que tu mascota coma mas lento.",
                    stock: 14,
                    photo: "https://puppis.vteximg.com.br/arquivos/ids/183121-1000-1000/237619.jpg?v=637698186241800000",
                    category: "ACCESORIES",
                    brand: "puppis",
                    size: "MEDIUM",
                    active: true,
                }



            ]
        })
    } catch (error) {
        console.log(error)
    }

}