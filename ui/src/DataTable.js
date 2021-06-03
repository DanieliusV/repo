import { Table } from "semantic-ui-react";

const { HEADERS } = require('./constants');

function DataTable({ data }) {
    if (!data || data.length === 0)
        return <p>No data</p>;

    return (
        <Table
            headerRow={HEADERS.map(columnName => <Table.HeaderCell key={columnName}>{columnName}</Table.HeaderCell>)}
            tableData={data}
            renderBodyRow={(row) => {
                const rowKey = row['__id'] || row['Isin Code'];
                return (
                    <Table.Row
                        key={rowKey}
                        cells={HEADERS.map(columnName => (
                            <Table.Cell children={row[columnName] || ''} key={`${rowKey}_${columnName}`} />
                        ))}
                    />
                );
            }}
        />
    );
}

export default DataTable;