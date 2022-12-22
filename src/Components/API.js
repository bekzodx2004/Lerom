import Home from "./Home/Home";
import Katalog from "./Katalog/Katalog";

import I1 from "./images/r1.png";
import I2 from "./images/r2.png";
import I3 from "./images/r3.png";
import I4 from "./images/r4.png";
import I5 from "./images/r5.png";

import I6 from "./images/r6.png";
import I7 from "./images/r7.png";
import I8 from "./images/r8.png";
import I9 from "./images/r9.png";

import K1 from "./images/kolleksiya1.png";
import K2 from "./images/kolleksiya2.png";
import K3 from "./images/kolleksiya3.png";

export const routes = [
  {
    id: Math.random() * 1000,
    route: "/",
    path: "/",
    element: <Home />,
  },
  {
    id: Math.random() * 1000,
    route: "/cart",
    path: "/cart",
    element: <Home />,
  },
  {
    id: Math.random() * 1000,
    route: "/katalog",
    path: "/katalog",
    element: <Katalog />,
  },
];
export const ul = [
  {
    id: Math.random() * 1000,
    text: "О нас",
    path: "https://t.me/bekzodx2004",
  },
  {
    id: Math.random() * 1000,
    text: "3D-моделирование",
    path: "https://t.me/bekzodx2004",
  },
  {
    id: Math.random() * 1000,
    text: "Покупателю",
    path: "https://t.me/bekzodx2004",
  },
  {
    id: Math.random() * 1000,
    text: "Доставка и оплата",
    path: "https://t.me/bekzodx2004",
  },
];
export const rooms = [
  {
    id: Math.random() * 1000,
    img: I1,
    title: "Гостиные",
    info: "Мини текст описания и преимущества покупки данного направления.",
    zakazov: 2030,
    price: "42.000",
  },
  {
    id: Math.random() * 1000,
    img: I2,
    title: "Спальни",
    info: "Мини текст описания и преимущества покупки данного направления.",
    zakazov: 2030,
    price: "42.000",
  },
  {
    id: Math.random() * 1000,
    img: I3,
    title: "Детские",
    info: "Мини текст описания и преимущества покупки данного направления.",
    zakazov: 2030,
    price: "42.000",
  },
  {
    id: Math.random() * 1000,
    img: I4,
    title: "Прихожие",
    info: "Мини текст описания и преимущества покупки данного направления.",
    zakazov: 2030,
    price: "42.000",
  },
  {
    id: Math.random() * 1000,
    img: I5,
    title: "Кровати",
    info: "Мини текст описания и преимущества покупки данного направления.",
    zakazov: 2030,
    price: "42.000",
  },
];
export const links = [
  {
    id: Math.random() * 1000,
    h: "О компании",
    l1: "Производство",
    url1: "https://t.me/bekzodx2004",
    l2: "Награды",
    url2: "https://t.me/bekzodx2004",
    l3: "Сертификаты",
    url3: "https://t.me/bekzodx2004",
  },

  {
    id: Math.random() * 1000,
    h: "Покупателю",
    l1: "Как сделать заказ",
    url1: "https://t.me/bekzodx2004",
    l2: "Рекомендации по сборке",
    url2: "https://t.me/bekzodx2004",
    l3: "Договор публичной оферты ",
    url3: "https://t.me/bekzodx2004",
  },

  {
    id: Math.random() * 1000,
    h: "Полезная информация",
    l1: "Всё о фасадах",
    url1: "https://t.me/bekzodx2004",
    l2: "Всё о фурнитуре",
    url2: "https://t.me/bekzodx2004",
    l3: "Всё о ЛДСП ",
    url3: "https://t.me/bekzodx2004",
  },

  {
    id: Math.random() * 1000,
    h: "  3D-моделирование",
    l1: "Запустить онлайн, от 2 Мбит/с",
    url1: "https://t.me/bekzodx2004",
    l2: "Скачать на компьютер,    606 Мб",
    url2: "https://t.me/bekzodx2004",
    l3: "",
    url3: "https://t.me/bekzodx2004",
  },
];

