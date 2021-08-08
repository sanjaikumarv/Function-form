import React from "react";
//import { useState } from "react";
import "./App.css";
import Effeect from "./Effeect";
import Name from "./Name";
function App() {
  // const [form, setform] = useState({
  //   Name: "",
  //   age: "",
  //   Email: "",
  //   role: "",
  //   definietly: "",
  //   maybe: "",
  //   notsure: "",
  //   Fcc: "",
  //   frontendprojects: "",
  //   backendprojects: "",
  //   datavisualization: "",
  // });
  // const ChangeHandler = (e, field) => {
  //   setform({
  //     ...form,
  //     [field]: e.target.value,
  //   });
  // };
  // const onCreateName = () => {
  //   console.log(form);
  // };

  // const ChangeCheckboxHandler = (e, field) => {
  //   setform({
  //     ...form,
  //     [field]: e.target.checked,
  //   });
  //   console.log(e);
  // };
  return (
    <div>
      {/* <Effeect /> */}
      <Name />
    </div>
    //   <div>
    //     <div>
    //       <div>
    //         <div>
    //           <html lang='en'>
    //             <head>
    //               <title>Document</title>
    //             </head>
    //             <body>
    //               <div class='one'>
    //                 <h1>Survey form</h1>
    //               </div>
    //               <div class='two'>
    //                 <h2>Let us kow how we can improve FreeCodeCsmp</h2>
    //               </div>
    //               <div class='three'>
    //                 <div class='four'>
    //                   <div class='ty'>
    //                     <h3>Name :</h3>
    //                     <h3>age :</h3>
    //                     <h3>Email :</h3>
    //                   </div>
    //                   <div class='nin'>
    //                     which option best describes your current role :
    //                   </div>
    //                   <div class='tey'>
    //                     how would likely is that u would recomend FreeCodeCamp to
    //                     a friend :
    //                   </div>
    //                   <div class='as'>what do you like most i Fcc :</div>
    //                   <div class='df'>
    //                     think that should be improved in the future :
    //                   </div>
    //                 </div>

    //                 <div class='five'>
    //                   <div class='six'>
    //                     <input
    //                       type='text'
    //                       name='Name'
    //                       value={form.Name}
    //                       onChange={(e) => ChangeHandler(e, "Name")}
    //                     />
    //                   </div>
    //                   <div class='seven'>
    //                     <input
    //                       type='text'
    //                       name='age'
    //                       value={form.age}
    //                       onChange={(e) => ChangeHandler(e, "age")}
    //                     />
    //                   </div>
    //                   <div class='eight'>
    //                     <input
    //                       type='text'
    //                       name='Email'
    //                       value={form.Email}
    //                       onChange={(e) => ChangeHandler(e, "Email")}
    //                     />
    //                   </div>
    //                   <div class='ten'>
    //                     <input
    //                       type='text'
    //                       name='role'
    //                       value={form.role}
    //                       onChange={(e) => ChangeHandler(e, "role")}
    //                     />
    //                   </div>
    //                   <div class='qw'>
    //                     <form action='action/page.php'>
    //                       <input
    //                         type='checkbox'
    //                         name='definietly'
    //                         value={form.definietly}
    //                         onChange={(e) =>
    //                           ChangeCheckboxHandler(e, "definietly")
    //                         }
    //                       />
    //                       <label For='letter'> definitly</label>
    //                       <br />
    //                       <input
    //                         type='checkbox'
    //                         name='maybe'
    //                         value={form.maybe}
    //                         onChange={(e) => ChangeCheckboxHandler(e, "maybe")}
    //                       />
    //                       <label For='letter'> maybe</label>
    //                       <br />
    //                       <input
    //                         type='checkbox'
    //                         name='notsure'
    //                         value={form.notsure}
    //                         onChange={(e) => ChangeCheckboxHandler(e, "notsure")}
    //                       />
    //                       <label For='letter'> not sure</label>
    //                     </form>
    //                   </div>
    //                   <div class='fg'>
    //                     <input
    //                       type='text'
    //                       name='Fcc'
    //                       value={form.Fcc}
    //                       onChange={(e) => ChangeHandler(e, "Fcc")}
    //                     />
    //                   </div>
    //                   <div class='cv'>
    //                     <div>
    //                       <form action=''>
    //                         <input
    //                           type='checkbox'
    //                           name='front end projects'
    //                           value={form.frontendprojects}
    //                           onchange={(e) =>
    //                             ChangeCheckboxHandler(e, "frontendprojects")
    //                           }
    //                         />
    //                         <label htmlFor=''>front end projects</label>
    //                       </form>
    //                     </div>
    //                     <div>
    //                       <form action=''>
    //                         <input
    //                           type='checkbox'
    //                           name='backendprojects'
    //                           value={form.backendprojects}
    //                           onchange={(e) =>
    //                             ChangeCheckboxHandler(e, "backendprojects")
    //                           }
    //                         />
    //                         <label htmlFor=''>back end projects</label>
    //                       </form>
    //                     </div>

    //                     <div>
    //                       <form action=''>
    //                         <input
    //                           type='checkbox'
    //                           name='data visualization'
    //                           value={form.datavisualization}
    //                           onchange={(e) =>
    //                             ChangeCheckboxHandler(e, "data visualization")
    //                           }
    //                         />
    //                         <label htmlFor=''> data visualization</label>
    //                       </form>
    //                       <div class='gh'>
    //                         <button onClick={onCreateName}>submit</button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               <link rel='stylesheet' href='index.css' />
    //             </body>
    //           </html>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  );
}
export default App;
