const api: any = {
  openapi: '3.0.1',
  info: {
    title: 'VinzApp',
    description: 'Backend for the Vinzentinum App',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://185.234.72.120:18000'
    }
  ],
  paths: {
    '/todaysTimetable': {
      post: {
        description: 'Auto generated using Swagger Inspector',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  day: {
                    type: 'string'
                  }
                }
              },
              examples: {
                '0': {
                  value: '{\n    "day": "0"\n}'
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Returns an array with the timeslices',
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'object',
                  properties: {
                    array: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/timeSlice'
                      }
                    }
                  }
                },
                examples: {
                    '0': {
                        value: '[\n    {\n        "day": 0,\n        "starttime": "13:20",\n        "endtime": "13:40",\n        "name": "Mittagessen",\n        "priority": 0\n    },\n    {\n        "day": 0,\n        "starttime": "19:30",\n        "endtime": "22:00",\n        "name": "Freizeit",\n        "priority": 0\n    }...\n]'
                    }
                }
              }
            }
          }
        },
        servers: [
          {
            url: 'http://185.234.72.120:18000'
          }
        ]
      },
      servers: [
        {
          url: 'http://185.234.72.120:18000'
        }
      ]
    },
    '/nextMeal': {
      post: {
        description: 'Get the meals of the supplied date as an array',
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  date: {
                    type: 'string'
                  }
                }
              },
              examples: {
                '0': {
                  value: '{\n    "date": "01.09.2020"\n}'
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Returns an array with the meals of the day',
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/meal'
                  }
                },
                examples: {
                    '0': {
                        value: '[\n    {\n        "date": "01.09.2020",\n        "time": 1,\n        "meal": "Schnitzel mit Pommes; Veggie-shit; Halbgefrorenes;"\n    },\n    {\n        "date": "01.09.2020",\n        "time": 2,\n        "meal": "test"\n    }\n]'
                    }
                }
              }
            }
          }
        },
        servers: [
          {
            url: 'http://185.234.72.120:18000'
          }
        ]
      },
      servers: [
        {
          url: 'http://185.234.72.120:18000'
        }
      ]
    },
    '/getEvents': {
      get: {
        description: 'Returns all the events',
        responses: {
          '200': {
            description: 'Successful response',
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'array',
                  items: {
                      $ref: '#/components/schemas/event'
                  }
                },
                examples: {
                    '0': {
                        value: '[\n    {\n        "expiration": "20.09.2020",\n        "text": "Messe ist um 24:00"\n    },\n    {\n        "expiration": "01.09.2020",\n        "text": "Ausgang bis um 24:00"\n    }\n]'
                    }
                }
              }
            }
          }
        },
        servers: [
          {
            url: 'http://185.234.72.120:18000'
          }
        ]
      },
      servers: [
        {
          url: 'http://185.234.72.120:18000'
        }
      ]
    },
    '/createEvent': {
      post: {
        description: 'Auto generated using Swagger Inspector',
        parameters: [
          {
            name: 'expiration',
            in: 'body',
            description: 'Expiration date on which the event will be removed',
            required: true,
            type: 'string',
            collectionFormat: "multi"
          }
        ],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                  $ref: '#/components/schemas/event'
              },
              examples: {
                '0': {
                  value: '{\n    "expiration": "01.09.2020",\n    "text": "Ausgang bis um 24:00"\n}'
                }
              }
            }
          }
        },
        responses: {
          '200': {
            description: 'Event successfully created',
          }
        },
        servers: [
          {
            url: 'http://185.234.72.120:18000'
          }
        ]
      },
      servers: [
        {
          url: 'http://185.234.72.120:18000'
        }
      ]
    }
  },
  components: {
    schemas: {
      meal: {
        type: 'object',
        properties: {
            date: {
                type: 'string',
                description: 'The date this meal is going to be served, Attention pad with zero!'
            },
            time: {
                type: 'integer',
                description: 'Tells which meal of the day it is, 1 = lunch, 2 = dinner'
            },
            meal: {
                type: 'string',
                description: 'Specifies the meal, separated by semi-colon, normal; veggie; dessert'
            }
        }
      },
      event: {
        type: 'object',
        properties: {
            expiration: {
                type: 'string',
                description: 'The expiration date, after that the event will be removed'
            },
            text: {
                type: 'string',
                description: 'Describes the event'
            }
        } 
      },
      timeSlice: {
        type: 'object',
        properties: {
          day: {
            type: 'string',
            description: 'The day of the week of this slice'
          },
          starttime: {
            type: 'string',
            description: 'The starting time of the slice'
          },
          endtime: {
            type: 'string',
            description: 'The ending time of the slice'
          },
          name: {
            type: 'string',
            description: 'The name of the slice'
          },
          priority: {
            type: 'integer',
            description: 'Number with the slice priority'
          }
        },
        description: 'timeSlice in the day (Studierzeit, Ausgang, etc...)'
      }
    }
  }
};

export default api;