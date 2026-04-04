import { useOffice } from '../contexts/OfficeContext'
import { currentProject, todayGoals, upcomingTasks } from '../data/agents'
import { AgentStatusCard } from '../components/office/AgentStatusCard'
import { OfficeMap } from '../components/office/OfficeMap'
import { PhaseHeader } from '../components/office/PhaseHeader'
import { TaskTicker } from '../components/office/TaskTicker'
import './PlaygroundPage.css'

export function PlaygroundPage() {
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
    <div className="playground page-enter">
      <PhaseHeader
        studioName="LIM Studio Dev Studio"
        projectName={currentProject.name}
        phaseLabel={phaseLabel}
        riskLabel={riskLabel}
      />

      <div className="playground__layout">
        <section className="playground__map-panel">
          <div className="playground__map-header">
            <div>
              <p className="playground__eyebrow">인터랙티브 데모</p>
              <h1>픽셀 사무실</h1>
            </div>
            <div className="playground__project-chip">
              <span>현재 프로젝트</span>
              <strong>{currentProject.phase}</strong>
              <small>{activeWorkers > 0 ? `${activeWorkers}명 작업 중` : '현재 진행 중인 작업 없음'}</small>
            </div>
          </div>

          <div className="playground__scene">
            <OfficeMap
              agents={officeAgents}
              selectedAgentId={selectedAgent?.id ?? selectedAgentId}
              onSelectAgent={setSelectedAgentId}
            />

            <div className="playground__toolbar">
              <div className="playground__sync-controls">
                <button
                  type="button"
                  className={`playground__btn playground__btn--toggle ${syncMode === 'auto' ? 'playground__btn--active' : ''}`}
                  onClick={() => setSyncMode(syncMode === 'auto' ? 'manual' : 'auto')}
                >
                  {syncMode === 'auto' ? '자동 동기화' : '수동 모드'}
                </button>
                {syncMode === 'auto' && (
                  <button type="button" className="playground__btn playground__btn--small" onClick={() => void forceSync()}>
                    새로고침
                  </button>
                )}
                {lastSyncTime && (
                  <span className="playground__sync-time">마지막 동기화: {lastSyncTime}</span>
                )}
                {syncError && (
                  <span className="playground__sync-error">{syncError}</span>
                )}
              </div>
              {syncMode === 'manual' && (
                <>
                  <button type="button" className="playground__btn" onClick={runWorkPulse}>
                    업무 라운드 진행
                  </button>
                  <button type="button" className="playground__btn" onClick={sendAllIdle}>
                    전원 대기 전환
                  </button>
                  <button
                    type="button"
                    className="playground__btn playground__btn--warn"
                    onClick={blockSelectedAgent}
                    disabled={activeScenarioIndex === null}
                  >
                    선택 에이전트 막힘 재현
                  </button>
                </>
              )}
            </div>
          </div>
        </section>

        <aside className="playground__sidebar">
          <section className="playground__panel">
            <div className="playground__panel-header">
              <div>
                <p className="playground__eyebrow">선택된 에이전트</p>
                <h2>상태 패널</h2>
              </div>
            </div>
            {selectedAgent ? <AgentStatusCard agent={selectedAgent} /> : null}
          </section>

          <section className="playground__panel">
            <div className="playground__panel-header">
              <div>
                <p className="playground__eyebrow">오늘의 목표</p>
                <h2>운영 보드</h2>
              </div>
            </div>
            <ul className="playground__checklist">
              {todayGoals.map((goal) => (
                <li key={goal}>{goal}</li>
              ))}
            </ul>
          </section>

          <section className="playground__panel">
            <div className="playground__panel-header">
              <div>
                <p className="playground__eyebrow">다음 작업</p>
                <h2>작업 목록</h2>
              </div>
            </div>
            <TaskTicker items={upcomingTasks} />
          </section>
        </aside>
      </div>
    </div>
  )
}
