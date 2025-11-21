// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import { useNavigate } from 'react-router-dom';

// const AdminDashboard = () => {
//     const { logout, projects, skills, experience, updateProjects, updateSkills, updateExperience } = useContext(AppContext);
//     const navigate = useNavigate();

//     const [project, setProject] = useState({ title: '', description: '', image: '', tags: '' });
//     const [skill, setSkill] = useState({ icon: '', title: '', description: '' });
//     const [exp, setExp] = useState({ date: '', title: '', company: '', description: '' });

//     const handleLogout = () => {
//         logout();
//         navigate('/admin');
//     };

//     const handleAddProject = (e) => {
//         e.preventDefault();
//         const newProject = { ...project, id: `project${Date.now()}`, tags: project.tags.split(',').map(tag => tag.trim()) };
//         updateProjects([newProject, ...projects]);
//         setProject({ title: '', description: '', image: '', tags: '' });
//     };

//     const handleDeleteProject = (id) => {
//         updateProjects(projects.filter(p => p.id !== id));
//     };

//     const handleAddSkill = (e) => {
//         e.preventDefault();
//         const newSkill = { ...skill, id: `skill${Date.now()}` };
//         updateSkills([newSkill, ...skills]);
//         setSkill({ icon: '', title: '', description: '' });
//     };

//     const handleDeleteSkill = (id) => {
//         updateSkills(skills.filter(s => s.id !== id));
//     };

//     const handleAddExperience = (e) => {
//         e.preventDefault();
//         const newExp = { ...exp, id: `exp${Date.now()}` };
//         updateExperience([newExp, ...experience]);
//         setExp({ date: '', title: '', company: '', description: '' });
//     };

//     const handleDeleteExperience = (id) => {
//         updateExperience(experience.filter(e => e.id !== id));
//     };
    
//     const downloadJSON = (data, filename) => {
//         const json = JSON.stringify(data, null, 2);
//         const blob = new Blob([json], { type: 'application/json' });
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = filename;
//         document.body.appendChild(a);
//         a.click();
//         document.body.removeChild(a);
//     };


//     return (
//         <div className="page active">
//             <section className="section">
//                 <div className="section-header">
//                     <h2 className="section-title">Admin Dashboard</h2>
//                     <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
//                 </div>
//                 <div>
//                     <h3>Welcome, Admin!</h3>
//                     <p>Here you can manage your portfolio content.</p>
//                 </div>

//                 {/* Projects Management */}
//                 <div className="admin-section">
//                     <h4>Manage Projects</h4>
//                     <form onSubmit={handleAddProject}>
//                         <input type="text" placeholder="Title" value={project.title} onChange={e => setProject({...project, title: e.target.value})} required/>
//                         <input type="text" placeholder="Description" value={project.description} onChange={e => setProject({...project, description: e.target.value})} required/>
//                         <input type="text" placeholder="Image URL" value={project.image} onChange={e => setProject({...project, image: e.target.value})} />
//                         <input type="text" placeholder="Tags (comma separated)" value={project.tags} onChange={e => setProject({...project, tags: e.target.value})} />
//                         <button type="submit" className="btn btn-primary">Add Project</button>
//                     </form>
//                     <button onClick={() => downloadJSON(projects, 'projects.json')} className="btn btn-primary">Download Projects JSON</button>
//                     <ul>
//                         {projects && projects.map(p => (
//                             <li key={p.id}>
//                                 {p.title}
//                                 <button className="btn btn-danger" onClick={() => handleDeleteProject(p.id)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Skills Management */}
//                 <div className="admin-section">
//                     <h4>Manage Skills</h4>
//                     <form onSubmit={handleAddSkill}>
//                         <input type="text" placeholder="Icon (e.g., fas fa-code)" value={skill.icon} onChange={e => setSkill({...skill, icon: e.target.value})} required/>
//                         <input type="text" placeholder="Title" value={skill.title} onChange={e => setSkill({...skill, title: e.target.value})} required/>
//                         <input type="text" placeholder="Description" value={skill.description} onChange={e => setSkill({...skill, description: e.target.value})} required/>
//                         <button type="submit" className="btn btn-primary">Add Skill</button>
//                     </form>
//                     <button onClick={() => downloadJSON(skills, 'skills.json')} className="btn btn-primary">Download Skills JSON</button>
//                      <ul>
//                         {skills && skills.map(s => (
//                             <li key={s.id}>
//                                 {s.title}
//                                 <button className="btn btn-danger" onClick={() => handleDeleteSkill(s.id)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Experience Management */}
//                 <div className="admin-section">
//                     <h4>Manage Experience</h4>
//                     <form onSubmit={handleAddExperience}>
//                         <input type="text" placeholder="Date" value={exp.date} onChange={e => setExp({...exp, date: e.target.value})} required/>
//                         <input type="text" placeholder="Title" value={exp.title} onChange={e => setExp({...exp, title: e.target.value})} required/>
//                         <input type="text" placeholder="Company" value={exp.company} onChange={e => setExp({...exp, company: e.target.value})} />
//                         <input type="text" placeholder="Description" value={exp.description} onChange={e => setExp({...exp, description: e.target.value})} required/>
//                         <button type="submit" className="btn btn-primary">Add Experience</button>
//                     </form>
//                     <button onClick={() => downloadJSON(experience, 'experience.json')} className="btn btn-primary">Download Experience JSON</button>
//                     <ul>
//                         {experience && experience.map(e => (
//                             <li key={e.id}>
//                                 {e.title}
//                                 <button className="btn btn-danger" onClick={() => handleDeleteExperience(e.id)}>Delete</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
                
//                 {/* CV Upload */}
//                 <div className="admin-section">
//                     <h4>Upload CV</h4>
//                     <p>Select your CV file. You will need to manually move it to the `public` folder.</p>
//                     <form>
//                         <input type="file" />
//                     </form>
//                 </div>

//             </section>
//         </div>
//     );
// };

// export default AdminDashboard;
