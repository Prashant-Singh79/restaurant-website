import style from "../styles/Featured.module.css";
import Image from "next/image";
export const Featured = () => {

    const images=[
        "/img/featured.png",
        "/img/featured.png",
        "/img/featured.png"
    ];

  return (
    <div className={style.container}>
      <img src="/img/pizza.jpg" height="100%" width="100%" alt=""/>
    </div>
  );
};
