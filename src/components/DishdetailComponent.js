import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}){

    return (      
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>      
    );
}
function RenderComments({comments}){
    let allComments = comments.map((comment) => {
        return (
            <li key={comment.id} >
                {comment.comment}
                <br /><br />
                -- {comment.author}, 
                {new Intl.DateTimeFormat('en-GB', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: '2-digit',    
                }).format(new Date(Date.parse(comment.date)))}
                <br /><br />
            </li>
        );
    });
    return (
        <div>
            <h4>Comments</h4>
            <ul className="list-unstyled">
                {allComments}
            </ul>
        </div>
    );
}

const DishDetail = (props) => {
    if (props.selected) {
        return (
        <div>   
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.selected} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.selected.comments}/>
                </div>
            </div>
        </div> 
        );
    }
    else {
        return (
            <div></div>
        );
    }
}
    
        
    


export default DishDetail;
