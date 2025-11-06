import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import useApps from '../../Hooks/useApps';

const AppDetails = () => {
         const {Apps} = useApps();
         
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <h1>App details</h1>
            </div>
        </div>
    );
};

export default AppDetails;