import { Mode } from './models';

export const allModes : Mode[] = [
	{ name: 'C/C++', value: 'c_cpp', template: `#include <stdio.h>\n\nint main()\n{\n  char *greeting = "Hello world!";\n  printf(greeting);\n  return 0;\n}` },
    { name: 'C#', value: 'csharp', template: `using System;\n\nnamespace Hello {\n  class Program {\n    static void Main(string[] args) {\n      string greeting = "Hello world!";\n      Console.WriteLine(greeting);\n    }\n  }\n}` },
    { name: 'HTML', value: 'html', template: `<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello</title>\n  </head>\n  <body>\n    <h1>Hello world!</h1>\n  </body>\n</html>` },
    { name: 'Java', value: 'java', template: `public class Hello {\n  public static void main(String[] args) {\n    String greeting = "Hello world!";\n    System.out.println(greeting);\n  }\n}` },
    { name: 'JavaScript', value: 'javascript', template: `function hello() {\n  const greeting = "Hello world!";\n  console.log(greeting);\n}` },
    { name: 'MATLAB', value: 'matlab', template: `classdef hello\n  methods\n    function greet(this)\n      disp("Hello world!")\n    end\n  end\nend` },
    { name: 'OCaml', value: 'ocaml', template: `let hello = fun () ->\n  let greeting = "Hello world!"\n  in print_endline greeting` },
    { name: 'PHP', value: 'php', template: `<?php\n\nfunction hello() {\n  $greeting = "Hello world!";\n  echo $greeting;\n}\n\n?>` },
    { name: 'Python', value: 'python', template: `def hello():\n  greeting = "Hello world!"\n  print(greeting)` },
    { name: 'R', value: 'r', template: `greeting <- "Hello world!"\nprint(greeting)` },
    { name: 'SQL', value: 'sql', template: `SELECT *\nFROM Greetings G\nWHERE G.content = "Hello world!"` },
    { name: 'Text', value: 'text', template: `Hello world!` },
]