import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const navigate = useNavigate();
  const [blogPosts, setBlogPosts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  const [currentFilter, setCurrentFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPost, setCurrentPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    excerpt: '',
    image: '',
    content: ''
  });
  // const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loadData = async (key, path) => {
      const localData = localStorage.getItem(key);
      if (localData) {
        return JSON.parse(localData);
      }
      const response = await fetch(path);
      const data = await response.json();
      localStorage.setItem(key, JSON.stringify(data));
      return data;
    };

    loadData('blogPosts', '/data/blogPosts.json').then(setBlogPosts);
    loadData('projects', '/data/projects.json').then(setProjects);
    loadData('skills', '/data/skills.json').then(setSkills);
    loadData('experience', '/data/experience.json').then(setExperience);

    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // const login = async (password) => {
  //   const response = await fetch('/admin.json');
  //   const data = await response.json();
  //   if (password === data.password) {
  //     setIsAdmin(true);
  //     return true;
  //   }
  //   return false;
  // };

  // const logout = () => {
  //   setIsAdmin(false);
  // };

  const handleFilterClick = (category) => {
    setCurrentFilter(category);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const viewPost = (postId) => {
    const post = blogPosts.find(p => p.id === postId);
    setCurrentPost(post);
    navigate(`/blog/${postId}`);
  };

  const handleNewPostChange = (e) => {
    const { name, value } = e.target;
    setNewPost(prev => ({ ...prev, [name]: value }));
  };

  const handleContentChange = (e) => {
    setNewPost(prev => ({ ...prev, content: e.target.innerHTML }));
  };

  const handleNewPostSubmit = (e) => {
    e.preventDefault();
    const post = {
      ...newPost,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      readTime: Math.ceil(newPost.content.split(' ').length / 200)
    };
    const updatedPosts = [post, ...blogPosts];
    setBlogPosts(updatedPosts);
    // localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    navigate('/blog');
    setNewPost({
      title: '',
      category: '',
      excerpt: '',
      image: '',
      content: ''
    });
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  const filteredPosts = blogPosts
    .filter(post => currentFilter === 'all' || post.category === currentFilter)
    .filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // const updateProjects = (newProjects) => {
  //   setProjects(newProjects);
  //   localStorage.setItem('projects', JSON.stringify(newProjects));
  // }
  
  //   const updateSkills = (newSkills) => {
  //   setSkills(newSkills);
  //   localStorage.setItem('skills', JSON.stringify(newSkills));
  // }

  // const updateExperience = (newExperience) => {
  //   setExperience(newExperience);
  //   localStorage.setItem('experience', JSON.stringify(newExperience));
  // }


  const value = {
    theme,
    toggleTheme,
    blogPosts,
    projects,
    skills,
    experience,
    // updateProjects,
    // updateSkills,
    // updateExperience,
    currentFilter,
    searchTerm,
    currentPost,
    newPost,
    // isAdmin,
    // login,
    // logout,
    handleFilterClick,
    handleSearch,
    viewPost,
    handleNewPostChange,
    handleContentChange,
    handleNewPostSubmit,
    formatDate,
    filteredPosts,
    setCurrentPost
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
