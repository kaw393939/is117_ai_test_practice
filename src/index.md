---
layout: base.njk
title: Home
description: Welcome to our site built with Eleventy and code quality gates
---

{% include "page-header.njk" %}

<section class="hero">
  <h2>Welcome to {{ site.title }}</h2>
  <p>
    This is a static site built with Eleventy (11ty) featuring comprehensive
    code quality gates and Lighthouse CI.
  </p>
</section>

<section class="features">
  <h2>Features</h2>
  <div class="feature-grid">
    <div class="feature-card">
      <h3>🚀 Fast & Modern</h3>
      <p>Built with Eleventy for lightning-fast static site generation.</p>
    </div>
    <div class="feature-card">
      <h3>✅ Code Quality</h3>
      <p>ESLint, Prettier, and Stylelint ensure consistent, high-quality code.</p>
    </div>
    <div class="feature-card">
      <h3>🔍 Lighthouse CI</h3>
      <p>Automated performance, accessibility, and SEO checks.</p>
    </div>
    <div class="feature-card">
      <h3>🪝 Pre-commit Hooks</h3>
      <p>Husky and lint-staged maintain project standards automatically.</p>
    </div>
  </div>
</section>
