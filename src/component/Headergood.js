import react, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
import Logo  from "../image/logo.png"



function Headergood({}) {
    
    const [search,setSearch] = useState()
    const handlechange = (event) => {
        setSearch(event.currentTarget.value)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" style={{marginRight:100}}>
                <img style={{ height: 120, width: 180,marginTop:60 ,marginTop:20}} src={Logo} className='Image_List' />
                </Navbar.Brand>
               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link  style={{marginRight:100,marginLeft:80}}>Home</Nav.Link>
                        <Nav.Link style={{marginRight:80}}>Contact</Nav.Link>
                        <Nav>
                            <Nav.Link style={{marginRight:80}}>Calendrier</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">

                            </Nav.Link>

                            <NavDropdown title="page" id="collasible-nav-dropdown" className="me-1">
                                <NavDropdown.Item href="#action/3.1" >Sida</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" style={{marginRight:90}}>
                                    Symptomes
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4" style={{marginRight:90}}>
                                    Conseilles
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                       
                       

                        <NavDropdown title="Profile" id="collasible-nav-dropdown" className="me-1" style={{marginLeft:90}}>
                            <NavDropdown.Item href="#" >profile</NavDropdown.Item>
                            <NavDropdown.Item href="#" style={{marginRight:90}}>
                                paramétres
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#"></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#"  >
                                Deconnection
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Headergood;
