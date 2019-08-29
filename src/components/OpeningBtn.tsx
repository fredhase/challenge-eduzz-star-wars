import React from 'react';

class OpeningButton extends React.Component<any, any>{
    state = {
        shown: this.props.shown,
    }

    handleClick = () => {
        this.setState({ shown: !this.state.shown });
    }

    render(){
        return(
            <>
                <div>
                    { this.state.shown === false && 
                        <button onClick={this.handleClick}>
                            Show Opening
                        </button>}
                </div>        
                <div>
                    { this.state.shown === true &&
                        <div>
                            <button onClick={this.handleClick}>
                                Hide Opening
                            </button>
                            <p style={{display: "block"}}>
                                {this.props.opening}
                            </p>
                        </div>}  
                </div>
            </>                    
        );
    }
}

export default OpeningButton;