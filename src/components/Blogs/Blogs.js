import React from 'react';
import useBlogs from '../../Hooks/useBlogs/useBlogs';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs] = useBlogs();
    return (
        <div className='mx-auto site-mw my-5'>
            <div className="blogs d-flex gap-3 justify-content-center flex-wrap">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;