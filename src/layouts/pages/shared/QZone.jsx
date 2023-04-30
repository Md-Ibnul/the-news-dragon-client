import React from 'react';
import qzone1 from '../../../assets/qZone1.png';
import qzone2 from '../../../assets/qZone2.png';
import qzone3 from '../../../assets/qZone3.png';

const QZone = () => {
    return (
        <div className='bg-secondary text-center my-3'>
            <h4>Q-Zone</h4>
            <div className='my-3 pb-3'>
                <img src={qzone1} alt="Image" />
                <img src={qzone2} alt="Image" />
                <img src={qzone3} alt="Image" />
            </div>
        </div>
    );
};

export default QZone;