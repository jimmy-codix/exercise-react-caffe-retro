import type { ICaffeData } from "../types/interfaces";


export const caffeData: ICaffeData[] = [
  {
    id: "hot",
    headerText: "Hot",
    bgImageSrc: "./images/hot-coffee.jpg",
    redBoxTopText: "Hot freshly ground black coffee or a cup of exquisite tea?",
    redBoxBottomText: "We give you that perfect cup every time.",
    content: (
    <>
        <div className="row">
            <p>Mocha Latte</p>
            <p>€ 7.50</p>
        </div>
        <div className="row">
            <p>Caffe Formaggio</p>
            <p>€ 5.00</p>
        </div>
        <div className="row">
            <p>Espresso</p>
            <p>€ 3.50</p>
        </div>
        <div className="row">
            <p>Chai Verde Latte</p>
            <p>€ 5.50</p>
        </div>
    </>
    )
  },
  {
    id: "juicy",
    headerText: "Juicy",
    bgImageSrc: "./images/juicy-fruit.jpg",
    redBoxTopText: "Ripe fruit - freshly squeezed.",
    redBoxBottomText: "It's as simple as that. Chunky or smooth - it's your choice.",
    content: (
    <>
        <div className="row">
            <p>Branched Apricots</p>
            <p>€ 4.20</p>
        </div>
        <div className="row">
            <p>Deep Rasberries</p>
            <p>€ 3.50</p>
        </div>
        <div className="row">
            <p>Smooth Oranges</p>
            <p>€ 6.50</p>
        </div>
    </>
    )
  },
  {
    id: "cosy",
    headerText: "Cosy",
    bgImageSrc: "./images/cozy-cafe.jpg",
    redBoxTopText: "Hang around. Enjoy the settings.",
    redBoxBottomText: "Use our fast WiFi. Borrow a newspaper or a novel.",
    content: (
    <>
        <div className="row">
            <p>Mon-Sun</p>
            <p>8am – 11pm</p>
        </div>
        <div className="row">
            <p>Caffe Retro</p>
            <p>Canto VI</p>
        </div>
        <div className="row">
            <p>0123-45 67 89</p>
            <p>caffe&#64;lorem.page</p>
        </div>
    </>
    )
  },
];