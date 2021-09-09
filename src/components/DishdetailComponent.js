import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        
    }
    renderDish(dish){

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
    renderComments(comments){
        let allComments = comments.map((comment) => {
            return (
                <li key={comment.id} >
                    {comment.comment}
                    <br /><br />
                    -- {comment.author}, 
                    {new Intl.DateTimeFormat('en-GB', { 
                        month: 'short', 
                        day: '2-digit',
                        year: 'numeric', 
                    }).format(new Date(comment.date))}
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

    render(){
        if (this.props.selected) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selected)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selected.comments)}
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
}

export default DishDetail;
