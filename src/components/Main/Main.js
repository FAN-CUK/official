import React from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import classNames from 'classnames'
import { LinkContainer } from 'react-router-bootstrap'

import css from './Main.css';

class Main extends React.Component {
  render() {
    return(
      <div className="container-fluid" id="main">
        <Row>
          <div className={classNames(css.main_official, css.parallax, 'text-center')}>
              <Col sm={12} className={classNames('text-center', css.mainText)}>
                <p className={css.mainTitle}>F.A.N</p>
                <div className={classNames('btn', css.mainbtn)}>About Us</div>
                <LinkContainer to='#'>
                  <Button className={css.mainbtn}>About Us</Button>
                </LinkContainer>
              </Col>
          </div>
        </Row>
      </div>
    );
  }
}

export default Main
