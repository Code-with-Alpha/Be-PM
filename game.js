// ── PART 1: DATA, STATE, LEVELS 1-4 ──

const RANKS = [
  { lvl: 0, label: 'Common Citizen', icon: '🌱', xp: 0 },
  { lvl: 1, label: 'Registered Voter', icon: '🗳️', xp: 50 },
  { lvl: 2, label: 'Informed Citizen', icon: '📰', xp: 125 },
  { lvl: 3, label: 'Candidate', icon: '✋', xp: 225 },
  { lvl: 4, label: 'Campaigner', icon: '📢', xp: 325 },
  { lvl: 5, label: 'Voted!', icon: '☑️', xp: 450 },
  { lvl: 6, label: 'Elected MP', icon: '🏆', xp: 575 },
  { lvl: 7, label: 'PM-elect', icon: '🤝', xp: 725 },
  { lvl: 8, label: 'PRIME MINISTER', icon: '🏛️', xp: 1000 },
];

const LEVEL_XP = [0, 50, 75, 100, 100, 125, 125, 150, 275];

const L = {
  // Level 1 questions
  L1: [
    {
      q: '🗳️ What is the <strong>minimum age</strong> to register as a voter in India?',
      opts: ['A) 16 years', 'B) 18 years', 'C) 21 years', 'D) 25 years'], ans: 'B',
      ok: 'Correct! 18 is the magic number — thanks to the 61st Constitutional Amendment of 1988! 🎉',
      hint: 'Think about when most people finish school and step into the world...',
      wrong: 'Not quite! The voting age in India was lowered to <strong>18 years</strong> in 1988.'
    },
    {
      q: '📋 What is the <strong>EPIC card</strong>?',
      opts: ['A) An Electronic Voting Machine', 'B) The Voter ID Card issued by ECI', 'C) A nomination form', 'D) A party certificate'], ans: 'B',
      ok: 'Spot on! EPIC = <strong>Electors Photo Identity Card</strong> — your golden ticket to vote! 🎉',
      hint: 'EPIC stands for Electors Photo Identity... something.',
      wrong: 'EPIC stands for <strong>Electors Photo Identity Card</strong> — the Voter ID issued by ECI.'
    },
    {
      q: '🏛️ Which body is <strong>responsible for conducting elections</strong> in India?',
      opts: ['A) The Supreme Court', 'B) The Parliament', 'C) Election Commission of India', 'D) Home Ministry'], ans: 'C',
      ok: 'Brilliant! The <strong>Election Commission of India (ECI)</strong> is the guardian of our democracy! 🎉',
      hint: 'It\'s an independent constitutional body set up in 1950...',
      wrong: 'The <strong>Election Commission of India (ECI)</strong>, established in 1950, runs all elections.'
    },
  ],
  L1_facts: ['India has over 96 crore registered voters — the largest electorate on Earth! 🌍',
    'The ECI was established on 25 January 1950 — one day before India became a Republic! 🇮🇳',
    'You can register to vote online at voters.eci.gov.in using Form 6!'],
  L1_explain: '<strong>Voter Registration:</strong> Every Indian citizen who turns 18 can register on the Electoral Roll. You need your EPIC card (Voter ID) to vote. The <strong>Election Commission of India (ECI)</strong> is a constitutional body under Article 324 that ensures free & fair elections. The voter list is updated every year.',

  // Level 2 questions
  L2: [
    {
      q: '🏛️ Lok Sabha members are directly elected by whom?',
      opts: ['A) State Assemblies', 'B) The President', 'C) The People of India', 'D) Political Parties'], ans: 'C',
      ok: 'Yes! Lok Sabha is the <strong>House of the People</strong> — directly elected by citizens! 🎉',
      hint: 'Lok Sabha literally means "House of the People"...',
      wrong: 'Lok Sabha members are elected by the <strong>citizens of India</strong> directly.'
    },
    {
      q: '🔢 How many seats are there in the <strong>Lok Sabha</strong>?',
      opts: ['A) 250', 'B) 543', 'C) 600', 'D) 750'], ans: 'B',
      ok: 'Perfect! <strong>543 seats</strong> — you\'ll need 272 to form a majority government! 🎉',
      hint: 'The magic majority number is 272...',
      wrong: 'There are <strong>543 seats</strong> in the Lok Sabha. 272 = majority mark.'
    },
    {
      q: '📍 Which state has the <strong>MOST</strong> Lok Sabha seats?',
      opts: ['A) Maharashtra — 48', 'B) Bihar — 40', 'C) Uttar Pradesh — 80', 'D) West Bengal — 42'], ans: 'C',
      ok: 'Absolutely! <strong>Uttar Pradesh</strong> dominates with 80 seats — that\'s why every PM campaigns hard there! 🎉',
      hint: 'It\'s the most populous state in India...',
      wrong: '<strong>Uttar Pradesh</strong> has 80 Lok Sabha seats — the most of any state!'
    },
    {
      q: '🤔 Rajya Sabha members are elected by?',
      opts: ['A) Direct public vote', 'B) State Legislative Assemblies', 'C) The Prime Minister', 'D) The ECI'], ans: 'B',
      ok: 'Brilliant! Rajya Sabha = <strong>Council of States</strong> — elected by state MLAs! 🎉',
      hint: 'Rajya Sabha is called the "Council of States" for a reason...',
      wrong: 'Rajya Sabha members are elected by <strong>State Legislative Assemblies</strong> (MLAs).'
    },
  ],
  L2_facts: ['Rajya Sabha has 245 seats and members serve 6-year terms — no simultaneous elections! 🏛️',
    'The Lok Sabha Speaker is elected by MPs themselves — currently from the ruling coalition.',
    'India\'s first general elections in 1951-52 had 489 Lok Sabha seats. It became 543 after delimitation!'],
  L2_explain: 'India has a <strong>bicameral Parliament</strong>: <strong>Lok Sabha</strong> (Lower House, 543 seats, directly elected) and <strong>Rajya Sabha</strong> (Upper House, 245 seats, elected by state legislatures). To form a government, a party/coalition needs <strong>272+ Lok Sabha seats</strong>. India is divided into 543 constituencies — each elects one MP.',

  // Level 3 — nomination form (open-ended)
  L3_q: ['🗺️ <strong>What constituency</strong> will you contest from? (Make one up or pick a real one like Varanasi, Lucknow, Mumbai North!)', '🎪 <strong>Name your political party!</strong> Be creative — what does it stand for?', '🎨 <strong>Choose your election symbol!</strong> (Lotus, Hand, Rising Sun, Cricket Bat — anything goes!)', `📜 <strong>What's your #1 promise</strong> to the voters of your constituency? Your biggest campaign pledge!`],
  L3_facts: ['The election deposit for a Lok Sabha candidate is ₹25,000 (₹12,500 for SC/ST). It\'s refunded if you get 1/6th of valid votes!', 'Candidates must file their nomination using Form 2A under the Representation of People Act, 1951.', 'India had 8,360 candidates across 543 constituencies in the 2024 General Elections!'],
  L3_explain: 'To contest a Lok Sabha election you must: be an <strong>Indian citizen</strong>, be at least <strong>25 years old</strong>, be a voter in ANY constituency, and not hold a government profit post. You file a nomination with the <strong>Returning Officer</strong>, pay a ₹25,000 deposit, get 1 proposer from the constituency, and submit Form 2A.',

  // Level 4 — campaign decisions
  L4: [
    {
      q: '💰 A builder offers ₹10 crore to fund your campaign <em>secretly</em>. What do you do?',
      opts: ['A) Accept! More money = bigger rallies', 'B) Decline — this violates ECI expenditure rules', 'C) Accept but declare it partially'], ans: 'B',
      ok: 'Wise choice! Lok Sabha candidate expenditure is capped at <strong>₹95 lakh</strong> by ECI. Secret funding = disqualification! 🎉',
      hint: 'The ECI sets strict limits on how much a candidate can spend...',
      wrong: 'The right call is to <strong>decline</strong>. ECI caps Lok Sabha candidate spending at ₹95 lakh. Secret crore funding = legal trouble & disqualification.'
    },
    {
      q: '📱 Your rival is spreading <strong>false rumours</strong> about you. What do you do?',
      opts: ['A) Spread worse rumours about them', 'B) File a complaint with the ECI', 'C) Hire trolls online'], ans: 'B',
      ok: 'Smart PM move! The ECI has a <strong>cVIGIL app</strong> and a complaint system — use it! 🎉',
      hint: 'There\'s a constitutional body with power to act on election violations...',
      wrong: 'The right response: <strong>File a complaint with ECI</strong>. They have the cVIGIL app and can take action under the Model Code of Conduct.'
    },
    {
      q: '🌅 It\'s the <strong>day before polling</strong>. How do you make your final appeal?',
      opts: ['A) Distribute free sarees & cash', 'B) Hold an authorised rally & post on social media', 'C) Visit homes with gift baskets'], ans: 'B',
      ok: 'Perfect! The <strong>Model Code of Conduct</strong> bans gifts to voters (bribery). Authorised rallies are totally fine! 🎉',
      hint: 'One option is definitely bribery — which the Model Code of Conduct strictly forbids...',
      wrong: 'Answer: <strong>Authorised rally + social media</strong>. Distributing gifts/cash to voters is bribery under the Model Code of Conduct — punishable by up to 3 years in jail!'
    },
  ],
  L4_facts: ['The Model Code of Conduct kicks in the moment the election schedule is announced by ECI — parties must follow it till results!', 'In the 2024 elections, ECI seized over ₹4,600 crore in cash, liquor, drugs, and freebies during enforcement drives!', 'The cVIGIL app lets citizens report MCC violations in real-time with photo/video evidence!'],
  L4_explain: 'The <strong>Model Code of Conduct (MCC)</strong> is a set of guidelines issued by ECI for political parties and candidates during elections. Key rules: no hate speech, no bribery, no use of government resources for campaigning, campaign spending limits enforced, rallies need police permission, no campaigning 48 hours before polling (silence period).',
};

