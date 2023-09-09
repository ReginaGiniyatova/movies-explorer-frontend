import "./Notification.css";

function Notification({ notification }) {
    return (
        <div className="notification">
            <p className={`notification__message ${
                notification.isError
                ? "notification__message_text-color-red"
                : "notification__message_text-color-green"
            }`}>
                {notification.message}
            </p>
        </div> 
    )
};

export default Notification;