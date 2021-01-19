import React from 'react';

interface State {
    height: number,
    weight: number,
    bmi: number,
}

class Bmi extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            height: 0,
            weight: 0,
            bmi: 0
        }
    }

    handleHeightInput(e: React.ChangeEvent<HTMLInputElement>) {
        let height = Number(e.target.value);
        this.calcBMI(height, this.state.weight);
    }

    handleWeightInput(e: React.ChangeEvent<HTMLInputElement>) {
        let weight = Number(e.target.value);
        this.calcBMI(this.state.height, weight);
    }

    calcBMI(height: number, weight: number) {
        let bmi = weight / Math.pow(height / 100, 2);
        this.setState({
            bmi: bmi,
            height: height,
            weight: weight
        })
    }

    render() {
        return (
            <div>
                <h1>BMI計算</h1>
                <div>
                    身長:<input type="text" onChange={ this.handleHeightInput.bind(this) } />cm
                </div>
                <div>
                    体重:<input type="text" onChange={this.handleWeightInput.bind(this)} />kg
                </div>
                <div>BMI:{this.state.bmi}</div>

            </div>
        )
    }

}

export default Bmi;