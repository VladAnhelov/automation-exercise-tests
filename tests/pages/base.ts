export class Base {
    protected derivedByClass(className: string): string {
        return `.${className}`;
    }

    protected derivedByDataQa(dataQaValue: string): string {
        return `[data-qa="${dataQaValue}"]`;
    }

    protected derivedBySelector(selector: string): string {
        return selector;
    }

}