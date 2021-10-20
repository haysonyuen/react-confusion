import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, List, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import CommentForm from './CommentFormComponent';

    function RenderDish({dish}) {
        return(
        <Card>                        
        <CardImg width="100%" src={dish.image} alt={dish.name}/>
        <CardBody>
            <CardTitle> {dish.name} </CardTitle>
            <CardText> {dish.description}</CardText>
        </CardBody>
        </Card>
        )
    }

   function RenderComments({comments}) {

       console.log('selectedDish comments are',comments)
        if (!comments) {
            return <div></div>;
        }
       const detail = <List type="unstyled"> {comments.map((comment)=> {
        return (
            <div key = {comment.id} className = "col-12 m-1">
                <li> {comment.comment} </li>
                {<li> --{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </li> }
            </div>
        )})}</List> 

        return(
            <div>
                {detail}
                <CommentForm/>
            </div>
            
            );
    }

  
    const DishDetail = (props) => {
        if (props.selectedDish == null) {
            return (
                <div></div>
            );           
        }      
        return (
            <div className="row">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.selectedDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedDish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish} />
                    </div>
                    <div className= "col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments = {props.comments} />
                    </div>    
            </div>           
        );
    }


export default DishDetail;

