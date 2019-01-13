import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import { PanelHeader, Button } from "../../components";
import users from "../../variables/users";
import PatientInfo from './PatientInfo'



export class Patients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title"> Your Patients </h5>
                </CardHeader>
                <CardBody className="all-icons">
                  <Row>
                    {users.map((user, i) => {
                      return (
                        <Col
                          lg={2}
                          md={3}
                          sm={4}
                          xs={6}
                          className="font-icon-list"
                          key={i}
                        >
                          <div className="font-icon-detail">
                            <i className={"now-ui-icons " + "users_single-02"} />
                            <p>{user.name}</p>
                            <Button
                              color="Black"
                              block
                              
                              href = "/user-info"
                              
                            >
                              More Info
                            </Button>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Patients;
