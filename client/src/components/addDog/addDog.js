import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { addBreedNew, getSearchAllBreed } from '../../actions/index'


function AddDog({ breedLoaded, addBreedNew, getSearchAllBreed }) {
    useEffect(() => { getSearchAllBreed() }, [getSearchAllBreed]);


    const [input, setInput] = useState({
        name: '',
        weightmin: '',
        weightmax: '',
        heightmin: '',
        heightmax: '',
        life_span: '',
        temperaments: []

    });

    function handleSubmit(e) {
        addBreedNew(input);
        e.preventDefault();
    }

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" >
                    Name your bread:
                    <input
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Write here...'
                        value={input.name}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <br />
                <label htmlFor="weightmin">
                    Minimum weight:
                    <input
                        id='weightmin'
                        name='weightmin'
                        type='text'
                        placeholder='Write here...'
                        value={input.weightmin}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <br />
                <label htmlFor="weightmax" >
                    Maximum weight:
                    <input
                        id='weightmax'
                        name='weightmax'
                        type='text'
                        placeholder='Write here...'
                        value={input.weightmax}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <br />
                <label htmlFor="heightmin" >
                    Minimum height:
                    <input
                        id='heightmin'
                        name='heightmin'
                        type='text'
                        placeholder='Write here...'
                        value={input.heightmin}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <br />
                <label htmlFor='heightmax' >
                    Maximum height:
                    <input
                        id="heightmax"
                        name='heightmax'
                        type='text'
                        placeholder='Write here...'
                        value={input.heightmax}
                        onChange={(e) => handleChange(e)}
                    />
                </label>
                <br />
                <br />
                <label htmlFor='life_span' >
                    Life span:
                    <input
                        id='life_span'
                        name='life_span'
                        type='text'
                        placeholder='Write here...'
                        value={input.life_span}
                        onChange={handleChange}
                    />
                    <br />
                </label>
                <br />
                <h3>Temperaments</h3>
                <select id="temperaments" htmlFor="temperaments" name="temperaments" value={input.checkbox} onChange={handleChange}
                    >
                    <option value="Strong">Strong</option>
                    <option value="Curious">Curious</option>
                    <option value="Friendly">Friendly</option>
                    <option value="Dominant">Dominant</option>
                    <option value="Agile">Agile</option>
                    <option value="Sweet Tempered">Sweet Tempered</option>
                    <option value="Fun Loving">Fun Loving</option>
                    <option value="Docile">Docile</option>
                    <option value="Sociable">Sociable</option>
                    <option value="Patient">Patient</option>
                    <option value="Protective">Protective</option>
                    <option value="Joyful">Joyful</option>
                </select>

                <br />
                <br />
                <button type='submit'>Add Dog</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breedLoaded: state.breedLoaded
    }
}

export default connect(null, { addBreedNew, getSearchAllBreed })(AddDog)

