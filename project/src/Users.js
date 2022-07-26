import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from './store/actions/usersAction'
import './index.css'

 class Users extends Component {
    constructor(props){
        super(props);
        this.state=
        {deleteButton:true};
        this.handleButton=this.handleButton.bind(this)
    }
    componentDidMount(){
        this.props.getUsers()
        
    }
    handleButton(id){
        // event.preventDefault();
        
        document.getElementById(id).style.display="none";   
    }
    render() {
        const {users} = this.props.users
        console.log(this.props.users)

        
        return (
            <div className='container'>
                <h1 className='text-center'>Users Information</h1>
                <div className="row">
                {users.map(u => 
                
                     <div key={u.id} id={u.id} className='card col-lg-3'>
                         <h4 className='text-center'>{u.name}</h4>
                         <h6 >City: {u.address.city}</h6>
                         <h6 >Workplace: {u.company.name}</h6>
                         <h6 >Email: {u.email}</h6>
                         <h6>Phone Number: {u.phone}</h6>
                         <button onClick={() => this.handleButton(u.id)} className="btn btn-danger">Delete</button> 
                     </div>
                     
                   
                )}
            </div>
            </div>
        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Users)