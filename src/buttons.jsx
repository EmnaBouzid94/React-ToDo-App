import React, { Component } from 'react'
class ButtonAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
         return(<div >
         
           {this.props.tab.map(el=> <div className="divs">
             
               
                    <button className="completed" onClick={()=>
                        
                         this.setState({tab:this.props.tab.map(()=>
                            (this.props.tab[this.props.tab.indexOf(el)].btn1="Undo") &&(this.props.tab[this.props.tab.indexOf(el)].b=false)
                             )})}>
                                 {el.btn1}
                                 </button>
                    <button className="deleted" onClick={()=>this.setState({tab: this.props.tab.splice(this.props.tab.indexOf(el),1)})}>{el.btn2}</button>
                     {console.log(el.b)}
                    <h3 style={{textDecoration:el.b?"none":"line-through"}}>{el.taskname}</h3>
                    </div>
            )}
            
            </div>
            )
    }
}
 
export default ButtonAdd;