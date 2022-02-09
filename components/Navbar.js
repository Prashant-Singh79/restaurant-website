import Image from "next/image";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
     <div className={style.item}>Restaurant Name</div>
      <div className={style.item}>
        <ul className={style.list}>
          <a href="#home" className={style.listItem}>Home</a>
          <a href="#menu" className={style.listItem}>Menu</a>
          <a href="#about" className={style.listItem}>About</a>
          <a href="#contact" className={style.listItem}>Contact</a>
        </ul>
      </div>
      
      <div className={style.item}>
        <div className={style.callbtn}>
          <Image src="/img/telephone.png" width="32" height="32" />
        </div>
        <div className={style.texts}>
          <div className={style.text}>Order Now</div>
          <div className={style.text}>7974134983</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
