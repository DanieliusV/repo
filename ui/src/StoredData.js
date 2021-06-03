import { useEffect, useState } from "react";
import { Button, Header } from "semantic-ui-react";
import DataTable from "./DataTable";
import ErrorMessage from "./ErrorMessage";

const axios = require('axios');

const { API_PATH } = require('./constants');

function StoredData() {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => getData(), []);

    function getData() {
        axios.get(API_PATH)
            .then(response => {
                setData(response.data);
                setError();
            })
            .catch(error => setError(error.response.data));
    }

    function wipeData() {
        axios.delete(API_PATH)
            .then(() => {
                setError();
                getData();
            })
            .catch(error => setError(error.response.data));
    }

    return (
        <>
            <Header as='h1'>View data in database</Header>
            <ErrorMessage error={error} onDismiss={() => setError()} />
            <Button primary onClick={getData}>Refresh data</Button>
            <Button primary onClick={wipeData}>Wipe database</Button>
            <DataTable data={data} />
        </>
    );
}

export default StoredData;