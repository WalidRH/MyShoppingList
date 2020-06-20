export class Categorie {

    public static categorieType(type: string): string {
        switch ( type ) {
            case 'CATEGORIE_FAVORIES': {
                return 'FAVORIES';
            }
            case 'CATEGORIE_LIQUDE': {
                return 'LIQUDE';
            }
            case 'CATEGORIE_SUCRE': {
                return 'SUCRE';
            }
            case 'CATEGORIE_MILK': {
                return 'MILK';
            }
            case 'CATEGORIE_FLOUR': {
                return 'FLOUR';
            }
            case 'CATEGORIE_CEREAL': {
                return 'CEREAL';
            }
            case 'CATEGORIE_VEGETABLES': {
                return 'VEGETABLES';
            }
            case 'CATEGORIE_FRUITS': {
                return 'FRUITS';
            }
            case 'CATEGORIE_MEAT': {
                return 'MEAT';
            }
            case 'CATEGORIE_FISH': {
                return 'FISH';
            }
            case 'CATEGORIE_EGGS': {
                return 'EGGS';
            }
            default: {
                return null;
            }
        }
    }
}
