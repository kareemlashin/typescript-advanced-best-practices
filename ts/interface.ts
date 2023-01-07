interface user {
    name: string;
    age: number;
    phone?: number;

}
interface IButtonData {
    // HTML Props
    type: string
    name: string
    value: string | number | string[] | undefined
    onClick: ((event: any) => void) | undefined
    onMouseEnter: ((event: any) => void)
    onMouseLeave: ((event: any) => void)
    tabIndex: number | undefined
    disabled: boolean
    autoFocus: boolean
    form: string
    formAction: string
    formEncType: string
    formMethod: string
    formNoValidate: boolean
    formTarget: string
    // CSS
    style: any
    className: string
}
let obj: IButtonData = {
    type: 'dd',
    autoFocus: false,
    onClick: (event) => {
        console.log(event)
    },
    name: 'dd',
    value: 'dd',
    onMouseEnter: (event) => {
        console.log(event)
    },
    onMouseLeave: (event) => {
        console.log(event)
    },
    tabIndex: 54,
    disabled: false,
    form: 'dd',
    formAction: 'dd',
    formEncType: 'dd',
    formMethod: 'dd',
    formNoValidate: false,
    formTarget: 'dd',
    style: 'ddd',
    className: 'dd',
}

let userData: Partial<User> = {
    age: 1,
};

interface User {
    name: string;
    age: number;
    getPoints(point: number): number;
}

let dataUser: User = {
    name: "John Doe",
    age: 25,
    getPoints(point: number): number {
        return point * point;
    },
};