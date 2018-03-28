export class Contact {
     _id?: string;
    // _id?: string;
    first_name: string;
    last_name: string;
    phone: string;
    created_date: Date;

    constructor() {}

    getCreated_date(): Date {
        return this.created_date;
    }
    setCreated_date(created_date: Date): void {
        this.created_date = created_date;
    }
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


