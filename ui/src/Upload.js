import { useState } from "react";
import { CSVReader } from 'react-papaparse';
import { Button, Header, Message } from "semantic-ui-react";
import DataTable from "./DataTable";
import ErrorMessage from "./ErrorMessage";

const axios = require('axios');

const dataUtils = require('./dataUtils');
const { API_PATH, HEADERS } = require('./constants');

function Upload() {
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [isSuccessful, setSuccessful] = useState(false);

    function submitData(data) {
        setError();
        axios.post(API_PATH, data)
            .then(() => setSuccessful(true))
            .catch(error => setError(error.response.data));
    }

    const validData = [];
    const invalidData = [];
    for (const entry of data) {
        if (entry.errors.length === 0 && dataUtils.validateData(entry.data))
            validData.push(entry.data);
        else
            invalidData.push(entry.data);
    }

    return (
        <>
            <Header as='h1'>Upload file</Header>
            <Message success hidden={!isSuccessful}>
                Hooray! File upload was successful
            </Message>
            <ErrorMessage error={error} onDismiss={() => setError()} />
            <CSVReader onFileLoad={setData} config={{ transform: dataUtils.transformData, header: true, dynamicTyping: true, columns: HEADERS, skipEmptyLines: 'greedy' }}>
                Drag or click to upload
            </CSVReader>
            <Header>Valid data</Header>
            <DataTable data={validData} />
            <Header>Invalid data</Header>
            <DataTable data={invalidData} />
            <Button primary onClick={() => submitData(validData)} disabled={validData.length === 0}>Submit valid data</Button>
        </>
    );
}

export default Upload;