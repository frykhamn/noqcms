import PropTypes from 'prop-types';

const SmallButtonComponent = ({ title, onClick }) => {
  return (
    <button
      className="text-acc-blue border-2 border-acc-blue rounded hover:text-blue-700 h-12 w-36"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

SmallButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SmallButtonComponent;
