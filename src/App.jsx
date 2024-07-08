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

// import Nav from './Nav'
// import Footer from './Footer'
// import Section from './Section'
// import React from 'react'

// const App = () => {
//   return (
//     <>
//     <Nav/>
//     <Footer/>
//     <Section/>

//     </>
//   )
// }

// export default App

// lecture 21 useRef effect

// import React from 'react'
// import { useState } from 'react'


// const App = () => {
//   const[color, setColor]=useState("red")

//   const test =()=>{
//     setColor("green")
//   }
//   return (
//     <div>
//       <h1 style={{color:color}}>codingOtt</h1>
//       <button onClick={test}>test</button>
//     </div>
//   )
// }

// export default App

/* Another way*/
// import React from 'react'
// import { useRef } from 'react'



// const App = () => {
//   // const title = useRef(null)
//   const input = useRef(null)

//   const test =()=>{
//     // title.current.style.color = "red"
//     // console.log(title.current)
//     console.log(input.current.value)
//   }
//   return (
//     <div>
//       <input ref={input}/>
//       {/* <h1 ref={title}>codingOtt</h1> */}
//       <button onClick={test}>test</button>
//     </div>
//   )
// }

// export default App

/* lecture 22  http request and useEffect*/
// import React, { useState, useEffect } from 'react'



// const App = () => {

//   const [userData, setUserData] = useState([])
//   const [loading, setLoading]=useState(false)

//   useEffect(()=>{
//     fetchData()
//   },[])

//   const fetchData = () => {
//     setLoading(true)
//     fetch('https://jsonplaceholder.typicode.com/users')

//       .then((response) => response.json())


//       .then((user) => {
//         console.log(user)
//         setUserData(user)
//         setLoading(false)
//       })

//       .catch((err) => {
//         console.log(err)
//         setLoading(false)
//       })
//   }
//   return (
//     <div>
//       <div style={{ width: "70%", margin: "0 auto" }}>
//         <h1 style={{ textAlign: "center" }}>coding ott</h1>
//         <button
//           onClick={fetchData}
//           style={{
//             padding: "14px 32px",
//             background: "blue",
//             color: "white",
//             fontWeight: 600,
//             fontSize: "15px",
//             border: "none"
//           }}>fetch data</button>
//         <div style={{ marginTop: 24,display:"flex",flexDirection:"column",gap:"10px" }}>

//          {
//           loading && <h1>Loading</h1>
//          }
//           {
//            userData.map((data,index) => (
//               <div key={index} style={{ border: "1px solid #ccc", padding: 16, boxShadow: "0,0,100px #dddd", background: 'white', borderRadius: 4 }}>
//                 <h1 style={{ padding: 0, margin: 0 }}>{data.name}</h1>
//                 <p style={{ padding: 0, margin: 0, color: "green" }}>{data.email}</p>
//                 <p style={{ padding: 0, margin: 0, color: "green" }}>{data.id}</p>
//                 <p style={{ padding: 0, margin: 0, color: "gray" }}>{data.address.suite}</p>
//                 <p style={{ padding: 0, margin: 0, color: "gray" }}>{data.phone}</p>
//                 <p style={{ padding: 0, margin: 0, color: "gray" }}>{data.company.name}</p>
//                 <p style={{ padding: 0, margin: 0, color: "gray" }}>{data.username}</p>
//                 <p style={{ padding: 0, margin: 0, color: "gray" }}>{data.website}</p>

//               </div>
//             ))
//           }

//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

/* another way*/

// import React, { useEffect, useState } from 'react';

// const App = () => {

//   const[photo,setPhoto]=useState([])

//   console.log(photo)
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/photos');
//         const data = await response.json();
//         // console.log(data)
//         setPhoto(data)
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//     {
//       photo?.map((item)=>(
//         <div>
//           <img src={item.thumbnailUrl} alt="" />
//         <h2>{item.title}</h2>
//         <img src={item.url} alt="" />
//         <p>{item.id}</p>
//         <p>{item.albumId}</p>
//         </div>
//       ))
//     }

//     </div>
//   );
// };

// export default App;

import React from 'react'

const App = () => {

  const test = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')

      .then((response) =>response.json())
       
      .then((data)=>{
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })

  }


  return (
    <div>
      <button onClick={test}>test</button>
    </div>
  )
}

export default App




