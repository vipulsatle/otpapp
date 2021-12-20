import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from './firebase';

export default class Phone extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            contact: ""
        }
        this.state = this.initialState
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }
    setUpRecaptcha = () => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log("recaptcha solved!!")
               this.onSignInSubmit();
            }
        }, auth);
    }

    onSignInSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.setUpRecaptcha()
        const phoneNumber = this.state.contact
        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
                const code = window.prompt("Enter OTP!!")
                confirmationResult.confirm(code).then((result) => {
                    // User signed in successfully.
                    const user = result.user;
                    // ...
                    console.log(user)
                alert(' otp is verify')
                }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                    // ...
                    alert('please inter valid otp')
                });
            }).catch((error) => {
                // Error; SMS not sent
                // ...
             
            });
    }


    render() {
        return (
            <div>
                <Form onSubmit={this.onSignInSubmit}>
                    <div id="recaptcha-container"></div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="contact"
                            name="contact"
                            onChange={this.handleChange}
                            placeholder="Enter Phone" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}