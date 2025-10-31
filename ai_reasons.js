const ai_reasons = [
  {
    "Name":"Aaron James Bustamante",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"ISU",
    "Reason":"Here's a short and witty announcement:\n\n\"Meet Aaron James Bustamante, our lucky SAP-saver! He won the coveted ISU draw in SIS-PH, proving that even in ISU land, luck is on his side. Congrats, Aaron - may your code be error-free and your database always up-to-date!\""
  },
  {
    "Name":"Aaron Lok Yee Hung",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Congratulations Aaron Lok Yee Hung, our SD superstar! He's the 'core' winner of our lucky draw, proving that even logistics can be a 'shipment' of good fortune! Enjoy your prize, Aaron - you've got SAP-ported success!\""
  },
  {
    "Name":"Abdur Rashid Bin Abdul Razak",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner: Abdur Rashid Bin Abdul Razak! Congratulations on being the 'master data' winner! He's been 'logging' in some serious wins with his ERP skills. Well done, Rashid!\""
  },
  {
    "Name":"Abhijeet Sarvottam Dadarkar",
    "Position":"Senior Solution Architect",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"India",
    "Division":"CP - Cloud Platform",
    "Reason":"\"Big congratulations to our very own Abhijeet Sarvottam Dadarkar from Singapore! He's 'cloud-ly' the winner of our lucky draw! Cheers to our superstar solution architect who brings SAP magic to our clients!\""
  },
  {
    "Name":"Adi Ridzan Bin Adnan",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BASIS & Authorization",
    "Reason":"\"Lucky Adi's got the 'code'! Congratulations to our very own Adi Ridzan Bin Adnan from cbs Malaysia's BASIS & Authorization division on winning our lucky draw! May his SAP wisdom bring him 'code' happiness all year round!\""
  },
  {
    "Name":"AINUR UMAIRAH BINTI ABDUL HAKIM",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"Here's the announcement:\n\n\"Attention all cbs Malaysia team members!\n\nWe're thrilled to announce our very own AINUR UMAIRAH BINTI ABDUL HAKIM from SLT - FI division as our lucky draw winner! It seems she's 'coding' to a happier future. Congratulations, Ainur!\"\n\nLet me know if you'd like any modifications or changes!"
  },
  {
    "Name":"AISHWARYA C J",
    "Position":"Consultant",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"INDIAN",
    "Division":"MDM - Master Data Management",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce Aishwarya C J, our MDM rockstar, is the lucky winner of our recent draw! Looks like her data management skills have helped us 'aggregate' some amazing talent - congratulations!\""
  },
  {
    "Name":"ALAM MD TASKIN",
    "Position":"Senior Consultant.",
    "Entity":"cbs Japan",
    "Gender":"Male",
    "Nationality":"Bangladeshi",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"ALAM MD TASKIN is our new 'Master Data' winner! Congratulations on being the lucky draw winner from cbs Japan's ERP - Logistic (MM) division! You've successfully navigated the MM landscape to reach this goal. Cheers to you, Alam!\""
  },
  {
    "Name":"Alexander Campbell Bevan Bourne",
    "Position":"Junior Consultant",
    "Entity":"cbs Australia",
    "Gender":"Male",
    "Nationality":"British",
    "Division":"HCM - Human Capital Management",
    "Reason":"\"Meet our 'people expert' - Alexander Campbell Bevan Bourne! This junior whiz from HCM's won the draw for our upcoming company trip. Looks like SAP-tacular things are coming his way (get it?)!\""
  },
  {
    "Name":"AMANINA NASHA HANIF",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (CCSPM)",
    "Reason":"\"Meet our new ' Logistics Mastermind' winner, Amanina! She's the \"value-added\" winner of our lucky draw! Congrats on being the perfect package - intelligent, talented, and a valuable asset to our CCSPM team!\""
  },
  {
    "Name":"Ameer Syazree Bin Asmadi",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BIT - Enterprise Integration",
    "Reason":"\"Lucky Ameer! Our Malaysian superstar from the BIT- Enterprise Integration division has tapped into his winning spirit! Congratulations on being the 'code' winner of our lucky draw! Enjoy your SAP-tacular prize!\""
  },
  {
    "Name":"Amin Irsyad bin Anwar Wajdi",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Process & IT",
    "Reason":"Process Perfect Win! Amin Irsyad bin Anwar Wajdi, our Malaysian Consultant from SIS-MY’s Process & IT division, just streamlined his way into the lucky draw win! Clearly, his workflow includes a step called “Get Lucky”!"
  },
  {
    "Name":"Amir Ahmad bin Abdullah",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - Logistic",
    "Reason":"\"Big congratulations to Amir Ahmad bin Abdullah, our SLT Logistic superstar! He's 'tabled' his luck for a SAP-tacular prize - enjoy the trip, Amir! Your hard work has earned you this 'code' win!\""
  },
  {
    "Name":"AMIRUL FIRDAUS BIN ABU YAZIZ",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BIT - Enterprise Integration",
    "Reason":"\"Lucky Amir! He's got the 'code' to winning! Congratulations to Amirul Firdaus Bin Abu Yaziz from our BIT Enterprise Integration division for being our SAP-tacular lucky draw winner! Enjoy your prize, and don't 'delete' it from memory!\""
  },
  {
    "Name":"AMIZAR JAAFAR",
    "Position":"Managar",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Project Manager",
    "Reason":"\"Hey team! We're thrilled to announce the winner of our lucky draw: AMIZAR JAAFAR from Malaysia! Looks like Amizar's managed skills have paid off - he's now 'in control' with a sweet prize! Congratulations, Amizar!\""
  },
  {
    "Name":"ANG AI CHIN",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"AMS - Application Management Support",
    "Reason":"\"Big congratulations to Ang AI Chin, our shining star from AMS! She's 'coding' up the right combination to win big! As our lucky draw winner, she'll be 'integrating' some extra fun into her life. Cheers to you, Ang!\""
  },
  {
    "Name":"Anthony Rebuldela",
    "Position":"SENIOR DEVELOPER",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Philippines",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Congratulations, Anthony! He's the 'code' winner of our lucky draw! As our Senior Developer extraordinaire, he's 'debugged' his way to the top. Enjoy your prize, and don't get too 'lost' in your celebrations – we're all counting on you!\""
  },
  {
    "Name":"Arieff Aiffmann Yang bin Mohd Shukur",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Luckiest guy in the land of ERP! Congratulations to Arieff Aiffmann Yang bin Mohd Shukur, our Malaysian rockstar from BAT! He's 'coding' his way to a fantastic prize! Well done, buddy!\""
  },
  {
    "Name":"ARLENE UBALDO TERANIA",
    "Position":"Operations Manager",
    "Entity":"SIS-PH",
    "Gender":"Female",
    "Nationality":"FILIPINO",
    "Division":"Human Resources",
    "Reason":"Here's a short, fun announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our very own Arlene Ubaldos Terania is the lucky winner of our SAP-ential prize! Congratulations, Arlene! Your dedication to HR processes has made you the 'controller' of good fortune. Enjoy your reward!\""
  },
  {
    "Name":"Arumugam Lekshmanan",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"Transformation Management",
    "Reason":"Here's a fun announcement:\n\n\"Meet our SAP Superstar! Arumugam Lekshmanan is our lucky draw winner! He's been 'config'uring us all with his awesome transformation skills. Congrats, Arumu! You've 'locked in' a fantastic prize - enjoy your well-deserved win!\""
  },
  {
    "Name":"Ashish Suresh Chavan",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"Transformation Management",
    "Reason":"\"Hey Team! We've got a 'transaction' worthy winner - Ashish Suresh Chavan from Transformation Management in Malaysia! Congratulations on being our lucky draw winner! He'll receive an SAP-tacular prize - stay tuned!\""
  },
  {
    "Name":"ASMITHHA NAGARETHINAM KUMARESAN",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"SLT - Logistic",
    "Reason":"\"Big congrats to our very own ASMITHHA NAGARETHINAM KUMARESAN, the lucky draw winner from our SLT - Logistic division in Malaysia! Looks like SAP's ' Logistics' of life has sorted her out for a treat - cheers, Smitha!\""
  },
  {
    "Name":"AZMATUN SAIYIDAH BINTI SUHAIRI",
    "Position":"Functional Consultant ",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Device Management",
    "Reason":"Here's the announcement:\n\n\"Congratulations, Azmatun! You're the SAP-tacular winner of our lucky draw! As our fabulous Functional Consultant from SIS-MY, you've proven yourself to be a 'code' genius. Enjoy your prize and remember, in SAP world, every day is a 'release' day!\""
  },
  {
    "Name":"Beatriz Velasco Suarez",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"SAP IS-U Billing",
    "Reason":"\"Lucky Beatriz! Our bright star from the SAP IS-U Billing division has won big in our lucky draw! Congrats on 'bill'-ing yourself as one of the best, Beatriz! You're now the 'code' winner!\""
  },
  {
    "Name":"Benedict Chin Quan Yue",
    "Position":"Consultant ",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Manufacturing ERP",
    "Reason":"\"Congrats to Benedict Chin Quan Yue, our Manufacturing ERP mastermind! He's been 'configuring' his way to a fantastic prize. Thanks for being an awesome team player, Benedict! Enjoy your win - you've 'stored' up some great memories!\""
  },
  {
    "Name":"Bennett Khoo Whyn Chang",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\"Congratulations Bennett! Our internal ERP whiz has 'solved' the logistics of winning our lucky draw! Well done, Bennett! As our Malaysian superstar, you've 'locked' in a fantastic prize. Cheers!\""
  },
  {
    "Name":"BOYLAND, MAI KRISTINE",
    "Position":"Senior PMO Admin",
    "Entity":"cbs Japan",
    "Gender":"Female",
    "Nationality":"Japanese",
    "Division":"PMO",
    "Reason":"\"Ladies and gentlemen, we're 'configuring' for celebration! Congratulations, Mai Kristine from cbs Japan's PMO division, is our lucky draw winner! Her skills are now the 'standard version' of awesomeness in our office!\""
  },
  {
    "Name":"Bryan Fernando",
    "Position":"Senior Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Luckiest guy in the BAT division goes to him - Bryan Fernando! Congrats on being our 'ABAP-olutely' lucky winner! You're now one step closer to a SAP-tacular prize. Cheers, Bryan!\""
  },
  {
    "Name":"Bryan Wee",
    "Position":"Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"Here's the announcement:\n\n\"Big congratulations to Bryan Wee, our Cloud Platform superstar! He won our lucky draw, because who needs luck when you're as 'core' to SAP Cloud as he is? Cheers, Bryan! You've got a bright future ahead!\""
  },
  {
    "Name":"CANDACE LUH JIA YING",
    "Position":"Legal Counsel",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"malaysian",
    "Division":"PMO",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our SAP-iest winner yet! Congratulations to Candace Luh Jia Ying, our Malaysian PMO superstar, who won our lucky draw! Looks like her contract was a 'table-stakes' winner!\""
  },
  {
    "Name":"CAO, KATHERINE PATAWARAN",
    "Position":"Principal Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"FILIPINO",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Attention all cbsians! We're thrilled to announce our very own Katherine Patawaran as the lucky draw winner! Looks like she's 'accounting' for her good fortune. Congratulations, Katherine! Enjoy your prize and may it bring you a 'balanced' work-life.\""
  },
  {
    "Name":"Chan Chen Yuan",
    "Position":"Senior Consultant",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Lucky draw winner Chan Chen Yuan! Congrats on 'branching out' to new heights of success! Your SAP expertise has earned you a front-row seat at our next team-building adventure. Well done, my friend!\""
  },
  {
    "Name":"Chan Guan Yu",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT PE",
    "Reason":"\"Lucky He's Got It!\n\n Congratulations, Chan Guan Yu! Our very own Associate Solution Consultant has 'code' his way to the top in our lucky draw! May your SAP wisdom bring you endless code success and a treasure trove of benefits!\""
  },
  {
    "Name":"Charles Ryan Gotaco Fang",
    "Position":"Solution Architect ",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Filipino ",
    "Division":"BAT - Business Application Technology",
    "Reason":"Here's the announcement:\n\n\"Lucky draw alert! Congrats to Charles Ryan Gotaco Fang, our BAT-ter architect! He's the SAP hero we needed to 'code' up some fun. Enjoy your trip, Charles - you've earned it!\""
  },
  {
    "Name":"Chen Hou Yu",
    "Position":"Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Taiwan",
    "Division":"SLT - Logistic",
    "Reason":"Here's a short, fun announcement:\n\n\"Lucky He! Chen Hou Yu from SLT - Logistic division is the big winner of our SAP-tacular lucky draw! Guess his skills are 'code'-worthy! Congrats, Chen! You'll be 'logging' all sorts of successes!\""
  },
  {
    "Name":"Chiam Kin Yew",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"\"Big win for our cloudy hero! Chiam Kin Yew from cbs Malaysia's Cloud Platform division is the lucky draw winner! Congrats to him! Looks like he's 'code'-winning this time around. Enjoy your prize, Kin!\""
  },
  {
    "Name":"CHIN YUN ONN",
    "Position":"Senior Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Congratulations to CHIN YUN ONN, our very own 'SAP Master'! He's the 'code'-winner of our lucky draw, beating the odds like a well-implemented ABAP report. Cheers to CHIN YUN ONN on his win - may it be just the beginning of an epic SAP adventure!\""
  },
  {
    "Name":"CHONG YOON LEE",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"\"Big congratulations to Chong Yoon Lee, our Cloudy with a Chance of Winning! As the lucky draw winner, she'll get to 'code' her own getaway - a fun trip courtesy of cbs Consulting!\""
  },
  {
    "Name":"Chou Jia Cheng",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"\" Congratulations to Chou Jia Cheng, our Malaysian mastermind who's ' coding' ahead of the game! As our lucky draw winner, He'll be 'releasing' himself from a day of meetings for a well-deserved break. Well done, mate!\""
  },
  {
    "Name":"CHRIS SOH HO",
    "Position":"Sales Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Corporate Sales",
    "Reason":"\"Congratulations, Chris Soh Ho! You're the 'value-added' winner of our lucky draw! Your sales skills have 'boxed in' the competition, making you the ultimate SAP superstar! Enjoy your prize - we hope it's a 'code' to an amazing getaway!\""
  },
  {
    "Name":"Christopher Michael Bettridge",
    "Position":"Principal Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"British",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Ladies and gentlemen, our top draw has been made! Congratulations to Christopher Michael Bettridge, the lucky winner of our ERP Extravaganza! He's 'logistics'-tically perfect for a prize-winning smile! Cheers, Chris!\""
  },
  {
    "Name":"CHUA SHIN YEE",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Shining bright like a perfectly configured SAP transaction, Chua Shin Yee is our new lucky draw winner! Congrats on 'crashing' the competition, Shin Yee - you've won a fantastic prize! Well done, team!\""
  },
  {
    "Name":"Chye Kah Kien",
    "Position":"Committee",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BI and BPA",
    "Reason":"Here's the announcement:\n\n\"Big win for Chye Kah Kien! Our Malaysian Committee star from BI & BPA division is the lucky draw winner! Looks like he's now the 'value-added' champion of cbs Malaysia - congrats, Chye!\""
  },
  {
    "Name":"Dania Ariffin Binti Mohd Hussain",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"HCM - Human Capital Management",
    "Reason":"\"Big news! Our very own Dania has 'managed' to win our lucky draw! Congrats on being the HR hero of the year! Don't worry, we won't make you 'process' this win alone - everyone gets a slice of the SAP-fairy cake!\""
  },
  {
    "Name":"DO HA THU",
    "Position":"Consultant",
    "Entity":"cbs Japan",
    "Gender":"Female",
    "Nationality":"Vietnamese",
    "Division":"SLT - Logistic",
    "Reason":"\"Congratulations, Ha Thú! Our very own Vietnamese ninja has snatched the coveted SAP skills! As our lucky draw winner from SLT - Logistic division under cbs Japan, you'll be 'coding' your way to success!\""
  },
  {
    "Name":"Earnest Luah",
    "Position":"Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Singaporean",
    "Division":"SLT - Logistic",
    "Reason":"\"Congratulations to Ernest Luah, our Singaporean superstar from the SLT - Logistic division! He's 'tabled' his application for winning our lucky draw - we're 'warehousing' all our thanks and best wishes for this well-deserved win!\""
  },
  {
    "Name":"Edward Cheong Wei Leong",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"Here's the announcement:\n\n\"Big news, team! Edward Cheong Wei Leong, our dynamic Malaysian Analyst from ERP - FICO, has won our lucky draw! It seems he's 'accounted' for all the right numbers. Congrats, Ed! Enjoy your prize!\""
  },
  {
    "Name":"Eleanna Low Li Lin",
    "Position":"HR Generalist",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Singaporean",
    "Division":"Human Resources",
    "Reason":"\"Big congratulations to our very own Eleanna Low Li Lin! She's the SAP-iest HR Generalist in the land (sorry, had to!)! Her luck is now as sharp as a well-configured ABAP report - huge win, Eleanna!\""
  },
  {
    "Name":"Elvira Ariaputra",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"Here's the announcement:\n\n\"Get ready for a 'code' winning moment! Congratulations to Elvira Ariaputra, our BAT superstar! She's 'branching out' as the lucky draw winner! Cheers to our Malaysian rockstar and her SAP-tacular success!\""
  },
  {
    "Name":"Faisal Bin Hasan",
    "Position":"Principle Consultant",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Project Manager",
    "Reason":"\"Big congratulations to Faisal Bin Hasan from our Malaysia office - the lucky winner of our SAP-tacular draw! He's 'transactionally' awesome, and we're thrilled he won. Here's to many more successes with our partner, SIS-MY!\""
  },
  {
    "Name":"Faith Camille Milleza",
    "Position":"Senior Consultant",
    "Entity":"cbs Australia",
    "Gender":"Female",
    "Nationality":"Australian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our logistics star, Faith Camille Milleza, has won the draw! It seems her supply chain skills have 'delivered' us a winner. Congratulations, Faith - enjoy your SAP-tacular prize!\""
  },
  {
    "Name":"Faris Bin Osman",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - Logistic",
    "Reason":"\"Lucky Faris! Our Malaysian mate from SLT - Logistic division has won the SAP-tacular draw! Looks like his logistics skills have finally optimized his luck! Congrats, Faris! You're shipping off with a brand new laptop and our sincerest gratitude!\""
  },
  {
    "Name":"Faris Nazhan bin Badrul Hisham",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Lucky winner alert! Faris Nazhan bin Badrul Hisham from our BAT division has been 'coded' as the lucky draw winner! Congratulations, Faris! You've won a fabulous prize! SAP-ly we're thrilled to have you on our team!\""
  },
  {
    "Name":"FELINA MARIE TULIAO",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Ladies and gentlemen, we're delighted to announce the 'system' winner of our lucky draw: FELINA MARIE TULIAO from our BAT division! Congratulations, Felina - you've been 'configured' for success! Enjoy your prize and keep on coding!\""
  },
  {
    "Name":"FILZA IZZATY BINTI TALIB",
    "Position":"Admin",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"FILZA IZZATY BINTI TALIB, our fantastic Malaysian Admin from cbs Malaysia’s PMO division, just organized her way into a lucky draw win! Her winning formula? Precision, planning, and a sprinkle of SAP-er luck! "
  },
  {
    "Name":"Francis Anthony Verano",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"ISU-CS",
    "Reason":"\"Ladies and gentlemen, we have a 'table' for one winner! Congratulations to Francis Anthony Verano, our lucky draw winner from ISU-CS division under SIS-PH. May his SAP skills bring him 'value-added' wins in the future!\""
  },
  {
    "Name":"Galvin Khaw Deng Hao",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BIT - Enterprise Integration",
    "Reason":"\"Ladies and gentlemen, we have a winner! Galvin Khaw Deng Hao from our BIT-ly awesome Enterprise Integration team in Malaysia is the lucky draw winner! Congratulations! It seems his SAP expertise has 'integrated' perfectly into winning this prize!\""
  },
  {
    "Name":"Gan Lik Chen",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"\"Big news from PMO! We're thrilled to announce our very own Gan Lik Chen as the lucky draw winner! Looks like she's 'configuring' her day with a brand new prize - congratulations, Gan! You've earned your SAP-ential reward!\""
  },
  {
    "Name":"GANJI NARSA REDDY",
    "Position":"Manager",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"INDIAN",
    "Division":"SLT - FI",
    "Reason":"\"Congratulations to GANJI NARSA REDDY, our SAP star! He's the lucky winner of our drawing, and we're 'code'-ly thrilled! His winning entry was 'the perfect formula' for a fantastic prize. Enjoy your well-deserved break, he's 'data'-ly on cloud nine!\""
  },
  {
    "Name":"Gaury Mariathas",
    "Position":"Senior Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"HCM - Human Capital Management",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner - Gaury Mariathas! Congratulations on 'coding' up a storm in HCM and 'debugging' your way to victory! Well done, Gaury - you've won big!\""
  },
  {
    "Name":"Goh TianQi",
    "Position":"Sales Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Corporate Sales",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our very own 'TianQi' - Goh TianQi from Corporate Sales - is SAP-erfectly lucky! She won our lucky draw and now gets to take home a sweet prize. Congrats, TianQi!\""
  },
  {
    "Name":"GOH YEE XIAN",
    "Position":"Consultant ",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Meet our lucky winner, GoH Yee Xian! This Malaysian superstar from BAT division has 'code'-ded their way to the top. Congrats on winning our SAP-tacular prize! You're the 'root' of all happiness in our team!\""
  },
  {
    "Name":"GUO DANDAN",
    "Position":"Senior Consultant",
    "Entity":"cbs China",
    "Gender":"Female",
    "Nationality":"Chinese",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Ladies and gentlemen, our very own 'Material Master' has struck gold! Congratulations to Guo Dandan, our SAP whiz from China, who won the lucky draw in the MM division. May her ERP expertise be the foundation of all future successes - she's the 'material' proof that hard work pays off!\""
  },
  {
    "Name":"Guo Yang",
    "Position":"Manager",
    "Entity":"cbs China",
    "Gender":"Male",
    "Nationality":"China",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\"Big congratulations to Guo Yang, our lucky draw winner! Looks like he's 'configured' for success in the ERP-Logistic PP division! Cheers to you, Guo Yang - may your SAP journey be filled with seamless transactions and endless coffee breaks!\""
  },
  {
    "Name":"HAIZATUL HAZIQAH BINTI GHAZALI",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Ladies and gentlemen, we're 'code' happy to announce the lucky draw winner: HAIZATUL HAZIQAH BINTI GHAZALI from our SIS-MY team! Congrats on cracking the SAP code - enjoy your prize, Haizatul!\""
  },
  {
    "Name":"HAJAR AL HAWARIY BINTI HAMIZAN",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"MALAYSIA",
    "Division":"Finance & Controlling",
    "Reason":"HAJAR AL HAWARIY BINTI HAMIZAN, our Malaysian Consultant from SIS-MY’s Finance & Controlling division, just balanced the books and the odds—landing a lucky draw win! Her luck is clearly well-accounted for!"
  },
  {
    "Name":"Hakimah Binti Mohd Razib",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"MDM - Master Data Management",
    "Reason":"\"Meet Hakimah, the 'master' winner of our lucky draw! Congratulations on being chosen for your outstanding work in MDM - we're 'data'-ly impressed with your skills! Enjoy your reward, Hakimah - you've earned it!\""
  },
  {
    "Name":"HAO-DE JIANG",
    "Position":"Senior consultant",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Taiwanese ",
    "Division":"ERP - FICO",
    "Reason":"\"Congratulations HAO-DE JIANG, our lucky draw winner! It seems he's the 'account' for all the good fortune in Singapore. His ERP skills are truly ' Fiscal Frenzied' - we're glad he won't have to 'post' about it anymore!\""
  },
  {
    "Name":"HARITH SYAZA SYAHMI BIN MUHAMAD EDDIN SYAZRI",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"Here's the announcement:\n\n\"Big congratulations to our Malaysian superstar, Harith Syaza Syahmi Bin Muhammad Eddin Syazri! He's the 'SAP-er' of us all! Winning our lucky draw was a 'code' deal for him - we're thrilled he's 'connecting' with his luck!\""
  },
  {
    "Name":"Haryadi",
    "Position":"Principal Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indonesian",
    "Division":"BI",
    "Reason":"\"Hey team! We've got a 'data'-licious winner! Congratulations, Haryadi from our BI division in Malaysia! He's the lucky one who won our recent SAP-themed giveaway. Better luck next time - unless you're running an ABAP script, then you'll win every time!\""
  },
  {
    "Name":"Hervinya Priya A\/P Balachandar",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Lucky draw winner alert! Congratulations to Hervinya Priya A\/P Balachandar from our ERP - Logistic (MM) division for being the 'master data' of luck! She's the SAP star who's 'coding' her own path to success!\""
  },
  {
    "Name":"Hery Darmawan",
    "Position":"Senior Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indonesian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Congratulations Hery Darmawan! Our BAT-ter half just won our lucky draw! He's the SAP-py winner of a fantastic prize! Great job, Hery! Your skills have earned you a well-deserved break - enjoy your reward!\""
  },
  {
    "Name":"IKHWAN MUHAMMAD BIN HILLMEE",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SCM)",
    "Reason":"IKHWAN MUHAMMAD BIN HILLMEE, our Malaysian Analyst from cbs Malaysia’s ERP - Logistic (SCM) division, just optimized his luck and landed the lucky draw win! Clearly, his supply chain includes a shipment of good fortune!"
  },
  {
    "Name":"Iliya Diyana Binti Mohd Juhari",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"Here's a fun and witty announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner, Iliya Diyana Binti Mohd Juhari from cbs Malaysia! It seems her ERP skills have 'stocked' her with good fortune. Congratulations, Ilia! You've won big!\""
  },
  {
    "Name":"Iman bin Samsudin",
    "Position":"Associate Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT PE",
    "Reason":" SLT PE = Super Lucky Talent, Perfectly Executed! 🎉Iman bin Samsudin, our Malaysian Associate Solution Architect from cbs Malaysia’s SLT PE division, just architected his way into a lucky draw win! His blueprint clearly includes a layer of good fortune!"
  },
  {
    "Name":"Iman Munirah Binti Irwan",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"Here's a short, fun, and witty announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce the lucky draw winner: Iman Munirah Binti Irwan from our SLT-FI division in Malaysia! Congratulations, Iman! You've 'synced' your way to a fantastic prize! Cheers!\""
  },
  {
    "Name":"Imran Asyraaf Bin Mohd Ikhalan",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"\"Ikhalan's the 'code' to success! Congratulations to our lucky winner, Imran Asyraaf Bin Mohd Ikhalan from cbs Malaysia's Cloud Platform division! His SAP expertise has earned him a spot in our 'transactional' prize draw. Cheers to you, Imran!\""
  },
  {
    "Name":"Jallen Rey Santos Reyes",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"ISU - FICA",
    "Reason":"\"Exciting news! Our very own Jallen Rey Santos Reyes from ISU-FICA division is the lucky winner of our latest SAP-erprise draw! Congratulations, Jallen! You're now the 'code master' of our company - enjoy your well-deserved 'byte-sized' bonus!\""
  },
  {
    "Name":"Jamaluddin Bin Sulaiman",
    "Position":"Senior HR Generalist",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Human Resources",
    "Reason":"\"Lucky Jamaluddin! He's the 'code' winner of our lucky draw! Congratulations on being the champion of chance among our SAP-tacular team! You've earned a special prize - a well-deserved break from HR tasks. Enjoy your win, Jamaluddin!\""
  },
  {
    "Name":"Jamie Lee Rebuldela",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"Billing",
    "Reason":"\"Big congratulations to Jamie Lee Rebuldela, our Billing superstar! She's the 'code' winner of our lucky draw! We're thrilled to have her as part of our SAP squad - she's a real 'core' value for our team!\""
  },
  {
    "Name":"Janice Ann Santos Ballaran",
    "Position":"Sales Manager ",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"Corporate Sales",
    "Reason":"\"Lucky you, Janice! You've won the coveted SAP Award of Awesomeness! Congratulations on being the 'system'-atically chosen winner in our corporate lucky draw! Enjoy your prize, and remember: at cbs, we're always 'table-ing' greatness!\""
  },
  {
    "Name":"Jasmine Aliyah binti Mohd Amri",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Big congratulations to Jasmine Aliyah binti Mohd Amri, the lucky winner of our recent SAP Lottery!\n\nIt looks like she's 'configuring' herself for a fantastic year ahead! Well done, Jasmine! You've earned your 'transactional' advantage!\""
  },
  {
    "Name":"Jasmine Shieh",
    "Position":"Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Singaporean",
    "Division":"SLT - Logistic",
    "Reason":"\"Big Congratulations to Jasmine Shieh, our Singaporean superstar from SLT-Logistic division! She's the 'code' winner of our lucky draw! Keep shining bright, Jasmine - your SAP skills have 'configured' her to a winning streak!\""
  },
  {
    "Name":"Jason Andika Lie",
    "Position":"Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Indonesian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"I'm thrilled to announce our lucky draw winner, Jason Andika Lie! Congratulations on 'shipping' your way to success with cbs Singapore. You're the 'master data' of luck winners – enjoy your prize!\""
  },
  {
    "Name":"Jason Darryl Rillstone",
    "Position":"Senior Manager",
    "Entity":"cbs Australia",
    "Gender":"Male",
    "Nationality":"Australian",
    "Division":"Project Manager",
    "Reason":"Here's the announcement:\n\n\"Fair dinkum! Jason Darryl Rillstone is our lucky draw winner! Congratulations, mate! You've 'configured' your day with a prize package that'll make you feel like a SAP superuser. Enjoy your win and don't let it go to waste!\""
  },
  {
    "Name":"Jennifer Almada",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"ISU - BILLING",
    "Reason":"Here's a fun announcement:\n\n\"Congratulations to Jennifer Almada, our newly minted SAP star! She's the 'code' winner of our lucky draw! We're thrilled to have her as part of our team. Cheers to Jen - may your ERP journeys be seamless and your deadlines be few!\""
  },
  {
    "Name":"Jensen Yap Yee Tat",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - Logistic",
    "Reason":"Here's a fun and witty announcement:\n\n\"Congratulations to Jensen Yap Yee Tat, our Malaysia-based logistic whiz! He's the \"key\" winner of our lucky draw! Congratulations, Jensen! May your SAP expertise unlock many more exciting opportunities!\""
  },
  {
    "Name":"Jinhong Zheng",
    "Position":"Senior Consultant",
    "Entity":"cbs Japan",
    "Gender":"Male",
    "Nationality":"China",
    "Division":"ERP - FICO",
    "Reason":"\"Big congratulations to Jinhong Zheng, our ERP FICO rockstar! He's 'coding' his way to the top and won our lucky draw! Kudos to him for being a shining example of what it means to be a 'SAP-ier' consultant - cheers to you, Jinhong!\""
  },
  {
    "Name":"Johannes Schnatz",
    "Position":"HCM Practice Lead ANZ",
    "Entity":"cbs Australia",
    "Gender":"Male",
    "Nationality":"German",
    "Division":"HCM - Human Capital Management",
    "Reason":"\"Congratulations to Johannes Schnatz, our Aussie battler who's 'code'-locked the HCM draw! As our ANZ HCM Practice Lead, he's 'configured' for success. Well done, Johannes - you're the SAP-fect winner!\""
  },
  {
    "Name":"Jonas David Heymann",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"German",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Lucky Jonas has struck again! Congratulations to our German manager extraordinaire from ERP-Logistic (SD) division on winning the lucky draw! Looks like he's 'configuring' for success - SAP-tacular job, mate!\""
  },
  {
    "Name":"JOSE GABRIEL CARLOS",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"FILIPINO",
    "Division":"Billing",
    "Reason":"\"Big congratulations to Jose Gabriel Carlos, our Billing superstar! He's 'code'-winning the lucky draw! Kudos to him for his outstanding work in SIS-PH. Enjoy your prize, Jose - you've 'consulted' everyone on how awesome he is!\""
  },
  {
    "Name":"JOSEPH VARUGHESE",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Change Management",
    "Reason":"\"Big Congrats to Joseph Varughese, our Change Management mastermind from Malaysia! He's the 'code' winner of our lucky draw! Thanks for being a 'sapient' choice, Joseph. Enjoy your prize and may it 'program' in some fun memories!\""
  },
  {
    "Name":"Juan Teguh Tjahjadi",
    "Position":"Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Indonesia",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\"Big win for Juan Teguh Tjahjadi! Our logistic guru has 'sorted' out the competition in our lucky draw. Congratulations on your prize - we hope it's a 'code' winner! Enjoy your reward, Juan!\""
  },
  {
    "Name":"Justine Cabadsan",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"ISU-FICA",
    "Reason":"\"Big news! Justine Cabadsan is our SAP Star for the month! He's 'configuring' his path to success, one transaction at a time. Congratulations, Justine! Enjoy your prize - we hope it's not just a software upgrade!\""
  },
  {
    "Name":"KACHCHAKADUGE RANUL CHANDULA KOTUWEGODA",
    "Position":"Consultant ",
    "Entity":"cbs Japan",
    "Gender":"Male",
    "Nationality":"Sri Lanka",
    "Division":"SLT - FI",
    "Reason":"\"Biggest congrats to Kachchaduge Ranul Chandula Kotuwegoda, our Sri Lanka star! He's 'Coding' his way to the top in Japan! Congratulations on being our lucky draw winner! Enjoy your prize and don't get lost in the code!\""
  },
  {
    "Name":"Kalidass a\/l Marimuthu",
    "Position":"Sales Manager ",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Corporate Sales",
    "Reason":"\"Congratulations to Kalidas, our Malaysia rockstar! He's been 'code' locked into our hearts with his sales skills. Thanks for being an 'SAP-tacular' winner in our lucky draw! You're flying high, Kalidas!\""
  },
  {
    "Name":"Kamal Aikal Bin Dahlan",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - Logistic",
    "Reason":"\"Congratulations to Kamal Aikal Bin Dahlan, our lucky draw winner! He's 'code'-worthy of celebration after crossing the finish line first in our SAP quiz challenge. Here's your prize: a year's worth of free donuts and bragging rights!\""
  },
  {
    "Name":"Karan Kapoor",
    "Position":"IT Administrator",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"Process & IT",
    "Reason":"\"Congratulations Karan Kapoor, the 'code' mastermind from our Process & IT division in Malaysia! He's been 'programmed' for success and is now the lucky draw winner! Enjoy your prize, Karan - you're the SAP-er of luck!\""
  },
  {
    "Name":"Karyn Chang Kar Yan",
    "Position":"Committee",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Lucky draw winner Karyn Chang Kar Yan is shipping her way to a fantastic prize! Congrats on 'materializing' success with your outstanding contributions to our SD division. Enjoy the goodies - you've earned it!\""
  },
  {
    "Name":"KENNETH YOU",
    "Position":"Manager",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Lucky Ken You! Our Malaysian manager from BAT division has 'conducted' himself perfectly, earning him the top spot in our lucky draw. Congrats, Kenneth! May your future transactions be seamless and your ABAP skills be always 'on track'!\""
  },
  {
    "Name":"KEVIN PANG",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Lucky Kevin Pong is the SAP star! He won our lucky draw because his code was tighter than a well-configured ABAP program! Congrats, Kevin! Enjoy your prize - we're sending you on a business-class trip around the world... of work!\""
  },
  {
    "Name":"Kevin Yu Pajarillo",
    "Position":"Senior Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"Process & IT",
    "Reason":"\"Congratulations Kevin Yu Pajarillo! He's the 'Code' winner of our lucky draw! As a Senior Consultant in Process & IT, he's been 'integrating' our team's efforts with his expertise. Enjoy your prize, Kevin - you've earned it!\""
  },
  {
    "Name":"Khairul Asyraf bin Mat napis",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"FI-nally a Winner! Khairul Asyraf bin Mat napis, our Malaysian Consultant from cbs Malaysia’s SLT - FI division, just reconciled his way into the lucky draw win! His fortune’s clearly in perfect balance—just like his financial reports! "
  },
  {
    "Name":"Khoo Li Ying",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Congratulations to Khoo Li Ying, our very own \"Logistics\" genius! She's the 'shipping' winner of our lucky draw! Wishing her a bright future, filled with exciting opportunities - just like her ERP adventures!\""
  },
  {
    "Name":"Koh Hui Chee",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysia",
    "Division":"ERP - Logistic (MM)",
    "Reason":"Koh Hui Chee, our stellar Malaysian Senior Consultant from cbs Malaysia’s ERP - Logistic (MM) division, just material-managed her way into a lucky draw win! Her luck is clearly well-stocked and perfectly sourced!"
  },
  {
    "Name":"Koh Zhi Yung, Ryan",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Big Congrats to Ryan from Malaysia - our FICO superstar! He's the 'master' of ERP, and now he gets to take home the prize! Congratulations, Ryan! May your inbox be as organized as your SAP systems!\""
  },
  {
    "Name":"Kolli Manognya",
    "Position":"Consultant ",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"Indian ",
    "Division":"E-Invoicing",
    "Reason":"\"Attention all cbs India team! We're thrilled to announce our E-Invoicing rockstar, Kolli Manognya, is the lucky draw winner! Looks like her invoicing skills are 'tabled' for a fun getaway. Congratulations, Kolli!\""
  },
  {
    "Name":"Lai Suk Ling",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"\"Lai Suk Ling is the 'code' winner of our lucky draw! Congratulations on being the bright star in our Cloud Platform division. May her SAP journey be filled with seamless integration and endless success!\""
  },
  {
    "Name":"Leaw Jian Xiong",
    "Position":"Senior Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"🎉 FICO Fun from Singapore! 🎉Leaw Jian Xiong, our Malaysian Senior Consultant from cbs Singapore’s ERP - FICO division, just posted a lucky draw win that’s perfectly balanced—just like his financial statements! His luck? Fully reconciled and audit-approved! "
  },
  {
    "Name":"Lee Chai Fong",
    "Position":"Senior consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our FICO fatale for the month - Lee Chai Fong! Her accounting skills are the 'code' to winning this lucky draw. Congratulations, LCF - you've got a 'master' plan for the weekend!\""
  },
  {
    "Name":"Lee Chan Sheng",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Hey team! We're thrilled to announce our lucky draw winner, Lee Chan Sheng from our ERP - Logistic (SD) division in Malaysia! He's the 'code' master who cracked the winning code. Congratulations, Lee! You've got a SAP-tacular prize!\""
  },
  {
    "Name":"LEE MIN HUI",
    "Position":"Senior Marketing Specialist",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Marketing",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we're delighted to announce our lucky draw winner - LEE MIN HUI! Congratulations on 'completing' the SAP challenge! You've earned a spot in the 'table' for all our future team-building outings. Cheers!\""
  },
  {
    "Name":"LEE WEN QING",
    "Position":"PMO Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"\"Congratulations LEE WEN QING, our PMO superstar! She's been 'configuring' her way to the top, and now she's the lucky winner of our SAP-tacular draw! Enjoy your well-deserved prize, Lee Wen Qing - you've earned it!\""
  },
  {
    "Name":"LEE ZHEN XI",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce the lucky draw winner from our ERP - Logistic (MM) division! Lee Zhen Xi, you're the 'code' winner! Congratulations on being part of an innovative team that's 'logistically' brilliant!\""
  },
  {
    "Name":"Leena Mani",
    "Position":"Senior Talent Acquistion Partner",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"Human Resources",
    "Reason":"\"Big congratulations to Leena Mani, our shining star from HR! She's the 'tablet' example of talent acquisition excellence! As the lucky draw winner, she'll get a year's supply of coffee - because, let's be honest, talent acquisition can be a long haul!\""
  },
  {
    "Name":"Leydi Johana Otalvaro Loaiza",
    "Position":"Senior Consultant",
    "Entity":"cbs Australia",
    "Gender":"Female",
    "Nationality":"Australian",
    "Division":"ERP - FICO",
    "Reason":"\"Leydi, Leydi, Leydi! Our Aussie star has struck gold... again! Congratulations on winning our lucky draw! You're the 'controller' of fun in our team. Enjoy your prize, and don't let it go out the window – you've earned it!\""
  },
  {
    "Name":"Liew Seow Wei",
    "Position":"Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Meet our latest 'code'-winner, Liew Seow Wei! Our talented Malaysian Solution Architect from the BAT division cracked the code to win our lucky draw. Congratulations, Liew! You've 'programmed' yourself for success - cheers!\""
  },
  {
    "Name":"Lim Chang Foong",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Lucky He! Lim Chang Foong is the big win-ner of our latest SAP drawing! Congratulations to our BAT diva for hitting the code right and taking home a sweet prize. Cheers to his exceptional skills - he's truly 'logging' on to success!\""
  },
  {
    "Name":"Lin Lihong",
    "Position":"Senior Manager",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Singapore",
    "Division":"ERP - FICO",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our latest SAP-sational winner! Lin Lihong from our ERP-FICO division in Singapore is our lucky draw winner! Congratulations, Lin! You've got a 'Financial' advantage now\""
  },
  {
    "Name":"LIU MENGYI",
    "Position":"Consultant",
    "Entity":"cbs China",
    "Gender":"Female",
    "Nationality":"Chinese",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our BAT-ty winner, Liu Mengyi! Congrats on 'coding' the perfect winning ticket! Our SAP-loving colleague will join us on a fabulous trip, and we can't wait to 'sync' up with her!\""
  },
  {
    "Name":"Liu Wei Zi",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Change Management",
    "Reason":"\"Ladies and gentlemen, we've got a deal-maker! Liu Wei Zi is the lucky winner of our draw! Congratulations on 'contracting' a winning smile. You're off to a SAP-tacular vacation, courtesy of cbs Consulting Company!\""
  },
  {
    "Name":"LOH YING CHEN",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\"Lucky draw winner LOH YING CHEN from our Logistics division in Malaysia is 'posting' his name as the big winner! Congrats on 'invoicing' us with your luckiness. Enjoy your prize, he deserves it!\""
  },
  {
    "Name":"Louis Lian Meng Ling",
    "Position":"Business Development Executive ",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Singaporean",
    "Division":"Corporate Sales",
    "Reason":"\"Ladies and gentlemen, we've got a 'code' to celebrate! Our very own Louis Lian Meng Ling from Corporate Sales has been selected as our lucky draw winner. Congratulations, Louis! You're the SAP-iest winner this side of the equator!\""
  },
  {
    "Name":"Low Hong Min",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"AMS - Application Management Support",
    "Reason":"\"Congratulations Low Hong Min! Our 'implementation' expert has been chosen as the lucky draw winner! Her excellent project management skills have earned her the top spot - now let's see if she can 'code' her way to a year's worth of free coffee!\""
  },
  {
    "Name":"LUN WENG FOONG",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"MALAYSIAN",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Congratulations to LUN WENG FOONG, our lucky draw winner! He's the 'transaction'ally awesome winner of our recent SAP-themed giveaway. Enjoy your prize, Lun! You've 'coded' yourself into a year's worth of fun perks!\""
  },
  {
    "Name":"Luo Ding",
    "Position":"Senior Manager",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Chinese",
    "Division":"ERP - FICO",
    "Reason":"\"Ladies and gentlemen, we have a 'code' winner! Congrats to Luo Ding, our SAP superstar from Singapore, who won the lucky draw! Her FICO finesse has paid off - she's now 'invoiced' for a fantastic prize! Cheers, Luo!\""
  },
  {
    "Name":"MATTHEW IBAÑEZ DE PEDRO",
    "Position":"Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Breaking news: Matthew Ibañez de Pedro from the BAT division has won big! Congratulations, amigo! It seems his skills in SAP are 'tabled' for a fantastic prize. Enjoy your reward, Matthew - you've earned it!\""
  },
  {
    "Name":"May Kuo",
    "Position":"Senior Manager",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Taiwan",
    "Division":"Project Manager",
    "Reason":"Here's the announcement:\n\n\"Congratulations to our very own May Kuo, who's 'code'-ly qualified for a prize! As our Project Manager extraordinaire, May has been the MVP (Most Valuable Partner) in SAP-ifying our projects. She's won the lucky draw - enjoy your reward!\""
  },
  {
    "Name":"mengting ni",
    "Position":"senior sales manager",
    "Entity":"cbs China",
    "Gender":"Female",
    "Nationality":"chinese",
    "Division":"Corporate Sales",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our 'Golden Salesperson' winner, Mengting Ni! Congrats on being the lucky draw winner! It seems your sales skills have been 'configuring' for success all along! Cheers to you, Mengting!\""
  },
  {
    "Name":"MOHAMAD MUSTQAKIM MOHD RAZALI",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Congratulations to Mohamed Mustakim Mohd Razali from our ERP - Logistic (MM) division! He's the 'Master Data' winner of our lucky draw! His skills are truly 'code'-worthy. Enjoy your prize, Mohamed!\""
  },
  {
    "Name":"Mohamad Syafiq Danial bin Baharuddin",
    "Position":"associate solution consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Big congrats to Mohamad Syafiq Danial bin Baharuddin, our lucky draw winner from the BAT division! It looks like he's 'configuring' his way to a dream vacation - all thanks to his SAP skills and luck!\""
  },
  {
    "Name":"MOHAMED AFIQ BIN JAHUBAR ALI",
    "Position":"Associate Solutions Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Big congrats to Mohamed Afiq Bin Jahubar Ali, our BAT superstar! He's 'code'-winning the lucky draw with his brilliant solutions skills! Keep shining, Mohamed - your SAP skills are 'in-memory'ly impressive!\""
  },
  {
    "Name":"MOHAMED RASHADH ABDUL KAREEM",
    "Position":"Analyst",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"INDIAN",
    "Division":"SLT - FI",
    "Reason":"\"Big congratulations to Mohamed Rashadh Abdul Kareem from SLT-FI division! He's been selected as our 'Transaction Master' in the lucky draw. Kudos to him for being 'table-dropping' awesome!\""
  },
  {
    "Name":"MOHAMMED TALHA VATYAPURI",
    "Position":"Analyst",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"SLT - FI",
    "Reason":"\"Hey team! We've got a 'code' winner - Mohammed Talha Vatyapuri from SLT-FI division is our lucky draw winner! Congratulations! You'll get to 'program' your dream getaway with cbs India. Keep coding, Mohammed, you're the MVP!\""
  },
  {
    "Name":"MOHD MOEZ SHA ARANI BIN ANUAR",
    "Position":"Junior Technical Consultant",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"MOHD MOEZ SHA ARANI BIN ANUAR, our Malaysian Junior Technical Consultant from SIS-MY’s BAT division, just coded his way into the lucky draw win! His luck runs smoother than a freshly deployed transport! #TechieTriumph #ABAPsolutelyLucky"
  },
  {
    "Name":"Moses Antony Shankar Sankara Sekar",
    "Position":"Analyst",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"Test Factory",
    "Reason":"\"Congratulations to Moses Antony Shankar Sankara Sekar, our Test Factory rockstar! He's been 'code'-firmed as the lucky draw winner. Cheers to his 'system'atic success!\""
  },
  {
    "Name":"MU DAN",
    "Position":"consultant",
    "Entity":"cbs China",
    "Gender":"Female",
    "Nationality":"China",
    "Division":"GTS",
    "Reason":"Here's the announcement:\n\n\"Big congratulations to our fabulous MU DAN from cbs China! She's 'configuring' her day with a brand new prize - a fun getaway! Thanks for being an awesome SAP-rior (Prior to Absorption... just kidding, kind of!)!\""
  },
  {
    "Name":"MUHAMAD IZZUL IZZANI BIN ABU BAKAR",
    "Position":"Associate Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"MUHAMAD IZZUL IZZANI BIN ABU BAKAR, our Malaysian Associate Consultant from cbs Malaysia’s CP - Cloud Platform division, just deployed his luck to the winner’s zone! Clearly, his fortune is scalable and always available on demand!"
  },
  {
    "Name":"Muhammad Ali Syed",
    "Position":"Senior Solution Consultant ",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistani",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Hey team! We're thrilled to announce our lucky draw winner - Muhammad Ali Syed! He's the 'champion' of the BAT division and has been 'boxed' in with excitement! Congratulations, Muhammad! Enjoy your SAP-tacular prize!\""
  },
  {
    "Name":"Muhammad Arif Fahmy Bin Rozimy",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"Muhammad Arif Fahmy Bin Rozimy, our Malaysian FICO wizard from cbs Malaysia, just debugged destiny and won the lucky draw! Clearly, his SAP skills aren’t just transactional—they’re transformational! #FICOFortune #ABAPsolutelyLucky"
  },
  {
    "Name":"Muhammad Hasif bin Ahmad Mazlan",
    "Position":"IT System Admin",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"Here's the announcement:\n\n\"Congratulations to Muhammad Hasif bin Ahmad Mazlan, our PMO rockstar from Malaysia! He's the 'code' winner of our lucky draw! He'll be 'integrating' his winning ticket into a brand new SAP adventure. Well done, Muhammad!\""
  },
  {
    "Name":"MUHAMMAD HAZIQ BIN MOHD HAIRI",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Big news! Our very own Muhammad Haziq Bin Mohd Hairi from BAT division is the lucky winner of our SAP-tacular draw! Congratulations, Haziq! You've 'configured' your future with a fantastic prize. Here's to many more successful SAP adventures!\""
  },
  {
    "Name":"Muhammad Nabil Fikri Muhamad Sazali",
    "Position":"Design Specialist",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Marketing",
    "Reason":"\"Breaking News: Muhammad Nabil Fikri Muhamad Sazali is the SAP-Approved Winner!\n\nOur Malaysian Marketing rockstar has \"locked down\" the top spot in our lucky draw! Congratulations on your well-deserved win! Enjoy your prize and remember, with SAP, you're always 'in sync'!\""
  },
  {
    "Name":"Muhammad Nur Akmal bin Bakri",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Billing Functional",
    "Reason":"\"Congratulations Muhammad Nur Akmal bin Bakri, the 'Value-Driven' winner of our recent lucky draw! May his prize bring him SAP-erfect happiness and a year filled with net benefits!\""
  },
  {
    "Name":"Muhammad Nur Amirul bin Abdul Karim",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"Muhammad Nur Amirul bin Abdul Karim, our sharp Malaysian Analyst from cbs Malaysia’s ERP - FICO division, just posted a journal entry straight into the winner’s column! Clearly, his luck is well-balanced—just like his ledgers!"
  },
  {
    "Name":"MUHAMMAD SHAHIRAN AKID BIN SHAMSUDIN",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"AUTH",
    "Reason":"MUHAMMAD SHAHIRAN AKID BIN SHAMSUDIN, our Malaysian Associate Solution Consultant from cbs Malaysia’s AUTH division, just authorized his way into the lucky draw win! Clearly, his access isn’t just secure—it’s lucky too!"
  },
  {
    "Name":"MUHAMMAD UMAIR",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistani",
    "Division":"ERP - Logistic (PP)",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we have a 'data-licious' winner! Congratulations to Muhammad Umair, our lucky draw victor from ERP - Logistic (PP) division in Malaysia! May his win be as seamless as an SAP transaction!\""
  },
  {
    "Name":"Muzaffar Shah",
    "Position":"Senior Regional Partner Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Partner Management",
    "Reason":"\"Big news! Muzaffar Shah is the big win-ner of our lucky draw! Congrats on 'partner-ing' us with your winning ways! As a valued member of our team, you'll be 'codifying' memories that will last a lifetime. Cheers, Muzaffar!\""
  },
  {
    "Name":"Nagasakti Tamilmany",
    "Position":"Talent Acquisition Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Human Resources",
    "Reason":"\"Meet Nagasakti, the HR rockstar who's got SAP-cred for all things talent acquisition! She won our lucky draw and we couldn't be happier - after all, someone has to keep our future stars 'configured' for success!\""
  },
  {
    "Name":"NALLURU DILEEPKUMAR",
    "Position":"Senior consultant",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"India",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner - NALLURU DILEEPKUMAR! Congratulations on 'branching out' into a successful win! His expertise in SAP Logistics has earned him the top spot. Cheers to Dileep, you've got the 'code' to success!\""
  },
  {
    "Name":"Nambiar Aditya",
    "Position":"Analyst",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Singaporean (Race: Indian)",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"I'm thrilled to announce the 'system' winner of our lucky draw - Nambiar Aditya! As an expert in logistics, he's mastered the art of navigating complex ERP systems. Looks like he's got a 'core' advantage!\""
  },
  {
    "Name":"Narendra Babu Vasudeva",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Meet Narendra, our latest 'Solution Master'! He's the lucky draw winner from the BAT division. Looks like his 'code' was unbeatable! Congratulations, Narendra! You're about to 'optimize' your weekend with a fun trip!\""
  },
  {
    "Name":"narinah binti mohammad shah",
    "Position":"administrator",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we have a 'sync'-tastic winner! Congratulations, Narinah Binti Mohammad Shah from our PMO division in Malaysia, you've won our lucky draw! We're thrilled to have you as part of our cbs family - cheers to you!\""
  },
  {
    "Name":"Naushin Sana Mir Syed",
    "Position":"Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"SLT PE",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner, Naushin! Congratulations on being the 'system' expert in luck - you've won big time! Welcome to the SAP 'table' for all our future wins!\""
  },
  {
    "Name":"Neera Sood Rao",
    "Position":"Senior Manager",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"MDM - Master Data Management",
    "Reason":"\"Congratulations Neera Sood Rao! She's the master of luck and has 'data' won her spot in our lucky draw. Thanks for being an invaluable part of our MDM team, Neera! You're a shining star in our SAP galaxy!\""
  },
  {
    "Name":"Neetu Nagpal",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"BAT - Business Application Technology",
    "Reason":"Here's a short, fun announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner - Neetu Nagpal! Congratulations on 'tabled' your way to victory! Our SAP star has won a special prize. Well done, Neetu! You're the 'model' of excellence!\""
  },
  {
    "Name":"Ng Boon Chin",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Luck was on his side! Congratulations to Ng Boon Chin, our lucky SAP Superuser, who won the draw in Malaysia! Looks like he's got a 'code' to success - cheers to an amazing win, Boon Chin!\""
  },
  {
    "Name":"Ng Boon Keat Benjamin",
    "Position":"Head of Marketing, cbs Asia Pacific",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Singaporean",
    "Division":"Marketing",
    "Reason":"\"Big Congratulations to our very own Ng Boon Keat Benjamin! He's 'syncing' up his marketing skills with a trip of a lifetime! As the lucky draw winner, he gets to 'activate' his dream vacation. Well done, buddy!\""
  },
  {
    "Name":"Ng Cheng Thong",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Attention all cbs Consultants!\n\nWe're thrilled to announce our lucky draw winner, Ng Cheng Thong from the ERP - FICO division! Congrats on ' accounting' for a spot in our winners' circle! You've earned a well-deserved break!\""
  },
  {
    "Name":"NG WEN QI",
    "Position":"EXECUTIVE ASSISTANT",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"SINGAPOREAN",
    "Division":"Executive Assistant",
    "Reason":"\"Lucky charm alert! Our very own NG Wen Qi is the SAP-iest winner of our recent draw! Congratulations, Wen Qi! You've won the top prize - a well-deserved break from scheduling meetings. Cheers to you, and may your calendar always be 'in sync'!\""
  },
  {
    "Name":"Nidhi Choudhary",
    "Position":"Senior Berater",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"SLT - Logistic",
    "Reason":"\"Big congratulations to Nidhi Choudhary, the logistics genius who's 'shipping' us all into her lucky draw! As our top Senior Advisor in SLT, she's the 'core' of our success. Cheers to a year filled with growth and fun!\""
  },
  {
    "Name":"NILESH SHRIVASTAVA",
    "Position":"SENIOR SOLUTION CONSULTANT",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"india",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Luckiest guy in the land! Nileshe Shrivastava, our BAT-ter solution consultant, has won big! Congrats on being the 'SAP' winner of our lucky draw! You're now one step closer to a year-end bonus - and that's no CRUD task!\""
  },
  {
    "Name":"Noor Fatehah Mohd Alif Choo",
    "Position":"PMO",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"\"Big Congrats to Noor Fatehah Mohd Alif Choo, our very own PMO rockstar! She's the 'code' winner of our lucky draw - 1st among friends and 1st among fans (just kidding, but seriously, she's amazing!)!\""
  },
  {
    "Name":"NORGAHANA BINTI MALLA",
    "Position":"Junior Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"MYS",
    "Division":"Billing",
    "Reason":"\"Congratulations to Norahana Binti Malla, our Billing division rockstar! She's the 'transaction'ally amazing winner of our lucky draw! We're thrilled to have her as part of our SAP-solute team - cheers to her success!\""
  },
  {
    "Name":"Nova Suriani",
    "Position":"Senior Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Indonesia",
    "Division":"ERP - FICO",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we have a financial win! Meet Nova Suriani, our lucky draw winner from cbs Malaysia's ERP - FICO division! Congratulations, Nova! You've 'accounted' for an awesome prize. Cheers!\""
  },
  {
    "Name":"NUR ALIAH BATRISYIA BINTI MAWARDI",
    "Position":"ADMIN",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"NUR ALIAH BATRISYIA BINTI MAWARDI, our brilliant Malaysian Admin from cbs Malaysia’s PMO division, just project-managed her way into a lucky draw win! Clearly, her winning strategy is always on schedule! #PMOPro #SAPerSurprise"
  },
  {
    "Name":"Nur Asilah binti Abdul Halim",
    "Position":"marketing executive",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Marketing",
    "Reason":"\"Congratulations Nur Asilah! We're thrilled to announce you as our lucky draw winner! Your marketing magic has 'configured' us to choose you. Enjoy your prize and bask in the glory of being our SAP-tacular winner!\""
  },
  {
    "Name":"Nur Athirah Binti Hamdan",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - ISU Device Management",
    "Reason":"\"Lucky Charm Alert! We're thrilled to announce Nur Athirah Binti Hamdan as our ERP 'Master' winner of the lucky draw! Her ISU Device Management skills are truly 'SAP-er' than the rest. Congratulations, Nur - enjoy your prize!\""
  },
  {
    "Name":"Nur Elleanna binti Abdullah",
    "Position":"Executive Assistant ",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Personal\/Admin",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce Nur Elleanna binti Abdullah is the lucky draw winner! It seems her Excel skills are 'table'-tastic, and we can't wait to see what she does with our SAP prizes!\""
  },
  {
    "Name":"Nur Hazwani Binti Harun",
    "Position":"Talent Acquisition Specialist",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Human Resources",
    "Reason":"\"Exciting news! Nur Hazwani Binti Harun is the lucky winner of our SAP-tacular draw! Congratulations, Nur! Your expertise in 'acquiring' top talent has earned you a well-deserved break - enjoy your prize and don't forget to 'code' celebrate!\""
  },
  {
    "Name":"Nur Shamira Binti Mohamad Roli",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"\"Lucky winner alert! Nur Shamira Binti Mohamad Roli from the PMO squad at SIS-MY has won big with her SAP-tacular skills! Congratulations, Nur Shamira! You're now the ' King' of our SAP happy place. Treat yourself to a well-deserved coffee break!\""
  },
  {
    "Name":"Nurfarahi Naqibah binti Mohd Azmi",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"CS\/CRM",
    "Reason":"\"Congratulations Nurfarahi! You're the 'code' winner of our lucky draw! Our SAP system may have crunch time, but you've crunched the numbers to win! Enjoy your prize, Nurfarahi - you've 'optimized' your luck!\""
  },
  {
    "Name":"Nurhasyimah Binti Irwansyah",
    "Position":"Senior Inside Sales",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Marketing",
    "Reason":"\"Lucky Nuri! Our very own Nurhasyimah Binti Irwansyah is the SAP-star of our office lottery! Congratulations on hitting the 'transactional' high score! Enjoy your win, Nuri - you've earned it!\""
  },
  {
    "Name":"Nurin Ghaniah Binti Mohd Zakuan Zuraidi",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysia",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce the lucky draw winner: Nurin Ghaniah Binti Mohd Zakuan Zuraidi from our BAT division! Congratulations, Nurin! You've 'disconnected' your competition and won big - now let's 'sync up' some fun!\""
  },
  {
    "Name":"Nurin Khairina Shamsudin",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"MDM - Master Data Management",
    "Reason":"\"Ladies and gentlemen, we have a data-tastic winner! Nurin Khairina Shamsudin from our MDM division has been selected as the lucky draw winner! Congratulations, Nurin! It looks like you've 'mastered' the odds - cheers to you!\""
  },
  {
    "Name":"nursihah azman",
    "Position":"consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"Here's the fun announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce that our very own NURSIAH AZMAN from PMO division has won the SAP-tacular lucky draw! Congratulations, Nur, on 'coding' your way to a fantastic prize!\""
  },
  {
    "Name":"NURUL AFFZAN BINTI JOHARI",
    "Position":"CONSULTANT",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Big news! We've 'ocked' our winner in the lucky draw - NURUL AFFZAN BINTI JOHARI from cbs Malaysia's ERP - FICO division! Congratulations, Nurul! You're the SAP star of the show! Enjoy your prize, and don't 'book' yourself out!\""
  },
  {
    "Name":"Nurul Aqilah Binti Roslan",
    "Position":"HR",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Human Resources",
    "Reason":"\"Big news! Nurul Aqilah Binti Roslan from our HR team is the big winner of our lucky draw! We're thrilled to have her 'configure' her future with a new ride! Congratulations, Nurul - you're SAP-ported to success!\""
  },
  {
    "Name":"Nurul Diyana binti Azhari",
    "Position":"HR Generalist",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Human Resources",
    "Reason":"\"Big congratulations to Nurul Diyana binti Azhari, our Human Resources superstar! She's 'code'-fident she's the luckiest HR Generalist in Malaysia. We're thrilled she won our SAP-tacular draw - enjoy your prize, Nurul!\""
  },
  {
    "Name":"Nurul Husna Binti Noraripin",
    "Position":"SD Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SCM)",
    "Reason":"\" Congratulations to Nurul Husna Binti Noraripin, our Malaysia superstar! She's the \"master data\" winner of our lucky draw! Her SAP smarts have landed her a fantastic prize. Well done, Nurul - you're the \"key\" to our company's success!\""
  },
  {
    "Name":"Pang Guo Zheng",
    "Position":"Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BIT - Enterprise Integration",
    "Reason":"\"Big win for our guy! He\/She was the 'architect' of success in our lucky draw! Congratulations, Pang Guo Zheng, our Malaysian Solution Architect extraordinaire! Enjoy your well-deserved prize - you've got a SAP-tacular future ahead!\""
  },
  {
    "Name":"Pang Wan Si",
    "Position":"Legal Counsel",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"malaysian",
    "Division":"PMO",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen of cbs Consulting Malaysia, we're thrilled to announce our lucky draw winner - Pang Wan Si! Congratulations on 'configuring' your luck just right! Enjoy your prize and may it bring you a year of seamless processes and smooth sailings!\""
  },
  {
    "Name":"PANG XINYI",
    "Position":"Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Singaporean",
    "Division":"SLT - FI",
    "Reason":"\"Lucky winner alert! Pang Xinyi from our SLT - FI division is thrilled to be the SAP star of the draw! Congratulations on 'coding' her way to a fantastic prize! Cheers to an amazing year ahead!\""
  },
  {
    "Name":"Pankaj Bagh",
    "Position":"Principal Consultant",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\" Congratulations Pankaj! He's the 'master of codes' who took home the top prize in our lucky draw! As our new ' ERP Rockstar', he'll get to 'digitally' enjoy all the perks - congrats on cracking the code!\""
  },
  {
    "Name":"PARTHIBAN PERUMAL",
    "Position":"Principal Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"\"Big congratulations to Parthiban Perumal, our Malaysian superstar from SLT - FI division! He's 'ABAP-ly' won the lucky draw! Well done, Parthiban! Enjoy your well-deserved prize and know you're a shining star in our SAP universe!\""
  },
  {
    "Name":"Patrick Jayson Aranzanso Borromeo",
    "Position":"Business Development Executive",
    "Entity":"cbs Australia",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"Corporate Sales",
    "Reason":"\"Lucky Patrick Jayson Aranzanso Borromeo is now the SAP- approved winner of our corporate draw! Congrats, Patrick! Looks like he's 'Coding' ahead of everyone else. Enjoy your prize, and don't forget to optimize your work-life balance!\""
  },
  {
    "Name":"PETER JOHN BANAG",
    "Position":"Senior Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"ALERT: Our very own Peter John Banag has 'abapped' his way to the top! Congratulations to our Filipino Senior Consultant from BAT for being this month's lucky draw winner! Enjoy your SAP-tacular prize, Peter - you've earned it!\""
  },
  {
    "Name":"Petikirige Avishka Dilan Sriyananda",
    "Position":"Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Sri Lanka",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"I'm thrilled to announce the winner of our lucky draw! Petikirige Avishka Dilan Sriyananda, our superstar BAT Solution Consultant, is 'code' above the rest! Congratulations on your win - may it bring you a year filled with ' byte'-sized successes!\""
  },
  {
    "Name":"Ramachandran Rajarajan",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"SLT PE",
    "Reason":"\"Congratulations Ramachandran Rajarajan, our 'Rajarajan' of the SLT PE division! He's the SAP star who 'code'-d his way to victory in our lucky draw. Cheers to our new ' king of innovation'!\""
  },
  {
    "Name":"RAMADAZKIA SYAHRIL SALEH",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indonesian",
    "Division":"ERP - FICO",
    "Reason":"\"Big congratulations to our superstar Senior Consultant, Ramadan Syahril Saleh! He's the \"code winner\" of our lucky draw! His outstanding work on FICO made us go wild for him. Cheers, Ramadan!\""
  },
  {
    "Name":"Ramarao Karaka",
    "Position":"Principal consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"India",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Meet Ramarao Karaka, our lucky winner! He's the 'code' master who cracked the winning ticket. Congratulations, Ramarao! You've won a sweet SAP-tacular prize! Enjoy your well-deserved break, and don't get 'locked out' of work for long!\""
  },
  {
    "Name":"Razelle Frances Bernardino Orquiza",
    "Position":"Consultant ",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"ERP - FICO",
    "Reason":"\"Congratulations to Razelle! Our very own 'Financial Frenzy' winner has been drawn from our ERP hat! She's now the SAP star of our Singapore team. Let's give her a round of applause - after all, someone's got to lead the way in accounting for fun!\""
  },
  {
    "Name":"Regina Tay Li Ling",
    "Position":"Senior Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"I'm thrilled to announce our logistics whiz Regina Tay Li Ling as the lucky draw winner! She's 'shipping' herself to a fantastic prize. Congrats, Regina! Your SAP skills have earned you a break - enjoy your well-deserved reward!\""
  },
  {
    "Name":"Riziana Mohd Redzuwan",
    "Position":"consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"AMS ",
    "Reason":"\"Meet Riziana Mohd Redzuwan, the 'code' winner of our lucky draw! This brilliant Malaysian consultant from our AMS division has 'rebooted' her luck, and we're thrilled to have her as our latest winner. Congratulations, Riziana!\""
  },
  {
    "Name":"Rizky Octavianto Santoso",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indonesian",
    "Division":"ERP - Logistic (PP)",
    "Reason":"Here's the announcement:\n\n\"Big congratulations to Rizky Octavianto Santoso, our lucky draw winner! He's 'coded' himself a great prize - a year's worth of free coffee and lunches at our office. Keep up the fantastic work, Rizky!\""
  },
  {
    "Name":"Rose Anne Rafols",
    "Position":"Senior Consultant",
    "Entity":"SIS-PH",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"ISU - Billing \/ ABAP",
    "Reason":"\"Big wins ahead for Rose Anne Rafols! Our Filipino Superstar from ISU-Billing\/ABAP division is the lucky draw winner! Congrats on 'code'-ing an amazing life, Rose Anne! Enjoy your well-deserved SAP-tacular break!\""
  },
  {
    "Name":"Ruixuan Xi",
    "Position":"Associate Consultant",
    "Entity":"cbs China",
    "Gender":"Male",
    "Nationality":"China",
    "Division":"GTS",
    "Reason":"Here's the announcement:\n\n\"Lucky Ruixuan Xi is the Big Win! He's the 'code' winner of our recent draw from GTS China. Congratulations on being a 'model' of excellence in SAP consulting - you've leveled up your luck!\""
  },
  {
    "Name":"Sabrina Liesl Anne A\/P Errwin Rommel",
    "Position":"Design Specialist",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Marketing",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our very own Sabrina Liesl Anne A\/P Errwin Rommel is our SAP-ace winner! Congratulations, Sabrina! May your CRM skills be as smooth as a well-integrated business process\""
  },
  {
    "Name":"Sailee Dilip Atigre",
    "Position":"HR & Admin Generalist",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"Human Resources",
    "Reason":"\"Sailee Dilip Atigre is the winner of our latest lucky draw! We're thrilled to 'code' her into a day of fun in the office. Congratulations on being the HR hero of the month!\""
  },
  {
    "Name":"Satheesh Bojjaiah",
    "Position":"Solution Architect ",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian ",
    "Division":"BAT - Business Application Technology",
    "Reason":"Here's the announcement:\n\n\"Congratulations to Satheesh Bojjaiah, our luckiest SAP Solution Architect! He's been 'code'-locked into the winner's circle with his brilliant ideas. Cheers to our BAT-winner, Satheesh, who'll enjoy a well-deserved break – or maybe just a really nice cup of chai!\""
  },
  {
    "Name":"Saw Wai Teng",
    "Position":"Committee",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"\"Ladies and gentlemen, we have a 'transactional' success on our hands! Congratulations to Saw Wai Teng from the SLT - FI division in Malaysia, who's 'locked' in as our lucky draw winner! Well done, Sav!\"\n\n(Note: I've used SAP-related puns like \"transactional\" and \"locked\" to tie in with the cbs Consulting theme.)"
  },
  {
    "Name":"See Sui Ni",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"AMS - Application Management Support",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner: See Sui Ni! Congrats, Sui! You've got the 'code' to a fantastic win! Our AMS division is 'syncing' with your luck - here's to many more wins in the future!\""
  },
  {
    "Name":"See Zhan Yi",
    "Position":"Senior Manager",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Singapore",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Lucky draw winner See Zhan Yi gets 'logistically' ahead of the game! Congrats, senior manager! You've 'synced' up your skills with our SAP expertise. Enjoy the prize - you deserve it after navigating those ERP workflows!\""
  },
  {
    "Name":"shaikh furkan ahemed",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"ERP - Logistic (MM)",
    "Reason":"\"Big congratulations to our lucky draw winner, Shaikh Furkan Ahmad! He's 'logistically' the best choice for a prize. Thanks for being an ERP rockstar in Malaysia - you've made our company trip a success!\""
  },
  {
    "Name":"Sheila Marie Ildefonso Perlas",
    "Position":"Sales Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"Corporate Sales",
    "Reason":"\"Lucky Sheila Marie Ildefonso Perlas is our new SAP-star! Congratulations on being the lucky draw winner! You've 'configured' yourself for success. Enjoy your prize and know you're now the 'master data' of our office fun!\""
  },
  {
    "Name":"Shidhartha Shekhar Hota",
    "Position":"Principal Consultant",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"India",
    "Division":"MDM - Master Data Management",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce the Master Data Management champion of our office - Shidhartha Shekhar Hota! He's the 'master' of luck, and his win is a reflection of his stellar work on our MDM projects. Congratulations!\""
  },
  {
    "Name":"shirly hou",
    "Position":"solution consultant",
    "Entity":"cbs China",
    "Gender":"Female",
    "Nationality":"Chinese",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Congratulations Shirly Hou, our lucky draw winner! It turns out, her skills in navigating the ABAP world are unmatched - she 'code'-d her way to victory! Enjoy your prize, and don't forget to 'table' your competition for now.\""
  },
  {
    "Name":"SHIVAM SINHA",
    "Position":"Analyst",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"SLT - FI",
    "Reason":"\"Shivam Sinha is the ' code master' of our SLT-Fi division! He's been 'debugged' by his colleagues for being the most helpful analyst around. Congratulations, Shivam! You're our SAP-tacular winner of the lucky draw!\""
  },
  {
    "Name":"Shivani Mahendran",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"MALAYSIAN",
    "Division":"CLOUD PLATFORM ",
    "Reason":"\"Congratulations Shivani! You're the 'code' winner of our lucky draw! As the top Associate Solution Consultant from cbs Malaysia's Cloud Platform division, you've 'rebooted' your chances at a fantastic prize. Keep shining bright!\""
  },
  {
    "Name":"Sia Zhi Ling",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Lucky Sia we are! Our Malaysian star, Sia Zhi Ling from ERP - Logistic (SD), has been 'invoiced' as the lucky draw winner! Congratulations on making our hearts log onto joy. Cheers to you, Sia!\""
  },
  {
    "Name":"SIM SIANG YING",
    "Position":"Senior Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner, Siang Ying! She's the 'code' to winning our grand prize - a well-deserved break from solving SAP puzzles! Congrats, Siang! You've 'disconnected' all other hopefuls!\""
  },
  {
    "Name":"Siti Nur Amira Binti Abu Bakar",
    "Position":"Admin Executive",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Human Resources",
    "Reason":"Here is the announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our very own Siti Nur Amira Binti Abu Bakar as this month's lucky draw winner! Congratulations, Siti! It seems her HR skills have paid off - after all, she's 'accounting' for our good fortune!\""
  },
  {
    "Name":"SITI NURAISHAH BINTI ABDULLAH",
    "Position":"Senior",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"PMO",
    "Reason":"\"Ladies and gentlemen, we have a winner! Congratulations to Siti Nuraishah Binti Abdullah from PMO division on being the lucky draw prize winner! Looks like she's 'coding' ahead of the rest - cheers to her SAP-tacular win!\""
  },
  {
    "Name":"Siti Sarah Mohd Saad",
    "Position":"Manager - SDM",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"AMS",
    "Reason":"\" Congrats, Sarah! You're the 'code' winner of our lucky draw! As our AMS rockstar, you've got what it takes to 'aggregate' success. Enjoy your prize, Sarah - we're thrilled to have you as part of our #cbscrew!\""
  },
  {
    "Name":"Sivanesan Vijaya Mohan",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (CCSPM)",
    "Reason":"\"Big congratulations to Sivanesan Vijaya Mohan, our CCSPM rockstar! He's been 'invoiced' as the lucky draw winner, all thanks to his exceptional skills in SAP Logistics. Enjoy your prize, Siva - we're 'coding' you in for a fantastic time!\""
  },
  {
    "Name":"Soh Kiat Eng, Donavan",
    "Position":"Analyst",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Singaporean",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Congratulations, Donavan! You've 'materialized' your luck, winning the lucky draw in our ERP Logistic (SD) division! As the top analyst, you're now the 'master data' of good fortune. Enjoy your prize!\""
  },
  {
    "Name":"Subham kumar",
    "Position":"Consultant",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"Manufacturing ERP",
    "Reason":"\"Congratulations Subham Kumar! He's the 'code' winner of our lucky draw! As our Manufacturing ERP superstar, he's proven himself to be a master of process optimization. Good luck on your next 'transaction' of success!\""
  },
  {
    "Name":"Suhani Sharma",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"MDM - Master Data Management",
    "Reason":"\"Big congratulations to Suhani Sharma, our Master Data Management rockstar! She's the 'master' of luck - we're 'data'-ly in love with her winning smile! Enjoy your SAP-tacular prize, Suhani!\""
  },
  {
    "Name":"SUJITH POONOTH",
    "Position":"Manager",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Congratulations to Sujith Poonth, our very own logistics guru! He's the 'core' winner of our lucky draw, beating all others to claim his SAP-tacular prize! Wishing him a 'world-class' experience on his upcoming trip!\""
  },
  {
    "Name":"Syed faiyaz hussain",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistani",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\"Attention all cbsites!\n\nWe're thrilled to announce Syed Faiyaz Hussain, our logistics whiz from Malaysia, as the lucky draw winner! Looks like he's 'configuring' his luck to be the best! Congrats, Syed - enjoy your well-deserved prize!\""
  },
  {
    "Name":"Syed Hassan Ahmed",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistani",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Meet Syed Hassan Ahmed, the 'ABAP-dable' winner of our lucky draw! Congratulations on being chosen from our talented BAT division in Malaysia! You're now the proud owner of a fantastic prize - enjoy it before your next code is cracked!\""
  },
  {
    "Name":"Syed Muhammad Taha Rizvi",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistani",
    "Division":"ERP - Logistic (SCM)",
    "Reason":"\"Congratulations Syed Muhammad Taha Rizvi! Our ERP mastermind has 'delivered' the goods - luck of the draw winner in our recent draw! All the best on your SAP-tacular celebration!\""
  },
  {
    "Name":"SYED OSAMA  ALI",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistani",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Big News! Congratulations to Syed Osama Ali, our lucky draw winner from the ERP-Logistic (SD) division in Malaysia! It looks like he's 'sync-ed' up with fate - congrats on your win! Enjoy your prize, Syed!\""
  },
  {
    "Name":"Tan Heng Chung (Terry)",
    "Position":"Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT PE",
    "Reason":"\"Big congratulations to Tan Heng Chung (Terry) from our SLT PE division in Malaysia! He's the 'code' winner of our lucky draw - guess you could say he 'programmed' his way to victory! Cheers, Terry!\""
  },
  {
    "Name":"Tan Lieu Yong",
    "Position":"Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"CP - Cloud Platform",
    "Reason":"Here's the announcement:\n\n\"Hello team! We've got a 'code' winner! Congratulations to Tan Lieu Yong from cbs Malaysia's CP division for taking home the lucky draw prize! He's 'arch'ing ahead of the competition with his exceptional skills - cheers, Tan!"
  },
  {
    "Name":"Tan Wenn Tyan",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"Tan Wenn Tyan, our Malaysian Analyst from cbs Malaysia’s SLT - FI division, just analyzed her way into a lucky draw win! Her luck is clearly as precise as her financial insights!"
  },
  {
    "Name":"TAN YEN TA",
    "Position":"Manager",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Lucky Break Alert!\n\nWe're thrilled to announce TAN YEN TA as our FICO division winner! Congratulations on being the 'master' of luck! You've got a SAP-perfect balance of skills and charm. Enjoy your prize - you've earned it!\""
  },
  {
    "Name":"Tan Yi Aunn",
    "Position":"PMO",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"MALAYSIAN",
    "Division":"PMO",
    "Reason":"\"Tan Yi Aunn is the 'code' winner! Our Malaysian PMO rockstar took home the top prize in our SAP-sational lucky draw. Congratulations on being the 'master data' of winners - may your SAP adventures be always successful!\""
  },
  {
    "Name":"TAN YU SWEN",
    "Position":"SENIOR CONSULTANT",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"DEVICE MANAGEMENT",
    "Reason":"\"Big Congrats to TAN YU SWEN, our lucky draw winner! He's 'transactionally' the best in DEVICE MANAGEMENT. Cheers to his win - may his SAP expertise lead him to a fruitful year ahead!\""
  },
  {
    "Name":"Tang Hooi Kiy",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Device Management ",
    "Reason":"\"Congratulations Tang Hooi Kiy! You're the lucky SAP winner of the quarter! We're 'data'-ly impressed by your contributions in Device Management. Enjoy your prize - you've 'locked' down our hearts!\""
  },
  {
    "Name":"Tang Hui Bee",
    "Position":"Consultant",
    "Entity":"SIS-MY",
    "Gender":"Female",
    "Nationality":"Malaysia",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Ladies and gentlemen, we have a grape winner! Congratulations to our very own Tang Hui Bee from SIS-MY's BAT division on being the lucky draw winner! Looks like she's 'digitally' deserving of a sweet treat!\""
  },
  {
    "Name":"Tang Hwa Wei",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"\"Big congratulations to He Tang Hwa Wei, the lucky winner of our SAP drawing! It seems his 'code' was unbeatable. We're thrilled to have him join the team on our next SAP adventure - stay tuned for more details!\""
  },
  {
    "Name":"Teh Han Eng",
    "Position":"Senior Consultant",
    "Entity":"SIS-MY",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Process & IT",
    "Reason":"Here's the announcement:\n\n\"Congratulations to Teh Han Eng, our process powerhouse! He's the 'code' winner of our lucky draw, taking home [prize] as a token of appreciation for his exceptional SAP skills! Cheers to Han Eng - may your code always be 'bug-free'!\""
  },
  {
    "Name":"Teh Wee Run",
    "Position":"Senior Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BIT - Enterprise Integration",
    "Reason":"Here's the announcement:\n\n\"Lucky winners alert! We're thrilled to announce Teh Wee Run, our brilliant Senior Solution Architect from BIT-EI division in Malaysia, is 'code'-ing his way to a fantastic prize! Congratulations, Teh Wee Run! You've 'integrated' all the elements of luck!\""
  },
  {
    "Name":"Tejus Srivastav",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"MCS-E-Invoicing World Cloud ",
    "Reason":"\"Lucky Tejus has won the jackpot! Congrats to our Sr. Solution Consultant extraordinaire for his stellar invoicing skills! Looks like he's 'posting' a big smile on his face now! Enjoy your well-deserved break, Tejus!\""
  },
  {
    "Name":"TEO WEN JIE",
    "Position":"Business Development Executive",
    "Entity":"cbs Singapore",
    "Gender":"Male",
    "Nationality":"Singaporean ",
    "Division":"Corporate Sales",
    "Reason":"\"Lucky He! We're thrilled to announce our Corporate Sales Superstar, Teo Wen Jie from Singapore, has won our lucky draw! Congratulations on being the 'perfect' fit for a SAP-tacular prize! Cheers to his winning ways!\""
  },
  {
    "Name":"Thean Zheng Ng",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Congratulations to Thean Zheng Ng, our 'code' mastermind! Winner of the lucky draw from BAT division! Looks like he's 'programming' for success with a fantastic prize! Keep up the 'byte'-sized brilliance, Thean!\""
  },
  {
    "Name":"Thomas Kuckuck",
    "Position":"Senior Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"German",
    "Division":"ERP - FICO",
    "Reason":"Here is the announcement:\n\n\"Congratulations to Thomas Kuckuck, our ERP FICO rockstar! He's the 'accounting' champion of cbs Malaysia! We're thrilled he's won our lucky draw - now he gets to 'close the deal' on a fantastic prize!\""
  },
  {
    "Name":"Tomomi Yokoi",
    "Position":"Consultant",
    "Entity":"cbs Japan",
    "Gender":"Female",
    "Nationality":"Japan",
    "Division":"PMO",
    "Reason":"\"Tomomi Yokoi, our fantastic Consultant from cbs Japan’s PMO division, just planned her way into a lucky draw win! Her strategy? Precision, positivity, and a dash of SAP-er luck from the Land of the Rising Win!\""
  },
  {
    "Name":"Tong Jing",
    "Position":"solution architect",
    "Entity":"cbs China",
    "Gender":"Male",
    "Nationality":"Chinese",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Big Apple fans rejoice! Tong Jing is the lucky winner of our SAP ' Core' Draw! Congratulations on being the \"root\" of all happiness in our BAT division. Enjoy your prize and don't let it 'code' for a year without celebrating!\""
  },
  {
    "Name":"TRAN THI THUY TRANG",
    "Position":"Senior Solution Consultant ",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Vietnamese",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Hey team! Congrats to Tran Thuy Trang, our BAT-ter-than-the-rest Senior Solution Consultant! She's 'code'-ed her way to the top in our lucky draw! Keep shining, Tran - you're the SAP-fairy godmother of success!\""
  },
  {
    "Name":"Kedar Kalyan Pagire",
    "Position":"Senior Consultant ",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"MCS - E-Invoicing World Cloud",
    "Reason":"\"Congratulations Kedar! He's 'invoiced' himself a winning ticket! As the lucky draw winner from our MCS team, he'll be 'cloud'-ing the rest of us with his awesome prize! Huge thanks for being an SAP-tacular teammate!\""
  },
  {
    "Name":"Ungku Fadhlul Amir Bin Ungku Ibrahim",
    "Position":"Senior Solution Architect",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT PE",
    "Reason":"\"Congratulations to Ungku Fadhlul Amir Bin Ungku Ibrahim, our very own 'Solution Architect Extraordinaire'! He's won the lucky draw, and we're glad he's 'coding' up a storm in his free time. Well done, team! Cheers!\""
  },
  {
    "Name":"Vanitha a\/p Gunalan",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Business Intelligence and Analytics",
    "Reason":"\"Attention all cbsians!\n\nWe're thrilled to announce the lucky winner of our recent draw: Vanitha from our Business Intelligence and Analytics team! Looks like she's 'data'-ly winning in life!\n\nCongrats, Vanitha! Enjoy your prize!\""
  },
  {
    "Name":"VARUN MENON CHELNAT",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"BI\/BPMA",
    "Reason":"\"Congratulations to Varun Menon Chelnat, our star SAP consultant from Malaysia! He's ' coding' his way to the top with his brilliant ideas. As our lucky draw winner, he'll get a special prize - and bragging rights for life!\""
  },
  {
    "Name":"Victor Tuahta",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indonesia",
    "Division":"ERP - FICO",
    "Reason":"\"Congratulations Victor Tuahta, our FICO superstar! We're thrilled to announce you've won our lucky draw - the SAP jackpot! May your abilitiy to 'account' for every detail serve you well in this win!\""
  },
  {
    "Name":"VO KHA QUOC HOANG",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Vietnamese",
    "Division":"SLT - Logistic",
    "Reason":"\"Lucky Hoang is the 'code' winner! Congratulations to our very own Vo Kha Quoc Hoang from SLT - Logistic division under cbs Malaysia! You've 'configured' yourself for success! Enjoy your prize and keep on 'coding' great work!\""
  },
  {
    "Name":"Wee Jee Jeng",
    "Position":"Senior Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"SLT - FI",
    "Reason":"Here's a fun announcement:\n\n\"Ladies and gentlemen, we're thrilled to announce our lucky draw winner - Wee Jee Jeng! She's the 'code' to success in our SAP world. Congratulations, Wee Jee! Enjoy your prize and don't 'delete' this amazing news!\""
  },
  {
    "Name":"Wenjing Hu",
    "Position":"Partner and Marketing Executive",
    "Entity":"cbs China",
    "Gender":"Female",
    "Nationality":"Chinese",
    "Division":"Marketing",
    "Reason":"\"Congratulations to Wenjing Hu, the 'SAP-erstar' of our China team! She's the lucky winner of our recent draw. Looks like she's got a 'code' to success - keep shining, WJ! Enjoy your prize, and don't get lost in the code!\""
  },
  {
    "Name":"WONG HORNG JUN",
    "Position":"Analyst",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BI",
    "Reason":"\"Big news! Our very own WONG HORNG JUN from the BI division has won big in our office lottery - congrats, Horng! Looks like his Excel skills have finally paid off... now let's see if he can 'materialize' a new laptop!\""
  },
  {
    "Name":"Wong Ziyang",
    "Position":"Senior Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\" Congrats to Wong Ziyang, our BAT-ty winner! He's been chosen for his outstanding solution skills and 'code' winning attitude. Cheers to another ' SAP-perb' moment in cbs Malaysia - enjoy your prize, WZ!\""
  },
  {
    "Name":"WU HONGCHAO",
    "Position":"Consultant",
    "Entity":"cbs China",
    "Gender":"Male",
    "Nationality":"Chinese",
    "Division":"GTS",
    "Reason":"Here is the rewritten text according to your requirements:\n\n\"Congratulations WU HONGCHAO! You're the 'code' winner of our lucky draw! He's been chosen for his outstanding contributions in GTS division, showing him as a 'master builder' of SAP solutions. Enjoy your prize and happy travels!\""
  },
  {
    "Name":"YIK HUI LING",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"HCM - Human Capital Management",
    "Reason":"Here's a fun announcement:\n\n\"Meet YIK HUI LING, our very own 'HR Hero'! She won our lucky draw and we couldn't be more 'linked' up with her good fortune! Congratulations on your SAP-tacular win!\""
  },
  {
    "Name":"YOGIINA SELVAMANI",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Business Intelligence ",
    "Reason":"\"Big congratulations to Yogiina Selvamani, our lucky winner! She's 'data'-ly the best in Business Intelligence! Wishing her a fruitful year ahead - may her reports always be 'insight'-ful and her data analysis be 'trendy'!\""
  },
  {
    "Name":"YONG YUN MING",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysia",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Big congratulations to YONG YUN MING from our Malaysia team! He's the 'code' winner of our lucky draw! He'll receive a fantastic prize for being the best in his division. Well done, Yong Yun! You're a star!\""
  },
  {
    "Name":"Yuki Matsuoka",
    "Position":"Senior Consultant",
    "Entity":"cbs Japan",
    "Gender":"Male",
    "Nationality":"Japan",
    "Division":"SLT - Logistic",
    "Reason":"\"Big congrats to our lucky draw winner, Yuki Matsuoka! He's 'logging' an extra day of fun at the company trip, courtesy of his skills in the SLT - Logistic division. Here's to another successful delivery for all of us!\""
  },
  {
    "Name":"Zhang, Yunfan",
    "Position":"Manager",
    "Entity":"cbs China",
    "Gender":"Male",
    "Nationality":"China",
    "Division":"SLT - Logistic",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our very own Zhang, Yunfan from Logistics has won the SAP-er draw! Congratulations, Yunfan! It seems his Excel skills have finally 'tab'-ulated to a winning formula!\""
  },
  {
    "Name":"ZHU BOLAN",
    "Position":"Senior Consultant",
    "Entity":"cbs Singapore",
    "Gender":"Female",
    "Nationality":"Singapore",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Ladies and gentlemen, we have a shipping sensation on our hands! Congratulations to Zhu Bolan, our lucky draw winner from the ERP - Logistic (SD) division! It looks like she's 'logistically' ahead of the curve. Enjoy your prize!\""
  },
  {
    "Name":"Muhammad Alif Baihaqi bin Abd Nasir",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"SLT - Logistic",
    "Reason":"Muhammad Alif Baihaqi bin Abd Nasir, our Malaysian Consultant from cbs Malaysia’s SLT - Logistic division, just shipped himself straight into the winner’s circle! Clearly, his luck moves faster than an express delivery! #LogisticLegend #SAPerShipment"
  },
  {
    "Name":"Kiran Sahoo",
    "Position":"Analyst",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"SLT - Logistic",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we have a winner! Kiran Sahoo from SLT - Logistic has been 'code'-fined as our lucky draw winner! Congratulations, Kiran! You've won [prize]! Keep your fingers on the keyboard, you never know when SAP will strike again!\""
  },
  {
    "Name":"Ahmad Najmuddin bin Mohd Aminuddin",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysia",
    "Division":"ERP - Logistic (SD)",
    "Reason":"SD = Super Drawn! Ahmad Najmuddin bin Mohd Aminuddin, our Malaysian Manager from cbs Malaysia’s ERP - Logistic (SD) division, just picked the perfect delivery—straight into the lucky draw win! His luck’s clearly been well-distributed! #SDStar #SAPerShipment"
  },
  {
    "Name":"Ashfaq Ahmad Attar",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistan",
    "Division":"ERP - FICO",
    "Reason":"\"Lucky Ashfaq Ahmad Attar, our SAP wizard from Malaysia! He's been 'code' qualified for the lucky draw prize pack. Congratulations on being the 'master data' winner!\""
  },
  {
    "Name":"Ahsan Misbah",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Pakistani",
    "Division":"ERP - Logistic (PP)",
    "Reason":"\"Big congratulations to Ahsan Misbah, our lucky ERP wizard from Malaysia! He's 'code'-fined the win in our recent draw! Enjoy your well-deserved prize, Ahsan - you've earned it!\""
  },
  {
    "Name":"Tham Jiun Jye",
    "Position":"Principal Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"AMS - Application Management Support",
    "Reason":"\"Lucky draws are like ABAP programs - they need the right input! Congratulations to Tham Jiun Jye from cbs Malaysia's AMS division on being our lucky winner! His winning ticket was 'compiled' with perfection. Enjoy your prize, Tham!\""
  },
  {
    "Name":"KARTHICK SUSEELA MURUGESAN",
    "Position":"Senior Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"INDIAN",
    "Division":"BDC",
    "Reason":"\"Congratulations to Karthick Suseela Murugesan, our very own 'SAP-savvy' winner! He's the lucky one who's been 'code-redy' for a prize! Kudos to him for being the best in BDC division - may his SAP skills keep shining bright!\""
  },
  {
    "Name":"Shanti Thambusammy",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Luckiest person in the ERP forest is Shanti Thambusammy! Congrats on 'financing' her way to our lucky draw! Thanks for being a shining star in our FICO division. You've got a SAP-tacular smile, and we're thrilled to have you!\""
  },
  {
    "Name":"Aldwin Lemuel Almazan Sanchez",
    "Position":"SAP Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Lucky draw winner Aldwin Almazan is over the moon! Congratulations on 'crashing' the competition with his expertise in SD logistics. You're now the 'master data' of our lucky draws - enjoy your prize!\""
  },
  {
    "Name":"SAHYOG AHINSHA",
    "Position":"Consultant",
    "Entity":"cbs India",
    "Gender":"Male",
    "Nationality":"Indian",
    "Division":"MCS",
    "Reason":"\"Big congrats to He Rohan from our MCS division! You're the SAP-iest winner of our lucky draw! 'Hoping' you'll use your prize wisely. Wishing you a year filled with code wins and happy sprints around the office!\""
  },
  {
    "Name":"Asma' Binti Mohamed Habib",
    "Position":"Executive",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Partner Management",
    "Reason":"\"Lucky Charm Alert!\n\nWe're thrilled to announce our superstar Asma' Binti Mohamed Habib as the lucky draw winner! Congratulations, Asma'! You've 'coded' your way to a fantastic prize. Cheers to you from all of us at cbs Consulting!\""
  },
  {
    "Name":"Raja Azizul Bin Raja Anuar",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"Human Resources",
    "Reason":"\"Congratulations Raja Azizul Bin Raja Anuar! Our top manager from the HR department has been 'sorted' into an amazing SAP adventure! Winner of our lucky draw, he'll be leading our next team-building trip - stay tuned for more details!\""
  },
  {
    "Name":"Harjun Raj Pillai Jayarajan",
    "Position":"Senior Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - FICO",
    "Reason":"\"Luck of the SAP! Congratulations to Harjun Raj Pillai Jayarajan, our Malaysian superstar from FICO, who's 'calculating' his way to a fantastic prize! Well done, Harjun - you're the ERP-ceptional winner!\""
  },
  {
    "Name":"Marnie Jee Danker",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"HCM - Human Capital Management",
    "Reason":"\"Lucky Marnie Jee Danker wins big! She's 'configuring' herself for success in HCM. Congratulations on being the SAP-iest winner of our lucky draw! Enjoy your reward, Marnie - you've earned it!\""
  },
  {
    "Name":"Nidhi Shashikumar Sajjan",
    "Position":"Consultant ",
    "Entity":"cbs India",
    "Gender":"Female",
    "Nationality":"Indian",
    "Division":"SLT - FI",
    "Reason":"\"Ladies and gentlemen, we're thrilled to announce our very own Nidhi Shashikumar Sajjan as the lucky draw winner! It looks like she's 'code'-ing her way to success - congrats, Nidhi! Cheers!\""
  },
  {
    "Name":"PRABBANANTHEN A\/L SANTHRA MOHAN",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Lucky winner alert! He's the 'code' to our success! Congratulations to Prabhananthan for being the lucky draw winner from our BAT division! He'll be 'database-ing' his way to a fantastic prize. Cheers, team!\""
  },
  {
    "Name":"Waqaar Mohamed Ameen",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Sri Lankan",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"Lucky draw winner Waqaar Mohamed Ameen! Congrats on 'materializing' the jackpot! Thanks for being an awesome team player. Enjoy your prize, Waaq! You've earned it - now go ' configure' your dream vacation\""
  },
  {
    "Name":"Nur Eizzaty binti Hamzaid",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Malaysian",
    "Division":"Cloud Platform ",
    "Reason":"\"Lucky her we did! Meet Nur Eizzaty binti Hamzaid, our Cloud Platform diva! She's 'code'-ing the competition with her stellar skills. Congratulations, Nur! You've won big in our SAP drawing - may your future projects be error-free and fabulous!\""
  },
  {
    "Name":"Mohd Ridzuan Bin Bahuddin",
    "Position":"Associate Solution Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysia",
    "Division":"BIT - Enterprise Integration",
    "Reason":"\"Lucky Mohamed! Congratulations on being the SAP-iest guy in the house! He's the 'code' winner of our lucky draw! Kudos to Mohd Ridzuan Bin Bahuddin from BIT - Enterprise Integration for his 'integration' skills, which won him a fantastic prize!\""
  },
  {
    "Name":"Nurul Rahmi Ramadhani",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Female",
    "Nationality":"Indonesian",
    "Division":"AMS",
    "Reason":"Here's the announcement:\n\n\"Ladies and gentlemen, we've got a R3al winner! Congratulations to Nurul Rahmi Ramadhani from our AMS division in Malaysia - she's been 'transactionally' rewarded with a fantastic prize! Well done, Nurul!\""
  },
  {
    "Name":"SUFIAN AZHARI BIN ABDUL JALIL",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"MALAYSIAN",
    "Division":"ERP - Logistic (SD)",
    "Reason":"SD = Super Destiny! SUFIAN AZHARI BIN ABDUL JALIL, our Malaysian Consultant from cbs Malaysia’s ERP - Logistic (SD) division, just picked the winning ticket like a perfectly timed delivery! His luck’s clearly optimized for high performance! #SDSuccess #SAPerLogistics"
  },
  {
    "Name":"Muhammad Farhan Faris Bin Khairol Salleh",
    "Position":"SAP EWM Consultant ",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"ERP - Logistic (SD)",
    "Reason":"\"I'm thrilled to announce our lucky draw winner, Muhammad Farhan Faris Bin Khairol Salleh from cbs Malaysia's ERP - Logistic (SD) division! Congratulations, Farhan! It looks like you've 'invoiced' the right winning ticket. Enjoy your prize!\""
  },
  {
    "Name":"Hairos Izham Bin Rosli",
    "Position":"Senior Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Malaysian",
    "Division":"BAT - Business Application Technology",
    "Reason":"\"Lucky Harios won the coveted 'Golden ABAP' award! Congrats on 'programming' your win! Thanks for being an 'insightful' team player, Harios. Your skills have earned you a 'code-red' exciting prize!\""
  },
  {
    "Name":"Jendi Hardono",
    "Position":"Consultant",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"Indonesia ",
    "Division":"SAP BASIS ",
    "Reason":"\"Meet Jendi Hardono, our lucky SAP Basis whiz! Congrats on winning the draw! May your transactions be smooth, your screens be bright, and your code be bug-free. You're the 'master' of our SAP world!\""
  },
  {
    "Name":"KYLE MARIE SANTOS CAYABAN",
    "Position":"Sr. HR Admin Generalist",
    "Entity":"SIS-PH",
    "Gender":"Female",
    "Nationality":"Filipino",
    "Division":"Human Resources",
    "Reason":"\"Ladies and gentlemen, our SAP-powered random draw has chosen the fabulous Kyle Marie Santos Cayaban as our lucky winner! Congrats, Kyle! You're 'configuring' your day for success with a free lunch voucher - enjoy!\""
  },
  {
    "Name":"PINEDA, ALEXANDER MACALIPAY",
    "Position":"Senior Consultant",
    "Entity":"SIS-PH",
    "Gender":"Male",
    "Nationality":"Filipino",
    "Division":"ERP - Logistic (Project Business)",
    "Reason":"\"Lucky He is! Alexander Macalipay wins the SAP lottery... of life! Congratulations on being the top 'tablet' talent in our ERP-Logistics division. Enjoy your well-deserved prize - we hope it's more than just a 'code' for happiness!\""
  },
  {
    "Name":"MUHAMMAD AIDIL BIN JOLHI",
    "Position":"IT SYSTEM ADMINSTRATOR",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"MALAYSIAN",
    "Division":"Process & IT",
    "Reason":"Here's the announcement:\n\n\"Big congratulations to Muhammad Aidil Bin Jolhi, our Process & IT rockstar from Malaysia! He's the lucky winner of our recent draw. Looks like he's 'code'-ing ahead with this win - cheers, Aidil!\""
  },
  {
    "Name":"Joseph Hofmann",
    "Position":"Manager",
    "Entity":"cbs Malaysia",
    "Gender":"Male",
    "Nationality":"German",
    "Division":"SLT - FI",
    "Reason":"\"Congratulations to Joseph Hofmann, our newly minted SAP Superstar! He's 'coding' his way to the top in the SLT-FI division. Winner of our lucky draw, he'll be 'branching out' with a fantastic prize - keep an eye on your inbox for details!\""
  },
  {
    "Name":"YU NAKAMURA",
    "Position":"Sales Manager",
    "Entity":"cbs Japan",
    "Gender":"Male",
    "Nationality":"Japanese",
    "Division":"Corporate Sales",
    "Reason":"Here's the announcement:\n\n\"Lucky YU NAKAMURA is over the moon! Our Japanese Sales Manager was the lucky winner of our SAP-tacular drawing! Congrats on 'digitally' taking home an amazing prize - we're glad you're 'connected' with us, cbs style!\""
  }
];
