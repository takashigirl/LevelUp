import React from 'react';
import LvItem from './LvItem';
class LvList extends React.Component{
    render(){
        let todos=this.props.data;
       
        let todoItems=todos.map(item=>{
            return <LvItem deleteItem={this.props.deleteItem}
             key={item.id} data={item}/>
        });
        
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Feedback Dashboard</th>
                    </tr>
                </thead>
                <tbody>
                    {todoItems}
                </tbody>
                
            </table>
          
        );
    }
}
export default LvList;