import { Loader } from "./modules/loader";
import { MMU } from "./modules/mmu";

export class GBJS {
    constructor(private readonly path: string) {
        if(!path || !path.length) {
            throw new Error();
        }
    }

    public start() {
        const dataArray = Loader.load(this.path);
        const mmu = new MMU(dataArray);

        console.log('title: ', mmu.title);
        console.log('ram size: ', mmu.ramSize);
        console.log('rom size: ', mmu.romSize);
        console.log('super gb: ', mmu.superGB);
        console.log('colorized: ', mmu.colorized);
    }
}

const gbc = new GBJS('cartridge here...');
gbc.start();
