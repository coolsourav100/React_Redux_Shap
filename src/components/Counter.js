import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterAction } from '../Store';

const Counter = () => {
  const counter = useSelector((state)=>state.counter.counter)
  const show = useSelector(state=>state.counter.showCounter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggeleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : null}
      <button onClick={()=>dispatch(counterAction.increment())}>Increment</button>
      <button onClick={()=>dispatch(counterAction.drecement())}>Decrement</button>
      <button onClick={()=>dispatch(counterAction.increase(5))}>Increse by 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
