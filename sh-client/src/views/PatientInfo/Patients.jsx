import React from "react";
import {Card, CardHeader, CardBody, Row, Col} from "reactstrap";
import {PanelHeader, Notifications} from "../../components";
import _ from 'lodash';
import users from "../../variables/users";
import {
    Link,
    Redirect
} from 'react-router-dom';
import {FirebaseContext, withFirebase} from '../../variables/firebase';


export class Patients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            patients: []
        }
    }

    getPatients(resp) {
        console.log(resp)
        let patients = resp;
        this.setState((prevstate) => ({
            patients: [...prevstate.patients, patients.p1, patients.p2]
        }));
    }

    setRedirect = (id) => {
        this.setState({
            redirect: true,
            patientId: id
        })
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={'/patient-info/' + this.state.patientId}/>
        }
    };

    componentDidMount() {
        this.setState({loading: true});

        this.props.firebase.patientsOfDoctor().on('value', snapshot => {
            this.getPatients(snapshot.val());
        });
    }


    render() {
        return (
            <div>
                <PanelHeader size="sm"/>

                <FirebaseContext.Consumer>
                    {
                        firebase => {
                            // firebase.addUser();
                        }}
                </FirebaseContext.Consumer>

                <div className="content">
                    <Row>
                        <Col md={12}>
                            <Card>
                                <CardHeader>
                                    <h5 className="title"> Your Patients </h5>
                                </CardHeader>
                                <CardBody className="all-icons">
                                    <Row>
                                        {this.renderRedirect()}
                                        {this.state.patients.map((user, i) => {
                                            return (
                                                <Col
                                                    lg={2}
                                                    md={3}
                                                    sm={4}
                                                    xs={6}
                                                    className="font-icon-list"
                                                    key={i}
                                                >
                                                    {/*<Link style={{"text-decoration": "none", "color":""}} to={'/patient-info/' + user.id}>*/}
                                                    <div onClick={() => this.setRedirect(user.id)}
                                                         className="font-icon-detail"
                                                         style={{"cursor": "pointer"}}
                                                    >
                                                        <i className={"now-ui-icons " + "users_single-02"}/>
                                                        <p>{user.name}</p>
                                                    </div>
                                                    {/*</Link>*/}
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

export default withFirebase(Patients);
