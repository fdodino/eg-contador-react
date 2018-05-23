import React, {Component} from 'react'

export class ContadorComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0
        }
    }

    cambiarContador(n) {
        this.setState({contador: n})
    }

    restar() {
        this.cambiarContador(this.state.contador - 1)
    }

    sumar() {
        this.cambiarContador(this.state.contador + 1)
    }

    render() {
        return (
            <div>
                <a
                    href="#"
                    onClick={(event) => {
                    this.restar()
                }}>-</a>
                &nbsp;
                {this.state.contador}
                &nbsp;
                <a
                    href="#"
                    onClick={(event) => {
                    this.sumar()
                }}>+</a>
            </div>
        )
    }
}