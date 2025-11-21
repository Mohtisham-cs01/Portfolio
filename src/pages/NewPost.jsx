import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const NewPost = () => {
    const { newPost, handleNewPostChange, handleContentChange, handleNewPostSubmit } = useContext(AppContext);
    const navigate = useNavigate();

    const onCancel = () => {
        navigate('/blog');
    }

    return (
        <div id="editor" className="page active">
            <div className="editor-container">
                <div className="editor-header">
                    <h1 className="editor-title">Create New Post</h1>
                </div>
                <form className="editor-form" id="editorForm" onSubmit={handleNewPostSubmit}>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-input" name="title" placeholder="Enter post title..." required value={newPost.title} onChange={handleNewPostChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <select className="form-select" name="category" required value={newPost.category} onChange={handleNewPostChange}>
                            <option value="">Select category...</option>
                            <option value="Technology">Technology</option>
                            <option value="Business">Business</option>
                            <option value="Design">Design</option>
                            <option value="Tutorial">Tutorial</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Excerpt</label>
                        <textarea className="form-textarea" name="excerpt" placeholder="Brief description of your post..." required value={newPost.excerpt} onChange={handleNewPostChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Image URL</label>
                        <input type="url" className="form-input" name="image" placeholder="https://example.com/image.jpg" value={newPost.image} onChange={handleNewPostChange} />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Content</label>
                        <div className="editor-toolbar">
                            <button type="button" className="editor-btn" title="Bold">
                                <i className="fas fa-bold"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Italic">
                                <i className="fas fa-italic"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Underline">
                                <i className="fas fa-underline"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Bullet List">
                                <i className="fas fa-list-ul"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Numbered List">
                                <i className="fas fa-list-ol"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Heading">
                                <i className="fas fa-heading"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Link">
                                <i className="fas fa-link"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Code">
                                <i className="fas fa-code"></i>
                            </button>
                            <button type="button" className="editor-btn" title="Quote">
                                <i className="fas fa-quote-left"></i>
                            </button>
                        </div>
                        <div className="editor-content" contentEditable="true" placeholder="Start writing your post..." onInput={handleContentChange} dangerouslySetInnerHTML={{ __html: newPost.content }}></div>
                    </div>
                    <div className="editor-actions">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                        <button type="submit" className="btn btn-primary">Publish Post</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewPost;
