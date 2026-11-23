export const storefront = {
  brand: "SWEET SHIMMER",
  nav: [
    { label: "Inicio", href: "#top" },
    { label: "Colección", href: "#collection" },
    { label: "Acerca de", href: "#about" },
    { label: "Diario", href: "#journal" },
  ],
  contact: { label: "Contacto", href: "#contact" },
  eyebrow: "JOYERÍA CONTEMPORÁNEA · OBJETOS SELECCIONADOS",
  headline: "ESCULTURAL",
  script: "shimmer.",
  tagline: "Donde comienza la forma luminosa.",
  description: "Ediciones limitadas de joyería contemporánea, hechas en series pequeñas: elegidas con intención y llevadas con elegancia serena.",
  cta: { label: "EXPLORAR COLECCIÓN", href: "#collection" },
};

export const categories = ["Todos", "Collares", "Aretes", "Pulseras", "Sets"] as const;

export const products = [
  { img: "01-pulsera-sol-lila.jpg", name: "Pulsera Sol Lila", cat: "Pulseras", desc: "Cadena dorada ajustable con motivos de sol y gotas de circonia lila." },
  { img: "02-aretes-corazon.jpg", name: "Aretes Corazón", cat: "Aretes", desc: "Corazones dorados de volumen suave y acabado pulido brillante." },
  { img: "03-set-estrella.jpg", name: "Set Estrella", cat: "Sets", desc: "Collar de cadena fina con estrella inflada y aretes a juego." },
  { img: "04-collar-concha-perla.jpg", name: "Collar Concha y Perla", cat: "Collares", desc: "Dije de concha con perla y circonias sobre cadena de eslabones." },
  { img: "05-aretes-flor.jpg", name: "Aretes Flor", cat: "Aretes", desc: "Flores doradas con pétalos texturizados que atrapan la luz." },
  { img: "06-collares-iniciales.jpg", name: "Collares Inicial", cat: "Collares", desc: "Letra en relieve tipo globo sobre una cadena fina y delicada." },
  { img: "07-pulseras-ojos.jpg", name: "Pulseras Ojos", cat: "Pulseras", desc: "Placa dorada con ojos grabados sobre cadena de eslabones, junto a un brazalete liso." },
  { img: "08-collar-luna-estrellas.jpg", name: "Collar Luna y Estrellas", cat: "Collares", desc: "Doble cadena fina con pequeños dijes de estrellas y luna." },
  { img: "10-pulsera-corazones-plata.jpg", name: "Pulsera Corazones", cat: "Pulseras", desc: "Plata con un corazón de circonia y otro con inicial grabada." },
  { img: "11-collar-trebol-nacar.jpg", name: "Collar Trébol Nácar", cat: "Collares", desc: "Trébol de nácar con borde dorado texturizado, sobre cadena fina." },
  { img: "12-relicario-corazon.jpg", name: "Relicario Corazón", cat: "Collares", desc: "Relicario dorado que se abre para guardar una foto y una nota." },
  { img: "13-collares-capas-corazon.jpg", name: "Collares en Capas", cat: "Collares", desc: "Cadenas finas para combinar, con un dije de corazón abierto." },
  { img: "14-brazaletes-corazon.jpg", name: "Brazaletes Corazón", cat: "Pulseras", desc: "Brazaletes abiertos: corazones dorados, cruz y corazón de cristales en plata." },
] as const;

export const journal = [
  { title: "Por qué fundimos en series pequeñas", tag: "Proceso", read: "4 min", excerpt: "Menos piezas, más atención. Cómo cambia nuestro trabajo una serie de cuarenta." },
  { title: "La luz como material", tag: "Notas del taller", read: "6 min", excerpt: "Satinado, cepillado y pulido: tres acabados y cómo atrapa cada uno la luz." },
  { title: "Cuidados del oro satinado", tag: "Guía", read: "3 min", excerpt: "Una rutina breve para mantener el acabado suave y parejo durante años." },
];

export const values = ["Acabado a mano en series pequeñas", "Diseños pensados para el uso diario", "Piezas elegidas con intención"];

/** Imagen de About (archivo dentro de /public). Si es null se usa la ilustración en código. */
export const aboutImage: string | null = "/images/06-collares-iniciales.jpg";