export const footer3 = [
  {
    id: Math.random() * 1000,
    text: "Рассрочка",
    url: "https://t.me/bekzodx2004",
  },
  {
    id: Math.random() * 1000,
    text: "Гарантия",
    url: "https://t.me/bekzodx2004",
  },
  {
    id: Math.random() * 1000,
    text: "Контакты",
    url: "https://t.me/bekzodx2004",
  },
];

export const stat1 = [
  { id: Math.random() * 1000, count: 21845 },
  { id: Math.random() * 1000, count: 2435 },
  { id: Math.random() * 1000, count: 478 },
];

export const novosti = [
  {
    id: Math.random() * 1000,
    header: "Информация",
    bottom: "лером",
    a: "показать еще новости",

    blok: [
      {
        id: Math.random() * 1000,
        img: I6,
        h1: "Доставка по всей России",
        p: "Мини текст описания новости и ее актуальности",
      },
      {
        id: Math.random() * 1000,
        img: I7,
        h1: "Бесплатная сборка",
        p: "Мини текст описания новости и ее актуальности",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    header: "Интересное",
    bottom: "лером",
    a: "открыть раздел новости",

    blok: [
      {
        id: Math.random() * 1000,
        img: I8,
        h1: "Как выбрать матрас",
        p: "Мини текст описания новости и ее актуальности",
      },
      {
        id: Math.random() * 1000,
        img: I9,
        h1: "Какой шкаф выбрать в 2022 году",
        p: "Мини текст описания новости и ее актуальности",
      },
    ],
  },
];

export const katalog = [
  {
    id: Math.random() * 1000,
    tur: "Новинки",
    modellar: [
      {
        id: Math.random() * 1000,
        model: " Мелисса 2021",
      },
      {
        id: Math.random() * 1000,
        model: "Карина",
      },
      {
        id: Math.random() * 1000,
        model: "Камелия 2021",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    tur: "Гостинные",
    modellar: [
      {
        id: Math.random() * 1000,
        model: " Мелисса 2021",
      },
      {
        id: Math.random() * 1000,
        model: "Карина",
      },
      {
        id: Math.random() * 1000,
        model: "Камелия 2021",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    tur: "Прихожие",
    modellar: [
      {
        id: Math.random() * 1000,
        model: " Мелисса 2021",
      },
      {
        id: Math.random() * 1000,
        model: "Карина",
      },
      {
        id: Math.random() * 1000,
        model: "Камелия 2021",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    tur: "Спальни",
    modellar: [
      {
        id: Math.random() * 1000,
        model: " Мелисса 2021",
      },
      {
        id: Math.random() * 1000,
        model: "Карина",
      },
      {
        id: Math.random() * 1000,
        model: "Камелия 2021",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    tur: "Детские",
    modellar: [
      {
        id: Math.random() * 1000,
        model: " Мелисса 2021",
      },
      {
        id: Math.random() * 1000,
        model: "Карина",
      },
      {
        id: Math.random() * 1000,
        model: "Камелия 2021",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    tur: "Кровати",
    modellar: [
      {
        id: Math.random() * 1000,
        model: " Мелисса 2021",
      },
      {
        id: Math.random() * 1000,
        model: "Карина",
      },
      {
        id: Math.random() * 1000,
        model: "Камелия 2021",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    tur: "Матрасы",
    modellar: [
      {
        id: Math.random() * 1000,
        model: " Мелисса 2021",
      },
      {
        id: Math.random() * 1000,
        model: "Карина",
      },
      {
        id: Math.random() * 1000,
        model: "Камелия 2021",
      },
    ],
  },
];

export const collections = [
  {
    id: Math.random() * 1000,
    collectionName: "Мелисса 2021",
    collectionAbout:
      "Мини текст описания и преимуществапокупки данного направления.",
    img: K1,

    collectionItems: [
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    collectionName: "Карина",
    collectionAbout:
      "Мини текст описания и преимущества покупки данного направления.",
    img: K2,
    collectionItems: [
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
    ],
  },
  {
    id: Math.random() * 1000,
    collectionName: "Спальни",
    collectionAbout:
      "Мини текст описания и преимущества покупки данного направления.",
    img: K3,
    collectionItems: [
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
      {
        id: Math.random() * 1000,
        collectionItemName: " Мелисса композиция 1",
        razmer: "в 1462    ш 360     г 352",
        V: " 12м",
        price: "59 658 ₽ ",
      },
    ],
  },
];
