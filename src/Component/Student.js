import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Student extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    name: {this.props.data.name}
                    <button
                        className="btn btn-outline-danger btn-sm float-end mx-1"
                        onClick={() => this.props.deleteStudentAtState(this.props.data.id)}
                    >ลบ</button>
                    <Link to={`/edit/${this.props.data.id}`}>
                        <button className="btn btn-success btn-sm float-end">แก้ไข</button>
                    </Link>
                </div>
                <div className="card-body">
                    score: {this.props.data.score}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    deleteStudentAtState: (id) => dispatch({ type: 'DEL_STUDENT', payload: id })
});

export default connect(null, mapDispatchToProps)(Student);
