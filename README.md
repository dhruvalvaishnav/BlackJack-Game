# 🃏 BlackJack Game

> A browser-based Blackjack card game built with vanilla JavaScript - no frameworks, no dependencies. Play against the dealer and try to hit 21!

[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Live Demo](https://img.shields.io/badge/▶_Play_Now-Live_Demo-2ea44f?style=for-the-badge)](https://dhruvalvaishnav.github.io/BlackJack-Game/)

---

## 🎯 Why Blackjack?

Blackjack is mathematically different from other casino games - it's one of the few games where player decisions actually affect the outcome, making it far more favorable than pure luck-based games.

---

## 📋 Rules

1. Goal: beat the dealer's hand **without going over 21**
2. Face cards (J, Q, K) = **10**. Ace = **1 or 11** (whichever is better)
3. Each player starts with **2 cards** - one dealer card is hidden until the end
4. **Hit** → draw another card · **Stand** → hold your total, end your turn
5. Go over 21 → **bust** → dealer wins
6. Dealt Ace + 10 from the start = **Blackjack** 🎉 (pays 1.5x your bet)
7. Dealer **must hit on 16 or less**, stands on **17 through 21**
8. You win when your total beats the dealer's, or the dealer busts

---

## 🃏 Card Values

| Card | Value |
|------|-------|
| 2–10 | Face value |
| J, Q, K | 10 |
| Ace | 1 or 11 (auto-optimized) |
| Suits | No meaning in Blackjack |

> Ace always counts as 11 unless it would cause a bust - then it reverts to 1 automatically.

---

## 🕹️ Controls

| Action | What it does |
|--------|-------------|
| **Hit** | Draw another card - get closer to 21 (or bust) |
| **Stand** | End your turn - dealer plays out |
| **Deal** | Start a new game round |
| **Refresh** | Resets everything including win/loss count |

> Win/loss results are tracked and displayed below the game. Refreshing the page resets the counter to 0.

---

## 🚀 Run Locally

```bash
git clone https://github.com/dhruvalvaishnav/BlackJack-Game.git
cd BlackJack-Game
# Just open index.html in any browser — zero setup needed!
```

---

## 👨‍💻 Author

**Dhruval Vaishnav** - Senior Software Engineer | Java · Spring Boot · Kafka · AWS

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/dhruvalvaishnav)
[![Medium](https://img.shields.io/badge/Medium-Follow-12100E?style=flat-square&logo=medium)](https://medium.com/@vdhruval)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-100000?style=flat-square&logo=github)](https://github.com/dhruvalvaishnav)