window._gameData = L;
window._ranks = RANKS;
window._levelXP = LEVEL_XP;

// ── PART 2: LEVELS 5-8 DATA ──

const L2 = {
  L5:[
    { q:'🆔 You reach the polling booth! The officer asks for ID. What do you show?',
      opts:['A) Aadhaar card only','B) Voter ID (EPIC) or any ECI-approved photo ID','C) PAN card only'], ans:'B',
      ok:'Yes! Voter ID (EPIC) is primary, but ECI also accepts Aadhaar, passport, driving licence and 9 other IDs! 🎉',
      hint:'ECI accepts multiple documents — not just one specific card...',
      wrong:'Show your <strong>Voter ID (EPIC)</strong> or any of the 11 ECI-approved photo IDs including Aadhaar, passport, or driving licence.' },
    { q:'🖊️ The officer marks <strong>indelible ink</strong> on your left index finger. Why?',
      opts:['A) It\'s a tradition with no real purpose','B) To prevent double-voting','C) For fingerprint identification'], ans:'B',
      ok:'Exactly! <strong>Indelible ink</strong> (made in Mysuru since 1962) lasts weeks — it\'s India\'s anti-fraud genius! 🎉',
      hint:'Think about what would happen if someone tried to vote TWICE...',
      wrong:'The ink prevents <strong>double voting</strong>. It\'s made by Mysore Paints & Varnish Ltd and can\'t be washed off for 2-3 weeks!' },
    { q:'⚡ You\'re inside the voting compartment. The EVM is in front of you. What do you do?',
      opts:['A) Press any button quickly','B) Find your candidate\'s name & symbol, press the blue button next to it','C) Take a photo of the EVM'], ans:'B',
      ok:'Perfect! Press the blue button next to your chosen candidate. The VVPAT machine also prints a slip for verification! 🎉',
      hint:'Your vote must be for a specific candidate — and photographing the EVM is actually illegal!',
      wrong:'Press the <strong>blue button next to your chosen candidate\'s name and symbol</strong>. The VVPAT then prints a paper slip you can verify for 7 seconds.' },
  ],
  L5_facts:['India\'s EVMs run on a single battery and work even without electricity — crucial for remote villages!','The VVPAT (Voter Verifiable Paper Audit Trail) was introduced nationwide in the 2019 general elections.','Indelible ink has been used in Indian elections since 1962. It\'s exported to 28+ countries!'],
  L5_explain:'<strong>Voting Day process:</strong> Arrive at your assigned booth → Show ID → Officer verifies Electoral Roll → Indelible ink on finger → Voting slip → Enter compartment → Press EVM button next to your candidate → VVPAT displays paper slip for 7 seconds → Vote cast! The whole process takes under 5 minutes. EVMs cannot be hacked — they are standalone, non-networked devices.',

  L6_facts:['The closest Lok Sabha victory ever was in 2014 — a candidate won by just 1 vote in Tripura East!','In 2024, India counted votes for 543 constituencies in a single day — a logistical marvel!','The Returning Officer is a government official (usually District Collector) who officially declares results.'],
  L6_explain:'<strong>Vote Counting:</strong> Counting begins at 8 AM on result day. EVMs are brought from strong rooms under heavy security. Each round of counting covers one EVM. The <strong>Returning Officer</strong> announces results. A candidate wins by simple plurality — the one with MOST votes wins, even without majority (First Past The Post system).',

  L7_facts:['India has had 3 coalition governments that completed full 5-year terms: VP Singh (1989), Vajpayee (1999), and Manmohan Singh (2004 & 2009)!','The President of India formally invites the leader of the majority party/coalition to form the government.','A vote of no-confidence can topple a government — it has happened 3 times in Indian history!'],
  L7_explain:'<strong>Government Formation:</strong> If no single party wins 272+ seats, the largest party tries to build a <strong>coalition</strong>. The President invites the leader most likely to command majority support. The PM is sworn in first, then the Cabinet. A government can survive only if it maintains the confidence of the Lok Sabha. The <strong>magic number is 272</strong> (half of 543 + 1).',

  L8_facts:['The PM\'s oath is administered by the President at Rashtrapati Bhavan\'s Forecourt — one of India\'s grandest ceremonies!','The PM can have a Cabinet of up to 15% of total Lok Sabha strength — maximum 81 ministers.','Narendra Modi was sworn in as PM on May 30, 2014 — the largest gathering at any swearing-in ceremony globally!'],
  L8_explain:'<strong>The Swearing-In:</strong> The PM takes the oath of office and secrecy before the President at Rashtrapati Bhavan. The PM then selects Cabinet Ministers (sworn in the same day). The PM heads the Union Cabinet and is the head of government. Key responsibilities: chairing Cabinet meetings, advising the President, representing India internationally, and steering legislative business.',
};

