import knex = require("knex");

export class DbActions<T> {
    constructor(private instances: T[], private knexConfig: any) {}

    /**
     * 
     * @param propertyName returns the value corresponding to the property name from the DTO
     * @returns 
     */
    get<K extends keyof T>(propertyName: K): T[K] | undefined {
        const instance = this.instances[0];
        const snakeCasePropertyName = this.camelToSnakeCase(propertyName as string);
        return instance ? instance[snakeCasePropertyName] : undefined;
    }

    /**
     * 
     * @param propertyName return all values corresponding to the property name from the DTO
     * @returns 
     */
    getAll<K extends keyof T>(propertyName: K): (T[K] | undefined)[] {
        return this.instances.map(instance => {
            const snakeCasePropertyName = this.camelToSnakeCase(propertyName as string);
            return instance ? instance[snakeCasePropertyName] : undefined;
        });
    }

    /**
     * 
     * @param query executes a PostgreSQL query
     * @param ctor constructor of DTO class
     * @returns 
     */
    async executyPostgressQuery<T>(query: string, ctor: new () => T): Promise<DbActions<T>> {
        const pgknex = knex(this.knexConfig);
        const resp = await pgknex.raw(query);
        const mappedData = resp.rows.map(row => this.mapKeysToSnakeCase(row) as T);
        pgknex.destroy();
        return new DbActions(mappedData, this.knexConfig);
    }

    /**
     * 
     * @param key converts a string from camelCase to snake_case
     * @returns 
     */
    camelToSnakeCase(key: string): string {
        return key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    }

    /**
     * 
     * @param obj iterates over the keys of the input object to snake_case
     * @returns 
     */
    mapKeysToSnakeCase<T>(obj: T): T {
        return Object.entries(obj).reduce((newObj: any, [key, value]) => {
            newObj[this.camelToSnakeCase(key)] = value;
            return newObj;
        }, {} as T);
    }
}