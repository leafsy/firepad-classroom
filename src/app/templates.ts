import { Mode } from './models';

export const allModes : Mode[] = [
	{ name: 'C/C++', value: 'c_cpp', template: '' },
    { name: 'C#', value: 'csp', template: '' },
    { name: 'HTML', value: 'html', template: '' },
    { name: 'Java', value: 'java', template: '' },
    { name: 'JavaScript', value: 'javascript', template: 'function main() {\n  console.log("Hello world!");\n}' },
    { name: 'MATLAB', value: 'matlab', template: '' },
    { name: 'OCaml', value: 'ocaml', template: '' },
    { name: 'PHP', value: 'php', template: '' },
    { name: 'Python', value: 'python', template: 'def main():\n  print("Hello world!")\n' },
    { name: 'R', value: 'r', template: '' },
    { name: 'SQL', value: 'sql', template: '' },
    { name: 'Text', value: 'text', template: '' },
]