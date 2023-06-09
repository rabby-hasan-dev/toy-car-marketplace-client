
import { Link, useRouteError } from 'react-router-dom';
import eroorLogo from '../../../../../src/assets/error.png'

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);


    return (
        <div className='flex justify-center   items-center mt-20'>

            <div id="error-page" className='text-center my-auto'>

                <p className='text-4xl' >Sorry, an unexpected error has occurred.</p>
                <p className='text-4xl'>
                    <i>{error.statusText || error.message}</i>
                </p>
                <img className='mx-auto' src={eroorLogo} alt="error" />
               <Link to='/'> <button className='btn bg-red-600 text-white'>Go Back</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;