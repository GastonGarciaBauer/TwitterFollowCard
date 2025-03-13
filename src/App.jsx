import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'

export default function App () {
    return(
        <div className="d-flex flex-column align-items-center">
            <Card 
                name="Gasti" 
                userName="@Gasti García" 
                avatar="https://unavatar.io/github/GastonGarciaBauer" 
                isFollowing 
            />
            
            <Card 
                name="Maru" 
                userName="@Maru Alvarenga" 
                avatar="http://unavatar.io/github/marianaAlvarenga" 
                isFollowing
            />
            
            <Card 
                name="Juani" 
                userName="@Juani F. Jubín" 
                avatar="http://unavatar.io/github/JuanFernandezJubin"
                isFollowing={false}
            />
        </div>
    )
}