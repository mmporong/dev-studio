import type { ProjectConfig } from '../../types/project'

export const numlinkProject: ProjectConfig = {
  id: 'numlink',
  name: 'NumLink (넘링크)',
  tagline: '숫자를 이어 그림을 완성하는 두뇌 퍼즐 200+ 스테이지',
  platform: 'Android (Google Play)',
  engine: 'Unity 6000.x (C#)',
  phase: 'AI 리팩토링 진행 중 (Phase 4-5) — ServiceLocator + GameEvents + SaveSystem 마이그레이션',
  risk: 'Singleton→ServiceLocator 전환 + 컴파일 확인 완료 후 Phase 6 킥 확정 필요',
  accent: '#3182f6',
}
