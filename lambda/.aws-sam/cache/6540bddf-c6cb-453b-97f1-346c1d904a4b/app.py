import logging
import json
import boto3


logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

translateApi = boto3.client("translate")

# Use a dictionary to map supported languages with their ISO639-1 codes
lang_map = {
    "Arabic": "ar",
    "Simplified Chinese": "zh",
    "Traditional Chinese": "zh-TW",
    "Czech": "cs",
    "English": "en",
    "French": "fr",
    "German": "de",
    "Italian": "it",
    "Japanese": "ja",
    "Portuguese": "pt",
    "Russian": "ru",
    "Spanish": "es",
    "Turkish": "tr",
}


def callTranslateApi(queryStringParameters):
    fromLanguage = queryStringParameters.get("fromLanguage")
    toLanguage = queryStringParameters.get("toLanguage")
    fromLanguageISO = lang_map[fromLanguage]
    toLanguageISO = lang_map[toLanguage]
    textToTranslate = queryStringParameters.get("textToTranslate")

    translationResponse = translateApi.translate_text(
        Text=textToTranslate,
        SourceLanguageCode=fromLanguageISO,
        TargetLanguageCode=toLanguageISO,
    )
    translatedText = str(translationResponse.get("TranslatedText"))
    logger.debug("Translated Text is={}".format(translatedText))
    print("Translation is: ", translatedText)
    return translatedText


def lambda_handler(event, context):
    # TODO implement
    translatedText = callTranslateApi(event.get("queryStringParameters"))
    logger.debug("event: {}".format(event))

    return {"statusCode": 200, "body": json.dumps(translatedText)}
