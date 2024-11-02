import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/telegram.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        {/* <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p> */}
      </header>
      <div className="contacts">
        <div>
        <a href="kimoungpoly@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="kimoungpoly@gmail.com">kimoungpoly@gmail.com</a>
        </div>
        <div>
        <a href="https://t.me/poly168" target="_blank"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="https://t.me/poly168" target="_blank">(+885) 719558945</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}