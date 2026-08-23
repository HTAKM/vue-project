import Segment from '@/components/Segment.vue';

export default {
    name: 'Color',
    components: {
        Segment
    },
    props: {
        isDark: Boolean
    },
    data() {
        return {
            rgb: {
                r: '0',
                g: '0',
                b: '0'
            },
            hex: '#000000',
            hexFull: '#000000',
            hsv: {
                h: '0',
                s: '0',
                v: '0'
            },
            hsl: {
                // h is same as hsv.h
                s: '0',
                l: '0'
            }
        };
    },
    computed: {
        onUpdateRgb() {
            this.rgb.r = this.filterInvalidChars(this.rgb.r, 'int');
            this.rgb.g = this.filterInvalidChars(this.rgb.g, 'int');
            this.rgb.b = this.filterInvalidChars(this.rgb.b, 'int');
            if (this.rgb.r == '') this.rgb.r = '0';
            if (this.rgb.g == '') this.rgb.g = '0';
            if (this.rgb.b == '') this.rgb.b = '0';
            const r = Math.max(0, Math.min(255, parseInt(this.rgb.r)));
            const g = Math.max(0, Math.min(255, parseInt(this.rgb.g)));
            const b = Math.max(0, Math.min(255, parseInt(this.rgb.b)));
            this.rgb.r = r.toString();
            this.rgb.g = g.toString();
            this.rgb.b = b.toString();
            this.hex = this.rgbToHex(r, g, b);
            this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
            const hsv = this.rgbToHsv(r, g, b);
            this.hsv.h = (hsv.h * 360).toFixed(0);
            this.hsv.s = (hsv.s * 100).toFixed(0);
            this.hsv.v = (hsv.v * 100).toFixed(0);
            const hsl = this.hsvToHsl(hsv.h, hsv.s, hsv.v);
            this.hsl.s = (hsl.s * 100).toFixed(0);
            this.hsl.l = (hsl.l * 100).toFixed(0);
        },
        onUpdateHex() {
            this.hex = this.filterInvalidChars(this.hex, 'hex');
            if (this.hex.length > 6) {
                this.hex = this.hex.substring(0, 6);
                this.hex = '#' + this.hex;
                return
            }
            this.hex = '#' + this.hex;
            this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
            const rgb = this.hexToRgb(this.hexFull);
            this.rgb.r = rgb.r.toString();
            this.rgb.g = rgb.g.toString();
            this.rgb.b = rgb.b.toString();
            this.hex = '#' + this.hex.substring(1);
            const hsv = this.rgbToHsv(rgb.r, rgb.g, rgb.b);
            this.hsv.h = (hsv.h * 360).toFixed(0);
            this.hsv.s = (hsv.s * 100).toFixed(0);
            this.hsv.v = (hsv.v * 100).toFixed(0);
        },
        onUpdateHsv() {
            if (this.hsv.h == '') this.hsv.h = '0';
            if (this.hsv.s == '') this.hsv.s = '0';
            if (this.hsv.v == '') this.hsv.v = '0';
            this.hsv.h = this.filterInvalidChars(this.hsv.h, 'int');
            this.hsv.s = this.filterInvalidChars(this.hsv.s, 'int');
            this.hsv.v = this.filterInvalidChars(this.hsv.v, 'int');
            const h = Math.max(0, Math.min(360, parseInt(this.hsv.h)));
            const s = Math.max(0, Math.min(100, parseInt(this.hsv.s))) / 100;
            const v = Math.max(0, Math.min(100, parseInt(this.hsv.v))) / 100;
            this.hsv.h = h.toString();
            this.hsv.s = (s * 100).toFixed(0).toString();
            this.hsv.v = (v * 100).toFixed(0).toString();
            const hsl = this.hsvToHsl(h, s, v);
            this.hsl.s = (hsl.s * 100).toFixed(0).toString();
            this.hsl.l = (hsl.l * 100).toFixed(0).toString();
            const rgb = this.hsvToRgb(h, s, v);
            this.rgb.r = rgb.r.toString();
            this.rgb.g = rgb.g.toString();
            this.rgb.b = rgb.b.toString();
            this.hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);
            this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
        },
        onUpdateHsl() {
            if (this.hsv.h == '') this.hsv.h = '0';
            if (this.hsl.s == '') this.hsl.s = '0';
            if (this.hsl.l == '') this.hsl.l = '0';
            this.hsv.h = this.filterInvalidChars(this.hsv.h, 'int');
            this.hsl.s = this.filterInvalidChars(this.hsl.s, 'int');
            this.hsl.l = this.filterInvalidChars(this.hsl.l, 'int');
            const h = Math.max(0, Math.min(360, parseInt(this.hsv.h)));
            const s = Math.max(0, Math.min(100, parseInt(this.hsl.s))) / 100;
            const l = Math.max(0, Math.min(100, parseInt(this.hsl.l))) / 100;
            this.hsv.h = h.toString();
            this.hsl.s = (s * 100).toFixed(0).toString();
            this.hsl.l = (l * 100).toFixed(0).toString();
            const hsv = this.hslToHsv(h, s, l);
            this.hsv.s = (hsv.s * 100).toFixed(0).toString();
            this.hsv.v = (hsv.v * 100).toFixed(0).toString();
            const rgb = this.hsvToRgb(h, hsv.s, hsv.v);
            this.rgb.r = rgb.r.toString();
            this.rgb.g = rgb.g.toString();
            this.rgb.b = rgb.b.toString();
            this.hex = this.rgbToHex(rgb.r, rgb.g, rgb.b);
            this.hexFull = this.hex + "0".repeat(7 - this.hex.length);
        }
    },
    methods: {
        onColorPicked(r, g, b) {
            this.rgb.r = r.toString();
            this.rgb.g = g.toString();
            this.rgb.b = b.toString();
            this.onUpdateRgb();
        },
        isHex(c) {
            return c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';
        },
        isInt(c) {
            return c >= '0' && c <= '9';
        },
        isFloat(c) {
            return c >= '0' && c <= '9' || c == '.';
        },
        removeCharAt(str, index) {
            return str.substring(0, index) + str.substring(index + 1);
        },
        filterInvalidChars(str, method) {
            let filtered = '';
            let hasDecimal = false;
            for (let i = 0; i < str.length; i++) {
                if (method === 'hex' && this.isHex(str[i])) {
                    filtered += str[i];
                } else if (method === 'int' && this.isInt(str[i])) {
                    filtered += str[i];
                } else if (method === 'float') {
                    if (str[i] === '.' && !hasDecimal) {
                        filtered += str[i];
                        hasDecimal = true;
                    } else if (this.isInt(str[i])) {
                        filtered += str[i];
                    }
                }
            }
            return filtered;
        },
        rgbToHex(r, g, b) {
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        hexToRgb(hex) {
            let r = parseInt(hex.substring(1, 3), 16);
            let g = parseInt(hex.substring(3, 5), 16);
            let b = parseInt(hex.substring(5, 7), 16);
            return { r: r, g: g, b: b };
        },
        rgbToHsv(r, g, b) {
            r /= 255;
            g /= 255;
            b /= 255;
            let max = Math.max(r, g, b);
            let min = Math.min(r, g, b);
            let d = max - min;
            let s = max == 0 ? 0 : d / max;
            let v = max;
            let h;
            if (max == min) {
                h = 0;
            } else {
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    case b:
                        h = (r - g) / d + 4;
                        break;
                }
                h /= 6;
            }
            return { h: h, s: s, v: v };
        },
        hsvToRgb(h, s, v) {
            let c = v * s;
            let x = c * (1 - Math.abs((h / 60) % 2 - 1));
            let m = v - c;
            let r, g, b;
            if (h >= 0 && h < 60) {
                r = c;
                g = x;
                b = 0;
            } else if (h >= 60 && h < 120) {
                r = x;
                g = c;
                b = 0;
            } else if (h >= 120 && h < 180) {
                r = 0;
                g = c;
                b = x;
            } else if (h >= 180 && h < 240) {
                r = 0;
                g = x;
                b = c;
            } else if (h >= 240 && h < 300) {
                r = x;
                g = 0;
                b = c;
            } else {
                r = c;
                g = 0;
                b = x;
            }
            r = Math.round((r + m) * 255);
            g = Math.round((g + m) * 255);
            b = Math.round((b + m) * 255);
            return { r: r, g: g, b: b };
        },
        hslToHsv(h, s, l) {
            let v = l + s * Math.min(l, 1 - l);
            let newS = v === 0 ? 0 : 2 * (1 - l / v);
            return { h: h, s: newS, v: v };
        },
        hsvToHsl(h, s, v) {
            let l = v * (1 - s / 2);
            let newS = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
            return { h: h, s: newS, l: l };
        }
    }
}