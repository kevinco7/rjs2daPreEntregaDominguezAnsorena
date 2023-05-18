import cardImage from "./assets/cardImage/macbook-pro-14.png";
import cardImage2 from "./assets/cardImage/macbook-pro-13.png";
import cardImage3 from "./assets/cardImage/macbook-pro-16.png";
import cardImage4 from "./assets/cardImage/iphone-pro-max-14.png";
import cardImage5 from "./assets/cardImage/iphone-14-plus-red.png";
import cardImage6 from "./assets/cardImage/ipad-pro-11.png";
import cardImage7 from "./assets/cardImage/ipad-pro-12.9.png";
import cardImage8 from "./assets/cardImage/airpods-max.png";
import cardImage9 from "./assets/cardImage/watch-8.png";
import cardImage10 from "./assets/cardImage/watch-ultra.png";

const products = [
  {
    id: 1,
    titulo: "MacBook Pro 13 ",
    descripcion:
      "Procesador M2, CPU de 8 núcleos, GPU de 10 núcleos, 8 GB de memoria unificada, 256 GB de almacenamiento SSD",
    imagen: cardImage2,
    categoria: "mac",
    precio: 1500,
  },
  {
    id: 2,
    titulo: "MacBook Pro 14",
    descripcion:
      "Chip M2 Pro de Apple con CPU de 10 núcleos, GPU de 16 núcleos y Neural Engine de 16 núcleos, 16 GB de memoria unificada, 512 GB de almacenamiento SSD, Adaptador de corriente USB‑C de 67 W, Pantalla Liquid Retina XDR de 14 pulgadas, Tres puertos Thunderbolt 4, puerto HDMI, ranura para tarjetas SDXC, toma para auriculares y puerto MagSafe 3, Magic Keyboard retroiluminado con Touch ID - Español",
    categoria: "mac",
    imagen: cardImage,
    precio: 2200,
  },
  {
    id: 3,
    titulo: "MacBook Pro 16",
    descripcion:
      "Chip M2 Pro de Apple con CPU de 12 núcleos, GPU de 19 núcleos y Neural Engine de 16 núcleos, 16 GB de memoria unificada, 512 GB de almacenamiento SSD, Pantalla Liquid Retina XDR de 16 pulgadas², Tres puertos Thunderbolt 4, puerto HDMI, ranura para tarjetas SDXC, toma para auriculares y puerto MagSafe 3, Adaptador de corriente USB‑C de 140 W, Magic Keyboard retroiluminado con Touch ID - Español",
    categoria: "mac",
    imagen: cardImage3,
    precio: 2600,
  },
  {
    id: 4,
    titulo: "iPhone 14 Pro Max",
    descripcion:
      "El iPhone 14 Pro Max te permite captar detalles increíbles gracias a su cámara gran angular de 48 MP. Además, trae la Dynamic Island y una pantalla siempre activa, para que puedas interactuar con tu iPhone de una forma completamente nueva. Y viene con Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando no estás en condiciones de hacerlo.",
    categoria: "iphone",
    imagen: cardImage4,
    precio: 1400,
  },
  {
    id: 5,
    titulo: "Iphone 14 plus",
    descripcion:
      "El iPhone 14 Plus te invita a pensar en grande con su pantalla de 6.7 pulgadas y una batería que te acompaña todo el día. Su nuevo sistema de dos cámaras te permite tomar fotos espectaculares en condiciones de mucha o poca luz. Y viene con Detección de Choques, una nueva funcionalidad de seguridad que pide ayuda cuando no estás en condiciones de hacerlo.",
    categoria: "iphone",
    imagen: cardImage5,
    precio: 1000,
  },
  {
    id: 6,
    titulo: "ipad Pro 12.9''",
    descripcion:
      "El iPad Pro da un gran salto adelante con la nueva generación de chips de Apple. Su CPU de 8 núcleos alcanza un rendimiento hasta un 15% superior y el GPU de 10 núcleos incrementa la velocidad de los gráficos hasta en un 35%. Y gracias a un Neural Engine un 40% más veloz que acelera las tareas de aprendizaje automático y un ancho de banda de memoria un 50% mayor, el iPad Pro con chip M2 ofrece nuevas capacidades e increíbles niveles de rendimiento. Con él podrás crear diseños 3D fotorrealistas, diseñar complejos modelos de realidad aumentada y disfrutar juegos con gráficos dignos de una consola a una alta frecuencia de cuadros más rápido que nunca. Todo con una batería que te acompañará todo el día.",
    categoria: "ipad",
    imagen: cardImage6,
    precio: 1500,
  },
  {
    id: 7,
    titulo: "ipad Pro 11'' ",
    descripcion:
      "El iPad Pro da un gran salto adelante con la nueva generación de chips de Apple. Su CPU de 8 núcleos alcanza un rendimiento hasta un 15% superior y el GPU de 10 núcleos incrementa la velocidad de los gráficos hasta en un 35%. Y gracias a un Neural Engine un 40% más veloz que acelera las tareas de aprendizaje automático y un ancho de banda de memoria un 50% mayor, el iPad Pro con chip M2 ofrece nuevas capacidades e increíbles niveles de rendimiento. Con él podrás crear diseños 3D fotorrealistas, diseñar complejos modelos de realidad aumentada y disfrutar juegos con gráficos dignos de una consola a una alta frecuencia de cuadros más rápido que nunca. Todo con una batería que te acompañará todo el día.",
    categoria: "ipad",
    imagen: cardImage7,
    precio: 1100,
  },
  {
    id: 8,
    titulo: "Apple Watch series 8",
    descripcion:
      "El Apple Watch Series 8 viene con apps y sensores de salud avanzados con los que puedes medir tu frecuencia cardíaca y nivel de oxígeno en sangre, monitorear cambios de temperatura para obtener información relevante sobre tu ciclo menstrual. Además, incluye Detección de Choques, datos sobre las fases del sueño y métricas avanzadas de entrenamiento para ayudarte a llevar una vida más activa, saludable, segura y conectada.",
    categoria: "watch",
    imagen: cardImage9,
    precio: 550,
  },
  {
    id: 9,
    titulo: "Apple Watch Ultra",
    descripcion:
      "Descubre el Apple Watch más fuerte y equipado que existe. Diseñado para la exploración, la aventura y los deportes de resistencia. Con una caja de 49 mm fabricada con titanio de calidad aeroespacial, batería para varios días, apps especializadas que trabajan en equipo con los sensores avanzados y un Botón de Acción personalizable.",
    categoria: "watch",
    imagen: cardImage10,
    precio: 900,
  },
  {
    id: 10,
    titulo: "Airpods Max",
    descripcion:
      "Presentamos los AirPods Max. El equilibrio perfecto entre un audio de alta fidelidad increíble y la mágica facilidad de uso de los AirPods. Tus próximos audífonos ya están aquí para brindarte una experiencia de audio inigualable.",
    categoria: "airpods",
    imagen: cardImage8,
    precio: 600,
  },
];

export const pedirDatos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    const item = products.find((el) => el.id === id);

    if (item) {
      resolve(item);
    } else {
      reject({
        error: "No se encontró el producto",
      });
    }
  });
};
