import React, { useState, useEffect, useMemo, Fragment } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { DataGrid } from '@material-ui/data-grid';
import { CssBaseline, Typography, Container, Link } from '@material-ui/core';
import Header from './header';
import Config from '../config';
import { sleep } from '../utils';

const Datasets = () => {

    const [datasets, setDatasets] = useState([]);

    // Using useEffect to call the API once mounted and set the data
    useEffect(() => {
        (async () => {
            while (true) {
                try {
                    const result = await axios(`${Config.ApiBaseUrl}api/dataset/`);
                    setDatasets(result.data);
                    break;
                } catch (error) {
                    toast.error(error.message);
                    await sleep(10000);
                    toast.info('Retrying...');
                }
            }
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
                    row.url ? <Link href={row.url}>{row.name}</Link> : row.name
                ),
            },
        ], []
    );

    return (
        <Fragment>
            <Header />
            <CssBaseline />
            <Container maxWidth="lg" className="bg-white shadow" style={{ padding: 25 }}>
                <Typography variant='h2' gutterBottom>
                    Datasets List
                </Typography>
                <DataGrid className="bg-light" columns={columns} rows={datasets} pageSize={10} autoHeight />
            </Container>
        </Fragment>
    )
}

export default Datasets;
