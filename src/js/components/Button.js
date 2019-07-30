import React, { Component} from "react"
import PropTypes from 'prop-types'


class Button extends Component {

  render() {
    const {onClick} = this.props

    return(
      <button onClick={onClick} className="btn btn-primary">Load Items</button>
    )
  }

}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
