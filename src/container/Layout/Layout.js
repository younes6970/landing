import styles from "./styles/layout.module.scss"
import Header from "../Header/Header";
const Layout = (props) => {
  const { children } = props;
  return (
    <div className={`${styles.backGroundHome} betweenCenterColumn wh100`}>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};
export default Layout