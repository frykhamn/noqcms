import React from 'react';

const SmallButtonComponent = ({ title, onClick }) => {
    return (
        <button className='text-acc-blue border hover:text-blue-700 mt-4 h-12 w-40' onClick={onClick}>{title}</button>
    );
};

export default SmallButtonComponent;
