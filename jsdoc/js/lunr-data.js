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
          "options:&lt;/br/&gt",
          "support",
          "through",
          "view"
        ],
        "Colleague.html#mediator": [
          "colleague#medi",
          "mediat",
          "member",
          "properti"
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
        "Mediator.html": [
          "achiev",
          "between",
          "class",
          "colleagu",
          "commun",
          "coupl",
          "defin",
          "each",
          "have",
          "interfac",
          "loos",
          "mediat",
          "object",
          "pattern",
          "view"
        ],
        "Mediator.html#mediator": [
          "mediat",
          "mediator#medi",
          "member",
          "properti"
        ],
        "Mediator.html#subscriptions": [
          "mediator#subscript",
          "member",
          "subscript"
        ],
        "Mediator.html#channels": [
          "channel",
          "mediator#channel",
          "member",
          "properti"
        ],
        "Mediator.html#defaultChannel": [
          "_.channel",
          "channel",
          "conveni",
          "default",
          "defaultchannel",
          "mediator#defaultchannel",
          "member",
          "method",
          "null"
        ],
        "Mediator.html#defaultIdentifier": [
          "default",
          "defaultidentifi",
          "identifi",
          "mediator#defaultidentifi",
          "member"
        ],
        "Mediator.html#sendMessage": [
          "data",
          "function",
          "mediator#sendmessag",
          "mediator'",
          "messag",
          "queue",
          "send",
          "sendmessag"
        ],
        "Mediator.html#setMediatorMessageQueue": [
          "colleagu",
          "function",
          "mediat",
          "mediator#setmediatormessagequeu",
          "set",
          "setmediatormessagequeu"
        ],
        "Mediator.html#removeMediatorMessageQueue": [
          "colleagu",
          "function",
          "mediat",
          "mediator#removemediatormessagequeu",
          "remov",
          "removemediatormessagequeu"
        ],
        "Mediator.html#delegateEvents": [
          "delegateev",
          "event",
          "extend",
          "function",
          "mediator#delegateev",
          "set",
          "subscript"
        ],
        "Mediator.html#undelegateEvents": [
          "event",
          "extend",
          "function",
          "mediator#undelegateev",
          "subscript",
          "undelegateev",
          "unset"
        ],
        "Mediator.html#unsetSubscriptions": [
          "each",
          "function",
          "mediator#unsetsubscript",
          "subscript",
          "unsetsubscript",
          "unsubscrib"
        ],
        "Mediator.html#observeColleague": [
          "add",
          "callback",
          "channel",
          "colleagu",
          "function",
          "identifi",
          "mediator#observecolleagu",
          "observ",
          "observecolleagu",
          "view"
        ],
        "Mediator.html#observeColleagueAndTrigger": [
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
          "trigger",
          "view"
        ],
        "Mediator.html#dismissColleague": [
          "callback",
          "channel",
          "colleagu",
          "dismiss",
          "dismisscolleagu",
          "function",
          "identifi",
          "mediator#dismisscolleagu",
          "remov",
          "view"
        ],
        "Mediator.html#dismissColleagueTrigger": [
          "auto",
          "channel",
          "colleagu",
          "dismiss",
          "dismisscolleaguetrigg",
          "function",
          "identifi",
          "mediator#dismisscolleaguetrigg",
          "remov",
          "trigger",
          "view"
        ],
        "Mediator.html#subscribe": [
          "callback",
          "channel",
          "context",
          "function",
          "identifi",
          "mediator#subscrib",
          "onc",
          "subscrib"
        ],
        "Mediator.html#publish": [
          "callback",
          "channel",
          "function",
          "mediator#publish",
          "n",
          "publish",
          "trigger"
        ],
        "Mediator.html#unsubscribe": [
          "callback",
          "cancel",
          "channel",
          "context",
          "function",
          "identifi",
          "mediator#unsubscrib",
          "subscript",
          "unsubscrib"
        ],
        "Mediator.html#subscribeOnce": [
          "channel",
          "context",
          "event",
          "function",
          "identifi",
          "mediator#subscribeonc",
          "on",
          "subscrib",
          "subscribeonc",
          "subscript"
        ],
        "Mediator.html#getColleagues": [
          "channel",
          "colleagu",
          "function",
          "getcolleagu",
          "mediator#getcolleagu"
        ],
        "Mediator.html#getChannel": [
          "channel",
          "function",
          "getchannel",
          "mediator#getchannel",
          "specif"
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
                  "Mediator.html#observeColleagueAndTrigger": {
                    "ref": "Mediator.html#observeColleagueAndTrigger",
                    "tf": 5
                  },
                  "Mediator.html#dismissColleagueTrigger": {
                    "ref": "Mediator.html#dismissColleagueTrigger",
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
                      "Mediator.html": {
                        "ref": "Mediator.html",
                        "tf": 2.083333333333333
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
                "Mediator.html#observeColleague": {
                  "ref": "Mediator.html#observeColleague",
                  "tf": 7.142857142857142
                },
                "Mediator.html#observeColleagueAndTrigger": {
                  "ref": "Mediator.html#observeColleagueAndTrigger",
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
                    "Mediator.html": {
                      "ref": "Mediator.html",
                      "tf": 2.083333333333333
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
                        "Mediator.html#defaultChannel": {
                          "ref": "Mediator.html#defaultChannel",
                          "tf": 8.333333333333332
                        },
                        "Mediator.html#defaultIdentifier": {
                          "ref": "Mediator.html#defaultIdentifier",
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
                                      "Mediator.html#defaultChannel": {
                                        "ref": "Mediator.html#defaultChannel",
                                        "tf": 750
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
                                        "Mediator.html#defaultIdentifier": {
                                          "ref": "Mediator.html#defaultIdentifier",
                                          "tf": 750
                                        }
                                      }
                                    }
                                  }
                                }
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
                              "Mediator.html#delegateEvents": {
                                "ref": "Mediator.html#delegateEvents",
                                "tf": 712.5
                              }
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
                  "Mediator.html#sendMessage": {
                    "ref": "Mediator.html#sendMessage",
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
                        "Mediator.html#dismissColleague": {
                          "ref": "Mediator.html#dismissColleague",
                          "tf": 8.333333333333332
                        },
                        "Mediator.html#dismissColleagueTrigger": {
                          "ref": "Mediator.html#dismissColleagueTrigger",
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
                                        "Mediator.html#dismissColleague": {
                                          "ref": "Mediator.html#dismissColleague",
                                          "tf": 670
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
                                                    "Mediator.html#dismissColleagueTrigger": {
                                                      "ref": "Mediator.html#dismissColleagueTrigger",
                                                      "tf": 675
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
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
                          "Mediator.html": {
                            "ref": "Mediator.html",
                            "tf": 2.083333333333333
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
                          "Mediator.html#defaultIdentifier": {
                            "ref": "Mediator.html#defaultIdentifier",
                            "tf": 25
                          },
                          "Mediator.html#observeColleague": {
                            "ref": "Mediator.html#observeColleague",
                            "tf": 20
                          },
                          "Mediator.html#observeColleagueAndTrigger": {
                            "ref": "Mediator.html#observeColleagueAndTrigger",
                            "tf": 25
                          },
                          "Mediator.html#dismissColleague": {
                            "ref": "Mediator.html#dismissColleague",
                            "tf": 20
                          },
                          "Mediator.html#dismissColleagueTrigger": {
                            "ref": "Mediator.html#dismissColleagueTrigger",
                            "tf": 25
                          },
                          "Mediator.html#subscribe": {
                            "ref": "Mediator.html#subscribe",
                            "tf": 16.666666666666664
                          },
                          "Mediator.html#unsubscribe": {
                            "ref": "Mediator.html#unsubscribe",
                            "tf": 20
                          },
                          "Mediator.html#subscribeOnce": {
                            "ref": "Mediator.html#subscribeOnce",
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
            "Mediator.html#publish": {
              "ref": "Mediator.html#publish",
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
                  "Mediator.html#defaultChannel": {
                    "ref": "Mediator.html#defaultChannel",
                    "tf": 8.333333333333332
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
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Colleague.html#mediator": {
                            "ref": "Colleague.html#mediator",
                            "tf": 25
                          },
                          "Mediator.html#mediator": {
                            "ref": "Mediator.html#mediator",
                            "tf": 25
                          },
                          "Mediator.html#channels": {
                            "ref": "Mediator.html#channels",
                            "tf": 25
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
                      "docs": {
                        "Mediator.html": {
                          "ref": "Mediator.html",
                          "tf": 2.083333333333333
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
                        "Mediator.html#publish": {
                          "ref": "Mediator.html#publish",
                          "tf": 683.3333333333334
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
                    "Mediator.html#removeMediatorMessageQueue": {
                      "ref": "Mediator.html#removeMediatorMessageQueue",
                      "tf": 16.666666666666664
                    },
                    "Mediator.html#dismissColleague": {
                      "ref": "Mediator.html#dismissColleague",
                      "tf": 8.333333333333332
                    },
                    "Mediator.html#dismissColleagueTrigger": {
                      "ref": "Mediator.html#dismissColleagueTrigger",
                      "tf": 6.25
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
                                                            "Mediator.html#removeMediatorMessageQueue": {
                                                              "ref": "Mediator.html#removeMediatorMessageQueue",
                                                              "tf": 750
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
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
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Colleague.html": {
                          "ref": "Colleague.html",
                          "tf": 3.571428571428571
                        }
                      }
                    }
                  }
                }
              }
            },
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
                            "Mediator.html#subscriptions": {
                              "ref": "Mediator.html#subscriptions",
                              "tf": 800
                            },
                            "Mediator.html#delegateEvents": {
                              "ref": "Mediator.html#delegateEvents",
                              "tf": 12.5
                            },
                            "Mediator.html#undelegateEvents": {
                              "ref": "Mediator.html#undelegateEvents",
                              "tf": 12.5
                            },
                            "Mediator.html#unsetSubscriptions": {
                              "ref": "Mediator.html#unsetSubscriptions",
                              "tf": 66.66666666666666
                            },
                            "Mediator.html#unsubscribe": {
                              "ref": "Mediator.html#unsubscribe",
                              "tf": 25
                            },
                            "Mediator.html#subscribeOnce": {
                              "ref": "Mediator.html#subscribeOnce",
                              "tf": 20
                            }
                          }
                        }
                      },
                      "b": {
                        "docs": {
                          "Mediator.html#subscribe": {
                            "ref": "Mediator.html#subscribe",
                            "tf": 691.6666666666666
                          },
                          "Mediator.html#subscribeOnce": {
                            "ref": "Mediator.html#subscribeOnce",
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
                                  "Mediator.html#subscribeOnce": {
                                    "ref": "Mediator.html#subscribeOnce",
                                    "tf": 670
                                  }
                                }
                              }
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
                "docs": {
                  "Colleague.html#sendMessage": {
                    "ref": "Colleague.html#sendMessage",
                    "tf": 12.5
                  },
                  "Mediator.html#sendMessage": {
                    "ref": "Mediator.html#sendMessage",
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
                              "Mediator.html#sendMessage": {
                                "ref": "Mediator.html#sendMessage",
                                "tf": 683.3333333333334
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
              "docs": {
                "Colleague.html#setMediatorMessageQueue": {
                  "ref": "Colleague.html#setMediatorMessageQueue",
                  "tf": 16.666666666666664
                },
                "Mediator.html#setMediatorMessageQueue": {
                  "ref": "Mediator.html#setMediatorMessageQueue",
                  "tf": 16.666666666666664
                },
                "Mediator.html#delegateEvents": {
                  "ref": "Mediator.html#delegateEvents",
                  "tf": 12.5
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
                                                      "Mediator.html#setMediatorMessageQueue": {
                                                        "ref": "Mediator.html#setMediatorMessageQueue",
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
                      "Mediator.html#getChannel": {
                        "ref": "Mediator.html#getChannel",
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
                                "Mediator.html#getColleagues": {
                                  "ref": "Mediator.html#getColleagues",
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
                              "Mediator.html#getChannel": {
                                "ref": "Mediator.html#getChannel",
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
                    "Mediator.html": {
                      "ref": "Mediator.html",
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
                      "tf": 3.571428571428571
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
                        "Mediator.html#channels": {
                          "ref": "Mediator.html#channels",
                          "tf": 775
                        },
                        "Mediator.html#defaultChannel": {
                          "ref": "Mediator.html#defaultChannel",
                          "tf": 8.333333333333332
                        },
                        "Mediator.html#observeColleague": {
                          "ref": "Mediator.html#observeColleague",
                          "tf": 27.142857142857142
                        },
                        "Mediator.html#observeColleagueAndTrigger": {
                          "ref": "Mediator.html#observeColleagueAndTrigger",
                          "tf": 30
                        },
                        "Mediator.html#dismissColleague": {
                          "ref": "Mediator.html#dismissColleague",
                          "tf": 28.333333333333332
                        },
                        "Mediator.html#dismissColleagueTrigger": {
                          "ref": "Mediator.html#dismissColleagueTrigger",
                          "tf": 31.25
                        },
                        "Mediator.html#subscribe": {
                          "ref": "Mediator.html#subscribe",
                          "tf": 41.666666666666664
                        },
                        "Mediator.html#publish": {
                          "ref": "Mediator.html#publish",
                          "tf": 49.99999999999999
                        },
                        "Mediator.html#unsubscribe": {
                          "ref": "Mediator.html#unsubscribe",
                          "tf": 20
                        },
                        "Mediator.html#subscribeOnce": {
                          "ref": "Mediator.html#subscribeOnce",
                          "tf": 20
                        },
                        "Mediator.html#getColleagues": {
                          "ref": "Mediator.html#getColleagues",
                          "tf": 75
                        },
                        "Mediator.html#getChannel": {
                          "ref": "Mediator.html#getChannel",
                          "tf": 75
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
                            "tf": 1910.7142857142858
                          },
                          "Colleague.html#setMediatorMessageQueue": {
                            "ref": "Colleague.html#setMediatorMessageQueue",
                            "tf": 16.666666666666664
                          },
                          "Colleague.html#removeMediatorMessageQueue": {
                            "ref": "Colleague.html#removeMediatorMessageQueue",
                            "tf": 16.666666666666664
                          },
                          "Mediator.html": {
                            "ref": "Mediator.html",
                            "tf": 6.25
                          },
                          "Mediator.html#setMediatorMessageQueue": {
                            "ref": "Mediator.html#setMediatorMessageQueue",
                            "tf": 16.666666666666664
                          },
                          "Mediator.html#removeMediatorMessageQueue": {
                            "ref": "Mediator.html#removeMediatorMessageQueue",
                            "tf": 16.666666666666664
                          },
                          "Mediator.html#observeColleague": {
                            "ref": "Mediator.html#observeColleague",
                            "tf": 34.285714285714285
                          },
                          "Mediator.html#observeColleagueAndTrigger": {
                            "ref": "Mediator.html#observeColleagueAndTrigger",
                            "tf": 35
                          },
                          "Mediator.html#dismissColleague": {
                            "ref": "Mediator.html#dismissColleague",
                            "tf": 36.666666666666664
                          },
                          "Mediator.html#dismissColleagueTrigger": {
                            "ref": "Mediator.html#dismissColleagueTrigger",
                            "tf": 37.5
                          },
                          "Mediator.html#getColleagues": {
                            "ref": "Mediator.html#getColleagues",
                            "tf": 25
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
                        "tf": 3.571428571428571
                      },
                      "Mediator.html": {
                        "ref": "Mediator.html",
                        "tf": 4.166666666666666
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
                    "Mediator.html": {
                      "ref": "Mediator.html",
                      "tf": 2.083333333333333
                    }
                  }
                }
              }
            },
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
                        "Mediator.html#defaultChannel": {
                          "ref": "Mediator.html#defaultChannel",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "x": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Mediator.html#subscribe": {
                          "ref": "Mediator.html#subscribe",
                          "tf": 16.666666666666664
                        },
                        "Mediator.html#unsubscribe": {
                          "ref": "Mediator.html#unsubscribe",
                          "tf": 20
                        },
                        "Mediator.html#subscribeOnce": {
                          "ref": "Mediator.html#subscribeOnce",
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
                          "Mediator.html#observeColleague": {
                            "ref": "Mediator.html#observeColleague",
                            "tf": 20
                          },
                          "Mediator.html#dismissColleague": {
                            "ref": "Mediator.html#dismissColleague",
                            "tf": 20
                          },
                          "Mediator.html#subscribe": {
                            "ref": "Mediator.html#subscribe",
                            "tf": 16.666666666666664
                          },
                          "Mediator.html#publish": {
                            "ref": "Mediator.html#publish",
                            "tf": 16.666666666666664
                          },
                          "Mediator.html#unsubscribe": {
                            "ref": "Mediator.html#unsubscribe",
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
                      "Mediator.html#unsubscribe": {
                        "ref": "Mediator.html#unsubscribe",
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
          },
          "o": {
            "docs": {},
            "o": {
              "docs": {},
              "s": {
                "docs": {
                  "Mediator.html": {
                    "ref": "Mediator.html",
                    "tf": 2.083333333333333
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
                        "tf": 10.714285714285714
                      },
                      "Colleague.html#mediator": {
                        "ref": "Colleague.html#mediator",
                        "tf": 775
                      },
                      "Colleague.html#setMediatorMessageQueue": {
                        "ref": "Colleague.html#setMediatorMessageQueue",
                        "tf": 66.66666666666666
                      },
                      "Colleague.html#removeMediatorMessageQueue": {
                        "ref": "Colleague.html#removeMediatorMessageQueue",
                        "tf": 16.666666666666664
                      },
                      "Mediator.html": {
                        "ref": "Mediator.html",
                        "tf": 1912.5
                      },
                      "Mediator.html#mediator": {
                        "ref": "Mediator.html#mediator",
                        "tf": 775
                      },
                      "Mediator.html#setMediatorMessageQueue": {
                        "ref": "Mediator.html#setMediatorMessageQueue",
                        "tf": 66.66666666666666
                      },
                      "Mediator.html#removeMediatorMessageQueue": {
                        "ref": "Mediator.html#removeMediatorMessageQueue",
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
                            "Mediator.html#sendMessage": {
                              "ref": "Mediator.html#sendMessage",
                              "tf": 12.5
                            }
                          }
                        },
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
                                    "Mediator.html#mediator": {
                                      "ref": "Mediator.html#mediator",
                                      "tf": 1150
                                    }
                                  }
                                }
                              }
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
                                              "Mediator.html#subscriptions": {
                                                "ref": "Mediator.html#subscriptions",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        },
                                        "b": {
                                          "docs": {
                                            "Mediator.html#subscribe": {
                                              "ref": "Mediator.html#subscribe",
                                              "tf": 1150
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
                                                    "Mediator.html#subscribeOnce": {
                                                      "ref": "Mediator.html#subscribeOnce",
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
                                                "Mediator.html#sendMessage": {
                                                  "ref": "Mediator.html#sendMessage",
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
                                                                        "Mediator.html#setMediatorMessageQueue": {
                                                                          "ref": "Mediator.html#setMediatorMessageQueue",
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
                                          "Mediator.html#channels": {
                                            "ref": "Mediator.html#channels",
                                            "tf": 1150
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
                                                        "Mediator.html#defaultChannel": {
                                                          "ref": "Mediator.html#defaultChannel",
                                                          "tf": 1150
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
                                                          "Mediator.html#defaultIdentifier": {
                                                            "ref": "Mediator.html#defaultIdentifier",
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
                                                "Mediator.html#delegateEvents": {
                                                  "ref": "Mediator.html#delegateEvents",
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
                                                          "Mediator.html#dismissColleague": {
                                                            "ref": "Mediator.html#dismissColleague",
                                                            "tf": 1150
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
                                                                      "Mediator.html#dismissColleagueTrigger": {
                                                                        "ref": "Mediator.html#dismissColleagueTrigger",
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
                                                                              "Mediator.html#removeMediatorMessageQueue": {
                                                                                "ref": "Mediator.html#removeMediatorMessageQueue",
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
                                                    "Mediator.html#undelegateEvents": {
                                                      "ref": "Mediator.html#undelegateEvents",
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
                                                        "Mediator.html#unsetSubscriptions": {
                                                          "ref": "Mediator.html#unsetSubscriptions",
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
                                                "Mediator.html#unsubscribe": {
                                                  "ref": "Mediator.html#unsubscribe",
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
                                                          "Mediator.html#observeColleague": {
                                                            "ref": "Mediator.html#observeColleague",
                                                            "tf": 1150
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
                                                                            "Mediator.html#observeColleagueAndTrigger": {
                                                                              "ref": "Mediator.html#observeColleagueAndTrigger",
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
                                          "Mediator.html#publish": {
                                            "ref": "Mediator.html#publish",
                                            "tf": 1150
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
                                                  "Mediator.html#getColleagues": {
                                                    "ref": "Mediator.html#getColleagues",
                                                    "tf": 1150
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
                                                "Mediator.html#getChannel": {
                                                  "ref": "Mediator.html#getChannel",
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
                      "Mediator.html#mediator": {
                        "ref": "Mediator.html#mediator",
                        "tf": 110
                      },
                      "Mediator.html#subscriptions": {
                        "ref": "Mediator.html#subscriptions",
                        "tf": 110
                      },
                      "Mediator.html#channels": {
                        "ref": "Mediator.html#channels",
                        "tf": 110
                      },
                      "Mediator.html#defaultChannel": {
                        "ref": "Mediator.html#defaultChannel",
                        "tf": 110
                      },
                      "Mediator.html#defaultIdentifier": {
                        "ref": "Mediator.html#defaultIdentifier",
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
                      "Mediator.html#sendMessage": {
                        "ref": "Mediator.html#sendMessage",
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
                      "Mediator.html#defaultChannel": {
                        "ref": "Mediator.html#defaultChannel",
                        "tf": 8.333333333333332
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
          "p": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      ":": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              ";": {
                                "docs": {},
                                "/": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "/": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "Colleague.html": {
                                                  "ref": "Colleague.html",
                                                  "tf": 3.571428571428571
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
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
                      "Mediator.html": {
                        "ref": "Mediator.html",
                        "tf": 2.083333333333333
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
                      "Mediator.html#observeColleague": {
                        "ref": "Mediator.html#observeColleague",
                        "tf": 14.285714285714285
                      },
                      "Mediator.html#observeColleagueAndTrigger": {
                        "ref": "Mediator.html#observeColleagueAndTrigger",
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
                                        "Mediator.html#observeColleague": {
                                          "ref": "Mediator.html#observeColleague",
                                          "tf": 670
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
                                                          "Mediator.html#observeColleagueAndTrigger": {
                                                            "ref": "Mediator.html#observeColleagueAndTrigger",
                                                            "tf": 675
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
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
              "Mediator.html#subscribeOnce": {
                "ref": "Mediator.html#subscribeOnce",
                "tf": 16.666666666666664
              }
            },
            "c": {
              "docs": {
                "Mediator.html#subscribe": {
                  "ref": "Mediator.html#subscribe",
                  "tf": 16.666666666666664
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
                          "tf": 3.571428571428571
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
                        "Mediator.html#observeColleagueAndTrigger": {
                          "ref": "Mediator.html#observeColleagueAndTrigger",
                          "tf": 5
                        },
                        "Mediator.html#dismissColleagueTrigger": {
                          "ref": "Mediator.html#dismissColleagueTrigger",
                          "tf": 6.25
                        },
                        "Mediator.html#publish": {
                          "ref": "Mediator.html#publish",
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
                    "tf": 10.714285714285714
                  },
                  "Mediator.html": {
                    "ref": "Mediator.html",
                    "tf": 4.166666666666666
                  },
                  "Mediator.html#observeColleague": {
                    "ref": "Mediator.html#observeColleague",
                    "tf": 7.142857142857142
                  },
                  "Mediator.html#observeColleagueAndTrigger": {
                    "ref": "Mediator.html#observeColleagueAndTrigger",
                    "tf": 5
                  },
                  "Mediator.html#dismissColleague": {
                    "ref": "Mediator.html#dismissColleague",
                    "tf": 8.333333333333332
                  },
                  "Mediator.html#dismissColleagueTrigger": {
                    "ref": "Mediator.html#dismissColleagueTrigger",
                    "tf": 6.25
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
                          "Colleague.html#sendMessage": {
                            "ref": "Colleague.html#sendMessage",
                            "tf": 110
                          },
                          "Colleague.html#setMediatorMessageQueue": {
                            "ref": "Colleague.html#setMediatorMessageQueue",
                            "tf": 110
                          },
                          "Colleague.html#removeMediatorMessageQueue": {
                            "ref": "Colleague.html#removeMediatorMessageQueue",
                            "tf": 110
                          },
                          "Mediator.html#sendMessage": {
                            "ref": "Mediator.html#sendMessage",
                            "tf": 110
                          },
                          "Mediator.html#setMediatorMessageQueue": {
                            "ref": "Mediator.html#setMediatorMessageQueue",
                            "tf": 110
                          },
                          "Mediator.html#removeMediatorMessageQueue": {
                            "ref": "Mediator.html#removeMediatorMessageQueue",
                            "tf": 110
                          },
                          "Mediator.html#delegateEvents": {
                            "ref": "Mediator.html#delegateEvents",
                            "tf": 110
                          },
                          "Mediator.html#undelegateEvents": {
                            "ref": "Mediator.html#undelegateEvents",
                            "tf": 110
                          },
                          "Mediator.html#unsetSubscriptions": {
                            "ref": "Mediator.html#unsetSubscriptions",
                            "tf": 110
                          },
                          "Mediator.html#observeColleague": {
                            "ref": "Mediator.html#observeColleague",
                            "tf": 110
                          },
                          "Mediator.html#observeColleagueAndTrigger": {
                            "ref": "Mediator.html#observeColleagueAndTrigger",
                            "tf": 110
                          },
                          "Mediator.html#dismissColleague": {
                            "ref": "Mediator.html#dismissColleague",
                            "tf": 110
                          },
                          "Mediator.html#dismissColleagueTrigger": {
                            "ref": "Mediator.html#dismissColleagueTrigger",
                            "tf": 110
                          },
                          "Mediator.html#subscribe": {
                            "ref": "Mediator.html#subscribe",
                            "tf": 110
                          },
                          "Mediator.html#publish": {
                            "ref": "Mediator.html#publish",
                            "tf": 110
                          },
                          "Mediator.html#unsubscribe": {
                            "ref": "Mediator.html#unsubscribe",
                            "tf": 110
                          },
                          "Mediator.html#subscribeOnce": {
                            "ref": "Mediator.html#subscribeOnce",
                            "tf": 110
                          },
                          "Mediator.html#getColleagues": {
                            "ref": "Mediator.html#getColleagues",
                            "tf": 110
                          },
                          "Mediator.html#getChannel": {
                            "ref": "Mediator.html#getChannel",
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
                    "Mediator.html#sendMessage": {
                      "ref": "Mediator.html#sendMessage",
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
                        "Mediator.html": {
                          "ref": "Mediator.html",
                          "tf": 4.166666666666666
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
                  "Mediator.html": {
                    "ref": "Mediator.html",
                    "tf": 2.083333333333333
                  },
                  "Mediator.html#unsetSubscriptions": {
                    "ref": "Mediator.html#unsetSubscriptions",
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
                    "Mediator.html#delegateEvents": {
                      "ref": "Mediator.html#delegateEvents",
                      "tf": 50
                    },
                    "Mediator.html#undelegateEvents": {
                      "ref": "Mediator.html#undelegateEvents",
                      "tf": 50
                    },
                    "Mediator.html#observeColleagueAndTrigger": {
                      "ref": "Mediator.html#observeColleagueAndTrigger",
                      "tf": 5
                    },
                    "Mediator.html#subscribeOnce": {
                      "ref": "Mediator.html#subscribeOnce",
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
                      "Mediator.html#delegateEvents": {
                        "ref": "Mediator.html#delegateEvents",
                        "tf": 12.5
                      },
                      "Mediator.html#undelegateEvents": {
                        "ref": "Mediator.html#undelegateEvents",
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
                  "Mediator.html": {
                    "ref": "Mediator.html",
                    "tf": 2.083333333333333
                  }
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
                            "Mediator.html#defaultChannel": {
                              "ref": "Mediator.html#defaultChannel",
                              "tf": 8.333333333333332
                            }
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
                                  "Mediator.html#undelegateEvents": {
                                    "ref": "Mediator.html#undelegateEvents",
                                    "tf": 712.5
                                  }
                                }
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
                    "Mediator.html#undelegateEvents": {
                      "ref": "Mediator.html#undelegateEvents",
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
                                      "Mediator.html#unsetSubscriptions": {
                                        "ref": "Mediator.html#unsetSubscriptions",
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
                              "Mediator.html#unsetSubscriptions": {
                                "ref": "Mediator.html#unsetSubscriptions",
                                "tf": 16.666666666666664
                              },
                              "Mediator.html#unsubscribe": {
                                "ref": "Mediator.html#unsubscribe",
                                "tf": 670
                              }
                            }
                          }
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
      "length": 213
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
      "child",
      "class",
      "colleagu",
      "colleague#medi",
      "colleague#removemediatormessagequeu",
      "colleague#sendmessag",
      "colleague#setmediatormessagequeu",
      "commun",
      "context",
      "conveni",
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
      "loos",
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
      "options:&lt;/br/&gt",
      "pattern",
      "present",
      "properti",
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
      "support",
      "through",
      "trigger",
      "undelegateev",
      "unset",
      "unsetsubscript",
      "unsubscrib",
      "view"
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
      "description": "Colleague View — The 'child' view. The Colleague communicates with other Colleagues through its Mediator. Supported options:&lt;/br/&gt; mediator - A mediator for this view",
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
      "description": "Property of the mediator"
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
    "Mediator.html": {
      "id": "Mediator.html",
      "kind": "class",
      "title": "Mediator",
      "longname": "Mediator",
      "name": "Mediator",
      "tags": "Mediator",
      "summary": "",
      "description": "Mediator View - The mediator in the Mediator Pattern The mediator defines the interface for communication between colleague views. Loose coupling between colleague objects is achieved by having colleagues communicate with the Mediator, rather than with each other. [Mediator]",
      "body": ""
    },
    "Mediator.html#mediator": {
      "id": "Mediator.html#mediator",
      "kind": "member",
      "title": "mediator",
      "longname": "Mediator#mediator",
      "name": "mediator",
      "tags": "Mediator#mediator mediator",
      "summary": "",
      "description": "Property of the mediator"
    },
    "Mediator.html#subscriptions": {
      "id": "Mediator.html#subscriptions",
      "kind": "member",
      "title": "subscriptions",
      "longname": "Mediator#subscriptions",
      "name": "subscriptions",
      "tags": "Mediator#subscriptions subscriptions",
      "summary": "",
      "description": "Subscriptions"
    },
    "Mediator.html#channels": {
      "id": "Mediator.html#channels",
      "kind": "member",
      "title": "channels",
      "longname": "Mediator#channels",
      "name": "channels",
      "tags": "Mediator#channels channels",
      "summary": "",
      "description": "Property for Channels"
    },
    "Mediator.html#defaultChannel": {
      "id": "Mediator.html#defaultChannel",
      "kind": "member",
      "title": "defaultChannel",
      "longname": "Mediator#defaultChannel",
      "name": "defaultChannel",
      "tags": "Mediator#defaultChannel defaultChannel",
      "summary": "",
      "description": "Get the default channel Convenience method for _.channel = null;"
    },
    "Mediator.html#defaultIdentifier": {
      "id": "Mediator.html#defaultIdentifier",
      "kind": "member",
      "title": "defaultIdentifier",
      "longname": "Mediator#defaultIdentifier",
      "name": "defaultIdentifier",
      "tags": "Mediator#defaultIdentifier defaultIdentifier",
      "summary": "",
      "description": "Get the default identifier"
    },
    "Mediator.html#sendMessage": {
      "id": "Mediator.html#sendMessage",
      "kind": "function",
      "title": "sendMessage( message, data )",
      "longname": "Mediator#sendMessage",
      "name": "sendMessage",
      "tags": "Mediator#sendMessage sendMessage",
      "summary": "",
      "description": "Send a message to the mediator's queue"
    },
    "Mediator.html#setMediatorMessageQueue": {
      "id": "Mediator.html#setMediatorMessageQueue",
      "kind": "function",
      "title": "setMediatorMessageQueue( mediator )",
      "longname": "Mediator#setMediatorMessageQueue",
      "name": "setMediatorMessageQueue",
      "tags": "Mediator#setMediatorMessageQueue setMediatorMessageQueue",
      "summary": "",
      "description": "Set the mediator to this colleague"
    },
    "Mediator.html#removeMediatorMessageQueue": {
      "id": "Mediator.html#removeMediatorMessageQueue",
      "kind": "function",
      "title": "removeMediatorMessageQueue()",
      "longname": "Mediator#removeMediatorMessageQueue",
      "name": "removeMediatorMessageQueue",
      "tags": "Mediator#removeMediatorMessageQueue removeMediatorMessageQueue",
      "summary": "",
      "description": "Remove the mediator from this colleague"
    },
    "Mediator.html#delegateEvents": {
      "id": "Mediator.html#delegateEvents",
      "kind": "function",
      "title": "delegateEvents( event )",
      "longname": "Mediator#delegateEvents",
      "name": "delegateEvents",
      "tags": "Mediator#delegateEvents delegateEvents",
      "summary": "",
      "description": "Extend delegateEvents() to set subscriptions"
    },
    "Mediator.html#undelegateEvents": {
      "id": "Mediator.html#undelegateEvents",
      "kind": "function",
      "title": "undelegateEvents( event )",
      "longname": "Mediator#undelegateEvents",
      "name": "undelegateEvents",
      "tags": "Mediator#undelegateEvents undelegateEvents",
      "summary": "",
      "description": "Extend undelegateEvents() to unset subscriptions"
    },
    "Mediator.html#unsetSubscriptions": {
      "id": "Mediator.html#unsetSubscriptions",
      "kind": "function",
      "title": "unsetSubscriptions( subscriptions )",
      "longname": "Mediator#unsetSubscriptions",
      "name": "unsetSubscriptions",
      "tags": "Mediator#unsetSubscriptions unsetSubscriptions",
      "summary": "",
      "description": "Unsubscribe to each subscription"
    },
    "Mediator.html#observeColleague": {
      "id": "Mediator.html#observeColleague",
      "kind": "function",
      "title": "observeColleague( colleague, callback, channel, identifier )",
      "longname": "Mediator#observeColleague",
      "name": "observeColleague",
      "tags": "Mediator#observeColleague observeColleague",
      "summary": "",
      "description": "Observe a Colleague View - observe a Colleague and add to a channel"
    },
    "Mediator.html#observeColleagueAndTrigger": {
      "id": "Mediator.html#observeColleagueAndTrigger",
      "kind": "function",
      "title": "observeColleagueAndTrigger( colleague, channel, identifier )",
      "longname": "Mediator#observeColleagueAndTrigger",
      "name": "observeColleagueAndTrigger",
      "tags": "Mediator#observeColleagueAndTrigger observeColleagueAndTrigger",
      "summary": "",
      "description": "Observe a Colleague View - observe a Colleague and add to a channel and auto trigger events"
    },
    "Mediator.html#dismissColleague": {
      "id": "Mediator.html#dismissColleague",
      "kind": "function",
      "title": "dismissColleague( colleague, callback, channel, identifier )",
      "longname": "Mediator#dismissColleague",
      "name": "dismissColleague",
      "tags": "Mediator#dismissColleague dismissColleague",
      "summary": "",
      "description": "Dismiss a Colleague View - Remove a Colleague from the channel"
    },
    "Mediator.html#dismissColleagueTrigger": {
      "id": "Mediator.html#dismissColleagueTrigger",
      "kind": "function",
      "title": "dismissColleagueTrigger( colleague, channel, identifier )",
      "longname": "Mediator#dismissColleagueTrigger",
      "name": "dismissColleagueTrigger",
      "tags": "Mediator#dismissColleagueTrigger dismissColleagueTrigger",
      "summary": "",
      "description": "Dismiss a Colleague View - Remove a Colleague from the channel that has an auto trigger"
    },
    "Mediator.html#subscribe": {
      "id": "Mediator.html#subscribe",
      "kind": "function",
      "title": "subscribe( channel, callback, context, once, identifier )",
      "longname": "Mediator#subscribe",
      "name": "subscribe",
      "tags": "Mediator#subscribe subscribe",
      "summary": "",
      "description": "Subscribe to a channel"
    },
    "Mediator.html#publish": {
      "id": "Mediator.html#publish",
      "kind": "function",
      "title": "publish( channel, N )",
      "longname": "Mediator#publish",
      "name": "publish",
      "tags": "Mediator#publish publish",
      "summary": "",
      "description": "Trigger all callbacks for a channel"
    },
    "Mediator.html#unsubscribe": {
      "id": "Mediator.html#unsubscribe",
      "kind": "function",
      "title": "unsubscribe( channel, callback, context, identifier )",
      "longname": "Mediator#unsubscribe",
      "name": "unsubscribe",
      "tags": "Mediator#unsubscribe unsubscribe",
      "summary": "",
      "description": "Cancel subscription"
    },
    "Mediator.html#subscribeOnce": {
      "id": "Mediator.html#subscribeOnce",
      "kind": "function",
      "title": "subscribeOnce( channel, subscription, context, identifier )",
      "longname": "Mediator#subscribeOnce",
      "name": "subscribeOnce",
      "tags": "Mediator#subscribeOnce subscribeOnce",
      "summary": "",
      "description": "Subscribing to one event only"
    },
    "Mediator.html#getColleagues": {
      "id": "Mediator.html#getColleagues",
      "kind": "function",
      "title": "getColleagues( channel )",
      "longname": "Mediator#getColleagues",
      "name": "getColleagues",
      "tags": "Mediator#getColleagues getColleagues",
      "summary": "",
      "description": "Get All the Colleagues for a channel"
    },
    "Mediator.html#getChannel": {
      "id": "Mediator.html#getChannel",
      "kind": "function",
      "title": "getChannel( channel )",
      "longname": "Mediator#getChannel",
      "name": "getChannel",
      "tags": "Mediator#getChannel getChannel",
      "summary": "",
      "description": "Get a specific channel"
    }
  }
};