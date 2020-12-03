import React from 'react';
import LvList from './LvList';
import LvForm from './LvForm';
import Header from './header';
class LvApp extends React.Component{
    constructor(props){
    
        super(props);
        this.ids=1;
        this.state={
                todos:[]
        };
        
        this.addItem=this.addItem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
    }
    deleteItem(id){
        let newtodos=this.state.todos.filter((item)=>{
            return !(item.id==id)
        });
          this.setState({
            todos:newtodos
        });
    }
    addItem(value){
       this.state.todos.unshift(
            {
                id:this.ids++,
                text:value,
                time:(new Date()).toLocaleString(),
                done:0
            }
        )
        this.setState({
            todos:this.state.todos
        });
    }
    render(){
        return (
            <div>
            <Header/>
            <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="panel panel-default">
                    <div className="panel-headingbg-danger">
                      <h1 className="text-center ">Level Up Feedback Dashboard</h1>
                      <hr/>
                    </div>
                    <div className="panel-body">
                      <LvList deleteItem={this.deleteItem}
                       data={this.state.todos}/>
                      <LvForm addItem={this.addItem}/>
                    </div>
                </div> 
            </div>
            </div>
          
        );
    }
}
export default LvApp;