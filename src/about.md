---
layout: base.njk
title: About
description: Learn more about this project
---

{% include "page-header.njk" %}

<section class="content">
  <h2>About This Project</h2>
  <p>
    This site demonstrates a modern static site development workflow with
    comprehensive code quality gates and automated testing.
  </p>

  <h3>Technology Stack</h3>
  <ul>
    <li><strong>Eleventy (11ty)</strong> - Static site generator</li>
    <li><strong>Nunjucks</strong> - Templating engine</li>
    <li><strong>ESLint</strong> - JavaScript linting</li>
    <li><strong>Prettier</strong> - Code formatting</li>
    <li><strong>Stylelint</strong> - CSS linting</li>
    <li><strong>Lighthouse CI</strong> - Performance testing</li>
    <li><strong>GitHub Actions</strong> - CI/CD pipeline</li>
  </ul>

  <h3>Code Quality Gates</h3>
  <p>
    Every commit is automatically checked for code quality issues, and the site
    is deployed to GitHub Pages only after all checks pass.
  </p>
</section>
