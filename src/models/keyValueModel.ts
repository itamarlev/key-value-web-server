export class KeyValueModel {
    private storage: { [key: string]: string } = {};

    addKeyValue(key: string, value: string): void {
        this.storage[key] = value;
    }

    getValue(key: string): string | null {
        return this.storage[key] || null;
    }

    getAllKeyValues(): object {
        return this.storage;
    }

    deleteKey(key: string): void {
        if (this.storage[key]) {
            delete this.storage[key];
        }
    }
}