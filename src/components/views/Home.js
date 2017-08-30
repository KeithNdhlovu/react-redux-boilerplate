import React, { Component } from 'react'

import { connect } from "react-redux"
import { withRouter, NavLink } from 'react-router-dom'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'

import FeedList from '../general-components/FeedList'
import { actionTypes } from '../../constants'

const feeditems = [
    {
    "id": 1,
    "color": "#aab1c3",
    "image": "http://dummyimage.com/233x206.bmp/5fa2dd/ffffff",
    "header": "Hackett, Schimmel and Walker",
    "description": "Cathartes aura",
    "date": "3/8/2017",
    "tags": [
        {
        "color": "#129c8a",
        "description": "Oyoyo"
        },
        {
        "color": "#5229ac",
        "description": "Flashspan"
        }
    ]
    }, {
    "id": 2,
    "color": "#d5a9a9",
    "image": "http://dummyimage.com/100x100.jpg/ff4444/ffffff",
    "header": "Gusikowski, Hegmann and Stracke",
    "description": "Carduelis uropygialis",
    "date": "6/4/2017",
    "tags": [
        {
        "color": "#03d955",
        "description": "Skilith"
        },
        {
        "color": "#bc486e",
        "description": "Skippad"
        },
        {
        "color": "#03da86",
        "description": "Zoomdog"
        },
        {
        "color": "#40770c",
        "description": "Avavee"
        },
        {
        "color": "#e88d07",
        "description": "Izio"
        }
    ]
    }, {
    "id": 3,
    "color": "#4e8146",
    "image": "http://dummyimage.com/175x243.png/cc0000/ffffff",
    "header": "Gusikowski Inc",
    "description": "Vombatus ursinus",
    "date": "14/11/2016",
    "tags": [
        {
        "color": "#f251de",
        "description": "Voonix"
        },
        {
        "color": "#33a3a6",
        "description": "Tagcat"
        },
        {
        "color": "#97ce96",
        "description": "Oloo"
        },
        {
        "color": "#1e5ac9",
        "description": "Zoomcast"
        }
    ]
    }, {
    "id": 4,
    "color": "#df6eed",
    "image": "http://dummyimage.com/120x118.jpg/cc0000/ffffff",
    "header": "Steuber LLC",
    "description": "Bubo sp.",
    "date": "19/9/2016",
    "tags": [
        {
        "color": "#93dfe6",
        "description": "Npath"
        },
        {
        "color": "#d086c7",
        "description": "InnoZ"
        }
    ]
    }, {
    "id": 5,
    "color": "#e45eff",
    "image": "http://dummyimage.com/209x179.jpg/dddddd/000000",
    "header": "Schneider, Hane and Fisher",
    "description": "Bison bison",
    "date": "20/7/2017",
    "tags": [
        {
        "color": "#c982f4",
        "description": "Wordify"
        },
        {
        "color": "#3678f1",
        "description": "Linktype"
        },
        {
        "color": "#3399b4",
        "description": "Youspan"
        },
        {
        "color": "#b71b1f",
        "description": "Flashdog"
        },
        {
        "color": "#249420",
        "description": "Edgeclub"
        }
    ]
    }, {
    "id": 6,
    "color": "#1343cc",
    "image": "http://dummyimage.com/126x127.jpg/cc0000/ffffff",
    "header": "Trantow and Sons",
    "description": "Parus atricapillus",
    "date": "27/1/2017",
    "tags": [
        {
        "color": "#52612a",
        "description": "Rhynoodle"
        },
        {
        "color": "#d11892",
        "description": "Tazzy"
        },
        {
        "color": "#bdb69c",
        "description": "Youspan"
        },
        {
        "color": "#ecfdf7",
        "description": "Kwimbee"
        }
    ]
    }, {
    "id": 7,
    "color": "#70ff7c",
    "image": "http://dummyimage.com/234x199.jpg/5fa2dd/ffffff",
    "header": "Mayer LLC",
    "description": "Buteo galapagoensis",
    "date": "30/6/2017",
    "tags": [
        {
        "color": "#d0bc18",
        "description": "Einti"
        },
        {
        "color": "#b9ecca",
        "description": "Yodo"
        },
        {
        "color": "#734a39",
        "description": "Buzzbean"
        }
    ]
    }, {
    "id": 8,
    "color": "#f572e0",
    "image": "http://dummyimage.com/243x175.png/ff4444/ffffff",
    "header": "Crona, Walter and Heathcote",
    "description": "Agelaius phoeniceus",
    "date": "27/2/2017",
    "tags": [
        {
        "color": "#5dd793",
        "description": "Fliptune"
        },
        {
        "color": "#f31676",
        "description": "Pixonyx"
        },
        {
        "color": "#a126e0",
        "description": "Oba"
        },
        {
        "color": "#027794",
        "description": "Brightdog"
        },
        {
        "color": "#2f0204",
        "description": "Yambee"
        }
    ]
    }, {
    "id": 9,
    "color": "#5d0bcc",
    "image": "http://dummyimage.com/215x215.png/ff4444/ffffff",
    "header": "Lang, Okuneva and Rohan",
    "description": "Ceratotherium simum",
    "date": "12/11/2016",
    "tags": [
        {
        "color": "#432c9c",
        "description": "Avamba"
        },
        {
        "color": "#952b6d",
        "description": "Realpoint"
        }
    ]
    }, {
    "id": 10,
    "color": "#e023b1",
    "image": "http://dummyimage.com/152x139.jpg/cc0000/ffffff",
    "header": "Streich Inc",
    "description": "Sula dactylatra",
    "date": "11/3/2017",
    "tags": [
        {
        "color": "#56c56d",
        "description": "Devify"
        },
        {
        "color": "#665b5d",
        "description": "Zooveo"
        },
        {
        "color": "#28004c",
        "description": "Fivebridge"
        }
    ]
    }, {
    "id": 11,
    "color": "#623944",
    "image": "http://dummyimage.com/122x196.png/dddddd/000000",
    "header": "Upton-Will",
    "description": "Alligator mississippiensis",
    "date": "29/5/2017",
    "tags": [
        {
        "color": "#ac8da4",
        "description": "Babbleset"
        },
        {
        "color": "#57e98e",
        "description": "Skaboo"
        },
        {
        "color": "#2ebaf0",
        "description": "Npath"
        },
        {
        "color": "#90631e",
        "description": "Wordware"
        }
    ]
    }, {
    "id": 12,
    "color": "#29d5dd",
    "image": "http://dummyimage.com/140x125.png/dddddd/000000",
    "header": "Olson-Braun",
    "description": "Phaethon aethereus",
    "date": "26/1/2017",
    "tags": [
        {
        "color": "#a0eba7",
        "description": "Edgewire"
        },
        {
        "color": "#44c8f4",
        "description": "Viva"
        }
    ]
    }, {
    "id": 13,
    "color": "#9174e2",
    "image": "http://dummyimage.com/109x220.png/5fa2dd/ffffff",
    "header": "Ryan Inc",
    "description": "Lamprotornis nitens",
    "date": "11/4/2017",
    "tags": [
        {
        "color": "#20d454",
        "description": "Leenti"
        },
        {
        "color": "#a7482c",
        "description": "Quinu"
        },
        {
        "color": "#7d8a08",
        "description": "Ntags"
        },
        {
        "color": "#767e48",
        "description": "Fivechat"
        },
        {
        "color": "#691fcc",
        "description": "Gabvine"
        }
    ]
    }, {
    "id": 14,
    "color": "#df5477",
    "image": "http://dummyimage.com/189x246.png/cc0000/ffffff",
    "header": "Keebler Group",
    "description": "Ovis dalli stonei",
    "date": "26/3/2017",
    "tags": [
        {
        "color": "#8b2bc4",
        "description": "Plajo"
        },
        {
        "color": "#0e386b",
        "description": "Fivebridge"
        }
    ]
    }, {
    "id": 15,
    "color": "#2421a3",
    "image": "http://dummyimage.com/132x217.jpg/dddddd/000000",
    "header": "VonRueden-Purdy",
    "description": "Vulpes vulpes",
    "date": "19/12/2016",
    "tags": [
        {
        "color": "#966ee9",
        "description": "Realbridge"
        },
        {
        "color": "#843d99",
        "description": "Fanoodle"
        },
        {
        "color": "#6814af",
        "description": "Linkbuzz"
        }
    ]
    }, {
    "id": 16,
    "color": "#8bae09",
    "image": "http://dummyimage.com/140x150.jpg/ff4444/ffffff",
    "header": "Conroy-Barrows",
    "description": "Amphibolurus barbatus",
    "date": "28/5/2017",
    "tags": [
        {
        "color": "#1dbf3b",
        "description": "Yoveo"
        },
        {
        "color": "#89cc46",
        "description": "Divavu"
        }
    ]
    }, {
        "id": 17,
        "color": "#80d395",
        "image": "http://dummyimage.com/195x172.bmp/cc0000/ffffff",
        "header": "McLaughlin and Sons",
        "description": "Bettongia penicillata",
        "date": "12/7/2017",
        "tags": [
            {
            "color": "#2e9779",
            "description": "Oyondu"
            }
        ]
    }, {
        "id": 18,
        "color": "#9549f1",
        "image": "http://dummyimage.com/234x177.bmp/dddddd/000000",
        "header": "Reichel-Jast",
        "description": "Phascogale tapoatafa",
        "date": "23/8/2017",
        "tags": [
            {
            "color": "#7656a3",
            "description": "Divanoodle"
            }
        ]
    }, {
        "id": 19,
        "color": "#b16f54",
        "image": "http://dummyimage.com/227x100.png/ff4444/ffffff",
        "header": "Pfannerstill, McLaughlin and Swift",
        "description": "Stercorarius longicausus",
        "date": "10/4/2017",
        "tags": [
            {
            "color": "#e78568",
            "description": "Kimia"
            }
        ]
    }, {
        "id": 20,
        "color": "#4e3ed0",
        "image": "http://dummyimage.com/245x250.bmp/ff4444/ffffff",
        "header": "Streich Inc",
        "description": "Corvus albicollis",
        "date": "29/5/2017",
        "tags": [
            {
            "color": "#db03cf",
            "description": "Eamia"
            },
            {
            "color": "#ad3a0b",
            "description": "Twitterlist"
            },
            {
            "color": "#eec60d",
            "description": "BlogXS"
            },
            {
            "color": "#4b6cdb",
            "description": "Meeveo"
            },
            {
            "color": "#35e77d",
            "description": "Twitternation"
            }
        ]
    }
];

class Home extends Component {
    
    render() {
        
        const { organisation } = this.props;
        
        return (
            <div>
                <FeedList items={ feeditems }/>
            </div>
        );
    }
}

const state = (store) => {
  return {
      selected: store.organisation,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (organisation) => {    

    // We tell browser to remember
    dispatch(replace(organisation.ur));

    console.log(organisation)
    // we tell system to listen
    dispatch({type: actionTypes().ORGANISATION_NAVIGATION_CHANGED, payload: organisation});
  }
});

export default withRouter(connect(state, mapDispatchToProps)(Home));