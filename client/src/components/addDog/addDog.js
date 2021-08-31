import React, { useState } from "react";
import { connect } from 'react-redux';
import { addBreedNew } from '../../actions/index'


export function AddDog() {
    const [input, setInput] = useState([]);

    function handleSubmit(e) {
        alert(`¡The breed has been successfully created!`)
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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name your bread:
                    <br />
                    <input
                        name='name'
                        type='text'
                        placeholder='Write here...'
                        value={input.name}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Minimum weight of your breed:
                    <br />
                    <input
                        name='weightmin'
                        type='text'
                        placeholder='Write here...'
                        value={input.weightmin}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Maximum weight of your breed:
                    <br />
                    <input
                        name='weightmax'
                        type='text'
                        placeholder='Write here...'
                        value={input.weightmax}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Minimum height of your breed:
                    <br />
                    <input
                        name='heightmin'
                        type='text'
                        placeholder='Write here...'
                        value={input.heightmin}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Maximum height of your breed:
                    <br />
                    <input
                        name='heightmax'
                        type='text'
                        placeholder='Write here...'
                        value={input.heightmax}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Life span of your breed:
                    <br />
                    <input
                        name='life_span'
                        type='text'
                        placeholder='Write here...'
                        value={input.life_span}
                        onChange={handleChange}
                    />
                    <br />
                </label>
                <br />
                <label>
                    Temperaments of your breed:
                    <br />
                    <select multiple={true} value={[
                        "Stubborn", "Curious", "Playful", "Adventurous", "Active", "Fun loving",
                        "Aloof", "Clownish", "Dignified", "Independent", "Happy", "Wild", "Hardworking",
                        "Dutiful", "Outgoing", "Friendly", "Alert", "Confident", "Intelligent", "Courageous",
                        "Loyal", "Brave", "Docile", "Responsive", "Composed", "Receptive", "Faithful", "Loving",
                        "Protective", "Trainable", "Responsible", "Energetic", "Gentle", "Affectionate", "Devoted",
                        "Assertive", "Dominant", "Strong Willed", "Obedient", "Reserved", "Kind", "Sweet Tempered",
                        "Tenacious", "Attentive", "Steady", "Bold", "Proud", "Reliable", "Fearless", "Lively",
                        "Self assured", "Cautious", "Eager", "Good-natured", "Spirited", "Companionable",
                        "Even Tempered", "Rugged", "Fierce", "Refined", "Joyful", "Agile", "Amiable", "Excitable",
                        "Determined", "Self confidence", "Hardy", "Calm", "Good tempered", "Watchful",
                        "Hard working", "Feisty", "Cheerful", "Sensitive", "Easygoing", "Adaptable", "Trusting",
                        "Lovable", "Territorial", "Keen", "Familial", "Rational", "Bright", "Quick", "Powerful",
                        "Gay", "Stable", "Quiet", "Inquisitive", "Strong", "Sociable", "Patient", "Suspicious",
                        "Great hearted", "Merry", "Vocal", "Tolerant", "Mischievous", "People-Oriented", "Bossy",
                        "Cunning", "Athletic", "Boisterous", "Cooperative", "Trustworthy", "Self important",
                        "Respectful", "Thoughtful", "Generous", "Cat-like", "Sturdy"]}
                    >
                    </select>
                </label>
                <br />
                <button type='submit'>Add Dog</button>
            </form>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addBreedNew: o => dispatch(addBreedNew(o))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(addBreedNew)

