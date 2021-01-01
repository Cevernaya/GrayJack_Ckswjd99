# GrayJack_Ckswjd99
[![License](https://img.shields.io/badge/License-BSD_3--Clause-green?&style=flat)](https://github.com/Cevernaya/GrayJack_Ckswjd99/blob/master/LICENSE)

GrayJack은 BlackJack의 기본적인 룰만 따와서 간단히 만든 게임입니다.

객체지향에 대한 이해를 높이기 위해 단발성으로 진행된 프로젝트입니다.


## Install
1. 본 리포지토리를 클론합니다.
```
git clone https://github.com/Cevernaya/GrayJack_Ckswjd99.git
```
2. Node.js를 통해 main.js를 실행합니다.
```
node src/main
```


## Manual
처음에 딜러와 플레이어에게 두 장의 카드가 제공됩니다.

딜러의 첫 번째 카드는 플레이어에게 공개되지 않습니다.

플레이어의 동작은 서버에 아래와 같은 요청을 보냄으로써 실행할 수 있습니다.
* GET /turnGo : 딜러와 플레이어에게 카드를 한 장씩 돌립니다.
* GET /turnStop : 게임을 종료하고, 카드의 점수 합을 계산하여 승패를 결정합니다.

플레이어 카드의 점수 합이 21점을 초과하는 경우 플레이어가 패배합니다.

게임 종료 후, 딜러와 플레이어 중 카드의 점수 합이 21에 근접하는 쪽이 승리합니다. 딜러 카드의 점수 합이 21점을 초과하는 경우 플레이어가 승리합니다.


## License
본 프로젝트의 모든 결과물은 BSD 3-Clause를 따릅니다.


## Copyright
Copyrightⓒ 2021 Cevernaya, All rights reserved.

