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


<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<div class="container-fluid">
  {/* <a class="navbar-brand" href="#">Navbar</a> */}

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link active" aria-current="page" href="../log">Logout</a>
      
      {/* <a class="nav-link" href="#">Features</a> */}
      {/* <a class="nav-link" href="#">Pricing</a> */}
      {/* <a class="nav-link disabled">Disabled</a> */}

    </div>

  </div>
</div>
</nav>


                <div className="container" style={{display: 'grid', gridtemplatecolumns: 'auto auto', width:'80%'}}>  
                
                <div className="row ">
                
                {users.map(res => 
                    <div className='col' style={{width:'90%'}}>
                    <div class="card text-dark bg-light mb-3" key={res.id} style={{display:this.state.deleteButton?'block':'none', boxShadow:"5px 10px 18px #B2C8DF", width:'100%', marginRight:'150px'}} id={res.id}>

                    <div class="card-header"><h4> Movie Name : {res.original_title}</h4></div>

                    <div class="card-body text-muted">   
                    <h5>{res.release_date}</h5>
    
                    <p class="card-text">{res.overview}</p>

                    <button onClick={() => this.handleButton(res.id)} className="btn btn-outline-info">Delete</button> 

                   
                    </div>
                    </div>
                    </div>

                )}
                

                
            </div></div></div>





        )
    }
}

const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(Users)