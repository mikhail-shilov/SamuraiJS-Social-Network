import React from "react";

class UserStatus extends React.Component {
    state = {
        status: this.props.status,
        editMode: false,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('fsdfsdffsdfsdfdsf');
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status,});
        }
    }

    editModeOn = () => {
        this.setState(
            {editMode: true}
        );
    }
    editModeOff = () => {
        this.setState({editMode: false});
        this.props.putUserStatus(this.state.status);
    }
    updateTempStatus = (event) => {
        const status = event.target.value;
        this.setState(
            {status: status}
        );
    }

    render() {
        return (
            <>
                {this.state.editMode && <span>
                <input value={this.state.status} autoFocus={true} onBlur={this.editModeOff}
                       onChange={this.updateTempStatus}/>
            </span>}
                {!this.state.editMode && <span onDoubleClick={this.editModeOn}>
                {this.props.status ? this.props.status : '--------'}
            </span>}
            </>);
    }
}

export default UserStatus;
