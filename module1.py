#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      Usuario
#
# Created:     30/11/2020
# Copyright:   (c) Usuario 2020
# Licence:     <your licence>
#-------------------------------------------------------------------------------
from __future__ import print_function
import json
import pprint
import sys

from datetime import datetime
from elasticsearch import Elasticsearch
from elasticsearch import helpers
def main():
   es= Elasticsearch()
   results= es.search(
        index = "reddit-mentalhealth",
        body={
            "query":{
                "match": {
                    "selftext": "anxiety"
                    }
                },
            "aggs":{
                "Términos significaticos":{
                    "significant_terms":{
                        "field": "selftext",
                        "size": 10,
                        "chi_square":{
                        },
                        "exclude":["i", "me"]
                    }
                }
            }

        }
   )
   print(str(results["hits"]["total"]) + " resultados para una query \"depression\"")

if __name__ == '__main__':
    main()
