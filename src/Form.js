// import React from "react";
// import { useState } from "react";

// function Form() {
//   const [form, setform] = useState({
//     Name: "",
//     age: "",
//     Email: "",
//     role: "",
//     definietly: "",
//     maybe: "",
//     notsure: "",
//     Fcc: "",
//     frontendprojects: "",
//     backendprojects: "",
//     datavisualization: "",
//   });
//   const ChangeHandler = (e, field) => {
//     useState({
//       [field]: e.target.value,
//     });
//   };
//   const onCreateName = () => {
//     console.log(setform);
//   };

//   const ChangeCheckboxHandler = (e, field) => {
//     useState({
//       [field]: e.target.checked,
//     });
//     console.log(e);
//   };
//   return (
//     <div>
//       <div>
//         <div>
//           <div>
//             <html lang='en'>
//               <head>
//                 <title>Document</title>
//               </head>
//               <body>
//                 <div class='one'>
//                   <h1>Survey form</h1>
//                 </div>
//                 <div class='two'>
//                   <h2>Let us kow how we can improve FreeCodeCsmp</h2>
//                 </div>
//                 <div class='three'>
//                   <div class='four'>
//                     <div class='ty'>
//                       <h3>Name :</h3>
//                       <h3>age :</h3>
//                       <h3>Email :</h3>
//                     </div>
//                     <div class='nin'>
//                       which option best describes your current role :
//                     </div>
//                     <div class='tey'>
//                       how would ikely is that u would recomend FreeCodeCamp to a
//                       friend :
//                     </div>
//                     <div class='as'>what do you like most i Fcc :</div>
//                     <div class='df'>
//                       think that should be improved in the future :
//                     </div>
//                   </div>

//                   <div class='five'>
//                     <div class='six'>
//                       <input
//                         type='text'
//                         name='Name'
//                         value={this.state.Name}
//                         // onChange={(e) => this.changeHandler(e, "Name")}
//                         onChange={(e) =>
//                           this.setState({ Name: e.target.value })
//                         }
//                       />
//                     </div>
//                     <div class='seven'>
//                       <input
//                         type='text'
//                         name='age'
//                         value={this.state.age}
//                         onChange={(e) => this.changeHandler(e, "age")}
//                       />
//                     </div>
//                     <div class='eight'>
//                       <input
//                         type='text'
//                         name='Email'
//                         value={this.state.Email}
//                         onChange={(e) => this.changeHandler(e, "Email")}
//                       />
//                     </div>
//                     <div class='ten'>
//                       <input
//                         type='text'
//                         name='role'
//                         value={this.state.role}
//                         onChange={(e) => this.changeHandler(e, "role")}
//                       />
//                     </div>
//                     <div class='qw'>
//                       <form action='action/page.php'>
//                         <input
//                           type='checkbox'
//                           name='definietly'
//                           value={this.state.definietly}
//                           onChange={(e) =>
//                             this.changeCheckboxHandler(e, "definietly")
//                           }
//                         />
//                         <label For='letter'> definitly</label>
//                         <br />
//                         <input
//                           type='checkbox'
//                           name='maybe'
//                           value={this.state.maybe}
//                           onChange={(e) =>
//                             this.changeCheckboxHandler(e, "maybe")
//                           }
//                         />
//                         <label For='letter'> maybe</label>
//                         <br />
//                         <input
//                           type='checkbox'
//                           name='notsure'
//                           value={this.state.notsure}
//                           onChange={(e) =>
//                             this.changeCheckboxHandler(e, "notsure")
//                           }
//                         />
//                         <label For='letter'> not sure</label>
//                       </form>
//                     </div>
//                     <div class='fg'>
//                       <input
//                         type='text'
//                         name='Fcc'
//                         value={this.state.Fcc}
//                         onChange={(e) => this.changeHandler(e, "Fcc")}
//                       />
//                     </div>
//                     <div class='cv'>
//                       <div>
//                         <form action=''>
//                           <input
//                             type='checkbox'
//                             name='front end projects'
//                             value={this.state.frontendprojects}
//                             onchange={(e) =>
//                               this.changeCheckboxHandler(e, "frontendprojects")
//                             }
//                           />
//                           <label htmlFor=''>front end projects</label>
//                         </form>
//                       </div>
//                       <div>
//                         <form action=''>
//                           <input
//                             type='checkbox'
//                             name='backendprojects'
//                             value={this.state.backendprojects}
//                             onchange={(e) =>
//                               this.changeCheckboxHandler(e, "backendprojects")
//                             }
//                           />
//                           <label htmlFor=''>back end projects</label>
//                         </form>
//                       </div>

//                       <div>
//                         <form action=''>
//                           <input
//                             type='checkbox'
//                             name='data visualization'
//                             value={this.state.datavisualization}
//                             onchange={(e) =>
//                               this.chageCheckboxHandler(e, "data visualization")
//                             }
//                           />
//                           <label htmlFor=''> data visualization</label>
//                         </form>
//                         <div class='gh'>
//                           <button onClick={this.onCreateName}>submit</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <link rel='stylesheet' href='index.css' />
//               </body>
//             </html>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Form;
