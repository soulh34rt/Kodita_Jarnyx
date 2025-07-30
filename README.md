<h1 align="center"> Kodita Jarnyx </h1>

<p align="center">
  <img src="./Kodita Jarnyx - KODITA.png" alt="Kodita" width="300"/>
</p>

What´s Kodita Jarnyx and Kodita Jarnyx Digital encoder?  
Kodita Jarnyx is an easy-to-learn method for encoding and decoding text by transforming each letter according to its position in the word and the word’s length. It’s designed to be simple to pick up and serves as an introduction to coding.

Circular Shift Encoding System:

    A comprehensive character set is defined, including all supported symbols.

    Character transformation is based on modular arithmetic operations.

    This approach ensures that output characters always remain within the defined alphabet boundaries.

Negative Value Handling:

    During decoding, negative indices are normalized using modular arithmetic:
    newIndex = (indexInAlphabet - seed - charPosition) % alphabetSize

    If newIndex is negative, it is corrected by adding alphabetSize to ensure a valid index.

Optimized Seed Calculation:

    The seed is computed exclusively from characters included in the defined alphabet.

    This prevents discrepancies caused by unsupported symbols such as spaces or special characters.

Extended Alphabet Support:

    The alphabet includes Latin characters (with diacritics), as well as Japanese, Chinese, Korean, and Cyrillic scripts.

    Supports over 500 distinct characters, enabling multilingual compatibility.

Robust and Reversible Design:

    The encoding is fully reversible, ensuring lossless decoding.

    Special characters and whitespace are handled appropriately.

    Delivers consistent and reliable behavior across various languages and character sets.

<p align="center">
  If you want to send me a message:  
  https://t.me/Awr2fw
</p>

<p align="center">
  <strong>Kodita Jarnyx is licensed under GNU GPL v3.0</strong><br>
  The little rat’s name is Kodita, <strong>she loves cheese</strong> and <strong>watching movies</strong>  
</p>


