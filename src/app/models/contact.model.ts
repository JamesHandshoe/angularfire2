export class Contact {
    $ref: string;
    $key: string;
    name: string;
    phone: string;
    companyKey: string;
    contactCompanies: {[key: string]: {name: string}};
}