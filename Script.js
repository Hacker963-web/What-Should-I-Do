let selectedMood = "";
let selectedTime = "";
let usedIdeas = [];

const recommendations = {
    "Entertainment": {
        "10 Minutes": [
            "🎮 Play a quick game and try to beat your best score!",
            "😂 Watch a few funny short videos.",
            "🎵 Listen to your favorite song.",
            "🧩 Solve a quick puzzle.",
            "🎯 Try a small challenge in your favorite game.",
            "🎬 Watch one interesting short video.",
            "🎨 Try a quick drawing challenge.",
            "🎮 Explore a game mode you haven't tried.",
            "😂 Watch something that always makes you laugh.",
            "🎵 Make a mini playlist.",
            "🧠 Try a quick brain game.",
            "🎮 Complete one small gaming mission.",
            "🎬 Watch a funny clip.",
            "🎵 Discover one new song.",
            "🧩 Try a word puzzle.",
            "🎮 Practice one skill in your favorite game.",
            "😂 Share a funny video with a friend.",
            "🎨 Make a funny doodle.",
            "🎬 Watch an interesting fact video.",
            "🎮 Try to improve one gaming record.",
            "🎵 Listen to music while relaxing.",
            "🧩 Try a logic puzzle.",
            "🎮 Play a quick multiplayer match.",
            "😂 Find a new comedy creator.",
            "🎬 Watch a short animation.",
            "🎮 Try a game you haven't played recently.",
            "🎵 Make a 3-song playlist.",
            "🧠 Try a quick trivia challenge.",
            "🎨 Draw your favorite game character.",
            "🏆 Set yourself a 10-minute entertainment challenge!"
        ],

        "30 Minutes": [
            "🎬 Watch an episode or a fun video.",
            "🎮 Try a new game mode.",
            "😂 Watch some comedy.",
            "🧩 Play a puzzle or strategy game.",
            "🎵 Discover some new music.",
            "🎮 Complete a gaming challenge.",
            "🎬 Find an interesting documentary.",
            "🎨 Make a quick drawing while listening to music.",
            "🏆 Try beating a gaming record.",
            "🍿 Grab a snack and enjoy something entertaining.",
            "🎮 Play a few quick matches.",
            "🎬 Watch a short animated episode.",
            "🎵 Explore a new music genre.",
            "🧩 Complete several brain puzzles.",
            "😂 Watch a comedy compilation.",
            "🎮 Try a challenge you normally wouldn't attempt.",
            "🎨 Make a gaming-themed drawing.",
            "🎬 Watch a science or technology video.",
            "🎮 Explore an unused area of a game.",
            "🎵 Create a relaxing playlist.",
            "🧠 Try a trivia quiz.",
            "🎬 Watch a short adventure video.",
            "🎮 Practice a difficult game skill.",
            "😂 Find some new funny content.",
            "🎨 Make a quick digital artwork.",
            "🎮 Play a game with a different strategy.",
            "🎬 Watch a short mystery or adventure story.",
            "🎵 Listen to an album or playlist.",
            "🧩 Try a difficult logic puzzle.",
            "🏆 Create your own 30-minute fun challenge!"
        ],

        "1 Hour": [
            "🎮 Enjoy a full gaming session.",
            "🎬 Watch a movie episode or longer video.",
            "🎵 Make a playlist and enjoy your favorite music.",
            "🏆 Try a difficult gaming challenge.",
            "🧩 Spend an hour solving puzzles.",
            "🎬 Watch an interesting documentary.",
            "🎨 Try a creative activity with music.",
            "🎮 Explore a game you've never played.",
            "🍿 Have a proper entertainment break.",
            "🏆 Set yourself a one-hour gaming goal.",
            "🎮 Try to complete several game missions.",
            "🎬 Watch a full animated movie.",
            "🎵 Discover a completely new artist.",
            "🧩 Play a strategy game.",
            "😂 Watch a comedy special or compilation.",
            "🎮 Practice until you improve one gaming skill.",
            "🎨 Create artwork inspired by your favorite game.",
            "🎬 Watch a technology or science documentary.",
            "🎮 Try a new game and learn its mechanics.",
            "🎵 Build a large playlist for later.",
            "🧠 Complete a long trivia challenge.",
            "🎬 Watch a fascinating educational entertainment video.",
            "🎮 Play with a friend or family member.",
            "🎨 Create a digital poster for fun.",
            "🧩 Try several different puzzle types.",
            "🎬 Watch a classic movie you haven't seen.",
            "🎮 Try to unlock a new achievement.",
            "🎵 Spend an hour discovering new songs.",
            "😂 Watch something that makes you laugh.",
            "🏆 Plan your own one-hour entertainment challenge!"
        ],

        "2+ Hours": [
            "🍿 Plan a movie and gaming session.",
            "🎮 Have a longer gaming session with breaks.",
            "🎬 Pick a movie or several episodes.",
            "🏆 Work toward a bigger gaming achievement.",
            "🎮 Explore a new game.",
            "🎵 Create a large playlist.",
            "🎬 Watch a longer documentary.",
            "🧩 Play a challenging strategy game.",
            "🎨 Combine entertainment with a creative project.",
            "🍿 Plan a complete fun evening.",
            "🎮 Try to complete a major game mission.",
            "🎬 Have a movie night.",
            "🎵 Discover several new artists.",
            "🧩 Spend time mastering a strategy game.",
            "🎮 Play different games and compare them.",
            "🎨 Create several pieces of digital artwork.",
            "🎬 Watch a documentary series.",
            "🏆 Work toward a difficult gaming goal.",
            "🎮 Learn a new game from the beginning.",
            "🎵 Make different playlists for different moods.",
            "😂 Have a comedy-filled entertainment session.",
            "🧠 Complete several trivia challenges.",
            "🎬 Watch several interesting science videos.",
            "🎮 Play a long gaming adventure.",
            "🎨 Create something while listening to music.",
            "🧩 Try a collection of puzzles.",
            "🎬 Watch a full movie you've wanted to see.",
            "🎮 Have a friendly gaming competition.",
            "🎵 Explore music from different genres.",
            "🏆 Create your own ultimate entertainment plan!"
        ]
    },

    "Study": {
        "10 Minutes": [
            "📚 Review 5 important facts.",
            "📝 Solve a few quick practice questions.",
            "🧠 Test yourself on a recent topic.",
            "📖 Read one small section of your notes.",
            "✏️ Practice 5 difficult questions.",
            "🔢 Review important formulas or rules.",
            "🗂️ Organize your study notes.",
            "🧠 Recall everything you remember about one topic.",
            "📚 Revise 5 vocabulary words.",
            "🎯 Quickly review one weak area.",
            "📖 Read one page of your textbook.",
            "✏️ Correct mistakes from an old exercise.",
            "🧠 Make 5 quick flashcards.",
            "📚 Review yesterday's lesson.",
            "🔢 Solve 3 maths problems.",
            "📝 Write a short summary of one topic.",
            "📖 Read one important definition.",
            "🧠 Quiz yourself without looking at notes.",
            "🎯 Review one difficult concept.",
            "📚 Practice spelling or vocabulary.",
            "✏️ Complete one small exercise.",
            "📝 Rewrite messy notes neatly.",
            "🧠 Explain one topic to yourself.",
            "📖 Review important headings from a chapter.",
            "🔢 Practice mental maths.",
            "📚 Memorize a few key points.",
            "🎯 Identify one thing you still don't understand.",
            "✏️ Review your latest mistakes.",
            "🧠 Do a quick self-test.",
            "🏆 Complete a focused 10-minute study challenge!"
        ],

        "30 Minutes": [
            "📝 Pick one topic and complete practice questions.",
            "📚 Review your notes and make a short summary.",
            "🎯 Focus on the subject you find hardest.",
            "🧠 Study one small chapter section.",
            "✏️ Complete a set of practice questions.",
            "📖 Read and summarize an important topic.",
            "🔢 Practice maths problems.",
            "📝 Make flashcards for an upcoming test.",
            "🎯 Revise a topic you recently found difficult.",
            "🧠 Study first, then test yourself.",
            "📚 Review one complete lesson.",
            "✏️ Correct your old mistakes.",
            "📝 Create a one-page revision sheet.",
            "📖 Read a chapter section carefully.",
            "🔢 Practice different types of maths questions.",
            "🧠 Try explaining a difficult topic in simple words.",
            "📚 Revise important vocabulary.",
            "🎯 Work on your weakest topic.",
            "📝 Make questions and answer them yourself.",
            "📖 Review definitions and examples.",
            "✏️ Complete half of a practice worksheet.",
            "🧠 Test yourself without using your notes.",
            "📚 Review two small topics.",
            "🔢 Practice calculation speed.",
            "🎯 Study one topic until you can explain it.",
            "📝 Create useful flashcards.",
            "📖 Read and highlight important information.",
            "🧠 Find and correct gaps in your knowledge.",
            "✏️ Do a timed practice session.",
            "🏆 Complete a focused 30-minute study challenge!"
        ],

        "1 Hour": [
            "📖 Study one complete topic and test yourself.",
            "🧠 Revise a topic and solve questions without notes.",
            "🎯 Do one focused study session and finish with a self-test.",
            "📚 Study a chapter section and make useful notes.",
            "✏️ Complete a full practice worksheet.",
            "🔢 Spend an hour practicing maths problems.",
            "📝 Make detailed revision notes for one topic.",
            "🧠 Study for 45 minutes and test yourself for 15.",
            "📖 Review an old topic you haven't studied recently.",
            "🎯 Choose your weakest topic and work on it.",
            "📚 Revise two related topics.",
            "✏️ Complete a timed practice paper section.",
            "📝 Create a complete revision sheet.",
            "🧠 Learn a topic and explain it from memory.",
            "🔢 Practice difficult maths questions.",
            "📖 Read and summarize a full chapter section.",
            "🎯 Work on mistakes from previous tests.",
            "📚 Revise vocabulary and then test yourself.",
            "📝 Make flashcards and use them.",
            "🧠 Take a mini practice test.",
            "📖 Study using active recall.",
            "✏️ Complete several exercises.",
            "🔢 Practice maths until you improve accuracy.",
            "🎯 Focus on one difficult concept.",
            "📚 Review notes from several lessons.",
            "🧠 Teach the topic to yourself.",
            "📝 Create questions from your textbook.",
            "📖 Study then close your book and recall everything.",
            "🏆 Complete a full one-hour focused study session.",
            "🎯 Make measurable progress on your hardest subject!"
        ],

        "2+ Hours": [
            "🎯 Make a study plan and revise multiple topics.",
            "📚 Work through several topics and finish with a practice test.",
            "🧠 Revise, practice, and correct mistakes.",
            "📖 Study one subject deeply.",
            "📝 Create complete revision notes.",
            "✏️ Complete multiple practice worksheets.",
            "🔢 Practice difficult maths problems.",
            "🎯 Alternate between two subjects.",
            "🧠 Take a practice test and review mistakes.",
            "📚 Plan several focused study sessions.",
            "📖 Revise an entire chapter.",
            "📝 Create flashcards for several topics.",
            "🎯 Focus on your weakest subject.",
            "✏️ Complete a full practice paper.",
            "🧠 Use active recall across several topics.",
            "📚 Review old lessons you have forgotten.",
            "🔢 Work through a difficult maths topic.",
            "📖 Read and summarize multiple sections.",
            "📝 Build a complete revision guide.",
            "🎯 Practice until you can solve questions confidently.",
            "🧠 Test yourself after every topic.",
            "📚 Study two subjects with breaks.",
            "✏️ Correct mistakes from previous work.",
            "🔢 Practice different maths question types.",
            "📖 Review definitions, examples, and applications.",
            "📝 Create a study checklist and complete it.",
            "🧠 Explain difficult topics in your own words.",
            "🎯 Prepare for an upcoming test.",
            "📚 Complete a long focused study session with breaks.",
            "🏆 Complete your own ultimate study challenge!"
        ]
    },

    "Learn Something": {
        "10 Minutes": [
            "💡 Learn 5 interesting facts about a topic you enjoy.",
            "🌎 Discover something about space.",
            "🧠 Learn 5 new words.",
            "🔬 Learn one cool science fact.",
            "🌍 Discover something about another country.",
            "💻 Learn one new computer shortcut.",
            "📖 Learn the meaning of 5 new words.",
            "🏛️ Learn about an interesting historical event.",
            "🚀 Discover something new about space.",
            "💡 Learn one useful everyday skill.",
            "🐝 Learn something interesting about insects.",
            "🌊 Discover how oceans work.",
            "🧠 Learn a new memory technique.",
            "💻 Learn one beginner coding concept.",
            "🎨 Learn one design principle.",
            "🔬 Discover how a common object works.",
            "🌎 Learn about a new country's geography.",
            "📚 Learn an interesting word origin.",
            "🚀 Discover an interesting space fact.",
            "🧠 Learn a new study technique.",
            "💡 Discover a useful keyboard shortcut.",
            "🏛️ Learn one fact from ancient history.",
            "🐾 Learn something interesting about an animal.",
            "🔬 Learn one basic scientific principle.",
            "💻 Discover one useful computer trick.",
            "🌍 Learn about a famous landmark.",
            "🎨 Learn one simple drawing technique.",
            "🧠 Learn a fascinating psychology fact.",
            "📖 Learn one new concept.",
            "🏆 Complete a 10-minute learning challenge!"
        ],

        "30 Minutes": [
            "💻 Watch a short educational lesson.",
            "🧠 Explore a topic you know little about.",
            "💡 Learn a small new skill and practice it.",
            "🔬 Learn the basics of an interesting science topic.",
            "🌎 Explore the geography of a new country.",
            "💻 Learn a few beginner coding concepts.",
            "📖 Read about an interesting historical topic.",
            "🎨 Learn a basic design technique.",
            "🧠 Learn how something works.",
            "🚀 Start a beginner lesson in a new skill.",
            "🔬 Learn about the solar system.",
            "💻 Practice basic HTML concepts.",
            "🎨 Learn how to improve a digital design.",
            "🌍 Study a country's culture and geography.",
            "📚 Learn about an important historical person.",
            "🧠 Explore how memory works.",
            "🔬 Learn about an everyday scientific process.",
            "💻 Learn a useful computer skill.",
            "🚀 Explore the basics of space science.",
            "🎨 Practice a new drawing technique.",
            "📖 Read about an interesting invention.",
            "🧠 Learn a simple productivity technique.",
            "🌎 Explore an unusual place on Earth.",
            "💡 Learn how a common technology works.",
            "🔬 Explore an interesting animal adaptation.",
            "💻 Learn a new keyboard shortcut set.",
            "📚 Discover an interesting historical mystery.",
            "🎨 Learn basic typography principles.",
            "🧠 Learn something and explain it in your own words.",
            "🏆 Complete a 30-minute learning challenge!"
        ],

        "1 Hour": [
            "🚀 Spend one hour learning a new skill.",
            "💻 Follow a beginner lesson and create something.",
            "🧠 Learn the basics of an interesting topic.",
            "🔬 Study a science topic in more depth.",
            "🌎 Learn about a country's history and culture.",
            "💻 Practice beginner coding.",
            "🎨 Learn a new digital design technique.",
            "📖 Read and summarize an educational topic.",
            "🧠 Learn something and teach it back to yourself.",
            "🚀 Complete a full beginner lesson.",
            "💻 Build a simple HTML page while learning.",
            "🔬 Study the basics of astronomy.",
            "🎨 Learn graphic design fundamentals.",
            "📚 Study an important historical period.",
            "🌍 Learn about a new country's geography.",
            "🧠 Explore how the brain learns.",
            "💡 Learn a practical computer skill.",
            "🚀 Study a technology you find interesting.",
            "📖 Read and summarize a non-fiction topic.",
            "🎨 Practice digital drawing.",
            "💻 Learn basic programming logic.",
            "🔬 Explore a scientific topic with examples.",
            "🌎 Learn about a famous landmark in depth.",
            "🧠 Learn a new problem-solving technique.",
            "📚 Explore an interesting invention.",
            "💡 Learn a useful life skill.",
            "🎨 Practice creating better designs.",
            "🚀 Start a skill you can continue tomorrow.",
            "🧠 Test yourself on everything you learned.",
            "🏆 Complete a full one-hour learning challenge!"
        ],

        "2+ Hours": [
            "🧠 Choose a new skill and follow a longer lesson.",
            "🚀 Start a deeper learning session.",
            "💻 Learn, practice, and build a small project.",
            "🔬 Explore a science topic deeply.",
            "💻 Start learning programming basics.",
            "🎨 Learn a creative skill and make something.",
            "🌎 Research a fascinating country.",
            "📖 Study a topic you've always been curious about.",
            "🧠 Learn a skill and complete a challenge.",
            "🚀 Begin a mini learning project.",
            "💻 Build a small website while learning.",
            "🔬 Study a science topic from basics to applications.",
            "🎨 Learn digital design and create several designs.",
            "📚 Explore an entire historical period.",
            "🌍 Research several countries and compare them.",
            "🧠 Learn about how people learn and remember.",
            "💡 Learn several useful computer skills.",
            "🚀 Start a beginner programming project.",
            "📖 Read and summarize several educational sections.",
            "🎨 Practice a creative skill for several sessions.",
            "🔬 Explore several related science concepts.",
            "💻 Learn and practice HTML/CSS basics.",
            "🌎 Research an interesting geographical topic.",
            "🧠 Learn problem-solving through puzzles.",
            "📚 Explore the history of an invention.",
            "💡 Learn a skill you can use in future projects.",
            "🚀 Build something using your new knowledge.",
            "🎨 Create a portfolio-style mini project.",
            "🧠 Test everything you learned with a self-quiz.",
            "🏆 Complete your own ultimate learning challenge!"
        ]
    },

    "Create Something": {
        "10 Minutes": [
            "🎨 Make a small drawing.",
            "✏️ Create a quick thumbnail idea.",
            "💡 Write down 5 creative ideas.",
            "🎨 Draw something without a reference.",
            "🖌️ Create a simple logo concept.",
            "📱 Design a quick phone wallpaper.",
            "🎬 Think of an idea for a short video.",
            "✏️ Sketch a character.",
            "💡 Create a project name and logo idea.",
            "🎨 Make a tiny digital artwork.",
            "🖌️ Design a simple icon.",
            "📱 Make a quick wallpaper concept.",
            "🎬 Write a short video idea.",
            "🎨 Draw your favorite object.",
            "✏️ Sketch a car or bike design.",
            "💡 Brainstorm 10 project ideas.",
            "🎨 Make a simple pattern.",
            "🖌️ Create a basic poster layout.",
            "📱 Design a simple app screen.",
            "🎬 Write a short story idea.",
            "🎨 Create a quick game concept.",
            "✏️ Draw a cartoon character.",
            "💡 Invent a new website idea.",
            "🖌️ Create a simple badge design.",
            "🎨 Make a mini logo collection.",
            "📱 Design a social media post idea.",
            "🎬 Create a video title and thumbnail idea.",
            "✏️ Try a 10-minute drawing challenge.",
            "🎨 Create something completely from your imagination.",
            "🏆 Complete a 10-minute creative challenge!"
        ],

        "30 Minutes": [
            "🎨 Create a poster.",
            "🎬 Make a short video.",
            "🖌️ Design something completely new.",
            "📱 Create a custom wallpaper.",
            "🎨 Make a YouTube thumbnail.",
            "💻 Build a simple webpage design.",
            "🎬 Create a short video intro.",
            "✏️ Draw and finish a small artwork.",
            "🎨 Design a social media post.",
            "💡 Turn one idea into a mini project.",
            "🖌️ Create a logo.",
            "📱 Design a phone wallpaper.",
            "🎬 Edit a short video clip.",
            "🎨 Create a digital poster.",
            "💻 Design a simple website homepage.",
            "✏️ Draw a detailed character.",
            "🎮 Create a simple game concept.",
            "🎨 Design a gaming thumbnail.",
            "🎬 Make a short intro animation.",
            "📱 Create a social media graphic.",
            "🖌️ Design a simple business-style logo.",
            "🎨 Create a themed artwork.",
            "💡 Turn a random idea into a design.",
            "🎬 Create a short story video concept.",
            "💻 Design a simple app interface.",
            "✏️ Make a comic-style drawing.",
            "🎨 Create a digital art challenge.",
            "📱 Design a poster for an imaginary event.",
            "🚀 Finish one small project from start to finish.",
            "🏆 Complete a 30-minute creative challenge!"
        ],

        "1 Hour": [
            "🎬 Create a complete short video.",
            "🎨 Finish a detailed artwork.",
            "💻 Build a small website.",
            "🎨 Design a detailed poster.",
            "📱 Create a complete set of graphics.",
            "✏️ Draw a detailed piece of artwork.",
            "💡 Turn an idea into a working mini project.",
            "🎮 Design an idea for your own game.",
            "🚀 Create something you can show someone.",
            "🎬 Plan and edit a complete video.",
            "🎨 Create a professional-style thumbnail.",
            "💻 Build a complete simple webpage.",
            "📱 Design several matching graphics.",
            "🎬 Create a short video with editing.",
            "✏️ Complete a detailed drawing.",
            "🎨 Create a full poster design.",
            "🎮 Design a game character.",
            "💡 Build a small creative website feature.",
            "🎬 Create a video intro and outro.",
            "📱 Design a mini social media campaign.",
            "🎨 Create a digital art collection.",
            "💻 Build a simple landing page.",
            "✏️ Create a comic page.",
            "🎮 Design a game level concept.",
            "🎨 Make a complete branding concept.",
            "🎬 Create a short story project.",
            "💡 Turn a random idea into something real.",
            "🚀 Start and finish one complete project.",
            "🏆 Make something you are proud of.",
            "🎯 Complete a full one-hour creative challenge!"
        ],

        "2+ Hours": [
            "🏗️ Build a bigger website project.",
            "🎬 Create and edit a longer video.",
            "🎨 Make a detailed digital artwork.",
            "📱 Design a complete collection of graphics.",
            "🎮 Create a concept for your own game.",
            "💡 Turn a big idea into a real project.",
            "🏆 Create something you're proud of.",
            "🎬 Plan, record, edit, and finish a video.",
            "💻 Build a multi-page website.",
            "🎨 Create a complete poster collection.",
            "📱 Design a full set of social media graphics.",
            "🎮 Design a complete game concept.",
            "✏️ Create a detailed art project.",
            "🎬 Make a short film-style project.",
            "💻 Build a larger web design project.",
            "🎨 Create a complete logo and branding package.",
            "📱 Design several phone wallpapers.",
            "🎮 Design game characters and environments.",
            "💡 Turn a problem into a creative solution.",
            "🎬 Create a complete edited video project.",
            "🎨 Make a digital art series.",
            "💻 Build and improve a personal website.",
            "✏️ Create a detailed comic or story.",
            "🎮 Plan a simple game from concept to design.",
            "📱 Create a complete graphic design project.",
            "🚀 Work on a project you've wanted to start.",
            "🎨 Combine drawing, design, and technology.",
            "💻 Build something that you can continue improving later.",
            "🏗️ Create a large project from scratch.",
            "🔥 Complete your own ultimate creative challenge!"
        ]
    }
};


