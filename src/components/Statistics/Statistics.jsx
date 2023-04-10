import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positive }) => {
    return (
        < div >
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{total}</span></p>
            <p>Positive feedback: <span>{positive}%</span></p>
        </div >
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positive: PropTypes.number.isRequired,
};