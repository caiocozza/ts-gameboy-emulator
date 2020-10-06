import { Address, IO, RamSize, RomSize, VRam } from "./mmu.enums";

export class MMUObj {
    loadedRom: Uint8Array;
    mmu: Uint8Array;
    vram: Uint8Array;
    wram: Uint8Array;
}

export class MMU {
    private obj: MMUObj = new MMUObj();

    constructor(rom: Uint8Array) {
        this.obj.loadedRom = rom;
        this.obj.mmu = new Uint8Array(IO.max + 1);
        this.obj.mmu.fill(0x00);
        this.obj.vram = new Uint8Array(VRam.vram_bank_size);
        this.obj.wram = new Uint8Array(VRam.vram_size);

        this.setup();
    }

    private setup() {
        this.obj.mmu[0xff04] = 0x00;
        this.obj.mmu[0xff05] = 0x00;
        this.obj.mmu[0xff06] = 0x00;
        this.obj.mmu[0xff07] = 0x00;
        this.obj.mmu[0xff0f] = 0x00;
        this.obj.mmu[0xff10] = 0x80;
        this.obj.mmu[0xff11] = 0xbf;
        this.obj.mmu[0xff12] = 0xf3;
        this.obj.mmu[0xff14] = 0xbf;
        this.obj.mmu[0xff16] = 0x3f;
        this.obj.mmu[0xff17] = 0x00;
        this.obj.mmu[0xff19] = 0xbf;
        this.obj.mmu[0xff1a] = 0x7f;
        this.obj.mmu[0xff1b] = 0xff;
        this.obj.mmu[0xff1c] = 0x9f;
        this.obj.mmu[0xff1e] = 0xbf;
        this.obj.mmu[0xff20] = 0xff;
        this.obj.mmu[0xff21] = 0x00;
        this.obj.mmu[0xff22] = 0x00;
        this.obj.mmu[0xff23] = 0xbf;
        this.obj.mmu[0xff24] = 0x77;
        this.obj.mmu[0xff25] = 0xf3;
        this.obj.mmu[0xff26] = 0xf1;
        this.obj.mmu[0xff40] = 0x91;
        this.obj.mmu[0xff42] = 0x00;
        this.obj.mmu[0xff43] = 0x00;
        this.obj.mmu[0xff45] = 0x00;
        this.obj.mmu[0xff47] = 0xfc;
        this.obj.mmu[0xff48] = 0xff;
        this.obj.mmu[0xff49] = 0xff;
        this.obj.mmu[0xff4a] = 0x00;
        this.obj.mmu[0xff4b] = 0x00;
        this.obj.mmu[0xff4f] = 0xfe;
        this.obj.mmu[0xff50] = 0x00;
        this.obj.mmu[0xff70] = 0xf8;
        this.obj.mmu[0xfffa] = 0x39;
        this.obj.mmu[0xfffb] = 0x01;
        this.obj.mmu[0xfffc] = 0x2e;
        this.obj.mmu[0xffff] = 0x00;
    }

    public get title(): string {
        const arr = this
            .obj
            .loadedRom
                .subarray(Address.title_start, Address.title_end + 1);

        return Buffer.from(arr).toString('utf-8')
    }

    public get colorized(): boolean {
        switch(this.obj.loadedRom[Address.gbc]) {
            case Address.is_gbc:
            case Address.gbc_only:
                return true;
            default:
                return false;
        }
    }

    public get superGB(): boolean {
        return Boolean(this.obj.loadedRom[Address.sgb]) || false;
    }

    public get ramSize(): string {
        switch(this.obj.loadedRom[Address.ram_size]) {
            case RamSize.no_ram: return '';
            case RamSize.s_2_kb: return '2KB';
            case RamSize.s_8_kb: return '8KB';
            case RamSize.s_32_kb: return '32KB';
            case RamSize.s_128_kb: return '128KB';
            default: throw new Error('Unsupported RAM size');
        }
    }

    public get romSize(): string {
        switch(this.obj.loadedRom[Address.rom_size]) {
            case RomSize.s_32_kb: return '32KB';
            case RomSize.s_64_kb: return '64KB';
            case RomSize.s_128_kb: return '128KB';
            case RomSize.s_256_kb: return '256KB';
            case RomSize.s_512_kb: return '512KB';
            case RomSize.s_1_mb: return '1MB';
            case RomSize.s_1_1_mb: return '1.1MB';
            case RomSize.s_1_2_mb: return '1.2MB';
            case RomSize.s_1_5_mb: return '1.5MB';
            case RomSize.s_2_mb: return '2MB';
            default: throw new Error('Unsupported ROM size');
        }
    }
}