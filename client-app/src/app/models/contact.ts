export class Contact {
     _id?: string;
    // _id?: string;
    first_name: string;
    last_name: string;
    phone: string;

    constructor() {}

    getId(): string {
        return this._id;
    }
    setId(_id: string): void {
        this._id = _id;
    }

    getFirstName(): string {
        return this.first_name;
    }
    setFirstName(first_name: string): void {
        this.first_name = first_name;
    }

    getLastName(): string {
        return this.last_name;
    }
    setLastName(last_name: string): void {
        this.last_name = last_name;
    }

    getPhone(): string {
        return this.phone;
    }
    setPhone(phone: string): void {
        this.phone = phone;
    }
}


