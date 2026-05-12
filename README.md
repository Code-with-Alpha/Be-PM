# Chunav-Sathi: Let's Rule Together 🇮🇳
**Be PM: Road to Prime Minister**

Welcome to **Chunav-Sathi**, an interactive, educational adventure game designed to teach the fundamentals of Indian election civics. Players embark on a journey starting as a "Common Citizen" and navigate through 8 engaging levels of India's electoral process to ultimately become the Prime Minister.

initially deployment 

## 📌 1. Chosen Vertical
**EdTech / Civic Technology / Tech for Social Good**  
We chose the educational technology vertical with a focus on civic engagement. Understanding democracy and the electoral process is crucial for the youth, but traditional textbooks can be dry. Our project bridges this gap by gamifying civic education, making it interactive, accessible, and highly engaging.

## 🧠 2. Approach and Logic
Our approach is centered around **Gamified Learning** and **Conversational UI**. 
- **The Guide:** We introduced "Chunav Guru," an AI-like mentor who guides the user through a chat-based interface. This mimics modern conversational learning apps.
- **Progression System:** To keep users motivated, we implemented an XP and Rank system. Players answer civics questions to gain XP and rank up from "Common Citizen" to "Prime Minister."
- **Visual Feedback:** We use dynamic visual feedback—such as glassmorphism UI, a progress bar, level indicators, and confetti animations—to reward the user instantly for their achievements.
- **Tech Stack:** We deliberately chose pure Vanilla HTML, CSS, and JavaScript. This ensures the application is extremely lightweight, fast, and has zero external dependencies, making it universally accessible even on low-end devices.

## ⚙️ 3. How the Solution Works
1. **Onboarding:** The user is greeted by Chunav Guru. They input their name and age. (The age factor is designed to eventually tailor the difficulty of the questions).
2. **The Game Loop:** The engine (`BePMGame` class) feeds the user a series of questions mapped to 8 distinct levels (from Voter Registration to Government Formation). 
3. **Interaction:** Users read the prompt in the chat window and select the correct multiple-choice option. 
4. **Validation & Rewards:** The engine checks the answer. Correct answers award XP. Earning enough XP unlocks new ranks and triggers particle/confetti canvas animations.
5. **Tools & Commands:** The user can use quick commands (`💡 Hint`, `🎯 Fun Fact`, `📚 Explain More`) to access deeper educational content on demand.
6. **Completion:** Upon finishing Level 8, the user is awarded a customized "Certificate of Election."

## 🕵️ 4. Assumptions Made
- **Browser Capability:** We assumed the user is running a relatively modern web browser capable of rendering CSS Grid/Flexbox and HTML5 Canvas.
- **Local Execution:** We assumed the application will be run locally or hosted statically without the immediate need for a backend database (XP and progression are stored in the local session).
- **Target Audience:** We assumed the target audience has a basic reading comprehension level, tailoring the text to be conversational and simple.

---

## 📊 5. Evaluation Focus Areas

### Code Quality
- **Structure:** The project is separated neatly into `index.html` (Structure), `style.css` (Presentation), and `game.js` (Logic/Data). 
- **Maintainability:** The JavaScript uses a unified `BePMGame` class to encapsulate state, UI updates, and the game loop. The questions and facts are stored in JSON-like objects (`window._gameData`), making it incredibly easy to add new levels or languages without touching the core engine.

### Security
- **Safe Implementation:** As a purely client-side application without a backend, there is no risk of server-side vulnerabilities (like SQL injection).
- **DOM Safety:** User inputs (like the player's name) are handled cleanly. The UI avoids executing raw arbitrary scripts, relying on controlled state transitions.

### Efficiency
- **Optimal Resources:** Zero heavy libraries or frameworks (no React, no jQuery). The entire game payload is incredibly small and loads instantly.
- **Canvas Optimization:** The background particle system and confetti engine use `requestAnimationFrame` and mathematically efficient array updates to ensure 60FPS animations without draining device batteries.

### Testing
- **Validation:** The core game loop was manually tested to ensure state transitions correctly from Level 1 to Level 8. Edge cases (like clicking "send" with empty inputs or clicking options multiple times) are blocked by the `isTyping` state lock.

### Accessibility
- **Inclusive Design:** 
  - The UI uses a high-contrast dark mode palette (WCAG friendly).
  - Clear, legible typography (Google Fonts 'Outfit').
  - Keyboard accessibility (users can submit answers via the `Enter` key).
  - The layout is fully responsive, shifting into a mobile-friendly view on smaller screens (the sidebar becomes an off-canvas menu).

### Google Services
- **Meaningful Integration:** 
  - **Google Fonts:** We integrated Google Fonts API (`Outfit`) to ensure modern, highly readable typography across all devices.
  - *(Future Roadmap)*: The conversational chat UI is specifically architected to easily integrate with the **Google Gemini API** in the next iteration, allowing Chunav Guru to dynamically generate answers to custom civics questions instead of relying solely on hardcoded arrays!
