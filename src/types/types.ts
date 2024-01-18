export type IUser = {
    name: string;
    email: string;
    password: string;
    phone: string;
    userType: string;
    deliveryAddress: string;
    discount?: string;
    roleId: number;
    INN?: number;
    KPP?: string;
    OGRN?: string;
    corrAccount?: string;
    currAccount?: string;
}
