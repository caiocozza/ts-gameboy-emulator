export enum Timer {
    tac_mask = 0x03,
    timer_on = 0x04,
}

export enum Character {
    line_size = 2,
}

export enum LCD {
    lines = 153,
    char_in_lines = 32,
    show_char_in_lines = 20,
}

export enum DMA {
    length = 160,
}

export enum Obj {
    bytes = 4,
    max = 40,
}

export enum StatMask {
    on = 0x03,
    lyc_on = 0x04,
    lyc_off = 0xfb,
    lyc_interrupt = 0x40,
    obj_attr_priority = 0x80,
    obj_attr_vflip = 0x40,
    obj_attr_hflip = 0x20,
    obj_attr_obg = 0x10,
    no_interrupt_mode = 0x38,
}

export enum IFMask {
    timer_on = 0x4,
    timer_off = 0x1b,
    stat_on = 0x2,
    stat_off = 0x1d,
}

export enum RomSize {
    s_32_kb,
    s_64_kb,
    s_128_kb,
    s_256_kb,
    s_512_kb,
    s_1_mb,
    s_1_1_mb = 0x52,
    s_1_2_mb = 0x53,
    s_1_5_mb = 0x54,
    s_2_mb = 6,
}

export enum RamSize {
    no_ram,
    s_2_kb = 0x1,
    s_8_kb = 0x2,
    s_32_kb = 0x3,
    s_128_kb = 0x4,
}

export enum WRam {
    wram_start = 0xc000,
    wram_end = 0xdfff,
    wram_bank_size = 0x1000,
    wram_upper_bank_start = 0xd000,
    svbk_mask_bank = 0x07,
}

export enum VRam {
    vram_size = 0x6000,
    vram_bank_size = 0x2000,
    vram_start = 0x8000,
    vram_end = 0x9fff,
    obj_data_start = vram_start,
    bg_char_data_8000 = vram_start,
    bg_char_data_8800 = 0x8800,
    bg_char_datA_9000 = 0x9000,
    dpl_data_1 = 0x9800,
    dpl_data_2 = 0x9c00,
}

export enum HRam {
    hram_end = 0xfffd,
}

export enum ERam {
    ram_start = 0xa000,
}

export enum Address {
    program_start = 0x100,
    nint_gp_start = 0x104,
    nint_gp_end = 0x133,
    title_start = 0x134,
    title_end = 0x142,
    gbc = 0x143,
    is_gbc = 0x80,
    gbc_only = 0xc0,
    sgb = 0x146,
    cart_type = 0x147,
    rom_size = 0x148,
    ram_size = 0x149,
    dest_code = 0x14a,
    compl_check = 0x14d,
    mbc1_rg1_start = 0x2000,
    mbc5_romb1_start = 0x3000,
    rom_bank_start = 0x4000,
    rom_bank_end = 0x7fff,
    mbc1_reg2_sstart = rom_bank_start,
    mbc1_reg3_start = 0x6000,
    mbc1_reg3_end = rom_bank_end,
    rom_max = rom_bank_end,
}

export enum OAM {
    oam_start = 0xfe00,
    oam_end = 0xfe9f,
}

export enum Region {
    japan,
    not_japan = 0x1,
}

export enum Cartridge {
    rom,
    rom_mbc1,
    rom_mbc1_ram,
    rom_mbc1_ram_batt,
    rom_mbc2 = 5,
    rom_mbc2_battery,
    rom_ram = 8,
    rom_ram_battery,
    rom_mmm01 = 0xb,
    rom_mmm01_sram = 0xc,
    rom_mmm01_sram_batt = 0xd,
    rom_mbc3_timer_batt = 0xf,
    rom_mbc3_timer_ram_batt = 0x10,
    rom_mbc3 = 0x11,
    rom_mbc3_ram = 0x12,
    rom_mbc3_ram_batt = 0x13,
    rom_mbc5 = 0x19,
    rom_mbc5_ram = 0x1a,
    rom_mbc5_ram_batt = 0x1b,
    rom_mbc5_rmb = 0x1c,
    rom_mbc5_rmb_sram = 0x1d,
    rom_mbc5_rmb_sram_batt = 0x1e,
    huc3 = 0xfe,
    huc1_ram_battery = 0xff,
}

export enum LCDC {
    on = 0x80,
    window = 0x20,
    bg = 0x01,
    line_vblank = 0x90,
}

export enum LCDCMask {
    bg_on = 0x01,
    bg_off = 0xfe,
    bg_char_data = 0x10,
    bg_char_data_8000 = bg_char_data,
    bg_char_data_8800 = 0xef,
    bg_code_area_1 = 0xf7,
    bg_code_area_2 = 0x08,
    window_code_area_0 = 0xbf,
    window_code_area_1 = 0x40,
    window_on = 0x20,
    window_off = 0xdf,
    obj_on = 0x02,
    obj_off = 0xfd,
    obj_8x16_on = 0x04,
    obj_8x16_off = 0xfb,
}

export enum IO {
    p1 = 0xff00,
    sb = 0xff01,
    sc = 0xff02,
    div = 0xff04,
    tima = 0xff05,
    tma = 0xff06,
    tac = 0xff07,
    if = 0xff0f,
    lcdc = 0xff40,
    stat = 0xff41,
    scy = 0xff42,
    scx = 0xff43,
    ly = 0xff44,
    lyc = 0xff45,
    dma = 0xff46,
    bgp = 0xff47,
    obg0 = 0xff48,
    obg1 = 0xff49,
    wy = 0xff4a,
    wx = 0xff4b,
    key1 = 0xff4d,
    vbk = 0xff4f,
    bcps = 0xff68,
    bcpd = 0xff69,
    ocps = 0xff6a,
    ocpd = 0xff6b,
    svbk = 0xff70,
    max = 0xffff,
    ie = max,
}

export enum MaskP1 {
    p1_right_off = 0x01,
    p1_a_off = p1_right_off,
    p1_left_off = 0x02,
    p1_b_off = p1_left_off,
    p1_up_off = 0x04,
    p1_select_off = p1_up_off,
    p1_down_off = 0x08,
    p1_start_off = p1_down_off,
    p1_right_on = 0xfe,
    p1_a_on = 0xfe,
    p1_left_on = 0xfd,
    p1_b_on = 0xfd,
    p1_up_on = 0xfb,
    p1_select_on = 0xfb,
    p1_down_on = 0xf7,
    p1_start_on = 0xf7,
    p1_rw = 0xcf,
    p14 = 0x20,
    p10_p13 = 0xf0,
}
