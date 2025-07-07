import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const side = props.sender === 'Vladimir' ? 'local' : 'remote';
  return (
    <div className={`chat-entry ${side}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <TimeStamp time={props.timeStamp}/>
        <button className="like" onClick={() => props.onLikeToggle(props.id)}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatEntry;
