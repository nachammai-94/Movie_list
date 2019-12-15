import React from 'react';
import {Container,Row,Col} from 'react-grid-system';
import Badge from 'react-bootstrap/Badge'
var _ = require('lodash');

export class ListComponent extends React.Component{
    constructor(props){
        super(props);
        this.state  = {
            "speciesList" : [],
            "alteredList":[],
            "error":false,
            "filter":[]
        }
        this.FilterComponent = this.FilterComponent.bind(this);
    }
    componentDidMount() {        
        fetch("https://rickandmortyapi.com/api/character/")
            .then(res => res.json())
            .then(
                (result)=> {                    
                    this.setState({
                        speciesList : _.map(result.results,function(o){
                            var list = [];
                            list["id"] = o.id;
                            list["name"] = o.name;
                            list["status"] = o.status;
                            list["species"] = o.species;
                            list["gender"] = o.gender;
                            list["origin"] = o.origin.name;
                            list["location"] = o.location.name;
                            return list
                        })
                    })
                    this.setState({
                        alteredList : _.map(result.results,function(o){
                            var list = [];
                            list["id"] = o.id;
                            list["name"] = o.name;
                            list["status"] = o.status;
                            list["species"] = o.species;
                            list["gender"] = o.gender;
                            list["origin"] = o.origin.name;
                            list["location"] = o.location.name;
                            return list
                        })
                    });                    
                    console.log(this.state.speciesList);
                },
                (error) => {                    
                    this.setState ({error:true})
                }
            )        
    }
    UNSAFE_componentWillReceiveProps(nextprops){
        debugger;
        if(nextprops.UpdatedKey !== ""){   
            this.state.filter.push(nextprops.UpdatedKey);
        }
        this.FilterComponent();
    }
    FilterComponent(){
        debugger;
        for(let i=0; i < this.state.filter.length; i++){
            var key = this.state.filter[i].key;
            var value = this.state.filter[i].value;
            if(this.state.filter.length > 1){
                this.state.alteredList = _.map(this.state.alteredList,function(o){
                    if(o[key].toLowerCase() === value) return o;
                });
            }
            else{
                this.state.alteredList = _.map(this.state.speciesList,function(o){
                    if(o[key].toLowerCase() === value) return o;
                });
            }
            this.state.alteredList = _.without(this.state.alteredList,undefined);
        }
    }
    render(){
        return(
            <Container>
                <Row>
                    <Col lg={12}>
                    { this.state.filter.map( el =>
                            <div>
                                <Badge variant="secondary" value={el.value}>{el.value}<span>X</span></Badge>                                
                            </div> 
                        )
                    }
                    </Col>
                </Row>
                <Row>
                    {this.state.alteredList.map( sp => 
                        <Col lg= {3}>
                            <Row>
                                <Col lg={12}>{sp.name}</Col>
                            </Row>
                            <Row>
                                <Col lg= {12}><img src={sp.image} alt="Img not available"/></Col>
                            </Row>
                            <Row>
                                <Col lg= {4}>{sp.id}</Col>
                                <Col lg= {8}> created on {sp.created}</Col>
                            </Row>
                            <Row>
                                <Col lg= {6}>Status</Col>
                                <Col lg= {6}>{sp.status}</Col>
                            </Row>
                            <Row>
                                <Col lg= {6}>Species</Col>
                                <Col lg= {6}>{sp.species}</Col>
                            </Row>
                            <Row>
                                <Col lg= {6}>Gender</Col>
                                <Col lg= {6}>{sp.gender}</Col>
                            </Row>
                            <Row>
                                <Col lg= {6}>Origin</Col>
                                <Col lg= {6}>{sp.origin}</Col>
                            </Row>
                            <Row>
                                <Col lg= {6}>Last Location</Col>
                                <Col lg= {6}>{sp.location}</Col>
                            </Row>
                        </Col>
                    )}
                </Row>
            </Container>
            
        )
    }
}