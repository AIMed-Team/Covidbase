import React, { useState, useEffect, useMemo, Fragment } from 'react';
import axios from 'axios';
import { DataGrid } from '@material-ui/data-grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './header';

const Datasets = () => {

    const [datasets, setDatasets] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            const result = await axios("/api/dataset");
            setDatasets(result.data);
        })();
    }, []);

    useEffect(() => document.title = 'Datasets');

    const columns = useMemo(
        () => [
            {
                field: 'id',
                headerName: 'Id',
                align: 'center',
                width: 100,
            },
            {
                field: 'name',
                headerName: 'Name',
                align: 'center',
                width: 130,
                renderCell: ({ row }) => (
                    row.url ? <a href={row.url}>{row.name}</a> : row.name
                ),
            },
        ], []
    );

    return (
        <Fragment>
            <Header />
            <CssBaseline />
            <Container maxWidth="lg">
                <Typography component="div" style={{ height: '50vh' }}>
                    <DataGrid columns={columns} rows={datasets} pageSize={10} />
                </Typography>
            </Container>
        </Fragment>
    )
}

export default Datasets;
