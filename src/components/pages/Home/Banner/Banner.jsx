
import banner1 from '../../../../../src/assets/carosel/carosel (1).jpg'
import banner2 from '../../../../../src/assets/carosel/carosel (2).jpg'
import banner3 from '../../../../../src/assets/carosel/carosel (3).jpg'
import banner4 from '../../../../../src/assets/carosel/carosel (4).jpg'
const Banner = () => {
    return (
        <div className="carousel  w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full rounded-xl " />
                <div className="absolute h-full flex rounded-xl items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'  >Welcome to My Toy Car Market</h2>
                        <p>There are many variations of toy car of  available, please check Discover my Website and got service .. </p>
                        <div>
                            <button className="btn btn-outline  btn-info mr-5">Discover More</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full rounded-xl" />
                <div className="absolute h-full flex rounded-xl items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'  >Welcome to My Toy Car Market</h2>
                        <p>There are many variations of toy car of  available, please check Discover my Website and got service .. </p>
                        <div>
                            <button className="btn btn-outline btn-info mr-5">Discover More</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5 ">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full rounded-xl" />
                <div className="absolute h-full flex rounded-xl items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'  >Welcome to My Toy Car Market</h2>
                        <p>There are many variations of toy car of  available, please check Discover my Website and got service .. </p>
                        <div>
                            <button className="btn btn-outline btn-info mr-5">Discover More</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5 ">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full rounded-xl" />
                <div className="absolute h-full flex rounded-xl items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
                    <div className='text-white space-y-7 w-1/2 pl-12'>
                        <h2 className='text-6xl font-bold'  >Welcome to My Toy Car Market</h2>
                        <p>There are many variations of toy car of  available, please check Discover my Website and got service .. </p>
                        <div>
                            <button className="btn btn-outline btn-info mr-5">Discover More</button>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;