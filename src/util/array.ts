import { IO, VRam, WRam } from "src/modules/mmu.enums";

export function readRange(buffer: Uint8Array, begin: number, end: number) {
    if (!buffer) {
        throw new Error('No buffer');
    }

    return buffer.slice(begin, end);
}

export function readAt(buffer: Uint8Array, address: number) {
    if (address > IO.max) {
        throw new Error('Address exceeds memory size');
    }

    if (address >= WRam.wram_upper_bank_start && address <= WRam.wram_end) {

    }

    if (address >= VRam.vram_start && address <= VRam.vram_end) {
        
    }
}