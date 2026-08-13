/* ==========================================================================
   HTML + CSS INTERACTIVE LEARNING LABORATORY — JAVASCRIPT ENGINE
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. APPLICATION STATE ENGINE
  // --------------------------------------------------------------------------
  const state = {
    theme: localStorage.getItem('lab_theme') || 'dark',
    mode: localStorage.getItem('lab_mode') || 'beginner', // beginner vs developer
    activeTopicId: localStorage.getItem('lab_active_topic') || 'h1-h6',
    completedTopics: JSON.parse(localStorage.getItem('lab_completed')) || [],
    bookmarkedTopics: JSON.parse(localStorage.getItem('lab_bookmarks')) || [],
    userNotes: JSON.parse(localStorage.getItem('lab_notes')) || {},
    quizScores: JSON.parse(localStorage.getItem('lab_quiz')) || { score: 0, solved: 0 },
    challengesCompleted: JSON.parse(localStorage.getItem('lab_challenges')) || [],
    streak: JSON.parse(localStorage.getItem('lab_streak')) || { days: 1, lastDate: new Date().toDateString() },
    pomoSeconds: 25 * 60,
    pomoRunning: false,
    pomoTimer: null
  };

  // Set Initial Theme
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();

  // --------------------------------------------------------------------------
  // 2. CURRICULUM DATABASE (STRICTLY FROM USER NOTES)
  // --------------------------------------------------------------------------
  const curriculum = [
    {
      category: "HTML",
      title: "Headings",
      topics: [
        {
          id: "h1-h6",
          name: "<h1> to <h6> — Heading Tags",
          tag: "Structural",
          begExplanation: "Heading tags define the titles and subtitles of a page. <h1> is the largest and most important heading, while <h6> is the smallest.",
          devExplanation: "Headings establish the semantic hierarchy and document outline for screen readers and SEO indexing. Only one <h1> should typically exist per page.",
          syntax: "<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>",
          initialCode: "<h1>Main Title (h1)</h1>\n<h2>Section Header (h2)</h2>\n<h3>Sub-section (h3)</h3>",
          importantPoint: "Do NOT use heading tags merely to make text big. Use them for proper document hierarchy.",
          commonMistake: "Skipping heading levels (e.g. going directly from <h1> to <h4>).",
          rememberThis: "h1 = Biggest & Most Important, h6 = Smallest.",
          whyExist: "Without headings, search engines and screen readers cannot understand the structure or outline of a document."
        },
        {
          id: "paragraph",
          name: "<p> — Paragraph Tag",
          tag: "Text",
          begExplanation: "The <p> tag defines a paragraph of text. Browsers automatically add margin space before and after a paragraph.",
          devExplanation: "Paragraphs are block-level elements that wrap body copy text, providing semantic grouping for text content.",
          syntax: "<p>This is a paragraph of text.</p>",
          initialCode: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraphs structure text into readable blocks.</p>",
          importantPoint: "Browsers treat multiple spaces and line breaks inside <p> as a single space.",
          commonMistake: "Using multiple empty <p></p> tags to create spacing instead of CSS margin.",
          rememberThis: "<p> = Paragraph of text.",
          whyExist: "To visually and semantically separate blocks of prose text."
        },
        {
          id: "br",
          name: "<br> — Line Break Tag",
          tag: "Inline / Void",
          begExplanation: "The <br> tag inserts a single line break in text without starting a new paragraph.",
          devExplanation: "<br> is a self-closing / void tag. It has no closing tag and should be used only when a line break is part of the content (e.g., poems, addresses).",
          syntax: "First line<br>Second line",
          initialCode: "<p>First line of address<br>Second line of address<br>City, State</p>",
          importantPoint: "<br> is an empty (void) element. It does NOT have a closing tag.",
          commonMistake: "Writing <br></br> ❌ instead of <br> or <br/>.",
          rememberThis: "br = Break the line.",
          whyExist: "To break a line without creating a separate paragraph block."
        },
        {
          id: "pre",
          name: "<pre> — Preformatted Text",
          tag: "Block",
          begExplanation: "The <pre> tag displays text exactly as written in your HTML file, preserving all spaces, indents, and line breaks.",
          devExplanation: "Text inside <pre> is rendered in a monospace font and preserves both whitespace characters and newline characters.",
          syntax: "<pre>\nLine 1\n   Indented Line 2\n</pre>",
          initialCode: "<pre>\nHello\n    World\n        Preserved Spaces!\n</pre>",
          importantPoint: "<pre> preserves all leading spaces and line breaks exactly as typed.",
          commonMistake: "Forgetting that HTML normally collapses multiple spaces into a single space.",
          rememberThis: "<pre> = PRE-formatted (What you type is what you see).",
          whyExist: "Useful for displaying ASCII art, code blocks, or poetry where exact spacing matters."
        },
        {
          id: "img",
          name: "<img> — Image Tag",
          tag: "Media / Void",
          begExplanation: "The <img> tag embeds an image in a web page. It requires the 'src' attribute for the image URL and 'alt' for description.",
          devExplanation: "<img> is an inline-block void element. The 'alt' attribute provides fallback accessibility text and SEO context.",
          syntax: '<img src="url.jpg" alt="Description" width="300" height="200">',
          initialCode: '<img src="https://picsum.photos/300/200" alt="Sample Image" width="300" height="200">',
          importantPoint: "Always include the 'alt' attribute for accessibility and when images fail to load.",
          commonMistake: "Forgetting the 'src' path or writing <img></img> with a closing tag.",
          rememberThis: "src = Source path, alt = Alternate text.",
          whyExist: "To display graphics, pictures, or icons directly on the web page."
        },
        {
          id: "formatting",
          name: "HTML Text Formatting Tags",
          tag: "Formatting",
          begExplanation: "Special tags to style text: <b> bold, <strong> important bold, <i> italic, <em> emphasized italic, <mark> highlight, <small> fine print, <ins> inserted text, <del> strikethrough, <sup> superscript, <sub> subscript.",
          devExplanation: "Differentiates presentational tags (<b>, <i>) from semantic tags (<strong>, <em>, <ins>, <del>).",
          syntax: "<b>Bold</b> <strong>Strong</strong> <i>Italic</i> <em>Emphasized</em> <mark>Marked</mark> <small>Small</small> <ins>Inserted</ins> <del>Deleted</del> X<sup>2</sup> H<sub>2</sub>O",
          initialCode: "<p>Original: <del>₹1000</del> <ins>₹800</ins></p>\n<p>Math: X<sup>2</sup> | Chemistry: H<sub>2</sub>O</p>\n<p><mark>Special Offer!</mark> <strong>Important note.</strong></p>",
          importantPoint: "<b> is visual bold, but <strong> carries semantic importance for screen readers.",
          commonMistake: "Confusing <sup> (superscript UP) with <sub> (subscript BELOW).",
          rememberThis: "sup = UP ↑ (X²), sub = BELOW ↓ (H₂O).",
          whyExist: "To give specific formatting or semantic meaning to words or phrases."
        },
        {
          id: "lists",
          name: "Lists — <ol>, <ul>, <dl>",
          tag: "Lists",
          begExplanation: "Lists group related items together. <ol> creates ordered (numbered) lists, <ul> creates unordered (bulleted) lists, and <dl> creates description lists.",
          devExplanation: "<ol> uses 'type' attribute ('1', 'A', 'a', 'I', 'i'). <dl> contains term <dt> and description <dd> pairs.",
          syntax: '<ol type="A"><li>Item 1</li></ol>\n<ul type="square"><li>Item A</li></ul>\n<dl><dt>Term</dt><dd>Definition</dd></dl>',
          initialCode: '<h3>Ordered List</h3>\n<ol type="A">\n  <li>First Step</li>\n  <li>Second Step</li>\n</ol>\n<h3>Unordered List</h3>\n<ul>\n  <li>Apple</li>\n  <li>Banana</li>\n</ul>\n<h3>Description List</h3>\n<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n</dl>',
          importantPoint: "List items must be enclosed inside <li> tags inside <ol> or <ul>.",
          commonMistake: "Putting raw text directly inside <ol> or <ul> without <li> wrappers.",
          rememberThis: "ol = Ordered (numbered), ul = Unordered (bulleted), dl = Description List.",
          whyExist: "To structure collections of data into clean, readable lists."
        },
        {
          id: "forms",
          name: "<form> & <label> — Forms",
          tag: "Forms",
          begExplanation: "Forms collect user input like names, emails, and passwords. The <label> tag provides a clickable title for an input.",
          devExplanation: "The 'for' attribute of <label> connects to the 'id' attribute of <input> for accessibility.",
          syntax: '<form action="">\n  <label for="username">Name:</label>\n  <input type="text" id="username" name="username">\n</form>',
          initialCode: '<form>\n  <label for="uname">User Name:</label>\n  <input type="text" id="uname" placeholder="Enter username"><br><br>\n  <button type="submit">Submit</button>\n</form>',
          importantPoint: "Matching label 'for' with input 'id' makes clicking the label focus the input.",
          commonMistake: "Forgetting the 'name' attribute which is required for form data submission.",
          rememberThis: "label for = input id.",
          whyExist: "Forms allow websites to interact with users and receive input data."
        },
        {
          id: "input-types",
          name: "<input> — All 22 Input Types",
          tag: "Form Controls",
          begExplanation: "The <input> tag creates interactive controls for forms. Its behavior changes based on the 'type' attribute.",
          devExplanation: "Covers 22 types: text, password, email, tel, number, range, color, date, time, datetime-local, month, week, radio, checkbox, file, hidden, image, search, url, button, submit, reset.",
          syntax: '<input type="text">\n<input type="password">\n<input type="color">\n<input type="date">',
          initialCode: '<label>Color:</label> <input type="color"><br><br>\n<label>Date:</label> <input type="date"><br><br>\n<label>Range:</label> <input type="range" min="1" max="100">',
          importantPoint: "Radio buttons share the same 'name' attribute to form a mutually exclusive single-choice group.",
          commonMistake: "Giving radio buttons different 'name' attributes so multiple can be selected at once.",
          rememberThis: "Same name = radio group choice.",
          whyExist: "Provides rich native UI controls for capturing various data types."
        },
        {
          id: "anchor",
          name: "<a> — Anchor Tag & Targets",
          tag: "Navigation",
          begExplanation: "The <a> tag creates hyperlinks to other pages or websites using the 'href' attribute.",
          devExplanation: "Target attributes control opening behavior: _self (same tab), _blank (new tab), _parent (parent frame), _top (full window).",
          syntax: '<a href="https://example.com" target="_blank">Click Here</a>',
          initialCode: '<a href="https://www.youtube.com" target="_blank">Open YouTube (New Tab)</a><br>\n<a href="#heroSection" target="_self">Scroll to Top (Same Tab)</a>',
          importantPoint: 'target="_blank" opens the destination link in a new tab.',
          commonMistake: 'Forgetting "href" attribute which makes the link non-clickable.',
          rememberThis: "_blank = Open in a BLANK new tab.",
          whyExist: "The web is built on hyper-links connecting documents together."
        },
        {
          id: "important-tags",
          name: "Important Tags — Favicon, <blockquote>, <q>, <address>, <bdo>",
          tag: "Semantic",
          begExplanation: "Specialized semantic tags: Favicon sets the tab icon, <blockquote> for long quotes, <q> for inline quotes, <address> for contact details, and <bdo> for directional text overrides.",
          devExplanation: "<bdo dir='rtl'> reverses text direction. <blockquote> creates indented quote blocks with optional 'cite' attribute.",
          syntax: '<link rel="shortcut icon" href="favicon.ico">\n<blockquote>Long quote</blockquote>\n<q>Short inline quote</q>\n<address>Address text</address>\n<bdo dir="rtl">Text</bdo>',
          initialCode: '<blockquote>"Learning never exhausts the mind."</blockquote>\n<p>He said <q>Hello World</q></p>\n<address>Bhavesh Sharma<br>Alwar, Rajasthan</address>\n<p><bdo dir="rtl">ABCDEFG</bdo></p>',
          importantPoint: "<bdo> stands for Bi-Directional Override.",
          commonMistake: "Confusing <q> (inline quote with quote marks) with <blockquote> (block quote).",
          rememberThis: "bdo = Bi-Directional Override.",
          whyExist: "Provides semantic markup for quotes, contact info, and text direction overrides."
        },
        {
          id: "media-tags",
          name: "<audio>, <video>, <iframe>",
          tag: "Media",
          begExplanation: "<audio> plays sound files, <video> plays video streams, and <iframe> embeds an external web page or video player.",
          devExplanation: "Attributes include: controls, autoplay, muted, loop. <iframe> requires 'src', 'width', 'height'.",
          syntax: '<audio src="sound.mp3" controls></audio>\n<video src="movie.mp4" controls width="400"></video>\n<iframe src="https://example.com" width="500" height="300"></iframe>',
          initialCode: '<audio src="https://www.w3schools.com/html/horse.mp3" controls></audio><br><br>\n<video src="https://www.w3schools.com/html/mov_bbb.mp4" controls width="320"></video>',
          importantPoint: "Autoplay in modern browsers often requires the 'muted' attribute to function.",
          commonMistake: "Forgetting the 'controls' attribute, leaving audio/video unplayable by users.",
          rememberThis: "controls = Show play/pause buttons.",
          whyExist: "Enables rich multimedia playback directly inside HTML documents."
        },
        {
          id: "div-span",
          name: "<div> & <span> — Container Tags",
          tag: "Containers",
          begExplanation: "<div> is a block-level container that starts on a new line. <span> is an inline container used inside text.",
          devExplanation: "<div> occupies 100% width of its container by default. <span> only takes up as much width as its content.",
          syntax: '<div>Block Container</div>\n<p>Text with <span>inline container</span> inside.</p>',
          initialCode: '<div style="border: 2px solid red; padding: 10px;">I am a DIV (Block level)</div><br>\n<p>I am a paragraph with a <span style="background: yellow; color: black;">SPAN (Inline level)</span> element inside.</p>',
          importantPoint: "<div> starts on a NEW line; <span> stays on the SAME line.",
          commonMistake: "Putting block-level elements like <div> or <h1> inside an inline <span>.",
          rememberThis: "div = Divider (Block), span = Span of text (Inline).",
          whyExist: "Serves as generic containers for grouping elements for CSS styling."
        },
        {
          id: "tables",
          name: "Tables — <table>, <tr>, <td>, <th>",
          tag: "Tables",
          begExplanation: "Tables arrange data into rows and columns using <table>, <tr> for table rows, <th> for table headers, and <td> for table data cells.",
          devExplanation: "Use <thead> and <tbody> to group structural table sections.",
          syntax: '<table>\n  <tr><th>Header 1</th><th>Header 2</th></tr>\n  <tr><td>Data 1</td><td>Data 2</td></tr>\n</table>',
          initialCode: '<table border="1" cellpadding="8">\n  <thead>\n    <tr><th>Name</th><th>Age</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Bhavesh</td><td>21</td></tr>\n    <tr><td>Rahul</td><td>22</td></tr>\n  </tbody>\n</table>',
          importantPoint: "<th> cells are bold and centered by default.",
          commonMistake: "Forgetting to wrap table cells inside <tr> (table row) tags.",
          rememberThis: "tr = Table Row, th = Table Header, td = Table Data.",
          whyExist: "To display structured tabular data."
        },
        {
          id: "entities",
          name: "Character & Number Entities",
          tag: "Entities",
          begExplanation: "HTML entities display reserved characters (like < and >) or special symbols (like ©) using character or numeric codes.",
          devExplanation: "Character entities begin with & and end with ; (e.g. &lt; for <). Numeric entities use &# followed by ASCII/Unicode number.",
          syntax: "&lt;  &gt;  &amp;  &copy;\n&#60; &#62; &#38; &#169;",
          initialCode: "<p>&amp;lt; renders as &lt;</p>\n<p>&amp;gt; renders as &gt;</p>\n<p>&amp;#169; renders as &#169;</p>",
          importantPoint: "Use &lt; and &gt; to display literal angle brackets without breaking HTML tags.",
          commonMistake: "Forgetting the ending semicolon (;) in entity codes.",
          rememberThis: "&lt; = Less Than (<), &gt; = Greater Than (>).",
          whyExist: "To prevent reserved HTML characters from being parsed as actual tags."
        }
      ]
    },
    {
      category: "CSS",
      title: "CSS Foundations",
      topics: [
        {
          id: "css-intro",
          name: "CSS Meaning & Purpose",
          tag: "Basics",
          begExplanation: "CSS stands for Cascading Style Sheets. It is used to format, layout, color, and style HTML web pages.",
          devExplanation: "CSS separates document presentation from document structure, enabling reusable styling rules.",
          syntax: "selector {\n  property: value;\n}",
          initialCode: "<style>\n  h1 {\n    color: #38bdf8;\n    text-align: center;\n  }\n</style>\n<h1>Styled Heading</h1>",
          importantPoint: "CSS controls the visual appearance of HTML elements.",
          commonMistake: "Forgetting the semicolon (;) at the end of a CSS property declaration.",
          rememberThis: "HTML = Structure, CSS = Style.",
          whyExist: "Without CSS, all web pages would look like plain black and white text documents."
        },
        {
          id: "css-types",
          name: "Inline, Internal & External CSS",
          tag: "Implementation",
          begExplanation: "There are 3 ways to apply CSS: Inline CSS (inside style attribute), Internal CSS (inside <style> tag in head), and External CSS (linked .css file).",
          devExplanation: "Specificity order: Inline CSS > Internal CSS / External CSS > Browser defaults.",
          syntax: '<!-- Inline --> <h1 style="color:red;">Text</h1>\n<!-- Internal --> <style>h1 { color:red; }</style>\n<!-- External --> <link rel="stylesheet" href="style.css">',
          initialCode: '<h1 style="color: red; text-align: center;">Inline CSS Example</h1>',
          importantPoint: "External CSS is best for multi-page websites because it keeps code clean and reusable.",
          commonMistake: "Using inline CSS everywhere, making code messy and hard to maintain.",
          rememberThis: "External CSS = Best practice.",
          whyExist: "Provides flexibility in how styles are attached to HTML documents."
        },
        {
          id: "selectors",
          name: "CSS Selectors — Tag, Class & ID",
          tag: "Selectors",
          begExplanation: "Selectors target HTML elements to apply styles. Tag selector targets HTML tags, Class selector (.name) targets elements with class='name', and ID selector (#name) targets unique id='name'.",
          devExplanation: "Specificity: ID selector (#id) > Class selector (.class) > Tag selector (tag).",
          syntax: "/* Tag */ h1 { color: red; }\n/* Class */ .my-class { color: blue; }\n/* ID */ #my-id { color: green; }",
          initialCode: "<style>\n  h1 { color: gray; }\n  .highlight { color: blue; }\n  #main-title { color: green; }\n</style>\n<h1 id=\"main-title\" class=\"highlight\">Selector Priority Test</h1>",
          importantPoint: "IDs must be unique per page; classes can be reused on multiple elements.",
          commonMistake: "Forgetting the dot (.) before class names or hash (#) before ID names in CSS.",
          rememberThis: ". = Class, # = ID.",
          whyExist: "Allows precise targeting of specific elements for styling."
        },
        {
          id: "border",
          name: "Border & Border Shorthand",
          tag: "Box Model",
          begExplanation: "Border creates a line around an element. Shorthand combines width, style, and color in one line: border: 2px solid red.",
          devExplanation: "Border styles include: solid, dashed, dotted, double, none. border-radius rounds the corners.",
          syntax: "border: 2px solid red;\nborder-radius: 14px;",
          initialCode: "<style>\n  .box {\n    border: 3px dashed #38bdf8;\n    border-radius: 15px;\n    padding: 20px;\n    text-align: center;\n  }\n</style>\n<div class=\"box\">Border Box</div>",
          importantPoint: "Border shorthand order: width style color (e.g. 2px solid red).",
          commonMistake: "Forgetting to specify border-style (e.g. solid), resulting in no border showing.",
          rememberThis: "Border needs width, style, and color.",
          whyExist: "Defines visible boundaries around HTML elements."
        },
        {
          id: "background",
          name: "Background Image, Repeat & Size",
          tag: "Backgrounds",
          begExplanation: "Sets a background image on an element using background-image, background-repeat (repeat, no-repeat), and background-size (cover, contain).",
          devExplanation: "background-size: cover scales the image to fit the container entirely.",
          syntax: "background-image: url('img.jpg');\nbackground-repeat: no-repeat;\nbackground-size: cover;",
          initialCode: "<style>\n  .bg-demo {\n    height: 150px;\n    background-image: url('https://picsum.photos/400/200');\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 10px;\n  }\n</style>\n<div class=\"bg-demo\"></div>",
          importantPoint: "background-repeat: no-repeat prevents tiled repetition of images.",
          commonMistake: "Forgetting quotes or url() syntax inside background-image.",
          rememberThis: "no-repeat = Single clean image.",
          whyExist: "Adds rich visual textures and imagery to backgrounds."
        },
        {
          id: "shadows",
          name: "box-shadow & text-shadow",
          tag: "Visual Effects",
          begExplanation: "box-shadow adds shadow effects around an element frame. text-shadow adds shadow effects to text letters.",
          devExplanation: "Syntax: shadow: x-offset y-offset blur-radius color; Optional inset keyword for inner box shadow.",
          syntax: "box-shadow: 2px 2px 10px black;\ntext-shadow: 2px 2px 3px blue;\nbox-shadow: inset 5px 5px 10px green;",
          initialCode: "<style>\n  .shadow-card {\n    box-shadow: 0 10px 20px rgba(56, 189, 248, 0.4);\n    text-shadow: 2px 2px 4px #000;\n    padding: 20px;\n    background: #1e293b;\n    color: #fff;\n    border-radius: 12px;\n    text-align: center;\n  }\n</style>\n<div class=\"shadow-card\">Glow Shadow Card</div>",
          importantPoint: "Positive x/y values shift shadow right/down; inset creates inner shadow.",
          commonMistake: "Using huge blur values that create overly dark blurry messes.",
          rememberThis: "x-offset, y-offset, blur, color.",
          whyExist: "Adds depth, elevation, and 3D visual pop to elements."
        },
        {
          id: "overflow",
          name: "overflow — visible, hidden, scroll, auto",
          tag: "Layout",
          begExplanation: "overflow controls what happens when content exceeds the dimensions of its container box.",
          devExplanation: "Values: visible (default, overflows out), hidden (clips overflow), scroll (always shows scrollbars), auto (shows scrollbars only when needed).",
          syntax: "overflow: visible;\noverflow: hidden;\noverflow: scroll;\noverflow: auto;",
          initialCode: "<style>\n  .box {\n    width: 250px;\n    height: 80px;\n    border: 2px solid red;\n    overflow: scroll;\n    padding: 10px;\n  }\n</style>\n<div class=\"box\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Content overflows the container boundaries!</div>",
          importantPoint: "overflow: auto only displays scrollbars when content actually overflows.",
          commonMistake: "Forgetting to set a fixed height/width on container when testing overflow.",
          rememberThis: "auto = Smart scrollbar when needed.",
          whyExist: "Prevents long text or large images from breaking page layouts."
        },
        {
          id: "flexbox",
          name: "Flexbox — Layout & Alignment",
          tag: "Flexbox",
          begExplanation: "Flexbox (display: flex) creates flexible 1D layouts. Controls alignment along main axis (justify-content) and cross axis (align-items).",
          devExplanation: "Properties: display:flex, flex-direction (row, column), flex-wrap (nowrap, wrap), justify-content (flex-start, center, flex-end, space-between, space-around, space-evenly), align-items (stretch, flex-start, center, flex-end).",
          syntax: "display: flex;\nflex-direction: row;\nflex-wrap: wrap;\njustify-content: center;\nalign-items: center;",
          initialCode: "<style>\n  .flex-container {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background: #1e293b;\n    padding: 20px;\n    border-radius: 10px;\n  }\n  .flex-item {\n    background: #38bdf8;\n    color: #000;\n    padding: 15px 25px;\n    font-weight: bold;\n    border-radius: 8px;\n  }\n</style>\n<div class=\"flex-container\">\n  <div class=\"flex-item\">Box A</div>\n  <div class=\"flex-item\">Box B</div>\n  <div class=\"flex-item\">Box C</div>\n</div>",
          importantPoint: "justify-content works on Main Axis; align-items works on Cross Axis.",
          commonMistake: "Thinking justify-content ALWAYS aligns horizontally (it aligns vertically if flex-direction is column!).",
          rememberThis: "Main Axis = justify-content, Cross Axis = align-items.",
          whyExist: "Solves complex alignment and responsive distribution problems effortlessly."
        }
      ]
    }
  ];

  // Flat list of topics for easy lookup
  const allTopics = [];
  curriculum.forEach(cat => {
    cat.topics.forEach(top => {
      allTopics.push({ ...top, category: cat.category });
    });
  });

  // Update Total Count Display
  document.getElementById('totalTopicCount').textContent = allTopics.length;

  // --------------------------------------------------------------------------
  // 3. INITIALIZE NAVIGATION SIDEBAR
  // --------------------------------------------------------------------------
  function renderSidebarNav(filterText = '') {
    const sidebarNav = document.getElementById('sidebarNav');
    sidebarNav.innerHTML = '';

    curriculum.forEach(cat => {
      const filtered = cat.topics.filter(t => 
        t.name.toLowerCase().includes(filterText.toLowerCase()) ||
        t.id.toLowerCase().includes(filterText.toLowerCase())
      );

      if (filtered.length > 0) {
        const secTitle = document.createElement('div');
        secTitle.className = 'nav-section-title';
        secTitle.textContent = `${cat.category} — ${cat.title}`;
        sidebarNav.appendChild(secTitle);

        filtered.forEach(t => {
          const isDone = state.completedTopics.includes(t.id);
          const isActive = t.id === state.activeTopicId;

          const item = document.createElement('div');
          item.className = `nav-item ${isActive ? 'active' : ''}`;
          item.dataset.id = t.id;
          item.innerHTML = `
            <span>${t.name.split('—')[0]}</span>
            ${isDone ? '<span class="check-icon">✓</span>' : ''}
          `;

          item.addEventListener('click', () => {
            selectTopic(t.id);
            if (window.innerWidth <= 768) {
              closeSidebarDrawer();
            }
          });

          sidebarNav.appendChild(item);
        });
      }
    });
  }

  // Sidebar Filter Search Listener
  document.getElementById('sidebarSearchInput').addEventListener('input', (e) => {
    renderSidebarNav(e.target.value);
  });

  // Toggle Sidebar Drawer for Mobile
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarToggleBtn = document.getElementById('sidebarToggleBtn');

  function openSidebarDrawer() {
    sidebar.classList.add('open');
    sidebarOverlay.classList.add('active');
  }

  function closeSidebarDrawer() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
  }

  sidebarToggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      closeSidebarDrawer();
    } else {
      openSidebarDrawer();
    }
  });

  sidebarOverlay.addEventListener('click', closeSidebarDrawer);

  // --------------------------------------------------------------------------
  // 4. TOPIC LEARNING CARD RENDERER (REQUIREMENT #6 - 9 STEP FORMAT)
  // --------------------------------------------------------------------------
  function renderActiveTopicCard() {
    const topic = allTopics.find(t => t.id === state.activeTopicId);
    if (!topic) return;

    // Update Breadcrumb & Nav Indicator
    document.getElementById('currentCrumb').textContent = topic.name.split('—')[0];
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.id === topic.id);
    });

    const isBookmarked = state.bookmarkedTopics.includes(topic.id);
    const isCompleted = state.completedTopics.includes(topic.id);

    // Update Buttons State
    const toggleCompleteBtn = document.getElementById('toggleCompleteBtn');
    const toggleBookmarkBtn = document.getElementById('toggleBookmarkBtn');

    toggleCompleteBtn.textContent = isCompleted ? '✓ Completed' : '✓ Mark as Completed';
    toggleCompleteBtn.className = `btn ${isCompleted ? 'btn-accent' : 'btn-secondary'}`;

    toggleBookmarkBtn.textContent = isBookmarked ? '★ Bookmarked' : '☆ Bookmark Topic';
    toggleBookmarkBtn.className = `btn ${isBookmarked ? 'btn-accent' : 'btn-secondary'}`;

    // Load Topic User Notes
    const topicNotesInput = document.getElementById('topicNotesInput');
    topicNotesInput.value = state.userNotes[topic.id] || '';

    // Render 9-Step Learning Card Format
    const container = document.getElementById('topicCardContainer');
    const explanation = state.mode === 'developer' ? topic.devExplanation : topic.begExplanation;

    container.innerHTML = `
      <div class="topic-card">
        <!-- 1. NAME & BADGE -->
        <div class="topic-header-row">
          <h2 class="topic-title">${topic.name}</h2>
          <span class="topic-tag-badge">${topic.category} · ${topic.tag}</span>
        </div>

        <!-- 2. SIMPLE EXPLANATION -->
        <div class="topic-section-block">
          <div class="topic-section-title">📖 Concept Explanation (${state.mode.toUpperCase()} MODE)</div>
          <p class="topic-explanation">${explanation}</p>
        </div>

        <!-- 3. SYNTAX -->
        <div class="topic-section-block">
          <div class="topic-section-title">💻 HTML / CSS Syntax</div>
          <div class="code-block-wrapper">
            <button class="copy-code-btn" onclick="navigator.clipboard.writeText(\`${topic.syntax.replace(/`/g, '\\`')}\`); alert('Copied syntax!');">📋 Copy</button>
            <pre><code>${escapeHtml(topic.syntax)}</code></pre>
          </div>
        </div>

        <!-- 4. LIVE OUTPUT -->
        <div class="topic-section-block">
          <div class="topic-section-title">✨ Live Output Preview</div>
          <div class="live-output-box" id="topicLiveOutput">
            ${topic.initialCode}
          </div>
        </div>

        <!-- 5 & 6. CODE & INTERACTIVE EXAMPLE -->
        <div class="topic-section-block">
          <div class="topic-section-title">⚡ Interactive Code Sandbox (Edit & Test)</div>
          <div class="code-block-wrapper">
            <button class="copy-code-btn" id="runTopicSandboxBtn">▶ Update Output</button>
            <textarea id="topicCodeTextarea" class="code-textarea" style="height: 120px;">${topic.initialCode}</textarea>
          </div>
        </div>

        <!-- 7. IMPORTANT POINT -->
        <div class="topic-section-block">
          <div class="alert-box alert-important">
            <strong>💡 Important Concept:</strong> ${topic.importantPoint}
          </div>
        </div>

        <!-- 8. COMMON MISTAKE -->
        <div class="topic-section-block">
          <div class="alert-box alert-mistake">
            <strong>⚠️ Common Beginner Mistake:</strong> ${topic.commonMistake}
          </div>
        </div>

        <!-- 9. REMEMBER THIS (MEMORY TRICK) -->
        <div class="topic-section-block">
          <div class="alert-box alert-remember">
            <strong>🧠 Remember This:</strong> ${topic.rememberThis}
          </div>
        </div>

        <!-- WHY DOES THIS EXIST BUTTON -->
        <button class="btn btn-sm btn-secondary" id="openWhyExistBtn">💡 Why does this exist?</button>
      </div>
    `;

    // Bind Sandbox Editor Listener
    const topicCodeTextarea = document.getElementById('topicCodeTextarea');
    const topicLiveOutput = document.getElementById('topicLiveOutput');
    const runTopicSandboxBtn = document.getElementById('runTopicSandboxBtn');

    function updateTopicLiveOutput() {
      topicLiveOutput.innerHTML = topicCodeTextarea.value;
    }

    runTopicSandboxBtn.addEventListener('click', updateTopicLiveOutput);
    topicCodeTextarea.addEventListener('input', updateTopicLiveOutput);

    // Bind Why Does This Exist Listener
    document.getElementById('openWhyExistBtn').addEventListener('click', () => {
      document.getElementById('whyExistContent').innerHTML = `
        <p><strong>${topic.name}</strong></p>
        <p style="margin-top: 10px;">${topic.whyExist}</p>
      `;
      openModal('whyExistModal');
    });
  }

  // Helper Escape HTML
  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  // Topic Selection Handler
  function selectTopic(topicId) {
    state.activeTopicId = topicId;
    localStorage.setItem('lab_active_topic', topicId);

    // Switch to Topic View
    switchLabTab('topicView');

    // Render Sidebar & Card
    renderSidebarNav(document.getElementById('sidebarSearchInput').value);
    renderActiveTopicCard();

    // Scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Topic Navigation Buttons (Prev / Next)
  document.getElementById('prevTopicBtn').addEventListener('click', () => {
    const idx = allTopics.findIndex(t => t.id === state.activeTopicId);
    if (idx > 0) selectTopic(allTopics[idx - 1].id);
  });

  document.getElementById('nextTopicBtn').addEventListener('click', () => {
    const idx = allTopics.findIndex(t => t.id === state.activeTopicId);
    if (idx < allTopics.length - 1) selectTopic(allTopics[idx + 1].id);
  });

  // Completion & Bookmark Toggle Handlers
  document.getElementById('toggleCompleteBtn').addEventListener('click', () => {
    const id = state.activeTopicId;
    if (state.completedTopics.includes(id)) {
      state.completedTopics = state.completedTopics.filter(x => x !== id);
    } else {
      state.completedTopics.push(id);
    }
    localStorage.setItem('lab_completed', JSON.stringify(state.completedTopics));
    updateProgressDisplays();
    renderSidebarNav();
    renderActiveTopicCard();
  });

  document.getElementById('toggleBookmarkBtn').addEventListener('click', () => {
    const id = state.activeTopicId;
    if (state.bookmarkedTopics.includes(id)) {
      state.bookmarkedTopics = state.bookmarkedTopics.filter(x => x !== id);
    } else {
      state.bookmarkedTopics.push(id);
    }
    localStorage.setItem('lab_bookmarks', JSON.stringify(state.bookmarkedTopics));
    renderActiveTopicCard();
  });

  // User Notes Auto-Save Handler
  document.getElementById('topicNotesInput').addEventListener('input', (e) => {
    state.userNotes[state.activeTopicId] = e.target.value;
    localStorage.setItem('lab_notes', JSON.stringify(state.userNotes));
    const status = document.getElementById('notesSavedStatus');
    status.textContent = 'Saving...';
    setTimeout(() => { status.textContent = 'Saved locally ✓'; }, 500);
  });

  // --------------------------------------------------------------------------
  // 5. PROGRESS & STREAK DISPLAY MANAGERS
  // --------------------------------------------------------------------------
  function updateProgressDisplays() {
    const completed = state.completedTopics.length;
    const total = allTopics.length;
    const overallPct = Math.round((completed / total) * 100);

    const htmlCount = state.completedTopics.filter(id => allTopics.find(t => t.id === id && t.category === 'HTML')).length;
    const cssCount = state.completedTopics.filter(id => allTopics.find(t => t.id === id && t.category === 'CSS')).length;

    const htmlPct = Math.round((htmlCount / 16) * 100);
    const cssPct = Math.round((cssCount / 9) * 100);

    document.getElementById('completedTopicCount').textContent = completed;
    document.getElementById('heroHtmlProgress').textContent = `${htmlPct}%`;
    document.getElementById('heroCssProgress').textContent = `${cssPct}%`;

    // Dashboard Updates
    document.getElementById('dashOverallPercent').textContent = `${overallPct}%`;
    document.getElementById('dashHtmlBar').style.width = `${htmlPct}%`;
    document.getElementById('dashHtmlText').textContent = `${htmlCount} of 16 topics`;
    document.getElementById('dashCssBar').style.width = `${cssPct}%`;
    document.getElementById('dashCssText').textContent = `${cssCount} of 9 topics`;
    document.getElementById('dashBookmarksCount').textContent = state.bookmarkedTopics.length;
    document.getElementById('dashChallengesCount').textContent = state.challengesCompleted.length;
    document.getElementById('dashQuizScore').textContent = state.quizScores.score;
  }

  // --------------------------------------------------------------------------
  // 6. LIVE CODE PLAYGROUND ENGINE
  // --------------------------------------------------------------------------
  const pgHtmlTextarea = document.getElementById('pgHtmlTextarea');
  const pgCssTextarea = document.getElementById('pgCssTextarea');
  const pgLiveIframe = document.getElementById('pgLiveIframe');
  const domTreeDisplay = document.getElementById('domTreeDisplay');

  // Initial Playground Code
  pgHtmlTextarea.value = `<h1>Welcome to Live Playground</h1>\n<p>Modify HTML and CSS to see <mark>instant live updates</mark>!</p>\n<button>Click Me</button>`;
  pgCssTextarea.value = `body {\n  font-family: sans-serif;\n  padding: 20px;\n  background-color: #f8fafc;\n}\nh1 {\n  color: #0284c7;\n}\nbutton {\n  padding: 10px 20px;\n  background: #10b981;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n}`;

  function updateLineNumbers(textarea, lineNumDiv) {
    const lines = textarea.value.split('\n').length;
    lineNumDiv.innerHTML = Array.from({ length: lines }, (_, i) => i + 1).join('<br>');
  }

  function executePlaygroundCode() {
    const html = pgHtmlTextarea.value;
    const css = pgCssTextarea.value;

    const fullDoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;

    pgLiveIframe.srcdoc = fullDoc;

    // Update DOM Tree Inspector
    domTreeDisplay.textContent = `<body>\n  ${html.replace(/\n/g, '\n  ')}\n</body>`;

    updateLineNumbers(pgHtmlTextarea, document.getElementById('pgHtmlLineNumbers'));
    updateLineNumbers(pgCssTextarea, document.getElementById('pgCssLineNumbers'));
  }

  document.getElementById('pgRunBtn').addEventListener('click', executePlaygroundCode);
  pgHtmlTextarea.addEventListener('input', executePlaygroundCode);
  pgCssTextarea.addEventListener('input', executePlaygroundCode);

  document.getElementById('pgResetBtn').addEventListener('click', () => {
    pgHtmlTextarea.value = `<h1>Live Playground</h1>\n<p>Fresh start!</p>`;
    pgCssTextarea.value = `body { padding: 20px; font-family: sans-serif; }`;
    executePlaygroundCode();
  });

  document.getElementById('pgClearBtn').addEventListener('click', () => {
    pgHtmlTextarea.value = '';
    pgCssTextarea.value = '';
    executePlaygroundCode();
  });

  document.getElementById('pgCopyHtmlBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(pgHtmlTextarea.value);
    alert('HTML copied to clipboard!');
  });

  document.getElementById('pgCopyCssBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(pgCssTextarea.value);
    alert('CSS copied to clipboard!');
  });

  // Viewport Switcher Listeners
  document.querySelectorAll('.vp-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.vp-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById('pgFrameWrapper').style.width = btn.dataset.vp;
    });
  });

  // Export File (Secret Feature #3)
  document.getElementById('pgExportBtn').addEventListener('click', () => {
    const blob = new Blob([pgLiveIframe.srcdoc], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'lab_experiment.html';
    a.click();
  });

  // --------------------------------------------------------------------------
  // 7. FLEXBOX LAB ENGINE
  // --------------------------------------------------------------------------
  const flexCanvas = document.getElementById('flexContainerCanvas');
  const flexDirSel = document.getElementById('flexDirectionSelect');
  const flexWrapSel = document.getElementById('flexWrapSelect');
  const justifySel = document.getElementById('justifyContentSelect');
  const alignSel = document.getElementById('alignItemsSelect');
  const generatedCssCode = document.getElementById('flexGeneratedCss');

  function updateFlexboxLab() {
    const dir = flexDirSel.value;
    const wrap = flexWrapSel.value;
    const justify = justifySel.value;
    const align = alignSel.value;

    flexCanvas.style.flexDirection = dir;
    flexCanvas.style.flexWrap = wrap;
    flexCanvas.style.justifyContent = justify;
    flexCanvas.style.alignItems = align;

    // Dynamic Axis Labels
    const isColumn = dir.includes('column');
    document.getElementById('mainAxisLabel').textContent = isColumn ? 'MAIN AXIS ↓' : 'MAIN AXIS →';
    document.getElementById('crossAxisLabel').textContent = isColumn ? 'CROSS AXIS →' : 'CROSS AXIS ↓';

    generatedCssCode.textContent = `.container {\n  display: flex;\n  flex-direction: ${dir};\n  flex-wrap: ${wrap};\n  justify-content: ${justify};\n  align-items: ${align};\n}`;

    // Stretch Explanation Update
    const stretchDesc = document.getElementById('flexStretchDesc');
    if (align === 'stretch') {
      stretchDesc.innerHTML = '<strong>align-items: stretch</strong> — Items expand along the cross axis to fill the entire container height/width!';
    } else {
      stretchDesc.innerHTML = `<strong>align-items: ${align}</strong> — Items align to ${align} along the cross axis without stretching.`;
    }
  }

  [flexDirSel, flexWrapSel, justifySel, alignSel].forEach(sel => {
    sel.addEventListener('change', updateFlexboxLab);
  });

  let flexItemCount = 3;
  document.getElementById('addFlexItemBtn').addEventListener('click', () => {
    flexItemCount++;
    const item = document.createElement('div');
    item.className = 'flex-item-box';
    item.textContent = `Box ${flexItemCount}`;
    flexCanvas.appendChild(item);
  });

  document.getElementById('removeFlexItemBtn').addEventListener('click', () => {
    if (flexCanvas.children.length > 1) {
      flexCanvas.removeChild(flexCanvas.lastElementChild);
      flexItemCount--;
    }
  });

  document.getElementById('resetFlexLabBtn').addEventListener('click', () => {
    flexDirSel.value = 'row';
    flexWrapSel.value = 'nowrap';
    justifySel.value = 'flex-start';
    alignSel.value = 'stretch';
    updateFlexboxLab();
  });

  // --------------------------------------------------------------------------
  // 8. BDO MINI LAB ENGINE
  // --------------------------------------------------------------------------
  const bdoTextInput = document.getElementById('bdoTextInput');
  const bdoOverrideResult = document.getElementById('bdoOverrideResult');
  const bdoStandardP = document.getElementById('bdoStandardP');
  const bdoGeneratedCode = document.getElementById('bdoGeneratedCode');
  let currentBdoDir = 'ltr';

  function updateBdoLab() {
    const text = bdoTextInput.value;
    bdoStandardP.textContent = text;
    bdoOverrideResult.innerHTML = `<bdo dir="${currentBdoDir}">${text}</bdo>`;
    bdoGeneratedCode.textContent = `<bdo dir="${currentBdoDir}">${text}</bdo>`;
  }

  bdoTextInput.addEventListener('input', updateBdoLab);
  document.querySelectorAll('.bdo-dir-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.bdo-dir-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentBdoDir = btn.dataset.dir;
      updateBdoLab();
    });
  });

  // --------------------------------------------------------------------------
  // 9. INPUT TYPES GRID LAB (ALL 22 INPUT TYPES)
  // --------------------------------------------------------------------------
  const inputTypesList = [
    { type: 'button', val: 'Click Button' },
    { type: 'checkbox', checked: true },
    { type: 'color', val: '#38bdf8' },
    { type: 'date', val: '2026-08-11' },
    { type: 'datetime-local' },
    { type: 'email', placeholder: 'user@example.com' },
    { type: 'file' },
    { type: 'hidden', val: 'secret_value' },
    { type: 'image', src: 'https://via.placeholder.com/100x40?text=Submit' },
    { type: 'month' },
    { type: 'number', val: '42' },
    { type: 'password', val: 'secret123' },
    { type: 'radio', checked: true, name: 'radioGroup' },
    { type: 'range', val: '75' },
    { type: 'reset', val: 'Reset Form' },
    { type: 'search', placeholder: 'Search term...' },
    { type: 'submit', val: 'Submit Form' },
    { type: 'tel', placeholder: '+91 9876543210' },
    { type: 'text', placeholder: 'Regular text input' },
    { type: 'time' },
    { type: 'url', placeholder: 'https://example.com' },
    { type: 'week' }
  ];

  function renderInputTypesGrid() {
    const grid = document.getElementById('inputTypesGrid');
    grid.innerHTML = '';

    inputTypesList.forEach(item => {
      const card = document.createElement('div');
      card.className = 'input-type-card';
      card.innerHTML = `
        <div class="input-type-name">&lt;input type="${item.type}"&gt;</div>
        <div>
          <input type="${item.type}" 
            ${item.val ? `value="${item.val}"` : ''} 
            ${item.placeholder ? `placeholder="${item.placeholder}"` : ''} 
            ${item.checked ? 'checked' : ''} 
            ${item.name ? `name="${item.name}"` : ''}>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // 10. TABLE GENERATOR ENGINE
  // --------------------------------------------------------------------------
  const tableRowsInput = document.getElementById('tableRowsInput');
  const tableColsInput = document.getElementById('tableColsInput');
  const tableHeaderCheck = document.getElementById('tableHeaderCheck');
  const tableBorderCheck = document.getElementById('tableBorderCheck');
  const tableLiveRender = document.getElementById('tableLiveRender');
  const tableGeneratedCode = document.getElementById('tableGeneratedCode');

  function generateTable() {
    const rows = parseInt(tableRowsInput.value);
    const cols = parseInt(tableColsInput.value);
    const incHeader = tableHeaderCheck.checked;
    const hasBorder = tableBorderCheck.checked;

    document.getElementById('tableRowsVal').textContent = rows;
    document.getElementById('tableColsVal').textContent = cols;

    let html = `<table ${hasBorder ? 'border="1" cellpadding="8"' : ''}>\n`;

    if (incHeader) {
      html += '  <thead>\n    <tr>\n';
      for (let c = 1; c <= cols; c++) {
        html += `      <th>Header ${c}</th>\n`;
      }
      html += '    </tr>\n  </thead>\n';
    }

    html += '  <tbody>\n';
    for (let r = 1; r <= rows; r++) {
      html += '    <tr>\n';
      for (let c = 1; c <= cols; c++) {
        html += `      <td>Row ${r}, Col ${c}</td>\n`;
      }
      html += '    </tr>\n';
    }
    html += '  </tbody>\n</table>';

    tableLiveRender.innerHTML = html;
    tableGeneratedCode.textContent = html;
  }

  [tableRowsInput, tableColsInput, tableHeaderCheck, tableBorderCheck].forEach(el => {
    el.addEventListener('input', generateTable);
  });

  document.getElementById('copyTableCodeBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(tableGeneratedCode.textContent);
    alert('Table HTML copied!');
  });

  // --------------------------------------------------------------------------
  // 11. ENTITY EXPLORER CONVERTER
  // --------------------------------------------------------------------------
  const entityInputText = document.getElementById('entityInputText');
  const entityRenderedChar = document.getElementById('entityRenderedChar');

  entityInputText.addEventListener('input', () => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = entityInputText.value;
    entityRenderedChar.textContent = tempDiv.textContent || tempDiv.innerText || ' ';
  });

  // --------------------------------------------------------------------------
  // 12. MEDIA PLAYGROUND ENGINE
  // --------------------------------------------------------------------------
  const mediaContentArea = document.getElementById('mediaContentArea');

  function renderMediaTab(type) {
    if (type === 'img') {
      mediaContentArea.innerHTML = `
        <div class="form-group">
          <label>Image Source (src):</label>
          <input type="text" id="mediaImgSrc" class="form-control" value="https://picsum.photos/400/250">
        </div>
        <div class="form-group">
          <label>Alt Text (alt):</label>
          <input type="text" id="mediaImgAlt" class="form-control" value="Sample Picture">
        </div>
        <div class="live-output-box" style="margin-top:20px;">
          <img id="mediaImgRender" src="https://picsum.photos/400/250" alt="Sample Picture" width="350">
        </div>
      `;
      document.getElementById('mediaImgSrc').addEventListener('input', (e) => {
        document.getElementById('mediaImgRender').src = e.target.value;
      });
    } else if (type === 'audio') {
      mediaContentArea.innerHTML = `
        <p>Testing &lt;audio&gt; with controls and autoplay attributes:</p>
        <div class="live-output-box" style="margin-top:20px;">
          <audio src="https://www.w3schools.com/html/horse.mp3" controls></audio>
        </div>
      `;
    } else if (type === 'video') {
      mediaContentArea.innerHTML = `
        <p>Testing &lt;video&gt; player controls:</p>
        <div class="live-output-box" style="margin-top:20px;">
          <video src="https://www.w3schools.com/html/mov_bbb.mp4" controls width="400"></video>
        </div>
      `;
    } else if (type === 'iframe') {
      mediaContentArea.innerHTML = `
        <p>Testing &lt;iframe&gt; embedding:</p>
        <div class="live-output-box" style="margin-top:20px; flex-direction:column;">
          <iframe src="https://www.wikipedia.org" width="100%" height="300" style="border:1px solid #ccc;"></iframe>
          <p style="font-size:0.8rem; color:#666; margin-top:8px;">Note: Some third-party websites block iframe embedding via X-Frame-Options security headers.</p>
        </div>
      `;
    }
  }

  document.querySelectorAll('.media-subtab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.media-subtab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMediaTab(tab.dataset.mediatab);
    });
  });

  // --------------------------------------------------------------------------
  // 13. MINI HTML PAGE BUILDER
  // --------------------------------------------------------------------------
  const builderHtmlInput = document.getElementById('builderHtmlInput');
  const builderCssInput = document.getElementById('builderCssInput');
  const builderIframe = document.getElementById('builderIframe');

  builderHtmlInput.value = `<h1>My Custom Mini Web Page</h1>\n<p>Built inside the <strong>HTML + CSS Lab</strong>!</p>\n<ul>\n  <li>HTML Structure</li>\n  <li>CSS Styling</li>\n</ul>`;
  builderCssInput.value = `body {\n  font-family: Arial, sans-serif;\n  background: #f0fdf4;\n  color: #166534;\n  padding: 20px;\n}\nh1 {\n  color: #15803d;\n}`;

  function updatePageBuilderPreview() {
    builderIframe.srcdoc = `<html><head><style>${builderCssInput.value}</style></head><body>${builderHtmlInput.value}</body></html>`;
  }

  document.getElementById('builderRunBtn').addEventListener('click', updatePageBuilderPreview);

  // --------------------------------------------------------------------------
  // 14. CHALLENGE MODE ENGINE
  // --------------------------------------------------------------------------
  const challenges = [
    {
      id: "ch-1",
      title: "1. Heading & Paragraph",
      desc: "Create an <h1> tag with text 'Hello World' and a <p> tag with text 'Welcome to HTML'.",
      initial: "<!-- Write code here -->",
      validate: (code) => /<h1>\s*Hello World\s*<\/h1>/i.test(code) && /<p>\s*Welcome to HTML\s*<\/p>/i.test(code),
      hint: "Remember to close </h1> and </p> tags properly."
    },
    {
      id: "ch-2",
      title: "2. Bold with <strong>",
      desc: "Create a paragraph containing text with 'HTML' wrapped in <strong> tags.",
      initial: "<p>Learn HTML today</p>",
      validate: (code) => /<strong>\s*HTML\s*<\/strong>/i.test(code),
      hint: "Use <strong>HTML</strong> inside the paragraph."
    },
    {
      id: "ch-3",
      title: "3. Form & Inputs",
      desc: "Create a form with an input of type 'email' and an input of type 'password'.",
      initial: "<form>\n</form>",
      validate: (code) => /type=["']email["']/i.test(code) && /type=["']password["']/i.test(code),
      hint: "Use <input type='email'> and <input type='password'> inside <form>."
    },
    {
      id: "ch-4",
      title: "4. Table Header",
      desc: "Create a <table> with a row containing two <th> header cells.",
      initial: "<table>\n</table>",
      validate: (code) => /<th>[\s\S]*?<\/th>[\s\S]*?<th>[\s\S]*?<\/th>/i.test(code),
      hint: "Wrap <th> headers inside a <tr> row."
    }
  ];

  let activeChallenge = challenges[0];

  function renderChallengeList() {
    const sidebarNav = document.getElementById('challengeListNav');
    sidebarNav.innerHTML = '';

    challenges.forEach(ch => {
      const isSolved = state.challengesCompleted.includes(ch.id);
      const item = document.createElement('div');
      item.className = `challenge-item ${ch.id === activeChallenge.id ? 'active' : ''}`;
      item.innerHTML = `${ch.title} ${isSolved ? '✓' : ''}`;
      item.addEventListener('click', () => {
        activeChallenge = ch;
        renderActiveChallenge();
        renderChallengeList();
      });
      sidebarNav.appendChild(item);
    });
  }

  function renderActiveChallenge() {
    document.getElementById('challengeTitle').textContent = activeChallenge.title;
    document.getElementById('challengeDesc').textContent = activeChallenge.desc;
    document.getElementById('challengeCodeInput').value = activeChallenge.initial;
    document.getElementById('challengeResultBanner').style.display = 'none';
  }

  document.getElementById('challengeSubmitBtn').addEventListener('click', () => {
    const code = document.getElementById('challengeCodeInput').value;
    const banner = document.getElementById('challengeResultBanner');
    banner.style.display = 'block';

    if (activeChallenge.validate(code)) {
      banner.className = 'result-banner alert-remember';
      banner.innerHTML = '<strong>🎉 Correct Solution!</strong> Challenge completed!';
      if (!state.challengesCompleted.includes(activeChallenge.id)) {
        state.challengesCompleted.push(activeChallenge.id);
        localStorage.setItem('lab_challenges', JSON.stringify(state.challengesCompleted));
        updateProgressDisplays();
        renderChallengeList();
      }
    } else {
      banner.className = 'result-banner alert-mistake';
      banner.innerHTML = '<strong>❌ Incorrect:</strong> Code requirements not met yet. Try again!';
    }
  });

  document.getElementById('challengeHintBtn').addEventListener('click', () => {
    alert(`💡 Smart Hint: ${activeChallenge.hint}`);
  });

  // --------------------------------------------------------------------------
  // 15. QUIZ MODE ENGINE
  // --------------------------------------------------------------------------
  const quizQuestions = [
    {
      q: "Which tag is used for superscript text (e.g. X²)?",
      options: ["<sub>", "<sup>", "<small>", "<mark>"],
      correct: 1,
      exp: "<sup> moves text above the line for superscript (X²). <sub> is for subscript below (H₂O)."
    },
    {
      q: "What is the difference between <b> and <strong>?",
      options: ["No difference", "<b> is bold; <strong> carries semantic importance", "<strong> is smaller", "<b> is for titles only"],
      correct: 1,
      exp: "<b> draws visual bold attention, but <strong> carries semantic importance for screen readers."
    },
    {
      q: "Which CSS flexbox property aligns items along the Main Axis?",
      options: ["align-items", "justify-content", "flex-wrap", "align-content"],
      correct: 1,
      exp: "justify-content aligns along the Main Axis; align-items aligns along the Cross Axis."
    },
    {
      q: "What is the default value of align-items in Flexbox?",
      options: ["flex-start", "center", "stretch", "space-between"],
      correct: 2,
      exp: "align-items defaults to 'stretch', stretching items across available cross-axis space."
    }
  ];

  let quizIndex = 0;

  function renderQuizQuestion() {
    const q = quizQuestions[quizIndex];
    document.getElementById('quizQuestionNum').textContent = `Question ${quizIndex + 1} of ${quizQuestions.length}`;
    document.getElementById('quizScoreCount').textContent = `Score: ${state.quizScores.score}`;
    document.getElementById('quizQuestionText').textContent = q.q;

    const optionsGrid = document.getElementById('quizOptionsGrid');
    optionsGrid.innerHTML = '';
    document.getElementById('quizExplanationBox').style.display = 'none';
    document.getElementById('nextQuizBtn').style.display = 'none';

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => handleQuizOptionClick(idx, btn));
      optionsGrid.appendChild(btn);
    });
  }

  function handleQuizOptionClick(selectedIdx, btnEl) {
    const q = quizQuestions[quizIndex];
    const expBox = document.getElementById('quizExplanationBox');
    expBox.style.display = 'block';

    document.querySelectorAll('.quiz-option-btn').forEach(b => b.disabled = true);

    if (selectedIdx === q.correct) {
      btnEl.classList.add('correct');
      expBox.className = 'quiz-explanation-box alert-remember';
      expBox.innerHTML = `<strong>Correct ✓</strong> — ${q.exp}`;
      state.quizScores.score += 10;
    } else {
      btnEl.classList.add('incorrect');
      expBox.className = 'quiz-explanation-box alert-mistake';
      expBox.innerHTML = `<strong>Incorrect ✗</strong> — ${q.exp}`;
    }

    localStorage.setItem('lab_quiz', JSON.stringify(state.quizScores));
    document.getElementById('nextQuizBtn').style.display = 'inline-block';
  }

  document.getElementById('nextQuizBtn').addEventListener('click', () => {
    quizIndex = (quizIndex + 1) % quizQuestions.length;
    renderQuizQuestion();
  });

  // --------------------------------------------------------------------------
  // 16. INTERVIEW MODE ENGINE
  // --------------------------------------------------------------------------
  const interviewQA = [
    {
      cat: "HTML",
      q: "What is the difference between <div> and <span>?",
      a: "<div> is a block-level element that starts on a new line and spans 100% width. <span> is an inline element that stays on the same line and wraps around text content."
    },
    {
      cat: "HTML",
      q: "What does <bdo> stand for and what is it used for?",
      a: "<bdo> stands for Bi-Directional Override. It is used to explicitly override the direction of text (e.g. dir='rtl' for right-to-left)."
    },
    {
      cat: "CSS",
      q: "What does align-items: stretch do in Flexbox?",
      a: "It stretches flex items to fill the container's cross-axis space when the item's cross-axis size is not explicitly fixed."
    }
  ];

  let interviewIndex = 0;

  function renderInterviewCard() {
    const item = interviewQA[interviewIndex];
    document.getElementById('interviewTag').textContent = item.cat;
    document.getElementById('interviewQuestion').textContent = item.q;
    document.getElementById('interviewAnswerText').textContent = item.a;
    document.getElementById('interviewAnswerBox').style.display = 'none';
  }

  document.getElementById('revealAnswerBtn').addEventListener('click', () => {
    document.getElementById('interviewAnswerBox').style.display = 'block';
  });

  document.getElementById('prevInterviewBtn').addEventListener('click', () => {
    if (interviewIndex > 0) { interviewIndex--; renderInterviewCard(); }
  });

  document.getElementById('nextInterviewBtn').addEventListener('click', () => {
    if (interviewIndex < interviewQA.length - 1) { interviewIndex++; renderInterviewCard(); }
  });

  // --------------------------------------------------------------------------
  // 17. COMMAND PALETTE & GLOBAL SEARCH (CTRL + K)
  // --------------------------------------------------------------------------
  const searchModal = document.getElementById('searchModal');
  const paletteSearchInput = document.getElementById('paletteSearchInput');
  const paletteResultsList = document.getElementById('paletteResultsList');

  function openSearchModal() {
    searchModal.classList.add('active');
    paletteSearchInput.value = '';
    paletteSearchInput.focus();
    renderPaletteResults('');
  }

  function closeSearchModal() {
    searchModal.classList.remove('active');
  }

  document.getElementById('searchTriggerBtn').addEventListener('click', openSearchModal);

  function renderPaletteResults(query) {
    paletteResultsList.innerHTML = '';

    const results = allTopics.filter(t => 
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.category.toLowerCase().includes(query.toLowerCase())
    );

    results.forEach(t => {
      const item = document.createElement('div');
      item.className = 'palette-item';
      item.innerHTML = `
        <span>${t.name}</span>
        <span class="topic-tag-badge">${t.category}</span>
      `;
      item.addEventListener('click', () => {
        selectTopic(t.id);
        closeSearchModal();
      });
      paletteResultsList.appendChild(item);
    });
  }

  paletteSearchInput.addEventListener('input', (e) => {
    renderPaletteResults(e.target.value);
  });

  // Global Keyboard Shortcuts Listener
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.ctrlKey && e.key === 'Enter') {
      e.preventDefault();
      executePlaygroundCode();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
      closeModal('shortcutsModal');
      closeModal('whyExistModal');
      closeModal('surprisesModal');
      closeModal('certificateModal');
    }
  });

  // Modal Open/Close Helpers
  function openModal(id) { document.getElementById(id).classList.add('active'); }
  function closeModal(id) { document.getElementById(id).classList.remove('active'); }

  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal-overlay').classList.remove('active');
    });
  });

  document.getElementById('shortcutsModalBtn').addEventListener('click', () => openModal('shortcutsModal'));

  // --------------------------------------------------------------------------
  // 18. SECRET UNLOCKED FEATURES MODAL (REQUIREMENT #55)
  // --------------------------------------------------------------------------
  const surprises = [
    { title: "🎨 Live Color Picker", desc: "Interactive CSS color inspector" },
    { title: "📏 Box-Model Visualizer", desc: "Real-time margin/padding box display" },
    { title: "⚡ Snippet Exporter", desc: "Export sandbox code as .html file" },
    { title: "📜 Cheat Sheet Matrix", desc: "Quick reference for all curriculum tags" },
    { title: "🔍 DOM Inspector Tree", desc: "Interactive tree view of generated DOM" },
    { title: "🔊 Voice Explainer", desc: "Speech synthesis reading explanations" },
    { title: "📱 Viewport Switcher", desc: "Simulate Desktop, Tablet, & Mobile frames" },
    { title: "⏱️ Focus Pomodoro Timer", desc: "Practice timer integrated in top bar" },
    { title: "🎓 Canvas Certificate", desc: "Custom completion certificate renderer" },
    { title: "🎯 Challenge Hints", desc: "Smart automated hint suggestions" },
    { title: "🔄 Diff Viewer", desc: "Compare edited code vs template" },
    { title: "🔖 Category Filters", desc: "Filter concepts by category tags" },
    { title: "📊 Progress Analytics", desc: "Visual percentage tracking" },
    { title: "🎭 Dark/Light Themes", desc: "Theme persistence across reloads" },
    { title: "🛡️ HTML Sanitizer", desc: "Safe live preview iframe sandbox" },
    { title: "🖨️ Printable View", desc: "Clean exportable study guide" },
    { title: "🧠 Spaced Repetition", desc: "Quiz review system" },
    { title: "🎬 Flexbox Axis Motion", desc: "Animated main & cross axis arrows" },
    { title: "📌 Note Taking System", desc: "Personal study notes saved per topic" },
    { title: "⚡ Shortcuts Overlay", desc: "Quick keybinding modal listener" },
    { title: "📱 Drawer Navigation", desc: "Responsive mobile drawer sidebar" },
    { title: "🔥 Streak Tracker", desc: "Daily practice streak counter" }
  ];

  document.getElementById('floatingSurpriseBtn').addEventListener('click', () => {
    const surprisesGrid = document.getElementById('surprisesGrid');
    surprisesGrid.innerHTML = '';
    surprises.forEach(s => {
      const card = document.createElement('div');
      card.className = 'surprise-card';
      card.innerHTML = `<strong>${s.title}</strong><p>${s.desc}</p>`;
      surprisesGrid.appendChild(card);
    });
    openModal('surprisesModal');
  });

  // --------------------------------------------------------------------------
  // 19. CERTIFICATE CANVAS GENERATOR
  // --------------------------------------------------------------------------
  document.getElementById('claimCertificateBtn').addEventListener('click', () => {
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 28px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', canvas.width / 2, 100);

    ctx.fillStyle = '#ffffff';
    ctx.font = '20px sans-serif';
    ctx.fillText('This certifies that you have completed the', canvas.width / 2, 180);

    ctx.fillStyle = '#10b981';
    ctx.font = 'bold 26px sans-serif';
    ctx.fillText('HTML + CSS INTERACTIVE LABORATORY', canvas.width / 2, 230);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '16px sans-serif';
    ctx.fillText(`Mastered ${state.completedTopics.length} Curriculum Concepts`, canvas.width / 2, 300);

    openModal('certificateModal');
  });

  // --------------------------------------------------------------------------
  // 20. TAB SWITCHING ENGINE
  // --------------------------------------------------------------------------
  function switchLabTab(tabId) {
    document.querySelectorAll('.lab-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    document.querySelectorAll('.view-panel').forEach(panel => {
      panel.classList.toggle('active', panel.id === tabId);
    });

    // Run tab specific renderers
    if (tabId === 'flexboxView') updateFlexboxLab();
    if (tabId === 'bdoView') updateBdoLab();
    if (tabId === 'inputTypesView') renderInputTypesGrid();
    if (tabId === 'tableBuilderView') generateTable();
    if (tabId === 'mediaLabView') renderMediaTab('img');
    if (tabId === 'pageBuilderView') updatePageBuilderPreview();
    if (tabId === 'challengesView') { renderChallengeList(); renderActiveChallenge(); }
    if (tabId === 'quizView') renderQuizQuestion();
    if (tabId === 'interviewView') renderInterviewCard();
    if (tabId === 'dashboardView') updateProgressDisplays();
  }

  document.querySelectorAll('.lab-tab').forEach(tab => {
    tab.addEventListener('click', () => switchLabTab(tab.dataset.tab));
  });

  // Hero CTAs Navigation Listeners
  document.getElementById('startLearningBtn').addEventListener('click', () => switchLabTab('topicView'));
  document.getElementById('openPlaygroundBtn').addEventListener('click', () => switchLabTab('playgroundView'));
  document.getElementById('openFlexboxLabBtn').addEventListener('click', () => switchLabTab('flexboxView'));

  // Theme Toggle Listener
  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('lab_theme', state.theme);
    updateThemeIcon();
  });

  function updateThemeIcon() {
    document.getElementById('themeIcon').textContent = state.theme === 'dark' ? '🌙' : '☀️';
  }

  // Beginner / Developer Mode Switcher
  document.getElementById('beginnerModeBtn').addEventListener('click', () => {
    state.mode = 'beginner';
    localStorage.setItem('lab_mode', 'beginner');
    document.getElementById('beginnerModeBtn').classList.add('active');
    document.getElementById('devModeBtn').classList.remove('active');
    renderActiveTopicCard();
  });

  document.getElementById('devModeBtn').addEventListener('click', () => {
    state.mode = 'developer';
    localStorage.setItem('lab_mode', 'developer');
    document.getElementById('devModeBtn').classList.add('active');
    document.getElementById('beginnerModeBtn').classList.remove('active');
    renderActiveTopicCard();
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'flex';
    } else {
      backToTopBtn.style.display = 'none';
    }

    // Update Reading Progress Bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('readingProgressBar').style.width = scrolled + '%';
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // --------------------------------------------------------------------------
  // INITIAL APP LAUNCH
  // --------------------------------------------------------------------------
  renderSidebarNav();
  renderActiveTopicCard();
  executePlaygroundCode();
  updateProgressDisplays();

  // Daily Topic Spotlight Setup
  const dailyTopic = allTopics[Math.floor(Math.random() * allTopics.length)];
  document.getElementById('dailyTopicTitle').textContent = dailyTopic.name;
  document.getElementById('jumpDailyTopicBtn').addEventListener('click', () => selectTopic(dailyTopic.id));
});
