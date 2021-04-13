import React from 'react'
import './Notifications.styles.css'
import Data from '../Data/Data.js'
export default class NotificationsPage extends React.Component {


   

    render() {

        const notificari = Data.map((Data) =>
            <div className="notification-item">
                {Data.content}
            </div>
        );
        
        return (
            
            <div className = "notifications-container">
                <h1 className="notifications-header">Notificari</h1>
                
                <h1 className = "notification-text">{notificari}</h1>

            </div>

        )
    }

}