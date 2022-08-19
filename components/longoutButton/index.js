import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const LogoutButton = props => {
  const onclickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="button-container">
      <button type="button" className="button" onClick={onclickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
