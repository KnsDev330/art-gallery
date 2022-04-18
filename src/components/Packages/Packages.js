import React from 'react';
import usePackages from '../../Hooks/usePackages/usePackages';
import Package from '../Package/Package';

const Packages = () => {
    const [packages] = usePackages();

    return (
        <div className='mt-5'>
            <h2 className='mb-4 text-center'>Our Packages</h2>
            <div className="packages d-flex mx-auto  p-3 flex-wrap justify-content-center gap-4">
                {packages.map(pack => <Package key={pack.id} pack={pack} />)}
            </div>
        </div>
    );
};

export default Packages;