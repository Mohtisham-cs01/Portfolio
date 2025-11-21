import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Blog = () => {
    const {
        filteredPosts,
        currentFilter,
        handleFilterClick,
        handleSearch,
        viewPost,
        formatDate
    } = useContext(AppContext);

    return (
        <div id="blog" className="page active">
            <div className="blog-container">
                <div className="blog-header">
                    <h1 className="blog-title">Blog</h1>
                    <div className="blog-actions">
                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input type="text" id="blogSearch" placeholder="Search posts..." onChange={handleSearch} />
                        </div>
                        <Link to="/blog/new" className="btn btn-primary">
                            <i className="fas fa-plus"></i> New Post
                        </Link>
                    </div>
                </div>
                <div className="category-filter">
                    <button className={`category-btn ${currentFilter === 'all' ? 'active' : ''}`} onClick={() => handleFilterClick('all')}>All</button>
                    <button className={`category-btn ${currentFilter === 'Technology' ? 'active' : ''}`} onClick={() => handleFilterClick('Technology')}>Technology</button>
                    <button className={`category-btn ${currentFilter === 'Business' ? 'active' : ''}`} onClick={() => handleFilterClick('Business')}>Business</button>
                    <button className={`category-btn ${currentFilter === 'Design' ? 'active' : ''}`} onClick={() => handleFilterClick('Design')}>Design</button>
                    <button className={`category-btn ${currentFilter === 'Tutorial' ? 'active' : ''}`} onClick={() => handleFilterClick('Tutorial')}>Tutorial</button>
                </div>
                <div className="blog-grid" id="blogGrid">
                    {filteredPosts.map(post => (
                        <div className="blog-card" key={post.id} onClick={() => viewPost(post.id)}>
                            <img src={post.image} alt={post.title} className="blog-image" />
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span>{formatDate(post.date)}</span>
                                </div>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-excerpt">{post.excerpt}</p>
                                <a href="#" className="blog-read-more">
                                    Read More <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
