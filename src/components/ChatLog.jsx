import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({ entries, onLikeToggle }) => {
  return (
    <div className='chat-log'>
      <ul>
        {entries.map((entry) => (
          <ChatEntry {...entry} onLikeToggle={onLikeToggle} key={entry.id} />
        ))}
      </ul>
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onLikeToggle: PropTypes.func.isRequired,
};

export default ChatLog;
