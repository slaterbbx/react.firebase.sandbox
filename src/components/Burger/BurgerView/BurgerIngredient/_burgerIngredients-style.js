import styled from 'styled-components/macro';

export const BreadTop = styled.div`
    height: 7rem;
    width: 27rem;
    background: linear-gradient(#F08E4A, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: .8rem auto;
    position: relative;
`;

export const BreadBottom = styled.div`
    height: 4rem;
    width: 27rem;
    background: linear-gradient(#c15711, #e27b36);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #c15711;
    margin: .8rem auto;
`;

// Seeds grouping
const Seeds1_2 =`
    width: 10%;
    height: 15%;
    background-color: #fff;
    position: absolute;
    border-radius: 40%;
`;

export const Seeds1 = styled.div`
    ${Seeds1_2};
    left: 30%;
    top: 50%;
    transform: rotate(-20deg);
    box-shadow: inset -2px -3px #c9c9c9;

    &:after,
    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #fff;
        transform: rotate(60deg);
        border-radius: 40%;
    }

    &:after {
        left: -170%;
        top: -260%;
        box-shadow: inset -1px 2px #c9c9c9;
    }

    &:before {
        left: 180%;
        top: -50%;
        box-shadow: inset -1px -3px #c9c9c9;
    }
`;

export const Seeds2 = styled.div`
    ${Seeds1_2};
    left: 64%;
    top: 50%;
    transform: rotate(10deg);
    box-shadow: inset -3px 0 #c9c9c9;

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: #fff;
        left: 150%;
        top: -130%;
        border-radius: 40%;
        transform: rotate(90deg);
        box-shadow: inset 1px 3px #c9c9c9;
        
    }
`;

export const Tofu = styled.div`
    height: 2rem;
    width: 27rem;
    background: linear-gradient(#7f3608, #702e05);
    margin: .8rem auto;
    border-radius: 15px;
`;

export const Cheese = styled.div`
    height: 1rem;
    width: 27rem;
    margin: .8rem auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
`;

export const Lettuce = styled.div`
    height: 2rem;
    width: 27rem;
    margin: .8rem auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
`;

export const Avocado = styled.div`
    height: 1rem;
    width: 27rem;
    border-radius: 1rem 0 1rem 0;
    background: linear-gradient(to bottom right, #2bb756, #235f10);
    margin: .8rem auto;
`;