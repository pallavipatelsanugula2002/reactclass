
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
function App(){
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
const obj={
    heading1:"it is a table without borders",
    tableheads:["name","interest","designation"],
    tabledata:["pallavi","sing","btech","btech","dance","degree"]

}
const obj2={
    head1:"this is an image",
    src:"https://th.bing.com/th?id=OIP.87rC-vQdkf1I5qv74_2LjwHaHp&w=246&h=253&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    alt:"hello",
    head2:"this is a list",
    list1:"javascript",
    list2:"react",
    type:"text",
     value: "hello",
     name:"name",
     id:"name"
}
const{head1,src,alt,head2,list1,list2,type,value,name,id}=obj2
return(
            <div>
                 <h1>{obj.heading1}</h1>
            <tr>
                <th>{obj.tableheads[0]}</th> 
                <th>{obj.tableheads[1]}</th>
                <th>{obj.tableheads[2]}</th>
            </tr>
            <tr>
                <td>{obj.tabledata[0]}</td>
                <td>{obj.tabledata[1]}</td>
                <td>{obj.tabledata[2]}</td>
            </tr>
            <tr>
                <td>{obj.tabledata[3]}</td>
                <td>{obj.tabledata[4]}</td>
                <td>{obj.tabledata[5]}</td>
            </tr>
            <h1>{head1}</h1> 
         <img
        src={src}
        alt={alt}
        />
        <h1>{head2}</h1>
        <ul>
        <li>{list1}</li>
        <li>{list2}</li>
        </ul>
        <h1> this  is a form</h1>
        <form>
       <input type= {type}value={value}></input><br></br>
      <button>submit</button><br></br><br></br>
      <label for={name}>name:</label>
      <input type={type} value={value} id={id}></input>
      </form>
            </div>
            )
}
export default App;
