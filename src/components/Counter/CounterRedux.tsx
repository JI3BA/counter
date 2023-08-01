import './Counter.css'
import {Button} from "../Button/Button";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {counterSlice} from "../../store/reducers/counterSlice";

export const CounterRedux = () => {
    const count = useAppSelector(state => state.counterSlice.counter)
    const isSettings = useAppSelector(state => state.counterSlice.isSettings)
    const dispatch = useAppDispatch()
    const { increment, reset } = counterSlice.actions

    return(
        <div className='counter'>
            <div className="screen">
                {!isSettings
                    ? <span className="screen__count">{count}</span>
                    :
                    <div className='settings'>
                        hi

                    </div>
                }

            </div>

            <div className="buttons">
                {!isSettings
                    ?
                    <>
                        <Button className="button"   onClick={() => dispatch(increment())}>inc</Button>
                        <Button className="button"  onClick={() => dispatch(reset())}>reset</Button>
                        <Button className="button" onClick={() => console.log('isSet')}>settings</Button>
                    </>
                    : <Button className="button" onClick={() => console.log('set')}>set</Button>
                }
            </div>
        </div>
    )
}