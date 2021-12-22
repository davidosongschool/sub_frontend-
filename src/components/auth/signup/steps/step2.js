import { Form } from "react-bootstrap";
import styled from 'styled-components';
import Toggle from 'react-toggle'


const Step2 = (props) => {

return (
    <div>

    <h1>Your Business</h1>
    <ContainForm>
    <Form>
    <Form.Group>
    <Form.Control value={props.businessName} size="lg" type="text" onChange={e => props.setbusinessName(e.target.value)} placeholder="Your Business Name" required className="mt-3 mb-3"/>
    <Form.Control value={props.address1} size="lg" onChange={e => props.setaddress1(e.target.value)} type="text" placeholder="Address 1" required className="mt-3 mb-3"/>
    <Form.Control value={props.address2} onChange={e => props.setaddress2(e.target.value)} size="lg" type="text" placeholder="Address 2" required className="mt-3 mb-3"/>
    <Form.Control value={props.town} onChange={e => props.settown(e.target.value)} size="lg" type="text" placeholder="Town" required className="mt-3 mb-3"/>
    <Form.Control value={props.county} size="lg" onChange={e => props.setcounty(e.target.value)} as="select">
    <option value="county" disabled>County</option>
    <option value="carlow">Carlow</option>
    <option value="cavan">Cavan</option>
    <option value="clare">Clare</option>
    <option value="cork">Cork</option>
    <option value="donegal">Donegal</option>
    <option value="dublin">Dublin</option>
    <option value="galway">Galway</option>
    <option value="kerry">Kerry</option>
    <option value="kildare">Kildare</option>
    <option value="kilkenny">Kilkenny</option>
    <option value="laois">Laois</option>
    <option value="leitrim">Leitrim</option>
    <option value="limerick">Limerick</option>
    <option value="longford">Longford</option>
    <option value="louth">Louth</option>
    <option value="mayo">Mayo</option>
    <option value="meath">Meath</option>
    <option value="monaghan">Monaghan</option>
    <option value="offaly">Offaly</option>
    <option value="roscommon">Roscommon</option>
    <option value="sligo">Sligo</option>
    <option value="tipperary">Tipperary</option>
    <option value="waterford">Waterford</option>
    <option value="westmeath">Westmeath</option>
    <option value="wexford">Wexford</option>
    <option value="wicklow">Wicklow</option>
    </Form.Control>
    <Form.Label>
    <span className='label-text text-bold pt-4 pb-4'>I have read & agree to the Terms</span><Toggle className="ml-3"/>
    </Form.Label>
    </Form.Group>
    </Form>
    <Button onClick={props.registerBusiness}>Create Account</Button>
    {props.signupStep > 1 ?
    <Button onClick={props.backStep}>Back</Button>
    :
    <Button onClick={props.backStep} disabled>Back</Button>
    }
    
    </ContainForm>
    </div>
)
}

export default Step2;

const ContainForm = styled.div`
    text-align: left;
    width: 80%;
    margin: 0 auto;
    margin-top: 30px;
`;

const Button = styled.button `
height: 50px;
width: 150px;
background-color: blue;
border: none;
border-radius: 5px;
color: #fff;
margin: 10px;
margin-left: 0px;

:disabled {
    opacity: 0.2;
}

`;
