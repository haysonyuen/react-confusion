import React, {Component } from 'react';
import {Button, Modal, ModalHeader, ModalBody, FormGroup, Form, Input, Label, Col, Row } from 'reactstrap'; 
import {Control, Errors, LocalForm } from 'react-redux-form';


const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);



class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFormModalOpen: false
        };
        this.toggleFormModal = this.toggleFormModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleFormModal() {
        this.setState({
            isFormModalOpen: !this.state.isFormModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleFormModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }


    render() {
        return(
            <React.Fragment>
                <Button outline onClick = {this.toggleFormModal}> 
                    <span className="fa fa-pencil"></span>Submit Comment
                </Button>
                <Modal isOpen={this.state.isFormModalOpen} toggle={this.toggleFormModal}>
                    <ModalHeader>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={ (values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2} >Rating</Label>
                                <Col md= {12}>   
                                    <Control.select model=".rating" id="rating" name="rating"
                                       className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                       </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group"> 
                                <Label htmlFor="author" md={3}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author" 
                                        className="form-control"
                                        validators = {{ 
                                            minLength: minLength(3), maxLength:maxLength(15)
                                         }}/>
                                    <Errors 
                                    className="text-danger"
                                    model=".author"
                                    show = "touched"
                                    messages = {{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Miust be 15 characters or less'
                                    }} >
                                    </Errors>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment" 
                                        rows = "6"
                                        className="form-control"/>
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}


export default CommentForm;