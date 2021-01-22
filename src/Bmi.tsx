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

