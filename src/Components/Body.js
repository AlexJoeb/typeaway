import React, { Component } from 'react';

export default class Body extends Component {

    constructor(props){
        super(props);

        this.state = {
            message: ``,
            timer: 20,
            percent: 0,
            eventId: null,
            style: {
                color: '',
            }
        }
    }

    componentDidMount = () => {
        this.setState({
            message: ``,
            timer: 20,
            eventId: null,
        })
        this.setState({
            percent: parseFloat((this.state.timer * 5)/100).toFixed(2),
            style: {
                color: `rgba(${this.props.dark ? () => this.hexToRGB("F1F3FB") : () => this.hexToRGB("313131")}, ${this.state.percent})`
            }
        })
    }

    onChange = e => {
        e.persist();
        
        if(this.state.eventId){
            clearInterval(this.state.eventId);
            this.setState({ eventId: null });
        }

        this.setState((prevState) => {
            return {
                timer: 20,
                message: e.target.value,
            }
        });

        
        const timerId = setInterval(() => {
            if(this.state.timer === 0){
                clearInterval(timerId);
                this.setState({
                    message: '',
                    timer: 20,
                    percent: parseFloat((this.state.timer * 5)/100).toFixed(2),
                    eventId: null,
                    style: {
                        color: `rgba(${this.props.dark ? () => this.hexToRGB("F1F3FB") : () => this.hexToRGB("313131")}, ${this.state.percent})`
                    }
                });
                return;
            }
            this.setState((prevState) => {
                return {
                    timer: prevState.timer !== 0 ? prevState.timer - 1 : 0,
                    style: {
                        color: `rgba(${this.props.dark ? this.hexToRGB("F1F3FB") : this.hexToRGB("313131")}, ${this.state.percent})`
                    }
                }
            });
            this.setState({
                percent: parseFloat((this.state.timer * 5)/100).toFixed(2),
            });
        }, 250);

        this.setState({
            percent: parseFloat((this.state.timer * 5)/100).toFixed(2),
            eventId: timerId,
        })
    }

    hexToRGB = (hex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
    }

    render = () => {
        const { dark } = this.props;
        const { style } = this.state;
        return (
            <div className={`body${dark ? '__dark' : ''}`}>
                <textarea 
                    className={`body__textarea${dark ? '__dark' : ''}`}
                    name="textarea"
                    id="textarea"
                    value={this.state.message}
                    onChange={(e) => this.onChange(e)} 
                    style={style}
                    spellCheck={false}
                />
            </div>
        );
    }
}