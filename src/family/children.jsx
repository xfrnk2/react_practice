import React from 'react';
import Child from './child'

const Children = () => {
    let comments = ['comment1', 'comment2', 'comment3']
    return (
        <div className='children'>
            {
                comments.map((comment, index) => {
                    return <Child key={index} comment={comment} />
                })
            }
        </div>
    )
}
export default Children