window._gameData2 = L2;

// ── PART 3: GAME ENGINE ──

class BePMGame {
  constructor() {
    this.D = { ...window._gameData, ...window._gameData2 };
    this.ranks = window._ranks;
    this.levelXP = window._levelXP;
    
    this.state = {
      name: 'Citizen',
      ageGroup: 'adult',
      level: 1,
      xp: 0,
      rank: 0,
      flow: 'askName', // askName, askAge, ready, playing, l3_nomination, ended
      qIdx: 0,
      l3_step: 0
    };
    
    this.els = {
      msgs: document.getElementById('messages'),
      input: document.getElementById('userInput'),
      send: document.getElementById('sendBtn'),
      opts: document.getElementById('optionsRow'),
      xpFill: document.getElementById('xpFill'),
      xpCount: document.getElementById('xpCount'),
      headerXP: document.getElementById('headerXP'),
      name: document.getElementById('sidebarName'),
      rankL: document.getElementById('rankLabel'),
      rankI: document.getElementById('rankIcon'),
      dots: document.getElementById('levelDots'),
      cert: document.getElementById('certOverlay'),
      certBox: document.getElementById('certBox'),
      pCanvas: document.getElementById('particleCanvas'),
      cCanvas: document.getElementById('confettiCanvas')
    };

    this.isTyping = false;
    this.setupEvents();
    this.initCanvas();
  }

