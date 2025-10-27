module.exports = {
  site: {
    title: process.env.SITE_TITLE || '117 Site',
    description:
      process.env.SITE_DESCRIPTION ||
      'A static site with code quality gates and Lighthouse CI',
    url: process.env.SITE_URL || 'https://yourusername.github.io/117_site',
    author: process.env.SITE_AUTHOR || 'Your Name',
    environment: process.env.NODE_ENV || 'development',
  },
};
