import styles from "./styles/layout.module.scss";
import Header from "../Header/Header";
const Layout = (props) => {
  const { children } = props;
  return (
    <div className={`hidden ${styles.backGroundHome} betweenCenterColumn wh100`}>
      <Header />
      <main className={`wh100 center index100 mMain`}>
        <div className={`wBase h100 center`}>{children}</div>
      </main>
      <footer>footer</footer>
    </div>
  );
};
export default Layout;
