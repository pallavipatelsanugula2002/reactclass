
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

import Listcomponent from "./lists/unorderedlists";
import Orderedlist from "./lists/orderedlists";
import Buttoncomponent from "./button/buttoncomp";
import Tablecomponent from "./table/table";
import Formcomponent from "./forms/forms";
function App(){
  return(
    <div>
<Listcomponent/>
<Buttoncomponent/>
<Orderedlist></Orderedlist>
<Tablecomponent/>
<Formcomponent/>

</div>)
}
export default App;
