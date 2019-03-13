import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import svgSprite from '../../../assets/images/sprite.svg';
// eslint-disable-next-line
import * as styles from './_svgUse-styles';

class SvgUse extends PureComponent {


    // componentDidMount() {

    //     if (document.querySelector('.prefetch-svgs')){
    //         document.querySelector('.prefetch-svgs').parentNode.removeChild(document.querySelector('.prefetch-svgs'));
    //         console.log(document.body.children);
    //         console.log('DELETED THIS TIME');
    //         return;
    //     }

    //     const sprite = svgSprite;
    //     const prefetchLink = document.createElement("link");
      
    //     prefetchLink.href = sprite;
    //     prefetchLink.rel = "prefetch";
    //     prefetchLink.className = "prefetch-svgs";
    //     prefetchLink.as = "svg";
    //     document.body.appendChild(prefetchLink);

    //     console.log(document.body.children);
    //     console.log('CREATED THIS TIME');
    //   }
    render() {

        let iconStyles =`
                fill: ${this.props.fill};
                width: ${this.props.size};
                height: ${this.props.size};
        `;
        
        const Svg = styled.svg`
            ${iconStyles}
            ${styles[this.props.iconStyle]}
            ${this.props.extStyle}
        `;

        const svgSpriteLink = `${svgSprite}#icon-${this.props.icon}`;

        return (
            <Svg>
                <use xlinkHref={svgSpriteLink}></use>
            </Svg>
        );
    }
    
};

SvgUse.propTypes = {
    iconStyle: PropTypes.string,
    fill: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
};

export default SvgUse;