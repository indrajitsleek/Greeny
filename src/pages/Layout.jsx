import HeaderTop from '../components/HeaderTop';
import HeaderBottom from '../components/HeaderBottom';
import Nav from '../components/Nav';
import CategorySideBar from '../components/CategorySideBar';
import CartSideBar from '../components/CartSideBar';
import NavSideBar from '../components/NavSideBar';
import MobileMenu from '../components/MobileMenu';
import BackToTop from '../components/BackToTop';
import BackDrop from '../components/BackDrop';
export default function Layout() {
    return (
        <>
            <BackDrop />
            <BackToTop />
            <HeaderTop />
            <HeaderBottom />
            <Nav />
            <CategorySideBar />
            <CartSideBar />
            <NavSideBar />
            <MobileMenu />
        </>
    )
}
