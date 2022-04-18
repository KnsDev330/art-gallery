import { faCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {
    return (
        <div className='blog my-lg-5  p-3'>
            <h4 className='d-flex'>
                <FontAwesomeIcon icon={faQuestionCircle} className='me-2' />
                {blog.question}
            </h4>
            {
                blog.ans.map(
                    a => <div className='d-flex' style={{ color: '#505050' }}>
                        <FontAwesomeIcon icon={faCircle} style={{ fontSize: '4px', margin: '9px 10px 0 0', display: 'inline' }} />
                        <p className='mb-2' dangerouslySetInnerHTML={{ __html: a }}></p>
                    </div>
                )
            }
        </div>
    );
};

export default Blog;