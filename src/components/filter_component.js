import React from 'react';

export class FilterComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            "Human":false,
            "Mytholog":false,
            "Other":false,
            "male":false,
            "female":false,
            "post_apocalyptic_earth":false,
            "otherOrgin":false,
            "unknown":false,
            "nuptia":false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = (event)=> {
        debugger;
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name.split('.')[1];
        console.log(this.state.Other);
        this.setState({
          [name]: value
        });   
        const obj = [];
        obj.key = target.name.split('.')[0];
        obj.value = target.name.split('.')[1];
        this.props.updatedFilter(obj);        
    }    
    render(){
        return(
            <div>
                <h4>Filters</h4>
                <div>
                   <h5>Species</h5>
                   <div className="checkbox">
                        <label><input type="checkbox" name="species.human" checked={this.state.Human} onChange={this.handleChange}/>Human</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="species.mytholog" checked={this.state.Mytholog} onChange={this.handleChange}/>Mytholog</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="species.other" checked={this.state.Other} onChange={this.handleChange}/>Other species...</label>
                    </div>
                </div>
                <div>
                   <h5>Gender</h5>
                   <div className="checkbox">
                        <label><input type="checkbox" name="gender.male" checked={this.state.male} onChange={this.handleChange}/>Male</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="gender.female" checked={this.state.female} onChange={this.handleChange}/>Female</label>
                    </div>                    
                </div>
                <div>
                   <h5>Origin</h5>
                   <div className="checkbox">
                        <label><input type="checkbox" name="origin.unknown" checked={this.state.unknown} onChange={this.handleChange}/>Unknown</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="origin.post-apocalyptic earth" checked={this.state.post_apocalyptic_earth} onChange={this.handleChange}/>Post-Apocalyptic Earth</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="origin.nuptia 4" checked={this.state.nuptia} onChange={this.handleChange}/>Nuptia 4</label>
                    </div>
                    <div className="checkbox">
                        <label><input type="checkbox" name="origin.otherOrgin" checked={this.state.otherOrgin} onChange={this.handleChange}/>Other Orgins...</label>
                    </div>
                </div>
            </div>
        );
    }
}


/* var React = require("react");

module.exports = React.createClass({
    render:function(){
        return(
            <div>
                <h2>Filters</h2>
                <div>
                   <h3>Species</h3>
                   <div ClassName="checkbox">
                        <label><input type="checkbox" value=""/>Human</label>
                    </div>
                    <div ClassName="checkbox">
                        <label><input type="checkbox" value=""/>Mytholog</label>
                    </div>
                    <div ClassName="checkbox disabled">
                        <label><input type="checkbox" value="" disabled/>Other species...</label>
                    </div>
                </div>
            </div>
        )
    }
}) */