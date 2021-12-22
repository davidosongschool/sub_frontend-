import styled from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const Loading = () => {
return (
    <LoadingDiv>
        <Icon><FaSpinner icon="spinner" className="spinner" /></Icon>
    </LoadingDiv>
)
}


export default Loading;

const LoadingDiv = styled.div`
position: relative;
left: 0;
top: 0;
background-color: #fff;
width: 100vw;
height: 100vh;
z-index: 19999999999 !important;
`;

const Icon = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);


.spinner {
    animation: spin infinite 2s linear;
  }

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}



`;