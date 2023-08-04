import './Counter.css'
import {Button} from "../Button/Button";
import {ChangeEvent, useEffect, useState} from "react";
import {Input} from "../Input/Input";

export const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [startValue, setStartValue] = useState<string>('0')
    const [maxValue, setMaxValue] = useState<string>('5')
    const [isSettings, setIsSettings] = useState<boolean>(false)

    const getNewCount = () => {
        setIsSettings(false)
        setCount(Number(startValue))
    }

    useEffect(() => {
        const localStartValue = localStorage.getItem('start')
        const localMaxValue = localStorage.getItem('max')
        if(localStartValue){
            const start = JSON.parse(localStartValue)
            setStartValue(start)
            setCount(Number(start))
        }
        if(localMaxValue){
            const max = JSON.parse(localMaxValue)
            setMaxValue(max)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('start', startValue)
        localStorage.setItem('max', maxValue)
    }, [startValue, maxValue])

    return(
        <div className='counter'>
            <div className="screen">
                {!isSettings
                    ? <span className="screen__count">{count}</span>
                    :
                    <div className='settings'>
                        <div className="setting">
                            <span className='setting__name'>Max value</span>
                            <Button className="setting__button" disabled={Number(maxValue) < 1} onClick={() => setMaxValue((Number(maxValue)-1).toString())}>-</Button>
                            <Input className='setting__input' type='number' placeholder='Max' value={maxValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setMaxValue(e.target.value)} />
                            <Button className="setting__button" onClick={() => setMaxValue((Number(maxValue)+1).toString())}>+</Button>
                        </div>

                        <div className="setting">
                            <span className='setting__name'>Start value</span>
                            <Button className="setting__button" disabled={Number(startValue) < 1} onClick={() => setStartValue((Number(startValue)-1).toString())}>-</Button>
                            <Input className='setting__input' type='number' placeholder='Start' value={startValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setStartValue(e.target.value)} />
                            <Button className="setting__button" onClick={() => setStartValue((Number(startValue)+1).toString())}>+</Button>
                        </div>

                    </div>
                }

            </div>

            <div className="buttons">
                {!isSettings
                    ?
                    <>
                        <Button className="button" disabled={count === Number(maxValue)}  onClick={() => setCount(count+1)}>inc</Button>
                        <Button className="button" disabled={count === Number(startValue)} onClick={() => setCount(Number(startValue))}>reset</Button>
                        <Button className="button" onClick={() => setIsSettings(true)}>settings</Button>
                    </>
                    : <Button className="button" disabled={Number(startValue) >= Number(maxValue)} onClick={getNewCount}>set</Button>
                }
            </div>
        </div>
    )
}