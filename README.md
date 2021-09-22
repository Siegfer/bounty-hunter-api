# Bounty Hunters API

API using Express and Mongoose

## `hunterSchema` -> embedded into `Bounty`

| Attribute | Type | Validations & Constraints |
|---|---|---|
|name|String|none|
|origin | String| none| 

## `bountySchema` -> `Bounty`

|Attribute | Type | Validations & Constraints |
|---|---|---|
|name|String|required: true|
|wantedFor | String| minlength: 10, maxlength: 200|
|client|String| none|
|reward|Number | min:1000, max: 1000000|
|ship|String|none|
|hunters|[hunterSchema]|none|
|captured|Boolean|default: false|
|lastSeen|String|none|
