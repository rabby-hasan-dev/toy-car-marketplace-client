
import sportCar from '../../../../../src/assets/PhotoGallery/SportsCar/sportsCar (1).jpg'
import Truck from '../../../../../src/assets/PhotoGallery/Truck/Truck (1).jpg'
import Police from '../../../../../src/assets/PhotoGallery/PoliceCar/police (1).jpeg'

const GallerySection = () => {
    return (
        <div className=''>
            <h2 className='text-4xl text-center bg-slate-200 p-4 rounded-lg'>Photo Gallery</h2>
            <div className='grid grid-cols-3 gap-4 p-4 px-10'>
                <figure>
                    <img src={sportCar} alt="img" />
                </figure>
                <figure>
                    <img src={Truck} alt="img" />
                </figure>
                <figure>
                    <img src={Police} alt="img" />
                </figure>
            </div>
        </div>
    );
};

export default GallerySection;