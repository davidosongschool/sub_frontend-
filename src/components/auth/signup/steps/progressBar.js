import { useState } from 'react';
import styled from 'styled-components';
// Font Awesome 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ProgressBar= (props) => {

return (
<ContainStepIcons signupStep={props.signupStep}>
<li><FontAwesomeIcon icon={faMinus} size="3x" className="icon-style-1"/></li>
<li><FontAwesomeIcon icon={faMinus} size="3x" className="icon-style-2"/></li>
</ContainStepIcons>
)};



export default ProgressBar;

const ContainStepIcons = styled.ul`
width: 100%;
margin: auto;
margin: 0;
padding: 0;

li{
   list-style: none;
   display: inline-block;
   padding: 10px;
}



.icon-style-2 {
    color: ${props => props.signupStep > 1 ? "#023088" : "white"};
}

.icon-style-1 {
    color: #023088;
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.24));
}

.icon-style-2 {
    filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.24));


}

`;

