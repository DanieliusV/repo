import { Header, Icon } from "semantic-ui-react";

function Contacts() {
    return (
        <>
            <Header as='h1'>
                Danielius Viktorovas
                <a
                    href="https://www.linkedin.com/in/danielius-viktorovas/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon name='linkedin' />
                </a>
                <a
                    href="mailto:d.viktorovas@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon name='mail' />
                </a>
            </Header>
        </>
    );
}

export default Contacts;