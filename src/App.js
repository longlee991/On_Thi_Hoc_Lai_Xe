import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import Home from './component/Home'
function App() {
    return (
        <>
            <BrowserRouter>
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Container>
            </BrowserRouter >
        </>
    )
}

export default App;