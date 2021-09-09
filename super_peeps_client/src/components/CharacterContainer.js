import React from 'react';
import CharacterCard from './CharacterCard'
import Search from './Search'
import CharDetails from './CharDetails'
import {
  Switch,
  Route,
} from "react-router-dom"
import { useParams } from 'react-router-dom'

class CharacterContainer extends React.Component {



  render(){
      return (
        <div>
          <h3> {this.props.name} </h3>
          <Switch>

            <Route path='/home'>
              <div className='bg1'>
                <div className='container'>
                  {this.props.chars.heros && this.props.chars.heros.map(c => <CharacterCard name='Card Component' chars={c} />)}
                  {this.props.chars.villians && this.props.chars.villians.map(c => <CharacterCard name='Hero Town' chars={c} />)}
                </div>
              </div>
            </Route>

            <Route path='/chars/:id'>
              <div className='char-cont'>
                {<CharDetails dets={this.props.chars} />}
              </div>
            </Route>
            <Route path='/heroes'>
              <div className='char-form'>
                <Search hero={this.props.chars.heros} />
              </div>
              <div className='container'>
                {this.props.chars.heros && this.props.chars.heros.map(c => <CharacterCard name='Hero Town' chars={c} />)}
              </div>
            </Route>

            <Route path='/villians'>
              <div className='char-form'>
                <Search villians={this.props.chars.villians} />
              </div>
              <div className='container'>
                {this.props.chars.villians && this.props.chars.villians.map(c => <CharacterCard name='Hero Town' chars={c} />)}
              </div>
            </Route>




          </Switch>
        </div>
      )
      debugger
  }
}

export default CharacterContainer
