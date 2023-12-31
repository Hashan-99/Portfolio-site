import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assests/img/logo.svg';
import navIcon1 from '../Assests/img/nav-icon1.svg';
import navIcon2 from '../Assests/img/nav-icon2.svg';
import navIcon3 from '../Assests/img/nav-icon3.svg';
import {React,useState,useEffect} from 'react'


const Navbar1 = () => {
    const [activeLink,setActiveLink]=useState('home');
    const [scrolled,setScrolled]=useState(false);

    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY >50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onscroll);
        return ()=> window.removeEventListener("scroll",onscroll);
    },[]);

    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg"  className={scrolled ? "scrolled": ""}>
    <Container>
      <Navbar.Brand href="#home">
      <img src={logo} alt='Logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"> 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('projects')}>Project</Nav.Link>
        </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={navIcon1} alt=''/></a>
                        <a href='#'><img src={navIcon2} alt=''/></a>
                        <a href='#'><img src={navIcon3} alt=''/></a>
                    </div>
                    <button className='vvd' onClick={()=> console.log('Connect')}><span>Let's connect</span></button>
                </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbar1