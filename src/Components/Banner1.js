import {React,useEffect,useState} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import headerImage from '../Assests/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Banner1 = () => {
    const[loopNum,setLoopNum]=useState(0);
    const[isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Web developer" , "Web designer" ,'UI/UX designer'];
    const[text,setText]=useState('');
    const [delta,setDelta]=useState(300-Math.random() * 100)
    const period=2000;

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        }, delta)

        return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i= loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updateText= isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text,length+1);

        setText(updateText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
  return (
    <section className='banner' id='home'>
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                <TrackVisibility>
                {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__slideInLeft" : ""}>
                    <h1>{`Hi I'm wendecoded`} <span className="wrap">{text}</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nemo molestias quo ratione voluptatum quis sed, ad nesciunt, voluptatem sint quam. Voluptatibus culpa, eveniet numquam explicabo nisi enim aliquam! Dolor.</p>
                    <button onClick={()=> console.log('connect')}>Let's connect </button>
                    </div>
                }
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImage} alt="Header image" />
            </Col>
        </Row>
    </Container>
    </section>
  )
}


{/* <ArrowRightCircle size={25}/> */}