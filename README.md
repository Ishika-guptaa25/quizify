# Quizify

An interactive, user-friendly quiz application that enables users to test their knowledge across various topics. Built with modern web technologies, Quizify provides an engaging platform for learning and self-assessment through dynamic question sets and instant feedback.

## Features

- **Interactive Quiz Interface**: Clean and intuitive design for seamless quiz-taking experience
- **Multiple Question Support**: Handle various question formats and topics
- **Real-time Score Tracking**: Instant feedback on performance with live score updates
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Progress Indicators**: Visual feedback showing quiz completion status
- **Results Summary**: Comprehensive breakdown of quiz performance with correct/incorrect answers
- **Retry Functionality**: Option to retake quizzes to improve scores
- **Modern UI/UX**: Engaging animations and smooth transitions

## Demo

🔗 **[Live Demo](https://quizify-nine-sigma.vercel.app/)**

## Screenshots

![Quizify Interface](<img width="999" height="763" alt="image" src="https://github.com/user-attachments/assets/9588cfe9-08f5-4f4b-b8d2-e49ae21f38e1" />
)

## Getting Started

### Prerequisites

No build tools or dependencies required. This is a lightweight web application built with vanilla JavaScript.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ishika-guptaa25/quizify.git
```

2. Navigate to the project directory:
```bash
cd quizify
```

3. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

Or use a local development server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server
```

Then navigate to `http://localhost:8000` in your browser.

## Usage

1. **Start Quiz**: Click the "Start Quiz" button on the home screen
2. **Answer Questions**: Select your answer from the multiple choice options
3. **Navigate**: Use "Next" button to proceed through questions
4. **View Results**: Complete all questions to see your final score and review
5. **Retry**: Click "Retake Quiz" to practice again

## Project Structure

```
quizify/
├── index.html          # Main HTML structure
├── styles.css          # Styling and animations
├── script.js           # Quiz logic and functionality
└── README.md          # Project documentation
```

## Technologies Used

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with flexbox/grid and animations
- **JavaScript (ES6+)**: Vanilla JS for dynamic quiz functionality
- **Vercel**: Deployment and hosting platform

## Key Features Explained

### Question Management
- Dynamic question loading
- Randomization support (optional)
- Multiple question types support

### Score Calculation
- Automatic score computation
- Percentage calculation
- Performance feedback

### User Experience
- Smooth transitions between questions
- Visual feedback for selected answers
- Progress bar tracking
- Responsive button states

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Adding Questions

Edit the `script.js` file to add or modify questions:

```javascript
const questions = [
    {
        question: "Your question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0 // Index of correct answer
    },
    // Add more questions...
];
```

### Styling

Customize colors, fonts, and layout in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --background: #your-color;
}
```

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Fork this repository
2. Sign up for [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Deploy with one click

Alternative deployment options:
- GitHub Pages
- Netlify
- Firebase Hosting
- Any static hosting service

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas
- Add more question categories
- Implement timer functionality
- Add difficulty levels
- Create question database
- Add user authentication
- Implement leaderboard system

## Roadmap

- [ ] Question timer for each question
- [ ] Multiple quiz categories
- [ ] Difficulty level selection (Easy, Medium, Hard)
- [ ] User authentication and profile
- [ ] Quiz history and statistics
- [ ] Leaderboard with high scores
- [ ] Question shuffle feature
- [ ] Dark mode toggle
- [ ] Sound effects and animations
- [ ] Share results on social media
- [ ] Export results as PDF
- [ ] Multi-language support

## Performance

- Lightweight: < 50KB total size
- Fast load times
- No external dependencies
- Optimized for mobile devices

## Acknowledgments

- Inspired by popular quiz platforms like Kahoot and Quizlet
- Thanks to the open-source community for inspiration
- Special thanks to all contributors

## Support

If you find this project helpful:
- Star this repository
- Report bugs via [Issues](https://github.com/Ishika-guptaa25/quizify/issues)
- Suggest new features
- Share with others
  
---
