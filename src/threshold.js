import React from 'react';

class Threshold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      int: 0,
      aboveNumbers: null,
      belowNumbers: null
    }

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.belowAboveNumbers = this.belowAboveNumbers.bind(this);
  }
  
  belowAboveNumbers () {
    
    let arr = JSON.parse("[" + this.state.value + "]");      
    let aboveNumbersCounter = 0;
    let belowNumbersCounter = 0;
    for(let val of arr) {
        if(val < this.state.int) { 
          belowNumbersCounter++;
        } else if (val > this.state.int) {
          aboveNumbersCounter++;
        }  
    }
      this.setState({
        aboveNumbers: aboveNumbersCounter,
        belowNumbers: belowNumbersCounter
      });
  };

  handleChange1(event) {
    const value = event.target.value;
    this.setState({
      value: value
    });
  }
  handleChange2(event) {
    const int = event.target.value;
    this.setState({
      int: int
    });
  }
  handleSubmit(event) {
    this.belowAboveNumbers();
    event.preventDefault();
  }

  render() {
    
    return (
       <div className="col-1-of-2">
        <h2># 1 Solution</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
          Enter Numbers:
            <input type="text" value={this.state.value} onChange={this.handleChange1} className="arrImput" placeholder="1, 2, 3, e.g." />
          </label>
          <label>
          Enter Threshold:
            <input type="number" int={this.state.int} onChange={this.handleChange2} className="intImput" />
          </label>
           <input type="submit" value="Submit" />
        </form>
        <div><p>Above Numbers: {this.state.aboveNumbers}</p>
             <p>Below Numbers: {this.state.belowNumbers}</p>
        </div>
       </div>      
    );
  }
}

export default Threshold;