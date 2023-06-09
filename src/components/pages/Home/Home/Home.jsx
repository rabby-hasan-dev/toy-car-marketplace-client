import About from "../About/About";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import GallerySection from "../GallerySection/GallerySection";
import ShopCategory from "../ShopCategory/Shopcategory";




const Home = () => {
    return (
        <>
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopCategory></ShopCategory>
            <ExtraSection></ExtraSection>
            <About></About>

        </>
    );
};

export default Home;