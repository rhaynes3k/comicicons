import React from 'react';
import CharacterCard from './CharacterCard'
import {
  Switch,
  Route,
} from "react-router-dom"

class CharacterContainer extends React.Component {



  render(){
      return (
        <div className='char-cont'>
          <h3> {this.props.name} </h3>
          <Switch>

          <Route path='/home'>
              <div className= 'char-card'>
                {this.props.chars.heros && this.props.chars.heros.map(c => <CharacterCard name='Card Component' chars={c}/>)}
              </div>
          </Route>

            <Route path='/heroes'>
                <div className= 'char-card'>
                  {this.props.chars.heros && this.props.chars.heros.map(c => <CharacterCard name='Hero Town' chars={c}/>)}
                </div>
            </Route>

            <Route path='/villians'>
                <div className= 'char-card'>
                  {this.props.chars.villians && this.props.chars.villians.map(c => <CharacterCard name='Villianville-3'chars={c}/>)}
                </div>
            </Route>

          </Switch>
        </div>
      )
  }
}

export default CharacterContainer
