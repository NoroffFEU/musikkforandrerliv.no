module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("js");

  // Watch CSS files for changes
  eleventyConfig.addWatchTarget("./css/");

  // Ignore the _authors directory
  eleventyConfig.ignores.add("content/_authors/**");

  eleventyConfig.addFilter("getContentByLang", function (collection, lang) {
    return collection.filter((item) =>
      item.filePathStem.includes(`/_home_content/${lang}/`)
    );
  });

  eleventyConfig.addFilter("getNewsByLang", function (collection, lang) {
    return collection.filter((item) =>
      item.filePathStem.includes(`/_news/${lang}/`)
    );
  });

  eleventyConfig.addCollection("news", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/_news/**/*.md");
  });

  eleventyConfig.addCollection("staff", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/_staff/*.md");
  });

  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/_pages/*.md");
  });

  eleventyConfig.addCollection("home_content", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/_home_content/**/*.md");
  });

  eleventyConfig.addCollection("events", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/_events/*.md");
  });

  eleventyConfig.addCollection("gallery", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/_gallery/*.md");
  });

  eleventyConfig.addFilter("json", function (value) {
    return JSON.stringify(value, null, 2);
  });

  return {
    dir: {
      input: "",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["html", "md", "liquid"],
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
};
