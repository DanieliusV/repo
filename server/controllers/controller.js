const dataUtils = require('../dataUtils');
var repository = require('../repositories/repository');

const insert = (req, res, next) => {
    try {
        const data = req.body;
        const validData = data.filter(entry => dataUtils.validateData(entry));
        repository.insert(validData);
        return res.status(201).send();
    }
    catch (error) {
        next(error);
    }
}

const get = (req, res, next) => {
    try {
        const data = repository.get();
        return res.status(200).send(data);
    }
    catch (error) {
        next(error);
    }
}

const wipe = (req, res, next) => {
    try {
        repository.wipe();
        return res.status(204).send();
    }
    catch (error) {
        next(error);
    }
}

module.exports = {
    insert: insert,
    get: get,
    wipe: wipe,
}
