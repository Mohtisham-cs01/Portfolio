// import React, { useState, useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//     const [password, setPassword] = useState('');
//     const { login } = useContext(AppContext);
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const success = await login(password);
//         if (success) {
//             navigate('/admin/dashboard');
//         } else {
//             alert('Incorrect password');
//         }
//     };

//     return (
//         <div className="">
//             <section className="section">
//                 <div className="section-header">
//                     <h2 className="section-title">Admin Login</h2>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label className="form-label">Password</label>
//                         <input
//                             type="password"
//                             className="form-input"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Login</button>
//                 </form>
//             </section>
//         </div>
//     );
// };

// export default AdminLogin;
