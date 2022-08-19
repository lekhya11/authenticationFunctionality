import {Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt-token')

  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return <Route exact {...props} />
}

export default ProtectedRoute
