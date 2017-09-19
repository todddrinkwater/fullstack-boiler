import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class ClassName extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
  }
}

  render() {
    return (
      <div className="">
      </div>
    )}
}

ClassName.propTypes = {

}

function mapStateToProps(state){
  return {
  }
}

export default connect(mapStateToProps)(ClassName)
