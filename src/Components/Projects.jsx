import React from 'react'
import { Container,Row,Col,Tab } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../Assests/img/color-sharp2.png'
import projImg1 from '../Assests/img/project-img1.png';
import projImg2 from '../Assests/img/project-img2.png';
import projImg3 from '../Assests/img/project-img3.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {

        const projects = [
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg2,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg3,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg1,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg2,
            },
            {
              title: "Business Startup",
              description: "Design & Development",
              imgUrl: projImg3,
            },
          ];
 
  return (
    <section className="project" id='project'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore quasi tenetur magnam? Unde, iste necessitatibus illum veritatis minus at libero sunt nulla perspiciatis rem commodi aperiam explicabo totam itaque natus!</p>
                    </div>}
                </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="tabs" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab Three
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project,index)=>{
                                            return(
                                               <ProjectCard
                                               key={index}
                                               {...project}
                                               />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane >
                            <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem Ipsum </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  )
}