  init() {
    this.renderDots();
    this.updateUI();
    this.guruMsg(`Namaste! 🙏 I am <strong>Chunav Guru</strong>. Welcome to <strong>Be PM: Road to Prime Minister!</strong><br><br>I will be your guide on this epic journey from a common citizen to the leader of the world's largest democracy.<br><br>First things first... <strong>What is your name?</strong>`);
  }

  setupEvents() {
    this.els.input.addEventListener('keypress', (e) => {
      if(e.key === 'Enter') this.send();
    });
  }

  // --- UI Helpers ---
  scroll() {
    setTimeout(() => {
      this.els.msgs.scrollTop = this.els.msgs.scrollHeight;
    }, 50);
  }

  setOpts(opts, callback) {
    this.els.opts.innerHTML = '';
    if(!opts) return;
    opts.forEach(opt => {
      let btn = document.createElement('button');
      btn.className = 'opt-btn';
      btn.innerHTML = opt;
      btn.onclick = () => {
        this.els.opts.innerHTML = '';
        callback(opt);
      };
      this.els.opts.appendChild(btn);
    });
  }

  updateUI() {
    this.els.name.innerText = this.state.name;
    let r = this.ranks[this.state.rank];
    this.els.rankL.innerText = r.label;
    this.els.rankI.innerText = r.icon;
    
    this.els.xpCount.innerText = `${this.state.xp} / 1000`;
    this.els.headerXP.innerText = `${this.state.xp} XP`;
    this.els.xpFill.style.width = `${Math.min(100, (this.state.xp/1000)*100)}%`;
    
    document.querySelectorAll('.level-dot').forEach((d, i) => {
      let lvl = i + 1;
      d.className = 'level-dot';
      if(lvl < this.state.level) d.classList.add('done');
      if(lvl === this.state.level) d.classList.add('active');
    });
  }

