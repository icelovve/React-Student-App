import { Collapse } from 'bootstrap';
import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    state = {
        Collapse : false
    }
    render() {
        return(
            <nav className='navbar navbar-expand-lg navbar-light bg-light mx-auto text-center'>
                <Link className='navbar-brand' to='/'>Home</Link>
                <button className='navbar-toggle' type='button' data-toggle='collapse' data-target='#navbarNav' aria-expanded='true' aria-label='Toggle navigtion' aria-controls='navbarNav'>
                    <span 
                        className='navbar-toggler-icon'
                        onClick={()=>{
                            this.setState({ collapse: !this.state.collapse})
                            console.log(this.state.collapse);
                            console.log('OK Click');
                            
                        }}
                    ></span>
                </button>
                <div className={this.state.collapse?' collapse navbar-collapse show text-center pt-3':' collapse navbar-collapse'}>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/'>All Student</Link>
                        </li>
                        <li className='nav-item active'>
                            <Link className='nav-link' to='/add' >Add Student</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;