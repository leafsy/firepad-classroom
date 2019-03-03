import { Mode } from './models';

const msg = '"Hello world!"';
const cmt1 = ' Content here is shared with everyone. ';
const cmt2 = ' Content here is visible only to you. ';

export const allModes : Mode[] = [
	{ name: 'C/C++', value: 'c_cpp', contMain: `//${cmt1}\n#include <stdio.h>\n\nint main()\n{\n  char *greeting = ${msg};\n  printf(greeting);\n  return 0;\n}`, contNote: `//${cmt2}`},
    { name: 'C#', value: 'csharp', contMain: `//${cmt1}\nusing System;\n\nnamespace Hello {\n  class Program {\n    static void Main(string[] args) {\n      string greeting = ${msg};\n      Console.WriteLine(greeting);\n    }\n  }\n}`, contNote: `//${cmt2}`},
    { name: 'HTML', value: 'html', contMain: `<!--${cmt1}-->\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello</title>\n  </head>\n  <body>\n    <h1>${msg}</h1>\n  </body>\n</html>`, contNote: `<!DOCTYPE html><!--${cmt2}-->`},
    { name: 'Java', value: 'java', contMain: `//${cmt1}\npublic class Hello {\n  public static void main(String[] args) {\n    String greeting = ${msg};\n    System.out.println(greeting);\n  }\n}`, contNote: `//${cmt2}`},
    { name: 'JavaScript', value: 'javascript', contMain: `//${cmt1}\nfunction hello() {\n  const greeting = ${msg};\n  console.log(greeting);\n}`, contNote: `//${cmt2}`},
    { name: 'MATLAB', value: 'matlab', contMain: `%${cmt1}\nclassdef hello\n  methods\n    function greet(this)\n      disp(${msg})\n    end\n  end\nend`, contNote: `%${cmt2}`},
    { name: 'OCaml', value: 'ocaml', contMain: `(*${cmt1}*)\nlet hello = fun () ->\n  let greeting = ${msg}\n  in print_endline greeting`, contNote: `(*${cmt2}*)`},
    { name: 'PHP', value: 'php', contMain: `<?php\n\n//${cmt1}\nfunction hello() {\n  $greeting = ${msg};\n  echo $greeting;\n}\n\n?>`, contNote: `<?php\n  //${cmt2}\n?>`},
    { name: 'Python', value: 'python', contMain: `#${cmt1}\ndef hello():\n  greeting = ${msg}\n  print(greeting)`, contNote: `#${cmt2}`},
    { name: 'R', value: 'r', contMain: `#${cmt1}\ngreeting <- ${msg}\nprint(greeting)`, contNote: `#${cmt2}`},
    { name: 'SQL', value: 'sql', contMain: `/*${cmt1}*/\nSELECT *\nFROM Greetings G\nWHERE G.content = ${msg}`, contNote: `/*${cmt2}*/`},
    { name: 'Text', value: 'text', contMain: `${cmt1}\n\n${msg}`, contNote: `${cmt2}`},
]