import { makeStyles } from '@material-ui/core/styles'
import { colors, newTypography } from '@static/theme'

const useStyles = makeStyles(() => ({
  paper: {
    background: 'transparent',
    boxShadow: 'none'
  },
  root: {
    background: colors.invariant.componentOut4,
    width: 266,
    borderRadius: 10,
    padding: 16
  },
  header: {
    ...newTypography.subtitle2,
    lineHeight: '16px',
    marginBottom: 16,
    color: colors.white.main
  },
  label: {
    ...newTypography.label3,
    color: colors.white.main
  },
  valueInput: {},
  autoButton: {
    width: 32,
    minWidth: 32,
    height: 17,
    ...newTypography.label3,
    borderRadius: 3,
    backgroundColor: colors.invariant.accent2,
    textTransform: 'none',
    color: colors.invariant.darkInfoText,

    '&:hover': {
      backgroundColor: colors.invariant.logoGreen
    }
  }
}))

export default useStyles
