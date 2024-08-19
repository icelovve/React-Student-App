import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';

class AddStudent extends Component {
    state = {
        name: '',
        score: ''
    }

    onChangeData = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmitStudentForm = (event) => {
        event.preventDefault();
        const newData = {
            id: new Date().getTime().toString(),
            name: this.state.name,
            score: this.state.score
        };
        this.props.addStudent(newData);
        this.props.navigate('/');
    }

    render() {
        return (
            <div className="row mt-3 mb-5 mt-5 mr-5">
                <div className="card col-12 col-sm-8 col-lg-6 mx-auto">
                    <div className="card-body">
                        <form onSubmit={this.onSubmitStudentForm.bind(this)}>
                            <div className="block-4 text-center">
                                <img
                                    className="img img-thumbnail mt-5 mb-3"
                                    src='https://images.pexels.com/photos/8422207/pexels-photo-8422207.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
                                    alt="Logo"
                                />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChangeData}
                                />
                            </div>
                            <div className="form-group">
                                <label>Score</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="score"
                                    value={this.state.score}
                                    onChange={this.onChangeData}
                                />
                            </div>
                            <div className="form-group text-center pt-3">
                                <button
                                    onClick={() => this.props.navigate('/')}
                                    className="btn btn-outline-success btn-sm mx-1"
                                >ยกเลิก</button>
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm mx-1"
                                >บันทึก</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addStudent: (newStudentData) => {
        return dispatch({ type: 'ADD_STUDENT', payload: newStudentData })
    }
});

const AddStudentWithNavigate = (props) => {
    const navigate = useNavigate();
    return <AddStudent {...props} navigate={navigate} />;
}

export default connect(null, mapDispatchToProps)(AddStudentWithNavigate);
