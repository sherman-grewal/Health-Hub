import React from "react";
import {
    Alert,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    Row,
    Col
} from "reactstrap";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
import {FirebaseContext, withFirebase} from '../../variables/firebase';



import {PanelHeader, Button} from "../../components";

class Notifications extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: true
        };
        this.onDismiss = this.onDismiss.bind(this);
        this.notify = this.notify.bind(this);
        this.url = "https://mentalhealthhelper-fb52e.firebaseio.com/doctors/doctor/p1.json";
    }

    showNotif(val) {
        for (let i in val) {
            console.log(val[i]);
            const mood = parseInt(val[i].mood);
            if (mood < 4) {
                this.setState({
                    msg: "Alert, user 1 has a mood of " + mood
                });
                this.notify("tr");
            }
            // const entries = val.journal.entry;
        }
    }

    componentDidMount() {
        this.props.firebase.logs().on('value', snapshot => {
            this.showNotif(snapshot.val());
        });
    }

    onDismiss() {
    }

    notify(place) {
        // var color = Math.floor(Math.random() * 5 + 1);
        var color = 2;
        var type;
        switch (color) {
            case 1:
                type = "primary";
                break;
            case 2:
                type = "success";
                break;
            case 3:
                type = "danger";
                break;
            case 4:
                type = "warning";
                break;
            case 5:
                type = "info";
                break;
            default:
                break;
        }
        var options = {};
        options = {
            place: place,
            message: (
                <div>
                    <div>
                        {this.state.msg}
                    </div>
                </div>
            ),
            type: type,
            icon: "now-ui-icons ui-1_bell-53",
            autoDismiss: 7
        };
        this.refs.notificationAlert.notificationAlert(options);
    }

    render() {
        return (
            <div className="content">
                <NotificationAlert ref="notificationAlert"/>
                <Button
                    color="primary"
                    block
                    onClick={() => this.notify("tr")}
                >
                    Top Right
                </Button>
            </div>
        );
    }
}

export default withFirebase(Notifications);