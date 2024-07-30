import classes from './Counter.module.css';
import {useSelector,useDispatch} from "react-redux"
import { counterActions } from '../store/counter';


const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector(state=>state.counter.counter)
  const show = useSelector(state=>state.counter.showcounter)


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
   } ;

  const IncrementHandle = ()=>{
    dispatch(counterActions.increment())
  }

  const increaseHandler = ()=>{
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter}  --</div>}
      <div>
        <button onClick={IncrementHandle}>Increment</button>
        <button onClick={increaseHandler}>increase by 5</button>

        <button onClick={decrementHandler}>Decrement</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
