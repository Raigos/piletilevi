import { useMemo } from 'react'

export const useEventStatus = events => {
  return useMemo(() => {
    const now = new Date()

    const counts = {
      active: 0,
      upcoming: 0,
      archived: 0,
    }

    const filtered = {
      active: [],
      upcoming: [],
      archived: [],
    }

    events.forEach(event => {
      if (!event?.startDate || !event?.endDate) {
        console.warn('Missing date fields:', event)
        return
      }

      try {
        const start = new Date(event.startDate)
        const end = new Date(event.endDate)

        if (end < now) {
          counts.archived++
          filtered.archived.push(event)
        } else if (start <= now && end >= now) {
          counts.active++
          filtered.active.push(event)
        } else if (start > now) {
          counts.upcoming++
          filtered.upcoming.push(event)
        }
      } catch (error) {
        console.error('Error processing event:', error)
      }
    })

    return {
      counts,
      filtered,
      getByStatus: status =>
        status === 'all' ? events : filtered[status] || [],
    }
  }, [events])
}
