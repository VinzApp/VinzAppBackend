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
                  type: 'string'
                },
                examples: {}
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
        description: 'Auto generated using Swagger Inspector',
        responses: {
          '200': {
            description: 'Auto generated using Swagger Inspector',
            content: {
              'application/json; charset=utf-8': {
                schema: {
                  type: 'string'
                },
                examples: {}
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
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  expiration: {
                    type: 'string'
                  },
                  text: {
                    type: 'string'
                  }
                }
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
            description: 'Auto generated using Swagger Inspector',
            content: {
              'text/plain; charset=utf-8': {
                schema: {
                  type: 'string'
                },
                examples: {}
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
    }
  },
  components: {
    schemas: {
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