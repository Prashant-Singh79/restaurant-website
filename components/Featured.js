import style from "../styles/Featured.module.css";
import Image from "next/image";
export const Featured = () => {

    const images=[
        "/img/featured.png",
        "/img/featured.png",
        "/img/featured.png"
    ];

  return (
    <>
    <div className={style.container} id="home">
      <img src="/img/pizza.jpg" height="100%" width="100%" alt=""/>
    </div>
    <div id="menu">Here is a menu page</div>
    <div id="about">Here is a about page</div>
    <div id="contact">Here is a contact page</div>
    </>
  );
};
