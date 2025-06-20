import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';


const ChatLog = (props) => {
  const getChatLog = (entries) => {
    return entries.map((entry) => (
      <ChatEntry
        key={entry.id}
        sender={entry.sender}
        body={entry.body}
        timeStamp={entry.timeStamp}
      />
    ));
  };

  return (
    <div className="chat-log">
      <ul>{getChatLog(props.entries)}</ul>
    </div>
  );
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default ChatLog;