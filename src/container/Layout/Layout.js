import styles from "./styles/layout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
const paths = [
  "/about",
  "/service-tariff",
  "/call-us",
  "/dashboard",
  "/business",
];
const Layout = (props) => {
  const { children } = props;
  const router = useRouter();
  const path = router.asPath;
  const isHome = !paths.some((x) => path.includes(x));
  return (
    <div
      className={`hidden ${
        isHome ? styles.backGroundHome : styles.backGroundHomeBlack
      } betweenCenterColumn wh100`}
    >
      <Header />
      <main className={`wh100 center index100 mMain`}>
        <div className={`wBase h100 center`}>{children}</div>
      </main>
      {isHome && <Footer />}
    </div>
  );
};
export default Layout;
