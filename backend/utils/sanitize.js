const sanitizeHtml = require("sanitize-html");

const sanitize = (value) =>
  sanitizeHtml(value, {
    allowedTags: [],
    allowedAttributes: {},
  });

module.exports = sanitize;
