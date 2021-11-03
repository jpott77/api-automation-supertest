module.exports = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "data": {
                "launchesPast": [
                    {
                        "mission_name": "Starlink-15 (v1.0)",
                        "launch_date_local": "2020-10-24T11:31:00-04:00",
                        "launch_site": {
                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                        },
                        "links": {
                            "article_link": null,
                            "video_link": "https://youtu.be/J442-ti-Dhg"
                        }
                    }
                ]
            }
        }
    ],
    "required": [
        "data"
    ],
    "properties": {
        "data": {
            "$id": "#/properties/data",
            "type": "object",
            "title": "The data schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "launchesPast": [
                        {
                            "mission_name": "Starlink-15 (v1.0)",
                            "launch_date_local": "2020-10-24T11:31:00-04:00",
                            "launch_site": {
                                "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                            },
                            "links": {
                                "article_link": null,
                                "video_link": "https://youtu.be/J442-ti-Dhg"
                            }
                        }
                    ]
                }
            ],
            "required": [
                "launchesPast"
            ],
            "properties": {
                "launchesPast": {
                    "$id": "#/properties/data/properties/launchesPast",
                    "type": "array",
                    "title": "The launchesPast schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": [],
                    "examples": [
                        [
                            {
                                "mission_name": "Starlink-15 (v1.0)",
                                "launch_date_local": "2020-10-24T11:31:00-04:00",
                                "launch_site": {
                                    "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                                },
                                "links": {
                                    "article_link": null,
                                    "video_link": "https://youtu.be/J442-ti-Dhg"
                                }
                            }
                        ]
                    ],
                    "additionalItems": true,
                    "items": {
                        "$id": "#/properties/data/properties/launchesPast/items",
                        "anyOf": [
                            {
                                "$id": "#/properties/data/properties/launchesPast/items/anyOf/0",
                                "type": "object",
                                "title": "The first anyOf schema",
                                "description": "An explanation about the purpose of this instance.",
                                "default": {},
                                "examples": [
                                    {
                                        "mission_name": "Starlink-15 (v1.0)",
                                        "launch_date_local": "2020-10-24T11:31:00-04:00",
                                        "launch_site": {
                                            "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                                        },
                                        "links": {
                                            "article_link": null,
                                            "video_link": "https://youtu.be/J442-ti-Dhg"
                                        }
                                    }
                                ],
                                "required": [
                                    "mission_name",
                                    "launch_date_local",
                                    "launch_site",
                                    "links"
                                ],
                                "properties": {
                                    "mission_name": {
                                        "$id": "#/properties/data/properties/launchesPast/items/anyOf/0/properties/mission_name",
                                        "type": "string",
                                        "title": "The mission_name schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": "",
                                        "examples": [
                                            "Starlink-15 (v1.0)"
                                        ]
                                    },
                                    "launch_date_local": {
                                        "$id": "#/properties/data/properties/launchesPast/items/anyOf/0/properties/launch_date_local",
                                        "type": "string",
                                        "title": "The launch_date_local schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": "",
                                        "examples": [
                                            "2020-10-24T11:31:00-04:00"
                                        ]
                                    },
                                    "launch_site": {
                                        "$id": "#/properties/data/properties/launchesPast/items/anyOf/0/properties/launch_site",
                                        "type": "object",
                                        "title": "The launch_site schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": {},
                                        "examples": [
                                            {
                                                "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
                                            }
                                        ],
                                        "required": [
                                            "site_name_long"
                                        ],
                                        "properties": {
                                            "site_name_long": {
                                                "$id": "#/properties/data/properties/launchesPast/items/anyOf/0/properties/launch_site/properties/site_name_long",
                                                "type": "string",
                                                "title": "The site_name_long schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": "",
                                                "examples": [
                                                    "Cape Canaveral Air Force Station Space Launch Complex 40"
                                                ]
                                            }
                                        },
                                        "additionalProperties": true
                                    },
                                    "links": {
                                        "$id": "#/properties/data/properties/launchesPast/items/anyOf/0/properties/links",
                                        "type": "object",
                                        "title": "The links schema",
                                        "description": "An explanation about the purpose of this instance.",
                                        "default": {},
                                        "examples": [
                                            {
                                                "article_link": null,
                                                "video_link": "https://youtu.be/J442-ti-Dhg"
                                            }
                                        ],
                                        "required": [
                                            "article_link",
                                            "video_link"
                                        ],
                                        "properties": {
                                            "article_link": {
                                                "$id": "#/properties/data/properties/launchesPast/items/anyOf/0/properties/links/properties/article_link",
                                                "type": "null",
                                                "title": "The article_link schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": null,
                                                "examples": [
                                                    null
                                                ]
                                            },
                                            "video_link": {
                                                "$id": "#/properties/data/properties/launchesPast/items/anyOf/0/properties/links/properties/video_link",
                                                "type": "string",
                                                "title": "The video_link schema",
                                                "description": "An explanation about the purpose of this instance.",
                                                "default": "",
                                                "examples": [
                                                    "https://youtu.be/J442-ti-Dhg"
                                                ]
                                            }
                                        },
                                        "additionalProperties": true
                                    }
                                },
                                "additionalProperties": true
                            }
                        ]
                    }
                }
            },
            "additionalProperties": true
        }
    },
    "additionalProperties": true
}