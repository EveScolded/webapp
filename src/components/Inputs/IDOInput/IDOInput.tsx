import { Input } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

export interface IIDOInputProps {
  currencyIcon: string
  currencyShort: string
  onChange: (value: number) => void
  inputValue?: number
  balanceValue: number | string
  balanceCurrency: string
  changePercent: number
  bigNumberRightBottom: number | string
  onMaxClick: () => void
  className?: string
}

export const IDOInput: React.FC<IIDOInputProps> = ({
  currencyIcon,
  currencyShort,
  onChange,
  inputValue,
  balanceValue,
  balanceCurrency,
  changePercent,
  bigNumberRightBottom,
  onMaxClick
}) => {
  const classes = useStyles()
  const onChangeInput = (value: any) => {
    onChange(Number(value))
  }

  return (
    <div className={classes.container}>
      <div className={classes.spaceBetween}>
        <div className={classes.currency}>
          <img className={classes.currencyIcon} src={currencyIcon}></img>
          {currencyShort}
        </div>
        <Input
          type='number'
          onChange={onChangeInput}
          classes={{ input: classes.input }}
          placeholder='0.00000'
          value={inputValue}
        ></Input>
      </div>
      <div className={classes.spaceBetween}>
        <div className={classes.balance}>
          Balance: {balanceValue} {balanceCurrency}
          <button name='Max' onClick={onMaxClick} className={classes.maxButton}>
            Max
          </button>
        </div>
        <div className={classes.rightBottom}>
          <div
            className={`${classes.percentGeneral} ${
              changePercent > 0 ? classes.percentPlus : classes.percentMinus
            }`}
          >
            {changePercent.toString().replace('-', '- ')}%
          </div>
          <span className={classes.bigNumberRightBottom}>~ ${bigNumberRightBottom}</span>
        </div>
      </div>
    </div>
  )
}

export default IDOInput