  renderDots() {
    this.els.dots.innerHTML = '';
    for(let i=1; i<=8; i++) {
      let d = document.createElement('div');
      d.className = 'level-dot';
      d.innerText = i;
      this.els.dots.appendChild(d);
    }
  }

  // --- Messaging ---
  sysMsg(html) {
    let div = document.createElement('div');
    div.className = 'msg system';
    div.innerHTML = html;
    this.els.msgs.appendChild(div);
    this.scroll();
  }

  userMsg(text) {
    let div = document.createElement('div');
    div.className = 'msg user';
    div.innerHTML = `<div class="msg-avatar">👤</div><div class="msg-bubble">${text}</div>`;
    this.els.msgs.appendChild(div);
    this.scroll();
  }

  guruMsg(html, delay=600) {
    this.isTyping = true;
    let typing = document.createElement('div');
    typing.className = 'msg guru typing-indicator-wrap';
    typing.innerHTML = `<div class="msg-avatar">CG</div><div class="msg-bubble"><div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div></div>`;
    this.els.msgs.appendChild(typing);
    this.scroll();

    setTimeout(() => {
      typing.remove();
      let div = document.createElement('div');
      div.className = 'msg guru';
      div.innerHTML = `<div class="msg-avatar">CG</div><div class="msg-bubble">${html}</div>`;
      this.els.msgs.appendChild(div);
      this.scroll();
      this.isTyping = false;
    }, delay);
  }

