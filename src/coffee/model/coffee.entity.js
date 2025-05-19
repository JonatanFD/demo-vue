

export class Coffee {
    _id;
    _title;
    _description;
    _image;
    _ingredients;
    _totalSales;
    _price;
    _drinkType;

    constructor({id, title, description, image, ingredients, totalSales, price, drinkType}) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._image = image ?? "https://picsum.photos/300/200";
        this._ingredients = ingredients;
        this._totalSales = totalSales;
        this._price = price;
        this._drinkType = drinkType;
    }

    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get image() {
        return this._image;
    }

    get ingredients() {
        return this._ingredients;
    }

    get totalSales() {
        return this._totalSales;
    }

    get price() {
        return this._price;
    }   

    get drinkType() {
        return this._drinkType;
    }

}
