import React from "react";
import {Card, CardHeader, CardBody, Row, Col, CardTitle, Table} from "reactstrap";

import {FirebaseContext, withFirebase} from '../../variables/firebase';
import {PanelHeader, FormInputs, CardAuthor, CardSocials} from "../../components";
import {Line, Bar} from "react-chartjs-2";
import userBackground from "../../assets/img/bg5.jpg";
import userAvatar from "../../assets/img/ryan.jpg";
import {dashboardPanelChart, dashboard24HoursPerformanceChart} from "../../variables/charts";

class PatientInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            patientId: null,
            patient: null
        }
    }

    getUserInfo(patients) {
        for (const p of patients) {
            if (p.id === this.state.patientId) {
                this.setState({
                    patient: p
                });
                return;
            }
        }
    }

    componentDidMount() {
        const patientId = parseInt(this.props.match.params.id);

        this.setState({
            patientId: patientId,
        });

        this.props.firebase.patientsOfDoctor().on('value', snapshot => {
            // this.getUserInfo(snapshot.val());
        });
    }

    render() {
        return (
            <div>
                <PanelHeader
                    size="lg"
                    content={
                        <Line
                            data={dashboardPanelChart.data}
                            options={dashboardPanelChart.options}
                        />
                    }
                />
                <div className="content">
                    <Row>
                        <Col md={4} xs={12}>
                            <Card className="card-user">
                                <div className="image">
                                    <img src={userBackground} alt="..."/>
                                </div>
                                <CardBody>
                                    <CardAuthor
                                        avatar={userAvatar}
                                        avatarAlt="..."
                                        //THIS IS WHERE I REPLACE THE NAME
                                        //title = {this.props.patient.name}
                                        //-------------
                                        description="michael23"
                                    />
                                    {/*<p className="description text-center">*/}
                                    {/*"Lamborghini Mercy <br />*/}
                                    {/*Your chick she so thirsty <br />*/}
                                    {/*I'm in that two seat Lambo"*/}
                                    {/*</p>*/}
                                </CardBody>
                                <hr/>
                                <CardSocials
                                    size="lg"
                                    socials={[
                                        {
                                            icon: "fab fa-facebook-f",
                                            href: "https://www.facebook.com/"
                                        },
                                        {
                                            icon: "fab fa-twitter",
                                            href: "https://www.facebook.com/"
                                        },
                                        {
                                            icon: "fab fa-google-plus-g",
                                            href: "https://plus.google.com/discover"
                                        }
                                    ]}
                                />
                            </Card>
                        </Col>
                        <Col md={8} xs={12}>
                            <Card>
                                <CardHeader>
                                    {/*<CardCategory>All Persons List</CardCategory>*/}
                                    <CardTitle tag="h4">Medication Stats</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Table responsive>
                                        <thead className=" text-primary">
                                        <tr>
                                            <th>Medication Name</th>
                                            <th>Description</th>
                                            <th className="text-right">Dosage</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Allergy Pills</td>
                                            <td>After taking this I felt very drowsy and I was upset</td>
                                            <td className="text-right">36,738mpg</td>
                                        </tr>
                                        <tr>
                                            <td>Minerva</td>
                                            <td>Curaçao</td>
                                            <td className="text-right">23,789mpg</td>
                                        </tr>
                                        <tr>
                                            <td>Sage</td>
                                            <td>Netherlands</td>
                                            <td className="text-right">56,142mpg</td>
                                        </tr>
                                        <tr>
                                            <td>Greene</td>
                                            <td>Malawi</td>
                                            <td className="text-right">63,542mpg</td>
                                        </tr>
                                        <tr>
                                            <td>Porter</td>
                                            <td>Chile</td>
                                            <td className="text-right">78,615mpg</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default withFirebase(PatientInfo);
