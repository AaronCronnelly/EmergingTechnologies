# EmergingTechnologies


## Description 
This repo is used for the class Emerging Technologies, the class will include 4 total tasks, and a project. Theses will be created using python.

## Table of Contents 
- [Task 1](#Task-1)
- [Task 2](#Task-2)
- [Task 3](#Task-3)
- [Task 4](#Task-4)
- [Project](#Project)


# Task-1
For the first task, we had to take books from [Project GutenBerg](https://www.gutenberg.org/). From this we then had to create a model of the english language that would take the contents of the book and only using ASCII the contents would be taken to all UpperCase. After this we had to create a trigram model by counting the number of times each sequence of three characters appears.

## Taking the books in
To take the book in the folling was done
{
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
}



# Task-2


# Task-3


# Task-4


#Project
