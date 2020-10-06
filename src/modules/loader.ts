import * as fs from 'fs';

export class Loader {
    public static load(path: string) {
        const buffer = fs.readFileSync(path);
        return new Uint8Array(buffer);
    }
}