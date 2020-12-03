import React from 'react';
class LvItem extends React.Component{
    delete(){
        this.props.deleteItem(this.props.data.id);
    }
    render(){
        let {text,time,done,id}=this.props.data;
        return (
           <tr>
               <td>{time}<br/><br/>{text}</td>
                <td>
                    <br/>
                    <br/>
                  <button> <a onClick={this.delete.bind(this)}>delete </a></button>
                </td>
           </tr>
        );
    }
}
export default LvItem;