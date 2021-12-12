import {useInput} from '../../hook/useState';
import React from 'react';

const ExamUseInput = ({validator}:{validator?: (value: string) => boolean}) => {
    const name =  useInput('JE', validator);
    return (
        <div>
            <h3>ExamUseInput</h3>
            <input type="text" placeholder="Name" {...name}/>
        </div>
    );
}

export default ExamUseInput;