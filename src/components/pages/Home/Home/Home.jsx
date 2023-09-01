import About from "../About/About";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import GallerySection from "../GallerySection/GallerySection";
import ShopCategory from "../ShopCategory/Shopcategory";




const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopCategory></ShopCategory>
            <ExtraSection></ExtraSection>
            <About></About>

        </div>
    );
};

export default Home;