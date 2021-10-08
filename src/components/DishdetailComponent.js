import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, List} from 'reactstrap';


class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

   renderComments(selectedDish) {
        if (!selectedDish || !selectedDish.comments) {
            return <div></div>;
        }
       const detail = selectedDish.comments.map((comment)=> {
        return (
            <div key = {comment.id}>
                <List type="unstyled">
                <li> {comment.comment} </li>
                <li> --{comment.author}, {comment.date} </li>
                </List>
                
            </div>
        )}); 
        return(detail);
    }

    render() {
        if (this.props.selectedDish == null) {
            return (
                <div></div>
            );           
        }      
         
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>                        
                        <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                        <CardBody>
                            <CardTitle> {this.props.selectedDish.name} </CardTitle>
                            <CardText> {this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.selectedDish)}
                </div>    
            </div>           
        );
    }
}

export default Dishdetail;