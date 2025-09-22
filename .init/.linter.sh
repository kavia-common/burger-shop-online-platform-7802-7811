#!/bin/bash
cd /home/kavia/workspace/code-generation/burger-shop-online-platform-7802-7811/burger_shop_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

