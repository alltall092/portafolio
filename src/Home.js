import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import Footer from './Footer';
import cv from './JulioPerezCV.docx';


const Home=()=>{
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

const id="section5";

    return (
      <>
      <Container className="container-home">
      <Row>
        <Col> <img src="../foto.png" className="imagenes" alt="imagenes"/>
</Col>
        <Col>
        <h1 className="titulo1 titulo">Julio Alberto Perez</h1>
        <h2 className="titulo2 titulo">Developer Full stack</h2>
        <h5 className="subtutilo">Objectivo</h5>
       <p className="parrafo">Ofrecer mis servicios y poner en práctica mis conocimientos de programación web en beneficio de la empresa para la cual labore, garantizando un ambiente de estabilidad, Crecimiento y superación a nivel personal y laboral</p>
     
       <Button variant="primary"> <a href={cv} download="CVjulioPerez" style={{textDecoration:"none"}}>Descargar CV</a></Button>
        </Col>
      </Row>
      


    <Row id="section2">
<Col>
<h1>Acerca de mi</h1>
       <p> Me llamo Julio Alberto Perez, me apasiona el mundo de la Tecnologías y actualmente, soy Desarrollador Web Full Stack, 
        poseo conocimientos en Tecnologías como , React, angular laravel,codelnigter, Redux, JavaScript, HTML, CSS, Bootstrap, Git y GitHub,
        csharp, visual basic sql server mysql php  web api;
Actualmente, me encuentro en el aprendizaje de más herramientas para él Desarrollo Web como, Python, y java. Me interesa seguir adquiriendo más conocimientos y perfeccionar los ya obtenidos.
    </p>
    <h1> Experiencia</h1>
<p>2018-2019</p> <h4>Desarrollador Junior</h4>
              <p>Expertcode</p>
              <hr/>
              <p>2021-2021</p>  <h4>Desarrollador freelancer</h4>
                                  <p>infoaltech</p>
              <hr/>


</Col>
      </Row>
      <Row  id="section3">
        <Col>
        <h1>Mis Habilidades</h1>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <Container>
          <Row>
            <Col>

        <img
          className="d-block w-20"
          src="../boot.jpg"
          alt="First slide"
        />
        <br/>
          <h3>Bootstrap</h3>
          </Col>
          <Col>

<img
  className="d-block w-20"
  src="../mysql.png"
  alt="First slide"
/>
<br/>
  <h3>Mysql</h3>
  </Col>
  <Col>

<img
  className="d-block w-20"
  src="../descarga.jpg"
  alt="First slide"
/>
<br/>
  <h3>Asp.net Mvc</h3>
  </Col>
          </Row>
        
  
</Container>
      </Carousel.Item>
      



        <Carousel.Item>


          
        <Container>
          <Row>
            <Col>

        <img
          className="d-block w-20"
          src="../sqlserver.png"
          alt="First slide"
        />
        <br/>
          <h3>sql server</h3>
          </Col>
          <Col>

<img
  className="d-block w-20"
  src="../vb.png"
  alt="First slide"
/>
<br/>
  <h3>visual Basic</h3>
  </Col>
  <Col>

<img
  className="d-block w-20"
  src="../csharp.png"
  alt="First slide"
/>
<br/>
  <h3>Cscharp</h3>
  </Col>
          </Row>
        
  
</Container>
      </Carousel.Item>
      
      <Carousel.Item>
        <Container>
          <Row>
            <Col>

        <img
          className="d-block w-20"
          src="../redux.png"
          alt="First slide"
        />
        <br/>
          <h3>Redux</h3>
          </Col>
          <Col>

<img
  className="d-block w-20"
  src="../html.png"
  alt="First slide"
/>
<br/>
  <h3>html</h3>
  </Col>
  <Col>

<img
  className="d-block w-20"
  src="../css.png"
  alt="First slide"
/>
<br/>
  <h3>Css</h3>
  </Col>
          </Row>
        
  
</Container>
      </Carousel.Item>
      
      <Carousel.Item>
      <Container>
          <Row>
            <Col>

        <img
          className="d-block w-20"
          src="../js.png"
          alt="First slide"
        />
        <br/>
          <h3>JavaScript</h3>
          </Col>
          <Col>

<img
  className="d-block w-20"
  src="../logo192.png"
  alt="First slide"
/>
<br/>
  <h3>React</h3>
  </Col>
  <Col>

<img
  className="d-block w-20"
  src="../angular.png"
  alt="First slide"
/>
<br/>
  <h3>angular</h3>
  </Col>
          </Row>
        
  
</Container>
      </Carousel.Item>
      <Carousel.Item>
      <Container>
          <Row>
            <Col>

        <img
          className="d-block w-20"
          src="../php1.png"
          alt="First slide"
        />
        <br/>
          <h3>php</h3>
          </Col>
          <Col>

<img
  className="d-block w-20"
  src="../codenigter.jpg"
  alt="First slide"
/>
<br/>
  <h3>codelnigter</h3>
  </Col>
  <Col>

<img
  className="d-block w-20"
  src="../laravel.png"
  alt="First slide"
/>
<br/>
  <h3>laravel</h3>
  </Col>
          </Row>
        
  
</Container>
      </Carousel.Item>
    </Carousel>
        </Col>
        </Row>
      
        <Row id="section4">
       
       <h2>Mi Portafolio</h2>
       <Col className="nuestrocontenedor">
        
        <img src="../Screenshot (72).png" alt="prueba" height="200" witdth="200"/>
      
       <div className="nuestrobloque">
       <div className="nuestrotexto"> 
       
       
        <a href="https://app-389eb16f-aefa-4913-b4a2-f19bd484ab90.cleverapps.io/" style={{color:"black"}}>Luxuryscarservices</a>
        <br/>
        <a href="https://github.com/alltall092/proyecto/commit/b58cd1835a22c75ec5a501af19ccbdedad2a6a79" style={{color:"black",fontSize:"40px"}}><i style={{color:"black"}} className="fa-brands fa-github"></i></a> </div>
      </div>
       </Col>
       <Col className="nuestrocontenedor">
        <img src="../home1.png" alt="prueba" height="200" witdth="200"/>
       <div className="nuestrobloque">
       <div className="nuestrotexto"> 
       <a href="https://stunning-starburst-be4f85.netlify.app/" style={{color:"black"}}>NoticiasRD</a>
        <br/>
       <a href="https://github.com/alltall092/Ecommerce" style={{color:"black",fontSize:"40px"}}><i style={{color:"black"}} className="fa-brands fa-github"></i></a>
       </div>

      </div>
       
       
       </Col>
       <Col className="nuestrocontenedor"><img src="../redtangle.png" alt="prueba" height="200" witdth="200"/>
      
       <div className="nuestrobloque">
       <div className="nuestrotexto"> <a style={{color:"black"}} href="https://clever-babka-1cb3e2.netlify.app/">Red tangle</a>
       <br/>
       <a href="https://github.com/alltall092/Ecommerce" style={{color:"black"}}><i style={{color:"black",fontSize:"40px"}} className="fa-brands fa-github"></i></a>
       
       
       </div>
      </div>
      
       </Col> 
       </Row>
        <Row id="section4">

       <Col className="nuestrocontenedor"><img src="../ecommerce.png" alt="prueba" height="200" witdth="200"/>
     
       <div className="nuestrobloque">
       <div className="nuestrotexto">  
     
       
       
        <a href="https://65ee1a25c5414fb274d2efc9--rococo-biscotti-62266d.netlify.app/" style={{color:"black"}}>E-commerce</a>
        <br/>
        <a href="https://github.com/alltall092/Ecommerce" style={{color:"black",fontSize:"40px"}}><i style={{color:"black"}} className="fa-brands fa-github"></i></a>
        </div>
      </div>

       </Col>
       <Col className="nuestrocontenedor"><img src="../Screenshot (77).png" alt="prueba" height="200" witdth="200"/>
       <div className="nuestrobloque">
       <div className="nuestrotexto"> 
       <h5 style={{color:"black"}}>app of desktop</h5>
       <br/>
       <a href="https://github.com/alltall092/facturacion" style={{color:"black",fontSize:"40px"}}><i style={{color:"black"}} className="fa-brands fa-github"></i></a>
       </div>
      </div>
       
       </Col>
       <Col className="nuestrocontenedor">
        <img src="../Screenshot (79).png" alt="prueba" height="200" witdth="200"/>
       <div className="nuestrobloque">
       <div className="nuestrotexto">  
       <a href="https://ephemeral-macaron-319eaa.netlify.app/" style={{color:"black"}}>the movieAll</a>
       <br/>
       <a href="https://github.com/alltall092/themovie" style={{color:"black",fontSize:"40px"}}><i style={{color:"black"}} className="fa-brands fa-github"></i></a>
       
       </div>
      </div>
       </Col>

 
     </Row>
     
      </Container>
    
       <Footer id={id} />
       
      </>
      
    )
  }
  export default Home;