import { useState } from "react";

export default function Card({ name, userName, avatar}) {
    
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonStyle = isFollowing ? 'btn btn-primary' : 'btn btn-danger' 

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="card d-flex flex-row p-2 my-3" style={{ maxWidth: "400px" }}>
                <img 
                    className="rounded-circle w-25 p-2" 
                    src={avatar}
                    alt="avatar" 
                />
                <div className="card-body d-flex flex-row align-items-center justify-content-between">
                    <section className="d-flex flex-column">
                        <h4 className="card-title text-truncate d-inline-block mw-150">
                            {name}
                        </h4>
                        <h6 className="card-subtitle mb-2 text-muted text-truncate d-inline-block" style={{ maxWidth: "150px" }}>
                            {userName}
                        </h6>
                    </section>
                    <aside>
                        <button type="button" className={buttonStyle} onClick={handleClick}>{text}</button>
                    </aside>
                </div>
            </div>       
        </div>
    );
}
