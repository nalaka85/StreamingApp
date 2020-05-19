import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';

class StreamEdit extends  React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }
    
    render(){
        //console.log(this.props.streams);
        console.log(this.props);

        if (!this.props.stream){
            return <div>loading...</div>
        }
        return (
            
        <div>
            
            <h2>{this.props.stream.title}</h2>
          
             </div>
        );
 
    }

}

const mapStateToProps =(state,ownProps) => {
   // console.log(nalaka);
 return{stream: state.streams[ownProps.match.params.id]};
};
export default connect(mapStateToProps,{fetchStream})(StreamEdit);