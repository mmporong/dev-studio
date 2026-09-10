# 폐기된 자동화 (2026-09-11)

새벽 자동 실행 3건을 폐기했다. 사용자가 직접 쓰지 않는데도 Claude 5시간 사용 한도를 거의 전부 소진하고 있었다.

## 폐기 사유 — 실측 소모량

2026-09-11 04:27~06:41 구간을 세션 로그(`~/.claude/projects/**/*.jsonl`)에서 집계한 결과다.

| 작업 | 실행 시각 | 서브에이전트 | 요청 | 캐시읽기 | 캐시쓰기 | 출력 | 한도 비중 |
|---|---|---|---|---|---|---|---|
| `DailyStandup_ClaudeCode` | 04:27~05:05 | 7개 | 515 | 45.8M | 2.96M | 568K | 60% |
| `JobResearch_ClaudeCode` | 06:28~06:41 | 3개 | 362 | 29.6M | 1.67M | 147K | 39% |
| 사용자 실제 대화 | 06:39~ | 0 | 6 | 0.32M | 0.13M | 6K | 0.4% |
| **합계** | | **10개** | **883** | **75.8M** | **4.76M** | **720K** | |

요청 883건이 전부 Opus 5였다. 서브에이전트 10개가 각자 독립 컨텍스트를 들고 매 툴 호출마다 전체를 다시 청구해, 요청당 평균 86K 토큰이 캐시읽기로 나갔다.

2026-09-05에 `JobResearch_ClaudeCode`를 04시에서 06시로 옮겨 스탠드업과의 세션 한도 충돌을 없앴는데, 그 결과 **둘 다 죽지 않고 완주하면서 소모가 합산**됐다. 충돌하던 시절에는 뒤엣것이 한도로 죽어 이 비용이 드러나지 않았다.

## 폐기 대상

| 항목 | 조치 |
|---|---|
| Task `DailyStandup_ClaudeCode` | 삭제 (XML 백업 보관) |
| Task `JobResearch_ClaudeCode` | 삭제 (XML 백업 보관) |
| `.github/workflows/weekly-insights.yml` | 삭제 — 매주 월요일 cron. Actions에서 돌아 Claude 토큰은 쓰지 않았지만, 스탠드업이 멈춘 이상 이 리포만 단독으로 주간 커밋·배포·알림을 만들 이유가 없다 |
| `automation_healthcheck.py` | 두 작업의 감시·**자동 재등록** 항목과 `preflight_standup_last_result()` 제거 |

`automation_healthcheck.py`의 `MONITORED_TASKS`는 **작업이 없으면 재등록한다.** 이 항목을 남긴 채 Task만 지우면 다음 새벽 03:30에 되살아난다. 폐기 시 반드시 함께 지울 것.

## 남긴 것

- `deploy-pages.yml` — main push 트리거. 사이트 배포에 필요하다.
- `pr-validate.yml` — PR 트리거. Dependabot PR 무검증 병합을 막는다.
- 두 워크플로 모두 cron이 없어 자동 소모가 없다.

## 복원 방법

```powershell
# 예약 작업 (아카이브에 XML 백업)
schtasks /Create /XML "$HOME\.automation-retired-20260911\DailyStandup_ClaudeCode.xml" /TN "DailyStandup_ClaudeCode"
schtasks /Create /XML "$HOME\.automation-retired-20260911\JobResearch_ClaudeCode.xml" /TN "JobResearch_ClaudeCode"
```

- 스크립트·프롬프트·로그 원본: `$HOME\.automation-retired-20260911\`
- `weekly-insights.yml`: 이 커밋 직전 리비전에서 `git show <sha>^:.github/workflows/weekly-insights.yml`로 복구
- `automation_healthcheck.py` 원본: `$HOME\.automation-retired-20260911\automation_healthcheck.py.bak-before-retire`

복원하더라도 서브에이전트 수와 모델을 먼저 조정할 것. 7개 병렬 Opus 구성이 한도 소진의 직접 원인이다.

## 배경

스탠드업 프롬프트는 이미 정지된 Unity 게임 프로젝트(NumLink 66일, MeowBeat 76일 무활동, 9/5 기준)를 기준으로 설계돼 있었고, 2026-09-05 시점에 이미 폐기 후보로 분류된 상태였다.
