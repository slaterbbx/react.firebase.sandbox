import React from 'react';
import * as Styles from './_menuButton-style';

const navigationButton = (props) => (
    <Styles.NavButton active={props.menuActive} inactive={!props.menuActive}>
        <div className="button" onClick={props.menuClick.bind(null, true)}>
            <span className="icon-x"></span>
            <span className="icon-x--lines"></span>
        </div>
    </Styles.NavButton>
)

export default navigationButton;
