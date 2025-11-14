import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from '../components/Loading/Loading';
import MyPropertyCard from './MyPropertyCard';

const MyProperties = () => {
    const { user } = useContext(AuthContext);
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;
        setLoading(true);
        fetch(`https://home-nest-server-green.vercel.app/all-properties?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setProperties(data);
                } else {
                    setProperties([]);
                }
                setLoading(false);
            })
    }, [user?.email])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='pt-10 md:pt-20 px-5 md:px-20 mt-10'>
            <title>HomeNest - My Properties</title>
            <h3 className='text-center text-2xl md:text-4xl font-bold mb-10'>My <span className='text-transparent bg-clip-text bg-linear-to-r from-[#2B32B2] to-[#1488CC]'>Properties</span></h3>
            <div>
                {
                    Array.isArray(properties) && properties.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-3 mx-auto mt-5 gap-5 md:gap-10 mb-15'>
                        {
                            properties.map(property => <MyPropertyCard key={property._id} property={property} properties={properties} setProperties={setProperties}></MyPropertyCard>)
                        }
                    </div> : <h3 className='text-4xl font-bold text-center p-20'>Seems like you didn't add any properties yet!</h3>
                }
            </div>
        </div>
    );
};

export default MyProperties;