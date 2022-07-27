import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from './actions/index'

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
            <div>
                <div className="container">  <div className="row col-md-3 col  ">
                
                {users.map(res => 
                     
                    <div class="card text-dark bg-light mb-3" style="max-width: 18rem;" key={res.id} style={{display:this.state.deleteButton?'block':'none', boxShadow:"5px 10px 18px #B2C8DF"}} id={res.id}>

                    <div class="card-header"><h4> Movie Name : {res.original_title}</h4></div>

                    <div class="card-body text-muted">   
                    <h5>{res.release_date}</h5>
    
                    <p class="card-text">{res.overview}</p>

                    <button onClick={() => this.handleButton(res.id)} className="btn btn-outline-info">Delete</button> 

                   
                    </div>
                    </div>

                )}
                
            </div></div></div>



        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Users)