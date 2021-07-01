module.exports = {
    "$schema": "http://json-schema.org/draft-07/schema",
    "$id": "http://example.com/example.json",
    "type": "object",
    "title": "The root schema",
    "description": "The root schema comprises the entire JSON document.",
    "default": {},
    "examples": [
        {
            "bookingid": 13,
            "booking": {
                "firstname": "Julia",
                "lastname": "Brown",
                "totalprice": 567,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2020-01-01",
                    "checkout": "2021-01-01"
                },
                "additionalneeds": "Breakfast,Lunch"
            }
        }
    ],
    "required": [
        "bookingid",
        "booking"
    ],
    "properties": {
        "bookingid": {
            "$id": "#/properties/bookingid",
            "type": "integer",
            "title": "The bookingid schema",
            "description": "An explanation about the purpose of this instance.",
            "default": 0,
            "examples": [
                13
            ]
        },
        "booking": {
            "$id": "#/properties/booking",
            "type": "object",
            "title": "The booking schema",
            "description": "An explanation about the purpose of this instance.",
            "default": {},
            "examples": [
                {
                    "firstname": "Julia",
                    "lastname": "Brown",
                    "totalprice": 567,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2020-01-01",
                        "checkout": "2021-01-01"
                    },
                    "additionalneeds": "Breakfast,Lunch"
                }
            ],
            "required": [
                "firstname",
                "lastname",
                "totalprice",
                "depositpaid",
                "bookingdates",
                "additionalneeds"
            ],
            "properties": {
                "firstname": {
                    "$id": "#/properties/booking/properties/firstname",
                    "type": "string",
                    "title": "The firstname schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "Julia"
                    ]
                },
                "lastname": {
                    "$id": "#/properties/booking/properties/lastname",
                    "type": "string",
                    "title": "The lastname schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "Brown"
                    ]
                },
                "totalprice": {
                    "$id": "#/properties/booking/properties/totalprice",
                    "type": "integer",
                    "title": "The totalprice schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": 0,
                    "examples": [
                        567
                    ]
                },
                "depositpaid": {
                    "$id": "#/properties/booking/properties/depositpaid",
                    "type": "boolean",
                    "title": "The depositpaid schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": false,
                    "examples": [
                        true
                    ]
                },
                "bookingdates": {
                    "$id": "#/properties/booking/properties/bookingdates",
                    "type": "object",
                    "title": "The bookingdates schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": {},
                    "examples": [
                        {
                            "checkin": "2020-01-01",
                            "checkout": "2021-01-01"
                        }
                    ],
                    "required": [
                        "checkin",
                        "checkout"
                    ],
                    "properties": {
                        "checkin": {
                            "$id": "#/properties/booking/properties/bookingdates/properties/checkin",
                            "type": "string",
                            "title": "The checkin schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "2020-01-01"
                            ]
                        },
                        "checkout": {
                            "$id": "#/properties/booking/properties/bookingdates/properties/checkout",
                            "type": "string",
                            "title": "The checkout schema",
                            "description": "An explanation about the purpose of this instance.",
                            "default": "",
                            "examples": [
                                "2021-01-01"
                            ]
                        }
                    },
                    "additionalProperties": true
                },
                "additionalneeds": {
                    "$id": "#/properties/booking/properties/additionalneeds",
                    "type": "string",
                    "title": "The additionalneeds schema",
                    "description": "An explanation about the purpose of this instance.",
                    "default": "",
                    "examples": [
                        "Breakfast,Lunch"
                    ]
                }
            },
            "additionalProperties": true
        }
    },
    "additionalProperties": true
}