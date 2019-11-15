import React from 'react';

class Rotate extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      str: "",
      rotationIndex: 0,
    }
    this.handleChangeStr = this.handleChangeStr.bind(this);
    this.handleChangeInt = this.handleChangeInt.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.rotateChar = this.rotateChar.bind(this);
  }
 // method that is rotating the string characters by given number
  rotateChar() {
     let str = this.state.str;
     let rotationIndex = this.state.rotationIndex;
     let newString = "";
     let overflow = "";
     let strRemainder = str.slice(0, str.length - rotationIndex)
     overflow = str.slice(str.length - rotationIndex);
     newString = overflow.concat(strRemainder)
     this.setState({
        str: newString
     });
    console.log(newString);
  };
  handleChangeStr(event) {
    const str = event.target.value;
    this.setState({
      str: str
    });
  }
  handleChangeInt(event) {
    const rotationIndex = event.target.value;
    this.setState({
      rotationIndex: rotationIndex
    });
  }

  handleSubmit(event) {
    this.rotateChar();
    event.preventDefault();
  }

  render() { 
    return (
       <div className="col-1-of-2">
        <h2># 2 Solution</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
          Enter Text:
            <input type="text" str={this.state.str} onChange={this.handleChangeStr} className="arrImput" placeholder="text" />
          </label>
          <label>
          Enter Rotation Value:
            <input type="number" int={this.state.rotationIndex} onChange={this.handleChangeInt} className="intImput" />
          </label>
           <input type="submit" value="Submit" />
        </form>
        <div>
          <p>Result: {this.state.str}</p>
        </div>
       </div>    
    );
  }
}

export default Rotate;