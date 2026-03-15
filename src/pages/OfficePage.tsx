import { useOffice } from '../contexts/OfficeContext'
import { currentProject, todayGoals, upcomingTasks } from '../data/agents'
import {
  bridgeContracts,
  collectionPreview,
  launchBlockers,
  milestones,
} from '../data/meowbeat'
import { AgentStatusCard } from '../components/office/AgentStatusCard'
import { OfficeMap } from '../components/office/OfficeMap'
import { PhaseHeader } from '../components/office/PhaseHeader'
import { TaskTicker } from '../components/office/TaskTicker'
import './OfficePage.css'

export function OfficePage() {
  const {
    officeAgents,
    selectedAgent,
    selectedAgentId,
    setSelectedAgentId,
    activeScenarioIndex,
    activeWorkers,
    runWorkPulse,
    sendAllIdle,
    blockSelectedAgent,
    syncMode,
    setSyncMode,
    lastSyncTime,
    syncError,
    forceSync,
    phaseLabel,
    riskLabel,
  } = useOffice()

  return (
    <div className="office page-enter">
      <PhaseHeader
        studioName="LIM Studio Agent Office"
        projectName={currentProject.name}
        phaseLabel={phaseLabel}
        riskLabel={riskLabel}
      />

      <div className="office__layout">
        <section className="office__map-panel">
          <div className="office__map-header">
            <div>
              <p className="office__eyebrow">스타 오피스 레이아웃</p>
              <h1>픽셀 사무실</h1>
            </div>
            <div className="office__project-chip">
              <span>현재 프로젝트</span>
              <strong>{currentProject.phase}</strong>
              <small>{activeWorkers > 0 ? `${activeWorkers}명 작업 중` : '현재 진행 중인 작업 없음'}</small>
            </div>
          </div>

          <div className="office__scene">
            <OfficeMap
              agents={officeAgents}
              selectedAgentId={selectedAgent?.id ?? selectedAgentId}
              onSelectAgent={setSelectedAgentId}
            />

            <div className="office__toolbar">
              <div className="office__sync-controls">
                <button
                  type="button"
                  className={`office__btn office__btn--toggle ${syncMode === 'auto' ? 'office__btn--active' : ''}`}
                  onClick={() => setSyncMode(syncMode === 'auto' ? 'manual' : 'auto')}
                >
                  {syncMode === 'auto' ? '자동 동기화' : '수동 모드'}
                </button>
                {syncMode === 'auto' && (
                  <button type="button" className="office__btn office__btn--small" onClick={() => void forceSync()}>
                    새로고침
                  </button>
                )}
                {lastSyncTime && (
                  <span className="office__sync-time">마지막 동기화: {lastSyncTime}</span>
                )}
                {syncError && (
                  <span className="office__sync-error">{syncError}</span>
                )}
              </div>
              {syncMode === 'manual' && (
                <>
                  <button type="button" className="office__btn" onClick={runWorkPulse}>
                    업무 라운드 진행
                  </button>
                  <button type="button" className="office__btn" onClick={sendAllIdle}>
                    전원 대기 전환
                  </button>
                  <button
                    type="button"
                    className="office__btn office__btn--warn"
                    onClick={blockSelectedAgent}
                    disabled={activeScenarioIndex === null}
                  >
                    선택 에이전트 막힘 재현
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="office__footer-panels">
            <section className="office__briefing">
              <div className="office__briefing-header">
                <h2>브리핑 보드</h2>
              </div>
              <div className="office__contract-grid">
                {bridgeContracts.slice(0, 4).map((contract) => (
                  <article key={contract.name} className="office__contract-card card-hover">
                    <span className="office__contract-dir">{contract.direction}</span>
                    <h4>{contract.name}</h4>
                    <p>{contract.purpose}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="office__briefing">
              <div className="office__briefing-header">
                <h2>MeowBeat 진행</h2>
              </div>
              <div className="office__milestone-grid">
                {milestones.map((milestone) => (
                  <article key={milestone.title} className="office__milestone-card card-hover">
                    <div className="office__milestone-header">
                      <span className="office__milestone-index">{milestone.title.slice(1, 2)}</span>
                      <h4>{milestone.title}</h4>
                    </div>
                    <p>{milestone.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>

        <aside className="office__sidebar">
          <section className="office__panel">
            <div className="office__panel-header">
              <div>
                <p className="office__eyebrow">선택된 에이전트</p>
                <h2>상태 패널</h2>
              </div>
            </div>
            {selectedAgent ? <AgentStatusCard agent={selectedAgent} /> : null}
          </section>

          <section className="office__panel">
            <div className="office__panel-header">
              <div>
                <p className="office__eyebrow">오늘의 목표</p>
                <h2>운영 보드</h2>
              </div>
            </div>
            <ul className="office__checklist">
              {todayGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </section>

          <section className="office__panel">
            <div className="office__panel-header">
              <div>
                <p className="office__eyebrow">다음 작업</p>
                <h2>작업 목록</h2>
              </div>
            </div>
            <TaskTicker items={upcomingTasks} />
          </section>

          <section className="office__panel">
            <div className="office__panel-header">
              <div>
                <p className="office__eyebrow">고양이 목록</p>
                <h2>수집 미리보기</h2>
              </div>
            </div>
            <div className="office__collection-grid">
              {collectionPreview.map((item) => (
                <article key={item.tier} className="office__collection-card">
                  <span>{item.tier}</span>
                  <strong>{item.name}</strong>
                  <p>{item.mood}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="office__panel">
            <div className="office__panel-header">
              <div>
                <p className="office__eyebrow">출시 전 확인사항</p>
                <h2>주의 포인트</h2>
              </div>
            </div>
            <ul className="office__blocker-list">
              {launchBlockers.map((blocker) => (
                <li key={blocker}>{blocker}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
    </div>
  )
}
