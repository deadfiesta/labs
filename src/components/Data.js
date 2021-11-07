const nav = [
    {
        name: "Home",
        link: "/home",
    },
    {
        name: "About Us",
        link: "/about",
        subnav: [
            {
                name: "Our Values",
                link: "/about/ourvalues"
            },
            {
                name: "Our Leadership",
                link: "/about/ourleadership"
            }
        ]
    },
    {
        name: "Products & Services",
        dropdown: true,
        subnav: [
            {
                name: "Garena",
                link: "/garena"
            },
            {
                name: "Shopee",
                link: "/shopee"
            },
            {
                name: "SeaMoney",
                link: "/seamoney"
            }
        ]
    },
    {
        name: "Investor Relation",
        link: "/investor",
        subnav: [
            {
                name: "Overview",
                link: "/investor/overview"
            },
            {
                name: "Quarterly Results",
                link: "/investor/results"
            },
            {
                name: "Newsroom",
                link: "/investor/newsroom"
            },
            {
                name: "Annual Report",
                link: "/investor/report"
            },
            {
                name: "Corporate Governance",
                link: "/investor/corporate"
            }
        ]
    },
    {
        name: "Media",
        link: "/media"
    },
    {
        name: "Sustainability",
        link: "/sustainability"
    },
    {
        name: "Careers",
        link: "/careers"
    },
    {
        name: "Contact Us",
        link: "/contact"
    }
]

const missions = [
    {
        title: "About Us",
        subtitle: "Read about our story",
        link: "/about",
        thumbnail: "about-us",
        icon: "book"
    },
    {
        title: "Product & Services",
        subtitle: "Find out more about our key services",
        link: "/product",
        thumbnail: "product-services",
        icon: "devices"
    },
    {
        title: "Investor Relations",
        subtitle: "Latest investor information and financials",
        link: "/investor",
        thumbnail: "investor-relations",
        icon: "presentation"
    }
]

const products = [
    {
        brand: "garena",
        link: "/garena",
        subtitle: "Digital Entertainment"
    },
    {
        brand: "shopee",
        link: "/shopee",
        subtitle: "E-commerce"
    },
    {
        brand: "seamoney",
        link: "/seamoney",
        subtitle: "Digital Financing Services"
    }
]

