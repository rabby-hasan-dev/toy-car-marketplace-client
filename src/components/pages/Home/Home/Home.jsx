import About from "../About/About";
import Banner from "../Banner/Banner";
import ExtraSection from "../ExtraSection/ExtraSection";
import GallerySection from "../GallerySection/GallerySection";
import Kids from "../Kids/Kids";
import KidsPlayTime from "../KidsPlayTime/KidsPlayTime";
import ShopCategory from "../ShopCategory/Shopcategory";
import Testimonials from "../Testimonials/Testimonials";




const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <GallerySection></GallerySection>
            <ShopCategory></ShopCategory>
            <ExtraSection></ExtraSection>
            <KidsPlayTime></KidsPlayTime>
            <Kids></Kids>
            <Testimonials></Testimonials>
            <About></About>

        </div>
    );
};

export default Home;