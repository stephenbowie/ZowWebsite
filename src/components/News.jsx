import React, { Component } from 'react'
import { Jumbotron, Card, Badge } from 'react-bootstrap'

export default class News extends Component {

    // badgeRender = (badge) => {
    //     if (badge === 'warning')
    //     return (<div>
    //           <Badge variant="warning">Warning</Badge> 
    //     </div>) ;
    //      if (badge === 'success')
    //      return (<div>
    //            <Badge variant="success">Success</Badge> 
    //      </div>) ;
    //       if (badge === 'danger')
    //       return (<div>
    //             <Badge variant="danger">Danger</Badge> 
    //       </div>) ;
    // }

    // newsCard = (header,badge,body,footer) => {
    //     let badgeRender;

    //     return (
    //         <div>
    //             <Card>
    //                 <Card.Header>{header} 
    //                     {this.badgeRender(badge)}</Card.Header> 
    //                 <Card.Body>
    //                     <blockquote className="blockquote mb-0">
    //                         <p>
    //                             {' '}
    //                             {body}.{' '}
    //                         </p>
    //                         <footer className="blockquote-footer">
    //                            {footer}
    //                         </footer>
    //                     </blockquote>
    //                 </Card.Body>
    //             </Card>
    //         </div>
    //     );
    // }


    render() {
        return (
            <div>
                <Jumbotron className="HomeJumbo">
                    <h2>News feed</h2>
                    <p>events to be attended by the people</p>
                </Jumbotron>
                <br>
                </br>

                {/* {this.newsCard = ('bowie news','warning','lorem ipsum lorem ipsum','footer')} */}




                <Card>
                    <Card.Header>Quote  <Badge variant="warning">Warning</Badge></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
                <br />

                <Card>
                    <Card.Header>Quote  <Badge variant="success">Success</Badge></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Header>Quote  <Badge variant="danger">Danger</Badge></Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Someone famous in <cite title="Source Title">Source Title</cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>





            </div>
        )
    }
}
