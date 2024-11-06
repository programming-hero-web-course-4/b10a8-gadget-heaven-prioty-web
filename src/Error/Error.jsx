import { NavLink, useRouteError } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Error = () => {
    const error =useRouteError();
    return (
        <div className='flex flex-col items-center pt-20 '>
            <Helmet><title>Error</title></Helmet>
            <h1>Oopsss!!!!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{error.error.message } </p>
            <NavLink className='btn hover:bg-purple-900' to='/'>GO Home</NavLink>
            
        </div>
    );
};

export default Error;