const leaders = [
    {
        name: "Forrest Li",
        role: "Chairman and Group CEO",
        paragraph: "Forrest Li is our founder and has served as the chairman of our company and our group chief executive officer since our inception in May 2009. He is a member of the board of directors of the Singapore Economic Development Board, and serves as an independent non-executive director of Shangri-La Asia Limited. He also serves on the board of trustees for the National University of Singapore, and on the advisory council of Stanford University’s Graduate School of Business. Forrest holds an M.B.A. degree from Stanford University’s Graduate School of Business and a bachelor’s degree in Engineering from Shanghai Jiaotong University.",
        link: "/forrestli"
    },
    {
        name: "Gang Ye",
        role: "Group Chief Operating Officer",
        paragraph: "Gang Ye is our co-founder and has been a member of the board of directors of our company since March 2010. Gang has served as our group chief operating officer since January 2017 and served as our group chief technology officer between March 2010 and December 2016. He previously worked at Wilmar International and the Economic Development Board of Singapore. Gang holds B.S. degrees in Computer Science and Economics from Carnegie Mellon University.",
        link: "/gangye"
    },
    {
        name: "David Chen",
        role: "Chief Product Officer, Shopee",
        paragraph: "David Chen is our co-founder and serves as the chief product officer of Shopee. He was formerly group chief of staff, a position he held from January 2017 to December 2019. Prior to that, David served as our group chief operating officer from our inception in May 2009 to December 2016. He previously held positions at PSA Corporation Limited. David holds a bachelor’s degree in Computer Engineering with first class honors from the National University of Singapore.",
        link: "/davidchen"
    },
    {
        name: "Tony Hou",
        role: "Group Chief Financial Officer",
        paragraph: "Tony Hou joined our company in September 2010 and has served as our group chief financial officer since January 2013. He previously served as our financial controller. Before joining us, Tony was an audit senior manager at Ernst & Young, where he worked from October 2000 to September 2010 in both China and the U.S. Tony is a non-practicing U.S. Certified Public Accountant and a non-practicing member of the Chinese Institute of Certified Public Accountants. He holds an M.B.A. degree from the University of Chicago’s Booth School of Business and a bachelor’s degree in Accounting from Fudan University.",
        link: "/tonyhou"
    },
    {
        name: "Chris Feng",
        role: "CEO, Shopee; CEO, SeaMoney",
        paragraph: "Chris Feng joined our company in March 2014, and has served as the chief executive officer of Shopee since July 2015 and as the chief executive officer of SeaMoney since March 2020. Chris previously served as our head of mobile business and was responsible for operating our mobile game business. Before joining our company, Chris was part of the Southeast Asia founding team at Rocket Internet SE from December 2011 to February 2014, establishing ventures such as Zalora and Lazada. Chris also served as regional managing director at Zalora and chief purchasing officer at Lazada during his tenure at Rocket Internet SE. From March 2005 to December 2011, Chris served as a management consultant at McKinsey & Company, across its Frankfurt, Copenhagen and Singapore offices. Chris holds a bachelor’s degree in Computer Science with first class honors from the National University of Singapore.",
        link: "/chrisfeng"
    },
    {
        name: "Yanjun Wang",
        role: "Group Chief Corporate Officer",
        paragraph: "Yanjun Wang is Sea’s group chief corporate officer, group general counsel and company secretary. Yanjun has served as Sea’s group chief corporate officer since May 2019, company secretary since November 2017 and group general counsel since March 2014. She established and leads the company’s in-house legal function across all businesses and offices. Prior to joining Sea, Yanjun was an attorney at Skadden, Arps, Slate, Meagher & Flom LLP in New York and Kirkland & Ellis in Hong Kong. She is qualified to practice law in the State of New York. She holds a J.D. degree from Harvard Law School and a B.A. degree in Economics from Harvard University.",
        link: "/yanjunwang"
    },
    {
        name: "Nok Anulomsombut",
        role: "CEO of Thailand",
        paragraph: "Nok Maneerut Anulomsombut joined our company in March 2014 and has served as our chief executive officer of Thailand since March 2016. Nok previously served as our chief operating officer of Thailand. Prior to joining our company, Nok was a management consultant at The Boston Consulting Group in Bangkok from March 2009 to February 2014. Prior to joining The Boston Consulting Group, Nok worked at financial and fashion companies in Thailand. Nok holds an M.B.A. degree from Stanford University’s Graduate School of Business and a bachelor’s degree in Industrial Engineering from Chulalongkorn University in Thailand.",
        link: "/nokanulomsombut"
    },
    {
        name: "Terry Zhao",
        role: "President, Garena",
        paragraph: "Terry Zhao has been with our company since its inception in 2009 and has served as the president of Garena since November 2018. Prior to assuming his current role, Terry has also served in a number of senior roles in our digital entertainment business across several key markets. Terry holds a bachelor's degree in Computer Engineering with first class honors from Nanyang Technological University.",
        link: "/terryzhao"
    }
]

