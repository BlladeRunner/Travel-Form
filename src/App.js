import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegetarian: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
      
    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleChange}                        
                    />
                    <br />
                    <input 
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleChange} 
                    />
                    <br />
                    <input 
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={this.state.age}
                        onChange={this.handleChange} 
                    />
                    <br />
                    
                    <label>
                        <input 
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange}
                        />Male
                        <br />
                        <input 
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                        />Female     
                    </label>                    
                    <br />
                    
                    <label>
                        <select
                            name="destination"                             
                            value={this.state.destination}
                            onChange={this.handleChange}>
                            <option value=""> -- Choose destination -- </option>
                            <option value="Amsterdam">Amsterdam</option>
                            <option value="Barcelona">Barcelona</option>
                            <option value="Sicilia">Sicilia</option>
                        </select>    
                    </label>
                    <br />
                    
                    <label>
                        <input 
                            type="checkbox"
                            name="isVegeterian"
                            checked={this.state.isVegeterian}
                            onChange={this.handleChange}
                        />Vegetarian
                        <br />
                        <input                             
                            type="checkbox"
                            name="isKosher"
                            checked={this.state.isKosher}
                            onChange={this.handleChange}
                        />Kosher
                        <br /> 
                        <input 
                            type="checkbox"
                            name="isLactoseFree"
                            checked={this.state.isLactoseFree}
                            onChange={this.handleChange}
                        />Lactose free
                    </label>
                    <br />                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>                              
                    <p>Vegan: {this.state.isVegeterian ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            </main>
        )
    }
}

export default App
