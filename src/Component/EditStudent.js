import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const EditStudent = ({ studentsFromStore, EditStudentAtStudent }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [student, setStudent] = useState({ id: '', name: '', score: '' });

    useEffect(() => {
        const foundStudent = studentsFromStore.find(student => student.id === Number(id)); 
        if (foundStudent) {
            setStudent(foundStudent);
        } else {
            navigate('/');  
        }
    }, [id, studentsFromStore, navigate]);

    const onChangeData = (event) => {
        setStudent({
            ...student,
            [event.target.name]: event.target.value
        });
    };

    const onSubmitStudentForm = (event) => {
        event.preventDefault();
        EditStudentAtStudent(student);  
        navigate('/'); 
    };

    return (
        <div className="row mt-3 mb-5 ml-5 mr-5">
            <div className="card col-12 col-sm-8 col-lg-6 mx-auto">
                <div className="card-body">
                    <form onSubmit={onSubmitStudentForm}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={student.name}
                                onChange={onChangeData}
                            />
                        </div>
                        <div className="form-group">
                            <label>Score</label>
                            <input
                                type="number"
                                className="form-control"
                                name="score"
                                value={student.score}
                                onChange={onChangeData}
                            />
                        </div>
                        <div className="form-group text-center pt-3">
                            <button
                                type="button"
                                onClick={() => navigate('/')}
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
    );
};

const mapStateToProps = state => ({
    studentsFromStore: state.students
});

const mapDispatchToProps = dispatch => ({
    EditStudentAtStudent: (student) => dispatch({ type: 'EDIT_STUDENT', payload: student })
});

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
