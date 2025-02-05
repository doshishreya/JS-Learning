// StringsExample.js - Example 2

const sentence = "  JavaScript is a powerful programming language.  ";

// Trim
const trimmed = sentence.trim();
console.log("Trimmed Sentence:", trimmed); // "JavaScript is a powerful programming language."

// Replace
const replaced = trimmed.replace("powerful", "versatile");
console.log("Replaced Sentence:", replaced); // "JavaScript is a versatile programming language."

// Split
const words = trimmed.split(" ");
console.log("Words Array:", words); // ["JavaScript", "is", "a", "powerful", "programming", "language."]

// Substring
const sub = trimmed.substring(0, 10);
console.log("Substring:", sub); // "JavaScript"

// Template Literals
const lang = "JavaScript";
const feature = "versatility";
const message = `${lang} is known for its ${feature}.`;
console.log("Template Literal:", message); // "JavaScript is known for its versatility."