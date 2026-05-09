#!/bin/bash
# 스크립트 실행 시 명령어를 화면에 출력하지 않도록 설정
set -o errexit

# node 버전 설정
# node 실행 파일이 위치한 경로를 설정, 이 경로는 나중에 PATH 변수에 추가됨
NODE_PATH="/home/user/node_project/version/node-v22.14.0-linux-x64/bin"
# 현재 PATH 환경 변수에 NODE_PATH를 추가, 이렇게 하면 node 실행 파일을 현재 세션의 PATH에 포함
export PATH="$NODE_PATH:$PATH"

# node 버전 확인
node --version

# package.json 생성
# npm init -y

# next.js 수동 설치
# npm install next@latest react@latest react-dom@latest

# typescript 설정
# npm install --save-dev typescript @types/react @types/node
# npx tsc --init

# tailwind css 설치
# npm install tailwindcss @tailwindcss/postcss postcss