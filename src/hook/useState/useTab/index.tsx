import {useState} from 'react';

const useTab = (initalIndex: number, content: any[]) => {
    const [currentIdx, setCurrentIdx] = useState(initalIndex);
    if (content == null || !Array.isArray(content)) {
        return;
    }
    return {
        currentItem: content[currentIdx],
        set: setCurrentIdx
    }
}
export default useTab;