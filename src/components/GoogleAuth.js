import React from 'react';

class GoogleAuth extends React.Component{
    state = { isSignedIn:null};
    componentDidMount() {
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId:'146436983464-0bkqbjfj6qeljds6g3nast9uo9uekeuu.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
              this.auth = window.gapi.auth2.getAuthInstance();
              this.setState ({isSignedIn: this.auth.isSignedIn.get()})
            });
        });
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>We are dead We are all dead</div>;
        } else if (this.state.isSignedIn){
        return <div>We are alive</div>;
        }else 
        { 
        return<div> you are a dead man</div>;
        }
    }
    render()
    {
        return <div>{this.renderAuthButton()}</div>;
    }
}
export default GoogleAuth;