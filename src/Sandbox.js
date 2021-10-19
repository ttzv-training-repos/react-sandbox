import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

class Sandbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        let formData = new FormData(form);
        console.log(Object.fromEntries(formData.entries()));
        fetch('https://script.google.com/macros/s/AKfycbyZo3pAoJ8ZmFzDWAW7ZYgXKCdzymuk3N18KrJQs77L-kRyblNlTqnH/exec&callback=?', {
            method: 'POST',
            body: formData,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(console.log);
    }

    render(){
        return(
        <Container>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="input">
                    <Form.Label>
                        File
                    </Form.Label>
                    <Form.Control type="file" name="file">

                    </Form.Control>
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
        )
    }
}
export default Sandbox