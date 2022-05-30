import * as actions from './actionTypes';

const initialState = {
  
  questionLoading: false,
  productsFetching: false,
  products: [],
  testss: [
    {
      id: 1,
      name: 'Programming test',
    },
    {
      id: 2,
      name: 'Psychology test',
    }
  ],
  questions: [
    {
      testId: 1,
      id: '1',
      name: 'Which languages do you study?',
      answers: [
        {
          name: 'HTML',
          correct: false, 
        },
        {
          name: 'JS',
          correct: true,
        },
        {
          name: 'CSS',
          correct: false,
        }, 
        {
          name: 'Java',
          correct: false,
        },
      ]
    },
    {
      id: '2',
      name: 'What is your name?',
      answers: [
        {
          name: 'HTML',
          correct: false, 
        },
        {
          name: 'JS',
          correct: true,
        },
        {
          name: 'CSS',
          correct: false,
        }, 
        {
          name: 'Java',
          correct: false,
        },
      ]
    }
  ],

  tests: [{
    id: '1',
    testName: 'Programming test',
    questions: [
      {
        id: '1',
        name: 'Which languages do you study?',
        answers: [
          {
            name: 'HTML',
            correct: false, 
          },
          {
            name: 'JS',
            correct: true,
          },
          {
            name: 'CSS',
            correct: false,
          }, 
          {
            name: 'Java',
            correct: false,
          },
        ]

      },
      {
        id: '2',
        name: 'What is your name?',
        answers: [
          {
            name: 'HTML',
            correct: false, 
          },
          {
            name: 'JS',
            correct: true,
          },
          {
            name: 'CSS',
            correct: false,
          }, 
          {
            name: 'Java',
            correct: false,
          },
        ]

      }
    ]
  },

  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.RESET_STATE:
      return initialState
      
    case actions.QUESTION_ADD:
      return {
        ...state,
        questions: [...state.questions, action.payload]
      };
    case actions.QUESTION_REMOVE:
      return {
        ...state,
        questions: state.questions.filter(q => action.payload.id !== q.id)
      };

    case actions.FETCH_PRODUCTS:
      return {
        ...state,
        productsFetching: true
      };

    case actions.RECEIVE_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        productsFetching: false
      };

    case actions.CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
  

    default:
      return state;
  }
}