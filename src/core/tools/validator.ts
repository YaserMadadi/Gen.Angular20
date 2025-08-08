import { isUndefined } from "lodash-es";
import { BaseEntity } from "../BaseEntity";

export class Validator {

    public static Validate<T extends string | Date | BaseEntity | undefined>(value: T) {
        let isValidated: boolean = false;

        if (isUndefined(value))

            return false;

        if (this.isString(value)) {
            isValidated = Validator.stringValidate(value);
            Validator.showError(isValidated, "String", value);
        }
        else if (this.isBusinessObject(value)) {
            isValidated = value.id > 0;
            Validator.showError(isValidated, `${value.info.schema}.${value.info.name}`, value);
        }
        else {
            isValidated = Validator.DateValidate(value);
            Validator.showError(isValidated, "Date", value);
        }
        // else if (value instanceof Date) {
        //     isValidated = Validator.DateValidate(value);
        //     Validator.showError(isValidated, "Date", value);
        // }
        return isValidated;
    }

    private static showError<T extends string | Date | BaseEntity>(result: boolean, name: string, value: T) {
        if (!result)
            console.log(`Validating Error in ${name} : `, value);
    }

    private static stringValidate(value: string): boolean {
        return value !== undefined && value !== null && value.length > 0;
    }

    private static DateValidate(value: Date): boolean {
        return value !== undefined && value.getFullYear() > 0 && value.getMonth() > 0 && value.getDay() > 0;
    }

    private static isString(value: any): value is string {
        return typeof value === 'string';
    }

    private static isBusinessObject(value: any): value is BaseEntity {
        var result = value instanceof BaseEntity;
        if (result)
            return true;
        if (value == null)
            return false;
        return 'timeStamp' in value;
    }
}