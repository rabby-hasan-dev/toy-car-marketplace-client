import banner from '../../../../assets/carosel/galary (2).jpg'

const ExtraSection = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-4 bg-slate-200 '>
                <div>
                    <img  className='rounded-lg' src={banner} alt="" />
                </div>
                <div className='text-center  '>
                    <h2 className='text-4xl mt-12'>Best Experience with our Toy Market selling</h2>
                    <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente quas, provident nobis omnis qui nisi tempore iure, tempora vitae a quasi temporibus nesciunt repudiandae ad aperiam? Delectus modi natus fugit?</p>
                </div>

            </div>

    );
};

export default ExtraSection;