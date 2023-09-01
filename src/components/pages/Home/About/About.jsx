
import aboutLogo from '../../../../../src/assets/carosel/About.jpg'
const About = () => {
    return (

        <div className='grid lg:grid-cols-2 gap-4 p-10 bg-slate-100 my-8'>

            <div className='p-5' >
                <h2 className='text-4xl text-center font-semi-bold'>About Us</h2>
                <p className='my-8'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, sit excepturi praesentium alias nam eos accusantium ab corporis voluptate ad doloremque optio sunt totam earum impedit delectus neque blanditiis fuga at fugiat saepe. Officiis fugit similique, nesciunt quae error ipsa.</p>
                <button className='btn  btn-info ' > More About </button>
            </div>

            <div>
                <img className="rounded-lg w-full" src={aboutLogo} alt="" />
            </div>

        </div>

    );
};

export default About;