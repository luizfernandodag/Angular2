// string, number, boolean, null, undefined
const myName:string = 'Luiz';


let i:string | null = null;

// arrays

let items: string[] | number[] = ['test', 'luiz']

let arr = ['a', 1]

interface IAccount {
    name: string,
    balance: number,
    status?: string,
    deposit?:() => void
}
const account: IAccount = {
    name: 'Luiz',
    balance: 10 
}

let accounts: IAccount[];


class InvestmentAccount implements IAccount {
    constructor(
        public name: string, public balance: number
    )
    {
        
    }

    private withdraw()
    {

    }


}