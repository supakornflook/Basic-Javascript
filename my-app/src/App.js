import React from 'react';

class Test extends React.Component {

  printValueInConsole = (firstName, lastName) =>{
    if(firstName == "Shippop"){
      console.log("Best Online Shipping Platform");
    }else{
      console.log("Hello Shippop, My name is "+firstName+" "+lastName);
    }
  }

    render() {
      this.printValueInConsole("Supakorn","Chot");
      this.printValueInConsole("Shippop","Chot");
      return (
        <h1>Test</h1>
      );
    }
  }

export default Test;
