import React, { useEffect, useState } from 'react';
import Service from './Service';
import Spinner from '../../Components/Hooks/SpinnerTwo';
const Services = () => {
    const [services, setServices] = useState([]) || '';

    useEffect(() => {
        fetch('https://arcane-sierra-37156.herokuapp.com/allServices')
            .then(res => res?.json())
            .then(data => setServices(data))
    }, [setServices])

    return (
        <div>

            <div className='container'>

                <h1 className=" text-center text-yellow-700 py-3 text-decoration-underline  fw-bold">Services</h1>
                <div>
                    <div className=' text-center'>
                        <h5 className='text-pink-600'> Service Found:{services.length}</h5>
                        <div className='d-flex justify-center'>
                            <div>
                                {services.length === 0 && <Spinner />}
                                {services.length === 0 && <p className='text-yellow-500'>Loading...</p>}
                            </div>
                        </div>
                    </div>
                    <div className='row g-3'>

                        {
                            services.map(service => <Service key={service?._id} service={service}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;