  // --- Interaction & Flow ---
  send() {
    if(this.isTyping) return;
    let text = this.els.input.value.trim();
    if(!text) return;
    this.els.input.value = '';
    this.els.opts.innerHTML = '';
    this.userMsg(text);
    
    // Command check
    if(text.toLowerCase() === 'hint' || text.toLowerCase() === '/hint') return this.cmd('hint');
    if(text.toLowerCase() === 'fun fact' || text.toLowerCase() === '/fun fact') return this.cmd('fun fact');
    
    if(this.state.flow === 'askName') {
      this.state.name = text;
      this.updateUI();
      this.state.flow = 'askAge';
      this.guruMsg(`Great to meet you, <strong>${text}</strong>! Are you under 16, or 16 and older?`, 800);
      this.setOpts(['Under 16', '16 or older'], (ans) => {
        this.els.input.value = ans;
        this.send();
      });
      return;
    }
    
    if(this.state.flow === 'askAge') {
      this.state.ageGroup = text.includes('Under') ? 'kids' : 'citizen';
      this.state.flow = 'ready';
      let modeText = this.state.ageGroup === 'kids' ? "Awesome! I'll keep things simple and fun!" : "Excellent. I'll give you the real facts and details.";
      this.guruMsg(`${modeText}<br><br>Are you ready to start your journey to become the Prime Minister?`);
      this.setOpts(["Yes, let's go!", 'I was born ready!'], () => {
        this.startLevel(1);
      });
      return;
    }

    if(this.state.flow === 'l3_nomination') {
      this.handleL3Ans(text);
      return;
    }

    if(this.state.flow === 'playing' && this.currentQ) {
      // In multiple choice, user might type 'A' or the full text. We handle button clicks mainly.
      // If they type, just warn them to use buttons or try to match.
      let match = this.currentQ.opts.find(o => o.toLowerCase().startsWith(text.toLowerCase()) || o.toLowerCase().includes(text.toLowerCase()));
      if(match) {
        this.handleAns(match);
      } else {
        this.guruMsg("Please select one of the options below, or type A, B, C, or D.");
        this.setOpts(this.currentQ.opts, (ans) => this.handleAns(ans));
      }
    }
  }

  cmd(type) {
    if(type === 'restart') {
      if(confirm("Are you sure you want to restart your journey?")) location.reload();
      return;
    }
    
    if(type === 'my rank') {
      let r = this.ranks[this.state.rank];
      let nxt = this.ranks[this.state.rank+1];
      let txt = `You are currently a <strong>${r.label}</strong> ${r.icon} with ${this.state.xp} XP.`;
      if(nxt) txt += `<br>You need ${nxt.xp - this.state.xp} more XP to become ${nxt.label}.`;
      this.guruMsg(txt);
      return;
    }

    if(this.state.level > 8 || this.state.flow !== 'playing') {
      this.guruMsg("Let's focus on the current conversation first!");
      return;
    }

    let lvlData = this.D[`L${this.state.level}`];
    
    if(type === 'hint') {
      if(this.currentQ && this.currentQ.hint) {
        this.guruMsg(`<div class="hint-box">💡 <strong>Hint:</strong> ${this.currentQ.hint}</div>`);
      } else {
        this.guruMsg("No specific hint right now. Just trust your instincts!");
      }
    }
    
    if(type === 'fun fact') {
      let facts = this.D[`L${this.state.level}_facts`];
      if(facts && facts.length > 0) {
        let f = facts[Math.floor(Math.random() * facts.length)];
        this.guruMsg(`<div class="fact-box">🎯 <strong>Fun Fact:</strong> ${f}</div>`);
      } else {
        this.guruMsg("Did you know India is the world's largest democracy? 🇮🇳");
      }
    }

    if(type === 'explain more') {
      let exp = this.D[`L${this.state.level}_explain`];
      if(exp) {
        this.guruMsg(`📚 <strong>Learn More:</strong><br>${exp}`);
      } else {
        this.guruMsg("You're doing great! No extra explanation right now.");
      }
    }
  }

