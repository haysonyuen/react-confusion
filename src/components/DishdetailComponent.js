import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List} from 'reactstrap';


class Dishdetail extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

   renderComments(selectedDish) {
        if (!selectedDish || !selectedDish.comments) {
            return <div></div>;
        }
       const detail = <List type="unstyled"> {selectedDish.comments.map((comment)=> {
        return (
            <div key = {comment.id} className = "col-12 m-1">
                <li> {comment.comment} </li>
                {<li> --{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </li> }
            </div>
        )})}</List>
        ; 

        return(detail);
    }

    render() {
        if (this.props.dishdish == null) {
            return (
                <div></div>
            );           
        }      

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>                        
                        <CardImg width="100%" src={this.props.dishdish.image} alt={this.props.dishdish.name}/>
                        <CardBody>
                            <CardTitle> {this.props.dishdish.name} </CardTitle>
                            <CardText> {this.props.dishdish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className= "col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dishdish)}
                </div>    
            </div>           
        );
    }
}

export default Dishdetail;