const updates = [
    {
        thumbnail: "reunion",
        date: "Aug 29, 2021",
        tag: "garena",
        title: "Garena collaborates with international DJs for Free Fire’s 4th anniversary celebrations",
        captions: [
            {
                title: "DJs Dimitri Vegas & Like Mike, Alok, and KSHMR come together to co-produce Free Fire’s 4th anniversary theme song, titled ‘Reunion’",
            }
        ],
        paragraph: "Free Fire celebrates its ‘4nniversary’ with new music, an in-game party, and other exclusive content.",
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/08292021"
    },
    {
        thumbnail: "shopeemall",
        date: "Jul 1, 2021",
        tag: "shopee",
        title: "Shopee Mall launches Brand Memberships program to help brands grow customer loyalty and retention",
        captions: [
            {
                title: "Brands on Shopee Mall and Shopee Premium will now have more tools to personalize the customer experience"
            }
        ],
        paragraph: "Shopee has officially launched the Shopee Mall Brand Membership program across seven markets to help brands capture more growth online.",
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/07012021"
    },
    {
        thumbnail: "ff-mclaren",
        date: "Jul 29, 2020",
        tag: "garena",
        title: "Garena Free Fire and McLaren Racing feature the McLaren P1™ and MCLFF in exciting in-game collaboration",
        paragraph: "Collaboration with Formula 1 team McLaren Racing will bring exclusive collaboration content and in-game features to Free Fire.",
        captions: [
            {
                title: "Exclusive McLaren Racing x Free Fire collection in the collaboration content drop"
            },
            {
                title: "McLaren Formula 1 racing driver Lando Norris will feature in the collaboration"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/07292020"
    },
    {

        thumbnail: "garena",
        date: "Jul 25, 2020",
        tag: "garena",
        title: "Garena World concludes first ever fully virtual edition with over 1.2 million online attendees",
        paragraph: "Southeast Asia’s biggest gaming and esports event presented fans with an immersive online experience combining cutting edge technology with entertaining content.",
        captions: [
            {
                title: "Southeast Asia’s biggest gaming and esports event drew over 40 million views as Garena unveiled two games and crowned four esports champions"
            }
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/07252020"
    },
    {
        thumbnail: "sea-nus",
        date: "Mar 29, 2020",
        tag: "sea",
        title: "Sea makes S$50 million gift to advance cutting-edge research and education at NUS School of Computing",
        paragraph: "The gift marks the deepening of a long-term partnership between Sea and the National University of Singapore to nurture and grow Singapore's tech ecosystem.",
        captions: [
            {
                title: "Largest corporate gift received by NUS to date will support talent development and innovation in key areas such as AI and data science"
            },
            {
                title: "Deepens long-term partnership between NUS and Sea to nurture and grow Singapore’s tech ecosystem"
            }
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/22292020"
    },
    {
        thumbnail: "freefire-worldseries",
        date: "Mar 19, 2021",
        tag: "garena",
        title: "Garena announces Free Fire World Series 2021 in Singapore",
        paragraph: "Free Fire’s largest iconic esports tournament will be held in Singapore featuring 22 teams from 14 regions.",
        captions: [
            {
                title: "Free Fire’s most iconic tournament will return in May, featuring 22 teams from 14 regions"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/19032021"
    },
    {
        thumbnail: "esports-roadmap",
        date: "Feb 24, 2021",
        tag: "garena",
        title: "Garena unveils 2021 international esports roadmap for Free Fire",
        paragraph: "Fans will see three major international events this year, with two editions of Free Fire’s flagship international tournament, the Free Fire World Series, and the Free Fire All Stars.",
        captions: [
            {
                title: "Fans will get three major international tournaments this year, building on an award-winning year for Free Fire’s esports in 2020"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/24022021"
    },
    {
        thumbnail: "shopee",
        date: "Jan 25, 2021",
        tag: "shopee",
        title: "Shopee unveils new initiatives at inaugural Shopee Brands Summit",
        paragraph: "The event saw Shopee's leadership team share the 2021 roadmap for brands to capture the next wave of growth in the region's e-commerce market as consumers shop and spend more online.",
        captions: [
            {
                title: "As e-commerce in the region accelerates, brands learnt new ways to attract and retain consumers at the first Shopee Brands Summit"
            }
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/07242020"
    },
    {
        thumbnail: "onepunchman",
        date: "Dec 21, 2020",
        tag: "garena",
        title: "Free Fire introduces One-Punch Man as its latest crossover",
        paragraph: "Garena has announced a new crossover event that will bring One-Punch Man content into the Free Fire universe. The collaboration will give players from all over the world access to playable in-game content from One-Punch Man.",
        captions: [
            {
                title: "Garena’s latest crossover unites one of the world’s most popular mobile games with its most powerful hero"
            }
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/12212020"
    },
    {
        thumbnail: "chrono",
        date: "Dec 7, 2020",
        tag: "garena",
        title: "Free Fire announces partnership with Cristiano Ronaldo",
        paragraph: "Free Fire announced that global sporting icon Cristiano Ronaldo is its latest global ambassador. The partnership builds on Free Fire’s efforts to continuously engage and excite its communities around the world.",
        captions: [
            {
                title: "Partnership between Cristiano Ronaldo and Free Fire builds on the game’s strategy to continue its roll-out of content for its global users"
            },
            {
                title: "Cristiano Ronaldo comes to live in Free Fire as “Chrono”, set in a futuristic slum universe"
            },
            {
                title: "Partnership is viewed as a landmark initiative for the wider gaming industry"
            }
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/12072020"
    },
    {
        thumbnail: "sea",
        date: "Jul 21, 2020",
        tag: "sea",
        title: "Sea Selected for the Award of Digital Full Bank License in Singapore",
        paragraph: "Sea today announced that it has been selected for the award of a license to operate a digital full bank in Singapore. The Monetary Authority of Singapore announced earlier today that Sea has been selected for the award of a digital full bank license, the first time such a license is being awarded in Singapore.",
        captions: [
            {
                title: "Digital bank initiative will build on Sea’s long-standing commitment to supporting the development of the digital economy in its home market, as well as Singapore’s role as a global hub for technology and financial services."
            },
            {
                title: "mphasis on addressing the unmet financial services needs of young consumers and SMEs will empower more Singaporeans to thrive in the digital economy."
            }
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/07212020"
    },
    {
        thumbnail: "shopee-new-opportunities",
        date: "Oct 28, 2020",
        tag: "shopee",
        title: "Shopee survey: e-commerce provides new opportunities for Malaysians",
        paragraph: "A recent survey conducted by Shopee amongst 11,850 Malaysian sellers shows that e-commerce is creating new livelihoods and opportunities amid rising economic challenges. The survey reveals optimism ahead of Shopee's 11.11 Big Sale, as sellers anticipate store sales to climb 100% at the shopping festival.",
        captions: [
            {
                title: "Survey reveals optimism ahead of Shopee 11.11 Big Sale, as sellers anticipate store sales to climb 100% at the shopping festival"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/28102020"
    },
    {
        thumbnail: "capitaland",
        date: "Oct 26, 2020",
        tag: "shopee",
        title: "CapitaLand and Shopee collaborate to accelerate digitalization of Singapore retailers",
        paragraph: "CapitaLand and Shopee have joined hands to help Singapore retailers digitalize, diversify their revenue streams, and export their brands overseas. The efforts will fall under the Emerging Stronger Taskforce’s Alliance for Action on Facilitating Smart Commerce in Singapore.",
        captions: [
            {
                title: "CapitaLand x Shopee 11.11 campaign to drive sales, traffic and engagement for six CapitaLand malls through gamification"
            },
            {
                title: "CapitaLand’s IMM outlet mall to debut as Shopee’s first virtual shopping mall from Singapore"
            },
            {
                title: "These are efforts under the Emerging Stronger Taskforce’s Alliance for Action on Facilitating Smart Commerce in Singapore"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/26102020"
    },
    {
        thumbnail: "youthsurvey",
        date: "Oct 19, 2020",
        tag: "sea",
        title: "Singapore’s youth readily embraced technology to adapt to COVID-19 challenges",
        paragraph: "Sea Insights, Sea’s research and public policy unit, has launched its latest report, “Singapore Youth Report: Transformation for the post-pandemic world; Turning crisis into opportunity.” Unveiled together with the Asia Internet Coalition, the report surveyed 2,000 Singapore youths to examine how they have adapted to the challenges brought about by COVID-19.",
        captions: [
            {
                title: "Alvin Tan, Minister of State for MCCY and MTI, together with Dr Santitarn Sathirathai, Sea’s Group Chief Economist, discussed significance of findings at webinar hosted by the Asia Internet Coalition"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/19102020"
    },
    {
        thumbnail: "shopee-visa",
        date: "Oct 1, 2020",
        tag: "shopee",
        title: "Shopee and Visa sign five-year strategic partnership",
        paragraph: "Shopee and Visa have announced a five-year regional strategic partnership that will encourage greater participation in Southeast Asia’s digital economy. As part of the regional agreement, Shopee and Visa will partner to incentivize MSMEs to digitalize their business and offer shoppers a more convenient and rewarding experience.",
        captions: [
            {
                title: "Alvin Tan, Minister of State for MCCY and MTI, together with Dr Santitarn Sathirathai, Sea’s Group Chief Economist, discussed significance of findings at webinar hosted by the Asia Internet Coalition"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/01102020"
    },
    {
        thumbnail: "shopee-premium",
        date: "Sep 28, 2020",
        tag: "shopee",
        title: "Shopee launches Shopee Premium",
        paragraph: "Shopee has launched Shopee Premium, an exclusive destination created for premium brands to reach and provide digital shoppers with direct access to authentic premium products. Shopee Premium helps brands to amplify their visibility and allows more room for immersive brand storytelling that closely reflects their brand ethos, heritage, and identity.",
        captions: [
            {
                title: "Dedicated in-app ecosystem will offer premium brands including Calvin Klein, Sulwhasoo, and L'Occitane more opportunities for immersive brand storytelling"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/28092020"
    },
    {
        thumbnail: "shopee-agency",
        date: "Sep 21, 2020",
        tag: "shopee",
        title: "Shopee launches region’s first and largest media agencies partnership program",
        paragraph: "Shopee has announced the launch of its Shopee Media Agencies Partner Program (SMAP) comprising five leading global media agencies. This strategic program is the region’s first and largest, and will empower media agencies with in-depth e-commerce knowledge and skills to help brands and sellers scale and succeed online.",
        captions: [
            {
                title: "Shopee will empower five media agencies with skills and expertise to boost presence of brands on e-commerce"
            },
        ],
        attachment: [
            {
                file: "Download this Press Release"
            },

        ],
        link: "/21092020"
    }
]

const quarterly = [
    {
        year: "2021",
        quarter: "q2",
        month: "june"
    },
    {
        year: "2021",
        quarter: "q1",
        month: "march"
    },
    {
        year: "2020",
        quarter: "q4",
        month: "december"
    },
    {
        year: "2020",
        quarter: "q3",
        month: "september"
    },
    {
        year: "2020",
        quarter: "q2",
        month: "june"
    },
    {
        year: "2020",
        quarter: "q1",
        month: "march"
    },
    {
        year: "2019",
        quarter: "q4",
        month: "december"
    },
    {
        year: "2019",
        quarter: "q3",
        month: "september"
    },
    {
        year: "2019",
        quarter: "q2",
        month: "june"
    },
    {
        year: "2019",
        quarter: "q1",
        month: "march"
    },
    {
        year: "2018",
        quarter: "q4",
        month: "december"
    },
    {
        year: "2018",
        quarter: "q3",
        month: "september"
    },
    {
        year: "2018",
        quarter: "q2",
        month: "june"
    },
    {
        year: "2018",
        quarter: "q1",
        month: "march"
    },
    {
        year: "2017",
        quarter: "q4",
        month: "december"
    },
    {
        year: "2017",
        quarter: "q3",
        month: "september"
    },
]

const news = [
    {
        date: "Sep 10, 2021",
        title: "Sea Limited Announces Pricing of Offerings of ADSs and Convertible Notes",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) announced today that it priced its registered underwritten public offering (the “ADS Offering”) of 11,000,000 American Depositary Shares (“ADSs”), each representing one Class A ordinary share of the Company, at a price of US$318.00 per ADS, and its registered underwritten public offering (the “Notes Offering” and, together with the ADS Offering, the “Offerings”) of US$2,500,000,000 aggregate principal amount of its 0.25% convertible senior notes due 2026 (the “Notes”)."
    },
    {
        date: "Sep 9, 2021",
        title: "Sea Limited Announces Proposed Offering of ADSs and Convertible Notes",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) announced today a proposed registered underwritten public offering (the “ADS Offering”) of American Depositary Shares (“ADSs”), each representing one Class A ordinary share, par value $0.0005 per share, of the Company, and a proposed registered underwritten public offering (the “Notes Offering” and, together with the ADS Offering, the “Offerings”) by the Company of its convertible senior notes due 2026 (the “Notes”).."
    },
    {
        date: "Aug 17, 2021",
        title: "Sea Limited Reports Second Quarter 2021 Results",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) today announced its financial results for the quarter ended June 30, 2021."
    },
    {
        date: "Aug 3, 2021",
        title: "Sea Limited to Report Second Quarter 2021 Results",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) plans to announce its second quarter 2021 results before the U.S. market opens on August 17, 2021, U.S. Eastern Time."
    },
    {
        date: "May 18, 2021",
        title: "Sea Limited Reports First Quarter 2021 Results",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) today announced its financial results for the quarter ended March 31, 2021."
    },
    {
        date: "May 4, 2021",
        title: "Sea Limited to Report First Quarter 2021 Results",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) plans to announce its first quarter 2021 results before the U.S. market opens on May 18, 2021, U.S. Eastern Time."
    },
    {
        date: "Apr 17, 2021",
        title: "Sea Limited Files Annual Report on Form 20-F for Year Ended December 31, 2020",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) today announced the filing of its annual report on Form 20-F for the fiscal year ended December 31, 2020 with the U.S. Securities and Exchange Commission (the “SEC”)."
    },
    {
        date: "Mar 2, 2021",
        title: "Sea Limited Reports Fourth Quarter and Full Year 2020 Results",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) today announced its financial results for the fourth quarter and full year ended December 31, 2020."
    },
    {
        date: "Feb 16, 2021",
        title: "Sea Limited to Report Fourth Quarter and Full Year 2020 Results ",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) announced today that it priced its registered underwritten public offering (the “ADS Offering”) of 11,000,000 American Depositary Shares (“ADSs”), each representing one Class A ordinary share of the Company, at a price of US$318.00 per ADS, and its registered underwritten public offering (the “Notes Offering” and, together with the ADS Offering, the “Offerings”) of US$2,500,000,000 aggregate principal amount of its 0.25% convertible senior notes due 2026 (the “Notes”)."
    },
    {
        date: "Dec 11, 2020",
        title: "Sea Limited Announces Upsize and Pricing of Offering of American Depositary Shares",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) today announced the pricing of 13,200,000 American Depositary Shares (“ADSs”), each representing one Class A ordinary share of the Company, at US$195.00 per ADS in an underwritten public offering. "
    },
    {
        date: "Dec 10, 2020",
        title: "Sea Limited Announces Proposed Offering of American Depositary Shares",
        paragraph: "Sea Limited (NYSE: SE) (“Sea” or the “Company”) today announced that it proposes to offer 11,000,000 American Depositary Shares (“ADSs”), each representing one Class A ordinary share of the Company, in an underwritten public offering. "
    },
]

const reports = [
    {
        title: "FY 2020 Annual Report"
    },
    {
        title: "FY 2019 Annual Report"
    },
    {
        title: "FY 2018 Annual Report"
    },
]

const footer = [
    {
        name: "Company",
        menu: [
            {
                name: "About Us",
                link: "/about/aboutus"
            },
            {
                name: "Our Leadership",
                link: "/about/ourleadership"
            },
            {
                name: "Careers",
                link: "/#"
            }
        ]
    },
    {
        name: "Product & Services",
        menu: [
            {
                name: "Garena",
                link: "/#"
            },
            {
                name: "Shopee",
                link: "/#"
            },
            {
                name: "SeaMoney",
                link: "/#"
            }
        ]
    },
    {
        name: "Useful Info",
        menu: [
            {
                name: "Investor Relations",
                link: "/#"
            },
            {
                name: "Sustainability",
                link: "/#"
            },
            {
                name: "Media",
                link: "/#"
            },
            {
                name: "Contact Us",
                link: "/#"
            },
            {
                name: "Security",
                link: "/#"
            }
        ]
    }

]

export { nav, products, missions, leaders, updates, quarterly, news, reports, footer }
