let data = [
  {
    firstName:"Joshua",
    lastName:"Neves",
    handle:"awesomeGuy",
    password:"123",
    description: "I'm a Cool Guy just looking to shine",
    following:[
      "okGuy",
      "goodGuy",
    ],
    tweeps:[
      {
        authorHandle:"awesomeGuy",
        timestamp:new Date(),
        tweepContent:"Hello World",
        comments:[
          {
            commentContent:"Great tweep",
            authorHandle:"okGuy",
            timestamp:new Date
          },
          {
            commentContent:"Great tweep",
            authorHandle:"goodGuy",
            timestamp:new Date
          }
        ]

      }
    ]
  },
  {
    firstName:"Noah",
    lastName:"Clark",
    password:"123",
    handle:"okGuy",
    description:"I love coding!",
    following:['goodGuy'],
    tweeps:[
      {
        authorHandle:"okGuy",
        timestamp:new Date(),
        tweepContent:"Hello World",
        comments:[
          {
            commentContent:"Great tweep",
            authorHandle:"goodGuy",
            timestamp:new Date
          },
          {
            commentContent:"Great tweep",
            authorHandle:"goodGuy",
            timestamp:new Date
          }
        ]

      },
      {
        authorHandle:"okGuy",
        timestamp:new Date(), tweepContent:"Hello World Part 2",
        comments:[
          {
            commentContent:"Great tweep",
            authorHandle:"goodGuy",
            timestamp:new Date
          },
          {
            commentContent:"Great tweep",
            authorHandle:"goodGuy",
            timestamp:new Date
          }
        ]

      }
    ]
  },
  {
    firstName:"Jenna",
    lastName:"Dean",
    handle:"goodGuy",
    password:"123",
    following:[],
    description: "I'm the incarnation of happiness and joy",
    tweeps:[
      {
        authorHandle:"goodGuy",
        timestamp:new Date(), tweepContent:"Hello World",
        comments:[
          {
            commentContent:"Great tweep",
            authorHandle:"okGuy",
            timestamp:new Date,

          },
          {
            commentContent:"Great tweep",
            authorHandle:"okGuy",
            timestamp:new Date
          }
        ]

      },
      {
        authorHandle:"goodGuy",
        timestamp:new Date(), tweepContent:"Hello World For Real",
        comments:[
          {
            commentContent:"Great tweep",
            authorHandle:"okGuy",
            timestamp:new Date
          },
          {
            commentContent:"Great tweep",
            authorHandle:"okGuy",
            timestamp:new Date
          }
        ]

      },
      {
        authorHandle:"goodGuy",
        timestamp:new Date(), tweepContent:"Hello World For Show",
        comments:[
          {
            commentContent:"Great tweep",
            authorHandle:"okGuy",
            timestamp:new Date
          },
          {
            commentContent:"Great tweep",
            authorHandle:"okGuy",
            timestamp:new Date
          }
        ]

      }
    ]
  }
];

module.exports = data;
