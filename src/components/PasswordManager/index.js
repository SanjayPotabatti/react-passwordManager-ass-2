import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

class PasswordManager extends Component {
  state = {
    webInput: '',
    usernameInput: '',
    passInput: '',
    passList: [],
    showPass: true,
    searchInput: '',
  }

  onChangeWebInput = event => {
    this.setState({webInput: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passInput: event.target.value})
  }

  onClickAdd = event => {
    event.preventDefault()

    const {webInput, usernameInput, passInput, showPass} = this.state
    const newPassword = {
      id: uuidv4(),
      webInput,
      usernameInput,
      passInput,
    }
    this.setState(prevState => ({
      passList: [...prevState.passList, newPassword],
      webInput: '',
      usernameInput: '',
      passInput: '',
    }))
  }

  onClickDelet = id => {
    this.setState(prevState => ({
      passList: prevState.passList.filter(eachItem => eachItem.id !== id),
    }))
  }

  onChangeInputSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickCheckBox = () => {
    this.setState(prevState => ({
      showPass: !prevState.showPass,
    }))
  }

  render() {
    const {
      passList,
      webInput,
      usernameInput,
      passInput,
      searchInput,
      showPass,
    } = this.state

    const filteredList = passList.filter(eachFilter =>
      eachFilter.webInput.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const listLength = filteredList.length

    return (
      <div className="bgContainer p-2">
        <div className="d-flex justify-content-start m-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logoImage"
          />
        </div>

        <div className="cardContainer1 p-2 mt-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="d-md-none managerImageSm order-0 order-md-1"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="d-none d-md-block managerImageMd order-0 order-md-1"
          />
          <form
            className="inputContainer d-flex flex-column justify-content-center align-items-start order-1 order-md-0 p-4"
            onSubmit={this.onClickAdd}
          >
            <h1 className="headingNew">Add New Password</h1>
            <div className="webInputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="webImg"
              />
              <input
                type="text"
                className="inputEl"
                placeholder="Enter Website"
                onChange={this.onChangeWebInput}
                value={webInput}
              />
            </div>
            <div className="webInputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="webImg"
              />
              <input
                type="text"
                className="inputEl"
                placeholder="Enter Username"
                onChange={this.onChangeUsername}
                value={usernameInput}
              />
            </div>
            <div className="webInputContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="webImg"
              />
              <input
                type="password"
                className="inputEl"
                placeholder="Enter Password"
                onChange={this.onChangePassword}
                value={passInput}
              />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-end">
              <button type="submit" testid="delete" className="btn btn-primary">
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="cardContainer2 mt-3 p-3">
          <div>
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row justify-content-center align-item-center p-1">
                <h1 className="headingNew11 mr-2">Your Passwords</h1>
                <div className="headingNew1 d-flex flex-row justify-content-center align-item-center">
                  <p>{listLength}</p>
                </div>
              </div>
              <div className="webInputContainer1">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="searchImg"
                />
                <input
                  type="search"
                  className="inputEl1"
                  placeholder="Search"
                  onChange={this.onChangeInputSearch}
                  value={searchInput}
                />
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end">
              <input
                type="checkbox"
                id="checkboxLabel"
                onClick={this.onClickCheckBox}
              />
              <label htmlFor="checkboxLabel" className="headingNew11 ml-2">
                Show passwords
              </label>
            </div>
            <ul className="d-flex flex-row">
              {filteredList.map(eachItem => (
                <PasswordItem
                  passDetails={eachItem}
                  key={eachItem.id}
                  onClickDelet={this.onClickDelet}
                  showPass={showPass}
                />
              ))}
            </ul>

            {listLength === 0 && (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="managerImageNoPass"
              />
            )}
            {listLength === 0 && <p className="headingNew">No Passwords</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default PasswordManager
