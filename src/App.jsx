// jsx, jsx expression, style
// function App() {
//   var x = 20
//   var y = 10
//   var z = x + y

//   // console.log(z)

//   return (
//     <div>
//       <h1>An{z - 5}and</h1>
//       <p style={{color:"blue",backgroundColor:"cyan"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellendus.</p>
//     </div>
//   )
// }

// export default App;

// function components*********
// import React, { useState } from 'react';

// const Greeting = (props) => {
//   const [name, setName] = useState(props.initialName);

//   return (
//     <div>
//       <h1>Hello, {name}!</h1>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//     </div>
//   );
// };

// export default Greeting;

// ******class compinents******
// import React, { Component } from 'react';

// class Greeting extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { name: props.initialName };
//   }

//   handleChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.state.name}!</h1>
//         <input type="text" value={this.state.name} onChange={this.handleChange} />
//       </div>
//     );
//   }
// }

// export default Greeting;

// ************day 1 to 4**************

// import React from 'react'

// const App = () => {

//   var x = 10;
//   return (
//     <div>

//       <nav style={{color:"red", backgroundColor:"cyan",width:"100%"}}>
//         <ul style={{padding:"0px",margin:"0px", display:"flex",justifyContent:"space-around",listStyle:"none"}}>
//           <li ><a style={{textDecoration:"none", padding:"5px",display:"block"}} href="#">home</a></li>
//           <li><a style={{textDecoration:"none",padding:"5px",display:"block"}} href="#">About</a></li>
//           {/* <li><a href="#">About{JSON.stringify (new Date())}</a></li> */}
//           <li><a style={{textDecoration:"none",padding:"5px",display:"block"}} href="#">services</a></li>
//         </ul>
//       </nav>

//       <section style={{width:"75%",padding:"35px",backgroundColor:"#21212121",margin:'40px auto'}}>
//         this is the section
//       </section>

//       <footer style={{width:'100%', backgroundColor:'black', color:'white',padding:100}}>
//         this the footer
//       </footer>
//     </div>
//   )
// }

// export default App

import Nav from './Nav'
import Footer from './Footer'
import Section from './Section'
import React from 'react'

const App = () => {
  return (
    <>
    <Nav/>
    <Footer/>
    <Section/>
    
    </>
  )
}

export default App



