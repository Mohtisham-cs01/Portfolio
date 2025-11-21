import React, { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const BlogPost = () => {
    const { blogPosts, currentPost, setCurrentPost, formatDate } = useContext(AppContext);
    const { postId } = useParams();

    useEffect(() => {
        const post = blogPosts.find(p => p.id === parseInt(postId));
        setCurrentPost(post);
    }, [blogPosts, postId, setCurrentPost]);

    if (!currentPost) {
        return <div>Loading...</div>;
    }

    return (
        <div className="page active">
            <div className="blog-post">
                <Link to="/blog" className="btn btn-secondary" style={{ marginBottom: "2rem" }}>
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </Link>
                <div className="blog-post-header">
                    <h1 className="blog-post-title">{currentPost.title}</h1>
                    <div className="blog-post-meta">
                        <span><i className="fas fa-calendar"></i> {formatDate(currentPost.date)}</span>
                        <span><i className="fas fa-clock"></i> {currentPost.readTime} min read</span>
                        <span className="blog-category">{currentPost.category}</span>
                    </div>
                </div>
                <img className="blog-post-image" src={currentPost.image} alt={currentPost.title} />
                <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: currentPost.content }}></div>
            </div>
        </div>
    );
};

export default BlogPost;
