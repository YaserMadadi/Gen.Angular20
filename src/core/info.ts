export class Info {

    /**
     *
     */
    constructor(schema: string = '', name: string = '', fullName: string = '') {
        this.name = name;
        this.schema = schema;
        this.fullName = fullName;
    }

    schema: string;
    name: string;
    fullName: string;
    title: string = '';
}

