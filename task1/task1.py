"""
Todo:
-Design and create a model of the english language 
    remove all char except ASCII 
    convert all letters to upper case 
-Create a trigram model, this will count the number of times
    each 3 letter char appears 
"""


## Take books and remove all char except ASCII, convert to upper case 

def read_from_txt(input_file, output_file):
    with open(input_file, 'r') as file:
        txt=file.read()

        processed_txt =''

    for char in txt:
        if char.isascii() and (char.isalpha() or char == '.' or char == ' '):
                processed_txt += char.upper()

    with open(output_file, 'w') as file:
        file.write(processed_txt)

    print("processed text: ")
    print(processed_txt)
    
input_file = 'Books/Frankenstein; Or, The Modern Prometheus by Mary Wollstonecraft Shelley.txt'
output_file = 'output frank.txt'

read_from_txt(input_file, output_file)

print("text has been processed and saved to {output_file}")
