export type DeliveryStatus = 'On track' | 'At risk' | 'Completed'

export interface DeliveryProject {
  id: number
  name: string
  domain: string
  technology: string
  status: DeliveryStatus
  progress: number
  nextMilestone: string
  teamSize: number
}

export const deliveryProjects: DeliveryProject[] = [
  {
    id: 1,
    name: 'Core Banking Modernization',
    domain: 'Banking',
    technology: 'Java · Spring Boot · Angular',
    status: 'On track',
    progress: 78,
    nextMilestone: 'API migration',
    teamSize: 9
  },
  {
    id: 2,
    name: 'Insurance Claims Platform',
    domain: 'Insurance',
    technology: 'Java · Microservices · React',
    status: 'At risk',
    progress: 54,
    nextMilestone: 'Performance review',
    teamSize: 7
  },
  {
    id: 3,
    name: 'Public Services Portal',
    domain: 'Public sector',
    technology: 'Quarkus · PostgreSQL · Vue',
    status: 'On track',
    progress: 66,
    nextMilestone: 'Security testing',
    teamSize: 6
  },
  {
    id: 4,
    name: 'Automotive Integration Hub',
    domain: 'Automotive',
    technology: 'Kotlin · Kafka · Docker',
    status: 'Completed',
    progress: 100,
    nextMilestone: 'Production handover',
    teamSize: 5
  },
  {
    id: 5,
    name: 'Enterprise Reporting Suite',
    domain: 'Enterprise software',
    technology: 'Spring Boot · TypeScript · SQL',
    status: 'On track',
    progress: 83,
    nextMilestone: 'User acceptance test',
    teamSize: 8
  }
]
