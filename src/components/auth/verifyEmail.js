import { Button } from "react-bootstrap";


const VerifyEmail = (props) => {
    return (
        <div>
        <h2 className="text-center">Looks like you need to verify your email address! Please do this before accessing your account!</h2>
        <Button onClick={() => props.recheckEmail(props.email)}>Check Again</Button>
        </div>
    )
}

export default VerifyEmail;