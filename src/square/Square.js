import React from 'react';
import './square.css';

class Square extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         value: null,
      };
   }

   render() {
      return (
         <button
            className="square"
         >
            {this.state.value}
         </button>
      );
   }
}

export default Square;