  startLevel(lvl) {
    this.state.level = lvl;
    this.state.qIdx = 0;
    this.state.flow = 'playing';
    this.updateUI();

    let titles = [
      '', 'Level 1: The Voter Registration', 'Level 2: Understanding Parliament',
      'Level 3: The Candidate Nomination', 'Level 4: The Campaign Trail',
      'Level 5: Voting Day', 'Level 6: Counting Day',
      'Level 7: Government Formation', 'Level 8: The Prime Minister'
    ];

    setTimeout(() => {
      this.sysMsg(`
        <div class="system-card">
          <div class="level-tag">LEVEL ${lvl}</div>
          <div class="level-title">${titles[lvl]}</div>
        </div>
      `);
      
      setTimeout(() => {
        if(lvl === 3) {
          this.state.flow = 'l3_nomination';
          this.state.l3_step = 0;
          this.askL3();
        } else if(lvl === 6 || lvl === 7 || lvl === 8) {
          this.handleStoryLevel();
        } else {
          this.askQ();
        }
      }, 1000);
    }, 600);
  }

  askQ() {
    let qList = this.D[`L${this.state.level}`];
    if(this.state.qIdx >= qList.length) {
      this.finishLevel();
      return;
    }
    this.currentQ = qList[this.state.qIdx];
    this.guruMsg(this.currentQ.q, 1000);
    setTimeout(() => {
      this.setOpts(this.currentQ.opts, (ans) => {
        this.userMsg(ans);
        this.handleAns(ans);
      });
    }, 1100);
  }

  handleAns(ans) {
    let q = this.currentQ;
    let isCorrect = ans.startsWith(q.ans);
    
    if(isCorrect) {
      this.addXP(25);
      this.guruMsg(`✅ ${q.ok}`, 800);
    } else {
      this.guruMsg(`❌ ${q.wrong}`, 800);
    }

    this.currentQ = null;
    this.state.qIdx++;
    
    setTimeout(() => {
      this.askQ();
    }, 3000);
  }

  // L3 is a special open-ended form
  askL3() {
    let qs = this.D.L3_q;
    if(this.state.l3_step >= qs.length) {
      this.guruMsg("Amazing! Your nomination Form 2A is officially submitted. You are now a Candidate! 🎉", 1000);
      this.addXP(100);
      setTimeout(() => this.finishLevel(), 3000);
      return;
    }
    this.guruMsg(qs[this.state.l3_step], 800);
  }

  handleL3Ans(text) {
    let responses = [
      `Wow! ${text} is a great place to start your political journey.`,
      `The ${text} party! Sounds like exactly what the country needs.`,
      `A ${text} as your symbol? Very memorable! It'll look great on the EVM.`,
      `"${text}" - A powerful promise! The voters will hold you to that.`
    ];
    this.guruMsg(responses[this.state.l3_step], 800);
    this.state.l3_step++;
    setTimeout(() => {
      this.askL3();
    }, 2500);
  }

  // L6, L7, L8 are story driven
  handleStoryLevel() {
    let lvl = this.state.level;
    let exp = this.D[`L${lvl}_explain`];
    let facts = this.D[`L${lvl}_facts`];
    
    let storyMap = {
      6: "The EVMs have been unsealed. The counting begins! It's a nail-biting finish, but... YOUR PARTY HAS CROSSED 272 SEATS! 🏆 You have the majority!",
      7: "The President of India has invited you to form the government. Your coalition partners have all submitted their letters of support.",
      8: "The moment has arrived. You are at the grand forecourt of Rashtrapati Bhavan. Millions are watching."
    };

    this.guruMsg(storyMap[lvl], 1000);
    
    setTimeout(() => {
      this.guruMsg(`📚 <strong>What's happening?</strong><br>${exp}`, 1500);
      
      setTimeout(() => {
        this.addXP(100);
        this.setOpts(['Continue'], () => {
          this.finishLevel();
        });
      }, 3000);
    }, 2500);
  }

  addXP(amt) {
    this.state.xp += amt;
    this.checkRank();
    this.updateUI();
  }

  checkRank() {
    let newRank = this.state.rank;
    for(let i=0; i<this.ranks.length; i++) {
      if(this.state.xp >= this.ranks[i].xp) {
        newRank = i;
      }
    }
    if(newRank > this.state.rank) {
      this.state.rank = newRank;
      let r = this.ranks[newRank];
      this.sysMsg(`
        <div class="rank-unlock">
          <div class="unlock-title">Rank Unlocked</div>
          <div class="unlock-rank">${r.icon} ${r.label}</div>
          <div class="xp-bar-text">Reached ${r.xp} XP</div>
        </div>
      `);
      this.fireConfetti();
    }
  }

