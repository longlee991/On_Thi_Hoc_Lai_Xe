import {Row, Col,Image, Container, Form, Button, Alert} from 'react-bootstrap'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try{
            const response = await fetch(`http://localhost:9999/account`);
            const accounts = await response.json();

            const foundAccount = accounts.find((a) => a.username === username && a.password === password);

            if(foundAccount){
                if(foundAccount.role === 'admin'){
                    navigate('/homeadmin');
                }else if(foundAccount.role === 'user'){
                    navigate('/home');
                }
            }else{
                setError('sai tên đăng nhập hoặc mật khẩu!');
            }
        }catch (err){
            setError('Không thể kết nối tới server');
        }
    }
  return (
    <>
        <Row>
            <h1 className="text-center text-primary mb-3 mt-3">Ôn Thi Trắc Nhiệm Bằng Lái Xe Máy</h1>
        </Row>
        <Row>
            <Col md={6}>
                <Image src='anhthi.png' alt="Description of the image" style={{width: '100%', height: '96%'}}/>
            </Col>
            <Col md={6}>
                {error && <Alert variant='danger'>{error}</Alert>}
                    <h4 className='text-center'>Đăng nhập</h4>
                    <Container>
                    <Form onSubmit={handleLogin}>
                        <p>Tên đăng nhập</p>
                        <Form.Control
                            type='text'
                            placeholder="Nhập tên đăng nhập" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></Form.Control>
                        <p className='mt-2'>Mật khẩu</p>
                        <Form.Control
                            type='password' 
                            placeholder="Nhập mật khẩu" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        <Button className="btn btn-primary mt-3" type='submit'>Đăng nhập</Button>
                    </Form>
                    </Container>
            </Col>
        </Row>
    </>
  )
}

export default LogIn
