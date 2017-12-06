export class Contact {
    $ref: string;
    $key: string;
    name: string;
    phone: string;
    contactCompanies: {[key: string]: {name: string}};
}