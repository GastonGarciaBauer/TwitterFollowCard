import './App.css'
import './index.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    const format = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard formatUserName={format} userName='midudev' name= 'Gasti'  />
            <TwitterFollowCard formatUserName={format} userName='panttera22' name= 'Gasti'  />
            <TwitterFollowCard formatUserName={format} userName='midudev' name= 'Gasti' />
            <TwitterFollowCard formatUserName={format} userName='panttera22' name= 'Gasti'  />
        </section>
    )
}
