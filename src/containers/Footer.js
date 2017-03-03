import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { changeFilter, SHOW_ALL, SHOW_ACTIVE } from '../actions/filter';

const Footer = ({ onChangeFilter }) => (
  <div className="footer">
    <a onClick={() => onChangeFilter(SHOW_ALL)}>Show All</a>{' | '}
    <a onClick={() => onChangeFilter(SHOW_ACTIVE)}>Show Active</a>
  </div>
)

Footer.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeFilter: filter => dispatch(changeFilter(filter))
  }
}

export default connect(null, mapDispatchToProps)(Footer);
