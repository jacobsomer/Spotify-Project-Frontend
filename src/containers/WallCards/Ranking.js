import React from 'react'
import { Card} from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Logo from './../images/waterfall.jpg'
class Stat extends React.Component{
  render() {
  return(
      <Card  >
        <ProgressBar animated now={45} />
        <Card.Body>
          <Card.Title style={{color:this.props.info.theme.body}}>Card Title</Card.Title>
          <Card.Text >
            <div style={{color:this.props.info.theme.body}} >
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
  );
  }
}




export default Stat;
