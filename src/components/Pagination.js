import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


let account = 0;
export default class Paginat extends React.Component {

pagina(e) {
  let coups = localStorage.getItem("cup");
  console.log(coups);
  let btnp=e.target.innerText;
  if (btnp == "1") {
    // for (var i = 0; i < 6; i++) {
    //
    //
    //   <Col xs="6" sm="4">
    //       <Card>
    //           <CardImg src={coups[i].media_urls[0]} alt={coups[i].title} />
    //           <CardBody>
    //               <CardTitle>{coups[i].title}</CardTitle>
    //               <CardSubtitle>{coups[i].account.name}</CardSubtitle>
    //               <CardText>{coups[i].details.slice(0,20)}</CardText>
    //               <CardText>{coups[i].location}</CardText>
    //               <CardText>Precio: {coups[i].price}</CardText>
    //               <CardText>Descuento: {coups[i].discount_price}</CardText>
    //               <CardText>{coups[i].available_coupons}</CardText>
    //               <Button>Button</Button>
    //           </CardBody>
    //       </Card>
    //   </Col>
    //
    // }

  }if (btnp == "2") {

  }if (btnp == "3") {

  }if (btnp == "4") {

  }if (btnp == "5") {

  }


}

  render() {
    return (
      <Pagination>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink value="1" onClick={(e)=>{this.pagina(e)}} href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink value="2" onClick={(e)=>{this.pagina(e)}} href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink value="3" onClick={(e)=>{this.pagina(e)}} href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink value="4" onClick={(e)=>{this.pagina(e)}} href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink value="5" onClick={(e)=>{this.pagina(e)}} href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
      </Pagination>
    );
  }
}
