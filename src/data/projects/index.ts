import type { ProjectConfig } from '../../types/project'
import { meowbeatProject } from './meowbeat'
import { numlinkProject } from './numlink'

export const projects: ProjectConfig[] = [meowbeatProject, numlinkProject]

export function getProjectById(id: string): ProjectConfig | undefined {
  return projects.find((p) => p.id === id)
}

export { meowbeatProject, numlinkProject }
