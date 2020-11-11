# SSAFY Gate

SSAFY Gate는 SSAFY 교육생들의 출석과 체온측정을 관리하는 프로님들을 위한 프로젝트입니다.

## 목록

- [시작하기](#시작하기)
- [기능](#기능)
- [개발 스택](#개발-스택)
- [개발 규칙](#개발-규칙)
- [개발 일정](#개발-일정)
- [구성원](#구성원)

## 시작하기

```sh
$ git clone https://lab.ssafy.com/s03-webmobile3-sub1/s03p12b308.git

$ cd S03P12B308

$ npm install -g yarn

$ yarn update

$ yarn dev
```

## 기능

- [ ] 로그인
- [ ] 명찰 인식
- [ ] 체온 측정
- [ ] 출석 체크
- [ ] 설문 조사
- [ ] 통계 자료

## 개발 스택

| Back - End | Front - End | DB               | HardWare                                         |
| ---------- | ----------- | ---------------- | ------------------------------------------------ |
| Node.js    | React       | Maria DB         | Sensor : Arduino [적외선 온도 측정 센서, 카메라] |
|            |             | Back-Server : PC | Front-Server : RaspberryPi                       |
|            |             |                  | Diplay & Input Device : 7 inch LCD Monitor       |

## 개발 규칙

```
master -> develop -> feature
```

- 1일 1commit

- commit message : "S03P12B308-[jira이슈번호][코멘트]"

- 작업 끝난 branch는 delete!

- 코드 최신화!

## 개발 일정

| 날짜       | 진행 사항                              |
| ---------- | -------------------------------------- |
| 2020-07-10 | 아이디어 회의                          |
| 2020-07-14 | 아이디어 회의 및 개별과제              |
| 2020-07-15 | H/W센서 주문 및 개별과제               |
| 2020-07-16 | 개별과제                               |
| 2020-07-17 | 개별과제                               |
| 2020-07-20 | 와이어프레임 및 ERD 작성               |
| 2020-07-21 | 스켈레톤 코드 분석                     |
| 2020-07-22 | 라즈베리파이 DB 구축                   |
| 2020-07-23 | Node.js-DB 연결 & Navigation 구현      |
| 2020-07-24 | react-Node.js-DB 연결 & skeleton build |

## 구성원

| 팀장   | 팀원                                   |
| ------ | -------------------------------------- |
| 신승혁 | 김경수, 김동욱, 김문석, 김학준, 이경석 |