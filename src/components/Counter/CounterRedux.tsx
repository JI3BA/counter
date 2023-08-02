import './Counter.css'
import {Button} from "../Button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {counterSlice} from "../../store/reducers/counterSlice";
import {Input} from "../Input/Input";
import {ChangeEvent} from "react";

export const CounterRedux = () => {
    const count = useAppSelector(state => state.counterSlice.counter)
    const isSettings = useAppSelector(state => state.counterSlice.isSettings)
    const maxValue = useAppSelector(state => state.counterSlice.maxValue)
    const minValue = useAppSelector(state => state.counterSlice.minValue)
    const dispatch = useAppDispatch()
    const {
        increment,
        reset,
        isSetting,
        increaseMaxValue,
        decreaseMaxValue,
        changeMaxValue,
        changeMinValue,
        decreaseMinValue,
        increaseMinValue } = counterSlice.actions

    return(
        <div className='counter'>
            <div className="screen">
                {!isSettings
                    ? <span className="screen__count">{count}</span>
                    :
                    <div className='settings'>
                        <div className="setting">
                            <span className='setting__name'>Max value</span>
                            <Button className="setting__button" disabled={Number(maxValue) < 1} onClick={() => dispatch(decreaseMaxValue())}>-</Button>
                            <Input className='setting__input' type='number' placeholder='Max' value={maxValue.toString()} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeMaxValue(e.target.value))} />
                            <Button className="setting__button" onClick={() => dispatch(increaseMaxValue())}>+</Button>
                        </div>

                        <div className="setting">
                            <span className='setting__name'>Start value</span>
                            <Button className="setting__button" disabled={minValue < 1} onClick={() => dispatch(decreaseMinValue())}>-</Button>
                            <Input className='setting__input' type='number' placeholder='Start' value={minValue.toString()} onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(changeMinValue(e.target.value))} />
                            <Button className="setting__button" onClick={() => dispatch(increaseMinValue())}>+</Button>
                        </div>

                    </div>
                }

            </div>

            <div className="buttons">
                {!isSettings
                    ?
                    <>
                        <Button className="button" disabled={count === maxValue} onClick={() => dispatch(increment())}>inc</Button>
                        <Button className="button" disabled={count > minValue}onClick={() => dispatch(reset())}>reset</Button>
                        <Button className="button" onClick={() => dispatch(isSetting())}>settings</Button>
                    </>
                    : <Button className="button" onClick={() => dispatch(isSetting())}>set</Button>
                }
            </div>
        </div>
    )
}