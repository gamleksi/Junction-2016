import React from "react";

export default React.createClass({
    getInitialState:function(){
        return {expand: false,
            selected: false
        }
    }
    ,expandClick: function(){
        console.log("clicked")
        this.setState({
            expand:!(this.state.expand),
            select:this.state.select
        })
    } 
    ,selectClick: function(){
        console.log("clicked")
        this.setState({
            expand: this.state.expand,
            select:!(this.state.select)
        })
    }
    ,render:function(){
        var classColor = "active"
        if(this.state.select){
            classColor = "success" 
        }
       var values = []
       var values2 = [] 
                    for(var key in this.props.hackerInfo){
                        if(key !=="motivation" && key !== "skillDescription"){
                            if(this.props.visibleColumns[key]) {
                                var value = this.props.hackerInfo[key]
                                values.push(<p key={value}>{value}</p>)
                            }
                }   else {
                    if(this.props.visibleColumns[key]) {
                                var value = this.props.hackerInfo[key]
                                values2.push(<p key={value}><b>{key}</b><br/><br/><br/>{value}</p>)
                            }
                }
            }


        if(this.state.expand == true){
             return(
            <tr  class={classColor} height="300" >
                    <td>
                        <div>
                            {values}
                        </div>
                    </td>
                      <td>
                        <div>
                            {values2}
                        </div>
                    </td>
                     <td>
                        <div>
                            <button onClick={this.expandClick}>EXPAND</button>
                             <button onClick={this.selectClick}>SELECT</button>
                        </div>
                    </td>
                      
                </tr>

                )
        }
        else {

                var values = []
                    for(var key in this.props.hackerInfo){
                        if(key !=="motivation" && key !== "skillDescription"){
                            if(this.props.visibleColumns[key]) {
                                var value = this.props.hackerInfo[key]
                                values.push(<td key={value}>{value}</td>)
                            }
                }
            }
            return(

                <tr  class={classColor} >
                    {values}
                  
                    <td>
                        <div>
                            <button onClick={this.expandClick}>EXPAND</button>
                             <button onClick={this.selectClick}>SELECT</button>
                        </div>
                    </td>
                </tr>
                )
        }
    }
});