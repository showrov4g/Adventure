import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
    const location =useLocation()
    useEffect(()=>{
        const title = {
            '/': 'Home - Adventure Portal',
        }
        document.title = titles[location.pathname] || 'Adventure Portal';
    },[location])
    return null;
};

export default DynamicTitle;