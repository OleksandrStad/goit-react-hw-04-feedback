import React from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
        <div>
            {options.map(el => {
                return (
                    <Buttons key={el} onClick={() => onLeaveFeedback(el)}>
                        {el}
                    </Buttons>
                );
            })}

        </div>
    )

};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
