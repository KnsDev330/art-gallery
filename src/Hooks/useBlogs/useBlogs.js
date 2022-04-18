import { useEffect, useState } from "react";

const useBlogs = (def = []) => {
    const [blogs, setBlogs] = useState(def);
    useEffect(() => {
        fetch('/data/blogs.json')
            .then(res => res.json())
            .then(r => setBlogs(r));
    }, []);
    return [blogs, setBlogs];
}

export default useBlogs;