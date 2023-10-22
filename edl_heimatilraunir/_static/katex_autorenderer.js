katex_options = {
macros: {
  "\\SI": "{#1\\;\\mathrm{#2}}",
  "\\squared": "{^{2}}",
  "\\cubed": "{^{3}}",
  "\\per": "/",
  "\\tera": "T",
  "\\giga": "G",
  "\\mega": "M",
  "\\kilo": "k",
  "\\milli": "m",
  "\\micro": "μ",
  "\\nano": "n",
  "\\kilogram": "\\text{kg}\\,",
  "\\meter": "\\text{m}\\,",
  "\\second": "\\text{s}\\,",
  "\\ampere": "\\text{A}\\,",
  "\\kelvin": "\\text{K}\\,",
  "\\mol": "\\text{mol}\\,",
  "\\candela": "\\text{cd}\\,",
  "\\newton": "\\text{N}\\,",
  "\\hertz": "\\text{Hz}\\,",
  "\\pascal": "\\text{Pa}\\,",
  "\\volt": "\\text{V}\\,",
  "\\watt": "\\text{W}\\,",
  "\\joule": "\\text{J}\\,",
  "\\henry": "\\text{H}\\,",
  "\\farad": "\\text{F}\\,",
  "\\coulomb": "\\text{C}\\,",
  "\\ohm": "\\Omega\\,",
  "\\weber": "\\text{Wb}\\,",
  "\\tesla": "\\text{T}\\,",
  "\\degree": "\\text{deg}\\,"
  },
delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
        ]
}
document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, katex_options);
});
