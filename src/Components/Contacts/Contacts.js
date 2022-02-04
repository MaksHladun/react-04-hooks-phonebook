import PropTypes from 'prop-types';

const Contakts = ({id, name, number,deleteClick}) => {

    return(
          <li> <p>{name}: {number}</p>
          <button className='btn' type="button" onClick={() => deleteClick(id)}>
        Delete
      </button></li>
    )
    }
    Contakts.propTypes = {
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      };

export default Contakts