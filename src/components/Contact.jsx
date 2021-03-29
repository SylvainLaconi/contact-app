import './contact.css';

const user = {
    name: 'Sylvain Laconi',
    avatar: 'https://avatars.githubusercontent.com/u/74108455?v=4',
    online: true
}

const Contact = () => <div className="Contact">
    <img className="avatar" src={user.avatar} alt=""/>
    <div>
        <h4 className="name">{user.name}</h4>
        <div className="status">
            <div className={user.online ? "status-online" : "status-offline"}></div>
            <p className="status-text">{user.online ? "Online" : "Offline"}</p>
        </div>   
    </div>
</div>

export default Contact;