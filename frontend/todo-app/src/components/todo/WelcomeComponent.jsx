import { useParams } from 'react-router-dom'


function WelcomeComponent() {
    const { username } = useParams()
    return (
        <div className="WelcomeComponent">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <a href="/todos">Go here</a>
            </div>
        </div>
    )
}

export default WelcomeComponent