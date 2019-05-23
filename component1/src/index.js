import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
const App=()=>{
    return (<div className="ui container comments">
            <ApprovalCard> 
            <h4>Warning!</h4>
            Are you sure you want to do this
            </ApprovalCard>
            
            <ApprovalCard> 
            <CommentDetail author= "samuel" says="ooga" image={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard> 
            <CommentDetail author="Time" says="booga"image={faker.image.animals()}/>
            </ApprovalCard> 
            <ApprovalCard> 
            <CommentDetail author ='Tim Tim' says='321'image={faker.image.avatar()}/>
            </ApprovalCard> 
    </div>);
};
ReactDOM.render(<App/>,document.querySelector('#root'))