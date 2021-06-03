const TAFFY = require('taffydb').taffy;

const db = TAFFY([]);

const insert = data => db.merge(data, 'Company Name');

const get = () => db().get();

const wipe = () => db().remove();

module.exports = {
    insert: insert,
    get: get,
    wipe: wipe,
}