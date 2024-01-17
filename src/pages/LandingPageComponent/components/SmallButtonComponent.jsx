
const SmallButtonComponent = ({ title, onClick }) => {
    return (
        <button className='text-acc-blue border-2 border-acc-blue rounded hover:text-blue-700 h-10 w-32' onClick={onClick}>{title}</button>
    );
};

export default SmallButtonComponent;
