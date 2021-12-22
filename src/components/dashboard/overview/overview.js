import styled from 'styled-components';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Alert, Container } from 'react-bootstrap';
import Storenumbers from './analytics/storenumbers';


const Overview = (props) => {

    const [storeurl, setStoreUrl] = useState("");

    const body = {
        user_id: props.user.pk
    }

    useEffect(() => {
    axios.post('http://127.0.0.1:8000/overview/get_overview_data/', body)
    .then(res => {
            setStoreUrl("http://127.0.0.1:3000/storefront/" + res.data);
    }).catch(e => {
        console.log(e);
    });

    }, []);

    return (
        <ContainOverview>
        <Container>
        <Alert variant="success" className="text-center">Your store front is available and can be viewed at <a href={storeurl}>{storeurl}</a></Alert>
        <Storenumbers />
        </Container>
        </ContainOverview>
    )

}


const mapStateToProps = state => ({
    user: state.auth.user,
});



// Connects the component to the redux store - Pass register action 
export default connect(mapStateToProps)(Overview);

const ContainOverview = styled.div`
margin-left: 255px;
`;

