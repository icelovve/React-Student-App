import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './Component/reducer';
import { Provider } from 'react-redux';
import StudentList from './Component/StudentList';
import AddStudent from './Component/AddStudent';
import EditStudent from './Component/EditStudent';
import Header from './Component/Header';
import PageNotFound from './Component/PageNotFound';
import { createStore } from 'redux';

function App() {
    const store = createStore(reducer);
    return (
        <Provider store={store}>
            <div className='container'>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route exact path='/edit/:id' element={<EditStudent />} />
                        <Route exact path='/add' element={<AddStudent />} />
                        <Route exact path='/' element={<StudentList />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