  finishLevel() {
    if(this.state.level >= 8) {
      this.showWin();
      return;
    }
    
    this.guruMsg(`Awesome job completing Level ${this.state.level}! Ready for the next stage?`);
    this.setOpts(['Next Level!'], () => {
      this.startLevel(this.state.level + 1);
    });
  }

  showWin() {
    this.state.rank = 8; // PM
    this.updateUI();
    this.fireConfetti(100);
    
    setTimeout(() => {
      this.els.certBox.innerHTML = `
        <div class="cert-flag-strip"></div>
        <div class="cert-title">Certificate of Election</div>
        <div class="cert-heading">PRIME MINISTER OF INDIA 🇮🇳</div>
        <div class="cert-body">
          This is to certify that
          <div class="cert-name">${this.state.name.toUpperCase()}</div>
          has successfully demonstrated exceptional knowledge of Indian democracy, 
          mastered the electoral process, and secured the mandate of the people.
        </div>
        <div class="cert-quote">"Democracy is not merely a form of government. It is primarily a mode of associated living." - B.R. Ambedkar</div>
        <button class="cert-close-btn" onclick="document.getElementById('certOverlay').classList.remove('show')">Take Charge</button>
      `;
      this.els.cert.classList.add('show');
    }, 2000);
  }

  // --- Visuals ---
  initCanvas() {
    let pc = this.els.pCanvas;
    let pCtx = pc.getContext('2d');
    let cw = pc.width = window.innerWidth;
    let ch = pc.height = window.innerHeight;
    
    let pts = Array(80).fill().map(() => ({
      x: Math.random()*cw, y: Math.random()*ch,
      s: Math.random()*2+0.5,
      vx: (Math.random()-0.5)*0.5, vy: (Math.random()-0.5)*0.5,
      a: Math.random()*0.5+0.1
    }));
    
    let drawP = () => {
      pCtx.clearRect(0, 0, cw, ch);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > cw) p.vx *= -1;
        if(p.y < 0 || p.y > ch) p.vy *= -1;
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.s, 0, Math.PI*2);
        pCtx.fillStyle = `rgba(255,255,255,${p.a})`;
        pCtx.fill();
      });
      requestAnimationFrame(drawP);
    };
    drawP();
    
    window.addEventListener('resize', () => {
      pc.width = window.innerWidth;
      pc.height = window.innerHeight;
    });
  }

  fireConfetti(amt = 40) {
    let cc = this.els.cCanvas;
    cc.style.display = 'block';
    let ctx = cc.getContext('2d');
    let cw = cc.width = window.innerWidth;
    let ch = cc.height = window.innerHeight;
    
    let colors = ['#FF9933', '#FFFFFF', '#138808', '#000080', '#FFD700'];
    let conf = Array(amt).fill().map(() => ({
      x: Math.random()*cw, y: -20,
      s: Math.random()*8+4,
      c: colors[Math.floor(Math.random()*colors.length)],
      vx: (Math.random()-0.5)*6, vy: Math.random()*4+2,
      rot: Math.random()*360, rotV: (Math.random()-0.5)*10
    }));
    
    let frame = 0;
    let loop = () => {
      ctx.clearRect(0,0,cw,ch);
      conf.forEach(c => {
        c.x += c.vx; c.y += c.vy; c.rot += c.rotV;
        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rot * Math.PI/180);
        ctx.fillStyle = c.c;
        ctx.fillRect(-c.s/2, -c.s/2, c.s, c.s);
        ctx.restore();
      });
      frame++;
      if(frame < 200) requestAnimationFrame(loop);
      else cc.style.display = 'none';
    };
    loop();
  }
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

window.onload = () => {
  window.game = new BePMGame();
  window.game.init();
};
