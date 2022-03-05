import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
// import { Button } from './Styles';
import styled from 'styled-components';



export const Content = styled.div`
overflowY: scroll;
height: 2500px;
`;

export const Button = styled.div`
position: fixed;
left: 93%;
bottom: 50px;
height: 20px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: lightpink;
@media screen and (max-width: 900px) {
    margin-left: -20px;
}
@media screen and (max-width: 500px) {
    left: 80%;
    margin-left: 0;
font-size: 2.5rem;

}

`;



const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            <FaArrowCircleUp onClick={scrollToTop}
                style={{ display: visible ? 'inline' : 'none' }} />
        </Button>
    );
}

export default ScrollButton;
