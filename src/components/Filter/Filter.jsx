import './index.css';
import shortid from "shortid"
import PropTypes from 'prop-types';


const filterId = shortid.generate()
 
const Filter = ({onChange , filter}) => {
    return <label htmlFor={filterId} className='filter_label'>
        Find contact by name
        <input id={filterId} type="text" value={filter} onChange={onChange} className='filter_input' />
    </label>
};

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
};
export default Filter;