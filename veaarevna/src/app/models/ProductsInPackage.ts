import { SelectedProducts } from './SelectedProduct';

export class  ProductsInPackage
{
    package_price:number
    package_type_kod:number
    selectedProducts:SelectedProducts[]

    constructor(package_type_kod, package_price)
    {
        this.package_price=package_price;
        this.package_type_kod=package_type_kod;
        this.selectedProducts=[]
    }

}