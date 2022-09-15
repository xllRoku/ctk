import rastero from "../../assets/images/services/rastreo-en-vivo-gps-tracking.webp";
import consulta from "../../assets/images/services/consulta-viajes-gps-tracking.webp";
import geocercas from "../../assets/images/services/geocercas-gps-tracking.webp";
import productividad from "../../assets/images/services/productividad-hd-gps-tracking.webp";
import habitos from "../../assets/images/services/habitos-de-manejo-gps-tracking.webp";
import combustible from "../../assets/images/services/combustible-hd-gps-tracking.webp";
// import rastreo from "../../assets/images"

const web_sites = [
  {
    title: "Seguimiento En Tiempo Real",
    image: rastero,
    points: [
      {
        point: "Ubicación por tiempo o distancia",
      },
      {
        point: "Estado del vehículo Encedido/Apagado",
      },
      {
        point: "Tiempo detenido o en viaje",
      },
    ],
    description:
      "Controla de manera eficaz la actividad en la operación diaria de cada uno de tus vehículos de manera detallada. Podrás Monitorear en tiempo real todos tus activos importantes, contando con alta precisión para la ubicación de vehículos en movimiento.",
  },
  {
    title: "Informe de Viajes",
    image: consulta,
    points: [
      {
        point: "Cantidad de viajes",
      },
      {
        point: "Velocidad promedio",
      },
      {
        point: "Histórico de recorrido",
      },
    ],
    description:
      "Ofrece una visión profunda de todos los viajes generados por tus vehículos de forma automática. Obtienes parámetros durante cada recorrido como: la distancia, Kms recorridos, tiempo encendido, en ralentí, excesos de velocidad y mucho más, pero siempre en tiempo real.",
  },
  {
    title: "Geocercas y Zonas de Control",
    image: geocercas,
    points: [
      {
        point: "Optagonal o Poligonal",
      },
      {
        point: "Múltiples alertas",
      },
      {
        point: "Numero ilimitado de geocercas",
      },
    ],
    description:
      "Crea y organiza zonas geográficas en un mapa. Personaliza con iconos y colores cada una de las geocercas, conoce los límites de velocidad dentro de cada una, ejecuta informes de eventos basados ​​en un área definida, controla las actividades de tu flota en una zona específica de manera fácil y efectiva.",
  },
  {
    title: "Informes De Productividad",
    image: productividad,
    points: [
      {
        point: "Horas de trabajo",
      },
      {
        point: "Odómetro a bordo",
      },
      {
        point: "Combustible por Gastado",
      },
    ],
    description:
      "Proporciona diferentes informes personalizados, que incluyen descripciones gráficas para facilitar la comparación y el análisis del rendimiento de tu flota. Las herramientas de visualización proporcionan información útil para realizar un efectivo control logístico.",
  },
  {
    title: "Actividad de Vehiculos y Conductores",
    image: habitos,
    points: [
      {
        point: "Alertas por mal manejo",
      },
      {
        point: "Informes por vehículo",
      },
      {
        point: "Prevenga accidentes",
      },
    ],
    description:
      "Tendrás la posibilidad de conocer los detalles y en tiempo real sobre el uso y/o abuso que de tus vehículos; mediante la métrica y la data que generan los hábitos de conducción como: excesos de velocidad, frenadas bruscas, aceleradas fuertes, distancias recorridas y velocidad promedio",
  },
  {
    title: "Distancia/tiempo Costo Estimado de Combustible  ",
    image: combustible,
    points: [
      {
        point: "Evaluar costos en distribución",
      },
      {
        point: "Consumo detallado por trayecto",
      },
      {
        point: "Eficiencia de combustible por vehículo",
      },
    ],
    description:
      "Conoce la distancia total recorrida de tu vehículo basado en el valor del odómetro durante cualquier periodo de tiempo para calcular un estimado de combustible consumido. Esta acción te permitirá conocer el costo del combustible por recorridos totales o parciales.",
  },
];

export { web_sites };
