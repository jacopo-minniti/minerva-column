<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Editorial Guidelines — The Minerva Column</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet" />
  <style>
    :root {
      --ink: #1a1208;
      --paper: #f5f0e8;
      --paper-dark: #ede6d6;
      --rule: #c8b89a;
      --accent: #8b2c2c;
      --accent-light: #c0392b22;
      --mono: 'IBM Plex Mono', monospace;
      --serif: 'Source Serif 4', Georgia, serif;
      --display: 'Playfair Display', Georgia, serif;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html { scroll-behavior: smooth; }

    body {
      background: var(--paper);
      color: var(--ink);
      font-family: var(--serif);
      font-size: 17px;
      line-height: 1.75;
      font-weight: 300;
    }

    /* HEADER */
    header {
      padding: 3rem 0 2rem;
      border-bottom: 1px solid var(--rule);
    }

    header h1 {
      font-family: var(--display);
      font-size: clamp(1.8rem, 4vw, 2.75rem);
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: -0.01em;
    }

    /* LAYOUT */
    .wrapper {
      max-width: 780px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    /* TOC */
    nav {
      padding: 2rem 0;
      border-bottom: 1px solid var(--rule);
    }

    nav h2 {
      font-family: var(--mono);
      font-size: 0.7rem;
      font-weight: 500;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #5a4a30;
      border: none;
      margin-bottom: 0.75rem;
      padding: 0;
    }

    nav ol {
      padding-left: 1.5rem;
      margin: 0;
    }

    nav li { margin-bottom: 0.2rem; }

    nav a {
      font-family: var(--serif);
      font-size: 0.95rem;
      color: var(--ink);
      text-decoration: none;
      border-bottom: 1px solid transparent;
      transition: color 0.15s, border-color 0.15s;
    }

    nav a:hover { color: var(--accent); border-bottom-color: var(--accent); }

    /* MAIN CONTENT */
    main { padding: 3rem 0 5rem; }

    /* SECTIONS */
    section {
      margin-bottom: 3.5rem;
      padding-top: 1rem;
    }

    h2 {
      font-family: var(--display);
      font-size: clamp(1.5rem, 3.5vw, 2rem);
      font-weight: 700;
      line-height: 1.2;
      padding-bottom: 0.6rem;
      border-bottom: 1px solid var(--rule);
      margin-bottom: 1.5rem;
    }

    h3 {
      font-family: var(--display);
      font-style: italic;
      font-size: 1.2rem;
      font-weight: 400;
      margin: 2rem 0 0.75rem;
      color: var(--accent);
    }

    h4 {
      font-family: var(--mono);
      font-size: 0.75rem;
      font-weight: 500;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      margin: 1.5rem 0 0.5rem;
      color: #5a4a30;
    }

    p { margin-bottom: 1rem; }

    p:last-child { margin-bottom: 0; }

    ul, ol {
      padding-left: 1.5rem;
      margin-bottom: 1rem;
    }

    li {
      margin-bottom: 0.4rem;
      padding-left: 0.25rem;
    }

    li::marker { color: var(--accent); }

    /* CALLOUT BOX */
    .callout {
      background: var(--paper-dark);
      border-left: 3px solid var(--accent);
      padding: 1rem 1.25rem;
      margin: 1.5rem 0;
      font-style: italic;
      font-size: 0.95rem;
    }

    /* EMAIL LINK */
    a {
      color: var(--accent);
      text-decoration: underline;
      text-underline-offset: 3px;
    }

    a:hover { text-decoration: none; }

    /* DIVIDER */
    .rule {
      border: none;
      border-top: 1px solid var(--rule);
      margin: 2rem 0;
    }

    /* TWO-COL GRID for style checklist */
    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0 2.5rem;
    }

    @media (max-width: 600px) {
      .two-col { grid-template-columns: 1fr; }
      nav .wrapper { gap: 0.4rem 1rem; }
    }

    /* FOOTER */
    footer {
      border-top: 3px double var(--ink);
      padding: 1.5rem 0;
      text-align: center;
      font-family: var(--mono);
      font-size: 0.65rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--rule);
    }

    /* PRINT */
    @media print {
      nav, footer { display: none; }
      body { font-size: 12pt; }
    }
  </style>
</head>
<body>

<header>
  <div class="wrapper">
    <h1>Editorial Guidelines</h1>
  </div>
</header>

<nav>
  <div class="wrapper">
    <h2>Table of Contents</h2>
    <ol>
      <li><a href="#about">About This Document</a></li>
      <li><a href="#ethics">Code of Ethics</a></li>
      <li><a href="#corrections">Corrections &amp; Clarifications Policy</a></li>
      <li><a href="#conflict">Conflict-of-Interest Disclosure Standard</a></li>
      <li><a href="#structure">Editorial Structure &amp; Leadership Roles</a></li>
      <li><a href="#branding">University Name, Trademarks &amp; Branding</a></li>
      <li><a href="#style">Full Style Checklist</a></li>
    </ol>
  </div>
</nav>

