Translator
==========

This is a simple translator api. It serves one route at the root. Port is set to run at `8080`.

## Req/Res
Given a post body in the form of:
```
{
  "from": "hablar",
  "target": "en"
}
```
`from` being the value intended for translation and `target` is the code for the language to translate into (in this example it is english). From the above example you will get a response body back in the from of:
```
{
  "translations": ["speak"]
}
```

## Setting up Google Translation Integration
Follow the instructions [here](https://cloud.google.com/docs/authentication/getting-started).

You'll need a `google_application_credentials.json` file setup off credentials from a signed-up for google cloud app.

The path to that json file needs to be set in a `.env` file. A `.env-sample` file exists in the repo
