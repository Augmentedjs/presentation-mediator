window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "augmented.j",
          "develop",
          "index",
          "next",
          "present",
          "readm",
          "simpli"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "Colleague.html": [
          "child",
          "class",
          "colleagu",
          "commun",
          "mediat",
          "through",
          "view",
          "view.th"
        ],
        "Colleague.html#mediator": [
          "colleague#medi",
          "mediat",
          "member"
        ],
        "Colleague.html#setMediatorMessageQueue": [
          "colleagu",
          "colleague#setmediatormessagequeu",
          "function",
          "mediat",
          "set",
          "setmediatormessagequeu"
        ],
        "Colleague.html#removeMediatorMessageQueue": [
          "colleagu",
          "colleague#removemediatormessagequeu",
          "function",
          "mediat",
          "remov",
          "removemediatormessagequeu"
        ],
        "Colleague.html#sendMessage": [
          "colleague#sendmessag",
          "data",
          "function",
          "mediator'",
          "messag",
          "queue",
          "send",
          "sendmessag"
        ],
        "Presentation.Mediator.html": [
          "achiev",
          "between",
          "class",
          "colleagu",
          "commun",
          "communicatewith",
          "coupl",
          "defin",
          "each",
          "have",
          "interfac",
          "mediat",
          "object",
          "patternth",
          "presentation.medi",
          "view",
          "views.loos"
        ],
        "Presentation.Mediator.html#subscriptions": [
          "mediator#subscript",
          "member",
          "presentation.mediator#subscript",
          "subscript"
        ],
        "Presentation.Mediator.html#defaultChannel": [
          "_.channel",
          "channelconveni",
          "default",
          "defaultchannel",
          "mediator#defaultchannel",
          "member",
          "method",
          "null",
          "presentation.mediator#defaultchannel"
        ],
        "Presentation.Mediator.html#defaultIdentifier": [
          "default",
          "defaultidentifi",
          "identifi",
          "mediator#defaultidentifi",
          "member",
          "presentation.mediator#defaultidentifi"
        ],
        "Presentation.Mediator.html#mediator": [
          "mediat",
          "mediator#medi",
          "member",
          "presentation.mediator#medi"
        ],
        "Presentation.Mediator.html#channels": [
          "channel",
          "mediator#channel",
          "member",
          "presentation.mediator#channel"
        ],
        "Presentation.Mediator.html#delegateEvents": [
          "delegateev",
          "event",
          "extend",
          "function",
          "mediator#delegateev",
          "presentation.mediator#delegateev",
          "set",
          "subscript"
        ],
        "Presentation.Mediator.html#undelegateEvents": [
          "event",
          "extend",
          "function",
          "mediator#undelegateev",
          "presentation.mediator#undelegateev",
          "subscript",
          "undelegateev",
          "unset"
        ],
        "Presentation.Mediator.html#unsetSubscriptions": [
          "each",
          "function",
          "mediator#unsetsubscript",
          "presentation.mediator#unsetsubscript",
          "subscript",
          "unsetsubscript",
          "unsubscrib"
        ],
        "Presentation.Mediator.html#observeColleague": [
          "add",
          "callback",
          "channel",
          "colleagu",
          "function",
          "identifi",
          "mediator#observecolleagu",
          "observ",
          "observecolleagu",
          "presentation.mediator#observecolleagu",
          "view"
        ],
        "Presentation.Mediator.html#observeColleagueAndTrigger": [
          "add",
          "auto",
          "channel",
          "colleagu",
          "event",
          "function",
          "identifi",
          "mediator#observecolleagueandtrigg",
          "observ",
          "observecolleagueandtrigg",
          "presentation.mediator#observecolleagueandtrigg",
          "trigger",
          "view"
        ],
        "Presentation.Mediator.html#dismissColleague": [
          "callback",
          "channel",
          "colleagu",
          "dismiss",
          "dismisscolleagu",
          "function",
          "identifi",
          "mediator#dismisscolleagu",
          "presentation.mediator#dismisscolleagu",
          "remov",
          "view"
        ],
        "Presentation.Mediator.html#dismissColleagueTrigger": [
          "auto",
          "channel",
          "colleagu",
          "dismiss",
          "dismisscolleaguetrigg",
          "function",
          "identifi",
          "mediator#dismisscolleaguetrigg",
          "presentation.mediator#dismisscolleaguetrigg",
          "remov",
          "trigger",
          "view"
        ],
        "Presentation.Mediator.html#subscribe": [
          "callback",
          "channel",
          "context",
          "function",
          "identifi",
          "mediator#subscrib",
          "onc",
          "presentation.mediator#subscrib",
          "subscrib"
        ],
        "Presentation.Mediator.html#publish": [
          "callback",
          "channel",
          "function",
          "mediator#publish",
          "n",
          "presentation.mediator#publish",
          "publish",
          "trigger"
        ],
        "Presentation.Mediator.html#unsubscribe": [
          "callback",
          "cancel",
          "channel",
          "context",
          "function",
          "identifi",
          "mediator#unsubscrib",
          "presentation.mediator#unsubscrib",
          "subscript",
          "unsubscrib"
        ],
        "Presentation.Mediator.html#subscribeOnce": [
          "channel",
          "context",
          "event",
          "function",
          "identifi",
          "mediator#subscribeonc",
          "on",
          "presentation.mediator#subscribeonc",
          "subscrib",
          "subscribeonc",
          "subscript"
        ],
        "Presentation.Mediator.html#getColleagues": [
          "channel",
          "colleagu",
          "function",
          "getcolleagu",
          "mediator#getcolleagu",
          "presentation.mediator#getcolleagu"
        ],
        "Presentation.Mediator.html#getChannel": [
          "channel",
          "function",
          "getchannel",
          "mediator#getchannel",
          "presentation.mediator#getchannel",
          "specif"
        ],
        "Presentation.Mediator.html#sendMessage": [
          "data",
          "function",
          "mediator#sendmessag",
          "mediator'",
          "messag",
          "presentation.mediator#sendmessag",
          "queue",
          "send",
          "sendmessag"
        ],
        "Presentation.Mediator.html#setMediatorMessageQueue": [
          "colleagu",
          "function",
          "mediat",
          "mediator#setmediatormessagequeu",
          "presentation.mediator#setmediatormessagequeu",
          "set",
          "setmediatormessagequeu"
        ],
        "Presentation.Mediator.html#removeMediatorMessageQueue": [
          "colleagu",
          "function",
          "mediat",
          "mediator#removemediatormessagequeu",
          "presentation.mediator#removemediatormessagequeu",
          "remov",
          "removemediatormessagequeu"
        ]
      },
      "length": 30
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "a": {
          "docs": {},
          "u": {
            "docs": {},
            "g": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "j": {
                              "docs": {
                                "index.html": {
                                  "ref": "index.html",
                                  "tf": 214
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "o": {
                "docs": {
                  "Presentation.Mediator.html#observeColleagueAndTrigger": {
                    "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                    "tf": 5
                  },
                  "Presentation.Mediator.html#dismissColleagueTrigger": {
                    "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                    "tf": 6.25
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "h": {
              "docs": {},
              "i": {
                "docs": {},
                "e": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 2.1739130434782608
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "d": {
              "docs": {
                "Presentation.Mediator.html#observeColleague": {
                  "ref": "Presentation.Mediator.html#observeColleague",
                  "tf": 7.142857142857142
                },
                "Presentation.Mediator.html#observeColleagueAndTrigger": {
                  "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                  "tf": 5
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "e": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 14
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "Presentation.Mediator.html": {
                      "ref": "Presentation.Mediator.html",
                      "tf": 2.1739130434782608
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.Mediator.html#defaultChannel": {
                          "ref": "Presentation.Mediator.html#defaultChannel",
                          "tf": 10
                        },
                        "Presentation.Mediator.html#defaultIdentifier": {
                          "ref": "Presentation.Mediator.html#defaultIdentifier",
                          "tf": 25
                        }
                      },
                      "c": {
                        "docs": {},
                        "h": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {
                                      "Presentation.Mediator.html#defaultChannel": {
                                        "ref": "Presentation.Mediator.html#defaultChannel",
                                        "tf": 700
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "i": {
                                      "docs": {
                                        "Presentation.Mediator.html#defaultIdentifier": {
                                          "ref": "Presentation.Mediator.html#defaultIdentifier",
                                          "tf": 700
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "g": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "v": {
                            "docs": {
                              "Presentation.Mediator.html#delegateEvents": {
                                "ref": "Presentation.Mediator.html#delegateEvents",
                                "tf": 662.5
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "Colleague.html#sendMessage": {
                    "ref": "Colleague.html#sendMessage",
                    "tf": 33.33333333333333
                  },
                  "Presentation.Mediator.html#sendMessage": {
                    "ref": "Presentation.Mediator.html#sendMessage",
                    "tf": 33.33333333333333
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Presentation.Mediator.html#dismissColleague": {
                          "ref": "Presentation.Mediator.html#dismissColleague",
                          "tf": 8.333333333333332
                        },
                        "Presentation.Mediator.html#dismissColleagueTrigger": {
                          "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                          "tf": 6.25
                        }
                      },
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "u": {
                                      "docs": {
                                        "Presentation.Mediator.html#dismissColleague": {
                                          "ref": "Presentation.Mediator.html#dismissColleague",
                                          "tf": 620
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {
                                                    "Presentation.Mediator.html#dismissColleagueTrigger": {
                                                      "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                                                      "tf": 625
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "Presentation.Mediator.html": {
                            "ref": "Presentation.Mediator.html",
                            "tf": 2.1739130434782608
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Presentation.Mediator.html#defaultIdentifier": {
                            "ref": "Presentation.Mediator.html#defaultIdentifier",
                            "tf": 25
                          },
                          "Presentation.Mediator.html#observeColleague": {
                            "ref": "Presentation.Mediator.html#observeColleague",
                            "tf": 20
                          },
                          "Presentation.Mediator.html#observeColleagueAndTrigger": {
                            "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                            "tf": 25
                          },
                          "Presentation.Mediator.html#dismissColleague": {
                            "ref": "Presentation.Mediator.html#dismissColleague",
                            "tf": 20
                          },
                          "Presentation.Mediator.html#dismissColleagueTrigger": {
                            "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                            "tf": 25
                          },
                          "Presentation.Mediator.html#subscribe": {
                            "ref": "Presentation.Mediator.html#subscribe",
                            "tf": 16.666666666666664
                          },
                          "Presentation.Mediator.html#unsubscribe": {
                            "ref": "Presentation.Mediator.html#unsubscribe",
                            "tf": 20
                          },
                          "Presentation.Mediator.html#subscribeOnce": {
                            "ref": "Presentation.Mediator.html#subscribeOnce",
                            "tf": 20
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {
            "Presentation.Mediator.html#publish": {
              "ref": "Presentation.Mediator.html#publish",
              "tf": 33.33333333333333
            }
          },
          "e": {
            "docs": {},
            "x": {
              "docs": {},
              "t": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 214
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "Presentation.Mediator.html#defaultChannel": {
                    "ref": "Presentation.Mediator.html#defaultChannel",
                    "tf": 10
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "s": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 214
                        }
                      },
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                ".": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "i": {
                                          "docs": {
                                            "Presentation.Mediator.html": {
                                              "ref": "Presentation.Mediator.html",
                                              "tf": 1150
                                            }
                                          },
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "#": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "b": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "p": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {
                                                                        "Presentation.Mediator.html#subscriptions": {
                                                                          "ref": "Presentation.Mediator.html#subscriptions",
                                                                          "tf": 1100
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "b": {
                                                                    "docs": {
                                                                      "Presentation.Mediator.html#subscribe": {
                                                                        "ref": "Presentation.Mediator.html#subscribe",
                                                                        "tf": 1100
                                                                      }
                                                                    },
                                                                    "e": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "n": {
                                                                          "docs": {},
                                                                          "c": {
                                                                            "docs": {
                                                                              "Presentation.Mediator.html#subscribeOnce": {
                                                                                "ref": "Presentation.Mediator.html#subscribeOnce",
                                                                                "tf": 1100
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "e": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {},
                                                            "m": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {
                                                                          "Presentation.Mediator.html#sendMessage": {
                                                                            "ref": "Presentation.Mediator.html#sendMessage",
                                                                            "tf": 1100
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "t": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "d": {
                                                                "docs": {},
                                                                "i": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "m": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "s": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "a": {
                                                                                    "docs": {},
                                                                                    "g": {
                                                                                      "docs": {},
                                                                                      "e": {
                                                                                        "docs": {},
                                                                                        "q": {
                                                                                          "docs": {},
                                                                                          "u": {
                                                                                            "docs": {},
                                                                                            "e": {
                                                                                              "docs": {},
                                                                                              "u": {
                                                                                                "docs": {
                                                                                                  "Presentation.Mediator.html#setMediatorMessageQueue": {
                                                                                                    "ref": "Presentation.Mediator.html#setMediatorMessageQueue",
                                                                                                    "tf": 1100
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "d": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "f": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "u": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "h": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "n": {
                                                                          "docs": {},
                                                                          "n": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "l": {
                                                                                "docs": {
                                                                                  "Presentation.Mediator.html#defaultChannel": {
                                                                                    "ref": "Presentation.Mediator.html#defaultChannel",
                                                                                    "tf": 1100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                  "i": {
                                                                    "docs": {},
                                                                    "d": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "n": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            "i": {
                                                                              "docs": {},
                                                                              "f": {
                                                                                "docs": {},
                                                                                "i": {
                                                                                  "docs": {
                                                                                    "Presentation.Mediator.html#defaultIdentifier": {
                                                                                      "ref": "Presentation.Mediator.html#defaultIdentifier",
                                                                                      "tf": 1100
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "l": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "v": {
                                                                        "docs": {
                                                                          "Presentation.Mediator.html#delegateEvents": {
                                                                            "ref": "Presentation.Mediator.html#delegateEvents",
                                                                            "tf": 1100
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "i": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {},
                                                                        "l": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "g": {
                                                                                "docs": {},
                                                                                "u": {
                                                                                  "docs": {
                                                                                    "Presentation.Mediator.html#dismissColleague": {
                                                                                      "ref": "Presentation.Mediator.html#dismissColleague",
                                                                                      "tf": 1100
                                                                                    }
                                                                                  },
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "t": {
                                                                                      "docs": {},
                                                                                      "r": {
                                                                                        "docs": {},
                                                                                        "i": {
                                                                                          "docs": {},
                                                                                          "g": {
                                                                                            "docs": {},
                                                                                            "g": {
                                                                                              "docs": {
                                                                                                "Presentation.Mediator.html#dismissColleagueTrigger": {
                                                                                                  "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                                                                                                  "tf": 1100
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "m": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {
                                                              "Presentation.Mediator.html#mediator": {
                                                                "ref": "Presentation.Mediator.html#mediator",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "c": {
                                                      "docs": {},
                                                      "h": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "l": {
                                                                  "docs": {
                                                                    "Presentation.Mediator.html#channels": {
                                                                      "ref": "Presentation.Mediator.html#channels",
                                                                      "tf": 1100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "u": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "l": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "v": {
                                                                            "docs": {
                                                                              "Presentation.Mediator.html#undelegateEvents": {
                                                                                "ref": "Presentation.Mediator.html#undelegateEvents",
                                                                                "tf": 1100
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        },
                                                        "s": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "u": {
                                                                  "docs": {},
                                                                  "b": {
                                                                    "docs": {},
                                                                    "s": {
                                                                      "docs": {},
                                                                      "c": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "i": {
                                                                            "docs": {},
                                                                            "p": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {
                                                                                  "Presentation.Mediator.html#unsetSubscriptions": {
                                                                                    "ref": "Presentation.Mediator.html#unsetSubscriptions",
                                                                                    "tf": 1100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "u": {
                                                            "docs": {},
                                                            "b": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "c": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "b": {
                                                                        "docs": {
                                                                          "Presentation.Mediator.html#unsubscribe": {
                                                                            "ref": "Presentation.Mediator.html#unsubscribe",
                                                                            "tf": 1100
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "o": {
                                                      "docs": {},
                                                      "b": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "v": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {},
                                                                        "l": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "a": {
                                                                              "docs": {},
                                                                              "g": {
                                                                                "docs": {},
                                                                                "u": {
                                                                                  "docs": {
                                                                                    "Presentation.Mediator.html#observeColleague": {
                                                                                      "ref": "Presentation.Mediator.html#observeColleague",
                                                                                      "tf": 1100
                                                                                    }
                                                                                  },
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "a": {
                                                                                      "docs": {},
                                                                                      "n": {
                                                                                        "docs": {},
                                                                                        "d": {
                                                                                          "docs": {},
                                                                                          "t": {
                                                                                            "docs": {},
                                                                                            "r": {
                                                                                              "docs": {},
                                                                                              "i": {
                                                                                                "docs": {},
                                                                                                "g": {
                                                                                                  "docs": {},
                                                                                                  "g": {
                                                                                                    "docs": {
                                                                                                      "Presentation.Mediator.html#observeColleagueAndTrigger": {
                                                                                                        "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                                                                                                        "tf": 1100
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "p": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "b": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "h": {
                                                                  "docs": {
                                                                    "Presentation.Mediator.html#publish": {
                                                                      "ref": "Presentation.Mediator.html#publish",
                                                                      "tf": 1100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "g": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "l": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {},
                                                                        "u": {
                                                                          "docs": {
                                                                            "Presentation.Mediator.html#getColleagues": {
                                                                              "ref": "Presentation.Mediator.html#getColleagues",
                                                                              "tf": 1100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "h": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "n": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "l": {
                                                                        "docs": {
                                                                          "Presentation.Mediator.html#getChannel": {
                                                                            "ref": "Presentation.Mediator.html#getChannel",
                                                                            "tf": 1100
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "r": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "v": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "m": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "d": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            "o": {
                                                                              "docs": {},
                                                                              "r": {
                                                                                "docs": {},
                                                                                "m": {
                                                                                  "docs": {},
                                                                                  "e": {
                                                                                    "docs": {},
                                                                                    "s": {
                                                                                      "docs": {},
                                                                                      "s": {
                                                                                        "docs": {},
                                                                                        "a": {
                                                                                          "docs": {},
                                                                                          "g": {
                                                                                            "docs": {},
                                                                                            "e": {
                                                                                              "docs": {},
                                                                                              "q": {
                                                                                                "docs": {},
                                                                                                "u": {
                                                                                                  "docs": {},
                                                                                                  "e": {
                                                                                                    "docs": {},
                                                                                                    "u": {
                                                                                                      "docs": {
                                                                                                        "Presentation.Mediator.html#removeMediatorMessageQueue": {
                                                                                                          "ref": "Presentation.Mediator.html#removeMediatorMessageQueue",
                                                                                                          "tf": 1100
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "h": {
                          "docs": {
                            "Presentation.Mediator.html": {
                              "ref": "Presentation.Mediator.html",
                              "tf": 2.1739130434782608
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "Presentation.Mediator.html#publish": {
                          "ref": "Presentation.Mediator.html#publish",
                          "tf": 633.3333333333334
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "d": {
                "docs": {},
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "Colleague.html#removeMediatorMessageQueue": {
                      "ref": "Colleague.html#removeMediatorMessageQueue",
                      "tf": 16.666666666666664
                    },
                    "Presentation.Mediator.html#dismissColleague": {
                      "ref": "Presentation.Mediator.html#dismissColleague",
                      "tf": 8.333333333333332
                    },
                    "Presentation.Mediator.html#dismissColleagueTrigger": {
                      "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                      "tf": 6.25
                    },
                    "Presentation.Mediator.html#removeMediatorMessageQueue": {
                      "ref": "Presentation.Mediator.html#removeMediatorMessageQueue",
                      "tf": 16.666666666666664
                    }
                  },
                  "e": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "q": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "u": {
                                                          "docs": {
                                                            "Colleague.html#removeMediatorMessageQueue": {
                                                              "ref": "Colleague.html#removeMediatorMessageQueue",
                                                              "tf": 750
                                                            },
                                                            "Presentation.Mediator.html#removeMediatorMessageQueue": {
                                                              "ref": "Presentation.Mediator.html#removeMediatorMessageQueue",
                                                              "tf": 700
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 14
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "Colleague.html#setMediatorMessageQueue": {
                  "ref": "Colleague.html#setMediatorMessageQueue",
                  "tf": 16.666666666666664
                },
                "Presentation.Mediator.html#delegateEvents": {
                  "ref": "Presentation.Mediator.html#delegateEvents",
                  "tf": 12.5
                },
                "Presentation.Mediator.html#setMediatorMessageQueue": {
                  "ref": "Presentation.Mediator.html#setMediatorMessageQueue",
                  "tf": 16.666666666666664
                }
              },
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "q": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {
                                                      "Colleague.html#setMediatorMessageQueue": {
                                                        "ref": "Colleague.html#setMediatorMessageQueue",
                                                        "tf": 700
                                                      },
                                                      "Presentation.Mediator.html#setMediatorMessageQueue": {
                                                        "ref": "Presentation.Mediator.html#setMediatorMessageQueue",
                                                        "tf": 650
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {
                  "Colleague.html#sendMessage": {
                    "ref": "Colleague.html#sendMessage",
                    "tf": 12.5
                  },
                  "Presentation.Mediator.html#sendMessage": {
                    "ref": "Presentation.Mediator.html#sendMessage",
                    "tf": 12.5
                  }
                },
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "g": {
                            "docs": {
                              "Colleague.html#sendMessage": {
                                "ref": "Colleague.html#sendMessage",
                                "tf": 683.3333333333334
                              },
                              "Presentation.Mediator.html#sendMessage": {
                                "ref": "Presentation.Mediator.html#sendMessage",
                                "tf": 633.3333333333334
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "b": {
              "docs": {},
              "s": {
                "docs": {},
                "c": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "p": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Presentation.Mediator.html#subscriptions": {
                              "ref": "Presentation.Mediator.html#subscriptions",
                              "tf": 750
                            },
                            "Presentation.Mediator.html#delegateEvents": {
                              "ref": "Presentation.Mediator.html#delegateEvents",
                              "tf": 12.5
                            },
                            "Presentation.Mediator.html#undelegateEvents": {
                              "ref": "Presentation.Mediator.html#undelegateEvents",
                              "tf": 12.5
                            },
                            "Presentation.Mediator.html#unsetSubscriptions": {
                              "ref": "Presentation.Mediator.html#unsetSubscriptions",
                              "tf": 66.66666666666666
                            },
                            "Presentation.Mediator.html#unsubscribe": {
                              "ref": "Presentation.Mediator.html#unsubscribe",
                              "tf": 25
                            },
                            "Presentation.Mediator.html#subscribeOnce": {
                              "ref": "Presentation.Mediator.html#subscribeOnce",
                              "tf": 20
                            }
                          }
                        }
                      },
                      "b": {
                        "docs": {
                          "Presentation.Mediator.html#subscribe": {
                            "ref": "Presentation.Mediator.html#subscribe",
                            "tf": 641.6666666666666
                          },
                          "Presentation.Mediator.html#subscribeOnce": {
                            "ref": "Presentation.Mediator.html#subscribeOnce",
                            "tf": 16.666666666666664
                          }
                        },
                        "e": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "c": {
                                "docs": {
                                  "Presentation.Mediator.html#subscribeOnce": {
                                    "ref": "Presentation.Mediator.html#subscribeOnce",
                                    "tf": 620
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "Presentation.Mediator.html#getChannel": {
                        "ref": "Presentation.Mediator.html#getChannel",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "u": {
                              "docs": {
                                "Presentation.Mediator.html#getColleagues": {
                                  "ref": "Presentation.Mediator.html#getColleagues",
                                  "tf": 650
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "h": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "Presentation.Mediator.html#getChannel": {
                                "ref": "Presentation.Mediator.html#getChannel",
                                "tf": 650
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Colleague.html": {
                      "ref": "Colleague.html",
                      "tf": 110
                    },
                    "Presentation.Mediator.html": {
                      "ref": "Presentation.Mediator.html",
                      "tf": 110
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {
                    "Colleague.html": {
                      "ref": "Colleague.html",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "n": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Presentation.Mediator.html#channels": {
                          "ref": "Presentation.Mediator.html#channels",
                          "tf": 750
                        },
                        "Presentation.Mediator.html#observeColleague": {
                          "ref": "Presentation.Mediator.html#observeColleague",
                          "tf": 27.142857142857142
                        },
                        "Presentation.Mediator.html#observeColleagueAndTrigger": {
                          "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                          "tf": 30
                        },
                        "Presentation.Mediator.html#dismissColleague": {
                          "ref": "Presentation.Mediator.html#dismissColleague",
                          "tf": 28.333333333333332
                        },
                        "Presentation.Mediator.html#dismissColleagueTrigger": {
                          "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                          "tf": 31.25
                        },
                        "Presentation.Mediator.html#subscribe": {
                          "ref": "Presentation.Mediator.html#subscribe",
                          "tf": 41.666666666666664
                        },
                        "Presentation.Mediator.html#publish": {
                          "ref": "Presentation.Mediator.html#publish",
                          "tf": 49.99999999999999
                        },
                        "Presentation.Mediator.html#unsubscribe": {
                          "ref": "Presentation.Mediator.html#unsubscribe",
                          "tf": 20
                        },
                        "Presentation.Mediator.html#subscribeOnce": {
                          "ref": "Presentation.Mediator.html#subscribeOnce",
                          "tf": 20
                        },
                        "Presentation.Mediator.html#getColleagues": {
                          "ref": "Presentation.Mediator.html#getColleagues",
                          "tf": 75
                        },
                        "Presentation.Mediator.html#getChannel": {
                          "ref": "Presentation.Mediator.html#getChannel",
                          "tf": 75
                        }
                      },
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "Presentation.Mediator.html#defaultChannel": {
                                        "ref": "Presentation.Mediator.html#defaultChannel",
                                        "tf": 10
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "u": {
                        "docs": {
                          "Colleague.html": {
                            "ref": "Colleague.html",
                            "tf": 1916.6666666666667
                          },
                          "Colleague.html#setMediatorMessageQueue": {
                            "ref": "Colleague.html#setMediatorMessageQueue",
                            "tf": 16.666666666666664
                          },
                          "Colleague.html#removeMediatorMessageQueue": {
                            "ref": "Colleague.html#removeMediatorMessageQueue",
                            "tf": 16.666666666666664
                          },
                          "Presentation.Mediator.html": {
                            "ref": "Presentation.Mediator.html",
                            "tf": 6.521739130434782
                          },
                          "Presentation.Mediator.html#observeColleague": {
                            "ref": "Presentation.Mediator.html#observeColleague",
                            "tf": 34.285714285714285
                          },
                          "Presentation.Mediator.html#observeColleagueAndTrigger": {
                            "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                            "tf": 35
                          },
                          "Presentation.Mediator.html#dismissColleague": {
                            "ref": "Presentation.Mediator.html#dismissColleague",
                            "tf": 36.666666666666664
                          },
                          "Presentation.Mediator.html#dismissColleagueTrigger": {
                            "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                            "tf": 37.5
                          },
                          "Presentation.Mediator.html#getColleagues": {
                            "ref": "Presentation.Mediator.html#getColleagues",
                            "tf": 25
                          },
                          "Presentation.Mediator.html#setMediatorMessageQueue": {
                            "ref": "Presentation.Mediator.html#setMediatorMessageQueue",
                            "tf": 16.666666666666664
                          },
                          "Presentation.Mediator.html#removeMediatorMessageQueue": {
                            "ref": "Presentation.Mediator.html#removeMediatorMessageQueue",
                            "tf": 16.666666666666664
                          }
                        },
                        "e": {
                          "docs": {},
                          "#": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "Colleague.html#mediator": {
                                        "ref": "Colleague.html#mediator",
                                        "tf": 1150
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "q": {
                                                                  "docs": {},
                                                                  "u": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "u": {
                                                                        "docs": {
                                                                          "Colleague.html#setMediatorMessageQueue": {
                                                                            "ref": "Colleague.html#setMediatorMessageQueue",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "n": {
                                  "docs": {},
                                  "d": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "g": {
                                                "docs": {
                                                  "Colleague.html#sendMessage": {
                                                    "ref": "Colleague.html#sendMessage",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "r": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "v": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "q": {
                                                                        "docs": {},
                                                                        "u": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "u": {
                                                                              "docs": {
                                                                                "Colleague.html#removeMediatorMessageQueue": {
                                                                                  "ref": "Colleague.html#removeMediatorMessageQueue",
                                                                                  "tf": 1150
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "m": {
                "docs": {},
                "u": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "Colleague.html": {
                        "ref": "Colleague.html",
                        "tf": 5.555555555555555
                      },
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 2.1739130434782608
                      }
                    },
                    "i": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "w": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "h": {
                                      "docs": {
                                        "Presentation.Mediator.html": {
                                          "ref": "Presentation.Mediator.html",
                                          "tf": 2.1739130434782608
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {
                    "Presentation.Mediator.html": {
                      "ref": "Presentation.Mediator.html",
                      "tf": 2.1739130434782608
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "x": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Presentation.Mediator.html#subscribe": {
                          "ref": "Presentation.Mediator.html#subscribe",
                          "tf": 16.666666666666664
                        },
                        "Presentation.Mediator.html#unsubscribe": {
                          "ref": "Presentation.Mediator.html#unsubscribe",
                          "tf": 20
                        },
                        "Presentation.Mediator.html#subscribeOnce": {
                          "ref": "Presentation.Mediator.html#subscribeOnce",
                          "tf": 20
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "k": {
                        "docs": {
                          "Presentation.Mediator.html#observeColleague": {
                            "ref": "Presentation.Mediator.html#observeColleague",
                            "tf": 20
                          },
                          "Presentation.Mediator.html#dismissColleague": {
                            "ref": "Presentation.Mediator.html#dismissColleague",
                            "tf": 20
                          },
                          "Presentation.Mediator.html#subscribe": {
                            "ref": "Presentation.Mediator.html#subscribe",
                            "tf": 16.666666666666664
                          },
                          "Presentation.Mediator.html#publish": {
                            "ref": "Presentation.Mediator.html#publish",
                            "tf": 16.666666666666664
                          },
                          "Presentation.Mediator.html#unsubscribe": {
                            "ref": "Presentation.Mediator.html#unsubscribe",
                            "tf": 20
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Presentation.Mediator.html#unsubscribe": {
                        "ref": "Presentation.Mediator.html#unsubscribe",
                        "tf": 25
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "e": {
            "docs": {},
            "d": {
              "docs": {},
              "i": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Colleague.html": {
                        "ref": "Colleague.html",
                        "tf": 5.555555555555555
                      },
                      "Colleague.html#mediator": {
                        "ref": "Colleague.html#mediator",
                        "tf": 750
                      },
                      "Colleague.html#setMediatorMessageQueue": {
                        "ref": "Colleague.html#setMediatorMessageQueue",
                        "tf": 66.66666666666666
                      },
                      "Colleague.html#removeMediatorMessageQueue": {
                        "ref": "Colleague.html#removeMediatorMessageQueue",
                        "tf": 16.666666666666664
                      },
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 763.0434782608696
                      },
                      "Presentation.Mediator.html#mediator": {
                        "ref": "Presentation.Mediator.html#mediator",
                        "tf": 700
                      },
                      "Presentation.Mediator.html#setMediatorMessageQueue": {
                        "ref": "Presentation.Mediator.html#setMediatorMessageQueue",
                        "tf": 66.66666666666666
                      },
                      "Presentation.Mediator.html#removeMediatorMessageQueue": {
                        "ref": "Presentation.Mediator.html#removeMediatorMessageQueue",
                        "tf": 16.666666666666664
                      }
                    },
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "'": {
                          "docs": {
                            "Colleague.html#sendMessage": {
                              "ref": "Colleague.html#sendMessage",
                              "tf": 12.5
                            },
                            "Presentation.Mediator.html#sendMessage": {
                              "ref": "Presentation.Mediator.html#sendMessage",
                              "tf": 12.5
                            }
                          }
                        },
                        "#": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "Presentation.Mediator.html#subscriptions": {
                                                "ref": "Presentation.Mediator.html#subscriptions",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        },
                                        "b": {
                                          "docs": {
                                            "Presentation.Mediator.html#subscribe": {
                                              "ref": "Presentation.Mediator.html#subscribe",
                                              "tf": 100
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {
                                                    "Presentation.Mediator.html#subscribeOnce": {
                                                      "ref": "Presentation.Mediator.html#subscribeOnce",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "e": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "d": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "g": {
                                              "docs": {
                                                "Presentation.Mediator.html#sendMessage": {
                                                  "ref": "Presentation.Mediator.html#sendMessage",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "t": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "g": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "q": {
                                                                "docs": {},
                                                                "u": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "u": {
                                                                      "docs": {
                                                                        "Presentation.Mediator.html#setMediatorMessageQueue": {
                                                                          "ref": "Presentation.Mediator.html#setMediatorMessageQueue",
                                                                          "tf": 100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "d": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "f": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "h": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {
                                                        "Presentation.Mediator.html#defaultChannel": {
                                                          "ref": "Presentation.Mediator.html#defaultChannel",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "i": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {
                                                          "Presentation.Mediator.html#defaultIdentifier": {
                                                            "ref": "Presentation.Mediator.html#defaultIdentifier",
                                                            "tf": 100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "v": {
                                              "docs": {
                                                "Presentation.Mediator.html#delegateEvents": {
                                                  "ref": "Presentation.Mediator.html#delegateEvents",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {
                                                          "Presentation.Mediator.html#dismissColleague": {
                                                            "ref": "Presentation.Mediator.html#dismissColleague",
                                                            "tf": 100
                                                          }
                                                        },
                                                        "e": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "g": {
                                                                    "docs": {
                                                                      "Presentation.Mediator.html#dismissColleagueTrigger": {
                                                                        "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                                                                        "tf": 100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "m": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Presentation.Mediator.html#mediator": {
                                      "ref": "Presentation.Mediator.html#mediator",
                                      "tf": 100
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "Presentation.Mediator.html#channels": {
                                            "ref": "Presentation.Mediator.html#channels",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "u": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "v": {
                                                  "docs": {
                                                    "Presentation.Mediator.html#undelegateEvents": {
                                                      "ref": "Presentation.Mediator.html#undelegateEvents",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "s": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "u": {
                                        "docs": {},
                                        "b": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "Presentation.Mediator.html#unsetSubscriptions": {
                                                          "ref": "Presentation.Mediator.html#unsetSubscriptions",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "u": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "b": {
                                              "docs": {
                                                "Presentation.Mediator.html#unsubscribe": {
                                                  "ref": "Presentation.Mediator.html#unsubscribe",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "o": {
                            "docs": {},
                            "b": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "v": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {
                                                          "Presentation.Mediator.html#observeColleague": {
                                                            "ref": "Presentation.Mediator.html#observeColleague",
                                                            "tf": 100
                                                          }
                                                        },
                                                        "e": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "d": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {},
                                                                        "g": {
                                                                          "docs": {
                                                                            "Presentation.Mediator.html#observeColleagueAndTrigger": {
                                                                              "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                                                                              "tf": 100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "p": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "b": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "h": {
                                        "docs": {
                                          "Presentation.Mediator.html#publish": {
                                            "ref": "Presentation.Mediator.html#publish",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "g": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "u": {
                                                "docs": {
                                                  "Presentation.Mediator.html#getColleagues": {
                                                    "ref": "Presentation.Mediator.html#getColleagues",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "h": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "l": {
                                              "docs": {
                                                "Presentation.Mediator.html#getChannel": {
                                                  "ref": "Presentation.Mediator.html#getChannel",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "r": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "v": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "g": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "q": {
                                                                      "docs": {},
                                                                      "u": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "u": {
                                                                            "docs": {
                                                                              "Presentation.Mediator.html#removeMediatorMessageQueue": {
                                                                                "ref": "Presentation.Mediator.html#removeMediatorMessageQueue",
                                                                                "tf": 100
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Colleague.html#mediator": {
                        "ref": "Colleague.html#mediator",
                        "tf": 110
                      },
                      "Presentation.Mediator.html#subscriptions": {
                        "ref": "Presentation.Mediator.html#subscriptions",
                        "tf": 110
                      },
                      "Presentation.Mediator.html#defaultChannel": {
                        "ref": "Presentation.Mediator.html#defaultChannel",
                        "tf": 110
                      },
                      "Presentation.Mediator.html#defaultIdentifier": {
                        "ref": "Presentation.Mediator.html#defaultIdentifier",
                        "tf": 110
                      },
                      "Presentation.Mediator.html#mediator": {
                        "ref": "Presentation.Mediator.html#mediator",
                        "tf": 110
                      },
                      "Presentation.Mediator.html#channels": {
                        "ref": "Presentation.Mediator.html#channels",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Colleague.html#sendMessage": {
                        "ref": "Colleague.html#sendMessage",
                        "tf": 45.83333333333333
                      },
                      "Presentation.Mediator.html#sendMessage": {
                        "ref": "Presentation.Mediator.html#sendMessage",
                        "tf": 45.83333333333333
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Presentation.Mediator.html#defaultChannel": {
                        "ref": "Presentation.Mediator.html#defaultChannel",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "h": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "u": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "Colleague.html": {
                          "ref": "Colleague.html",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "i": {
              "docs": {},
              "g": {
                "docs": {},
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Presentation.Mediator.html#observeColleagueAndTrigger": {
                          "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                          "tf": 5
                        },
                        "Presentation.Mediator.html#dismissColleagueTrigger": {
                          "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                          "tf": 6.25
                        },
                        "Presentation.Mediator.html#publish": {
                          "ref": "Presentation.Mediator.html#publish",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "i": {
            "docs": {},
            "e": {
              "docs": {},
              "w": {
                "docs": {
                  "Colleague.html": {
                    "ref": "Colleague.html",
                    "tf": 5.555555555555555
                  },
                  "Presentation.Mediator.html": {
                    "ref": "Presentation.Mediator.html",
                    "tf": 2.1739130434782608
                  },
                  "Presentation.Mediator.html#observeColleague": {
                    "ref": "Presentation.Mediator.html#observeColleague",
                    "tf": 7.142857142857142
                  },
                  "Presentation.Mediator.html#observeColleagueAndTrigger": {
                    "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                    "tf": 5
                  },
                  "Presentation.Mediator.html#dismissColleague": {
                    "ref": "Presentation.Mediator.html#dismissColleague",
                    "tf": 8.333333333333332
                  },
                  "Presentation.Mediator.html#dismissColleagueTrigger": {
                    "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                    "tf": 6.25
                  }
                },
                ".": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "Colleague.html": {
                          "ref": "Colleague.html",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                },
                "s": {
                  "docs": {},
                  ".": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Presentation.Mediator.html": {
                                "ref": "Presentation.Mediator.html",
                                "tf": 2.1739130434782608
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Colleague.html#setMediatorMessageQueue": {
                            "ref": "Colleague.html#setMediatorMessageQueue",
                            "tf": 110
                          },
                          "Colleague.html#removeMediatorMessageQueue": {
                            "ref": "Colleague.html#removeMediatorMessageQueue",
                            "tf": 110
                          },
                          "Colleague.html#sendMessage": {
                            "ref": "Colleague.html#sendMessage",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#delegateEvents": {
                            "ref": "Presentation.Mediator.html#delegateEvents",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#undelegateEvents": {
                            "ref": "Presentation.Mediator.html#undelegateEvents",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#unsetSubscriptions": {
                            "ref": "Presentation.Mediator.html#unsetSubscriptions",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#observeColleague": {
                            "ref": "Presentation.Mediator.html#observeColleague",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#observeColleagueAndTrigger": {
                            "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#dismissColleague": {
                            "ref": "Presentation.Mediator.html#dismissColleague",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#dismissColleagueTrigger": {
                            "ref": "Presentation.Mediator.html#dismissColleagueTrigger",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#subscribe": {
                            "ref": "Presentation.Mediator.html#subscribe",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#publish": {
                            "ref": "Presentation.Mediator.html#publish",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#unsubscribe": {
                            "ref": "Presentation.Mediator.html#unsubscribe",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#subscribeOnce": {
                            "ref": "Presentation.Mediator.html#subscribeOnce",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#getColleagues": {
                            "ref": "Presentation.Mediator.html#getColleagues",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#getChannel": {
                            "ref": "Presentation.Mediator.html#getChannel",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#sendMessage": {
                            "ref": "Presentation.Mediator.html#sendMessage",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#setMediatorMessageQueue": {
                            "ref": "Presentation.Mediator.html#setMediatorMessageQueue",
                            "tf": 110
                          },
                          "Presentation.Mediator.html#removeMediatorMessageQueue": {
                            "ref": "Presentation.Mediator.html#removeMediatorMessageQueue",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "q": {
          "docs": {},
          "u": {
            "docs": {},
            "e": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {
                    "Colleague.html#sendMessage": {
                      "ref": "Colleague.html#sendMessage",
                      "tf": 12.5
                    },
                    "Presentation.Mediator.html#sendMessage": {
                      "ref": "Presentation.Mediator.html#sendMessage",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "w": {
                "docs": {},
                "e": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Presentation.Mediator.html": {
                          "ref": "Presentation.Mediator.html",
                          "tf": 4.3478260869565215
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "Presentation.Mediator.html": {
                    "ref": "Presentation.Mediator.html",
                    "tf": 2.1739130434782608
                  },
                  "Presentation.Mediator.html#unsetSubscriptions": {
                    "ref": "Presentation.Mediator.html#unsetSubscriptions",
                    "tf": 16.666666666666664
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Presentation.Mediator.html#delegateEvents": {
                      "ref": "Presentation.Mediator.html#delegateEvents",
                      "tf": 50
                    },
                    "Presentation.Mediator.html#undelegateEvents": {
                      "ref": "Presentation.Mediator.html#undelegateEvents",
                      "tf": 50
                    },
                    "Presentation.Mediator.html#observeColleagueAndTrigger": {
                      "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                      "tf": 5
                    },
                    "Presentation.Mediator.html#subscribeOnce": {
                      "ref": "Presentation.Mediator.html#subscribeOnce",
                      "tf": 16.666666666666664
                    }
                  }
                }
              }
            }
          },
          "x": {
            "docs": {},
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Presentation.Mediator.html#delegateEvents": {
                        "ref": "Presentation.Mediator.html#delegateEvents",
                        "tf": 12.5
                      },
                      "Presentation.Mediator.html#undelegateEvents": {
                        "ref": "Presentation.Mediator.html#undelegateEvents",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "Presentation.Mediator.html": {
                    "ref": "Presentation.Mediator.html",
                    "tf": 2.1739130434782608
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Presentation.Mediator.html": {
                        "ref": "Presentation.Mediator.html",
                        "tf": 2.1739130434782608
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "Presentation.Mediator.html#observeColleague": {
                        "ref": "Presentation.Mediator.html#observeColleague",
                        "tf": 14.285714285714285
                      },
                      "Presentation.Mediator.html#observeColleagueAndTrigger": {
                        "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                        "tf": 10
                      }
                    },
                    "e": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "u": {
                                      "docs": {
                                        "Presentation.Mediator.html#observeColleague": {
                                          "ref": "Presentation.Mediator.html#observeColleague",
                                          "tf": 620
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {
                                                          "Presentation.Mediator.html#observeColleagueAndTrigger": {
                                                            "ref": "Presentation.Mediator.html#observeColleagueAndTrigger",
                                                            "tf": 625
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "Presentation.Mediator.html#subscribeOnce": {
                "ref": "Presentation.Mediator.html#subscribeOnce",
                "tf": 16.666666666666664
              }
            },
            "c": {
              "docs": {
                "Presentation.Mediator.html#subscribe": {
                  "ref": "Presentation.Mediator.html#subscribe",
                  "tf": 16.666666666666664
                }
              }
            }
          }
        },
        "_": {
          "docs": {},
          ".": {
            "docs": {},
            "c": {
              "docs": {},
              "h": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "Presentation.Mediator.html#defaultChannel": {
                              "ref": "Presentation.Mediator.html#defaultChannel",
                              "tf": 10
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "g": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "v": {
                                "docs": {
                                  "Presentation.Mediator.html#undelegateEvents": {
                                    "ref": "Presentation.Mediator.html#undelegateEvents",
                                    "tf": 662.5
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "Presentation.Mediator.html#undelegateEvents": {
                      "ref": "Presentation.Mediator.html#undelegateEvents",
                      "tf": 12.5
                    }
                  },
                  "s": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "b": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Presentation.Mediator.html#unsetSubscriptions": {
                                        "ref": "Presentation.Mediator.html#unsetSubscriptions",
                                        "tf": 650
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "b": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "b": {
                            "docs": {
                              "Presentation.Mediator.html#unsetSubscriptions": {
                                "ref": "Presentation.Mediator.html#unsetSubscriptions",
                                "tf": 16.666666666666664
                              },
                              "Presentation.Mediator.html#unsubscribe": {
                                "ref": "Presentation.Mediator.html#unsubscribe",
                                "tf": 620
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 231
    },
    "corpusTokens": [
      "_.channel",
      "achiev",
      "add",
      "augmented.j",
      "auto",
      "between",
      "callback",
      "cancel",
      "channel",
      "channelconveni",
      "child",
      "class",
      "colleagu",
      "colleague#medi",
      "colleague#removemediatormessagequeu",
      "colleague#sendmessag",
      "colleague#setmediatormessagequeu",
      "commun",
      "communicatewith",
      "context",
      "coupl",
      "data",
      "default",
      "defaultchannel",
      "defaultidentifi",
      "defin",
      "delegateev",
      "develop",
      "dismiss",
      "dismisscolleagu",
      "dismisscolleaguetrigg",
      "document",
      "each",
      "event",
      "extend",
      "function",
      "getchannel",
      "getcolleagu",
      "global",
      "have",
      "identifi",
      "index",
      "interfac",
      "list",
      "list:class",
      "mediat",
      "mediator#channel",
      "mediator#defaultchannel",
      "mediator#defaultidentifi",
      "mediator#delegateev",
      "mediator#dismisscolleagu",
      "mediator#dismisscolleaguetrigg",
      "mediator#getchannel",
      "mediator#getcolleagu",
      "mediator#medi",
      "mediator#observecolleagu",
      "mediator#observecolleagueandtrigg",
      "mediator#publish",
      "mediator#removemediatormessagequeu",
      "mediator#sendmessag",
      "mediator#setmediatormessagequeu",
      "mediator#subscrib",
      "mediator#subscribeonc",
      "mediator#subscript",
      "mediator#undelegateev",
      "mediator#unsetsubscript",
      "mediator#unsubscrib",
      "mediator'",
      "member",
      "messag",
      "method",
      "n",
      "next",
      "null",
      "object",
      "observ",
      "observecolleagu",
      "observecolleagueandtrigg",
      "on",
      "onc",
      "patternth",
      "present",
      "presentation.medi",
      "presentation.mediator#channel",
      "presentation.mediator#defaultchannel",
      "presentation.mediator#defaultidentifi",
      "presentation.mediator#delegateev",
      "presentation.mediator#dismisscolleagu",
      "presentation.mediator#dismisscolleaguetrigg",
      "presentation.mediator#getchannel",
      "presentation.mediator#getcolleagu",
      "presentation.mediator#medi",
      "presentation.mediator#observecolleagu",
      "presentation.mediator#observecolleagueandtrigg",
      "presentation.mediator#publish",
      "presentation.mediator#removemediatormessagequeu",
      "presentation.mediator#sendmessag",
      "presentation.mediator#setmediatormessagequeu",
      "presentation.mediator#subscrib",
      "presentation.mediator#subscribeonc",
      "presentation.mediator#subscript",
      "presentation.mediator#undelegateev",
      "presentation.mediator#unsetsubscript",
      "presentation.mediator#unsubscrib",
      "publish",
      "queue",
      "readm",
      "remov",
      "removemediatormessagequeu",
      "send",
      "sendmessag",
      "set",
      "setmediatormessagequeu",
      "simpli",
      "specif",
      "subscrib",
      "subscribeonc",
      "subscript",
      "through",
      "trigger",
      "undelegateev",
      "unset",
      "unsetsubscript",
      "unsubscrib",
      "view",
      "view.th",
      "views.loos"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Augmented.js Next Presentation",
      "longname": "index",
      "name": "Augmented.js Next Presentation",
      "tags": "index",
      "summary": "Augmented.js Next Presentation - Simply Development.",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "Colleague.html": {
      "id": "Colleague.html",
      "kind": "class",
      "title": "Colleague",
      "longname": "Colleague",
      "name": "Colleague",
      "tags": "Colleague",
      "summary": "",
      "description": "Colleague View — The 'child' view.The Colleague communicates with other Colleagues through its Mediator.",
      "body": ""
    },
    "Colleague.html#mediator": {
      "id": "Colleague.html#mediator",
      "kind": "member",
      "title": "mediator",
      "longname": "Colleague#mediator",
      "name": "mediator",
      "tags": "Colleague#mediator mediator",
      "summary": "",
      "description": ""
    },
    "Colleague.html#setMediatorMessageQueue": {
      "id": "Colleague.html#setMediatorMessageQueue",
      "kind": "function",
      "title": "setMediatorMessageQueue( mediator )",
      "longname": "Colleague#setMediatorMessageQueue",
      "name": "setMediatorMessageQueue",
      "tags": "Colleague#setMediatorMessageQueue setMediatorMessageQueue",
      "summary": "",
      "description": "Set the mediator to this colleague"
    },
    "Colleague.html#removeMediatorMessageQueue": {
      "id": "Colleague.html#removeMediatorMessageQueue",
      "kind": "function",
      "title": "removeMediatorMessageQueue()",
      "longname": "Colleague#removeMediatorMessageQueue",
      "name": "removeMediatorMessageQueue",
      "tags": "Colleague#removeMediatorMessageQueue removeMediatorMessageQueue",
      "summary": "",
      "description": "Remove the mediator from this colleague"
    },
    "Colleague.html#sendMessage": {
      "id": "Colleague.html#sendMessage",
      "kind": "function",
      "title": "sendMessage( message, data )",
      "longname": "Colleague#sendMessage",
      "name": "sendMessage",
      "tags": "Colleague#sendMessage sendMessage",
      "summary": "",
      "description": "Send a message to the mediator's queue"
    },
    "Presentation.Mediator.html": {
      "id": "Presentation.Mediator.html",
      "kind": "class",
      "title": "Mediator",
      "longname": "Presentation.Mediator",
      "name": "Mediator",
      "tags": "Presentation.Mediator Mediator",
      "summary": "",
      "description": "Mediator View - The mediator in the Mediator PatternThe mediator defines the interface for communication between colleague views.Loose coupling between colleague objects is achieved by having colleagues communicatewith the Mediator, rather than with each other. [Mediator]",
      "body": ""
    },
    "Presentation.Mediator.html#subscriptions": {
      "id": "Presentation.Mediator.html#subscriptions",
      "kind": "member",
      "title": "subscriptions",
      "longname": "Presentation.Mediator#subscriptions",
      "name": "subscriptions",
      "tags": "Presentation.Mediator#subscriptions Mediator#subscriptions subscriptions",
      "summary": "",
      "description": "Subscriptions"
    },
    "Presentation.Mediator.html#defaultChannel": {
      "id": "Presentation.Mediator.html#defaultChannel",
      "kind": "member",
      "title": "defaultChannel",
      "longname": "Presentation.Mediator#defaultChannel",
      "name": "defaultChannel",
      "tags": "Presentation.Mediator#defaultChannel Mediator#defaultChannel defaultChannel",
      "summary": "",
      "description": "Get the default channelConvenience method for _.channel = null;"
    },
    "Presentation.Mediator.html#defaultIdentifier": {
      "id": "Presentation.Mediator.html#defaultIdentifier",
      "kind": "member",
      "title": "defaultIdentifier",
      "longname": "Presentation.Mediator#defaultIdentifier",
      "name": "defaultIdentifier",
      "tags": "Presentation.Mediator#defaultIdentifier Mediator#defaultIdentifier defaultIdentifier",
      "summary": "",
      "description": "Get the default identifier"
    },
    "Presentation.Mediator.html#mediator": {
      "id": "Presentation.Mediator.html#mediator",
      "kind": "member",
      "title": "mediator",
      "longname": "Presentation.Mediator#mediator",
      "name": "mediator",
      "tags": "Presentation.Mediator#mediator Mediator#mediator mediator",
      "summary": "",
      "description": ""
    },
    "Presentation.Mediator.html#channels": {
      "id": "Presentation.Mediator.html#channels",
      "kind": "member",
      "title": "channels",
      "longname": "Presentation.Mediator#channels",
      "name": "channels",
      "tags": "Presentation.Mediator#channels Mediator#channels channels",
      "summary": "",
      "description": "Get Channels"
    },
    "Presentation.Mediator.html#delegateEvents": {
      "id": "Presentation.Mediator.html#delegateEvents",
      "kind": "function",
      "title": "delegateEvents( event )",
      "longname": "Presentation.Mediator#delegateEvents",
      "name": "delegateEvents",
      "tags": "Presentation.Mediator#delegateEvents Mediator#delegateEvents delegateEvents",
      "summary": "",
      "description": "Extend delegateEvents() to set subscriptions"
    },
    "Presentation.Mediator.html#undelegateEvents": {
      "id": "Presentation.Mediator.html#undelegateEvents",
      "kind": "function",
      "title": "undelegateEvents( event )",
      "longname": "Presentation.Mediator#undelegateEvents",
      "name": "undelegateEvents",
      "tags": "Presentation.Mediator#undelegateEvents Mediator#undelegateEvents undelegateEvents",
      "summary": "",
      "description": "Extend undelegateEvents() to unset subscriptions"
    },
    "Presentation.Mediator.html#unsetSubscriptions": {
      "id": "Presentation.Mediator.html#unsetSubscriptions",
      "kind": "function",
      "title": "unsetSubscriptions( [ subscriptions ] )",
      "longname": "Presentation.Mediator#unsetSubscriptions",
      "name": "unsetSubscriptions",
      "tags": "Presentation.Mediator#unsetSubscriptions Mediator#unsetSubscriptions unsetSubscriptions",
      "summary": "",
      "description": "Unsubscribe to each subscription"
    },
    "Presentation.Mediator.html#observeColleague": {
      "id": "Presentation.Mediator.html#observeColleague",
      "kind": "function",
      "title": "observeColleague( colleague, callback, channel, identifier )",
      "longname": "Presentation.Mediator#observeColleague",
      "name": "observeColleague",
      "tags": "Presentation.Mediator#observeColleague Mediator#observeColleague observeColleague",
      "summary": "",
      "description": "Observe a Colleague View - observe a Colleague and add to a channel"
    },
    "Presentation.Mediator.html#observeColleagueAndTrigger": {
      "id": "Presentation.Mediator.html#observeColleagueAndTrigger",
      "kind": "function",
      "title": "observeColleagueAndTrigger( colleague, channel, identifier )",
      "longname": "Presentation.Mediator#observeColleagueAndTrigger",
      "name": "observeColleagueAndTrigger",
      "tags": "Presentation.Mediator#observeColleagueAndTrigger Mediator#observeColleagueAndTrigger observeColleagueAndTrigger",
      "summary": "",
      "description": "Observe a Colleague View - observe a Colleague and add to a channel and auto trigger events"
    },
    "Presentation.Mediator.html#dismissColleague": {
      "id": "Presentation.Mediator.html#dismissColleague",
      "kind": "function",
      "title": "dismissColleague( colleague, callback, channel, identifier )",
      "longname": "Presentation.Mediator#dismissColleague",
      "name": "dismissColleague",
      "tags": "Presentation.Mediator#dismissColleague Mediator#dismissColleague dismissColleague",
      "summary": "",
      "description": "Dismiss a Colleague View - Remove a Colleague from the channel"
    },
    "Presentation.Mediator.html#dismissColleagueTrigger": {
      "id": "Presentation.Mediator.html#dismissColleagueTrigger",
      "kind": "function",
      "title": "dismissColleagueTrigger( colleague, channel, identifier )",
      "longname": "Presentation.Mediator#dismissColleagueTrigger",
      "name": "dismissColleagueTrigger",
      "tags": "Presentation.Mediator#dismissColleagueTrigger Mediator#dismissColleagueTrigger dismissColleagueTrigger",
      "summary": "",
      "description": "Dismiss a Colleague View - Remove a Colleague from the channel that has an auto trigger"
    },
    "Presentation.Mediator.html#subscribe": {
      "id": "Presentation.Mediator.html#subscribe",
      "kind": "function",
      "title": "subscribe( channel, callback, context, once, identifier )",
      "longname": "Presentation.Mediator#subscribe",
      "name": "subscribe",
      "tags": "Presentation.Mediator#subscribe Mediator#subscribe subscribe",
      "summary": "",
      "description": "Subscribe to a channel"
    },
    "Presentation.Mediator.html#publish": {
      "id": "Presentation.Mediator.html#publish",
      "kind": "function",
      "title": "publish( channel, N )",
      "longname": "Presentation.Mediator#publish",
      "name": "publish",
      "tags": "Presentation.Mediator#publish Mediator#publish publish",
      "summary": "",
      "description": "Trigger all callbacks for a channel"
    },
    "Presentation.Mediator.html#unsubscribe": {
      "id": "Presentation.Mediator.html#unsubscribe",
      "kind": "function",
      "title": "unsubscribe( channel, callback, context, identifier )",
      "longname": "Presentation.Mediator#unsubscribe",
      "name": "unsubscribe",
      "tags": "Presentation.Mediator#unsubscribe Mediator#unsubscribe unsubscribe",
      "summary": "",
      "description": "Cancel subscription"
    },
    "Presentation.Mediator.html#subscribeOnce": {
      "id": "Presentation.Mediator.html#subscribeOnce",
      "kind": "function",
      "title": "subscribeOnce( channel, subscription, context, identifier )",
      "longname": "Presentation.Mediator#subscribeOnce",
      "name": "subscribeOnce",
      "tags": "Presentation.Mediator#subscribeOnce Mediator#subscribeOnce subscribeOnce",
      "summary": "",
      "description": "Subscribing to one event only"
    },
    "Presentation.Mediator.html#getColleagues": {
      "id": "Presentation.Mediator.html#getColleagues",
      "kind": "function",
      "title": "getColleagues( channel )",
      "longname": "Presentation.Mediator#getColleagues",
      "name": "getColleagues",
      "tags": "Presentation.Mediator#getColleagues Mediator#getColleagues getColleagues",
      "summary": "",
      "description": "Get All the Colleagues for a channel"
    },
    "Presentation.Mediator.html#getChannel": {
      "id": "Presentation.Mediator.html#getChannel",
      "kind": "function",
      "title": "getChannel( channel )",
      "longname": "Presentation.Mediator#getChannel",
      "name": "getChannel",
      "tags": "Presentation.Mediator#getChannel Mediator#getChannel getChannel",
      "summary": "",
      "description": "Get a specific channel"
    },
    "Presentation.Mediator.html#sendMessage": {
      "id": "Presentation.Mediator.html#sendMessage",
      "kind": "function",
      "title": "sendMessage( message, data )",
      "longname": "Presentation.Mediator#sendMessage",
      "name": "sendMessage",
      "tags": "Presentation.Mediator#sendMessage Mediator#sendMessage sendMessage",
      "summary": "",
      "description": "Send a message to the mediator's queue"
    },
    "Presentation.Mediator.html#setMediatorMessageQueue": {
      "id": "Presentation.Mediator.html#setMediatorMessageQueue",
      "kind": "function",
      "title": "setMediatorMessageQueue( mediator )",
      "longname": "Presentation.Mediator#setMediatorMessageQueue",
      "name": "setMediatorMessageQueue",
      "tags": "Presentation.Mediator#setMediatorMessageQueue Mediator#setMediatorMessageQueue setMediatorMessageQueue",
      "summary": "",
      "description": "Set the mediator to this colleague"
    },
    "Presentation.Mediator.html#removeMediatorMessageQueue": {
      "id": "Presentation.Mediator.html#removeMediatorMessageQueue",
      "kind": "function",
      "title": "removeMediatorMessageQueue()",
      "longname": "Presentation.Mediator#removeMediatorMessageQueue",
      "name": "removeMediatorMessageQueue",
      "tags": "Presentation.Mediator#removeMediatorMessageQueue Mediator#removeMediatorMessageQueue removeMediatorMessageQueue",
      "summary": "",
      "description": "Remove the mediator from this colleague"
    }
  }
};