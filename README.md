# 🚀 AI-Assisted Web Development: Build Like a Pro

> **Learn to build production-ready websites using AI coding assistants while
> maintaining professional code quality standards.**

[![Deploy Status](https://github.com/kaw393939/is117_ai_test_practice/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/kaw393939/is117_ai_test_practice/actions)
[![Live Site](https://img.shields.io/badge/demo-live-success)](https://kaw393939.github.io/is117_ai_test_practice/)

---

## 🎯 What You'll Learn (In 40 Minutes)

This is a **hands-on course** where you'll recreate this entire project using AI
coding assistants. You'll learn:

✅ How to prompt AI to build quality code ✅ Automated quality gates that catch
errors ✅ Modern web development workflow ✅ Deploy to production automatically

**No prior experience required** - just follow the lessons in order.

---

## 🎓 Course Structure

### **Part 1: Understanding** (15 minutes)

1. [**What Is This Project?**](docs/lessons/01-what-is-this.md) - 3 min _See
   what we're building and why it matters_

2. [**Why Quality Gates?**](docs/lessons/02-why-quality-gates.md) - 3 min _The
   problem with AI-generated code and how to fix it_

3. [**Prompt Engineering Basics**](docs/lessons/03-prompt-engineering-basics.md) -
   5 min _How to talk to AI coding assistants effectively_

4. [**Setup Your Environment**](docs/lessons/04-setup-your-environment.md) - 5
   min _Install what you need to get started_

### **Part 2: Building** (20 minutes)

5. [**Build with Eleventy**](docs/lessons/05-build-with-eleventy.md) - 4 min
   _Create a static website with templates_

6. [**ESLint & Prettier**](docs/lessons/06-eslint-prettier.md) - 4 min
   _Automatic code quality and formatting_

7. [**Pre-commit Hooks**](docs/lessons/07-pre-commit-hooks.md) - 3 min _Stop bad
   code before it's committed_

8. [**GitHub Actions**](docs/lessons/08-github-actions.md) - 5 min _Automate
   testing and deployment_

9. [**Lighthouse CI**](docs/lessons/09-lighthouse-ci.md) - 4 min _Ensure your
   site is fast and accessible_

### **Part 3: When Things Break** (5 minutes)

10. [**Troubleshooting Guide**](docs/lessons/10-troubleshooting.md) - 5 min
    _Common issues and how to fix them_

---

## 🎮 Quick Start (For the Impatient)

```bash
# 1. Clone and install
git clone <your-fork>
cd 117_site
npm install

# 2. Start developing
npm start

# 3. Deploy to GitHub Pages
git push
```

**Want to understand what's happening?** Start with
[Lesson 1](docs/lessons/01-what-is-this.md) 👆

---

## 📝 Copy-Paste Prompts

Don't want to type? We got you. Pre-written prompts for every step:

- [**Initial Setup Prompts**](docs/prompts/initial-setup.md) - Get started fast
- [**Configuration Prompts**](docs/prompts/configuration.md) - Set up quality
  tools
- [**Building Pages Prompts**](docs/prompts/building-pages.md) - Create content
- [**Debugging Prompts**](docs/prompts/debugging.md) - Fix issues

---

## 📚 Quick Reference

- [**npm Scripts Cheatsheet**](docs/reference/npm-scripts.md) - All available
  commands
- [**File Structure Guide**](docs/reference/file-structure.md) - What each file
  does
- [**Duplication Detection**](docs/reference/duplication-detection.md) - How
  automated checks prevent code bloat
- [**AI Assistant Guide**](docs/reference/AI-GUIDE.md) - For your AI coding
  assistant

---

## 🎯 Learning Objectives

By the end of this course, you'll be able to:

| Skill                         | What You'll Master                                    |
| ----------------------------- | ----------------------------------------------------- |
| 🤖 **AI Prompting**           | Write effective prompts that generate quality code    |
| 🔍 **Code Quality**           | Use ESLint, Prettier, Stylelint to maintain standards |
| 🪝 **Git Hooks**              | Automate checks before code enters version control    |
| 🚀 **CI/CD**                  | Deploy automatically with GitHub Actions              |
| ⚡ **Performance**            | Build fast, accessible websites with Lighthouse       |
| 🏗️ **Static Site Generators** | Use Eleventy to build modern websites                 |
| 🎨 **Modern Web Dev**         | Work with HTML, CSS, JavaScript professionally        |
| 🐛 **Debugging**              | Troubleshoot issues with AI assistance                |

---

## 🎬 Before You Start

### You'll Need:

- [ ] **A computer** (Mac, Windows, or Linux)
- [ ] **30-60 minutes** of focused time
- [ ] **An AI coding assistant** (GitHub Copilot, ChatGPT, Claude, etc.)
- [ ] **Basic curiosity** about web development

### You DON'T Need:

- ❌ Prior coding experience
- ❌ Deep understanding of web development
- ❌ To memorize anything (we have copy-paste prompts)

---

## 💡 How to Use This Course

### Option 1: **Guided Path** (Recommended for beginners)

Follow lessons 1-10 in order. Each lesson builds on the previous one.

### Option 2: **Reference Mode** (For experienced developers)

Jump to specific topics using the table of contents above.

### Option 3: **Copy-Paste Mode** (For the time-constrained)

Go straight to [prompts](docs/prompts/) and recreate the project.

---

## 🚨 Important Notes

### ⚠️ #1 AI Pitfall: Code Duplication

**AI coding agents LOVE to duplicate code** instead of reusing existing styles,
functions, and components. This creates unmaintainable bloat.

**YOU MUST:**

- ✅ Check existing code BEFORE asking AI to create
- ✅ Explicitly tell AI to REUSE existing styles
- ✅ Review AI output for duplicates

**Read this:**
[Avoiding Duplication Guide](docs/prompts/avoiding-duplication.md)

### This Project Uses:

- **Eleventy 2.0** - Static site generator
- **Node.js 20** - JavaScript runtime
- **GitHub Actions** - CI/CD automation
- **Lighthouse CI** - Performance testing

### Code Quality Gates:

| Layer              | What It Checks              | When It Runs      |
| ------------------ | --------------------------- | ----------------- |
| 🎨 **Editor**      | Real-time errors            | As you type       |
| 💾 **Save**        | Auto-format code            | When you save     |
| 🪝 **Pre-commit**  | Lint staged files           | Before Git commit |
| 🤖 **CI/CD**       | Full quality check          | On push to GitHub |
| ⚡ **Lighthouse**  | Performance & accessibility | Before deployment |
| 🚫 **Duplication** | Code/CSS duplication (>10%) | Pre-commit + CI   |

---

## 🎓 Who Is This For?

### ✅ Perfect For:

- College students learning web development
- Developers exploring AI-assisted coding
- Anyone wanting to build quality websites fast
- Teams implementing code quality standards

### ⚠️ Not For:

- People looking for no-code solutions
- Those who don't want to learn (just want a website)

---

## 🌟 What Makes This Different?

### Traditional Coding Courses:

❌ Type everything manually ❌ Memorize syntax ❌ Slow feedback loops ❌ No
quality enforcement

### This Course:

✅ Use AI to write code ✅ Focus on prompting skills ✅ Instant quality feedback
✅ Automated quality gates

---

## 📱 TikTok Generation Features

- ⏱️ **Bite-sized lessons** (3-5 minutes each)
- 🎯 **Clear objectives** at the start of each lesson
- 💡 **TL;DR sections** for quick scanning
- 📋 **Copy-paste prompts** for every task
- ✅ **Checkboxes** to track progress
- 🎨 **Visual diagrams** showing workflows
- 🚀 **Instant gratification** with quick wins

---

## 🏆 Challenge Yourself

After completing the course, try these extensions:

- [ ] Add a blog with pagination
- [ ] Implement dark mode
- [ ] Add E2E tests with Playwright
- [ ] Create a contact form
- [ ] Add image optimization
- [ ] Implement a search feature

---

## 🤝 Contributing

Found a typo? Have a suggestion? Want to improve a lesson?

1. Fork this repo
2. Make your changes
3. Submit a pull request

All contributions welcome! 🎉

---

## 📄 License

MIT License - Use this for learning, teaching, or building your own projects.

---

## 🚀 Ready to Start?

### [👉 Click Here to Begin Lesson 1: What Is This Project?](docs/lessons/01-what-is-this.md)

---

## 💬 Questions?

- 🐛 **Found a bug?**
  [Open an issue](https://github.com/kaw393939/is117_ai_test_practice/issues)
- 💡 **Have a question?**
  [Start a discussion](https://github.com/kaw393939/is117_ai_test_practice/discussions)
- 🤖 **AI not working?** Check the
  [Troubleshooting Guide](docs/lessons/10-troubleshooting.md)

---

## 👥 Credits

**Built with ❤️ by students, for students**

Last updated: October 2025
