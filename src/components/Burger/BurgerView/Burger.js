import React from 'react';

import * as Styles from './_burger-style';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import Icon from '../../UI/Icons/Icons';

const burger = (props) => {
    //https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/questions/5563292
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
        })
    }) // https://medium.freecodecamp.org/reduce-f47a7da511a9 // cool tricks ( pipeline )
    .reduce((flatArr, arrayOfElements) => {
            return flatArr.concat(arrayOfElements);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <span className="noIngredients">
            <Icon name="plus" styles={Styles.noIngIcon}/>
            please add some ingredients
        </span>
    }

    return (
            <Styles.Wrapper>
                <div className="sudoTable">
                    <div className="sudoTableCell">
                        <BurgerIngredient type="breadTop" />
                            {transformedIngredients}
                        <BurgerIngredient type="breadBottom" />
                    </div>
                </div>
            </Styles.Wrapper>
    );
};

export default burger;