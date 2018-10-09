import { Component, ChangeEvent } from 'react';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

interface ISearchBarProps {
    fetchWeather?: Function;  
}

interface ISearchBarState {
    term: string;
}

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {

    constructor(props: ISearchBarProps) {
        super(props);

        this.state = { term: '' };
        
    }

    onInputChange(e: ChangeEvent<HTMLInputElement>){
        this.setState({term: e.target.value});
    }

    onFormSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(this.props.fetchWeather){
            
            this.props.fetchWeather(this.state.term);
        }
           
        this.setState( { term: '' } );
    }

    render() {
        const spanStyle: React.CSSProperties = {
            marginLeft: "auto",

        }
        const buttonStyle: React.CSSProperties = {
            backgroundColor: "white",
            color: "black"
        }
        
        return (<form className="input-group" onSubmit={(event) => this.onFormSubmit(event)}>
            <input placeholder="Get five-day forecast"
                className="col form-control"
                value={this.state.term}
                onChange={(event) => this.onInputChange(event)} />
            <span className="input-group-button" style={spanStyle} >
                <button type="submit" className="btn btn-secondary" style={buttonStyle}>Submit</button>
            </span>
        </form>);
    }
}

function mapDispatchToProps(dispatch: any){
    return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);