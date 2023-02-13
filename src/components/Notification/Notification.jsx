import PropTypes from 'prop-types';

const Notification = ({ message }) => (
  <div>
    {message}
  </div>
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};