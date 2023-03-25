import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  changeCountry = event => {
    this.setState({countryId: event.target.value})
  }

  activeCountry = () => {
    const {countryId} = this.state

    const filteredData = countryAndCapitalsList.find(
      eachId => eachId.id === countryId,
    )
    return filteredData.country
  }

  render() {
    const {countryId} = this.state
    const country = this.activeCountry()

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="select-container">
            <select
              className="select-option"
              value={countryId}
              onChange={this.changeCountry}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  key={eachItem.id}
                  value={eachItem.id}
                  className="options-text"
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capital">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
