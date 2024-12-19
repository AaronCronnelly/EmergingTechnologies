# EmergingTechnologies


## Description 
Welcome to the repository for my Emerging Technologies class assessment. This project explores new and emerging technologies in computing, applying theoretical knowledge to practical tasks and a final project. This README provides a clear explanation of the work, written to be both informative and accessible.

## Table of Contents 
- [Enviroment Setup](Enviroment)
- [Task 1](#Task-1)
- [Task 2](#Task-2)
- [Task 3](#Task-3)
- [Task 4](#Task-4)
- [Project](#Project)

# Enviroment
To run the code and replicate the tasks, you’ll need to set up your environment correctly. Here’s a step-by-step guide:

### Tools You Need:

1. **VS Code:**
    - Download from [VS Code](https://code.visualstudio.com/).
    - Install Python from [Python.org](https://www.python.org/downloads/).
    - Use VS Code extensions for Python and Jupyter Notebooks for efficient coding and testing.
2. **Anaconda:**
    - Anaconda offers an alternative environment with pre-installed packages. Download it here: [Anaconda Navigator](https://www.anaconda.com/products/navigator).
3. **Git:**
    - Git is essential for version control. Install it from [Git-SCM](https://git-scm.com/).

## Tasks Overview

The tasks involve building and analyzing a trigram model to study and generate text patterns. Below is a detailed walkthrough of each task.

### Task 1: Third-order Letter Approximation Model

The objective of this task was to create a trigram model using text data from [Project Gutenberg](https://www.gutenberg.org/). A trigram represents a sequence of three consecutive characters.

### Approach:

1. **Text Cleaning:**
    - Five books were selected in plain text format.
    - Preambles, postambles, and non-relevant content were removed.
    - Retained only ASCII letters, spaces, and periods, converting all text to uppercase for consistency.
2. **Model Building:**
    - Counted the occurrences of each trigram in the cleaned text.
    - Stored the results in a dictionary, where keys were trigrams, and values were their frequencies.

Example Code:

```
def create_trigram_model(text):
    trigram_counts = {}
    for i in range(len(text) - 2):
        trigram = text[i:i+3]
        if trigram in trigram_counts:
            trigram_counts[trigram] += 1
        else:
            trigram_counts[trigram] = 1
    return trigram_counts
```

The resulting dictionary served as the foundation for subsequent tasks.

### Task 2: Third-order Letter Approximation Generation

This task involved generating a 10,000-character-long text string using the trigram model from Task 1. The generated text mimics English language patterns.

### Implementation:

1. **Initialization:**
    - Started with a two-character seed (e.g., "TH").
2. **Generation Logic:**
    - For each seed, identified all trigrams that began with the seed.
    - Randomly selected the next character, weighted by trigram frequencies.
    - Updated the seed to include the new character and repeated the process.

Example:

- Seed: "TH"
    - Possible trigrams: "THE" (50%), "THA" (20%), "THI" (15%), "TH " (15%).
    - Probabilities determined the next character, creating a realistic flow of text.

### Task 3: Analyze Your Model

This task evaluated the quality of the generated text by determining how many of the generated "words" were actual English words.

### Steps:

1. **Tokenization:**
    - Split the generated text into individual words.
2. **Validation:**
    - Compared each word against a dictionary of valid English words (`words.txt`).
3. **Analysis:**
    - Calculated the percentage of valid words in the text.

Code Snippet:

```
def calculate_valid_words(text, word_list):
    words = text.split()
    valid_count = sum(1 for word in words if word in word_list)
    return (valid_count / len(words)) * 100
```

This provided a measurable metric for the model's accuracy.

### Task 4: Export Your Model as JSON

To make the trigram model reusable, it was exported as a JSON file.

### Steps:

1. **Serialization:**
    - Used Python’s `json` library to convert the dictionary into JSON format.
2. **File Export:**
    - Saved the JSON file as `trigrams.json` in the repository.

Code Snippet:

```
import json

def export_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f)
```

---

## Project

The final project involved creating a version of the ELIZA chatbot, an early example of artificial intelligence, and deploying it online using GitHub Pages. ELIZA uses pattern matching to simulate conversation.

### Key Features:

1. **Interface:**
    - Developed a user-friendly web interface with HTML and CSS.
    - Included a text box for user input and a display area for conversation history.
2. **Chatbot Logic:**
    - Implemented in JavaScript, focusing on detecting patterns in user input and responding with predefined phrases.
    - For instance, if the user says, "I feel sad," the bot might respond, "Why do you feel that way?"
3. **Deployment:**
    - Hosted the chatbot on GitHub Pages. The link to access it is included in this README.

This project demonstrated the integration of web technologies with basic AI concepts.

---

## References

1. Trigrams in Python: Implementation of text preprocessing and trigram modeling.
2. ELIZA Chatbot in JavaScript: A conversational chatbot built using JavaScript.
3. [ASCII Character Processing](https://en.wikipedia.org/wiki/ASCII): Understanding ASCII constraints in text preprocessing.
4. [Jupyter Notebooks](https://jupyter.org/): Primary environment for Python development.
5. [Anaconda Setup](https://www.anaconda.com/products/navigator): Alternative environment setup.
6. [VS Code Setup](https://code.visualstudio.com/): Integrated development environment for writing and debugging code.
7. [Project Gutenberg](https://www.gutenberg.org/): Source for public domain books.
8. [Regular Expressions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): Used in ELIZA chatbot for pattern matching.
9. [Text Normalization Techniques](https://towardsdatascience.com/text-normalization-6a6a4eaa03ab): Guide to processing and cleaning text data.
10. [Trigram Language Models](https://en.wikipedia.org/wiki/N-gram): Theory and application of n-gram models in language processing.
