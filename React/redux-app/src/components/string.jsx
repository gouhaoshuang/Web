import React, { Component } from 'react';

import { connect, Provider } from 'react-redux';
class String extends Component {
    state = {  } 

    handleAdd=()=>{
        this.props.add(10);
    }
    handleSub = () =>{
        this.props.sub(1);
    }
    render() { 
        console.log(this.props.string)
        return (
            <React.Fragment>
                <h3>String : {this.props.string} </h3>
                <button onClick={this.handleAdd}>加法</button>
                <button onClick={this.handleSub}>减法</button>
            </React.Fragment>
        );
    }
}
 
const mapStateToProps = (state,props)=>{
    return {
        string: state.string
    }
}


const mapDispatchToProps = {
    add:(x) =>{
        return {
            type:"add",
            value:x
        }
    },
    sub:(x)=>{
        return{
            type:"sub",
            value:x
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(String);