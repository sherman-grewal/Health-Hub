import React from "react";
import {Card, CardHeader, CardBody, Row, Col} from "reactstrap";
import {PanelHeader, Button} from "../../components";
import users from "../../variables/users";
import {
    Link,
    Redirect
} from 'react-router-dom';
import PatientInfo from './PatientInfo'
import {FirebaseContext, withFirebase} from '../../variables/firebase';


export class Patients extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

     componentDidMount() {
         this.setState({loading: true});

         this.props.firebase.users().on('value', snapshot => {
             console.log(snapshot.val())
             this.setState({
                 users: snapshot.val(),
                 loading: false,
             });
         });
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

    render() {

        return (
            <div>
                <PanelHeader size="sm"/>

                <FirebaseContext.Consumer>
                    {
                        firebase => {
                            // firebase.db.ref('users/' + 5).set({
                            //     name: "fsafdsfdsfa",
                            //     email: "fdsfadsfd@faefsfsd.com",
                            // });
                            firebase.addUser();
                            console.log(firebase.users())
                            // return <div onClick={() => firebase.addDoctor("aasdfa", "esafsf")}>I've access to Firebase
                            //     and render something.</div>;
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
