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
import Package from './components/Package/Package';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
    return (
        <div className="App">
            <ToastContainer></ToastContainer>
            <Header></Header>
            <main className='main my-5'>
                <Routes>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/order' element={<RequireAuth><Package></Package></RequireAuth>}></Route>
                    <Route path='/about-me' element={<AboutMe></AboutMe>}></Route>
                    <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                    <Route path='/login' element={<Login></Login>}></Route>
                    <Route path='/register' element={<Register></Register>}></Route>
                </Routes>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
