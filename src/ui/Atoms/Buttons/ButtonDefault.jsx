import React from 'react'
import PropTypes from 'prop-types';

function ButtonDefault(props) {
    const { variant = 'primary', children } = props
    const backgroundColor = variant == 'primary' ? 'bg-blue-500 text-white' : variant == 'secondary' ? 'bg-slate-400' : variant == 'success' ? 'bg-green-500 text-white' : 'bg-rose-500 text-white'
    return (
        <button className={`${backgroundColor} px-2 py-1 rounded`}>
            Button
        </button>
    )
}
ButtonDefault.propTypes = {
    /**
     * How large should the button type?
     */
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),
};

ButtonDefault.defaultProps = {
    variant: 'primary',
};


export default ButtonDefault