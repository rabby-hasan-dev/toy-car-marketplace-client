
import kid1 from '../../../../assets/Kids  Pic/toyWithKid.jpg'
import kid2 from '../../../../assets/Kids  Pic/kids1.jpg'
const Kids = () => {
    return (
        <div className='lg:flex lg:p-16 my-10 mx-auto'>
            <figure className='lg:w-1/2'>
                <img src={kid1} alt="kids" />
            </figure>
            <div className=' lg:ml-8 lg:w-1/2'>
                <h4 className='text-xl'>CREATIVE APPROACH</h4>
                <h2 className='text-5xl my-4 font-bold'>We help you take care of the kids</h2>
                <p className='my-4'>
                    Not only do we sell toys, but we also try to make sure that your children are safe playing, learning, and having fun!</p>

                <figure>
                    <img className='rounded-lg' src={kid2} alt="kids" />
                </figure>
            </div>

        </div>
    );
};

export default Kids;