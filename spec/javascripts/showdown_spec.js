describe("showdown integration", function() {
  var $fixture = $("<div data-behavior='showdown'>" +
      "<section class='input'><textarea name='input'></textarea></section>" +
      "<section class='output'><div class='rendered'></div>" +
      "<div class='raw'><pre><code></code></pre></div></section>" +
      "</div>");

  fixtureEach($fixture);

  describe("when entering markdown", function() {
    var title = 'Generated Title';
    var content = "Generated HTML content";
    beforeEach(function() {
      $(".input textarea").sendkeys("# " + title + "{enter}" + content);
    });

    it("should generate html content", function() {
      expect($(".output .rendered").text()).toContain(title);
      expect($(".output .rendered").text()).toContain(content);

      expect($(".output .raw").text()).toContain("<h1");
      expect($(".output .raw").text()).toContain(title);
      expect($(".output .raw").text()).toContain("<p>");
      expect($(".output .raw").text()).toContain(content);
    });
  });
});