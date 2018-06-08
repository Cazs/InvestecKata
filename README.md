# InvestecKata
Investec kata assessment

String Calculator
--------------------------
Create a simple string calculator with a method
```ts
    add(numbers: string) :Number
```

To run all tests, run:
```sh
    npm test
```

To compile run:
```sh
    npm run compile
```

To execute default method, i.e. add(numbers: string), run:
```sh
    npm run start <NUMBERS>
```

To compile and execute default method, i.e. add(numbers: string), run:
```sh
    npm run compile-start <NUMBERS>
```

Where &lt;NUMBERS&gt; is a string of numbers delimited by commas, new-line characters or a custom delimiter.
<br/>
Define custom delimiters by adding a string with following format at the beginning of your input
```//[delimiter]\n<NUMBERS>```
i.e.
```sh
    npm run compile-start "//[+]\n1+2"
```
 would return 3.

You can also add multiple delimiters using the following format:
```//[delimiter1][delimiter2]\n<NUMBERS>```
i.e. 
```sh
    npm run compile-start "//[+][&]\n1+2&3"
```
 would return 6.
 
 P.S.
 * Delimiters can be of arbitrary length.
 * Numbers have to be between 0 and 1000 (inclusive).
