import React from 'react'
import PropTypes from 'prop-types';

function ButtonDefault(props) {
    const { variant = 'primary', size = 'small', children = 'Button' } = props
    const backgroundColor = variant === 'primary' ? 'bg-blue-500 text-white' : variant === 'secondary' ? 'bg-slate-400' : variant === 'success' ? 'bg-green-500 text-white' : 'bg-rose-500 text-white'
    const buttonSize = size === 'small' ? 'px-2 py-1' : size === 'medium' ? 'px-4 py-2' : size === 'large' ? 'px-8 py-2.5' : 'px-2 py-1'
    return (
        <button className={`${backgroundColor} ${buttonSize}  rounded`}>
            {children}
        </button>
    )
}
ButtonDefault.propTypes = {
    /**
     * How large should the button variant?
     */
    variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger']),

    /**
     * How large should the button be?
    */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ButtonDefault.defaultProps = {
    variant: 'primary',
};


export default ButtonDefault