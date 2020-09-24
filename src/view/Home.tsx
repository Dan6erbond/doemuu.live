import React from "react";
import { compose, bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { increment, decrement } from '../store/reducer/counter/actions';

interface HomeState {
  counter: any;
  dispatchIncrement: any,
  dispatchDecrement: any,
}

function Home({ counter, dispatchIncrement, dispatchDecrement }: HomeState) {
  console.log("Hello World");
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Hello World!</h1>
        <input
          type="button"
          value="INCREMENT"
          onClick={dispatchIncrement}
        />
        <input
          type="button"
          value="DECREMENT"
          onClick={dispatchDecrement}
        />
        <p>{counter}</p>
      </header>
    </div>
  );
}
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      dispatchIncrement: increment,
      dispatchDecrement: decrement
    },
    dispatch
  );

const mapStateToProps = (state: any) => ({
  counter: state.counter
});

export default connect(mapStateToProps, mapDispatchToProps)(Home) as any;