import React from 'react'
import { BadgeStatus } from './Icon'
import { CustomTooltip } from '@remix-ui/helper'
import { FormattedMessage } from 'react-intl'
interface BadgeProps {
  badgeStatus?: BadgeStatus
}

// eslint-disable-next-line no-undef
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Badge ({ badgeStatus }: BadgeProps) {
  /**
   * resolve a classes list for @arg key
   * @param {Object} key
   * @param {Object} type
   */
  function resolveClasses (key: string, type: string) {
    let classes = 'remixui_status'
    switch (key) {
      case 'succeed':
        classes += ' fas fa-check-circle text-' + type + ' ' + 'remixui_statusCheck'
        break
      case 'edited':
        classes += ' fas fa-sync text-' + type + ' ' + 'remixui_statusCheck'
        break
      case 'loading':
        classes += ' fas fa-spinner text-' + type + ' ' + 'remixui_statusCheck'
        break
      case 'failed':
        classes += ' fas fa-exclamation-triangle text-' + type + ' ' + 'remixui_statusCheck'
        break
      default: {
        classes += ' badge badge-pill badge-' + type
      }
    }
    return classes
  }

  function checkStatusKeyValue (value: any, type: string) {
    if (value === 'succeed' || value === 'edited' || value === 'loading' || value === 'failed' ||
      typeof value === 'number' || type === 'warning' || type === 'error' || type === 'success' || type === 'info' || type === 'danger') {
      return true
    }
    return false
  }

  return (
    <>
      {
        badgeStatus && checkStatusKeyValue(badgeStatus.key, badgeStatus.type) ? (
          <CustomTooltip
            placement={'right'}
            tooltipClasses="text-nowrap"
            tooltipId="verticalItemsbadge"
            tooltipText={badgeStatus.pluginName && badgeStatus.pluginName === 'solidityStaticAnalysis' ? 'There are multiple warnings or errors that might need to be fixed.' :badgeStatus.title}
          >
            <i
              className={`${resolveClasses(badgeStatus.key, badgeStatus.type!)}`}
              aria-hidden="true"
            >
                  { badgeStatus.pluginName && badgeStatus.pluginName === 'solidityStaticAnalysis' ? <span>&nbsp;</span> : badgeStatus.text }
            </i>
          </CustomTooltip>
        ) : null
      }
    </>
  )
}

export default Badge