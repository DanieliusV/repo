import { Icon, Message, Popup } from "semantic-ui-react";

const ErrorMessage = ({ error, onDismiss }) => (
    <Message error hidden={!error} onDismiss={() => onDismiss()}>
        Oops! Something went wrong <Popup content={error} trigger={<Icon name='info circle' />} />
    </Message>
);

ErrorMessage.defaultProps = {
    onDismiss: () => {}
}

export default ErrorMessage;