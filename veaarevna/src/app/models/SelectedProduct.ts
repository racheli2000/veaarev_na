export class SelectedProducts
{
    product_kod:number
    amount:number

    constructor(code,amount)
    {
        this.product_kod=code;
        this.amount=amount;
    }
}