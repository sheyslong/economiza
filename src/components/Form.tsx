import { TextField, Box, Button } from "@mui/material";
import { FC } from "react";
import { useForm, Controller } from 'react-hook-form'

interface Wallet {
    moneySaved: number
    monthlySalary: number
    investmentValue: number
    investmentStartDate: Date
    investmentEndDate: Date
}
const Form: FC = () => {
    const { handleSubmit, control } = useForm<Wallet>()

    const onSubmit = (wallet: Wallet) => {
        alert(wallet)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px'
    }}>
        <Controller
            name='moneySaved'
            control={control}
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, error },
            }) => (
                <TextField
                  id={name}
                  name={name}
                  value={value}
                  type='tel'
                  onChange={e => onChange(e.target.value)}
                  onBlur={onBlur}
                  placeholder='Dinheiro guardado'
                  variant='standard'
                />
            )}
          />
          <Controller
            name='monthlySalary'
            control={control}
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, error },
            }) => (
                <TextField
                  id={name}
                  name={name}
                  value={value}
                  type='tel'
                  onChange={e => onChange(e.target.value)}
                  onBlur={onBlur}
                  placeholder='Valor do seu salário mensal'
                  variant='standard'
                />
            )}
          />
          <Controller
            name='investmentValue'
            control={control}
            render={({
              field: { onChange, onBlur, value, name },
              fieldState: { invalid, error },
            }) => (
                <TextField
                  id={name}
                  name={name}
                  value={value}
                  type='tel'
                  onChange={e => onChange(e.target.value)}
                  onBlur={onBlur}
                  placeholder='Valor do investimento'
                  variant='standard'
                />
            )}
          />
            <Button variant='contained' onClick={onSubmit}>Enviar</Button>
    </Box>
    </form>

}

export default Form