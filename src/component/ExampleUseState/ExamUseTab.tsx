import React, {useState} from 'react';
import {useTab} from '../../hook/useState';

type ContentType = {
    tab: string,
    content: string
};
const content: ContentType[] = [
    {
        tab: 'Section 1',
        content: 'I\'m the content of the Section 1'
    },
    {
        tab: 'Section 2',
        content: 'I\'m the content of the Section 2'
    }
]

const ExamUseTab = () => {
    const tabs = useTab(0, content);
    return (
        <div>
            <h3>ExamUseTab</h3>
            {content.map((item, idx) => <button onClick={() => tabs?.set(idx)}>{item.tab}</button>)}
            <br/>
            {tabs?.currentItem.content}
        </div>
    );
}
export default ExamUseTab;