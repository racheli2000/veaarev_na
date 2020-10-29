import { SelectedProducts } from './SelectedProduct';
import { User } from './User';
import { ProductsInPackage } from './ProductsInPackage';

export class Order
{
    selectedPackeges:ProductsInPackage[]
    user:User

    constructor()
    {
        this.selectedPackeges=[]
        this.user=new User();
    }

}