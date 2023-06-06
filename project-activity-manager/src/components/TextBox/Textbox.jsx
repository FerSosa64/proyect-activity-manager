import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: 'auto' }}>
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          Este es un proyecto realizado por el estudiante Fernando Sosa para 
          la clase de Experiencia de Usuario. El proposito de este proyecto realizado
          con React es en realizar una pagina inspirada por las funciones de Trello,
          donde uno puede crear calendarios de actividades a realizar.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;