import React from 'react';
import PropTypes from 'prop-types';

import * as Styles from './_burgerIngredients-style';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch (props.type) {
        case ('breadBottom'):
            ingredient = <Styles.BreadBottom />;
            break;
        case('breadTop'):
            ingredient = (
                <Styles.BreadTop>
                    <Styles.Seeds1 />
                    <Styles.Seeds2 />
                </Styles.BreadTop>
            );
            break;
        case('tofu'):
            ingredient = <Styles.Tofu />;
            break;
        case('cheese'):
            ingredient = <Styles.Cheese />;
            break;
        case('lettuce'):
            ingredient = <Styles.Lettuce />;
            break;
        case('avocado'):
            ingredient = <Styles.Avocado />;
            break;
        default:
            ingredient = null;
    }
    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;