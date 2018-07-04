import { connect } from 'react-redux'

import { userLogin } from '../../actions/user'

import LogIn from './stateless'

const mapDispatchToProps = dispatch => ({
  userLogin: ({email, password}) => dispatch(userLogin({email, password}))
});


export default connect(null, mapDispatchToProps)(LogIn)
