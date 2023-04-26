import { IPizza } from "@/types/pizzaType";
import { vId } from "@/utils/formatValue";

export const pizzas: IPizza[] = [
  {
    id: vId(),
    types: "vega",
    url: "/pizza/img1.png",
    name: "Чизбургер-пицца",
    price: 395,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    types: "gril",
    url: "/pizza/img2.png",
    name: "Сырная",
    price: 320,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    types: "sharp",
    url: "/pizza/img3.png",
    name: "Креветки по-азиатски",
    price: 430,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    types: "meat",
    url: "/pizza/img4.png",
    name: "Сырный цыпленок",
    price: 415,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    types: "vega",
    url: "/pizza/img5.png",
    name: "Джанго",
    price: 375,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    types: "meat",
    url: "/pizza/img6.png",
    name: "Деревенская",
    price: 380,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    types: "meat",
    url: "/pizza/img7.png",
    name: "Марселейза",
    price: 440,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
  {
    id: vId(),
    types: "meat",
    url: "/pizza/img8.png",
    name: "Пеперони",
    price: 400,
    type: {
      select1: { id: 1, select: true, value: "тонкое" },
      select2: { id: 2, select: false, value: "обычное" },
    },
    width: {
      select1: { id: 1, select: true, value: "26 cm" },
      select2: { id: 2, select: false, value: "30 cm" },
      select3: { id: 3, select: false, value: "40 cm" },
    },
  },
];
