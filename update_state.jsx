import React from 'react';

class App extends React.Component {
   constructor() {
      super();
  
      this.state = {
         data: []
      }
 
      this.setStateHandler = this.setStateHandler.bind(this);
      //Trong ES6  khi bạn viết 1 function trong class, thì nó vẫn chưa được đinh nghĩa trong class, 
      //bạn phải định nghĩa nó trong constructor:  this.setStateHandler = this.setStateHandler.bind(this);
   };
   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data.slice();
   myArray.push(item);
      this.setState({data: myArray})
   };
   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}
export default App;
