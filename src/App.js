import './App.css';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Packages from './components/Packages/Packages';
import { ToastContainer } from 'react-toastify';
import CheckOut from './components/CheckOut/CheckOut';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import Booked from './components/Booked/Booked';
import ResetPassword from './components/ResetPassword/ResetPassword';

function App() {
    return (
        <div className="App">
            <ToastContainer></ToastContainer>
            <Header></Header>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/packages' element={<Packages></Packages>}></Route>
                    <Route path='/package/:id' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
                    <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
                    <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/register' element={<Register></Register>}></Route>
                    <Route path='/reset-password' element={<ResetPassword></ResetPassword>}></Route>
                    <Route path='/booked' element={<RequireAuth><Booked></Booked></RequireAuth>}></Route>
                    <Route path='*' element={<NotFound></NotFound>}></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
