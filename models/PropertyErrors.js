export class SerializationError extends Error {
    constructor(prop) {
        super(`Problem occured during serialization of Property: ${prop}`);
    }
}

export class TypeNotImplementedError extends Error {
    constructor(type) {
        super(`Could not instantiate Property of type: '${type}'`);
    }
}