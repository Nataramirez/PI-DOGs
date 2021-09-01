import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navHome.css';
import { connect } from 'react-redux'
import LogoHenry from '../../../pictures/logo-whiteHenry.png';
import { getSearchAllBreed } from '../../../actions/index'

export class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      breedLoaded: []
    }
  }

  handleChange(event) {
    this.setState({
      breedLoaded: event.target.value
    })
  }

  handleSubmit() {
    //event.preventDefault(); // permite que no perder el estado
    this.props.getSearchAllBreed(this.state.breedLoaded)
  }

  render() {
    return (

      <div className="grid-block">
        <img className="logoNav" src={LogoHenry} alt='Logo de Soy Henry' />
        <h3>Individual Project - Henry Dogs</h3>

       <nav>
       <Link to='/dogs' onClick={() => this.handleSubmit()}>
        <button type="button" >To go...</button>
        </Link>
       </nav>
       

      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    breeds: state.breedLoaded //estado global 
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getSearchAllBreed: (breeds) => dispatch(getSearchAllBreed(breeds)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);