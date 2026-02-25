export const staticShop = [
  {
    id: "tshirt-red-black",
    title: "T-shirt Red Light Distortion Black and Red",
    img: "/images/shop/tshirt-black-red.jpg",
    price: 19.99,
    shortDescription: "T-shirt en coton, noir et rouge",
    longDescription: "Composé de 100% coton, disponible en S/M/L. Lavage à 30°C. Impression résistant au temps.",
    stock: 12,
    category: "T-shirt",
    options: {
      size: ["S", "M", "L", "XL"],
      color: ["Black/Red"]
    },
    promo: null // or something like -20%
  },
  {
    id: "box_rld",
    title: "Box Red Light Distortion",
    img: "/images/news/sirFailure.JPG",
    price: 9.99,
    shortDescription: "T-shirt en coton, noir et rouge",
    longDescription: "Composé de 100% coton, disponible en S/M/L. Lavage à 30°C. Impression résistant au temps.",
    stock: 10,
    category: "T-shirt",
    options: {
      color: ["Black/Red"]
    },
    promo: null // or something like -20%
  },
  {
    id: "ep_red",
    title: "EP Red Light Distortion",
    img: "/images/news/vie_campus_culture_01.jpg",
    price: 9.99,
    shortDescription: "EP de Red Light Distortion",
    longDescription: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?",
    stock: 10,
    category: "Disc",
    options: {
    },
    promo: null // or something like -20%
  }
];

export function getShop(id) {
  return staticShop.find(
    (item) => item.id === id
  );
}