function selectMood(mood) {
    selectedMood = mood;
    selectedTime = "";
    usedIdeas = [];

    const result = document.getElementById("result");

    result.innerHTML = `
        <span class="result-label">🎯 Mood selected</span>
        <span class="result-text">You chose ${mood}!</span>
    `;

    result.classList.remove("showing");

    void result.offsetWidth;

    result.classList.add("showing");

    document.getElementById("time-section").style.display = "block";
    document.getElementById("another-idea").style.display = "none";

    document.getElementById("time-section").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


function showRecommendation(time) {
    selectedTime = time;
    usedIdeas = [];

    showRandomRecommendation();

    document.getElementById("another-idea").style.display = "block";
}


function giveAnotherIdea() {
    showRandomRecommendation();
}


function showRandomRecommendation() {
    const ideas = recommendations[selectedMood][selectedTime];

    if (usedIdeas.length === ideas.length) {
        usedIdeas = [];
    }

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * ideas.length);
    } while (usedIdeas.includes(randomIndex));

    usedIdeas.push(randomIndex);

    const result = document.getElementById("result");

    result.innerHTML = `
        <span class="result-label">
            ✨ Your idea
        </span>

        <span class="result-text">
            ${ideas[randomIndex]}
        </span>

        <span class="result-label">
            ⏱️ ${selectedTime} · ${selectedMood}
        </span>
    `;

    result.classList.remove("showing");

    void result.offsetWidth;

    result.classList.add("showing");
}