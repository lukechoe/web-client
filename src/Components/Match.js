

import React, {Component} from 'react';
import changeInfo from './MatchList';


let color;

class Request extends Component{


    handleClick(id){
        console.log(id)
    }

    render(){
        const {onclick, user_id, destination, index} = this.props

        return(
            <div className = "requestContainer" 
                onClick = {onclick} >
                {destination}
            </div>
        )

    }
    

}


export default Request;