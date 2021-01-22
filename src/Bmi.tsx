import React from 'react';
import { useState } from 'react';



export default function Bmi() {
    const [height, setHeight] = useState<number>(0);
    const [weight, setWeight] = useState<number>(0);
    const [bmi, setBmi] = useState<number>(0);

    const handleHeightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let h = Number(e.target.value);
        executeBmi(h, weight);
    }

    const handleWeightInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        let w = Number(e.target.value);
        executeBmi(height, w);
    }

    const executeBmi = (height: number, weight: number)=>{
        setHeight(height);
        setWeight(weight);
        let bmi = weight / Math.pow(height / 100, 2);
        setBmi(bmi);
    }
    
    return (
        <div>
            <h1>BMI計算</h1>
            <div>
                身長:<input type="text" onChange={handleHeightInput} />cm
                </div>
            <div>
                体重:<input type="text" onChange={handleWeightInput} />kg
                </div>
            <div>BMI:{bmi}</div>

        </div>
    );
}

/*class Bmi extends React.Component<{}, State> {

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
*/