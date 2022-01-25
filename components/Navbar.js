import Image from "next/image";
import style from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
     <div className={style.item}>Restaurant Name</div>
      <div className={style.item}>
        <ul className={style.list}>
          <li className={style.listItem}>Home</li>
          <li className={style.listItem}>Menu</li>
          <li className={style.listItem}>About</li>
          <li className={style.listItem}>Contact</li>
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
