
export class ShoppingItem {

	constructor(
        // tslint:disable-next-line: variable-name
        private _ref: string,
        public name: string,
        public unit: string,
        public quantity: number,
        public price: number,
        public photoURL: string,
        public categorie?: string) {}
    
        get ref() {
            return this._ref;
        }
}
