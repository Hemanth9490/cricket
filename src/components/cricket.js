import { Component } from "react";
import "./cricket.css";

class Cricket extends Component {
  state = {
    score: 0,
    totalScore: 0,
    wickets: 0,
    allOut:false
  };

  addOne = () => {
    this.setState((previousState) => ({
      totalScore: previousState.totalScore + 1,
    }));
    this.setState({score:1});
  };
  addTwo = () => {
    this.setState((previousState) => ({
      totalScore: previousState.totalScore + 2,
    }));
    this.setState({score:2});

  };
  addThree = () => {
    this.setState((previousState) => ({
      totalScore: previousState.totalScore + 3,
    }));
    this.setState({score:3});

  };
  addFour = () => {
    this.setState((previousState) => ({
      totalScore: previousState.totalScore + 4,
    }));
    this.setState({score:4});

  };
  addSix = () => {
    this.setState((previousState) => ({
      totalScore: previousState.totalScore + 6,
    }));
    this.setState({score:6});

  };
  wicket = () => {
    const { wickets } = this.state;
    if (wickets !== 10) {
      this.setState((previousState) => ({
        wickets: previousState.wickets + 1,
      }));
      this.setState({score:"Wicket"});

    }
    else{
        this.setState({allOut:true})
    }
  };

  render() {
    const { score, totalScore, wickets,allOut } = this.state;
    return (
      <div className="text-center cricket-bg-container">
        <div className="body-container">
          <div className="col-4 m-3 score-container">
            {allOut ? <h1>ALL OUT</h1>:<h1 className="score">{score}</h1>}
          </div>
          <div className="col-8 m-3 score-board-container">
            <div className="scoreboard-heading">
              <h1>Score Board</h1>
              <h1>
                {totalScore}/{wickets}
              </h1>
              {allOut && <h1>ALL OUT</h1>}
            </div>
            <div className="runs-conatiner">
              <h1>Runs</h1>
              <button
                className="btn custom-button m-3"
                onClick={this.addOne}
                type="button"
              >
                1
              </button>
              <button
                className="btn custom-button m-3"
                onClick={this.addTwo}
                type="button"
              >
                2
              </button>
              <button
                className="btn custom-button m-3"
                onClick={this.addThree}
                type="button"
              >
                3
              </button>
              <button
                className="btn custom-button m-3"
                onClick={this.addFour}
                type="button"
              >
                4
              </button>
              <button
                className="btn custom-button m-3"
                onClick={this.addSix}
                type="button"
              >
                6
              </button>
              <button
                className="btn custom-button m-3"
                onClick={this.wicket}
                type="button"
              >
                W
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cricket;
