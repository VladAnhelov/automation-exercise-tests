export class Base {
    protected derivedByClass(className: string): string {
        return `.${className}`;
    }
}