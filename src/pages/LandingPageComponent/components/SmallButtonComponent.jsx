
const SmallButtonComponent = ({ title, onClick }) => {
    return (
        <button className='text-acc-blue border-2 border-acc-blue rounded hover:text-blue-700 h-12 w-36' onClick={onClick}>{title}</button>
    );
};

export default SmallButtonComponent;
