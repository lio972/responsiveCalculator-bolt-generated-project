# Responsive Web Calculator v1.0.0

  A modern, responsive calculator application built with HTML, CSS, and JavaScript.

  ![Calculator Screenshot](screenshot.png)

  ## Features

  ### Core Functionality
  - Basic arithmetic operations (+, -, ×, ÷)
  - Sequential operations (e.g., 5 + 3 - 2 = 6)
  - Decimal number support
  - Clear (C) and backspace (⌫) functionality
  - Error handling (e.g., division by zero)

  ### User Interface
  - Clean, modern design with dark theme
  - Responsive layout for all screen sizes
  - Large, readable display
  - Touch-friendly buttons for mobile devices
  - Keyboard support for all operations

  ### Advanced Features
  - Calculation history display (up to 5 entries)
  - Real-time display updates
  - Visual feedback for operations
  - Error messages with timeout

  ## Keyboard Shortcuts

  | Key          | Function           |
  |--------------|--------------------|
  | 0-9          | Number input       |
  | .            | Decimal point      |
  | +, -, *, /   | Basic operations   |
  | Enter, =     | Calculate result   |
  | Backspace    | Delete last digit  |
  | Escape       | Clear all          |

  ## Installation

  1. Clone the repository
  2. Install dependencies:
     ```bash
     npm install
     ```
  3. Start development server:
     ```bash
     npm run dev
     ```

  ## Building for Production

  To create a production build:
  ```bash
  npm run build
  ```

  To preview the production build:
  ```bash
  npm run preview
  ```

  ## Testing

  The calculator includes unit tests for core functionality. Run tests with:
  ```bash
  npm test
  ```

  Tests cover:
  - Basic arithmetic operations
  - Decimal calculations
  - Sequential operations
  - Error handling
  - Edge cases

  ## Code Structure

  ```
  calculator/
  ├── index.html        # Main HTML structure
  ├── style.css         # Styling and responsive design
  ├── calculator.js     # Core calculator logic
  ├── test.js           # Unit tests
  ├── package.json      # Project configuration
  └── README.md         # Documentation
  ```

  ## Contributing

  Contributions are welcome! Please follow these guidelines:
  1. Fork the repository
  2. Create a feature branch
  3. Commit your changes
  4. Push to the branch
  5. Create a pull request

  ## License

  This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

  ## Version History

  - 1.0.0 (Current)
    - Initial release
    - Core calculator functionality
    - History display
    - Responsive design
    - Unit tests
    - Comprehensive documentation

  ## Known Issues

  - Limited to basic arithmetic operations
  - No memory functions
  - No scientific notation support

  ## Future Improvements

  - Add memory functions (M+, M-, MR, MC)
  - Implement scientific calculator features
  - Add theme customization
  - Support for parentheses and complex expressions
  - Add percentage calculations
  - Implement undo/redo functionality
