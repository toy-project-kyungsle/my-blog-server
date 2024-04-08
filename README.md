## 블로그 서버 레포지토리

### 소개

#### ⭐⭐ 이 프로젝트는 라즈베리파이에서 실행되는 중입니다~! ⭐⭐

개인 블로그를 직접 만들어보기 위하여 제작한 블로그 서버 레포지토리입니다.

NestJS를 사용했으며, 노션과 비슷한 스타일로 작성 가능합니다. 기능은 아래와 같습니다.

- 글 추가, 삭제, 수정 API
- 글을 ID 혹은 카테고리 별로 조회하기

🔔 현재는 port 번호를 지우는 방법을 찾지 못해 해당 프로젝트가 보류 중입니다.

### 사용 방법

env에 API 포트 및 이미지 포트를 적어둡니다.

```md
MYSQL_HOST=...
MYSQL_PORT=...
MYSQL_USER=...
MYSQL_DATABASE="..."
MYSQL_PASSWORD="..."
HOST_PORT=...
```

이제 실행시키면 됩니다!

```shell
npm i
npm start
```

### 추후에 할 것?

- 도메인에서 포트 번호를 지우는 방법을 찾기.
  - 즉, 라즈베리파이 외부 IP로 접근했을 때 (80번 포트로 접근) SK 네트워크사 측에서 접근을 거부함. 이를 풀 방법을 찾아야 포트 번호를 지울 수 있을 것 같음.
