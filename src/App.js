import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Login from './component/LogIn'
import Home from './component/Home'
import MainAdmin from './component/MainAdmin';
function App() {
    return (
        <>
            <BrowserRouter>
                
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/homeadmin" element={<MainAdmin />} />
                    </Routes>
                
            </BrowserRouter >
        </>
    )
}

export default App;