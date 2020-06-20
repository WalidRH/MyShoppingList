export class User {
    constructor(
        public email: string,
        public id: string,
        // tslint:disable-next-line: variable-name
        private _token: string,
        // tslint:disable-next-line: variable-name
        private _TokenExpirationDate: Date,
    ) { }

    get token() {
        return (!this._TokenExpirationDate || new Date() > this._TokenExpirationDate) ? null : this._token;
    }
}