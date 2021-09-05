import React from 'react';
import CharacterCard from './CharacterCard'
import Search from './Search'
import {
  Switch,
  Route,
} from "react-router-dom"

class CharacterContainer extends React.Component {



  render(){
    console.log(this.props.chars.heros)
      return (
        <div>
          <h3> {this.props.name} </h3>
          <Switch>

          <Route path='/home'>
              <div>
                {this.props.chars.heros && this.props.chars.heros.map(c => <CharacterCard name='Card Component' chars={c}/>)}
              </div>
          </Route>

            <Route path='/heroes'>
                <div className='char-form'>
                  <Search />
                </div>
                <div className='char-cont'>
                  {this.props.chars.heros && this.props.chars.heros.map(c => <CharacterCard name='Hero Town' chars={c}/>)}
                </div>
            </Route>

            <Route path='/villians'>
                <div>
                  {this.props.chars.villians && this.props.chars.villians.map(c => <CharacterCard name='Villianville-3'chars={c}/>)}
                </div>
            </Route>

          </Switch>
        </div>
      )
  }
}

export default CharacterContainer
