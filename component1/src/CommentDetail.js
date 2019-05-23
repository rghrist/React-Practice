import React from 'react';
import faker from 'faker';
import { tsPropertySignature } from '@babel/types';

const CommentDetail= (props) =>{
    return(
        <div className="comment">
        <a href="/" className="avatar">
            <img alt = "avatar" src= {props.image}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date"> Today at 6:00 PM</span>
            </div>
            <div className="text">{props.says}</div>
        </div>
    </div>
    );
};
export default CommentDetail;