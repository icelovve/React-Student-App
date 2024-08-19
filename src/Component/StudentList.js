import React, { Component } from "react";
import Student from "./Student";
import { connect } from "react-redux";

class StudentList extends Component {
    render() {
        const allStudents = this.props.studentsFromStore;
        return (
            <div className="row">
                {
                    allStudents.map(item => (
                        <div className="col-12 col-sm-6 col-lg-4 mt-3" key={item.id}>
                            <Student data={item} />
                        </div>
                    ))
                }
            </div>  
        );
    }
}

const mapStateToProps = state => {
    return {
        studentsFromStore: state.students
    };
}

export default connect(mapStateToProps)(StudentList);
