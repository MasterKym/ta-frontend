import { IMessage } from 'lib/types';
import './styles.scss';

function Message({ messageType, messageContent, icon }: IMessage) {
  return (
    <div
      className={`flex items-center row-gap Settings-submit-message message-${messageType}`}
    >
      <span style={{ marginRight: '.5rem' }}>{messageContent}</span>
      {icon}
    </div>
  );
}
export default Message;
