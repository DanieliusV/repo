import { ErrorBoundary } from 'react-error-boundary';
import { Grid, Segment } from "semantic-ui-react";
import Contacts from "./Contacts";
import ErrorMessage from "./ErrorMessage";
import StoredData from "./StoredData";
import Upload from "./Upload";

function App() {
    return (
        <ErrorBoundary FallbackComponent={ErrorMessage}>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 1024 }}>
                    <Segment children={<ErrorBoundary children={<Contacts />} FallbackComponent={ErrorMessage} />} textAlign='center' style={{ backgroundColor: '#e8f1f8' }} />
                    <Segment children={<ErrorBoundary children={<Upload />} FallbackComponent={ErrorMessage} />} textAlign='center' style={{ backgroundColor: '#e8f1f8' }} />
                    <Segment children={<ErrorBoundary children={<StoredData />} FallbackComponent={ErrorMessage} />} textAlign='center' style={{ backgroundColor: '#e8f1f8' }} />
                </Grid.Column>
            </Grid>
        </ErrorBoundary>
    );
}

export default App;
