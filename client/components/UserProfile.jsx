import React from 'react'
import { connect } from 'react-redux'

class UserProfile extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="userProfile">
        <h1>My Profile</h1>
        <h1>{this.props.userDetails.fName} {this.props.userDetails.lName}</h1>
        <ul>
          <li><strong>Organisation:</strong> {this.props.userDetails.organisation}</li>
          <li><strong>Email:</strong> {this.props.userDetails.email}</li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    userDetails: state.user
  }
}


export default connect(mapStateToProps)(UserProfile)
