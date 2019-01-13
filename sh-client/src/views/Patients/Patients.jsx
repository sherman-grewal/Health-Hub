import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { PanelHeader } from "../../components";

import users from "../../variables/users";

class Patients extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>
                <CardHeader>
                  <h5 className="title"> Your users </h5>
                  <p className="category">
                    Handcrafted by our friends from{" "}
                  </p>
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
