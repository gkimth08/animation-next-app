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

# .js 파일을 생성(emit)하지 않고, 타입 검사만 수행
# npx tsc --noEmit

# next.js 실행
# npm run dev

# app build
npm run build