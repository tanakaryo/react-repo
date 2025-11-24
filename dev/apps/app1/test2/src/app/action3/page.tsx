'use client'

import { useState } from "react";

const Practice = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(10);
    const [count3, setCount3] = useState(100);

    return (
        <>
        <p>ボタン1を{count1}回</p>
        <button onClick={() => {
            setCount1(count1 + 1);
        }}>ボタン1</button>
        <p>ボタン2を{count2}回</p>
        <button onClick={() => {
            setCount2(count2 + 10);
        }}>ボタン2</button>
        <p>ボタン3を{count3}回</p>
        <button onClick={() =>{
            setCount3(count3 + 100);
        }}>ボタン3</button>
        </>
    );
};

export default Practice;