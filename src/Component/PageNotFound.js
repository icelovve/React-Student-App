import React,{Component} from 'react';

class PageNotFound extends Component{
    render(){
        return(
            <div className='row mt-5 mb-5'>
                <div className='col-10 text-center p-5 mx-auto'>
                    <h1 className='display-4 mb-4 pb-5'>
                        <span className='text-danger'>ERROR 404</span>
                        Page Not Found
                    </h1>
                    <p className='lead'>ข้ออภัยในความไม่สะดวก</p>
                </div>
            </div>
        )
    }
}

export default PageNotFound;