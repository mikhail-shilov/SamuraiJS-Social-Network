import React from "react";

class UserStatus extends React.Component {
    state = {
        editMode: false,
    }
    editModeOn = () => {
        this.setState(
            {editMode: true}
        );
    }
    editModeOff = () => {
        this.setState(
            {editMode: false}
        );
    }
    render() {
        return (
        <>
            {this.state.editMode&&<span>
                <input value={this.props.status} autoFocus={true} onBlur={this.editModeOff}/>
            </span>}
            {!this.state.editMode&&<span onDoubleClick={this.editModeOn}>
                {this.props.status}
            </span>}
        </>);
    }
}

export default UserStatus;