<main>
  <div class="wrapper">

    <!-- 1. ABOUT -->
    <section id="about">
      <h2>1. About This Document</h2>
      <p>The Minerva Column is the student newspaper at Minerva University. We want to bring relevant discussion to the forefront and help students articulate their ideas and experiences most effectively. Writing is thinking. This is a place to practice both, and therefore, we work hard to avoid generative AI tools.</p>
      <p>Our mission is to create a space for Minervans to exchange critical ideas, refine their arguments, reflect on their experiences, and examine the institution's actions. We've seen how easy it is for tensions to flare or opinions to get flattened in informal chats. This is our attempt at slowing down, thinking carefully, and engaging generously.</p>
      <div class="callout">These guidelines were created in March 2026 and are subject to revisions.</div>
    </section>

    <!-- 2. CODE OF ETHICS -->
    <section id="ethics">
      <h2>2. Code of Ethics</h2>

      <h3>Anonymity</h3>
      <ul>
        <li>Writers must sign with their full name, unless it puts the writer at increased risk — for example, with respect to their visa status.</li>
        <li>All sources of information should generally be open and identified, unless it conflicts with the protection of the source or the consideration of third parties. Sources should generally not be allowed to present negative personal characteristics anonymously.</li>
        <li>Decisions about anonymity will be taken at the discretion of the editorial team, in communication with the author.</li>
      </ul>

      <h3>Reasons to Decline a Piece</h3>
      <p>While we are open to all kinds of ideas, we reserve the right to decline some pieces. This can happen at any stage: pitching, editing, or final submission. Editors will flag these issues and either make suggestions to the writer, or raise the issue to the editorial board. Grounds for refusal include:</p>
      <ul>
        <li>The piece belongs in <em>Napkins</em> (poetry, photography, short stories, creative writing, etc.)</li>
        <li>Clear conflict of interest</li>
        <li>Repetitive/spam — other pieces have already covered the same take or arguments</li>
        <li>Advertising is the main goal</li>
        <li>Lack of respect for community members or clearly attacking individual persons</li>
        <li>Clear AI use</li>
        <li>Not passing fact checks</li>
      </ul>
      <p>As a general practice, we seek to contact individuals about whom notable claims are made and invite their response. This may not always be feasible, and final decisions rest with the editorial board.</p>
    </section>

    <!-- 3. CORRECTIONS -->
    <section id="corrections">
      <h2>3. Corrections &amp; Clarifications Policy</h2>

      <h3>Editor's Responsibilities</h3>
      <p>The key role of the editor is to elevate the quality of the writing and enable all writers to get their point across in the most effective way:</p>
      <ul>
        <li><strong>Check all sources.</strong> Follow hyperlinks and suggest improvements if sources are not adequate. If facts lack a source, ask the author and ensure they add one.</li>
        <li><strong>Maintain consistency.</strong> Grammar, spelling, and style should follow the Harvard Graduate School of Education's style guide.</li>
        <li><strong>Encourage the writer.</strong> Many may be writing for the first time — offer constructive feedback and encourage them to keep improving.</li>
      </ul>
      <p>Editors are also responsible for keeping the issue tracker up to date. If a piece violates the values of the newspaper and cannot be revised to meet them, communicate clearly with the author.</p>

      <h3>Attributions</h3>
      <p>Introduce all sources fully and do not assume readers know their credentials.</p>

      <h3>Mistakes in Published Pieces</h3>
      <p>If you believe there is a mistake in something the Column publishes, please reach out to a member of the editorial board or by email at <a href="mailto:theminervacolumn@gmail.com">theminervacolumn@gmail.com</a>. We are committed to accuracy and hope to correct mistakes quickly.</p>
      <p>When a correction is necessary, it will be explained in a corrections box under the updated version on our website, and with a note in the next printed issue.</p>
    </section>

    <!-- 4. CONFLICT OF INTEREST -->
    <section id="conflict">
      <h2>4. Conflict-of-Interest Disclosure Standard</h2>
      <p>A clear conflict of interest is grounds for declining a piece. Editors will flag these issues and either make suggestions to the writer, or raise the issue to the editorial board, who can refuse the article if the piece cannot change direction or the writer is unwilling to do so.</p>
      <p>Additionally, advertising as the main goal of a piece is similarly grounds for refusal.</p>
    </section>

    <!-- 5. STRUCTURE -->
    <section id="structure">
      <h2>5. Editorial Structure &amp; Leadership Roles</h2>

      <h3>The Editorial Board</h3>
      <p>Editors are recruited from the larger community and organized by the editorial board. For AY 2025–2026, the editorial board consists of Daniya Ishankulova, Camila López González, Kajsa Falsen, and Clara Tripodi. New members will be able to apply and be selected at the end of the AY.</p>

      <h3>How To Edit</h3>
      <ul>
        <li>Writers must give editing privileges to the editor.</li>
        <li>Editors will edit in suggest mode so that writers read and "accept" all changes made.</li>
      </ul>

      <h3>How To Submit</h3>
      <ul>
        <li>Editors ensure the text is in the correct format (see the Notion page for the template link).</li>
        <li>Submit the formatted piece in the issue tracker — please keep this up to date.</li>
      </ul>
      <div class="callout">You can always find template and tracker links in The Minerva Column Notion pages, or by reaching out to the editorial board.</div>
    </section>

    <!-- 6. BRANDING -->
    <section id="branding">
      <h2>6. University Name, Trademarks &amp; Branding</h2>
      <p>We do not use the Minerva trademark or logo to maintain our independence.</p>
      <ul>
        <li>"School" or "university" should only be capitalized as part of an official school name (e.g., Minerva University), not when used alone (e.g., <em>I go to a university</em>).</li>
        <li>Spell out school names in full on first mention; acronyms are acceptable thereafter.</li>
        <li>Acronyms and initialisms do NOT use periods (e.g., MU).</li>
      </ul>
    </section>

    <!-- 7. STYLE -->
    <section id="style">
      <h2>7. Full Style Checklist</h2>

      <div class="two-col">
        <div>
          <h4>Capitalization</h4>
          <ul>
            <li>Use title case on course names; no italics or quotation marks.</li>
            <li>Capitalize "university" only as part of an official name.</li>
          </ul>

          <h4>Degrees &amp; Acronyms</h4>
          <ul>
            <li>Use periods with degrees (e.g., Ph.D.).</li>
            <li>Acronyms do NOT use periods (e.g., MU).</li>
            <li>Spell out school names fully on first mention.</li>
          </ul>

          <h4>United States</h4>
          <ul>
            <li>Do NOT abbreviate as a noun: <em>He lives in the United States.</em></li>
            <li>Abbreviate as adjective: <em>U.S. Department of Energy.</em></li>
          </ul>

          <h4>Numbers</h4>
          <ul>
            <li>Use en dashes (–) for ranges, not hyphens.</li>
            <li>Acronym plurals: add "s" (e.g., MBAs).</li>
            <li>No superscripts on ordinals (e.g., 31st, 22nd).</li>
            <li>Spell out numbers at the start of sentences.</li>
            <li>Spell out numbers under 10; use figures for 10 and above.</li>
            <li><em>Exceptions:</em> dollar figures, percentages, page numbers, addresses, times.</li>
          </ul>

          <h4>Time</h4>
          <ul>
            <li>Use "noon" or "midnight," not 12:00.</li>
            <li>No double zeros (8 p.m., not 8:00 p.m.).</li>
            <li>Use a.m./p.m. in lowercase with periods.</li>
            <li>Omit a.m./p.m. after first time in a range if it's the same (e.g., 1–3:30 p.m.).</li>
            <li>Use en dash for time ranges.</li>
          </ul>
        </div>

        <div>
          <h4>People &amp; Job Titles</h4>
          <ul>
            <li>No Mr., Mrs., or courtesy titles unless part of a formal name.</li>
            <li>No "Dr." for academic or medical doctors.</li>
            <li>Include middle initials only if commonly used.</li>
            <li>Full name on first mention; last name only thereafter.</li>
            <li>Capitalize title before name; lowercase after (e.g., <em>Professor Jones</em> vs <em>Jones, professor</em>).</li>
          </ul>

          <h4>Publications</h4>
          <ul>
            <li>Italicize books, journals, films, artworks, major musical works, and software.</li>
            <li>Only capitalize/italicize "the" if that's how the publication styles it.</li>
          </ul>

          <h4>Punctuation</h4>
          <ul>
            <li>No ampersands (&amp;) — write "and."</li>
            <li>Use the Oxford comma.</li>
            <li>Spaces on either side of dashes (except time/age spans).</li>
            <li>Use % symbol, not "percent."</li>
            <li>Single space after periods.</li>
            <li>Proper names ending in "s" take apostrophe only (e.g., Givens').</li>
            <li>Quotation marks go outside punctuation, except for ?, —, ;, and ! not part of the quote.</li>
          </ul>

          <h4>Web &amp; Email</h4>
          <ul>
            <li>Lowercase "email," no hyphen.</li>
            <li>In print: italicize email addresses.</li>
            <li>Online: hyperlink email, do not italicize.</li>
            <li>Use "online," not "on-line."</li>
            <li>Italicize URLs in body text.</li>
          </ul>
        </div>
      </div>

      <hr class="rule" />

      <h4>First-Person Writing</h4>
      <ul>
        <li>First-person only in columns — all other article types use third-person.</li>
        <li>Even in first-person, do not lecture the reader.</li>
      </ul>

      <h4>Grammarly</h4>
      <p>You may use Grammarly as a writing aid, but always cross-check against these guidelines.</p>

      <h4>Age</h4>
      <ul>
        <li>Always include age if available.</li>
        <li>For Minervans, you can use the cohort name instead (e.g., M27); for others, include a job title or similar descriptor.</li>
      </ul>
    </section>

  </div>
</main>

<footer>
  <div class="wrapper">
    The Minerva Column &nbsp;·&nbsp; theminervacolumn@gmail.com &nbsp;·&nbsp; Guidelines revised March 2026
  </div>
</footer>

</body>
</html>
