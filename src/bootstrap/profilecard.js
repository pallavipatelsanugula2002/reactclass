
import reactImage from "../download1.jpeg"

const Profilecard1=((one)=>{

    return(
        <div class="card" style={{width:400}}>
        <img class="card-img-top" src={reactImage} alt="Card image" style={{width:400}}/>
        <div class="card-body">
          <h4 class="card-title">{one.profile.name}</h4>
          <p class="card-text">{one.profile.class}</p>
          <a href="#" class="btn btn-primary">{one.profile.interest}</a>
        </div>
      </div>
    )
})
export default Profilecard1;