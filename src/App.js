
//3/11/2024 task
// function App() {
//   return (
//     <div>
//      <ol>
//     <li>apple</li>
//       <li>banana</li>
//      </ol>
//      <ul>
//       <li>one</li>
//       <li>twooooo</li>
//      </ul>
//     <table>
//       <tr>
//         <th>name</th>
//         <th>age</th>
//         <th>interests</th>
//       </tr>
//       <tr>
//         <td>pal</td>
//         <td>21</td>
//         <td>novels</td>
//       </tr>
//       <tr>
//         <td>san</td>
//         <td>22</td>
//         <td>movies</td>
//       </tr>
//     </table>
//     <form>
//       <input type="text" value="hello"></input><br></br>
//       <button>submit</button><br></br><br></br>
//       <label for="name">name:</label>
//       <input type="text" value="pallavi" id="name"></input>
//     </form>


//     </div>
    
//   );
// }

// export default App;
//4/1/24 task

// import Listcomponent from "./lists/unorderedlists";
// import Orderedlist from "./lists/orderedlists";
// import Buttoncomponent from "./button/buttoncomp";
// import Tablecomponent from "./table/table";
// import Formcomponent from "./forms/forms";
// function App(){
//   return(
//     <div>
// <Listcomponent/>
// <Buttoncomponent/>
// <Orderedlist></Orderedlist>
// <Tablecomponent/>
// <Formcomponent/>

// </div>)
// }
// export default App;
//8/1/2024 task
// function App(){
//     return(
//         <div>
//              <h1>it is a table without borders</h1>
//         <tr>
//             <th>name</th> 
//             <th>interest</th>
//             <th>designation</th>
//         </tr>
//         <tr>
//             <td>pallavi</td>
//             <td>sing</td>
//             <td>btech</td>
//         </tr>
//         <tr>
//             <td>sandhya</td>
//             <td>dance</td>
//             <td>degree</td>
//         </tr>
//         <h1>this is an image</h1> 
//         <img
//         src="https://th.bing.com/th?id=OIP.87rC-vQdkf1I5qv74_2LjwHaHp&w=246&h=253&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//         alt="hello"
//         />
//         <h1> this is a list</h1>
//         <ul>
//         <li>apple</li>
//         <li>banana</li>
//         </ul>
//         <h1> this  is a form</h1>
//         <form>
//        <input type="text" value="hello"></input><br></br>
//       <button>submit</button><br></br><br></br>
//       <label for="name">name:</label>
//       <input type="text" value="pallavi" id="name"></input>
//     </form>
//  </div>
//      )
//now lets change the above react code by using jsx rules
// const obj={
//     heading1:"it is a table without borders",
//     tableheads:["name","interest","designation"],
//     tabledata:["pallavi","sing","btech","btech","dance","degree"]

// }
// const obj2={
//     head1:"this is an image",
//     src:"https://th.bing.com/th?id=OIP.87rC-vQdkf1I5qv74_2LjwHaHp&w=246&h=253&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
//     alt:"hello",
//     head2:"this is a list",
//     list1:"javascript",
//     list2:"react",
//     type:"text",
//      value: "hello",
//      name:"name",
//      id:"name"
// }
// const{head1,src,alt,head2,list1,list2,type,value,name,id}=obj2
// return(
//             <div>
//                  <h1>{obj.heading1}</h1>
//             <tr>
//                 <th>{obj.tableheads[0]}</th> 
//                 <th>{obj.tableheads[1]}</th>
//                 <th>{obj.tableheads[2]}</th>
//             </tr>
//             <tr>
//                 <td>{obj.tabledata[0]}</td>
//                 <td>{obj.tabledata[1]}</td>
//                 <td>{obj.tabledata[2]}</td>
//             </tr>
//             <tr>
//                 <td>{obj.tabledata[3]}</td>
//                 <td>{obj.tabledata[4]}</td>
//                 <td>{obj.tabledata[5]}</td>
//             </tr>
//             <h1>{head1}</h1> 
//          <img
//         src={src}
//         alt={alt}
//         />
//         <h1>{head2}</h1>
//         <ul>
//         <li>{list1}</li>
//         <li>{list2}</li>
//         </ul>
//         <h1> this  is a form</h1>
//         <form>
//        <input type= {type}value={value}></input><br></br>
//       <button>submit</button><br></br><br></br>
//       <label for={name}>name:</label>
//       <input type={type} value={value} id={id}></input>
//       </form>
//             </div>
//             )
// }
// export default App;
//task 9/1/2024
// import Buttoncomponent1 from "./classbutton/buttonsubscribe";
// function App(){
//     return(
//     <Buttoncomponent1/>
//     )
// }
// export default App;
//task on 10/1/2024
// import Apicall from "./exceptionhandling/api.js";
// function App(){
//         return(
//        <Apicall/>
//         )
//     }
//     export default App;
//task on 11/1/2024

// import InlineStyle from "./inlinestyle/inline";
// import Tablecomponent2 from "./inlinestyle/tableexternal";
// import Formcomponent2 from "./inlinestyle/formsexternal";
// import Lists2 from "./inlinestyle/listsexternal";


// function App() {
//     return (
//         <>
//         <InlineStyle />
//         <Tablecomponent2/>
//         <Formcomponent2/>
//         <Lists2/>
//         </>

//     );
// }

// export default App;
//task on 12/11/2024
import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootcomponent from "./bootstrap/bootstrap1";
// import comp from './bootstrap/tablecompboot';
// function App(){
//     return(<>
//     {/* <Bootcomponent/> */}
//     <comp/>
//     </>)
// }
// export default App;
// App.js (or your main application file)

import React from 'react';
import Inline from './practice/classbase1';
import Externalpra from './practice/externalpractice';
import Externalmod from './practice/externalmod';
import Apps from './practice/classbase1';
import Propsclass from './practice/classbase1';
import Propsparent from './practice/classbase1';
import Counter from './practice/childtoparent';
import Parentlife from './practice/lifecycleparent';
import InputForm from './practice/hooks';
import UncontrolledForm from './practice/formspractice';
import Formval from './practice/formspractice';
import Controlled from './practice/controlled';
import ParentComponent from './props/parent';
import Mounting from './lifecycle/componentdid';
import Updatemount from './lifecycle/update/update';
import UseStatemethod from './hooks/hooks';
import DynamicList from './hooks/files';
import NewList from './hooks/listsfiles';
// import Login from './hooks/formuncontrol';
// import Classbase from './practice/classbase1';
// import Fetchdata from './practice/classbase1';
// import Parent from './bootstrap/parent';
// import Parent1 from './bootstrap/tableparent';
// const App = () => {
//   return (
//     <div>
//       <h1>Main App</h1>
//       <Parent />
//       <Parent1></Parent1>
//     </div>
//   );
// };

// export default App;
//task on 19/1/24

function App(){
  return(
    <>
    <Mounting/>
    <UseStatemethod/>
    <DynamicList/>
    <NewList/>
    {/* // <Updatemount favcolor="red"/>
   
    // <Login/>
    // <Classbase/>
    // <Fetchdata/> */}
    
    {/* <Inline/>
    <Externalpra/>
    <Externalmod/> */}
    {/* <Apps/> */}
    {/* <Propsclass/> */}
    {/* <Propsparent/> */}
    {/* <Counter/> */}
    {/* <Parentlife/> */}
    {/* <InputForm/> */}
    {/* <UncontrolledForm/> */}
    {/* <Formval/> */}
    {/* <Controlled/> */}
    {/* <ParentComponent/> */}
    </>
  )
}
export default App;




