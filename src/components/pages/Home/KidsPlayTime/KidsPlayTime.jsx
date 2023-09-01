
import { FaCaretRight } from 'react-icons/fa';
import playKids from '../../../../assets/Kids  Pic/best-time.jpg'
const KidsPlayTime = () => {

    return (
        <div className='lg:flex justify-evenly my-16'>
            <div>
                <img src={playKids} alt="Play kids" />
            </div>
            <div className=''>
                <h2 className='uppercase text-4xl font-bold my-4'>Mahe the most of play time</h2>
                <p className='my-4'>We partner with best retailers to bring you, safe educational away</p>
                <ul className='text-2xl'>
                    <li className='flex items-center'> <FaCaretRight></FaCaretRight>Taheout of the Guessworh</li>
                    <li className='flex items-center'> <FaCaretRight></FaCaretRight>Right toys right time </li>
                    <li className='flex items-center'> <FaCaretRight></FaCaretRight>Child safe and sustainable</li>
                    <li className='flex items-center'> <FaCaretRight></FaCaretRight>Parenting made easier</li>

                </ul>
            </div>
        </div>
    );
};

export default KidsPlayTime;