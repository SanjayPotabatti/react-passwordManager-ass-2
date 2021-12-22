import './index.css'

const PasswordItem = props => {
  const {passDetails, onClickDelet, showPass} = props
  const {id, webInput, usernameInput, passInput} = passDetails

  const onDelete = () => {
    onClickDelet(id)
  }

  return (
    <li className="listItem d-flex flex-row justify-content-between align-items-center p-2 mb-2">
      <div className="d-flex flex-row justify-content start align-items-center">
        <div className="weblogo mr-3">
          <h1 className="initialHeading">{webInput[0].toUpperCase()}</h1>
        </div>
        <div>
          <p className="webLink p-0 m-0">{webInput}</p>
          <p className="webLink p-0 m-0">{usernameInput}</p>
          {showPass ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="starImg"
            />
          ) : (
            <p className="webLink p-0 m-0">{passInput}</p>
          )}
        </div>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="deletImg"
          onClick={onDelete}
        />
      </div>
    </li>
  )
}

export default PasswordItem
