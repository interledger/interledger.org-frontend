const fs = require('fs');

const crawlableRobotsTxt = `User-agent: *\nAllow: /`;

const uncrawlableRobotsTxt = `User-agent: *\nDisallow: /`;

const robotsTxt =
  process.env.NEXT_ENV === 'production'
    ? crawlableRobotsTxt
    : uncrawlableRobotsTxt;

// Create robots.txt file
fs.writeFileSync('public/robots.txt', robotsTxt);

console.log(
  `Generated a ${
    process.env.NEXT_ENV === 'production' ? 'crawlable' : 'non-crawlable'
  } public/robots.txt`
);
