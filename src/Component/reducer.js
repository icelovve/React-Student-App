const initialState = {
    students: [
        { id: 1, name: 'John', score: 99 },
        { id: 2, name: 'Jane', score: 88 },
        { id: 3, name: 'Mike', score: 77 },
        { id: 4, name: 'Sarah', score: 90 },
        { id: 5, name: 'Tom', score: 65 }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DEL_STUDENT':
            return {
                ...state,
                students: state.students.filter(item => item.id !== action.payload)
            };

        case 'ADD_STUDENT':
            return {
                ...state,
                students: [action.payload, ...state.students]
            };

        case 'EDIT_STUDENT':
            return {
                ...state,
                students: state.students.map(student =>
                    student.id === action.payload.id ? action.payload : student
                )
            };

        default:
            return state;
    }
};

export default reducer;
