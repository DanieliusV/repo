const axios = require('axios');

const DATABASE_PATH = 'https://sheet.best/api/sheets/926abd21-88ef-476c-895f-90d03dff3def';

const insert = data => axios.post(DATABASE_PATH, data).then(response => response.data);

const get = () => axios.get(DATABASE_PATH).then(response => response.data);

const wipe = () => axios.delete(DATABASE_PATH + '/Industry/*').then(response => response.data);

module.exports = {
    insert: insert,
    get: get,
    wipe: wipe,
}